"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import controlImage from "@/assets/Solutions/S4hanaPrivateCloud/control.webp";

const POINTS = [
    {
        title: "Dedicated Infrastructure",
        desc: "SAP S/4HANA Private Cloud offers a dedicated environment, hosted on-premises or by a third party, exclusively serving one organization's needs.",
    },
    {
        title: "Control and Security",
        desc: "SAP S/4HANA Private Cloud provides enhanced control over data privacy, security, and compliance, tailored to specific organizational needs and regulations.",
    },
];

export default function ControlAndDedication() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col-reverse sm:flex-row gap-8 sm:gap-[48px] items-start">
            {/* Image on the left at sm+, after the text when stacked */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full sm:w-[38%] sm:max-w-[442px] aspect-[442/417] shrink-0 self-start overflow-hidden"
            >
                <Image src={controlImage} alt="Colleagues reviewing documents together beside their laptops" fill className="object-cover" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col gap-8 lg:gap-14 w-full sm:flex-1"
            >
                <h2 className="text-[#2E3033] text-xl font-semibold leading-[1.4]">
                    One environment, one organization: the private edition keeps your ERP isolated from other
                    tenants and governed by your own policies.
                </h2>
                <div className="flex flex-col gap-8">
                    {POINTS.map((point) => (
                        <div key={point.title} className="flex flex-col gap-3 border-l-[3px] border-[#2d8ec5] pl-5">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{point.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">{point.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
