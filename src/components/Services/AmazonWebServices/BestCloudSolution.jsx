"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bestCloudImage from "@/assets/Services/AmazonWebServices/best-cloud.webp";

export default function BestCloudSolution() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col-reverse lg:flex-row gap-8 lg:gap-[48px] items-start lg:items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full lg:w-[40%] lg:max-w-[520px] aspect-[442/417] shrink-0 overflow-hidden"
            >
                <Image src={bestCloudImage} alt="Network infrastructure in a data centre" fill className="object-cover" />
            </motion.div>

            {/* Image on the left, text on the right; the image drops below the text on mobile. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col gap-8 sm:gap-12 w-full lg:flex-1"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold leading-[1.4]">
                    What Makes AWS the Best Cloud Solution for Your Business?
                </h2>
                <div className="flex flex-col gap-4 text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    <p>
                        AWS offers unmatched scalability, reliability, and a vast range of services to meet diverse
                        business needs. With cutting-edge tools for AI, machine learning, and data analytics, AWS
                        empowers organizations to innovate faster.
                    </p>
                    <p>
                        Its global infrastructure, robust security, and cost-effective solutions enable businesses to
                        optimize operations, drive growth, and stay competitive in a dynamic market.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
