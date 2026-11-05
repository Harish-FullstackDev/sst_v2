"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serviceDeskPhoto from "@/assets/Services/MicrosoftAms/tier-service-desk.webp";
import functionalPhoto from "@/assets/Services/MicrosoftAms/tier-functional.webp";
import technicalPhoto from "@/assets/Services/MicrosoftAms/tier-technical.webp";
import improvementPhoto from "@/assets/Services/MicrosoftAms/tier-improvement.webp";

const ITEMS = [
    {
        title: "L1 · Service Desk",
        image: serviceDeskPhoto,
        companionDesc: "A single point of contact that logs every request, resolves how-to questions and access issues, and routes the rest with the right context attached.",
    },
    {
        title: "L2 · Functional Support",
        image: functionalPhoto,
        companionDesc: "Application consultants who resolve configuration, workflow, and data issues inside Dynamics 365, Microsoft 365, and Power Platform solutions.",
    },
    {
        title: "L3 · Technical Support",
        image: technicalPhoto,
        companionDesc: "Developers and platform specialists who fix code, extensions, integrations, and Azure-hosted components, and work with Microsoft support when a product issue is involved.",
    },
    {
        title: "Continuous Improvement",
        image: improvementPhoto,
        companionDesc: "Recurring incidents are traced to their root cause and turned into fixes, automation, or enhancements, so the support load falls over time instead of repeating.",
    },
];

function CardBlock({ item }) {
    return (
        <div className="flex w-full max-w-[420px] flex-col items-center gap-6 sm:max-w-[512px] lg:max-w-none lg:flex-1 lg:basis-1/2">
            <h2 className="text-center text-base font-semibold text-[#2E3033] sm:text-2xl">{item.title}</h2>
            <div className="relative aspect-[512/200] w-full overflow-hidden">
                <Image src={item.image} alt="" fill className="object-cover" />
            </div>
        </div>
    );
}

function CompanionBlock({ item }) {
    return (
        <div className="flex w-full max-w-[480px] items-center gap-4 px-2 sm:gap-5 sm:px-0 lg:max-w-none lg:flex-1 lg:basis-1/2">
            <div className="w-[4px] shrink-0 self-stretch bg-[#808a99] sm:w-[8px]" />
            <p className="w-full text-base font-light leading-[1.5] text-[#55595E] sm:text-xl lg:text-2xl">{item.companionDesc}</p>
        </div>
    );
}

export default function SupportTiers() {
    return (
        <section className="w-full bg-white">
            {/* No inner content cap — rows fill the width inside the section's own
                64px side padding, so image + text scale together. */}
            <div className="flex w-full flex-col items-center gap-10 px-8 py-10 sm:gap-16 sm:px-[64px] sm:py-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex max-w-[772px] flex-col items-center gap-2 text-center"
                >
                    <h2 className="text-xl font-semibold text-[#2E3033] sm:text-[28px]">
                        A Tiered Support Model
                    </h2>
                    <p className="text-base font-light text-[#55595E] sm:text-lg">
                        Every request lands with the right level of expertise, from first contact to root-cause fix.
                    </p>
                </motion.div>

                <div className="flex w-full flex-col gap-10 sm:gap-8">
                    {ITEMS.map((item, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`flex flex-col items-center gap-8 lg:gap-16 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                                    }`}
                            >
                                <CardBlock item={item} />
                                <CompanionBlock item={item} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
