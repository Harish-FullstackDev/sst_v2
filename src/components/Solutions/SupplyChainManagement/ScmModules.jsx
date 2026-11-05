"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import apoImage from "@/assets/Solutions/SupplyChainManagement/module-apo.webp";
import ewmImage from "@/assets/Solutions/SupplyChainManagement/module-ewm.webp";
import tmImage from "@/assets/Solutions/SupplyChainManagement/module-tm.webp";
import emImage from "@/assets/Solutions/SupplyChainManagement/module-em.webp";
import gtsImage from "@/assets/Solutions/SupplyChainManagement/module-gts.webp";
import controlTowerImage from "@/assets/Solutions/SupplyChainManagement/module-control-tower.webp";

const MODULES = [
    {
        code: "APO",
        title: "Advanced Planning and Optimization",
        desc: "APO within SAP SCM serves as a crucial tool for managing demand, supply networks, and production processes. It enables businesses to navigate supply chain complexities seamlessly, leveraging real-time data for informed decision-making. APO ensures efficient planning across all stages of the supply chain, enhancing operational agility and responsiveness.",
        img: apoImage,
    },
    {
        code: "EWM",
        title: "Extended Warehouse Management",
        desc: "SAP EWM enhances warehouse operations by integrating advanced functionalities for inbound and outbound processes, inventory management, and yard operations. It ensures streamlined operations, boosting efficiency and accuracy in logistics. EWM within SAP SCM empowers businesses to optimize warehouse processes and meet customer demands effectively.",
        img: ewmImage,
    },
    {
        code: "TM",
        title: "Transportation Management",
        desc: "SAP TM tackles transportation challenges by optimizing route planning, shipment tracking, and execution. It serves as a reliable tool within SAP SCM to streamline logistics operations, reduce costs, and improve delivery reliability. TM empowers businesses to efficiently manage transportation processes and meet customer expectations with precision.",
        img: tmImage,
    },
    {
        code: "EM",
        title: "Event Management",
        desc: "SAP EM acts as a real-time guardian in SAP SCM, enabling proactive monitoring and response to supply chain disruptions. It tracks critical events such as shipment delays or production issues, ensuring timely interventions to maintain operational continuity. EM enhances resilience by facilitating swift and informed decision-making in dynamic supply chain environments.",
        img: emImage,
    },
    {
        code: "GTS",
        title: "Global Trade Services",
        desc: "SAP GTS simplifies international trade complexities within SAP SCM by managing import/export compliance and mitigating risks. It facilitates seamless cross-border operations while ensuring adherence to global trade regulations. GTS enhances efficiency and reliability in managing trade processes, supporting businesses in navigating diverse regulatory environments with ease.",
        img: gtsImage,
    },
    {
        code: "Control Tower",
        title: "Supply Chain Control Tower",
        desc: "The SAP SCM Control Tower empowers supply chain management by centralizing operations, providing real-time visibility, and fostering seamless collaboration. It enables businesses to optimize performance by monitoring key metrics, identifying issues promptly, and making data-driven decisions across the entire supply chain network, ensuring efficiency and agility.",
        img: controlTowerImage,
    },
];

export default function ScmModules() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[820px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Modules of Supply Chain Management</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Six modules covering planning, warehousing, transportation, event monitoring, global trade, and
                    end-to-end visibility.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
                {MODULES.map((module, index) => (
                    <motion.div
                        key={module.code}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="group relative flex flex-col justify-end min-h-[380px] lg:min-h-[500px] overflow-hidden bg-[#565656]"
                    >
                        <Image
                            src={module.img}
                            alt={module.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />
                        <div className="absolute inset-0 bg-[#2d8ec5]/80 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                        {/* Description always visible below lg (no hover on touch), revealed on hover at lg */}
                        <div className="relative flex flex-col gap-2 px-6 py-6 sm:px-8 sm:py-8">
                            <span className="text-[#7cc4ec] lg:group-hover:text-white text-sm sm:text-base font-semibold uppercase tracking-wide transition-colors duration-500">
                                {String(index + 1).padStart(2, "0")} · {module.code}
                            </span>
                            <h2 className="text-white text-xl sm:text-2xl font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                                {module.title}
                            </h2>
                            <p className="mt-1 text-white text-sm sm:text-base lg:text-sm xl:text-base font-light overflow-hidden transition-all duration-500 ease-out lg:max-h-0 lg:opacity-0 lg:-translate-y-2 lg:group-hover:max-h-[340px] lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                                {module.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
