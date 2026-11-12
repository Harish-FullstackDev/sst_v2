"use client";

import { motion } from "framer-motion";

// Twelve workstreams from the old page. A single centered flex-wrap list (rather
// than hard-coded rows) lets the pills settle into 4-, 3- or 2-per-row on their
// own as the viewport narrows, with every row centered.
const ASPECTS = [
    "Understanding SAP S/4HANA",
    "Project Planning",
    "Data Migration",
    "Custom Code Adaptation",
    "Infrastructure Requirements",
    "SAP Fiori User Interface",
    "IT Services & Cybersecurity",
    "Testing & Deployment",
    "Data & Cloud Computing",
    "Business Process Redesign",
    "Training & Change Management",
    "Post-Conversion Support",
];

export default function ConversionKeyAspects() {
    return (
        <section className="w-full bg-[#f3f6f9] px-8 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 text-center max-w-[767px] mx-auto mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Key Aspects of the <span className="text-[#2D8EC5]">Conversion</span> at SST</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Every workstream a conversion touches, covered by one team from planning to post-go-live.
                </p>
            </motion.div>

            {/* Grey border by default, blue on hover, same as the pill treatment elsewhere on the site */}
            <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-wrap items-center justify-center gap-4 sm:gap-x-8 sm:gap-y-6 max-w-[1240px] mx-auto"
            >
                {ASPECTS.map((item) => (
                    <li
                        key={item}
                        className="flex items-center bg-white border border-[#d3dae2] hover:border-[#2d8ec5] px-4 py-3 transition-colors duration-300"
                    >
                        <span className="text-[#55595E] text-base sm:text-xl font-light text-center">{item}</span>
                    </li>
                ))}
            </motion.ul>
        </section>
    );
}
