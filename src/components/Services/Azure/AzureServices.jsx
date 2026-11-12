"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import panelImage from "@/assets/Services/Azure/services-panel.webp";
import azureLogo from "@/assets/Services/Azure/icons/microsoft-azure.svg";

const ITEMS = [
    {
        title: "Azure Virtual Machines",
        desc: "Enhanced VMs with GPU capabilities, burstable instances, diverse OS support, and flexible scaling for any workload.",
    },
    {
        title: "Azure Storage",
        desc: "Updated for intelligent tiering, improved redundancy, and seamless integration with data lakes for unstructured and structured data management.",
    },
    {
        title: "Azure SQL Database & Cosmos DB",
        desc: "Modernized with serverless capabilities, automatic scaling, and multi-model database support for global, low-latency applications.",
    },
    {
        title: "Azure Kubernetes Service",
        desc: "Enhanced with multi-cloud container management, integrated monitoring tools, and zero-downtime scaling.",
    },
    {
        title: "Azure Active Directory",
        note: "Now Microsoft Entra ID",
        desc: "New conditional access policies, passwordless authentication options, and deeper integration with third-party applications.",
    },
    {
        title: "Azure Functions & Logic Apps",
        desc: "Advanced serverless computing with connectors for hybrid workflows, durable functions, and event-driven architectures.",
    },
];

function ServiceCard({ item, large }) {
    return (
        <div className="flex flex-col gap-4 sm:gap-6">
            <div className="relative h-10 w-36 shrink-0">
                <Image src={azureLogo} alt="Microsoft Azure logo" fill className="object-contain object-left" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[#2D8EC5] text-sm sm:text-base font-normal">{item.title}</p>
                {item.note && <p className="text-[#55595E] text-sm font-light">{item.note}</p>}
            </div>
            <h2 className={`text-[#2E3033] font-semibold leading-[1.4] ${large ? "text-lg xl:text-2xl" : "text-base"}`}>
                {item.desc}
            </h2>
        </div>
    );
}

// Tab list on the left, shared image panel on the right with a white card
// overlaid from sm up. Only the card's contents animate on selection change;
// the card itself stays mounted so hover doesn't read as the panel flickering.
export default function AzureServices() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = ITEMS[activeIndex];

    return (
        <section className="w-full bg-[#f5f6f6] py-10 sm:py-16 flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[880px] text-center px-8 sm:px-[64px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Improving Business Operations at SST with <span className="text-[#2D8EC5]">Azure Services</span>
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">
                    The Azure services we design, deploy, and manage across compute, data, containers, identity, and
                    integration.
                </p>
            </motion.div>

            {/* items-stretch makes the tab column match the panel height at lg, and
                justify-between spreads the six tabs across it. Below lg the column
                stacks above the panel and gap-2 keeps each border segment distinct. */}
            <div className="w-full px-8 sm:pl-[64px] sm:pr-[64px] lg:pr-0 flex flex-col lg:flex-row items-stretch">
                <div className="flex flex-col justify-between w-full lg:w-[40%] gap-2 lg:gap-0 lg:pr-8 shrink-0">
                    {ITEMS.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index)}
                                aria-pressed={isActive}
                                className={`text-left w-full py-[10px] px-[15px] border-l-[3px] transition-colors ${isActive ? "border-[#2d8ec5]" : "border-[#6c6c6c]/60"}`}
                            >
                                <h2
                                    className={`text-base sm:text-xl xl:text-2xl font-semibold leading-[1.4] transition-colors ${isActive ? "text-[#10161d]" : "text-[#6c6c6c]/70"}`}
                                >
                                    {item.title}
                                </h2>
                            </button>
                        );
                    })}
                </div>

                <div className="w-full lg:w-[60%] flex flex-col mt-6 lg:mt-0">
                    <div className="relative bg-[#1c5f85] w-full aspect-[825/587] overflow-hidden">
                        <Image src={panelImage} alt="" fill className="object-cover" />
                        {/* Overlay card from sm up; below sm the image is too short to
                            hold it, so the same card renders in flow underneath. */}
                        <div className="hidden sm:block absolute left-[25%] right-[6%] top-[31%] bottom-0 bg-white">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active.title}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="absolute inset-[9%] flex flex-col justify-center"
                                >
                                    <ServiceCard item={active} large />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="sm:hidden bg-white p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.title}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            >
                                <ServiceCard item={active} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
