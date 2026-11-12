"use client";

import { motion } from "framer-motion";
import AnimatedStat from "@/components/CommonComponents/AnimatedStat";

// Per the copy deck: only ship stats we can confirm. The deck lists a 4th
// ("[X] years operating across the region") but flags it explicitly as
// unconfirmed and says to drop to a 3-stat row rather than publish a
// placeholder number — so there are 3 here, not 4.
const STRENGTHS = [
    { value: "200+", title: "SAP engagements delivered", description: "" },
    { value: "400+", title: "Specialists across the practice", description: "" },
    { value: "6", title: "Delivery locations across the GCC", description: "" },
];

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
                className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
            >
                <h2 className="text-xl sm:text-[28px] font-semibold text-[#2E3033]">The <span className="text-[#2D8EC5]">Scale</span> Behind The Practice</h2>
                <p className="mt-2 text-base sm:text-lg font-light text-[#55595E]">
                    Numbers that describe reach, not just size.
                </p>
            </motion.div>

            {/* Same row as the home page "Numbers Worth Having a Conversation
                About": equal columns with hairline dividers, count-up numbers,
                8px number-to-label gap; a 2-column grid on small screens. */}
            <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 xl:flex xl:flex-row xl:flex-nowrap xl:items-center xl:gap-10">
                {STRENGTHS.map((item, index) => (
                    <div key={item.title} className="contents">
                        {index > 0 && <div className="hidden w-px self-stretch bg-[#8794a3] xl:block" aria-hidden="true" />}
                        <div className="flex justify-center xl:flex-1">
                            <div className="flex flex-col gap-2 items-center text-center">
                                <AnimatedStat value={item.value} />
                                <p className="text-[#4a5568] text-lg font-light xl:whitespace-nowrap">{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
