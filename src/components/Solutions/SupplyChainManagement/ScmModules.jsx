"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import apoImage from "@/assets/Solutions/SupplyChainManagement/module-apo.webp";
import ewmImage from "@/assets/Solutions/SupplyChainManagement/module-ewm.webp";
import tmImage from "@/assets/Solutions/SupplyChainManagement/module-tm.webp";
import emImage from "@/assets/Solutions/SupplyChainManagement/module-em.webp";
import gtsImage from "@/assets/Solutions/SupplyChainManagement/module-gts.webp";
import controlTowerImage from "@/assets/Solutions/SupplyChainManagement/module-control-tower.webp";

const ITEMS = [
    {
        title: "Advanced Planning and Optimization (APO)",
        desc: [
            "APO within SAP SCM serves as a crucial tool for managing demand, supply networks, and production processes. It enables businesses to navigate supply chain complexities seamlessly, leveraging real-time data for informed decision-making. APO ensures efficient planning across all stages of the supply chain, enhancing operational agility and responsiveness.",
        ],
        image: apoImage,
    },
    {
        title: "Extended Warehouse Management (EWM)",
        desc: [
            "SAP EWM enhances warehouse operations by integrating advanced functionalities for inbound and outbound processes, inventory management, and yard operations. It ensures streamlined operations, boosting efficiency and accuracy in logistics. EWM within SAP SCM empowers businesses to optimize warehouse processes and meet customer demands effectively.",
        ],
        image: ewmImage,
    },
    {
        title: "Transportation Management (TM)",
        desc: [
            "SAP TM tackles transportation challenges by optimizing route planning, shipment tracking, and execution. It serves as a reliable tool within SAP SCM to streamline logistics operations, reduce costs, and improve delivery reliability. TM empowers businesses to efficiently manage transportation processes and meet customer expectations with precision.",
        ],
        image: tmImage,
    },
    {
        title: "Event Management (EM)",
        desc: [
            "SAP EM acts as a real-time guardian in SAP SCM, enabling proactive monitoring and response to supply chain disruptions. It tracks critical events such as shipment delays or production issues, ensuring timely interventions to maintain operational continuity. EM enhances resilience by facilitating swift and informed decision-making in dynamic supply chain environments.",
        ],
        image: emImage,
    },
    {
        title: "Global Trade Services (GTS)",
        desc: [
            "SAP GTS simplifies international trade complexities within SAP SCM by managing import/export compliance and mitigating risks. It facilitates seamless cross-border operations while ensuring adherence to global trade regulations. GTS enhances efficiency and reliability in managing trade processes, supporting businesses in navigating diverse regulatory environments with ease.",
        ],
        image: gtsImage,
    },
    {
        title: "Supply Chain Control Tower",
        desc: [
            "The SAP SCM Control Tower empowers supply chain management by centralizing operations, providing real-time visibility, and fostering seamless collaboration. It enables businesses to optimize performance by monitoring key metrics, identifying issues promptly, and making data-driven decisions across the entire supply chain network, ensuring efficiency and agility.",
        ],
        image: controlTowerImage,
    },
];

const ROTATE_INTERVAL = 4500;

export default function ScmModules() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % ITEMS.length);
        }, ROTATE_INTERVAL);
        return () => clearInterval(timer);
    }, [active]);

    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[0px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[780px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Modules of Supply Chain Management</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">Six modules covering planning, warehousing, transportation, event monitoring, global trade, and end-to-end visibility.</p>
            </motion.div>

            <div className="flex flex-col lg:flex-row max-w-screen mx-auto lg:h-[680px] pt-16 md:pt-16">
                <div className="relative hidden lg:block w-full h-[220px] lg:h-full lg:w-[35%] shrink-0 overflow-hidden">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={ITEMS[active].title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={ITEMS[active].image}
                                alt={ITEMS[active].title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                </div>

                <div className="flex flex-col w-full lg:flex-1">
                    {ITEMS.map((item, index) => {
                        const isActive = index === active;
                        return (
                            // Fragment, not a wrapper element: the active button grows with
                            // lg:flex-1 against this flex column, which a wrapper would break.
                            <Fragment key={item.title}>
                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 220, opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="relative w-full shrink-0 overflow-hidden lg:hidden"
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="button"
                                    onClick={() => setActive(index)}
                                    className={`relative text-left flex flex-col justify-center gap-3 px-6 sm:px-8 border-b border-[#cac9c9] last:border-b-0 overflow-hidden bg-[#F8FAFC] ${isActive ? "py-6 lg:flex-1" : "py-5"}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="scm-module-highlight"
                                            className="absolute inset-0 bg-[#E8EBEF] border-l-[12px] border-l-[#1C5F85]"
                                            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                                        />
                                    )}
                                    <div className="relative flex flex-col gap-3 ">
                                        <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                                    className="overflow-hidden flex flex-col gap-3 text-[#55595E] text-base w-[92%] font-normal"
                                                >
                                                    {item.desc.map((paragraph) => (
                                                        <p key={paragraph}>{paragraph}</p>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
