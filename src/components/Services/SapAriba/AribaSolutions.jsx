"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuFilePen, LuGavel, LuHandshake, LuReceipt } from "react-icons/lu";

const CARDS = [
    {
        icon: LuGavel,
        title: "Strategic Sourcing",
        desc: "Run sourcing events and supplier bids in one place, with full visibility into every offer.",
    },
    {
        icon: LuFilePen,
        title: "Contract Management",
        desc: "Author, approve, and store contracts centrally, with renewals and obligations tracked automatically.",
    },
    {
        icon: LuReceipt,
        title: "Buying & Invoicing",
        desc: "Guided buying and automated invoice matching that keep spend on contract and payments on time.",
    },
    {
        icon: LuHandshake,
        title: "Supplier Management",
        desc: "Onboard, qualify, and monitor suppliers with a single view of performance and risk.",
    },
];

// Same card as Google Cloud Platform's services: navy (#0A2B3E to #003756), the
// area's Lucide icon (same set as the rest of the site) centred just below the
// title in a fine line. When a card opens, a soft deep-blue lift rises from the
// foot and the icon redraws itself stroke by stroke and brightens; the
// description row takes room from the icon's row, so they never collide.
// Remounting the icon on open (keyed) restarts the draw every time.
const DRAW_KEYFRAMES = "@keyframes ariba-draw { to { stroke-dashoffset: 0; } }";

function CardBackground({ isActive }) {
    return (
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top_right,#0A2B3E,#003756)]">
            <div
                className={`absolute inset-0 bg-[linear-gradient(to_top,rgba(28,95,133,0.45),rgba(28,95,133,0)_70%)] transition-opacity duration-700 ease-out ${isActive ? "opacity-100" : "opacity-0"
                    }`}
            />
        </div>
    );
}

function CardIcon({ card, isActive, className = "" }) {
    return (
        <card.icon
            aria-hidden="true"
            key={isActive ? "drawing" : "resting"}
            strokeWidth={0.75}
            className={`transition-colors duration-700 ${className} ${isActive
                ? "text-white/55 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] [&_*]:animate-[ariba-draw_1.8s_cubic-bezier(0.65,0,0.35,1)_forwards]"
                : "text-white/20"
                }`}
        />
    );
}

export default function AribaSolutions() {
    // Cycles the revealed card every few seconds, pausing whenever the grid is
    // hovered or focused so manual interaction always takes over.
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % CARDS.length);
        }, 3000);
        return () => clearInterval(id);
    }, [isPaused]);

    return (
        <section className="w-full py-10 px-8 sm:p-16">
            <style>{DRAW_KEYFRAMES}</style>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Source-to-Pay With SAP Ariba</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The procurement areas we implement and connect on the SAP Ariba platform.
                </p>
            </motion.div>

            {/* Mobile: static stacked cards, description always visible */}
            <div className="flex sm:hidden flex-col gap-4">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full min-h-[220px] overflow-hidden"
                    >
                        <CardBackground isActive={false} />
                        <div className="relative flex flex-col justify-start gap-2 px-4 pt-5 pb-6">
                            <h2 className="text-white text-xl font-semibold">{card.title}</h2>
                            <CardIcon card={card} isActive={false} className="self-center size-20 my-2" />
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-reveal grid, title at the top and description revealed at the
                bottom; auto-cycles and pauses on real hover/focus. */}
            <div
                className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[43px] w-full"
                onMouseLeave={() => setIsPaused(false)}
            >
                {CARDS.map((card, index) => {
                    const isActive = active === index;
                    return (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            onMouseEnter={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            onFocus={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            className="relative aspect-[258/335] overflow-hidden"
                        >
                            <CardBackground isActive={isActive} />
                            <div className="absolute inset-0 flex flex-col px-6 pt-8 pb-6 text-left">
                                <h2 className="text-white text-xl sm:text-2xl font-semibold">{card.title}</h2>
                                <div className="flex-1 min-h-0 flex justify-center items-start pt-5">
                                    <CardIcon card={card} isActive={isActive} className="h-full max-h-[9rem] w-auto" />
                                </div>
                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-white/85 text-base lg:text-lg font-light leading-relaxed pt-4">{card.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
