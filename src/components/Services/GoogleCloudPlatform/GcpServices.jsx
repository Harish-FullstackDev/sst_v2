"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuBrainCircuit, LuCodeXml, LuCpu, LuDatabase, LuNetwork, LuShieldCheck } from "react-icons/lu";

const SERVICES = [
    {
        icon: LuDatabase,
        title: "Storage & Databases",
        desc: "Intelligent tiering object storage with lifecycle automation, globally replicated managed databases like Cloud Spanner, multi-cloud compatible relational databases, and high-performance NoSQL with Firestore and Bigtable.",
    },
    {
        icon: LuCpu,
        title: "Compute",
        desc: "Advanced VMs with GPU/TPU acceleration, multi-cloud Kubernetes orchestration via Anthos, auto-scaling apps, and event-driven serverless solutions powered by Cloud Functions and Cloud Run.",
    },
    {
        icon: LuNetwork,
        title: "Networking",
        desc: "Private Service Connect, global load balancing enhancements, hybrid connectivity tools, and AI-powered network insights, ensuring low latency and high availability.",
    },
    {
        icon: LuBrainCircuit,
        title: "Big Data & Machine Learning",
        desc: "Unified data management with BigQuery Omni, Vertex AI advancements for custom model building, and pre-trained models for faster insights. Enhanced ETL tools streamline big data processing workflows.",
    },
    {
        icon: LuShieldCheck,
        title: "Identity & Security",
        desc: "Confidential VMs for secure computing, Assured Workloads for compliance management, centralized IAM improvements, and AI-driven threat detection in Chronicle Security Operations.",
    },
    {
        icon: LuCodeXml,
        title: "Developer Tools",
        desc: "Cloud Build with integrated vulnerability scanning, enhanced Cloud Source Repositories for multi-cloud compatibility, and serverless CI/CD pipelines for faster deployments.",
    },
];

const AUTOPLAY_INTERVAL = 3000;

// No photos: navy cards (#0A2B3E to #003756) with each service's Lucide icon
// (same set as the rest of the site) centred just below the title in a fine
// line. When a card opens, a soft deep-blue lift rises from the foot and the
// icon redraws itself stroke by stroke and brightens, the pen-sketch motion from
// the Microsoft Rollout panel. Remounting the icon on open (keyed) restarts the
// draw every time.
const DRAW_KEYFRAMES = "@keyframes gcp-draw { to { stroke-dashoffset: 0; } }";

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

function ServiceIcon({ service, isActive, className = "" }) {
    return (
        <service.icon
            aria-hidden="true"
            key={isActive ? "drawing" : "resting"}
            strokeWidth={0.75}
            className={`transition-colors duration-700 ${className} ${isActive
                ? "text-white/55 [&_*]:[stroke-dasharray:100] [&_*]:[stroke-dashoffset:100] [&_*]:animate-[gcp-draw_1.8s_cubic-bezier(0.65,0,0.35,1)_forwards]"
                : "text-white/20"
                }`}
        />
    );
}

// Desktop grid auto-advances the reveal one card at a time; hovering a card
// takes over, and on mouse-out autoplay resumes from where it left off.
// Six services, so the grid runs 2 columns on md and 3 on xl (two rows of three)
// instead of the donor's single row of four. Mobile shows every description open.
export default function GcpServices() {
    const [autoIndex, setAutoIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const activeIndex = hoveredIndex ?? autoIndex;

    useEffect(() => {
        if (hoveredIndex !== null) return;
        const id = setInterval(() => {
            setAutoIndex((i) => (i + 1) % SERVICES.length);
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(id);
    }, [hoveredIndex]);

    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-16">
            <style>{DRAW_KEYFRAMES}</style>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Unlocking the Power of <span className="text-[#2D8EC5]">Google Cloud Platform</span> Services at SST
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The Google Cloud service families we design, deploy, and run for our clients
                </p>
            </motion.div>

            {/* Mobile: static stacked cards, description always visible. Height grows
                with the copy (no fixed px height) so longer descriptions never clip. */}
            <div className="flex md:hidden flex-col gap-4">
                {SERVICES.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full min-h-[220px] overflow-hidden"
                    >
                        <CardBackground isActive={false} />
                        <div className="relative flex flex-col justify-start gap-2 px-4 py-5">
                            <h2 className="text-white text-xl font-semibold">{service.title}</h2>
                            <ServiceIcon service={service} isActive={false} className="self-center size-20 my-2" />
                            <p className="text-white/85 text-sm font-light">{service.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: auto-advancing reveal grid, hover takes over on demand. */}
            <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-8">
                {SERVICES.map((service, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative aspect-[4/5] xl:aspect-square overflow-hidden"
                        >
                            <CardBackground isActive={isActive} />
                            {/* One column: title, icon, description. The icon sits in the
                                flexible middle row, centred and starting just under the title;
                                as the description row opens it takes room from that row, so
                                the icon eases smaller instead of running into the copy. */}
                            <div className="absolute inset-0 flex flex-col px-6 pt-8 pb-6 text-left">
                                <h2 className="text-white text-xl sm:text-2xl font-semibold">{service.title}</h2>
                                <div className="flex-1 min-h-0 flex justify-center items-start pt-5">
                                    <ServiceIcon service={service} isActive={isActive} className="h-full max-h-[10rem] w-auto" />
                                </div>
                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-white/85 text-base xl:text-lg font-light pt-4">{service.desc}</p>
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
