"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import userResearchPhoto from "@/assets/Services/UiUxDesign/user-research.jpg";
import wireframingPhoto from "@/assets/Services/UiUxDesign/wireframing.jpg";
import prototypingPhoto from "@/assets/Services/UiUxDesign/prototyping.jpg";
import visualDesignPhoto from "@/assets/Services/UiUxDesign/visual-design.jpg";
import usabilityTestingPhoto from "@/assets/Services/UiUxDesign/usability-testing.jpg";
import interactionDesignPhoto from "@/assets/Services/UiUxDesign/interaction-design.jpg";

const CARDS = [
    {
        title: "User Research",
        desc: "Gathering user needs and pain points via interviews and surveys.",
        image: userResearchPhoto,
    },
    {
        title: "Wireframing",
        desc: "Creating basic layouts to visualize structure before detailed design work.",
        image: wireframingPhoto,
    },
    {
        title: "Prototyping",
        desc: "Developing interactive models to test user interactions and gather feedback.",
        image: prototypingPhoto,
    },
    {
        title: "Visual Design",
        desc: "Crafting interface elements like colors, typography, and icons.",
        image: visualDesignPhoto,
    },
    {
        title: "Usability Testing",
        desc: "Evaluating designs with real users to identify issues and refine.",
        image: usabilityTestingPhoto,
    },
    {
        title: "Interaction Design",
        desc: "Designing user interactions, navigation flows, animations, and feedback mechanisms.",
        image: interactionDesignPhoto,
    },
];

export default function UiUxServices() {
    // Cycles the revealed card, pausing while the grid is hovered or focused.
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
        <section className="w-full bg-[#f5f6f6] py-10 px-8 sm:p-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[841px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Transforming User Experiences With <span className="text-[#2D8EC5]">UI/UX Design</span> Services at SST
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The disciplines that take an idea from user insight to a polished, tested interface.
                </p>
            </motion.div>

            {/* Mobile: stacked cards, description always visible */}
            <div className="flex sm:hidden flex-col gap-4">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.06 }}
                        className="relative w-full min-h-[200px] overflow-hidden"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="relative flex flex-col gap-2 px-5 pt-5 pb-6">
                            <h3 className="text-white text-xl font-semibold">{card.title}</h3>
                            <p className="text-white/85 text-sm font-light max-w-[300px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* sm and up: three-column hover-reveal grid */}
            <div
                className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
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
                            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                            onMouseEnter={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            onFocus={() => {
                                setIsPaused(true);
                                setActive(index);
                            }}
                            tabIndex={0}
                            className="relative aspect-[4/3] overflow-hidden outline-none"
                        >
                            <Image
                                src={card.image}
                                alt=""
                                fill
                                className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : ""}`}
                            />
                            <div
                                className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-[#00447A]/80" : "bg-black/35"}`}
                            />
                            <div className="absolute inset-x-0 bottom-0 px-6 pb-6 flex flex-col">
                                <h3 className="text-white text-xl lg:text-2xl font-semibold">{card.title}</h3>
                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-white/90 text-base lg:text-lg font-light leading-relaxed pt-2">{card.desc}</p>
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
