"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bannerImg from "@/assets/HomePage/IndustriesWeServe/public-sector.png";
import arrowIcon from "@/assets/HomePage/IndustriesWeServe/arrow-right-bold.svg";
import manufacturingImg from "@/assets/HomePage/Industries/manufacturing.webp";
import retailImg from "@/assets/HomePage/Industries/retail_consumer.webp";
import governmentImg from "@/assets/HomePage/Industries/government_public_sector.webp";
import financialImg from "@/assets/HomePage/Industries/banking_financial_services.webp";
import energyImg from "@/assets/HomePage/Industries/energy_utilities.webp";
import engineeringImg from "@/assets/HomePage/Industries/engineering_construction.webp";
import healthcareImg from "@/assets/HomePage/Industries/healthcare_life_sciences.webp";
import technologyMediaImg from "@/assets/HomePage/Industries/technology.webp";
import transportationImg from "@/assets/HomePage/Industries/transportation_logistics.webp";
import educationImg from "@/assets/HomePage/Industries/education_research.webp";

// Names, descriptions and photos carried over from sst_v2's former
// Industry-Specific Solutions carousel; the presentation is sst_website_current's.
const INDUSTRIES = [
    {
        title: "Manufacturing",
        desc: "Streamlining supply chain, production planning, and plant-floor integration with SAP and IoT driven systems.",
        image: manufacturingImg,
    },
    {
        title: "Retail & Consumer",
        desc: "Connecting inventory, logistics, and customer experience across every channel, from store to app to fulfillment.",
        image: retailImg,
    },
    {
        title: "Government & Public Sector",
        desc: "Delivering GCC compliant, secure systems built for accountability and scale.",
        image: governmentImg,
    },
    {
        title: "Banking & Financial Services",
        desc: "Modernizing core banking and finance systems without compromising on security or regulatory reporting.",
        image: financialImg,
    },
    {
        title: "Energy & Utilities",
        desc: "Modernizing asset management, field operations, and grid systems built for uptime and regulatory reporting.",
        image: energyImg,
    },
    {
        title: "Engineering & Construction",
        desc: "Coordinating project controls, procurement, and site execution across complex capital programs.",
        image: engineeringImg,
    },
    {
        title: "Healthcare & Life Sciences",
        desc: "Supporting validated, compliant systems across clinical, research, and life sciences operations.",
        image: healthcareImg,
    },
    {
        title: "Technology, Media & Communications",
        desc: "Scaling billing, network, and content platforms for high-volume technology and media providers.",
        image: technologyMediaImg,
    },
    {
        title: "Transportation & Logistics",
        desc: "Connecting fleet, freight, and supply chain systems for real-time visibility and on-time delivery.",
        image: transportationImg,
    },
    {
        title: "Education & Research",
        desc: "Unifying student, academic, research, and administrative systems on one connected platform.",
        image: educationImg,
    },
];

const PAGE_SIZE = 3;
// Furthest-left card the track can start at — the view always ends on a full
// row of PAGE_SIZE cards, so with 10 industries the last step moves 1, not 3.
const MAX_START = Math.max(0, INDUSTRIES.length - PAGE_SIZE);

function ImageCard({ item }) {
    return (
        <div className="group relative h-[280px] sm:h-[340px] w-full border border-[#8794a3] overflow-hidden bg-white">
            {/* Image + gradient — visible by default, fades out on hover (desktop only;
                touch devices have no hover, so mobile keeps this state permanently and
                shows the description underneath instead, see the sm:hidden block below). */}
            <div className="absolute inset-0 transition-opacity duration-500 ease-out sm:group-hover:opacity-0">
                <Image src={item.image} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
            </div>

            {/* Desktop/tablet: title + description share the card face, description
                fades and slides in on hover as the image fades out. The spacer under
                the title holds it at the top; on hover the spacer's flex-grow eases to
                ~0 and justify-end keeps the description pinned at the bottom, so only
                the title glides down to sit just above it. (0.0001,
                not 0, so browsers interpolate the grow instead of snapping.) */}
            <div className="hidden sm:flex relative z-10 h-full flex-col justify-end p-8">
                <p className="text-2xl font-medium leading-normal text-white transition-colors duration-500 group-hover:text-[#10161d]">
                    {item.title}
                </p>
                <div aria-hidden="true" className="grow min-h-4 transition-[flex-grow] duration-500 ease-out group-hover:grow-[0.0001]" />
                <p className="text-lg font-light leading-normal text-[#4a5568] opacity-0 translate-y-2 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.desc}
                </p>
            </div>

            {/* Mobile: no hover, so title sits over the image and the description
                follows immediately below it, always visible. */}
            <div className="sm:hidden relative z-10 h-full flex flex-col justify-between p-6">
                <p className="text-xl font-medium leading-normal text-white">{item.title}</p>
            </div>
        </div>
    );
}

