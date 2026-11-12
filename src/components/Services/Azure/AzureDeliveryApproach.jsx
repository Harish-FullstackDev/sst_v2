"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import assessIcon from "@/assets/Services/Azure/icons/delivery-certified.svg";
import landingZoneIcon from "@/assets/Services/Azure/icons/delivery-predictable.svg";
import migrateIcon from "@/assets/Services/Azure/icons/delivery-end-to-end.svg";
import governIcon from "@/assets/Services/Azure/icons/delivery-long-run.svg";

// Two independently flowing columns (left starts lower) so the steps read
// in a staggered zigzag: first and third on the left, second and fourth on the right.
const LEFT_COLUMN = [
    {
        icon: assessIcon,
        title: "Assess",
        desc: "Discover servers, databases, and applications with Azure Migrate, and size and cost the target environment before anything moves.",
    },
    {
        icon: migrateIcon,
        title: "Migrate & Modernize",
        desc: "Rehost to Azure Virtual Machines, or modernize to Azure SQL Managed Instance, Azure App Service, or AKS where it adds value.",
    },
];

const RIGHT_COLUMN = [
    {
        icon: landingZoneIcon,
        title: "Build the Landing Zone",
        desc: "Subscriptions, networking, identity, and policies set up following Microsoft's Cloud Adoption Framework.",
    },
    {
        icon: governIcon,
        title: "Govern & Optimize",
        desc: "Azure Policy, Microsoft Defender for Cloud, Azure Cost Management, and Azure Advisor keep the estate secure and efficient.",
    },
];

const ALL_STEPS = [LEFT_COLUMN[0], RIGHT_COLUMN[0], LEFT_COLUMN[1], RIGHT_COLUMN[1]];

function StepItem({ icon, title, desc, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className="flex flex-col gap-4"
        >
            <Image src={icon} alt="" className="size-12" />
            <div className="flex flex-col gap-4">
                <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold font-houschka-pro">{title}</h3>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-normal">{desc}</p>
            </div>
        </motion.div>
    );
}

export default function AzureDeliveryApproach() {
    return (
        <section className="w-full bg-[#f3f6f9] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-[72px] items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[818px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">How We Deliver on <span className="text-[#2D8EC5]">Azure</span></h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    Stages aligned with Microsoft&apos;s Cloud Adoption Framework, from first assessment to an
                    estate that keeps improving.
                </p>
            </motion.div>

            {/* Mobile: one stacked list in step order. */}
            <div className="w-full flex flex-col gap-8 sm:hidden">
                {ALL_STEPS.map((item, index) => (
                    <div key={item.title} className={index > 0 ? "pt-8 border-t border-[#A4A7A5]/40" : ""}>
                        <StepItem {...item} delay={0} />
                    </div>
                ))}
            </div>

            {/* sm+: two independently flowing columns with a thin divider between;
                the left column's top padding creates the stagger. */}
            <div className="hidden sm:flex w-full items-stretch">
                <div className="flex-1 flex flex-col pt-12">
                    <StepItem {...LEFT_COLUMN[0]} delay={0} />
                    <div className="w-full h-px bg-[#A4A7A5]/40 my-10" />
                    <StepItem {...LEFT_COLUMN[1]} delay={0.1} />
                </div>

                <div className="w-px bg-[#8794A3]/40 mx-8 sm:mx-12" />

                <div className="flex-1 flex flex-col">
                    <StepItem {...RIGHT_COLUMN[0]} delay={0} />
                    <div className="w-full h-px bg-[#A4A7A5]/40 my-10" />
                    <StepItem {...RIGHT_COLUMN[1]} delay={0.1} />
                </div>
            </div>
        </section>
    );
}
