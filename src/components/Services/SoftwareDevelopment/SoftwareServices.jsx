"use client";

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
        title: "Custom Software Development",
        desc: "Custom solutions tailored to unique business needs and challenges.",
        image: customSoftwarePhoto,
    },
    {
        title: "Web Development",
        desc: "Creating and maintaining websites and web applications, including front-end and back-end development.",
        image: webDevelopmentPhoto,
    },
    {
        title: "Mobile App Development",
        desc: "Designing and developing applications for mobile devices, including iOS and Android platforms.",
        image: mobileAppsPhoto,
    },
    {
        title: "Software Integration",
        desc: "Integrating systems to ensure seamless data flow and cross-platform functionality.",
        image: integrationPhoto,
    },
    {
        title: "Maintenance & Support",
        desc: "Providing ongoing updates, bug fixes, and ensuring software meets user needs and security.",
        image: maintenancePhoto,
    },
    {
        title: "Consulting & Strategy",
        desc: "Offering expert advice on software, technology, and best practices for optimal performance.",
        image: consultingPhoto,
    },
];

export default function SoftwareServices() {
    return (
        <section className="w-full bg-white py-10 px-8 sm:p-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[841px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    How SST Delivers High-Quality Software Development
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    End-to-end services, from the first strategy conversation to long-term support.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {SERVICES.map((service, index) => (
                    <motion.article
                        key={service.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="group flex flex-col border border-[#d3d5d8] bg-white transition-shadow duration-300 hover:shadow-xl"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={service.image}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <span className="absolute left-0 top-0 bg-[#00447A] px-4 py-2 text-white text-sm sm:text-base font-light">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>
                        <div className="flex flex-1 flex-col gap-3 px-6 py-7 sm:px-8 border-t-[3px] border-transparent transition-colors duration-300 group-hover:border-[#2d8ec5]">
                            <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{service.title}</h3>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{service.desc}</p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
