"use client";

import { motion } from "framer-motion";

const POINTS = [
    "One accountable contract for software, infrastructure, and technical operations",
    "A standardised ERP core that is simpler to upgrade",
    "Subscription costs in place of up-front hardware investment",
    "Regular SAP innovation delivered through cloud release cycles",
    "Process insight to prioritise improvements before and after go-live",
    "Room to extend on SAP BTP without modifying the core",
];

export default function RiseOutcomes() {
    return (
        <section className="w-full bg-[#f5f6f6]">
            <div className="w-full px-8 py-10 sm:p-16">
                {/* From xl the right column is auto (sized to its longest point) so every
                    point stays on one line; the heading column takes what is left. The
                    longest point is ~740px, too wide to fit beside the heading at lg. */}
                <div className="grid w-full lg:grid-cols-[1fr_auto_1fr] xl:grid-cols-[1fr_auto_auto] items-center gap-0">
                    {/* Left — centered in the stacked mobile layout; at lg it is the left
                        column of the three-column row and stays left aligned. */}
                    <div className="flex flex-col gap-2 max-sm:text-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-[28px] font-semibold text-[#2E3033]"
                        >
                            What Your Business Gains
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-4 text-[#55595E] text-base sm:text-lg font-light"
                        >
                            The practical outcomes of running SAP S/4HANA through Rise with SAP.
                        </motion.p>
                    </div>

                    {/* Middle rule — stretches with the list instead of a fixed height, so it
                        always matches however many points the right column holds. */}
                    <div className="hidden lg:flex justify-center self-stretch px-10">
                        <div className="w-0.5 h-full bg-[#2D8EC5]" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="justify-self-start max-w-[520px] xl:max-w-none max-sm:mt-4 max-sm:justify-self-center"
                    >
                        {/* pl-16 clears the divider in the lg row; mobile keeps just the 20px
                            the disc markers need. */}
                        <ul className="list-disc marker:text-[#7f7f7f] pl-16 max-lg:pl-5 space-y-3 text-[#55595E] text-base sm:text-lg font-light">
                            {POINTS.map((point) => (
                                <li key={point} className="xl:whitespace-nowrap">{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
