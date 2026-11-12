"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import gainsImage from "@/assets/Solutions/CustomerRelationshipManagement/why.webp";

const GAINS = [
    { title: "Seamless Integration", desc: "SAP CRM integrates with ERP for unified customer data, synchronized processes, and enhanced operational efficiency." },
    { title: "Comprehensive Functionality", desc: "SAP CRM manages sales, marketing, customer service, and analytics effectively." },
    { title: "Scalability and Customization", desc: "SAP CRM scales and customizes for diverse business needs and environments." },
];

export default function WhyCrm() {
    return (
        <section className="w-full py-10 sm:py-[32px]">
            <div className="w-full bg-[#f3f6f9] flex flex-col items-center gap-10 sm:gap-16 px-6 sm:px-[64px] py-8 sm:py-[32px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[1074px] text-center"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Why Choose <span className="text-[#2D8EC5]">Customer Relationship Management?</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        What SAP CRM adds to the way you win and keep customers.
                    </p>
                </motion.div>
                <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-[47px]">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-4 sm:gap-[15px] w-full lg:flex-1"
                    >
                        <div className="relative w-full aspect-[546/440]">
                            <Image src={gainsImage} alt="Three colleagues reviewing customer details on a laptop" fill className="object-cover" />
                        </div>
                    </motion.div>
                    <div className="flex flex-col gap-8 sm:gap-10 lg:gap-0 lg:justify-between w-full lg:flex-1">
                        {GAINS.map((gain, index) => (
                            <motion.div
                                key={gain.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                                className="group flex flex-col gap-4 sm:gap-[23px] w-full"
                            >
                                <div className="flex flex-col gap-3 sm:gap-5">
                                    <h2 className="text-[#2E3033] text-xl font-semibold">{gain.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{gain.desc}</p>
                                </div>
                                <div className="relative w-[139px] h-[2px]">
                                    <div className="absolute left-0 top-1/2 w-full h-px -translate-y-1/2 bg-[#3d3d4e]/40" />
                                    <div className="absolute left-0 top-1/2 w-full h-[2px] -translate-y-1/2 origin-left bg-[#2D8EC5] scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
