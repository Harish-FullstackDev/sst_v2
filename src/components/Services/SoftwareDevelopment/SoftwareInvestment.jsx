"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bgImage from "@/assets/Services/SoftwareDevelopment/investment-bg.jpg";

const BENEFITS = [
    {
        title: "Efficiency & Productivity",
        desc: "Tailored solutions automate processes and improve efficiency, increasing productivity across teams.",
    },
    {
        title: "Better User Experiences",
        desc: "Software built around your business needs delivers enhanced experiences for customers and employees.",
    },
    {
        title: "Competitive Edge",
        desc: "Custom capabilities that off-the-shelf tools cannot offer help you stand apart in your market.",
    },
    {
        title: "Scalability & Flexibility",
        desc: "Room to innovate and adapt as market demands change and the organization grows.",
    },
    {
        title: "Data Management & Security",
        desc: "Better control over how data is stored, managed, and protected.",
    },
    {
        title: "Integration & Growth",
        desc: "Integration with existing systems supports improved decision-making and long-term growth.",
    },
];

export default function SoftwareInvestment() {
    return (
        <section className="relative w-full overflow-hidden bg-[#0b1f2e] px-8 py-14 sm:px-[64px] sm:py-20">
            <Image src={bgImage} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-[#00447A]/80" />

            <div className="relative flex flex-col gap-10 sm:gap-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 max-w-[960px]"
                >
                    <h2 className="text-white text-xl sm:text-[28px] font-semibold">
                        Why Invest in Software Development for Your Business?
                    </h2>
                    <p className="text-white/85 text-base sm:text-lg font-light leading-relaxed">
                        Software development enables businesses to create tailored solutions that improve efficiency,
                        enhance user experiences, and meet specific business needs. By developing custom software,
                        businesses can automate processes, increase productivity, and gain a competitive edge.
                        Software development allows for scalability, flexibility, and innovation, empowering
                        organizations to adapt to changing market demands. Additionally, custom software can provide
                        better data management, security, and integration with existing systems, leading to improved
                        decision-making and long-term growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20">
                    {BENEFITS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                            className="flex flex-col gap-3 bg-black/40 backdrop-blur-sm px-6 py-7 sm:px-8 sm:py-8 transition-colors duration-300 hover:bg-[#00447A]/70"
                        >
                            <span className="text-[#2d8ec5] text-base font-light">{String(index + 1).padStart(2, "0")}</span>
                            <h3 className="text-white text-xl sm:text-2xl font-semibold">{item.title}</h3>
                            <p className="text-white/80 text-base sm:text-lg font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
