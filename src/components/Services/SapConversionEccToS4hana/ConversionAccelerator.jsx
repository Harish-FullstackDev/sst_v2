"use client";

import { LuCircleCheck, LuCode, LuFileText, LuFlaskConical, LuGauge, LuLayoutDashboard, LuMap, LuRocket, LuServer } from "react-icons/lu";
import { motion } from "framer-motion";

const ROWS = [
    [
        {
            icon: LuGauge,
            title: "Conversion Rate Optimization",
            desc: "A conversion process that is faster than the traditional conversion method.",
        },
        {
            icon: LuMap,
            title: "Free Access to S/4HANA Plans",
            desc: "Free services offered with our implementation packages.",
        },
        {
            icon: LuServer,
            title: "Re-hosting Approach",
            desc: "Rehost your digital journey using the “Lift & Shift” business approach.",
        },
    ],
    [
        {
            icon: LuCode,
            title: "Customization & Creativity",
            desc: "Use custom code reduction for a streamlined and efficient system.",
        },
        {
            icon: LuFlaskConical,
            title: "Miscellaneous Testing",
            desc: "Simulate transitions to resolve issues and minimize downtime.",
        },
        {
            icon: LuCircleCheck,
            title: "Verify & Validate",
            desc: "A predefined model ensures data validation between SAP ECC and S/4HANA.",
        },
    ],
    [
        {
            icon: LuLayoutDashboard,
            title: "Fiori Phase Activation",
            desc: "Gradual activation of Fiori allows end users to make the UI/UX transition smoothly.",
        },
        {
            icon: LuFileText,
            title: "Rich Documentation & Testing",
            desc: "We record and report best business statements.",
        },
        {
            icon: LuRocket,
            title: "Future-Proof Technology",
            desc: "Future-proof your SAP ERP with S/4HANA.",
        },
    ],
];

const Card = ({ icon: Icon, title, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        className="flex flex-col gap-4"
    >
        <div className="relative size-10 shrink-0">
            <Icon aria-hidden="true" strokeWidth={1.5} className="size-full text-[#1C5F85]" />
        </div>
        <h2 className="text-[#2E3033] text-xl font-semibold">{title}</h2>
        <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">{desc}</p>
    </motion.div>
);

// Desktop only: 3 equal cards with a hairline centered in a fluid gutter between each.
const FeatureRow = ({ items }) => (
    <div className="hidden lg:flex lg:items-stretch w-full">
        {items.map((item, index) => (
            <div key={item.title} className="contents">
                <div className="flex-1 min-w-0">
                    <Card {...item} index={index} />
                </div>
                {index < items.length - 1 && (
                    <div className="w-[clamp(4rem,8vw,9rem)] shrink-0 flex justify-center">
                        <div className="w-px self-stretch bg-[#8794A3]/30" />
                    </div>
                )}
            </div>
        ))}
    </div>
);

export default function ConversionAccelerator() {
    return (
        <section className="w-full bg-white pt-10 sm:pt-16 pb-10 sm:pb-16 px-8 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center mb-10 sm:mb-16 w-full max-w-[860px] mx-auto"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    The Role of the S/4HANA Conversion Accelerator at SST
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Nine accelerator components that shorten the path from ECC to a working S/4HANA system.
                </p>
            </motion.div>

            {/* Mobile / tablet: one flat grid of all nine so the 2-column layout never
                leaves an orphan per row of three; the divider rows only read at lg. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-x-8 gap-y-10">
                {ROWS.flat().map((item, index) => (
                    <Card key={item.title} {...item} index={index % 2} />
                ))}
            </div>

            <div className="hidden lg:flex flex-col gap-20 w-full">
                {ROWS.map((row, rowIndex) => (
                    <FeatureRow key={rowIndex} items={row} />
                ))}
            </div>
        </section>
    );
}
