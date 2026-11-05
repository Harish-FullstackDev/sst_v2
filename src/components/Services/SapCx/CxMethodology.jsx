"use client";

import { motion } from "framer-motion";

const STEPS = [
    {
        title: "Discover",
        desc: "We study your customer journeys across sales, marketing, commerce, and service to find where engagement breaks down.",
    },
    {
        title: "Design",
        desc: "We design an SAP CX solution around industry best practices and the experiences your customers expect.",
    },
    {
        title: "Integrate",
        desc: "We connect SAP CX with your existing systems so every team works from a unified view of the customer.",
    },
    {
        title: "Launch",
        desc: "We support go-live and enable your teams to use personalization and real-time insights from day one.",
    },
    {
        title: "Optimize",
        desc: "We use customer data and analytics to keep refining engagement as your business and expectations grow.",
    },
];

export default function CxMethodology() {
    return (
        <section className="w-full px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 max-w-[767px] mb-10 sm:mb-[50px]"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Unified Customer Engagement</p>
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">SAP CX Methodology</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Best practices for customer experience excellence, from first workshop to continuous improvement.
                </p>
            </motion.div>

            {/* Numbered steps: vertical list on mobile, five-column timeline on desktop. */}
            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
                <div className="hidden lg:block absolute left-0 right-0 top-[22px] h-px bg-[#E2E5EA]" />
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative flex lg:flex-col gap-5 lg:gap-6"
                    >
                        <span className="relative z-10 flex size-11 shrink-0 items-center justify-center bg-[#2d8ec5] text-white text-base font-semibold">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="flex flex-col gap-2 min-w-0">
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{step.title}</h2>
                            <p className="text-[#55595E] text-base sm:text-lg font-light">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
