"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import assessPhoto from "@/assets/Solutions/S4hanaOnPremise/roadmap-assess.webp";
import buildPhoto from "@/assets/Solutions/S4hanaOnPremise/roadmap-build.webp";
import cutoverPhoto from "@/assets/Solutions/S4hanaOnPremise/roadmap-cutover.webp";
import runPhoto from "@/assets/Solutions/S4hanaOnPremise/roadmap-run.webp";

const PHASES = [
    {
        title: "01  Landscape & Sizing",
        image: assessPhoto,
        desc: "We assess your current landscape, size the SAP HANA database and application servers, and plan the hardware, network, and high-availability setup your workloads need.",
    },
    {
        title: "02  Build & Configure",
        image: buildPhoto,
        desc: "We install and configure SAP S/4HANA, apply your custom configurations, and set up roles, workflows, and integrations with the systems around it.",
    },
    {
        title: "03  Data Migration & Cutover",
        image: cutoverPhoto,
        desc: "We migrate and validate master and transactional data, rehearse the cutover, and plan go-live around your business calendar.",
    },
    {
        title: "04  Run & Optimize",
        image: runPhoto,
        desc: "After go-live we keep the system patched, monitored, and tuned, and plan support package and release upgrades on your schedule.",
    },
];

function CardBlock({ item }) {
    return (
        <div className="flex w-full max-w-[420px] flex-col items-center gap-6 sm:max-w-[512px] lg:max-w-none lg:flex-1 lg:basis-1/2">
            <h2 className="whitespace-pre text-center text-base font-semibold text-[#2E3033] sm:text-2xl">{item.title}</h2>
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
            <p className="w-full text-base font-light leading-[1.5] text-[#55595E] sm:text-2xl">{item.desc}</p>
        </div>
    );
}

export default function DeliveryRoadmap() {
    return (
        <section className="w-full">
            <div className="flex w-full flex-col items-center gap-10 px-8 py-10 sm:gap-16 sm:px-[64px] lg:py-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex max-w-[772px] flex-col items-center gap-2 text-center"
                >
                    <h2 className="text-xl font-semibold text-[#2E3033] sm:text-[28px]">
                        How We Deliver an On-Premises Deployment
                    </h2>
                    <p className="text-base font-light text-[#55595E] sm:text-lg">
                        A phased path from landscape sizing to stable, supported operations.
                    </p>
                </motion.div>

                <div className="flex w-full flex-col gap-10 sm:gap-8">
                    {PHASES.map((item, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={`flex flex-col items-center gap-8 lg:gap-16 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}
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
