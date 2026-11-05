"use client";

import { motion } from "framer-motion";
import { CATEGORIES, INTRO } from "./servicesLandingData";

// Opening band: the old site's welcome copy on the left, and a jump list of
// the five categories on the right so the page reads as an index.
export default function Intro() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16"
            >
                <div className="flex flex-col gap-4">
                    <p className="text-[#2d8ec5] text-sm uppercase tracking-[0.2em]">{INTRO.eyebrow}</p>
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold capitalize">{INTRO.title}</h2>
                    <p className="text-[#55595E] text-base sm:text-lg font-light max-w-[720px]">{INTRO.body}</p>
                </div>

                <ul className="flex flex-col border-t border-[#d9dcdf]">
                    {CATEGORIES.map((category, i) => (
                        <li key={category.id} className="border-b border-[#d9dcdf]">
                            <a
                                href={`#${category.id}`}
                                className="group flex items-center justify-between gap-4 py-4 text-[#2E3033] transition-colors hover:text-[#2d8ec5]"
                            >
                                <span className="flex items-baseline gap-4">
                                    <span className="text-sm text-[#55595E] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-lg sm:text-xl font-medium">{category.title}</span>
                                </span>
                                <span className="shrink-0 whitespace-nowrap text-sm text-[#55595E]">
                                    {category.cards.length} services
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
