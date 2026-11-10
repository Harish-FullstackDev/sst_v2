"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Solutions/S4hanaOnPremise/overview.webp";

export default function OnPremiseOverview() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:pt-[64px] sm:pb-8 flex flex-col sm:flex-row gap-8 sm:gap-[48px] items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full sm:flex-1"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    SAP&apos;s Next-Generation ERP,<br className="hidden lg:inline" /> Running on Your Own Infrastructure
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    S/4HANA On-Premises is a deployment option of SAP&apos;s next-generation enterprise resource
                    planning (ERP) suite. Unlock the full potential of your enterprise with SAP S/4HANA
                    On-Premises, the leading-edge ERP solution designed to elevate your business operations to new
                    heights.
                </p>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    Seamlessly integrating cutting-edge technology with unparalleled functionality, SAP S/4HANA
                    On-Premises empowers your organization to thrive in today&apos;s dynamic business landscape.
                </p>
            </motion.div>

            {/* sm:w-[42%] with a 518px cap (the donor's design width) keeps the image beside the
                text on tablets instead of a fixed 518px column squeezing the copy. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full sm:w-[42%] sm:max-w-[518px] aspect-[518/325] shrink-0 self-start overflow-hidden"
            >
                <Image src={overviewImage} alt="Project team smiling around a laptop in a meeting room" fill className="object-cover" />
            </motion.div>
        </section>
    );
}
