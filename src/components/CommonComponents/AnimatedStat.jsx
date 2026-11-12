"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Count-up stat number shared by the home page "Numbers Worth Having a
// Conversation About" and the About page "The Scale Behind The Practice".
// Splits e.g. "400+" into { prefix: "", number: 400, suffix: "+", decimals: 0 } so the
// count-up below can animate just the numeric part while reproducing the original
// formatting exactly once the animation finishes. Same mechanics as the AnimatedStat
// in ScalableAIDeployment.jsx (the more complete of the two counter implementations
// already in the codebase).
function parseStatValue(raw) {
    const match = raw.match(/^([^\d.]*)([\d.]+)(.*)$/);
    if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };
    const [, prefix, numberStr, suffix] = match;
    const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;
    return { prefix, number: parseFloat(numberStr), suffix, decimals };
}

export default function AnimatedStat({ value }) {
    const { prefix, number, suffix, decimals } = parseStatValue(value);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 1400;
        let start;
        let frame;

        const tick = (timestamp) => {
            if (start === undefined) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(number * eased);
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [isInView, number]);

    return (
        <p ref={ref} className="font-urbane text-[#2d8ec5] text-[28px] font-medium leading-normal">
            {prefix}
            {display.toFixed(decimals)}
            {suffix}
        </p>
    );
}

