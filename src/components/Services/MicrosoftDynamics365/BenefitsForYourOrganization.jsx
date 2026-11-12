"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import singleSourceIcon from "@/assets/Services/MicrosoftDynamics365/benefit-1.svg";
import financialCloseIcon from "@/assets/Services/MicrosoftDynamics365/benefit-2.svg";
import cloudFlexibilityIcon from "@/assets/Services/MicrosoftDynamics365/benefit-3.svg";
import roomToGrowIcon from "@/assets/Services/MicrosoftDynamics365/benefit-4.svg";

const CARDS = [
    {
        title: "One Source of Truth",
        desc: "Finance, sales, inventory, and projects share a single database, so teams stop re-keying data between disconnected tools.",
        icon: singleSourceIcon,
    },
    {
        title: "Faster Period-End",
        desc: "Automated postings, bank reconciliation, and multi-company consolidation shorten the month-end close.",
        icon: financialCloseIcon,
    },
    {
        title: "Cloud Flexibility",
        desc: "Delivered as a cloud service on Microsoft Azure, with regular updates and access from browser, desktop, or mobile.",
        icon: cloudFlexibilityIcon,
    },
    {
        title: "Room to Grow",
        desc: "Add users, companies, and extensions from Microsoft AppSource as the business expands into new markets.",
        icon: roomToGrowIcon,
    },
];

export default function BenefitsForYourOrganization() {
    return (
        <section className="w-full py-10 px-8 sm:p-16 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-14 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Benefits of <span className="text-[#2D8EC5]">Microsoft Dynamics 365</span> for Your Organization
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    What changes once finance and operations run on one connected business application.
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
