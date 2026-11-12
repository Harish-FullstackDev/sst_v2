"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import analyticsPhoto from "@/assets/Services/PowerBi/who-it-is-for.webp";

const BOXES = [
    {
        title: "Teams Living in Spreadsheets",
        desc: "When monthly reporting means exporting, pasting, and reconciling Excel files by hand, Power BI replaces that cycle with refreshed datasets and a single version of each number.",
    },
    {
        title: "Leaders Who Need One View",
        desc: "When finance, sales, and operations each report from their own system, a shared Power BI model brings ERP, CRM, and operational data into dashboards everyone reads the same way.",
    },
];

export default function WhoPowerBiIsFor() {
    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px] bg-[#f3f6f9]">
            {/* Two columns share the padded width via proportional flex-grow (≈654:475),
                so they scale together on any desktop width. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 w-full">
                <div className="flex flex-col gap-10 lg:gap-16 w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Who <span className="text-[#2D8EC5]">Power BI</span> Is For</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            The situations where a Power BI implementation pays off fastest.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-8 w-full lg:flex-1"
                    >
                        {BOXES.map((box) => (
                            <div
                                key={box.title}
                                className="bg-white w-full sm:flex-1 lg:h-full flex flex-col items-start gap-8 lg:gap-12 px-6 py-8"
                            >
                                <h2 className="text-[#2E3033] text-xl font-semibold">{box.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{box.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full h-[300px] sm:h-[420px] lg:h-auto lg:min-h-[440px] lg:flex-[475_1_0%] overflow-hidden"
                >
                    <Image src={analyticsPhoto} alt="Analyst interacting with Power BI dashboards on a large display" fill className="object-cover object-center" />
                </motion.div>
            </div>
        </section>
    );
}
