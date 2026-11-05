"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import devicesIcon from "@/assets/Services/InternetOfThings/icons/devices.svg";
import connectivityIcon from "@/assets/Services/InternetOfThings/icons/connectivity.svg";
import platformIcon from "@/assets/Services/InternetOfThings/icons/platform.svg";
import analyticsIcon from "@/assets/Services/InternetOfThings/icons/analytics.svg";

const LAYERS = [
    {
        icon: devicesIcon,
        title: "Devices & Sensors",
        desc: "Smart devices, wearables, sensors, and GPS trackers capture what is happening in the physical world.",
    },
    {
        icon: connectivityIcon,
        title: "Connectivity",
        desc: "Devices connect to the internet for seamless communication, control, and data exchange.",
    },
    {
        icon: platformIcon,
        title: "IoT Platform",
        desc: "A central platform manages devices remotely and triggers automated, data-driven actions.",
    },
    {
        icon: analyticsIcon,
        title: "Analytics & Insight",
        desc: "Real-time analytics turn device data into actionable insights and predictions.",
    },
];

function Arrow() {
    return (
        <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#2d8ec5]" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function IotArchitecture() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 px-8 sm:p-16 flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How a Connected Ecosystem Works</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Four layers that take a signal from a device to a decision.
                </p>
            </motion.div>

            {/* Desktop: cards with arrows between them; stacked cards below lg */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-0 w-full">
                {LAYERS.map((layer, index) => (
                    <div key={layer.title} className="contents">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex-1 min-w-0 bg-white border border-[#E2E5EA] flex flex-col gap-4 px-6 py-8 transition-[border-color,box-shadow] duration-300 hover:border-[#2d8ec5] hover:shadow-xl"
                        >
                            <div className="flex items-center justify-between">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={layer.icon} alt="" fill className="object-contain" />
                                </div>
                                <span className="text-[#2d8ec5] text-sm sm:text-base font-light">Layer 0{index + 1}</span>
                            </div>
                            <h2 className="text-[#2E3033] text-xl font-semibold">{layer.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{layer.desc}</p>
                        </motion.div>
                        {index < LAYERS.length - 1 && (
                            <div className="flex items-center justify-center lg:px-3 rotate-90 lg:rotate-0">
                                <Arrow />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
