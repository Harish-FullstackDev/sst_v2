"use client";

import { LuChartColumn, LuClipboardList, LuLandmark, LuPuzzle, LuShoppingCart, LuTruck } from "react-icons/lu";
import { motion } from "framer-motion";

const ROW_1 = [
    {
        icon: LuLandmark,
        title: "Financial Management",
        desc: "Manages finances, assets, and cash flow with multi-currency and multi-company support.",
    },
    {
        icon: LuShoppingCart,
        title: "Sales & Service Management",
        desc: "Tracks opportunities, manages contacts, and supports service orders in Business Central.",
    },
    {
        icon: LuTruck,
        title: "Supply Chain Management",
        desc: "Connects purchasing, inventory, and warehouse activity so stock levels and order fulfilment stay under control.",
    },
];

const ROW_2 = [
    {
        icon: LuChartColumn,
        title: "Reporting and Analytics",
        desc: "Real-time insights, built-in reports, and Power BI integration for informed decisions.",
    },
    {
        icon: LuClipboardList,
        title: "Project Management",
        desc: "Manages projects end to end: budgeting, resources, timesheets, and reporting, ensuring progress and allocation.",
    },
    {
        icon: LuPuzzle,
        title: "Integration with Microsoft Ecosystem",
        desc: "Integrates with Office 365, Power Platform, and Azure for enhanced productivity and scalability.",
    },
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

        {/* Desktop: 3 equal cards per row, separated by a fixed 144px spacer holding a
            centered hairline, so the gap is identical on both sides of every line. */}
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

export default function BusinessCentralFeatures() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Dynamics 365 <span className="text-[#2D8EC5]">Business Central</span> Features
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    One connected application for finance, sales, supply chain, projects, and reporting.
                </p>
            </motion.div>

            <div className="flex flex-col gap-10 lg:gap-24 w-full">
                <FeatureRow items={ROW_1} />
                <FeatureRow items={ROW_2} />
            </div>
        </section>
    );
}
