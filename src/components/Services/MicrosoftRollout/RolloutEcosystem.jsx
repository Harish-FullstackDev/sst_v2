"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import microsoft365Logo from "@/assets/Services/MicrosoftRollout/icons/microsoft-365.svg";
import azureLogo from "@/assets/Services/MicrosoftRollout/icons/microsoft-azure.svg";
import dynamicsLogo from "@/assets/Services/MicrosoftRollout/icons/dynamics-365.svg";

const PLATFORMS = [
    {
        logo: microsoft365Logo,
        title: "Microsoft 365",
        desc: "Productivity and collaboration tools rolled out to every team, connected to the rest of your environment.",
    },
    {
        logo: azureLogo,
        title: "Microsoft Azure",
        desc: "Cloud infrastructure and services deployed to support new systems securely and at scale.",
    },
    {
        logo: dynamicsLogo,
        title: "Dynamics 365",
        desc: "Business applications deployed across sites and entities with consistent processes and data.",
    },
];

export default function RolloutEcosystem() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-14 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">One Unified Microsoft Environment</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Rollouts that connect seamlessly with Microsoft 365, Azure, and Dynamics 365 for a unified digital
                    environment.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 sm:gap-x-8 xl:gap-x-12 gap-y-16">
                {PLATFORMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col mt-10 border border-[#7f7f7f]/40 bg-white text-center transition-shadow duration-300 hover:shadow-xl"
                    >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 size-20 rounded-full bg-white border border-[#7f7f7f]/40 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                            <Image src={item.logo} alt="" width={44} height={44} className="size-11 object-contain" />
                        </div>
                        <div className="flex flex-col flex-1 gap-4 px-6 sm:px-8 pt-16 pb-10">
                            <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h3>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                        </div>
                        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[#2d8ec5] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
