"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// The five service categories from the /services landing page. Ids and titles
// come straight from its data file so this section can never drift out of sync
// with the landing page or the mega menu; each card links to its band there
// (/services#sap, …).
import { CATEGORIES } from "@/components/Services/Landing/servicesLandingData";

// Photos reuse the home page's existing capability images, one per category.
import sapImg from "@/assets/HomePage/Capabilities/enterprise_transformation.webp";
import microsoftImg from "@/assets/HomePage/Capabilities/data_intelligence.webp";
import cloudImg from "@/assets/HomePage/Capabilities/cloud_infrastructure.webp";
import digitalImg from "@/assets/HomePage/Capabilities/intelligent_automation.webp";
import designDevImg from "@/assets/HomePage/capab/digital_engineering.webp";

const IMAGES = {
    sap: sapImg,
    microsoft: microsoftImg,
    cloud: cloudImg,
    "digital-transformation": digitalImg,
    "design-development": designDevImg,
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
    image: IMAGES[category.id],
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

// Same photo card the section used before: image under a dark gradient, title at
// the top and summary at the bottom, the photo easing in and the wash deepening
// on hover.
function ServiceCard({ card }) {
    return (
        <Link href={card.href} className="group relative block w-full overflow-hidden aspect-[7/8]">
            <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/30 transition-colors duration-500 group-hover:from-black/80 group-hover:via-black/45 group-hover:to-black/25 pointer-events-none" />
            {/* Bottom wash so the summary at the foot reads on any photo. */}
            <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/50 to-transparent pointer-events-none" />
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-between p-6 lg:p-5 xl:p-6">
                <h3 className="text-white text-xl font-semibold leading-[1.4]">{card.title}</h3>
                <p className="text-white/90 text-base font-light leading-[1.5] pt-2">{card.desc}</p>
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
                        className="self-start md:self-end shrink-0 border border-[#0a3a52] px-8 py-3 text-lg font-light text-[#0a3a52] text-center transition-colors hover:bg-[#0a3a52] hover:text-white"
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
                        <motion.div key={card.id} variants={itemVariants}>
                            <ServiceCard card={card} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
