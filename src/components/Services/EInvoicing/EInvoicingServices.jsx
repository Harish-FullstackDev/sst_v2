"use client";

import { LuCalculator, LuClipboardCheck, LuFileCheck, LuFilePlus, LuPlug, LuSend } from "react-icons/lu";
import { motion } from "framer-motion";

const ROW_1 = [
    {
        icon: LuFileCheck,
        title: "Invoice Validation",
        desc: "Real-time validation of invoices against compliance standards and tax regulations.",
    },
    {
        icon: LuFilePlus,
        title: "Invoice Generation",
        desc: "Automated creation of invoices with dynamic templates for personalized and professional communication.",
    },
    {
        icon: LuSend,
        title: "Invoice Transmission",
        desc: "Seamless electronic delivery of invoices through secure platforms, ensuring timely receipt by recipients.",
    },
];

const ROW_2 = [
    {
        icon: LuCalculator,
        title: "Tax Compliance",
        desc: "Integrated tax calculation and reporting to ensure adherence to regulatory requirements.",
    },
    {
        icon: LuClipboardCheck,
        title: "Audit and Reporting",
        desc: "Comprehensive tracking, audit trails, and detailed reporting to ensure transparency and simplify financial audits.",
    },
    {
        icon: LuPlug,
        title: "Integration with ERP Systems",
        desc: "Seamless integration with popular ERP solutions like SAP, Oracle, and Microsoft Dynamics for smooth workflow automation.",
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
        {/* Mobile / tablet: plain stacked grid, no divider lines — the divider treatment only
            reads correctly once all 3 cards share a single row, at lg. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-x-8 gap-y-8">
            {items.map((item, index) => (
                <Card key={item.title} {...item} index={index} />
            ))}
        </div>

        {/* Desktop: 3 cards in one row. Each divider is a fluid spacer (clear space, a
            hairline, clear space) so the gap is identical on both sides of every line and the
            3 cards stay equal width between the section's own side padding. */}
        <div className="hidden lg:flex lg:items-stretch">
            {items.map((item, index) => (
                <div key={item.title} className="contents">
                    <div className="flex-1 min-w-0">
                        <Card {...item} index={index} />
                    </div>
                    {index < items.length - 1 && (
                        <div className="w-[clamp(4rem,7vw,9rem)] shrink-0 flex justify-center">
                            <div className="w-px self-stretch bg-[#8794A3]/30" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default function EInvoicingServices() {
    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center mb-10 sm:mb-16 w-full"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Streamlining Invoicing at SST with <span className="text-[#2D8EC5]">E-Invoicing</span> Services
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Capabilities across the invoice lifecycle, from creation and delivery to tax and audit.
                </p>
            </motion.div>

            <div className="flex flex-col gap-10 lg:gap-20 w-full">
                <FeatureRow items={ROW_1} />
                <FeatureRow items={ROW_2} />
            </div>
        </section>
    );
}
