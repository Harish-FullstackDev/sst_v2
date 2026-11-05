"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import retail from "@/assets/Services/AiMl/icons/retail.svg";
import banking from "@/assets/Services/AiMl/icons/banking.svg";
import manufacturing from "@/assets/Services/AiMl/icons/manufacturing.svg";
import publicSector from "@/assets/Services/AiMl/icons/public-sector.svg";
import energy from "@/assets/Services/AiMl/icons/energy.svg";

const INDUSTRIES = [
    { name: "Retail & FMCG", icon: retail },
    { name: "Banking & Financial Services", icon: banking },
    { name: "Manufacturing", icon: manufacturing },
    { name: "Public Sector & Security", icon: publicSector },
    { name: "Oil, Gas & Energy", icon: energy },
];

export default function AiMlIndustries() {
    return (
        <section className="w-full bg-[#F5F6F6] py-10 px-8 sm:p-16">
            <div className="w-full mx-auto flex flex-col items-center gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[780px] mx-auto text-center"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Where AI &amp; ML Create Value</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Sectors where language, vision, and predictive models are put to work on everyday operations.
                    </p>
                </motion.div>

                {/* Wraps and centers instead of justify-between + nowrap, so the row never
                    overflows between sm and xl where five labels don't fit on one line. */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    className="hidden sm:flex flex-wrap w-full justify-center xl:justify-between items-center gap-x-10 gap-y-6"
                >
                    {INDUSTRIES.map((industry) => (
                        <div key={industry.name} className="flex items-center gap-2">
                            <div className="relative shrink-0 size-10 sm:size-12">
                                <Image src={industry.icon} alt="" fill className="object-contain" />
                            </div>
                            <p className="text-[#2E3033] text-sm sm:text-lg font-light">{industry.name}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Mobile: continuous cycling marquee. Track is the list doubled back-to-back
                    and looped by exactly -50%, so the seam between the two copies is invisible. */}
                <div className="sm:hidden w-full overflow-hidden">
                    <motion.div
                        className="flex items-center gap-10 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 16, ease: "linear", repeat: Infinity }}
                    >
                        {[...INDUSTRIES, ...INDUSTRIES].map((industry, index) => (
                            <div key={`${industry.name}-${index}`} className="flex items-center gap-2 shrink-0">
                                <div className="relative shrink-0 size-10">
                                    <Image src={industry.icon} alt="" fill className="object-contain" />
                                </div>
                                <p className="text-[#2E3033] text-sm font-light whitespace-nowrap">{industry.name}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
