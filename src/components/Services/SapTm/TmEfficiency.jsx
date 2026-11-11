"use client";

import { LuActivity, LuCalendarCheck, LuTimer, LuUsers } from "react-icons/lu";
import { motion } from "framer-motion";

const PILLARS = [
    {
        icon: LuTimer,
        label: "Automate",
        title: "No More Manual Entry",
        desc: "Time and materials are tracked automatically, freeing project managers from manual data entry.",
    },
    {
        icon: LuUsers,
        label: "Focus",
        title: "Better Resource Allocation",
        desc: "Managers can concentrate on optimizing performance, resource allocation, and overall project execution.",
    },
    {
        icon: LuActivity,
        label: "Anticipate",
        title: "Real-Time Insights",
        desc: "Teams proactively address potential issues and improve decision-making as the project runs.",
    },
    {
        icon: LuCalendarCheck,
        label: "Deliver",
        title: "On Time, Within Budget",
        desc: "Projects are completed on schedule, on budget, and with greater accuracy.",
    },
];

export default function TmEfficiency() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-14">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    How Can SAP T&amp;M Help Increase Project Efficiency?
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed">
                    SAP T&amp;M enhances project efficiency by automating the tracking of time and materials. With
                    real-time insights, teams can proactively address potential issues, improve decision-making, and
                    ensure that projects are completed on time, within budget, and with greater accuracy.
                </p>
            </motion.div>

            {/* Row of pillars over a top rule, each marked by a Lucide icon (same set as the other service pages) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                {PILLARS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="flex flex-col gap-3 border-t-2 border-[#2E3033] pt-5"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <item.icon aria-hidden="true" strokeWidth={1.5} className="size-10 sm:size-12 shrink-0 text-[#1C5F85]" />
                            <span className="text-[#55595E] text-sm sm:text-base font-light uppercase tracking-wide">
                                {item.label}
                            </span>
                        </div>
                        <h3 className="text-[#2E3033] text-lg sm:text-xl font-semibold pt-2">{item.title}</h3>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
