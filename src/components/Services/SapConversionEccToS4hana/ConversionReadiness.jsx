"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import readinessCheckIcon from "@/assets/Services/SapConversionEccToS4hana/icons/readiness-check.svg";
import simplificationIcon from "@/assets/Services/SapConversionEccToS4hana/icons/simplification-items.svg";
import customCodeIcon from "@/assets/Services/SapConversionEccToS4hana/icons/custom-code.svg";
import sumDmoIcon from "@/assets/Services/SapConversionEccToS4hana/icons/sum-dmo.svg";

const ITEMS = [
    {
        icon: readinessCheckIcon,
        title: "SAP Readiness Check",
        desc: "We analyze your ECC system for relevant simplification items, add-ons, business functions and sizing before any plan is fixed.",
    },
    {
        icon: simplificationIcon,
        title: "Simplification Items",
        desc: "We work through mandatory changes such as Business Partner (CVI) for customers and vendors and the new Asset Accounting.",
    },
    {
        icon: customCodeIcon,
        title: "Custom Code Analysis",
        desc: "ABAP Test Cockpit checks show which custom objects must be adapted, retired or replaced with standard functionality.",
    },
    {
        icon: sumDmoIcon,
        title: "SUM With DMO",
        desc: "The Software Update Manager with Database Migration Option moves the database to SAP HANA and updates the software in one step.",
    },
];

export default function ConversionReadiness() {
    return (
        <section className="w-full bg-white pt-10 sm:pt-16 pb-10 sm:pb-16 px-8 sm:px-[64px] flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 w-full lg:flex-1"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Preparing ECC for Conversion</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    A system conversion succeeds or fails on preparation. These four checks tell us what has to
                    change in your ECC system before the technical conversion begins.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-10 w-full lg:flex-1">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                        className="flex flex-col gap-4 sm:gap-6"
                    >
                        <Image src={item.icon} alt="" width={48} height={48} />
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
