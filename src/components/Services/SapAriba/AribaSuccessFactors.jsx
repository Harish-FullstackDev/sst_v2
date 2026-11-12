"use client";

import { LuActivity, LuAward, LuBadgeCheck, LuCloud, LuHandshake, LuLayers, LuPiggyBank, LuPlug } from "react-icons/lu";
import { motion } from "framer-motion";

const ITEMS = [
    {
        icon: LuBadgeCheck,
        title: "Certified SAP Ariba Experts",
        desc: "Work with certified professionals who ensure the successful implementation of SAP Ariba to drive your business forward.",
    },
    {
        icon: LuPlug,
        title: "Seamless Integration",
        desc: "Integrate procurement processes with your existing systems for greater efficiency and streamlined operations.",
    },
    {
        icon: LuHandshake,
        title: "Supplier Collaboration",
        desc: "Improve collaboration with suppliers through secure, cloud-based platforms for better communication and transparency.",
    },
    {
        icon: LuActivity,
        title: "Real-Time Data & Insights",
        desc: "Leverage real-time data to make informed decisions that enhance procurement and supplier management.",
    },
    {
        icon: LuLayers,
        title: "Scalable Solutions",
        desc: "Choose solutions that grow with your business, offering flexibility and scalability for all stages of growth.",
    },
    {
        icon: LuPiggyBank,
        title: "Cost Efficiency",
        desc: "Reduce procurement costs through automation, improved supplier selection, and streamlined processes.",
    },
    {
        icon: LuAward,
        title: "Proven Best Practices",
        desc: "Implement industry-leading procurement practices to drive greater success and optimize supply chain performance.",
    },
    {
        icon: LuCloud,
        title: "Cloud-Based Platform",
        desc: "Access SAP Ariba's cloud-based platform anywhere, anytime, ensuring greater flexibility and reduced operational overhead.",
    },
];

export default function AribaSuccessFactors() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 sm:py-16 px-8 sm:px-[64px] flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-start">
            {/* Heading sticks beside the taller eight-item grid on desktop instead of
                centring against it, so it stays in view while the grid scrolls past. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 w-full lg:flex-[2] lg:sticky lg:top-28"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Our Key <span className="text-[#2D8EC5]">Success Factors</span> with SAP Ariba</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    What we bring to every SAP Ariba engagement, from the first design workshop onwards.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 w-full lg:flex-[3]">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                        className="flex flex-col gap-4 sm:gap-6"
                    >
                        <item.icon aria-hidden="true" strokeWidth={1.5} className="size-10 sm:size-12 text-[#1C5F85]" />
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
