"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import introImage from "@/assets/Services/GrowWithSap/intro.webp";

export default function GrowIntro() {
    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Simplify, Automate, Grow.</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Grow with SAP Methodology · Best Course of Action · Supervised Configuration Support
                </p>
            </motion.div>

            {/* Flex row rather than overlapping absolute panels: the image takes whatever
                width the text column leaves, so nothing has to be kept in sync per breakpoint. */}
            <div className="w-full flex flex-col sm:flex-row sm:items-stretch gap-8 sm:gap-16 lg:gap-[100px] sm:px-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full sm:w-[59.5%] bg-white flex items-center"
                >
                    <div className="flex flex-col gap-5 sm:gap-[34px] text-[#2E3033] w-full">
                        <h2 className="text-xl sm:text-2xl font-semibold">Scale on the SAP S/4HANA ERP Suite</h2>

                        <p className="text-base sm:text-lg text-[#55595E] font-light">
                            Grow with SAP enables businesses to scale efficiently by integrating and managing
                            finances, operations, and customer relationships through the powerful SAP S/4HANA ERP
                            suite, driving innovation and operational excellence.
                        </p>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl sm:text-2xl text-[#2E3033] font-semibold">Why Grow with SAP</h2>
                            <p className="text-base sm:text-lg text-[#2d8ec5] font-light">
                                Streamline and optimize operations.
                            </p>
                        </div>

                        <p className="text-base sm:text-lg text-[#55595E] font-light">
                            Grow with SAP helps businesses of all sizes accelerate their growth through SAP&apos;s
                            innovative solutions, offering scalable, flexible, and efficient tools to optimize key
                            operations.
                        </p>
                    </div>
                </motion.div>

                {/* sm:self-start opts the image out of the row's stretch so aspect-ratio drives
                    its height from its own width instead of the text column's height. */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full sm:flex-1 sm:self-start aspect-[4/3] sm:aspect-[27/29]"
                >
                    <Image src={introImage} alt="" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
