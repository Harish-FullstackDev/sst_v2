"use client";

import { motion } from "framer-motion";

const POINTS = [
    "Executive dashboards built on live SAP data",
    "Integrated financial planning, budgeting and forecasting",
    "What-if simulations for sales, workforce and operations",
    "Predictive forecasts powered by built-in machine learning",
    "Self-service reporting for business users",
    "One analytics layer across SAP and non-SAP sources",
];

export default function SacUseCases() {
    return (
        <section className="w-full border-t border-[#d3dae2]">
            <div className="w-full px-8 py-10 sm:p-16">
                {/* Right column is auto (sized to its longest point) so every point
                    stays on one line at lg; the heading column takes what is left. */}
                <div className="grid w-full lg:grid-cols-[1fr_auto_auto] items-center gap-0">

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
                            Where <span className="text-[#2D8EC5]">SAP Analytics Cloud</span> Delivers
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-4 text-[#55595E] text-[18px]"
                        >
                            Common ways organizations put SAP Analytics Cloud to work.
                        </motion.p>
                    </div>

                    {/* Middle Line */}
                    <div className="hidden lg:flex justify-center px-10">
                        <div className="w-0.5 h-60 bg-[#2D8EC5]" />
                    </div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        // Mobile: centered under the heading, and mt-4 on top of the
                        // description's own mb-4 makes the 32px gap the stacked layout needs
                        // (the grid is gap-0 because at lg these are side-by-side columns).
                        className="justify-self-start max-w-[560px] lg:max-w-none max-sm:mt-4 max-sm:justify-self-center"
                    >
                        {/* pl-16 is desktop-only: it clears the vertical divider in the lg
                            three-column row. Carried into the stacked layout it pushed the
                            list right of the centered heading. Mobile keeps just the 5 (20px)
                            the disc markers need to render inside the box. */}
                        <ul className="list-disc marker:text-[#7f7f7f] pl-16 max-sm:pl-5 space-y-3 text-[#55595E] text-base sm:text-lg font-light">
                            {POINTS.map((point) => (
                                <li key={point} className="lg:whitespace-nowrap">{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}