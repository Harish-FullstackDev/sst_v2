"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Each word carries its own highlight flag so the two accent phrases
// ("deep SAP expertise" / "cloud, data, AI, and digital solutions") land on
// the blue/medium end state instead of the default gray/light one, while
// still animating in via the same scroll-scrubbed opacity+color sweep as
// every other word.
const WORDS = [
    { text: "We", highlight: false },
    { text: "close", highlight: false },
    { text: "the", highlight: false },
    { text: "gap", highlight: false },
    { text: "between", highlight: false },
    { text: "enterprise", highlight: false },
    { text: "technology", highlight: false },
    { text: "and", highlight: false },
    { text: "execution,", highlight: false },
    { text: "combining", highlight: false },
    { text: "deep", highlight: true },
    { text: "SAP", highlight: true },
    { text: "expertise", highlight: true },
    { text: "with", highlight: false },
    { text: "GCC", highlight: false },
    { text: "compliance", highlight: false },
    { text: "knowledge", highlight: false },
    { text: "across", highlight: false },
    { text: "cloud,", highlight: true },
    { text: "data,", highlight: true },
    { text: "AI,", highlight: true },
    { text: "and", highlight: true },
    { text: "digital", highlight: true },
    { text: "solutions", highlight: true },
    { text: "to", highlight: false },
    { text: "build", highlight: false },
    { text: "connected,", highlight: false },
    { text: "scalable,", highlight: false },
    { text: "competitive", highlight: false },
    { text: "businesses.", highlight: false },
];

const FULL_TEXT = WORDS.map((w) => w.text).join(" ");

// Each word fades over this many words' worth of scroll, so several words are
// mid-fade at once and the reveal reads as a soft wave instead of word-by-word
// steps.
const WORD_SPREAD = 4;
const DIM_COLOR = [199, 204, 209]; // #c7ccd1
const FINAL_COLOR = [74, 85, 104]; // #4a5568
const HIGHLIGHT_COLOR = [45, 142, 197]; // #2d8ec5

function mixColor(a, b, t) {
    const clamped = Math.min(1, Math.max(0, t));
    const r = Math.round(a[0] + (b[0] - a[0]) * clamped);
    const g = Math.round(a[1] + (b[1] - a[1]) * clamped);
    const bl = Math.round(a[2] + (b[2] - a[2]) * clamped);
    return `rgb(${r}, ${g}, ${bl})`;
}

// Every word derives its opacity/color from ONE shared, clamped MotionValue
// (`wordsRevealed`, a float 0..REVEAL_TOTAL) instead of computing its own
// independent scroll range. Word `i` is a pure, monotonic function of
// `(wordsRevealed - i) / WORD_SPREAD` clamped to [0,1] — it can only move
// towards 1 while wordsRevealed is rising (scrolling down) and only move back
// towards 0 while wordsRevealed is falling (scrolling up), regardless of what
// any other word is doing.
function Word({ word, index, wordsRevealed }) {
    const opacity = useTransform(wordsRevealed, (v) => {
        const t = Math.min(1, Math.max(0, (v - index) / WORD_SPREAD));
        return 0.18 + t * 0.82;
    });
    const color = useTransform(wordsRevealed, (v) => {
        const t = Math.min(1, Math.max(0, (v - index) / WORD_SPREAD));
        return mixColor(DIM_COLOR, word.highlight ? HIGHLIGHT_COLOR : FINAL_COLOR, t);
    });

    return (
        <motion.span
            style={{ opacity, color }}
            className={word.highlight ? "font-medium" : "font-light"}
        >
            {word.text}
        </motion.span>
    );
}

export default function TechnologyPartner() {
    const sectionRef = useRef(null);

    // No scroll-lock: the reveal plays while the section scrolls in normally.
    // It starts once the section's top edge is 20% up from the bottom of the
    // viewport ("start 0.8") and is complete by the time that edge reaches the
    // top ("start start"), so the text is fully readable before the section
    // owns the screen. The spring smooths out wheel/trackpad steps so the wave
    // glides rather than jumps.
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.8", "start start"],
    });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

    // The last word needs WORD_SPREAD more after its index to finish fading.
    const wordsRevealed = useTransform(smoothProgress, [0, 1], [0, WORDS.length - 1 + WORD_SPREAD], {
        clamp: true,
    });

    return (
        <section ref={sectionRef} className="relative w-full bg-white">
            <div className="flex flex-col gap-10 sm:gap-16 px-6 pt-10 pb-6 sm:px-[64px] sm:pt-[64px] sm:pb-0">
                <div className="flex flex-col gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-[#10161D] text-[28px] font-semibold leading-[1.4]"
                    >
                        A Technology Partner Built for Enterprise Complexity
                    </motion.h2>

                    <p
                        aria-label={FULL_TEXT}
                        className="capitalize max-w-[1300px] text-xl sm:text-[28px] leading-[1.6] tracking-[0.28px]"
                    >
                        <span aria-hidden="true">
                            {WORDS.map((word, index) => (
                                <span key={`${word.text}-${index}`}>
                                    <Word word={word} index={index} wordsRevealed={wordsRevealed} />
                                    {index < WORDS.length - 1 ? " " : ""}
                                </span>
                            ))}
                        </span>
                        <span className="sr-only">{FULL_TEXT}</span>
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-10 max-w-[1280px]"
                >
                    {/* Heading with its description stacked underneath; the button sits
                        to the right, vertically centered against that whole text block. */}
                    <div className="flex flex-col gap-2 max-w-[640px]">
                        {/* Same size, weight and accent as the other home headings. */}
                        <h3 className="font-houschka-pro text-xl sm:text-[28px] font-semibold leading-[1.4]">
                            <span className="text-[#2E3033]">Built for </span>
                            <span className="text-[#0061AF]">Enterprise Execution</span>
                        </h3>
                        <p className="capitalize text-[#4a5568] text-lg font-light leading-[1.6] tracking-[0.18px]">
                            We bring SAP, cloud, data, AI, and digital solutions together to help businesses
                            simplify operations, stay compliant, and scale with confidence.
                        </p>
                    </div>

                    <Link
                        href="/about-us"
                        className="self-start sm:self-center shrink-0 border border-[#0a3a52] px-8 py-3 text-lg font-light text-[#0a3a52] text-center transition-colors hover:bg-[#0a3a52] hover:text-white"
                    >
                        More About Us
                    </Link>
                </motion.div>

                {/* Fixed 64px (gap-10/16, same rhythm as above) below "Built for
                    Enterprise Execution" — never anything but that distance.
                    Negative margins matching this wrapper's own px-6/sm:px-[64px]
                    break the rule out of that padding so it spans the full section
                    width (edge to edge of the screen) instead of stopping at the
                    64px inset like the text above it. */}
                <div className="-mx-6 sm:-mx-[64px] h-px shrink-0 bg-[#8794a3]" />
            </div>
        </section>
    );
}
