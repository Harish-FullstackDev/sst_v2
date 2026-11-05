"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import industriesPhoto from "@/assets/Services/SapTm/industries.webp";

const INDUSTRIES = [
    {
        title: "Professional Services",
        desc: "Consulting and advisory firms billing clients for recorded hours and expenses.",
    },
    {
        title: "IT & Technology Services",
        desc: "Project teams tracking effort across implementations, support, and change requests.",
    },
    {
        title: "Engineering & Construction",
        desc: "Projects where labor and material usage both drive cost and client billing.",
    },
    {
        title: "Field Service & Maintenance",
        desc: "Technicians recording time and parts used on every service order.",
    },
];

export default function TmIndustries() {
    return (
        <section className="relative w-full overflow-hidden bg-[#0A2B3E]">
            <Image src={industriesPhoto} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />

            <div className="relative z-10 px-8 py-10 sm:px-[64px] sm:py-[80px] flex flex-col gap-10 sm:gap-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 max-w-[767px]"
                >
                    <p className="text-white/80 text-base sm:text-lg font-light">Where T&amp;M fits best</p>
                    <h2 className="text-white text-xl sm:text-[28px] font-semibold">Built for Project-Driven Businesses</h2>
                    <p className="text-white/85 text-base sm:text-lg font-light">
                        Any organization that runs on projects, people&apos;s time, and billable materials benefits
                        from precise resource tracking and integrated billing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {INDUSTRIES.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            className="flex flex-col gap-3 border border-white/25 bg-white/10 backdrop-blur-md p-6 transition-colors duration-300 hover:bg-white/20"
                        >
                            <h3 className="text-white text-lg sm:text-xl font-semibold">{item.title}</h3>
                            <p className="text-white/80 text-base font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
