"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// A self-check built from the six services: each question maps to the control that answers it.
const ITEMS = [
    {
        title: "Are your systems monitored in real time?",
        desc: "Threat detection and response watches your environment continuously so threats are identified and neutralized before they escalate.",
    },
    {
        title: "Is your network protected from unauthorized access?",
        desc: "Firewalls, intrusion detection systems, and secure network architectures keep unauthorized users out of your network.",
    },
    {
        title: "Are laptops, desktops, and mobile devices secured?",
        desc: "Endpoint protection secures every device with advanced malware protection and encryption.",
    },
    {
        title: "Who can access your sensitive data?",
        desc: "Identity and access management controls user access with multi-factor authentication (MFA) and role-based access controls.",
    },
    {
        title: "Is your data encrypted in transit and at rest?",
        desc: "Data protection and encryption ensure sensitive data cannot be read by anyone without authorization, wherever it is.",
    },
    {
        title: "Do you have a plan for when an attack happens?",
        desc: "A robust incident response plan minimizes downtime and helps the business recover quickly from cyberattacks.",
    },
];

export default function CyberAssessment() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full bg-[#f3f6f9] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[36%] shrink-0 lg:sticky lg:top-28"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Security Self-Assessment</p>
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Where Does Your <span className="text-[#2D8EC5]">Security</span> Stand?</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        The questions every business should be able to answer, and how each gap is closed.
                    </p>
                </motion.div>

                <div className="flex flex-col w-full lg:flex-1 lg:min-w-0 border-t border-[#a4a7a5]">
                    {ITEMS.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={item.title} className="w-full border-b border-[#a4a7a5]">
                                <button
                                    type="button"
                                    onClick={() => handleClick(index)}
                                    className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="min-w-0 text-[#2E3033] text-lg sm:text-xl font-semibold">{item.title}</span>
                                    <span className="relative shrink-0 size-8 rounded-full border border-[#2D8EC5] flex items-center justify-center">
                                        <span className="absolute w-[12px] h-[2px] bg-[#2D8EC5] rounded-full" />
                                        <motion.span
                                            className="absolute w-[2px] h-[12px] bg-[#2D8EC5] rounded-full"
                                            animate={{ rotate: isOpen ? 90 : 0 }}
                                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                        />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-5 sm:pb-6 pr-10 text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
