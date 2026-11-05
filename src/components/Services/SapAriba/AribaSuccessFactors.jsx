"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import certifiedIcon from "@/assets/Services/SapAriba/icons/certified.svg";
import integrationIcon from "@/assets/Services/SapAriba/icons/integration.svg";
import collaborationIcon from "@/assets/Services/SapAriba/icons/collaboration.svg";
import realTimeIcon from "@/assets/Services/SapAriba/icons/real-time.svg";
import scalableIcon from "@/assets/Services/SapAriba/icons/scalable.svg";
import costEfficiencyIcon from "@/assets/Services/SapAriba/icons/cost-efficiency.svg";
import bestPracticesIcon from "@/assets/Services/SapAriba/icons/best-practices.svg";
import cloudIcon from "@/assets/Services/SapAriba/icons/cloud.svg";

const ITEMS = [
    {
        icon: certifiedIcon,
        title: "Certified SAP Ariba Experts",
        desc: "Work with certified professionals who ensure the successful implementation of SAP Ariba to drive your business forward.",
    },
    {
        icon: integrationIcon,
        title: "Seamless Integration",
        desc: "Integrate procurement processes with your existing systems for greater efficiency and streamlined operations.",
    },
    {
        icon: collaborationIcon,
        title: "Supplier Collaboration",
        desc: "Improve collaboration with suppliers through secure, cloud-based platforms for better communication and transparency.",
    },
    {
        icon: realTimeIcon,
        title: "Real-Time Data & Insights",
        desc: "Leverage real-time data to make informed decisions that enhance procurement and supplier management.",
    },
    {
        icon: scalableIcon,
        title: "Scalable Solutions",
        desc: "Choose solutions that grow with your business, offering flexibility and scalability for all stages of growth.",
    },
    {
        icon: costEfficiencyIcon,
        title: "Cost Efficiency",
        desc: "Reduce procurement costs through automation, improved supplier selection, and streamlined processes.",
    },
    {
        icon: bestPracticesIcon,
        title: "Proven Best Practices",
        desc: "Implement industry-leading procurement practices to drive greater success and optimize supply chain performance.",
    },
    {
        icon: cloudIcon,
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
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Our Key Success Factors with SAP Ariba</h2>
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
                        <Image src={item.icon} alt="" width={48} height={48} className="size-10 sm:size-12" />
                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
