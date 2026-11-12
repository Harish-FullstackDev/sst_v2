"use client";

import { motion } from "framer-motion";
import AnimatedStat from "@/components/CommonComponents/AnimatedStat";

const STATS = [
    { value: "400+", label: "Team of SAP Specialists" },
    { value: "200+", label: "SAP Engagements Delivered" },
    { value: "12+", label: "Industries Served" },
    { value: "5+", label: "Years of Experience" },
];

export default function ProofInNumbers() {
    return (
        // Grey band (#f3f6f9) between the white sections above and below; the
        // colour change does the separating, so no hairlines on either edge.
        <section className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-10 sm:gap-16 "
            >
                <h2 className="text-[#10161d] text-[28px] font-semibold text-center">
                    Numbers Worth Having a <span className="text-[#2D8EC5]">Conversation</span> About
                </h2>

                {/* Single row, never wraps to a second level — matches Figma. A 2x2 grid
                    only on true mobile, where a one-row layout wouldn't fit at all.
                    Desktop: the row spans the full content width and each stat gets an
                    equal flex-1 column with its block centered in it, so the spare width
                    is shared out between the stats instead of piling up as empty space
                    on both sides of a tightly centered group. A hairline divider
                    (border/strong, self-stretch to row height) sits between columns. */}
                <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 xl:flex xl:flex-row xl:flex-nowrap xl:items-center xl:gap-10">
                    {STATS.map((stat, index) => (
                        <div key={stat.label} className="contents">
                            {index > 0 && (
                                <div className="hidden w-px self-stretch bg-[#8794a3] xl:block" aria-hidden="true" />
                            )}
                            <div className="flex justify-center xl:flex-1">
                                <div className="flex flex-col gap-2 items-center text-center">
                                    <AnimatedStat value={stat.value} />
                                    {/* whitespace-nowrap only applies sm and up, where the row is a
                                        single line with room to spare — mobile uses a narrow 2-col
                                        grid instead (see the container comment above), and forcing
                                        a label like "SAP Engagements Delivered" onto one line there
                                        overflowed its cell and dragged the whole page's scrollable
                                        width wider, causing a small horizontal pan on mobile. */}
                                    <p className="text-[#4a5568] text-lg font-light xl:whitespace-nowrap">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
