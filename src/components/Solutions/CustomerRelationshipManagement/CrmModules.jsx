"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import circleIcon from "@/assets/Solutions/CustomerRelationshipManagement/accordion-toggle-circle.svg";
import salesIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-sales.svg";
import marketingIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-marketing.svg";
import serviceIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-service.svg";
import commerceIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-commerce.svg";
import interactionCenterIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-interaction-center.svg";
import analyticsIcon from "@/assets/Solutions/CustomerRelationshipManagement/icon-analytics.svg";

const MODULES = [
    {
        icon: salesIcon,
        title: "Sales",
        desc: "The sales module helps in managing sales processes efficiently by providing tools for lead management, opportunity tracking, quotation management, order processing, and sales performance analytics.",
        benefits: "Increased sales productivity, better lead conversion rates, and improved visibility into sales pipelines.",
    },
    {
        icon: marketingIcon,
        title: "Marketing",
        desc: "The marketing module enables businesses to plan, execute, and analyze marketing campaigns across multiple channels such as email, social media, and events. It includes features for campaign management, segmentation, lead scoring, and marketing analytics.",
        benefits: "Targeted marketing efforts, improved customer engagement, and better ROI on marketing spend.",
    },
    {
        icon: serviceIcon,
        title: "Service",
        desc: "The service module focuses on managing customer service operations, including service ticketing, service request management, service level agreements (SLAs), and customer support analytics.",
        benefits: "Exceptional customer service, reduced resolution times, and enhanced customer satisfaction and loyalty.",
    },
    {
        icon: commerceIcon,
        title: "Commerce",
        desc: "This module enables businesses to create and manage online storefronts, including product catalog management, pricing, promotions, and order fulfillment. It supports both B2B and B2C commerce scenarios and facilitates seamless integration with back-end systems for inventory and order management.",
        benefits: "Increased online sales, enhanced customer experience, and streamlined order processing.",
    },
    {
        icon: interactionCenterIcon,
        title: "Interaction Center",
        desc: "The interaction center module provides a centralized platform for handling customer interactions across various communication channels such as phone, email, chat, and social media. It includes features for case management, knowledge management, and real-time communication tools for agents.",
        benefits: "Improved customer service efficiency, faster issue resolution, and consistent customer experience across channels.",
    },
    {
        icon: analyticsIcon,
        title: "Analytics",
        desc: "The analytics module offers powerful reporting and analytics capabilities, allowing businesses to gain insights into customer behavior, sales performance, marketing effectiveness, and service quality. It includes pre-built dashboards, customizable reports, and predictive analytics tools for data-driven decision-making.",
        benefits: "Improved business intelligence, better strategic planning, and enhanced operational efficiency.",
    },
];

export default function CrmModules() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[32%] shrink-0 lg:sticky lg:top-28"
                >
                    <p className="text-[#2d8ec5] text-base sm:text-lg font-light">Six Modules</p>
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Modules of Customer Relationship Management</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        Sales, marketing, service, commerce, interactions, and analytics, connected around one view of
                        the customer.
                    </p>
                </motion.div>

                <div className="flex flex-col w-full lg:flex-1 min-w-0 border-t border-[#a4a7a5]">
                    {MODULES.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={item.title} className="w-full border-b border-[#a4a7a5]">
                                <button
                                    type="button"
                                    onClick={() => handleClick(index)}
                                    className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="flex items-center gap-4 sm:gap-6 min-w-0">
                                        <Image src={item.icon} alt="" width={48} height={48} className="size-9 sm:size-11 shrink-0" />
                                        <span className="text-[#2E3033] text-lg sm:text-2xl font-semibold">
                                            <span className="text-[#2d8ec5] mr-3">{String(index + 1).padStart(2, "0")}</span>
                                            {item.title}
                                        </span>
                                    </span>
                                    <span className="relative shrink-0 size-8 sm:size-[37px] flex items-center justify-center">
                                        <Image src={circleIcon} alt="" fill className="object-contain" />

                                        {/* Horizontal line */}
                                        <span className="absolute w-[14px] h-[2px] bg-[#2D8EC5] rounded-full" />

                                        {/* Vertical line: rotates to turn + into − on open */}
                                        <motion.span
                                            className="absolute w-[2px] h-[14px] bg-[#2D8EC5] rounded-full"
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
                                            <div className="flex flex-col gap-4 pb-6 sm:pl-[68px] pr-2 sm:pr-16">
                                                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">{item.desc}</p>
                                                <div className="bg-white border-l-[3px] border-[#2d8ec5] px-4 py-3 sm:px-5 sm:py-4">
                                                    <p className="text-[#2E3033] text-base sm:text-lg font-semibold">Benefits</p>
                                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{item.benefits}</p>
                                                </div>
                                            </div>
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
