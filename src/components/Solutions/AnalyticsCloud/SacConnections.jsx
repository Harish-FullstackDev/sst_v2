"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import livePhoto from "@/assets/Solutions/AnalyticsCloud/live-connection.webp";
import importPhoto from "@/assets/Solutions/AnalyticsCloud/import-connection.webp";

const CONNECTIONS = [
    {
        label: "Live Connection",
        title: "Analyze data where it lives",
        desc: "Dashboards and stories query the source system directly, so reports always reflect the latest figures without copying data into the cloud.",
        points: ["Real-time analysis and reporting", "Data stays in the source system", "Ideal for SAP systems and on-premises databases"],
        img: livePhoto,
    },
    {
        label: "Import Connection",
        title: "Bring data in to model and plan",
        desc: "Data from SAP and non-SAP sources is brought into Analytics Cloud, where it can be prepared, combined, and used for planning, forecasting, and predictive scenarios.",
        points: ["Combine SAP and non-SAP sources", "Prepare and blend data in the cloud", "Supports planning, budgeting, and forecasting"],
        img: importPhoto,
    },
];

// Two text + image rows (the Overview pattern), mirrored on the second row.
export default function SacConnections() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[1074px] mx-auto text-center"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Data Connectivity</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Two Ways to Connect Your Data</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Analytics Cloud connects to SAP and non-SAP systems, cloud-based and on-premises, either live or by
                    importing the data.
                </p>
            </motion.div>

            {CONNECTIONS.map((item, index) => (
                <div
                    key={item.label}
                    className={`flex flex-col gap-8 sm:gap-[48px] items-center ${index % 2 ? "sm:flex-row-reverse" : "sm:flex-row"}`}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-4 w-full sm:flex-1"
                    >
                        <p className="text-[#2d8ec5] text-base sm:text-lg font-light">{item.label}</p>
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">{item.desc}</p>
                        <ul className="list-disc marker:text-[#7f7f7f] pl-5 space-y-2 text-[#55595E] text-base sm:text-lg font-light">
                            {item.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="relative w-full sm:w-[45%] lg:w-[518px] aspect-[518/325] shrink-0 overflow-hidden"
                    >
                        <Image src={item.img} alt="" fill className="object-cover" />
                    </motion.div>
                </div>
            ))}
        </section>
    );
}
