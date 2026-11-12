"use client";

import { motion } from "framer-motion";
import { LuActivity, LuHeartPulse, LuMapPin, LuMonitorSmartphone, LuWorkflow, LuWrench } from "react-icons/lu";

const SERVICES = [
    {
        icon: LuMonitorSmartphone,
        title: "Smart Device Management",
        desc: "Effortlessly monitor, control, and manage IoT-enabled devices remotely, including smart thermostats, lighting systems, and industrial machinery.",
    },
    {
        icon: LuActivity,
        title: "Real-Time Data Analytics",
        desc: "Utilize IoT-generated data for advanced analytics, enabling improved decision-making and operational efficiency.",
    },
    {
        icon: LuWrench,
        title: "Predictive Maintenance",
        desc: "Leverage sensors and analytics to predict and prevent equipment failures, minimizing downtime and optimizing resource allocation.",
    },
    {
        icon: LuWorkflow,
        title: "Automation & Control",
        desc: "Automate operations using data-driven triggers, like adjusting climate controls or optimizing machinery performance.",
    },
    {
        icon: LuMapPin,
        title: "Asset Tracking",
        desc: "Enhance logistics and supply chain efficiency by tracking assets in real-time using IoT sensors and GPS technology.",
    },
    {
        icon: LuHeartPulse,
        title: "Health Monitoring",
        desc: "Support remote health management with wearable IoT devices that track vital signs and enable timely interventions.",
    },
];

export default function IotServices() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[900px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    IoT Services Driving SST&apos;s <span className="text-[#2D8EC5]">Digital Transformation</span>
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The ways connected devices and their data put your operations to work.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E2E5EA] w-full">
                {SERVICES.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                        className="group relative flex flex-col gap-4 border-r border-b border-[#E2E5EA] px-6 sm:px-8 py-8 sm:py-10 overflow-hidden transition-colors duration-300 hover:bg-[#f5f6f6]"
                    >
                        {/* Top accent that draws in on hover */}
                        <span className="absolute top-0 left-0 h-[3px] w-full bg-[#2d8ec5] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        <service.icon aria-hidden="true" strokeWidth={1.5} className="size-10 sm:size-12 text-[#1C5F85]" />
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{service.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
