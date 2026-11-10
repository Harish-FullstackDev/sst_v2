"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import dataMigrationPhoto from "@/assets/Services/MicrosoftMigration/benefit-data-migration.webp";
import changeManagementPhoto from "@/assets/Services/MicrosoftMigration/benefit-change-management.webp";
import ongoingSupportPhoto from "@/assets/Services/MicrosoftMigration/benefit-ongoing-support.webp";
import scalablePhoto from "@/assets/Services/MicrosoftMigration/benefit-scalable.webp";
import ecosystemPhoto from "@/assets/Services/MicrosoftMigration/benefit-ecosystem.webp";

const TABS = [
    {
        title: "Comprehensive Data Migration",
        desc: "Secure and accurate migration of your business data to Microsoft ERP solutions without disruption.",
        img: dataMigrationPhoto,
    },
    {
        title: "Change Management",
        desc: "Equip your team with the tools, training, and support to successfully adapt to the new system.",
        img: changeManagementPhoto,
    },
    {
        title: "Ongoing Support & Optimization",
        desc: "Post-migration support to ensure smooth operations, system optimization, and continuous improvement.",
        img: ongoingSupportPhoto,
    },
    {
        title: "Scalable Solutions",
        desc: "Ensure your ERP solution can grow with your business needs, providing flexibility and scalability.",
        img: scalablePhoto,
    },
    {
        title: "Microsoft Ecosystem Integration",
        desc: "Seamlessly connect your migrated ERP with Microsoft 365, Power BI, and Azure for a unified digital environment.",
        img: ecosystemPhoto,
    },
];

export default function MigrationBenefits() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % TABS.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const activeTab = TABS[active];

    return (
        <section className="w-full bg-white py-10 sm:py-16 px-8 sm:px-[64px] flex flex-col items-center gap-8 sm:gap-[45px]">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Key Benefits of ERP Migration to Microsoft
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    What a well-run migration delivers, from the first data load to long after go-live.
                </p>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-16 w-full">
                {/* Tabs — a gap-spaced column rather than a fixed h-96, so any tab count fits */}
                <div className="flex flex-col w-full lg:w-[34%] gap-2 lg:gap-4 shrink-0">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.title}
                            type="button"
                            onMouseEnter={() => {
                                setActive(index);
                                setIsPaused(true);
                            }}
                            onMouseLeave={() => {
                                setIsPaused(false);
                            }}
                            onClick={() => setActive(index)}
                            className={`text-left border-l-[3px] flex items-center min-h-12 py-2 px-3.5 transition-colors ${index === active
                                ? "border-[#2d8ec5] text-black"
                                : "border-[#6c6c6c] text-[#6c6c6c] opacity-70"
                                }`}
                        >
                            <h2 className="text-base sm:text-xl lg:text-2xl font-semibold">{tab.title}</h2>
                        </button>
                    ))}
                </div>

                {/* Image panel */}
                <div className="w-full lg:flex-1 min-w-0">
                    <div className="relative w-full aspect-[798/446] overflow-hidden">
                        {/* Every image stays mounted and cross-fades on opacity, so switching tabs never blanks the box; only the copy swaps, after the image has started to change. */}
                        <div className="absolute inset-0">
                            {TABS.map((tab, index) => (
                                <Image
                                    key={index}
                                    src={tab.img}
                                    alt={index === active ? "" : ""}
                                    fill
                                    className={`object-cover transition-opacity duration-700 ease-in-out ${index === active ? "opacity-100" : "opacity-0"}`}
                                    priority={index === 0}
                                />
                            ))}

                                {/* Gradient + overlaid text from sm up; on phones the image is too
                                    short to hold the copy, so it renders below instead. */}
                                <div className="absolute inset-0 hidden sm:block bg-gradient-to-t from-black/70 to-transparent" />
                                <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                                    className="absolute hidden sm:flex left-10 right-10 bottom-10 lg:left-[55px] lg:right-auto lg:bottom-[46px] lg:max-w-[462px] text-white flex-col gap-3"
                                >
                                    <h2 className="text-xl font-semibold">{activeTab.title}</h2>
                                    <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
                                        {activeTab.desc}
                                    </p>
                                </motion.div>
                                </AnimatePresence>
                            </div>
                        
                    </div>
                    <p className="sm:hidden mt-4 text-[#55595E] text-base font-light">{activeTab.desc}</p>
                </div>
            </div>
        </section>
    );
}
