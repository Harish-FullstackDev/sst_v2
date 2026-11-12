"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import newEntityIcon from "@/assets/Services/SapRollout/icons/new-entity.svg";
import newSiteIcon from "@/assets/Services/SapRollout/icons/new-site.svg";
import acquisitionIcon from "@/assets/Services/SapRollout/icons/acquisition.svg";
import globalWavesIcon from "@/assets/Services/SapRollout/icons/global-waves.svg";

const CARDS = [
    {
        title: "New Country or Legal Entity",
        desc: "Bring a new subsidiary onto the group SAP system with its own company code, local tax and statutory reporting.",
        icon: newEntityIcon,
    },
    {
        title: "New Plant, Warehouse or Office",
        desc: "Extend the existing template to a new plant, distribution center or sales office without reworking the core.",
        icon: newSiteIcon,
    },
    {
        title: "Acquired Business",
        desc: "Move an acquired company off its legacy system and onto your standard SAP processes and master data.",
        icon: acquisitionIcon,
    },
    {
        title: "Wave-Based Global Deployment",
        desc: "Roll a global template out region by region, so each wave builds on the lessons of the one before.",
        icon: globalWavesIcon,
    },
];

export default function RolloutScenarios() {
    return (
        <section className="w-full py-10 px-8 sm:p-16 bg-[#f5f6f6]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-14 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Typical <span className="text-[#2D8EC5]">Rollout Scenarios</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The situations where a rollout, rather than a fresh implementation, is the right way to grow SAP.
                </p>
            </motion.div>

            <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-20">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col mt-10 border border-[#7f7f7f]/40 bg-white text-center transition-shadow duration-300 hover:shadow-xl"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[120px] h-[94px] bg-[#002C4F] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                            <Image src={card.icon} alt="" width={48} height={48} className="size-[48px]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-4 px-6 xl:px-8 pt-16 sm:pt-20 pb-10">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{card.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
