"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import threatPhoto from "@/assets/Services/CyberSecurity/service-threat-detection.webp";
import networkPhoto from "@/assets/Services/CyberSecurity/service-network.webp";
import endpointPhoto from "@/assets/Services/CyberSecurity/service-endpoint.webp";
import iamPhoto from "@/assets/Services/CyberSecurity/service-iam.webp";
import dataPhoto from "@/assets/Services/CyberSecurity/service-data-protection.webp";
import incidentPhoto from "@/assets/Services/CyberSecurity/service-incident-response.webp";

const CARDS = [
    {
        title: "Threat Detection and Response",
        desc: "Monitor systems in real-time to identify and neutralize threats before they escalate.",
        image: threatPhoto,
    },
    {
        title: "Network Security",
        desc: "Implement firewalls, intrusion detection systems, and secure network architectures to protect against unauthorized access.",
        image: networkPhoto,
    },
    {
        title: "Endpoint Protection",
        desc: "Secure devices such as laptops, desktops, and mobile devices with advanced malware protection and encryption.",
        image: endpointPhoto,
    },
    {
        title: "Identity and Access Management (IAM)",
        desc: "Control user access with multi-factor authentication (MFA) and role-based access controls to protect sensitive data.",
        image: iamPhoto,
    },
    {
        title: "Data Protection and Encryption",
        desc: "Ensure sensitive data is encrypted both in transit and at rest to prevent unauthorized access.",
        image: dataPhoto,
    },
    {
        title: "Incident Response and Recovery",
        desc: "Develop a robust incident response plan to minimize downtime and recover quickly from cyberattacks.",
        image: incidentPhoto,
    },
];

function ArrowIcon({ direction }) {
    return (
        <svg
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`size-full ${direction === "left" ? "-rotate-90" : "rotate-90"}`}
        >
            <path
                d="M22.7459 37.9097V7.58181M11.373 18.9548L22.7459 7.58181L34.1189 18.9548"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function CyberServices() {
    const trackRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = () => {
        const el = trackRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    useEffect(() => {
        updateScrollState();
        const onResize = () => updateScrollState();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const scrollByCard = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const amount = card ? card.offsetWidth + 20 : 335;
        el.scrollBy({ left: dir * amount, behavior: "smooth" });
    };

    return (
        <section className="w-full py-10 sm:py-16 px-8 sm:px-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-10 lg:gap-[80px] max-w-[1637px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 w-full lg:w-[340px] shrink-0 lg:pt-8"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Top Cybersecurity Services Keeping SST's Data Safe</h2>
                    <p className="text-[#55595E] text-xl font-light">
                        Layered protection across threats, networks, devices, identities, data, and recovery.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6 w-full min-w-0">
                    <motion.div
                        ref={trackRef}
                        onScroll={updateScrollState}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        // overflow-y-hidden is load-bearing, not decoration: setting only
                        // overflow-x makes the other axis compute to `auto` instead of
                        // `visible`, so the track was also a vertical scroll container and a
                        // touch drag could nudge the cards a few px up or down. Pinning y to
                        // hidden leaves the horizontal axis as the only one that moves, and
                        // overscroll-x-contain keeps a swipe past either end from chaining out
                        // to whatever scrolls behind it.
                        className="flex gap-8 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2"
                    >
                        {CARDS.map((card, index) => (
                            <motion.div
                                key={`${card.title}-${index}`}
                                data-card
                                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                // Mobile height is a floor, not a fixed size: at 260px wide the
                                // longest description ("Availability Management") runs past a
                                // hard 280px and spilled out of the card. The track is a flex row
                                // with the default stretch alignment, so every card still matches
                                // the tallest one and the row stays even.
                                className="snap-start shrink-0 w-[260px] sm:w-[335px] bg-white border border-black/[0.35] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex flex-col"
                            >
                                <div className="relative w-full aspect-[335/200] overflow-hidden">
                                    <Image src={card.image} alt="" fill className="object-cover" />
                                </div>
                                <div className="flex flex-col gap-3 px-6 sm:px-7 py-6 sm:py-7">
                                    <h2 className="text-[#2E3033] text-xl font-semibold">{card.title}</h2>
                                    <p className="text-[#55595E] text-base sm:text-lg font-light">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="flex items-center justify-center lg:justify-end gap-6">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => scrollByCard(-1)}
                            disabled={!canScrollLeft}
                            className={`flex items-center justify-center size-9 sm:size-[46px] transition-[color,transform] disabled:cursor-not-allowed ${canScrollLeft ? "text-black hover:scale-110" : "text-[#c7c7c7]"
                                }`}
                        >
                            <ArrowIcon direction="left" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => scrollByCard(1)}
                            disabled={!canScrollRight}
                            className={`flex items-center justify-center size-9 sm:size-[46px] transition-[color,transform] disabled:cursor-not-allowed ${canScrollRight ? "text-black hover:scale-110" : "text-[#c7c7c7]"
                                }`}
                        >
                            <ArrowIcon direction="right" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}




