"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, CodeXml, Layers, LayoutGrid } from "lucide-react";

// The five service categories from the /services landing page. Ids and titles
// come straight from its data file so this section can never drift out of sync
// with the landing page or the mega menu; each card links to its band there
// (/services#sap, …).
import { CATEGORIES } from "@/components/Services/Landing/servicesLandingData";

// Custom mark for Digital Transformation: a square softening into a rounded
// square and then a circle, read left to right as "one form becoming another".
// Same API and stroke style as the lucide icons beside it.
function MorphIcon({ strokeWidth = 2, className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            className={className}
        >
            <rect x="0.75" y="8.75" width="6.5" height="6.5" />
            <rect x="8.75" y="8.75" width="6.5" height="6.5" rx="1.8" />
            <circle cx="20" cy="12" r="3.25" />
        </svg>
    );
}

// One hairline icon per category, floating free (no frame) and centred in the
// open space between the title and the summary, like a faint watermark.
const ICONS = {
    sap: Layers,
    microsoft: LayoutGrid,
    cloud: Cloud,
    "digital-transformation": MorphIcon,
    "design-development": CodeXml,
};

// One-line summaries for the home page, written from each category's service list.
const SUMMARIES = {
    sap: "Implementation, line-of-business solutions, conversion, rollout, migration, and AMS support across SAP.",
    microsoft: "Dynamics 365 and Power BI implementation, with AMS, migration, and rollout services.",
    cloud: "Design, migration, and management on Google Cloud Platform, Amazon Web Services, and Azure.",
    "digital-transformation": "RPA, AI and machine learning, e-invoicing, IoT, big data, and cyber security.",
    "design-development": "Full-stack development, UI/UX design, and custom software development.",
};

const CARDS = CATEGORIES.map((category) => ({
    id: category.id,
    title: category.title,
    desc: SUMMARIES[category.id],
    icon: ICONS[category.id],
    href: `/services#${category.id}`,
}));

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Image-free navy card, the home page's take on the Migration Scenarios card
// (navy #0A2B3E/#003756, deep blue #1C5F85, brand blue #2D8EC5 only as a line).
// Everything on hover is slow and soft, nothing swaps:
// - the card rises 3px onto a shadow that fades in (opacity, not box-shadow,
//   so the move stays smooth); the Link itself stays put so the hover area
//   never slides out from under the cursor,
// - a deep-blue lift from the foot, one light sweep, and a 1px hairline frame
//   that draws itself (top, then sides, then bottom),
// - the arrow's circle fills white and the arrow turns from pointing right to
//   up-right with a gentle settle,
// - the summary brightens a touch.
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

function Hairline({ className, delay }) {
    return (
        <span
            className={`absolute bg-[#2D8EC5]/80 transition-transform duration-700 ease-out delay-0 group-hover:[transition-delay:var(--d)] ${className}`}
            style={{ "--d": delay }}
        />
    );
}

function ServiceCard({ card }) {
    const Icon = card.icon;
    return (
        <Link href={card.href} className="group relative block h-full focus-visible:outline-none">
            <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-4 -bottom-1 top-1/2 bg-[#0A2B3E]/45 blur-2xl opacity-0 transition-opacity duration-700 ${EASE} group-hover:opacity-100 group-focus-visible:opacity-100`}
            />
            <div
                className={`relative flex h-full min-h-[320px] lg:min-h-[340px] flex-col justify-between overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)] p-6 lg:p-5 xl:p-6 will-change-transform transition-transform duration-700 ${EASE} group-hover:-translate-y-[3px] group-focus-visible:-translate-y-[3px]`}
            >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 bg-[linear-gradient(to_top,rgba(28,95,133,0.45),rgba(28,95,133,0)_70%)]" />
                    {/* One light sweep on enter; snaps back invisibly on leave. */}
                    <div className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.08),transparent)] transition-transform duration-0 ease-out group-hover:translate-x-[300%] group-hover:duration-[1400ms]" />
                    <Hairline delay="0ms" className="inset-x-0 top-0 h-px origin-left scale-x-0 group-hover:scale-x-100" />
                    <Hairline delay="150ms" className="inset-y-0 right-0 w-px origin-top scale-y-0 group-hover:scale-y-100" />
                    <Hairline delay="150ms" className="inset-y-0 left-0 w-px origin-top scale-y-0 group-hover:scale-y-100" />
                    <Hairline delay="300ms" className="inset-x-0 bottom-0 h-px origin-left scale-x-0 group-hover:scale-x-100" />
                </div>

                <div className="relative flex items-start justify-between gap-4">
                    <h3 className="text-white text-xl font-semibold leading-[1.4]">{card.title}</h3>
                    <span
                        aria-hidden="true"
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 text-white transition-[background-color,border-color,color] duration-500 ${EASE} group-hover:border-white group-hover:bg-white group-hover:text-[#0A2B3E]`}
                    >
                        <ArrowRight
                            strokeWidth={2.25}
                            className="h-[18px] w-[18px] transition-transform duration-700 ease-[cubic-bezier(0.34,1.4,0.64,1)] group-hover:-rotate-45"
                        />
                    </span>
                </div>

                {/* Watermark icon, centred across the card and at the same height in
                    every card so the row lines up. On hover
                    it only fades up and grows 6% (opacity + scale on their own
                    layer, no colour or layout animation) so it stays smooth. */}
                <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
                    <Icon
                        strokeWidth={0.55}
                        className={`h-[88px] w-[88px] text-white opacity-[0.12] will-change-[scale,opacity] transition-[scale,opacity] duration-[900ms] ${EASE} group-hover:scale-[1.06] group-hover:opacity-[0.22]`}
                    />
                </div>

                <p className="relative pt-4 text-white/75 text-base font-light leading-[1.5] transition-colors duration-700 ease-out group-hover:text-white/95">
                    {card.desc}
                </p>
            </div>
        </Link>
    );
}

export default function Services() {
    return (
        <section id="sst-services" className="w-full bg-white py-10 sm:py-16 px-6 sm:px-16">
            <div className="flex flex-col gap-8 sm:gap-16">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2 max-w-[808px]"
                    >
                        {/* Same size, weight and accent as the other home headings
                            (Our Proud Partners, Questions Enterprise Buyers Actually Ask). */}
                        <h2 className="text-xl sm:text-[28px] font-semibold leading-[1.4]">
                            <span className="text-[#2E3033]">Everything an </span>
                            <span className="text-[#0061AF]">Enterprise Needs</span>
                            <span className="text-[#2E3033]"> to Run on Modern Technology</span>
                        </h2>
                        <p className="text-[#55595E] text-base sm:text-lg font-light leading-[1.5] max-w-[600px]">
                            A complete technology foundation that connects strategy, systems, security, data, and
                            operations to help enterprises scale with confidence.
                        </p>
                    </motion.div>

                    {/* Same outlined button as "More About Us" in Built for Enterprise Execution. */}
                    <Link
                        href="/services"
                        className="self-start md:self-end shrink-0 btn-premium px-8 py-3 text-lg font-light text-center"
                    >
                        Explore Our Services
                    </Link>
                </div>

                {/* All five cards in view at once: one row on desktop, wrapping on
                    tablets, stacked on phones. */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full"
                >
                    {CARDS.map((card) => (
                        <motion.div key={card.id} variants={itemVariants} className="h-full">
                            <ServiceCard card={card} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
