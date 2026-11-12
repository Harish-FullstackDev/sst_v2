"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import templateImage from "@/assets/Services/SapRollout/global-template.webp";
import localizationImage from "@/assets/Services/SapRollout/localization.webp";

export default function GlobalTemplateLocalFit() {
    return (
        <section className="w-full bg-white py-10 sm:py-16 px-8 sm:px-[64px]">
            <div className="flex flex-col gap-10 sm:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[620px] mx-auto text-center"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Global Template, <span className="text-[#2D8EC5]">Local Fit</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        How a rollout keeps every site on one standard while meeting each country&apos;s rules.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[clamp(3rem,7vw,6.25rem)]"
                >
                    <div className="flex flex-col gap-5 w-full">
                        <h2 className="text-[#2E3033] text-lg sm:text-2xl font-semibold">A <span className="text-[#2D8EC5]">Core Template</span> Built Once</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            We define the organizational structure, end-to-end processes, master data standards and
                            configuration that every location inherits. New sites adopt the template instead of
                            redesigning it, which keeps reporting comparable and support simple across the group.
                        </p>
                    </div>
                    <div className="relative w-full lg:w-[45%] lg:max-w-[560px] aspect-[560/297] shrink-0 bg-[#565656]">
                        <Image src={templateImage} alt="Technician connecting network cables in an equipment cabinet" fill className="object-cover" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    // Image first in the DOM so the lg row alternates against the row above;
                    // reversed when stacked so the text still leads, as in row 1.
                    className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-[clamp(3rem,7vw,6.25rem)]"
                >
                    <div className="relative w-full lg:w-[45%] lg:max-w-[560px] aspect-[560/297] shrink-0 bg-[#565656]">
                        <Image src={localizationImage} alt="Robotic arm in an automated manufacturing facility" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <h2 className="text-[#2E3033] text-lg sm:text-2xl font-semibold">
                            Localization <span className="text-[#2D8EC5]">Without Fragmentation</span>
                        </h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            Country-specific requirements such as legal and tax rules, statutory reporting, languages,
                            currencies and e-invoicing are layered on top of the template, not built into a separate
                            copy of it, so local fit never turns into a fork of the global system.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
