"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import multiCountryIcon from "@/assets/Solutions/HumanCapitalManagement/Section_AIUseCase_Card1_Icon.svg";
import shiftIcon from "@/assets/Solutions/HumanCapitalManagement/Section_AIUseCase_Card2_Icon.svg";
import growthIcon from "@/assets/Solutions/HumanCapitalManagement/Section_AIUseCase_Card3_Icon.svg";
import landscapeIcon from "@/assets/Solutions/HumanCapitalManagement/Section_AIUseCase_Card4_Icon.svg";

const CARDS = [
    {
        title: "Multi-Country Workforces",
        desc: "Organizations paying and managing employees in several countries, where each location brings its own payroll, tax, and labor rules.",
        icon: multiCountryIcon,
    },
    {
        title: "Shift & Hourly Operations",
        desc: "Plants, retail, and field operations where time recording, overtime, and leave drive a large share of payroll accuracy.",
        icon: shiftIcon,
    },
    {
        title: "Growing Organizations",
        desc: "Businesses adding people, entities, or reporting lines faster than spreadsheets and manual HR processes can keep up with.",
        icon: growthIcon,
    },
    {
        title: "SAP ERP Landscapes",
        desc: "Companies already running SAP for finance and logistics that want HR data on the same integrated platform.",
        icon: landscapeIcon,
    },
];

export default function HcmScenarios() {
    return (
        <section className="w-full py-10 px-8 sm:p-16 bg-[#f3f6f9]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-14 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Who <span className="text-[#2D8EC5]">SAP HCM</span> Is Built For</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The situations where an integrated HR and payroll platform pays back fastest.
                </p>
            </motion.div>

            <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-20">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col mt-10 border border-[#7f7f7f]/40 bg-white text-center transition-shadow duration-300 hover:shadow-xl"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[120px] h-[94px] bg-[#0A3A52] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                            <Image src={card.icon} alt="" width={48} height={48} className="size-[48px]" />
                        </div>
                        <div className="flex flex-col flex-1 gap-4 px-8 pt-16 sm:pt-20 pb-10">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{card.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
