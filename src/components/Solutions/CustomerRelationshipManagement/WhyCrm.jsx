"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import whyImage from "@/assets/Solutions/CustomerRelationshipManagement/why.webp";

const REASONS = [
    {
        title: "Seamless Integration",
        desc: "SAP CRM integrates with ERP for unified customer data, synchronized processes, and enhanced operational efficiency.",
    },
    {
        title: "Comprehensive Functionality",
        desc: "SAP CRM manages sales, marketing, customer service, and analytics effectively.",
    },
    {
        title: "Scalability and Customization",
        desc: "SAP CRM scales and customizes for diverse business needs and environments.",
    },
];

export default function WhyCrm() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col justify-center gap-8 w-full lg:flex-1 min-w-0"
                >
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                            Why Choose Customer Relationship Management?
                        </h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            What SAP CRM adds to the way you win and keep customers.
                        </p>
                    </div>

                    <ul className="flex flex-col">
                        {REASONS.map((reason, index) => (
                            <li
                                key={reason.title}
                                className="group flex items-start gap-5 sm:gap-6 py-5 border-b border-[#d3d5d8] last:border-b-0"
                            >
                                <span className="text-[#2d8ec5] text-xl sm:text-2xl font-semibold leading-none pt-1 transition-transform duration-300 group-hover:translate-x-1">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="flex flex-col gap-1 min-w-0">
                                    <h3 className="text-[#2E3033] text-lg sm:text-xl font-semibold">{reason.title}</h3>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{reason.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[45%] lg:max-w-[600px] aspect-[4/3] lg:aspect-auto lg:min-h-[440px] shrink-0 overflow-hidden bg-[#565656]"
                >
                    <Image src={whyImage} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
