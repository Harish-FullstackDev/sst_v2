"use client";

import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Frontend",
        desc: "Responsive interfaces built with modern frameworks such as React and Next.js, tested across browsers and devices.",
    },
    {
        title: "Backend",
        desc: "Application logic and services on platforms such as Node.js, .NET, Java, or Python, chosen to fit the project.",
    },
    {
        title: "Database",
        desc: "Relational and NoSQL databases modelled, indexed, and backed up for reliable storage and fast retrieval.",
    },
    {
        title: "Infrastructure",
        desc: "Cloud hosting, containers, and CI/CD pipelines that take code from commit to production.",
    },
];

export default function FullStackLayers() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-10 lg:pb-0 flex flex-col items-center gap-10 sm:gap-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-8 sm:px-[64px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold"><span className="text-[#2D8EC5]">Every Layer</span> of the Stack</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    What a full-stack build covers, and how each layer is handled.
                </p>
            </motion.div>

            {/* Mobile / tablet: grey bordered cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 w-full px-8 sm:px-[64px]">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="border border-[#a5a5a5] bg-[#f5f6f6] flex flex-col gap-4 px-6 py-8"
                    >
                        <h2 className="text-[#2E3033] text-xl font-semibold text-center">{card.title}</h2>
                        <p className="text-[#55595E] text-base font-light text-pretty">{card.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: white title boxes float on a full-bleed grey band that holds
                the descriptions. The band starts at the vertical middle of the
                fixed-height title boxes (h-[121px] → top-[60px]), so the offset can't
                drift from the box height. */}
            <div className="hidden lg:block relative w-full">
                <div className="absolute inset-x-0 top-[60px] bottom-0 bg-[#f3f6f9]" />

                <div className="relative z-10 px-[64px] grid grid-cols-4 gap-x-[clamp(1.5rem,3.5vw,50px)]">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-[#a5a5a5] h-[121px] flex items-center justify-center text-center px-8">
                                <h2 className="text-[#2E3033] text-2xl font-semibold">{card.title}</h2>
                            </div>
                            <p className="text-[#55595E] text-lg font-light pt-6 pb-16 px-2 text-pretty">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
