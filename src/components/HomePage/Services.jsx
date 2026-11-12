"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cloud, CodeXml, Layers, LayoutGrid } from "lucide-react";

// The five service categories from the /services landing page. Ids and titles
// come straight from its data file so this section can never drift out of sync
// with the landing page or the mega menu; each card links to its band there
// (/services#sap, …).
import { CATEGORIES } from "@/components/Services/Landing/servicesLandingData";

// Custom mark for Digital Transformation: a square softening into a rounded
// square and then a circle, read left to right as "one form becoming another".
// Same API and stroke style as the lucide icons beside it.
function MorphIcon({ strokeWidth = 2, className }) {
    // A row of three shapes is short and wide, so it draws on a cropped
    // viewBox at 1.45x the width of the square icons; the stroke is scaled
    // down to match their line weight.
    return (
        <svg
            viewBox="0 7 24 10"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth * 0.69}
            strokeLinejoin="round"
            className={`${className} !w-[58px]`}
        >
            <rect x="0.75" y="8.75" width="6.5" height="6.5" />
            <rect x="8.75" y="8.75" width="6.5" height="6.5" rx="1.8" />
            <circle cx="20" cy="12" r="3.25" />
        </svg>
    );
}

// One fine-line icon per category, unframed, at the top of each card.
const ICONS = {
    sap: Layers,
    microsoft: LayoutGrid,
    cloud: Cloud,
    "digital-transformation": MorphIcon,
    "design-development": CodeXml,
};

// One-line summaries for the home page, written from each category's service list.
const SUMMARIES = {
    sap: "Implementation, rollout, migration, conversion, and AMS support across SAP.",
    microsoft: "Dynamics 365 and Power BI implementation, migration, and support.",
    cloud: "Design, migration, and management on GCP, AWS, and Azure.",
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
// - the icon and summary brighten a touch and the "Explore" arrow eases right.
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
                className={`relative flex h-full min-h-[320px] lg:min-h-[340px] flex-col overflow-hidden bg-[linear-gradient(to_top_right,#0A2B3E,#003756)] p-6 lg:p-5 xl:p-6 will-change-transform transition-transform duration-700 ${EASE} group-hover:-translate-y-[3px] group-focus-visible:-translate-y-[3px]`}
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

                {/* Same order as the /services page cards: icon at the top; title,
                    description and "Explore ->" grouped at the foot. */}
                <div className="relative flex h-full flex-col items-start gap-4">
                    {/* The icon sits vertically centred in the free space between the
                        card's top edge and the title: the negative margins cancel the
                        card's top padding and the gap below, so the space above and
                        below the icon is equal. */}
                    <div className="flex flex-1 items-center -mt-6 lg:-mt-5 xl:-mt-6 -mb-4">
                        <Icon
                            aria-hidden="true"
                            strokeWidth={1}
                            className={`h-10 w-10 text-white opacity-70 transition-opacity duration-700 ${EASE} group-hover:opacity-100`}
                        />
                    </div>
                    <h3 className="text-white text-xl font-semibold leading-[1.4]">{card.title}</h3>
                    <p className="text-white/75 text-base font-light leading-[1.5] transition-colors duration-700 ease-out group-hover:text-white/95">
                        {card.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-white">
                        Explore
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className={`size-5 transition-transform duration-700 ${EASE} group-hover:translate-x-1`}
                        >
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
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
                            <span className="text-[#2D8EC5]">Enterprise Needs</span>
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
