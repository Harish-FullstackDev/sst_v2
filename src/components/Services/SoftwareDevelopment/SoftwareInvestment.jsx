"use client";

import { motion } from "framer-motion";
const ROW_1 = [
    { number: "01", title: "Efficiency & Productivity", desc: "Tailored solutions automate processes and improve efficiency, increasing productivity across teams." },
    { number: "02", title: "Better User Experiences", desc: "Software built around your business needs delivers enhanced experiences for customers and employees." },
    { number: "03", title: "Competitive Edge", desc: "Custom capabilities that off-the-shelf tools cannot offer help you stand apart in your market." },
];

const ROW_2 = [
    { number: "04", title: "Scalability & Flexibility", desc: "Room to innovate and adapt as market demands change and the organization grows." },
    { number: "05", title: "Data Management & Security", desc: "Better control over how data is stored, managed, and protected." },
    { number: "06", title: "Integration & Growth", desc: "Integration with existing systems supports improved decision-making and long-term growth." },
];

const Card = ({ number, title, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        className="flex flex-col gap-4"
    >
        <span className="text-[#2d8ec5] text-2xl font-light tabular-nums">{number}</span>
        <h2 className="text-[#2E3033] text-xl font-semibold">{title}</h2>
        <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.4]">{desc}</p>
    </motion.div>
);

const FeatureRow = ({ items }) => (
    <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-x-8 gap-y-8">
            {items.map((item, index) => (
                <Card key={item.title} {...item} index={index} />
            ))}
        </div>
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

export default function SoftwareInvestment() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-10 sm:pb-10 lg:pb-16 px-8 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 text-center mb-10 sm:mb-16 w-full"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Why Invest in Software Development for Your Business?
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[960px]">
                    Software development enables businesses to create tailored solutions that improve efficiency,
                    enhance user experiences, and meet specific business needs. By developing custom software,
                    businesses can automate processes, increase productivity, and gain a competitive edge.
                </p>
                <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[960px]">
                    Software development allows for scalability, flexibility, and innovation, empowering
                    organizations to adapt to changing market demands. Additionally, custom software can provide
                    better data management, security, and integration with existing systems, leading to improved
                    decision-making and long-term growth.
                </p>
            </motion.div>

            <div className="flex flex-col gap-10 lg:gap-20 w-full">
                <FeatureRow items={ROW_1} />
                <FeatureRow items={ROW_2} />
            </div>
        </section>
    );
}
