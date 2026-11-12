"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Solutions/HumanCapitalManagement/accordion-toggle-circle.svg";

const ITEMS = [
    {
        title: "How is SAP HCM different from SAP SuccessFactors?",
        desc: "SAP HCM is the HR and payroll component of SAP's ERP suite and typically runs on-premise alongside the rest of your SAP system. SAP SuccessFactors is SAP's cloud-based human capital management suite. Many organizations run the two side by side, for example keeping payroll in SAP HCM while using cloud modules for talent processes.",
    },
    {
        title: "Does SAP HCM handle country-specific payroll?",
        desc: "Yes. SAP HCM incorporates country-specific requirements for labor laws, payroll taxation, and data privacy, and payroll calculations for gross and net pay, deductions, and tax withholdings follow the rules of each country version in use.",
    },
    {
        title: "How does payroll connect to finance?",
        desc: "Because SAP HCM is part of the SAP ERP suite, payroll results can be posted to financial accounting and cost centers, so salary costs appear in the books and in management reporting without manual re-entry.",
    },
    {
        title: "What can employees and managers do through self-service?",
        desc: "Employees can update personal information, request leave, and view pay slips. Managers can approve requests, access team data, and generate reports, which reduces the administrative workload on the HR team.",
    },
    {
        title: "Can SAP HCM support recruitment and onboarding?",
        desc: "Yes. SAP HCM manages the recruitment process from job posting through to onboarding, including applicant tracking, interview scheduling, and integration with external recruitment channels.",
    },
];

export default function HcmFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full bg-[#f5f6f6] py-10 sm:py-[64px] px-8 sm:px-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center w-full"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Frequently <span className="text-[#2D8EC5]">Asked Questions</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[840px] leading-[1.4]">
                    Common questions HR and payroll teams ask about SAP Human Capital Management.
                </p>
            </motion.div>

            <div className="flex flex-col items-start w-full">
                {ITEMS.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={item.title} className="w-full border-b border-[#a4a7a5]">
                            <button
                                type="button"
                                onClick={() => handleClick(index)}
                                className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 lg:py-[26px] text-left"
                                aria-expanded={isOpen}
                            >
                                <span className="font-['Houschka_Pro'] text-[#2E3033] text-lg sm:text-2xl font-semibold">
                                    {item.title}
                                </span>
                                <span className="relative shrink-0 size-8 sm:size-[37px] flex items-center justify-center">
                                    <Image src={circleIcon} alt="" fill className="object-contain" />

                                    {/* Horizontal line */}
                                    <span className="absolute w-[14px] h-[2px] bg-[#2D8EC5] rounded-full" />

                                    {/* Vertical line: rotates to turn + into − on open */}
                                    <motion.span
                                        className="absolute w-[2px] h-[14px] bg-[#2D8EC5] rounded-full"
                                        animate={{
                                            rotate: isOpen ? 90 : 0,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            ease: [0.4, 0, 0.2, 1],
                                        }}
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
                                        <p className="pb-5 sm:pb-6 pr-10 sm:pr-16 text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
