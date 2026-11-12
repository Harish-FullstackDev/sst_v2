"use client";

import { motion } from "framer-motion";
import { LuChartColumn, LuPencilRuler, LuPlug, LuSearch } from "react-icons/lu";

const STEPS = [
    {
        title: "Assess",
        desc: "Review how sales, marketing, and service teams work today and where customer data lives.",
        icon: LuSearch,
    },
    {
        title: "Design",
        desc: "Shape the CRM modules, processes, and channels around your customer journeys.",
        icon: LuPencilRuler,
    },
    {
        title: "Integrate",
        desc: "Connect SAP CRM with SAP ERP and back-end systems so customer data and processes stay synchronized.",
        icon: LuPlug,
    },
    {
        title: "Adopt",
        desc: "Enable teams with dashboards and reports, then refine the solution as the business grows.",
        icon: LuChartColumn,
    },
];

export default function CrmApproach() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-14">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[767px]"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Our Approach</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Deliver <span className="text-[#2D8EC5]">SAP CRM</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The stages that take customer processes from today&apos;s state to one connected platform.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        className="group flex flex-col"
                    >
                        {/* Step rail: the stage's Lucide icon on a line that links the stages */}
                        <div className="flex items-center gap-3">
                            <step.icon aria-hidden="true" strokeWidth={1.5} className="size-10 sm:size-12 shrink-0 text-[#1C5F85]" />
                            <div className="h-px flex-1 bg-[#d3dae2] relative overflow-hidden">
                                <div className="absolute inset-0 origin-left scale-x-0 bg-[#2d8ec5] transition-transform duration-700 ease-in-out group-hover:scale-x-100" />
                            </div>
                        </div>
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold mt-3">{step.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light mt-2 text-pretty">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
