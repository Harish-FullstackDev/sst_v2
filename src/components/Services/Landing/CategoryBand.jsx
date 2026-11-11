"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// One band per category. Bands alternate between the grey (#f5f6f6) surface
// with white cards and the white surface with grey cards, the same pair the
// What We Do pages use, so a long page of near-identical grids keeps a rhythm.
// scroll-mt clears the fixed 80px navbar when arriving from a /services#id link.
function ServiceCard({ card, onGrey }) {
    return (
        <Link
            href={card.href}
            className={`group h-full flex flex-col items-start gap-4 p-8 min-h-[260px] transition-shadow duration-300 ${onGrey
                ? "bg-white shadow-[2px_4px_8.4px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_8px_20px_0px_rgba(0,0,0,0.14)]"
                : "bg-[#f5f6f6] hover:shadow-[2px_8px_20px_0px_rgba(0,0,0,0.1)]"
                }`}
        >
            {card.group && (
                <p className="text-xs uppercase tracking-[0.18em] text-[#2d8ec5]">{card.group}</p>
            )}
            <h3 className="text-[#2E3033] text-xl font-semibold">{card.title}</h3>
            <p className="text-[#55595E] text-base font-light">{card.desc}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-[#2E3033]">
                Explore
                <svg viewBox="0 0 24 24" fill="none" className="size-5 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </Link>
    );
}

export default function CategoryBand({ category, index }) {
    const onGrey = index % 2 === 0;

    return (
        <section
            id={category.id}
            className={`w-full scroll-mt-[80px] px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-8 sm:gap-12 ${onGrey ? "bg-[#f5f6f6]" : "bg-white"}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-4 lg:gap-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">{category.title}</h2>
                <div className="flex flex-col gap-4">
                    {category.paragraphs.map((p) => (
                        <p key={p.slice(0, 24)} className="text-[#55595E] text-base sm:text-lg font-light">{p}</p>
                    ))}
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-[29px]">
                {category.cards.map((card, i) => (
                    <motion.div
                        key={card.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.08 }}
                    >
                        <ServiceCard card={card} onGrey={onGrey} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
