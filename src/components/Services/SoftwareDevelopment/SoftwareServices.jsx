"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import customSoftwarePhoto from "@/assets/Services/SoftwareDevelopment/custom-software.jpg";
import webDevelopmentPhoto from "@/assets/Services/SoftwareDevelopment/web-development.jpg";
import mobileAppsPhoto from "@/assets/Services/SoftwareDevelopment/mobile-apps.jpg";
import integrationPhoto from "@/assets/Services/SoftwareDevelopment/integration.jpg";
import maintenancePhoto from "@/assets/Services/SoftwareDevelopment/maintenance.jpg";
import consultingPhoto from "@/assets/Services/SoftwareDevelopment/consulting.jpg";

const SERVICES = [
    {
        image: customSoftwarePhoto,
        title: "Custom Software Development",
        desc: "Custom solutions tailored to unique business needs and challenges.",
    },
    {
        image: webDevelopmentPhoto,
        title: "Web Development",
        desc: "Creating and maintaining websites and web applications, including front-end and back-end development.",
    },
    {
        image: mobileAppsPhoto,
        title: "Mobile App Development",
        desc: "Designing and developing applications for mobile devices, including iOS and Android platforms.",
    },
    {
        image: integrationPhoto,
        title: "Software Integration",
        desc: "Integrating systems to ensure seamless data flow and cross-platform functionality.",
    },
    {
        image: maintenancePhoto,
        title: "Maintenance & Support",
        desc: "Providing ongoing updates, bug fixes, and ensuring software meets user needs and security.",
    },
    {
        image: consultingPhoto,
        title: "Consulting & Strategy",
        desc: "Offering expert advice on software, technology, and best practices for optimal performance.",
    },
];

const AUTOPLAY_INTERVAL = 2500;

// Desktop reveals one card at a time on a timer; hover takes over.
export default function SoftwareServices() {
    const [autoIndex, setAutoIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const activeIndex = hoveredIndex ?? autoIndex;

    useEffect(() => {
        if (hoveredIndex !== null) return;
        const id = setInterval(() => {
            setAutoIndex((i) => (i + 1) % SERVICES.length);
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(id);
    }, [hoveredIndex]);

    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[960px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How SST Delivers High-Quality Software Development</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    End-to-end services, from the first strategy conversation to long-term support.
                </p>
            </motion.div>

            {/* Mobile: static stacked cards, description always visible — no hover. */}
            <div className="flex sm:hidden flex-col gap-4">
                {SERVICES.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={service.image} alt={service.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <h2 className="text-white text-xl font-semibold">{service.title}</h2>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{service.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: auto-advancing reveal grid, hover takes over on demand. */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-[43px]">
                {SERVICES.map((service, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative aspect-[4/3] overflow-hidden"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""}`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/70" : "bg-black/20"}`}
                            />
                            <div className="absolute inset-0 flex items-start justify-start px-6 py-10 text-left">
                                <h2 className="text-white text-xl sm:text-2xl font-semibold">{service.title}</h2>
                            </div>
                            <div
                                className={`absolute inset-x-0 bottom-0 px-6 pb-6 grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-white/85 text-base sm:text-lg font-light pt-2">{service.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
