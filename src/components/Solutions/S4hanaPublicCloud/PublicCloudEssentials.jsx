"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import essentialsPhoto from "@/assets/Solutions/S4hanaPublicCloud/essentials.webp";

const POINTS = [
    {
        title: "Scalability & Flexibility",
        desc: "SAP S/4HANA Public Cloud scales with business growth, offering flexible, industry-specific modules and seamless integration with other SAP solutions.",
    },
    {
        title: "Automation & Innovation",
        desc: "SAP S/4HANA Public Cloud receives automated updates, ensuring continuous innovation with the latest AI, machine learning, and analytics features.",
    },
];

export default function PublicCloudEssentials() {
    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[880px] mx-auto text-center mb-10 sm:mb-16 sm:px-[64px] lg:px-0"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Cloud ERP Built to Move at <span className="text-[#2D8EC5]">Your Pace</span>
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Embark on a journey towards digital transformation with SAP S/4HANA Public Cloud, the agile and
                    scalable ERP solution designed to propel your business into the future. Powered by cutting-edge
                    technology and delivered through the cloud, it empowers organizations of all sizes to streamline
                    operations, drive innovation, and stay ahead of the competition in today&apos;s fast-paced
                    business landscape.
                </p>
            </motion.div>

            {/* Flex row: text column at 59.5%, image fills the rest. sm:self-start lets the
                image's own aspect ratio drive its height instead of stretching to the text. */}
            <div className="w-full flex flex-col sm:flex-row sm:items-stretch gap-8 sm:gap-16 lg:gap-[100px] sm:px-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full sm:w-[59.5%] bg-white flex items-center"
                >
                    <div className="flex flex-col gap-5 sm:gap-[34px] w-full">
                        {POINTS.map((point) => (
                            <div key={point.title} className="flex flex-col gap-3 sm:gap-4">
                                <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{point.title}</h2>
                                <p className="text-[#55595E] text-base sm:text-lg font-light">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full sm:flex-1 sm:self-start aspect-[4/3] sm:aspect-[27/29]"
                >
                    <Image src={essentialsPhoto} alt="Team gathered around a laptop working through a plan" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
