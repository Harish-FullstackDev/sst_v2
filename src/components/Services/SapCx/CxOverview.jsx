"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewPhoto from "@/assets/Services/SapCx/overview.webp";

export default function CxOverview() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] bg-[#f3f6f9]">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-[120px]">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[700px] flex flex-col gap-2"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Simplify, Automate, Delight.</p>
                    <h2 className="text-xl sm:text-[28px] text-[#2E3033] font-semibold leading-normal">
                        What Makes SAP CX the <span className="text-[#2D8EC5]">Right Choice</span> for Your Business?
                    </h2>
                    <p className="text-[#2E3033] text-base sm:text-lg font-light pt-1">
                        Enhance customer engagement and satisfaction.
                    </p>

                    <div className="flex flex-col gap-4 pt-2 text-base sm:text-lg text-[#55595E] font-light leading-relaxed">
                        <p>
                            SAP CX (Customer Experience) empowers businesses to deliver exceptional customer
                            experiences by integrating sales, marketing, commerce, and service into a unified
                            solution.
                        </p>
                        <p>
                            SAP CX enables businesses to deliver personalized, seamless customer experiences across
                            all channels. By providing real-time insights, SAP CX empowers businesses to respond
                            quickly to customer needs and stay ahead.
                        </p>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[467px] lg:max-w-[40%] lg:ml-auto shrink-0 aspect-[467/357] overflow-hidden"
                >
                    <Image src={overviewPhoto} alt="Customer satisfaction rating icons above a laptop keyboard" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
