"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import processFlowPhoto from "@/assets/Services/SapTm/process-flow.webp";

export default function TmOverview() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px] bg-[#f5f6f6]">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12 xl:gap-[120px]">
                {/* Image sits left on desktop, below the copy on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[520px] lg:max-w-[42%] shrink-0 aspect-[520/360] overflow-hidden"
                >
                    <Image src={processFlowPhoto} alt="Laptop showing code beside a phone and coffee mug on a desk" fill className="object-cover" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:flex-1 lg:min-w-0 flex flex-col gap-2"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">
                        Enhance and streamline project operations.
                    </p>
                    <h2 className="text-xl sm:text-[28px] text-[#2E3033] font-semibold leading-normal">Why <span className="text-[#2D8EC5]">SAP T&amp;M?</span></h2>

                    <div className="flex flex-col gap-4 pt-2 text-base sm:text-lg text-[#55595E] font-light leading-relaxed">
                        <p>
                            SAP T&amp;M streamlines project management with precise resource tracking, real-time cost
                            visibility, and integrated billing efficiency.
                        </p>
                        <p>
                            SAP T&amp;M provides accurate tracking of project costs and resources, integrates seamlessly
                            with billing systems, and offers real-time insights for efficient project management and
                            financial control.
                        </p>
                    </div>

                    <p className="pt-4 text-sm sm:text-base text-[#1C5F85] font-light uppercase tracking-wide">
                        SAP T&amp;M Specialist · Integrated Expense Management · Policy Compliance
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
