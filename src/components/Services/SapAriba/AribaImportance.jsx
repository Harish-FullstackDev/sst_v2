"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import importancePhoto from "@/assets/Services/SapAriba/importance.webp";

export default function AribaImportance() {
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
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Simplify, Automate, Collaborate.</p>
                    <h2 className="text-xl sm:text-[28px] text-[#2E3033] font-semibold leading-normal">
                        The Importance of <span className="text-[#2D8EC5]">SAP Ariba</span> for Business Success
                    </h2>

                    <div className="flex flex-col gap-4 pt-2 text-base sm:text-lg text-[#55595E] font-light leading-relaxed">
                        <p>
                            SAP Ariba enables businesses to optimize their procurement processes by connecting them
                            with a global network of suppliers. It streamlines sourcing, contract management, and
                            supplier collaboration, leading to cost savings, improved compliance, and enhanced
                            visibility.
                        </p>
                        <p>
                            With real-time insights and automated workflows, SAP Ariba drives efficiency, reduces
                            risks, and supports smarter decision-making for sustained business growth.
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
                    <Image src={importancePhoto} alt="Overhead view of a forklift moving stock through a warehouse aisle" fill className="object-cover" />
                </motion.div>
            </div>
        </section>
    );
}
