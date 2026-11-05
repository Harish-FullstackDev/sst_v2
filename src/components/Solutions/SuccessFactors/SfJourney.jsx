"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import prepareIcon from "@/assets/Solutions/SuccessFactors/certified.svg";
import configureIcon from "@/assets/Solutions/SuccessFactors/predictable.svg";
import migrateIcon from "@/assets/Solutions/SuccessFactors/end-to-end.svg";
import optimizeIcon from "@/assets/Solutions/SuccessFactors/long-run.svg";

// Two independently flowing columns (left offset by pt-12) so the stagger and the
// horizontal dividers can move separately, read in order 1 → 2 → 3 → 4 across
// the columns: left holds phases 1 and 3, right holds phases 2 and 4.
const LEFT_COLUMN = [
    {
        icon: prepareIcon,
        title: "01 · Prepare & Design",
        desc: "Agree which modules come first, review current HR processes, and design the data model and approval workflows around them.",
    },
    {
        icon: migrateIcon,
        title: "03 · Test & Migrate",
        desc: "Load employee data, validate it with HR, and run end-to-end tests of hiring, review, and compensation cycles before launch.",
    },
];

const RIGHT_COLUMN = [
    {
        icon: configureIcon,
        title: "02 · Configure & Integrate",
        desc: "Configure the selected modules, typically with Employee Central as the foundation, and connect them to SAP ERP, payroll, and third-party systems.",
    },
    {
        icon: optimizeIcon,
        title: "04 · Deploy & Optimize",
        desc: "Roll out to employees and managers, then review each SAP release and adopt the features that fit how your HR team works.",
    },
];

function PhaseItem({ icon, title, desc, delay }) {
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
                <h2 className="text-[#10161d] text-xl sm:text-2xl font-semibold">{title}</h2>
                <p className="text-[#4a5568] text-base sm:text-lg font-light leading-normal">{desc}</p>
            </div>
        </motion.div>
    );
}

export default function SfJourney() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-10 sm:gap-[72px] items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-3 sm:gap-5 max-w-[818px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Your SuccessFactors Journey</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                    How a SuccessFactors rollout moves from first decisions to a system that keeps improving.
                </p>
            </motion.div>

            {/* Mobile: one stacked list in phase order, no divider or stagger. */}
            <div className="w-full flex flex-col gap-10 sm:hidden">
                {[LEFT_COLUMN[0], RIGHT_COLUMN[0], LEFT_COLUMN[1], RIGHT_COLUMN[1]].map((phase, index) => (
                    <div key={phase.title} className={index > 0 ? "pt-8 border-t border-[#A4A7A5]/40" : ""}>
                        <PhaseItem {...phase} delay={0} />
                    </div>
                ))}
            </div>

            {/* Desktop: two staggered columns with a vertical rule sized to the row. */}
            <div className="hidden sm:flex w-full items-stretch">
                <div className="flex-1 flex flex-col pt-12">
                    <PhaseItem {...LEFT_COLUMN[0]} delay={0} />
                    <div className="w-full h-px bg-[#A4A7A5]/40 my-10" />
                    <PhaseItem {...LEFT_COLUMN[1]} delay={0.1} />
                </div>

                <div className="w-px bg-[#8794A3]/40 mx-8 sm:mx-12" />

                <div className="flex-1 flex flex-col">
                    <PhaseItem {...RIGHT_COLUMN[0]} delay={0} />
                    <div className="w-full h-px bg-[#A4A7A5]/40 my-10" />
                    <PhaseItem {...RIGHT_COLUMN[1]} delay={0.1} />
                </div>
            </div>
        </section>
    );
}
