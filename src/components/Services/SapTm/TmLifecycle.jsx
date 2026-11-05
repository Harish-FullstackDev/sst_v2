"use client";

import { motion } from "framer-motion";

const STEPS = [
    { title: "Record", desc: "Employees log time against projects and tasks as work happens." },
    { title: "Track", desc: "Material and resource consumption is captured against the same project." },
    { title: "Calculate", desc: "Time and material postings roll up into transparent project costs." },
    { title: "Bill", desc: "Approved costs flow into billing, so invoices reflect the actual work done." },
    { title: "Monitor & Report", desc: "Progress, utilization, and profitability are reported in real time." },
];

export default function TmLifecycle() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">From Timesheet to Invoice</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    How SAP T&amp;M connects every hour and every material to cost, billing, and reporting.
                </p>
            </motion.div>

            {/* Mobile/tablet: vertical timeline */}
            <ol className="lg:hidden relative flex flex-col gap-8 pl-12">
                <span className="absolute left-[19px] top-2 bottom-2 w-px bg-[#D5D9DE]" aria-hidden="true" />
                {STEPS.map((step, index) => (
                    <motion.li
                        key={step.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="relative flex flex-col gap-1"
                    >
                        <span className="absolute -left-12 top-0 flex size-10 items-center justify-center rounded-full bg-[#1C5F85] text-white text-sm font-semibold">
                            {index + 1}
                        </span>
                        <h3 className="text-[#2E3033] text-lg sm:text-xl font-semibold pt-1.5">{step.title}</h3>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{step.desc}</p>
                    </motion.li>
                ))}
            </ol>

            {/* Desktop: horizontal connected steps */}
            <ol className="hidden lg:grid grid-cols-5 gap-6 relative">
                <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="absolute left-[10%] right-[10%] top-6 h-px bg-[#2d8ec5] origin-left"
                    aria-hidden="true"
                />
                {STEPS.map((step, index) => (
                    <motion.li
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: 0.2 + index * 0.12 }}
                        className="relative flex flex-col items-center text-center gap-4"
                    >
                        <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-white border-2 border-[#2d8ec5] text-[#1C5F85] text-lg font-semibold">
                            {index + 1}
                        </span>
                        <h3 className="text-[#2E3033] text-xl font-semibold">{step.title}</h3>
                        <p className="text-[#55595E] text-base xl:text-lg font-light">{step.desc}</p>
                    </motion.li>
                ))}
            </ol>
        </section>
    );
}
