"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import blueprintPhoto from "@/assets/Solutions/HumanCapitalManagement/Business_Business_Strategy.webp";
import configurePhoto from "@/assets/Solutions/HumanCapitalManagement/Service_Request.webp";
import testPhoto from "@/assets/Solutions/HumanCapitalManagement/SLA_Management.webp";
import supportPhoto from "@/assets/Solutions/HumanCapitalManagement/Continous_Improvement.webp";

const STEPS = [
    {
        title: "01 · Discover & Blueprint",
        image: blueprintPhoto,
        desc: "Map current HR, time, and payroll processes, organizational structures, and country requirements into a design the business signs off before build begins.",
    },
    {
        title: "02 · Configure & Integrate",
        image: configurePhoto,
        desc: "Set up Personnel Administration, Organizational Management, time, and payroll, and connect HR to finance and the other SAP modules it feeds.",
    },
    {
        title: "03 · Migrate & Validate",
        image: testPhoto,
        desc: "Load employee master data and history, then run parallel payroll cycles until results reconcile with the legacy system.",
    },
    {
        title: "04 · Go Live & Support",
        image: supportPhoto,
        desc: "Launch self-service for employees and managers, support the first live payroll runs, and keep pace with regulatory updates afterwards.",
    },
];

function CardBlock({ item }) {
    return (
        <div className="flex w-full max-w-[420px] flex-col items-center gap-6 sm:max-w-[512px] lg:max-w-none lg:flex-1 lg:basis-1/2">
            <h2 className="text-center text-lg font-semibold text-[#2E3033] sm:text-2xl">{item.title}</h2>
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

export default function HcmDelivery() {
    return (
        <section className="w-full">
            <div className="flex w-full flex-col items-center gap-10 px-8 py-10 sm:gap-16 sm:px-[64px] sm:py-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex max-w-[772px] flex-col items-center gap-2 text-center"
                >
                    <h2 className="text-xl font-semibold text-[#2E3033] sm:text-[28px]">
                        How We Implement SAP HCM
                    </h2>
                    <p className="text-base font-light text-[#55595E] sm:text-lg">
                        Four phases that put accurate people data and a reconciled payroll in place before go-live.
                    </p>
                </motion.div>

                <div className="flex w-full flex-col gap-10 sm:gap-8">
                    {STEPS.map((item, index) => {
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
