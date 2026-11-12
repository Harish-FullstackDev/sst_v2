"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import qualityIcon from "@/assets/Services/SoftwareDevelopment/icons/quality.svg";
import testingIcon from "@/assets/Services/SoftwareDevelopment/icons/testing.svg";
import performanceIcon from "@/assets/Services/SoftwareDevelopment/icons/performance.svg";
import securityIcon from "@/assets/Services/SoftwareDevelopment/icons/security.svg";

const ITEMS = [
    {
        icon: qualityIcon,
        title: "Clean, Maintainable Code",
        desc: "Code reviews and shared standards keep the codebase readable and easy to extend.",
    },
    {
        icon: testingIcon,
        title: "Continuous Testing",
        desc: "Automated tests run with every change, catching defects early in the cycle.",
    },
    {
        icon: performanceIcon,
        title: "Performance by Design",
        desc: "Applications are built and tuned to stay fast and responsive as usage grows.",
    },
    {
        icon: securityIcon,
        title: "Security Built In",
        desc: "Secure coding practices and regular updates protect your software and your data.",
    },
];

export default function SoftwareQuality() {
    return (
        <section className="w-full bg-white py-10 px-8 sm:p-16 flex flex-col gap-10 sm:gap-14">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[767px]"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Engineering Standards</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Quality at <span className="text-[#2D8EC5]">Every Stage</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The practices that keep the software we deliver reliable, secure, and ready to grow.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#d3d5d8]">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="group flex flex-col gap-4 sm:gap-6 border-r border-b border-[#d3d5d8] px-6 py-8 sm:px-8 sm:py-10 transition-colors duration-300 hover:bg-[#f5f6f6]"
                    >
                        <Image src={item.icon} alt="" width={48} height={48} className="size-10 sm:size-12 transition-transform duration-300 group-hover:-translate-y-1" />
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light text-pretty">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
