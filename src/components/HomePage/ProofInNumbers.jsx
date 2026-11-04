"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
    { value: "400+", label: "Team of SAP Specialists" },
    { value: "200+", label: "SAP Engagements Delivered" },
    { value: "12+", label: "Industries Served" },
    { value: "5+", label: "Years of Experience" },
];

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

function AnimatedStat({ value }) {
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

export default function ProofInNumbers() {
    return (
        // Bottom hairline matches the Figma frame's border-b (top edge is already
        // provided by TechnologyPartner's trailing rule right above this section —
        // adding a top border here too would double that line).
        <section className="w-full bg-white border-b border-[#8794a3] px-6 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-10 sm:gap-16 "
            >
                <h2 className="text-[#10161d] text-[28px] font-medium text-center">
                    Numbers Worth Having a <span className="text-[#0061AF]">Conversation</span> About
                </h2>

                {/* Single row, never wraps to a second level — matches Figma. A 2x2 grid
                    below lg (1024px), where the one-row layout (~850px) would overflow.
                    Desktop: fixed 40px gap, group centered (not stretched full-width) —
                    matches Figma's "gap-[40px] items-center justify-center" row, with a
                    hairline divider (border/strong, self-stretch to row height) between
                    items instead of per-item side padding + divide-x. */}
                <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 lg:flex lg:flex-row lg:flex-nowrap lg:items-center lg:justify-center lg:gap-10">
                    {STATS.map((stat, index) => (
                        <div key={stat.label} className="contents">
                            {index > 0 && (
                                <div className="hidden w-px self-stretch bg-[#8794a3] lg:block" aria-hidden="true" />
                            )}
                            <div className="flex flex-col gap-2 items-start">
                                <AnimatedStat value={stat.value} />
                                {/* whitespace-nowrap only applies sm and up, where the row is a
                                    single line with room to spare — mobile uses a narrow 2-col
                                    grid instead (see the container comment above), and forcing
                                    a label like "SAP Engagements Delivered" onto one line there
                                    overflowed its cell and dragged the whole page's scrollable
                                    width wider, causing a small horizontal pan on mobile. */}
                                <p className="text-[#4a5568] text-lg font-light lg:whitespace-nowrap">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
