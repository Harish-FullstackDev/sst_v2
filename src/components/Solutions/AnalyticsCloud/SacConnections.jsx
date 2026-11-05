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
        image: livePhoto,
    },
    {
        label: "Import Connection",
        title: "Bring data in to model and plan",
        desc: "Data from SAP and non-SAP sources is brought into Analytics Cloud, where it can be prepared, combined, and used for planning, forecasting, and predictive scenarios.",
        points: ["Combine SAP and non-SAP sources", "Prepare and blend data in the cloud", "Supports planning, budgeting, and forecasting"],
        image: importPhoto,
    },
];

export default function SacConnections() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-14">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[767px]"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Data Connectivity</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Two Ways to Connect Your Data</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Analytics Cloud connects to SAP and non-SAP systems, cloud-based and on-premises, either live or by
                    importing the data.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {CONNECTIONS.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
                        className="group bg-white flex flex-col h-full"
                    >
                        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#565656]">
                            <Image
                                src={item.image}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <span className="absolute left-0 bottom-0 bg-[#2d8ec5] text-white text-sm sm:text-base font-semibold px-4 py-2">
                                {item.label}
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 px-6 py-7 sm:px-8 sm:py-8">
                            <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h3>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                            <ul className="flex flex-col gap-2 mt-2">
                                {item.points.map((point) => (
                                    <li key={point} className="flex items-start gap-3 text-[#55595E] text-base sm:text-lg font-light">
                                        <span className="mt-[0.6em] size-1.5 shrink-0 bg-[#2d8ec5]" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
