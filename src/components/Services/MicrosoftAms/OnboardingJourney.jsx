"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import transitionIcon from "@/assets/Services/MicrosoftAms/step-transition.svg";
import stabilizeIcon from "@/assets/Services/MicrosoftAms/step-stabilize.svg";
import optimizeIcon from "@/assets/Services/MicrosoftAms/step-optimize.svg";
import evolveIcon from "@/assets/Services/MicrosoftAms/step-evolve.svg";

const ITEMS = [
    {
        icon: transitionIcon,
        title: "Knowledge Transfer",
        desc: "We document your applications, integrations, customizations, and support history, and shadow your current team or provider before taking over.",
    },
    {
        icon: stabilizeIcon,
        title: "Stabilize",
        desc: "Open tickets are cleared, monitoring and alerting are put in place, and service levels are agreed and reported against.",
    },
    {
        icon: optimizeIcon,
        title: "Optimize",
        desc: "Performance tuning, patching schedules, and license and resource reviews remove the issues that cause repeat incidents.",
    },
    {
        icon: evolveIcon,
        title: "Evolve",
        desc: "A regular roadmap review plans enhancements and adopts new Microsoft release-wave features as your business changes.",
    },
];

export default function OnboardingJourney() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:p-16">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 max-w-[1390px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[43%] shrink-0 lg:sticky lg:top-28"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We <span className="text-[#2D8EC5]">Take Over Support</span></h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light">
                        A structured transition, so your applications keep running while responsibility moves to us.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col gap-8 sm:gap-10 w-full lg:flex-1 lg:min-w-0"
                >
                    {ITEMS.map((item) => (
                        <div key={item.title} className="flex flex-col gap-4 sm:gap-[18px]">
                            <div className="flex items-start gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-2">
                                <div className="relative size-10 sm:size-12 shrink-0">
                                    <Image src={item.icon} alt="" fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3">
                                    <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#d3dae2]" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
