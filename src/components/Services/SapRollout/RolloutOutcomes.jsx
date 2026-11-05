"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import outcomePhoto1 from "@/assets/Services/SapRollout/outcome-1.jpg";
import outcomePhoto2 from "@/assets/Services/SapRollout/outcome-2.jpg";
import outcomePhoto3 from "@/assets/Services/SapRollout/outcome-3.jpg";
import outcomePhoto4 from "@/assets/Services/SapRollout/outcome-4.jpg";

const ITEMS = [
    {
        title: "A Single Version of the Truth",
        image: outcomePhoto1,
        companionDesc: "Every site posts into the same structures, so group reporting reconciles without manual consolidation.",
    },
    {
        title: "Consistent Processes Across Regions",
        image: outcomePhoto2,
        companionDesc: "Order-to-cash, procure-to-pay and record-to-report run the same way wherever the business operates.",
    },
    {
        title: "Faster Onboarding of New Sites",
        image: outcomePhoto3,
        companionDesc: "Each wave reuses the template, test scripts and training material of the last, so new locations go live sooner.",
    },
    {
        title: "Simpler Support and Upgrades",
        image: outcomePhoto4,
        companionDesc: "One standardized system is easier to support, enhance and upgrade than a collection of local variants.",
    },
];

function CardBlock({ item }) {
    return (
        <div className="flex w-full max-w-[512px] flex-col items-center gap-6 lg:max-w-none lg:flex-1 lg:basis-1/2">
            <h2 className="text-center text-lg font-semibold text-[#2E3033] sm:text-2xl">{item.title}</h2>
            <div className="relative aspect-[512/200] w-full overflow-hidden">
                <Image src={item.image} alt="" fill className="object-cover" />
            </div>
        </div>
    );
}

function CompanionBlock({ item }) {
    return (
        <div className="flex w-full max-w-[512px] items-center gap-4 sm:gap-5 lg:max-w-none lg:flex-1 lg:basis-1/2">
            <div className="w-[4px] shrink-0 self-stretch bg-[#808a99] sm:w-[8px]" />
            <p className="w-full text-base font-light leading-[1.5] text-[#55595E] sm:text-2xl">{item.companionDesc}</p>
        </div>
    );
}

export default function RolloutOutcomes() {
    return (
        <section className="w-full bg-[#f5f6f6]">
            <div className="flex w-full flex-col items-center gap-10 px-8 py-10 sm:gap-16 sm:px-[64px] sm:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex max-w-[772px] flex-col items-center gap-2 text-center"
                >
                    <h2 className="text-xl font-semibold text-[#2E3033] sm:text-[28px]">What a Well-Run Rollout Delivers</h2>
                    <p className="text-base font-light text-[#55595E] sm:text-lg">
                        The outcomes a standardized, template-based deployment is designed to produce.
                    </p>
                </motion.div>

                <div className="flex w-full flex-col gap-12 sm:gap-10">
                    {ITEMS.map((item, index) => {
                        const isReversed = index % 2 === 1;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`flex flex-col items-center gap-6 lg:gap-16 ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
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
