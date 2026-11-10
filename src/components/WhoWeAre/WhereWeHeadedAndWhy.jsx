"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import missionBg from "@/assets/WhoWeAre/mission_vision.webp";

// Layout: section title, then a photo with a translucent brand band across its
// lower edge carrying the four metrics (the number sits in the white circle where
// an icon would go, the card copy underneath), then Mission and Vision side by side.
// The metrics used to be their own section (StartedAroundGapNotProduct) and were
// folded in here when that section was removed.
const METRICS = [
    { value: "95%", description: "Customer satisfaction rate, reflecting our dedication" },
    { value: "87%", description: "Projects delivered on time, showcasing our commitment" },
    { value: "92%", description: "Client retention year over year, proving lasting trust" },
    { value: "78%", description: "Team productivity growth, driving innovation forward" },
];

const STATEMENTS = [
    {
        title: "Mission",
        description:
            "To give enterprises across the GCC a single, accountable partner for the technology their operations depend on, from the first SAP assessment through years of live production support. We measure our work by whether systems keep running the way they were designed to, long after the project team has moved on.",
    },
    {
        title: "Vision",
        description:
            "To be the enterprise technology practice GCC organizations turn to first, not because we cover every capability on a page, but because our SAP foundation, cloud engineering, and compliance fluency operate as one coordinated practice instead of five separate vendor relationships.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Splits e.g. "95%" into its numeric part and the text around it so only the
// number counts up, and the final render matches the original string exactly.
function parseStatValue(raw) {
    const match = raw.match(/^([^\d.]*)([\d.]+)(.*)$/);
    if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };
    const [, prefix, numberStr, suffix] = match;
    const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;
    return { prefix, number: parseFloat(numberStr), suffix, decimals };
}

function AnimatedStat({ value, className }) {
    const { prefix, number, suffix, decimals } = parseStatValue(value);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    // Starts at the real value so SSR / no-JS HTML always shows the true number;
    // the count-up is a cosmetic replay once it scrolls into view.
    const [display, setDisplay] = useState(number);

    useEffect(() => {
        if (!isInView) return;
        const duration = 1400;
        let start;
        let frame;
        const tick = (timestamp) => {
            if (start === undefined) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setDisplay(number * (1 - Math.pow(1 - progress, 3)));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [isInView, number]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {display.toFixed(decimals)}
            {suffix}
        </span>
    );
}

export default function WhereWeHeadedAndWhy() {
    return (
        <section className="w-full pt-10 sm:pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-8 sm:px-[64px]"
            >
                <h2 className="text-xl sm:text-[28px] font-semibold text-[#2E3033]">Where We&apos;re Headed, and Why</h2>
                <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">
                    Everything we build ties back to two commitments what we exist to do for clients today, and
                    where we intend to take the practice next.
                </p>
            </motion.div>

            {/* Photo with the metrics band laid over its lower edge. The spacer sets
                how much clear photo shows above the band; the band itself is
                translucent so the photo keeps reading through it. */}
            <div className="relative w-full overflow-hidden">
                <Image src={missionBg} alt="" fill sizes="100vw" className="object-cover" />
                <div className="h-[200px] sm:h-[320px] lg:h-[380px]" />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative bg-black/60 backdrop-blur-[2px] grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 px-6 sm:px-[64px] py-8 sm:py-10"
                >
                    {METRICS.map((metric) => (
                        <motion.div
                            key={metric.value}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.25)]">
                                <AnimatedStat
                                    value={metric.value}
                                    className="font-['Houschka_Pro'] text-lg sm:text-2xl font-semibold text-[#2d8ec5]"
                                />
                            </div>
                            <p className="mt-4 max-w-[240px] text-sm sm:text-base font-light text-white leading-relaxed">
                                {metric.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 px-8 py-10 sm:px-[64px] sm:py-16">
                {STATEMENTS.map((statement, index) => (
                    <motion.div
                        key={statement.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        className="flex flex-col items-center text-center"
                    >
                        <h3 className="text-xl sm:text-[28px] font-semibold text-[#2E3033]">{statement.title}</h3>
                        <span aria-hidden className="mt-3 block h-1 w-12 bg-[#2d8ec5]" />
                        <p className="mt-6 max-w-xl text-base sm:text-lg font-light text-[#55595E] leading-relaxed">
                            {statement.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
