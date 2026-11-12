"use client";

import React from "react";
import { motion } from "framer-motion";

// Per the copy deck: only ship stats we can confirm. The deck lists a 4th
// ("[X] years operating across the region") but flags it explicitly as
// unconfirmed and says to drop to a 3-stat row rather than publish a
// placeholder number — so there are 3 here, not 4.
const STRENGTHS = [
    { value: "200+", title: "SAP engagements delivered", description: "" },
    { value: "400+", title: "Specialists across the practice", description: "" },
    { value: "6", title: "Delivery locations across the GCC", description: "" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function OurStrength() {
    return (
        <section className="w-full bg-[#f3f6f9] px-8 sm:px-[64px] py-10 sm:py-16">
            {/* Own #f3f6f9 band, so it no longer needs the hairline that used to
                separate it from Discover What Set Us Apart above. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <h2 className="text-xl sm:text-[28px] font-semibold text-[#2E3033]">The <span className="text-[#2D8EC5]">Scale</span> Behind The Practice</h2>
                <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">
                    Numbers that describe reach, not just size.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-stretch"
            >
                {STRENGTHS.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <div className="hidden sm:block w-px bg-[#8794a3] shrink-0" />}
                        <motion.div
                            variants={itemVariants}
                            className="flex-1 flex flex-col justify-center items-center text-center gap-7 py-8 px-6 sm:px-10"
                        >
                            {/* Same type as the home page "Numbers Worth Having a Conversation About". */}
                            <p className="font-urbane text-[#2d8ec5] text-[28px] font-medium leading-normal">{item.value}</p>
                            <div>
                                <p className="text-[#4a5568] text-lg font-light">{item.title}</p>
                                {/* <p className="text-sm font-light text-black mt-3 leading-relaxed">
                                    {item.description}
                                </p> */}
                            </div>
                        </motion.div>
                    </React.Fragment>
                ))}
            </motion.div>
        </section>
    );
}