function IndustryCard({ item }) {
    return <ImageCard item={item} />;
}

function useCarouselArrows(ref, deps = []) {
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const update = () => {
        const el = ref.current;
        if (!el) return;
        setCanPrev(el.scrollLeft > 4);
        setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    useEffect(() => {
        update();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return { canPrev, canNext, update };
}

function scrollByOneCard(ref, direction) {
    const el = ref.current;
    if (!el) return;
    const first = el.children[0];
    const second = el.children[1];
    const step = first && second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
}

function ArrowButton({ direction, disabled, onClick }) {
    return (
        <button
            type="button"
            aria-label={direction === -1 ? "Previous" : "Next"}
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center size-12 rounded-full border border-[#8794a3] transition-opacity duration-300 ${disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-[#10161d] hover:border-[#10161d] group/arrow"
                }`}
        >
            <Image
                src={arrowIcon}
                alt=""
                className={`size-6 transition-colors ${direction === -1 ? "-scale-x-100" : ""} ${disabled ? "" : "group-hover/arrow:invert"
                    }`}
            />
        </button>
    );
}

export default function IndustriesWeServe() {
    // Index of the leftmost visible card on desktop.
    const [start, setStart] = useState(0);
    const mobileScrollerRef = useRef(null);
    const mobileArrows = useCarouselArrows(mobileScrollerRef);

    return (
        <section className="w-full">
            {/* Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full bg-[#10161d] flex flex-col sm:flex-row"
            >
                <div className="flex flex-col justify-center gap-2 px-6 py-10 sm:px-[64px] sm:py-16 sm:w-[457px] shrink-0">
                    <h2 className="text-white text-[28px] font-semibold">
                        <span className="text-[#0061AF]">Industries</span> We Serve
                    </h2>
                    <p className="text-white/70 text-lg font-light">
                        Built for the sectors that can&apos;t afford disruption
                    </p>
                </div>
                <div className="relative w-full h-[160px] sm:h-auto sm:w-full">
                    <Image src={bannerImg} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#1c5f85]/50 mix-blend-overlay" />
                </div>
            </motion.div>

            {/* Cards */}
            <div className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-8">
                {/* Desktop/tablet: 3-cards-in-view track, stepping 3 cards per click
                    (clamped at MAX_START so the last step only moves what's left) */}
                <div className="hidden lg:flex flex-col gap-6">
                    <div className="w-full overflow-hidden">
                        {/* One card + one gap-8 = (100% - 64px)/3 + 32px = (100% + 32px)/3,
                            where 100% is the track's own width — the visible row's width. */}
                        <div
                            className="flex gap-8 transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(calc(-${start} * (100% + 32px) / 3))` }}
                        >
                            {INDUSTRIES.map((item) => (
                                <div key={item.title} className="w-[calc((100%-64px)/3)] shrink-0 min-w-0">
                                    <IndustryCard item={item} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-6">
                        <div className="flex-1 h-2 rounded-full bg-[#d3dae2]">
                            <div
                                className="h-full rounded-full bg-[#1c5f85] transition-all duration-500 ease-out"
                                style={{ width: `${((start + PAGE_SIZE) / INDUSTRIES.length) * 100}%` }}
                            />
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <ArrowButton
                                direction={-1}
                                disabled={start === 0}
                                onClick={() => setStart((s) => Math.max(0, s - PAGE_SIZE))}
                            />
                            <ArrowButton
                                direction={1}
                                disabled={start === MAX_START}
                                onClick={() => setStart((s) => Math.min(MAX_START, s + PAGE_SIZE))}
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile / tablet: horizontal snap-scroll */}
                <div className="lg:hidden flex flex-col gap-6">
                    <div
                        ref={mobileScrollerRef}
                        onScroll={mobileArrows.update}
                        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory p-2 -m-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {INDUSTRIES.map((item) => (
                            <div key={item.title} className="snap-start shrink-0 w-[260px] sm:w-[300px]">
                                <IndustryCard item={item} />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <ArrowButton
                            direction={-1}
                            disabled={!mobileArrows.canPrev}
                            onClick={() => scrollByOneCard(mobileScrollerRef, -1)}
                        />
                        <ArrowButton
                            direction={1}
                            disabled={!mobileArrows.canNext}
                            onClick={() => scrollByOneCard(mobileScrollerRef, 1)}
                        />
                    </div>
                </div>
            </div>

            {/* Figma's frame is taller than the banner + white cards panel combined
                (800px vs. 240+469=709px) — the white panel doesn't reach the bottom
                of the frame, so the same banner photo shows through, unobscured, in
                a thin reveal strip before the section ends. Same tint overlay as the
                banner so it reads as one continuous photo, not a new image. */}
            <div className="relative w-full h-[61px] sm:h-[91px]">
                <Image src={bannerImg} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#1c5f85]/50 mix-blend-overlay" />
            </div>
        </section>
    );
}
