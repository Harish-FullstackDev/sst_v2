"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import overviewImage from "@/assets/Solutions/S4hanaPrivateCloud/overview.webp";

export default function PrivateCloudOverview() {
    return (
        <section className="w-full py-10 sm:py-16">
            <div className="flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[760px] mx-auto text-center px-8"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                        The Cloud, on Infrastructure Dedicated to You
                    </h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Cloud ERP for organizations that want to keep control over their data and infrastructure.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex flex-col items-stretch lg:flex-row lg:items-center gap-8 lg:gap-[14px] px-8 sm:px-[64px] sm:pl-[10px] pt-10 sm:pt-[73px]"
                >
                    {/* Navy accent bar at the left edge, the height of the text block */}
                    <div className="hidden sm:block absolute left-0 top-[73px] bottom-0 w-[9px] bg-[#1c5f85]" />

                    <div className="flex flex-col items-start text-left gap-5 w-full lg:flex-1 sm:pl-[54px] lg:pr-16 xl:pr-28">
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">
                            Discover SAP S/4HANA Private Cloud
                        </h2>
                        <div className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed flex flex-col gap-4">
                            <p>
                                Discover the unparalleled flexibility and security of SAP S/4HANA Private Cloud, the
                                ideal ERP solution for organizations seeking the benefits of cloud computing while
                                maintaining control over their data and infrastructure.
                            </p>
                            <p>
                                With SAP S/4HANA Private Cloud, you can leverage the power of the cloud while enjoying
                                the peace of mind that comes with dedicated resources and customized deployment options
                                tailored to your unique business needs.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full sm:ml-[54px] lg:ml-0 sm:w-auto lg:w-[46%] lg:max-w-[569px] aspect-[569/300] shrink-0 bg-[#565656]">
                        <Image src={overviewImage} alt="Access-controlled entrance gates in a secure facility" fill className="object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
