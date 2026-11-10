"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import quickSetupPhoto from "@/assets/Solutions/S4hanaPublicCloud/feature-quick-setup.webp";
import flexibleScalingPhoto from "@/assets/Solutions/S4hanaPublicCloud/feature-flexible-scaling.webp";
import cuttingEdgePhoto from "@/assets/Solutions/S4hanaPublicCloud/feature-cutting-edge.webp";
import instantInsightsPhoto from "@/assets/Solutions/S4hanaPublicCloud/feature-instant-insights.webp";
import collaborationPhoto from "@/assets/Solutions/S4hanaPublicCloud/feature-collaboration.webp";

const TABS = [
    {
        title: "Quick Setup",
        desc: "Get started quickly with a rapid deployment model designed to bypass complex setup processes. Businesses implement the solution swiftly, minimizing downtime and reducing the need for extensive configuration, so they can quickly begin leveraging the system's capabilities to enhance productivity and streamline operations.",
        img: quickSetupPhoto,
    },
    {
        title: "Flexible Scaling",
        desc: "Easily adapt to changing business needs with a flexible solution that supports seamless scalability and agility. Whether your organization is expanding or adjusting to shifts in demand, the system's modular design and configurable features let you respond swiftly and efficiently, maintaining optimal performance and meeting market requirements.",
        img: flexibleScalingPhoto,
    },
    {
        title: "Cutting-Edge Features",
        desc: "Leverage advanced tools such as predictive analytics and IoT integration to drive innovation and gain a competitive edge. Predictive analytics helps you anticipate trends and make data-driven decisions, while IoT integration enables real-time data collection and monitoring, optimizing operations and creating new opportunities through smart, connected technologies.",
        img: cuttingEdgePhoto,
    },
    {
        title: "Instant Insights",
        desc: "Access real-time data and analytics instantly, empowering confident decision-making. With SAP's in-memory computing, businesses retrieve and analyze data in real time, gaining insight into operational performance, customer behavior, and market trends, so they can make proactive adjustments and strategic decisions based on current, accurate information.",
        img: instantInsightsPhoto,
    },
    {
        title: "Improved Collaboration",
        desc: "Foster teamwork with intuitive interfaces and seamless integration across SAP solutions. User-friendly interfaces help teams work efficiently across departments, while integration with other SAP applications streamlines workflows and keeps data consistent, enabling a unified approach to business processes that improves productivity and alignment.",
        img: collaborationPhoto,
    },
];

export default function PublicCloudFeatures() {
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
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] flex flex-col items-center gap-8 sm:gap-[45px]">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Features in S/4HANA Public Cloud
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Five capabilities that set the public cloud edition apart.
                </p>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 xl:gap-[100px] w-full">
                {/* Tabs: a gapped column sized by its content, not a fixed h-96, so five tabs fit */}
                <div className="flex flex-col w-full lg:w-[340px] xl:w-96 gap-2 lg:gap-6 shrink-0 lg:pt-4">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.title}
                            type="button"
                            onMouseEnter={() => {
                                setActive(index);
                                setIsPaused(true);
                            }}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => setActive(index)}
                            className={`text-left border-l-[3px] flex items-center min-h-12 px-3.5 transition-colors ${index === active
                                ? "border-[#2d8ec5] text-black"
                                : "border-[#6c6c6c] text-[#6c6c6c] opacity-70"
                                }`}
                        >
                            <h2 className="text-base sm:text-2xl font-semibold">{tab.title}</h2>
                        </button>
                    ))}
                </div>

                {/* Image panel. The description overlays the image only at xl, where the image
                    is tall enough to hold it; below xl it sits under the image so it never clips. */}
                <div className="w-full lg:flex-1 lg:min-w-0">
                    {/* Every image stays mounted and cross-fades on opacity, so switching tabs never blanks the box; only the copy swaps, after the image has started to change. */}
                    <div className="flex flex-col gap-5">
                            <div className="relative w-full aspect-[798/446] overflow-hidden bg-[#e6e6e6]">
                                {TABS.map((tab, index) => (
                                    <Image
                                        key={index}
                                        src={tab.img}
                                        alt={index === active ? tab.title : ""}
                                        fill
                                        sizes="(min-width: 1024px) 60vw, 100vw"
                                        className={`object-cover transition-opacity duration-700 ease-in-out ${index === active ? "opacity-100" : "opacity-0"}`}
                                        priority={index === 0}
                                    />
                                ))}

                                {/* Gradient */}
                                <div className="hidden xl:block absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                                <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                                    className="hidden xl:flex absolute left-[55px] bottom-[46px] w-[520px] text-white flex-col gap-3"
                                >
                                    <h2 className="text-xl font-semibold">{activeTab.title}</h2>
                                    <p className="text-white/90 text-lg font-light leading-relaxed">{activeTab.desc}</p>
                                </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="flex xl:hidden flex-col gap-3">
                                <h2 className="text-[#2E3033] text-xl font-semibold">{activeTab.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{activeTab.desc}</p>
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
    );
}
