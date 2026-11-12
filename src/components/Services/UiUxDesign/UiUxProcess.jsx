"use client";

import { motion } from "framer-motion";
import { LuMousePointerClick, LuPackageCheck, LuPencilRuler, LuSearch, LuTarget } from "react-icons/lu";

const STEPS = [
    {
        icon: LuSearch,
        title: "Discover",
        desc: "Understand business goals, users, and their pain points through research and stakeholder input.",
    },
    {
        icon: LuTarget,
        title: "Define",
        desc: "Turn findings into personas, user journeys, and clear priorities for the experience.",
    },
    {
        icon: LuPencilRuler,
        title: "Design",
        desc: "Move from wireframes to a visual design that reflects the brand and stays easy to use.",
    },
    {
        icon: LuMousePointerClick,
        title: "Prototype & Test",
        desc: "Build interactive prototypes and validate them with real users before development.",
    },
    {
        icon: LuPackageCheck,
        title: "Deliver & Refine",
        desc: "Hand over specs and assets to developers, then refine the experience based on usage and feedback.",
    },
];

export default function UiUxProcess() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Our Design Process</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">From Insight to <span className="text-[#2D8EC5]">Interface</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    A user-centred, iterative path that keeps real people at the heart of every decision.
                </p>
            </motion.div>

            {/* Below lg: vertical timeline with the rule running through the icons. */}
            <ol className="relative flex lg:hidden w-full flex-col gap-8">
                <span className="absolute left-[22px] top-2 bottom-2 w-px bg-[#d3d5d8]" aria-hidden />
                {STEPS.map((step, index) => (
                    <motion.li
                        key={step.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="relative flex gap-5"
                    >
                        <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-[#2d8ec5] bg-white text-[#2d8ec5]">
                            <step.icon aria-hidden="true" strokeWidth={1.5} className="size-5" />
                        </span>
                        <div className="flex flex-col gap-1 pt-2">
                            <h3 className="text-[#2E3033] text-lg sm:text-xl font-semibold">{step.title}</h3>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{step.desc}</p>
                        </div>
                    </motion.li>
                ))}
            </ol>

            {/* Desktop: five columns joined by a horizontal rule through the icons. */}
            <ol className="relative hidden lg:grid grid-cols-5 gap-8 w-full">
                <span className="absolute left-[10%] right-[10%] top-[28px] h-px bg-[#d3d5d8]" aria-hidden />
                {STEPS.map((step, index) => (
                    <motion.li
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col items-center gap-4 text-center"
                    >
                        <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-[#2d8ec5] bg-white text-[#2d8ec5] transition-colors duration-300 group-hover:bg-[#2d8ec5] group-hover:text-white">
                            <step.icon aria-hidden="true" strokeWidth={1.5} className="size-6" />
                        </span>
                        <h3 className="text-[#2E3033] text-xl font-semibold">{step.title}</h3>
                        <p className="text-[#55595E] text-base font-light">{step.desc}</p>
                    </motion.li>
                ))}
            </ol>
        </section>
    );
}
