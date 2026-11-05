"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewPhoto from "@/assets/Services/AmazonWebServices/overview.webp";

const CREDENTIALS = ["AWS Cloud Specialist", "Certified Solutions Architect", "Agile Deployment"];

const BOXES = [
    {
        title: "Beyond Traditional IT",
        desc: "Amazon Web Services (AWS) provides a cutting-edge cloud platform, surpassing traditional IT infrastructure with scalable resources, advanced analytics, and seamless integrations, empowering businesses to excel and innovate.",
    },
    {
        title: "Why AWS?",
        lead: "Elevate your IT infrastructure with AWS's vast cloud capabilities.",
        desc: "AWS offers unparalleled scalability, flexibility, and an extensive suite of services, enabling businesses to innovate faster, scale seamlessly, and optimize resources efficiently.",
    },
];

export default function AwsOverview() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] bg-[#f5f6f6]">
            {/* Two columns share the padded width by proportional flex-grow (~654:475)
                rather than fixed px, so they scale together at any desktop width. */}
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 w-full">
                <div className="flex flex-col gap-10 lg:gap-16 w-full lg:flex-[654_1_0%]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Adapt, Innovate, Succeed.</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            {CREDENTIALS.join(" • ")}
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
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{box.title}</h2>
                                <div className="flex flex-col gap-3">
                                    {box.lead && (
                                        <p className="text-[#2E3033] text-base sm:text-lg font-normal">{box.lead}</p>
                                    )}
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{box.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full h-[300px] sm:h-[420px] lg:h-auto lg:flex-[475_1_0%] lg:aspect-[475/563] overflow-hidden"
                >
                    <Image src={overviewPhoto} alt="Server racks in a cloud data centre" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
