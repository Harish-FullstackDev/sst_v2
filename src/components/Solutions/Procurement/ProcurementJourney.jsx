"use client";

import { motion } from "framer-motion";
import { LuChartNoAxesCombined, LuClipboardPen, LuFilePen, LuReceipt, LuSearchCheck, LuShoppingCart } from "react-icons/lu";

const STEPS = [
    {
        icon: LuClipboardPen,
        title: "Requisition",
        desc: "Requests are raised inside one unified platform integrated with your existing ERP, so the journey from requisition to payment starts in the right place.",
    },
    {
        icon: LuSearchCheck,
        title: "Source & Select",
        desc: "Suppliers are evaluated and competitive bidding secures the best deals, guided by insight into supplier performance and risk.",
    },
    {
        icon: LuFilePen,
        title: "Contract",
        desc: "Agreements are centralized in one accessible platform, with automated renewals and consistent compliance with regulations and policies.",
    },
    {
        icon: LuShoppingCart,
        title: "Order",
        desc: "Purchase order creation and approvals are automated, with real-time updates shared across procurement teams and stakeholders.",
    },
    {
        icon: LuReceipt,
        title: "Invoice & Pay",
        desc: "Invoice workflows are automated to accelerate approvals, eliminate manual errors, and give clear visibility into payment status.",
    },
    {
        icon: LuChartNoAxesCombined,
        title: "Analyse & Improve",
        desc: "Spend patterns, KPIs, and savings initiatives are tracked to uncover new opportunities and drive continuous improvement.",
    },
];

export default function ProcurementJourney() {
    return (
        <section className="w-full bg-[#f5f6f6] py-10 px-8 sm:p-16 flex flex-col gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[760px] mx-auto text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    The Procurement Journey, End to End
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    How SAP SSM carries each purchase from requisition to payment on a single, unified platform.
                </p>
            </motion.div>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 sm:gap-y-14 w-full">
                {STEPS.map((step, index) => (
                    <motion.li
                        key={step.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
                        className="group relative flex flex-col gap-4 pt-6 border-t border-[#c9cdd1]"
                    >
                        {/* Accent rule grows across the top border on hover */}
                        <span className="absolute left-0 -top-px h-[2px] w-16 bg-[#2d8ec5] transition-all duration-500 ease-out group-hover:w-full" />
                        <div className="flex items-center gap-4">
                            <step.icon aria-hidden="true" strokeWidth={1.5} className="size-9 sm:size-10 shrink-0 text-[#1C5F85]" />
                            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{step.title}</h2>
                        </div>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{step.desc}</p>
                    </motion.li>
                ))}
            </ol>
        </section>
    );
}
