"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PATHS = [
    {
        title: "New Implementation",
        desc: "Start fresh on SAP S/4HANA with redesigned processes and clean master data.",
    },
    {
        title: "System Conversion",
        desc: "Convert an existing SAP ECC system, keeping its configuration, custom code, and history.",
    },
    {
        title: "Selective Data Transition",
        desc: "Carry chosen processes, organizational units, or years of data into a new landscape.",
    },
    {
        title: "Landscape Consolidation",
        desc: "Bring several ERP instances together in one private cloud environment.",
    },
];

export default function TransitionPaths() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        if (isPaused) return undefined;

        autoplayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % PATHS.length);
        }, 3500);

        return () => clearInterval(autoplayRef.current);
    }, [isPaused]);

    return (
        <section className="w-full py-10 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16 px-8 sm:px-[64px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Paths to <span className="text-[#2D8EC5]">SAP S/4HANA Private Cloud</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Whether you are starting new or moving an existing SAP system, there is a transition approach to
                    match.
                </p>
            </motion.div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {PATHS.map((path, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <motion.div
                            key={path.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={`relative px-8 sm:px-6 lg:px-8 py-10 sm:py-14 min-h-[260px] sm:min-h-[380px] lg:min-h-[480px] overflow-hidden transition-colors duration-300 border-[#8794A3]
                                ${isActive ? "text-white" : "text-[#2E3033]"}
                                border-t ${index === PATHS.length - 1 ? "border-b" : ""}
                                sm:border-b-0 ${index > 1 ? "sm:border-b" : ""} ${index % 2 === 0 ? "sm:border-r" : ""}
                                lg:border-b lg:border-r ${index === PATHS.length - 1 ? "lg:border-r-0" : ""}`}
                        >
                            <div
                                aria-hidden
                                className={`absolute inset-0 bg-[#002C4F] transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                            />
                            <div className="relative flex flex-col gap-4 sm:gap-6 lg:mt-12">
                                <h2 className="text-xl sm:text-2xl font-semibold leading-tight">{path.title}</h2>
                                <p className="text-base sm:text-xl font-light">{path.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
