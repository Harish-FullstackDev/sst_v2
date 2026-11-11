"use client";

import { motion } from "framer-motion";
import { CATEGORIES, INTRO } from "./solutionsLandingData";

// Opening band: the old site's welcome copy on the left, and a jump list of
// the seven categories on the right so the page reads as an index.
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
                    {CATEGORIES.map((category) => (
                        <li key={category.id} className="border-b border-[#d9dcdf]">
                            <a
                                href={`#${category.id}`}
                                className="group flex items-center justify-between gap-4 py-4 text-[#2E3033] transition-colors hover:text-[#2d8ec5]"
                            >
                                <span className="text-lg sm:text-xl font-medium">{category.title}</span>
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5 shrink-0 text-[#55595E] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#2d8ec5]">
                                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
