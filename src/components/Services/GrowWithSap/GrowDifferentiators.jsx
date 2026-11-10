"use client";

import { LuChartColumn, LuCloud, LuGlobe, LuLeaf, LuLightbulb, LuPiggyBank, LuRocket, LuShieldCheck, LuWorkflow } from "react-icons/lu";
import { motion } from "framer-motion";

const ROWS = [
    [
        {
            icon: LuCloud,
            title: "Scalable Cloud Solutions",
            desc: "Enables business growth through SAP's adaptable cloud infrastructure.",
        },
        {
            icon: LuPiggyBank,
            title: "Cost Efficiency",
            desc: "Reduces operational costs with SAP's integrated, modular systems.",
        },
        {
            icon: LuChartColumn,
            title: "Data-Driven Insights",
            desc: "Leverages advanced analytics for informed, real-time decision-making.",
        },
    ],
    [
        {
            icon: LuLightbulb,
            title: "Innovation at Scale",
            desc: "Access to cutting-edge technologies like AI and machine learning.",
        },
        {
            icon: LuRocket,
            title: "Streamlined Implementation",
            desc: "Rapid deployment with pre-configured industry solutions.",
        },
        {
            icon: LuGlobe,
            title: "Global Reach",
            desc: "SAP's worldwide network opens up global market opportunities.",
        },
    ],
    [
        {
            icon: LuWorkflow,
            title: "Business Process Optimization",
            desc: "Increases efficiency with advanced business process intelligence tools.",
        },
        {
            icon: LuShieldCheck,
            title: "Security and Compliance",
            desc: "Built-in security features and industry-specific compliance standards.",
        },
        {
            icon: LuLeaf,
            title: "Sustainability Focus",
            desc: "Promotes sustainable practices through smart resource management solutions.",
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

const FeatureRow = ({ items }) => (
    <div className="w-full">
        {/* Mobile / tablet: plain stacked grid — the divider treatment only reads
            correctly once all 3 cards share a single row, at lg. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-x-8 gap-y-8">
            {items.map((item, index) => (
                <Card key={item.title} {...item} index={index} />
            ))}
        </div>

        {/* Desktop: 3 equal cards with fixed 144px dividers (72px clear space, a hairline,
            72px clear space) so the gap is identical on both sides of every line. */}
        <div className="hidden lg:flex lg:items-stretch">
            {items.map((item, index) => (
                <div key={item.title} className="contents">
                    <div className="flex-1 min-w-0">
                        <Card {...item} index={index} />
                    </div>
                    {index < items.length - 1 && (
                        <div className="w-[144px] shrink-0 flex justify-center">
                            <div className="w-px self-stretch bg-[#8794A3]/30" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default function GrowDifferentiators() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 sm:py-16 px-8 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center mb-10 sm:mb-16 w-full"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Our Key Differentiators</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The strengths Grow with SAP brings to a business that is ready to scale.
                </p>
            </motion.div>

            <div className="flex flex-col gap-10 lg:gap-20 w-full">
                {ROWS.map((row) => (
                    <FeatureRow key={row[0].title} items={row} />
                ))}
            </div>
        </section>
    );
}
