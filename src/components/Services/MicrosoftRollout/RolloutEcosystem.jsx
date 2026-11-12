"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import m365Logo from "@/assets/Services/MicrosoftRollout/icons/microsoft-365.svg";
import azureLogo from "@/assets/Services/MicrosoftRollout/icons/microsoft-azure.svg";
import dynamicsLogo from "@/assets/Services/MicrosoftRollout/icons/dynamics-365.svg";

const TABS = [
    {
        name: "Microsoft 365",
        logo: m365Logo,
        intro: "Productivity and collaboration tools rolled out to every team, connected to the rest of your environment.",
        categories: [
            { label: "Tenant Setup", desc: "Identity, licensing, and policies configured once and applied consistently to every site." },
            { label: "Collaboration", desc: "Teams, SharePoint, and OneDrive structured around how your departments actually work." },
            { label: "Migration", desc: "Mailboxes and files moved from existing platforms in planned waves, without interrupting work." },
            { label: "Adoption", desc: "Training and guidance so every team uses the new tools confidently from day one." },
        ],
    },
    {
        name: "Microsoft Azure",
        logo: azureLogo,
        intro: "Cloud infrastructure and services deployed to support new systems securely and at scale.",
        categories: [
            { label: "Landing Zone", desc: "A governed foundation of subscriptions, networking, and access controls for every workload." },
            { label: "Identity & Security", desc: "Microsoft Entra ID, conditional access, and monitoring set up before users go live." },
            { label: "Workload Deployment", desc: "Applications and data services deployed to Azure in line with the rollout schedule." },
            { label: "Scalability", desc: "Infrastructure sized to grow as new sites, entities, and users are added." },
        ],
    },
    {
        name: "Dynamics 365",
        logo: dynamicsLogo,
        intro: "Business applications deployed across sites and entities with consistent processes and data.",
        categories: [
            { label: "Global Template", desc: "A core solution template that keeps processes consistent across every rollout location." },
            { label: "Localization", desc: "Country-specific tax, legal, and language requirements added on top of the template." },
            { label: "Data Migration", desc: "Master and open transactional data moved accurately into each new entity." },
            { label: "Integration", desc: "Connections to Microsoft 365, Azure, and existing systems for a unified digital workplace." },
        ],
    },
];

export default function RolloutEcosystem() {
    const [active, setActive] = useState(0);
    const activeTab = TABS[active];

    return (
        <section className="w-full bg-[#f5f6f6] py-10 sm:p-16 px-8">
            <div className="w-full flex flex-col items-center gap-10 sm:gap-16 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-3 text-center"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">One Unified <span className="text-[#2D8EC5]">Microsoft Environment</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[700px]">
                        Rollouts that connect seamlessly with Microsoft 365, Azure, and Dynamics 365 for a unified digital workplace.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-10 sm:gap-14 lg:gap-[60px] w-full">
                    <div className="grid grid-cols-3 gap-2 sm:gap-8 lg:gap-[95px] w-full">
                        {TABS.map((tab, index) => {
                            const isActive = index === active;
                            return (
                                <button
                                    key={tab.name}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActive(index)}
                                    className={`bg-white h-[56px] sm:h-[93px] flex items-center justify-center transition-all duration-300 ${isActive
                                        ? "shadow-[2px_4px_20px_0px_rgba(0,0,0,0.25)]"
                                        : ""
                                        }`}
                                >
                                    <Image
                                        src={tab.logo}
                                        alt={`${tab.name} logo`}
                                        className="max-h-[32px] sm:max-h-[55px] lg:max-h-[55px] w-auto max-w-[75%] object-contain"
                                    />
                                </button>
                            );
                        })}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.name}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="flex flex-col gap-4 sm:gap-5"
                        >
                            <h2 className="text-[#2E3033] text-base sm:text-xl lg:text-2xl font-semibold">{activeTab.intro}</h2>
                            <ul className="flex flex-col gap-4 sm:gap-5 list-disc pl-6">
                                {activeTab.categories.map((cat) => (
                                    <li
                                        key={cat.label}
                                        className="text-lg font-light text-[#55595E] pl-2"
                                    >
                                        <span className="font-['Houschka_Pro'] font-semibold text-[#2E3033]">
                                            {cat.label}:
                                        </span>{" "}
                                        {cat.desc}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}


