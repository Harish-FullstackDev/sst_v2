"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import integrationImage from "@/assets/Solutions/FinanceAndControlling/Data_Advanced_Analytics.webp";
import reportingImage from "@/assets/Solutions/FinanceAndControlling/Business_PMO.webp";

export default function FicoCoreStrengths() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 sm:py-16 px-8 sm:px-[64px]">
            <div className="flex flex-col gap-10 sm:gap-16 max-w-screen mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 max-w-[620px] mx-auto text-center"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                        Where SAP FICO Makes the Difference
                    </h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        One connected finance function, from the posting of a transaction to the report that explains it.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]"
                >
                    <div className="flex flex-col gap-5 w-full">
                        <h2 className="text-[#2E3033] text-base sm:text-2xl font-semibold">Integration</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            SAP FICO integrates FI and CO for smooth financial data flow, real-time visibility,
                            accurate reporting, and enhanced decision-making, ensuring cohesive financial management
                            across the organization within SAP ERP.
                        </p>
                    </div>
                    <div className="relative w-full lg:w-[45%] lg:max-w-[560px] aspect-[560/297] shrink-0 bg-[#565656]">
                        <Image src={integrationImage} alt="Financial analytics dashboard on a monitor in a bright office" fill className="object-cover" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    // Image first in the DOM so the lg row alternates against the row above;
                    // stacked below lg the order is reversed so the text leads, as in row 1.
                    className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-[100px]"
                >
                    <div className="relative w-full lg:w-[45%] lg:max-w-[560px] aspect-[560/297] shrink-0 bg-[#565656]">
                        <Image src={reportingImage} alt="Financial reporting application on a desktop monitor" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <h2 className="text-[#2E3033] text-base sm:text-2xl font-semibold">
                            Comprehensive Financial Reporting &amp; Analysis
                        </h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">
                            SAP FICO enables detailed financial reporting, variance analysis, and profitability
                            insights, facilitating cost optimization, profitability improvement, and strategic
                            decision-making in organizations.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
