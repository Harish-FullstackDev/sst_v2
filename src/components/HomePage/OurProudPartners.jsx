"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import sapLogo from "@/assets/HomePage/OurProudPartners/sap.svg";
import microsoftLogo from "@/assets/HomePage/OurProudPartners/microsoft.svg";
import awsLogo from "@/assets/HomePage/OurProudPartners/aws.png";
import salesforceLogo from "@/assets/HomePage/OurProudPartners/salesforce.svg";
import googleLogo from "@/assets/HomePage/OurProudPartners/google.svg";
import databricksLogo from "@/assets/HomePage/OurProudPartners/databricks.svg";
import uipathLogo from "@/assets/HomePage/OurProudPartners/uipath.svg";
import automationAnywhereLogo from "@/assets/HomePage/OurProudPartners/automation-anywhere.svg";
import appianLogo from "@/assets/HomePage/OurProudPartners/appian.svg";
import odooLogo from "@/assets/HomePage/OurProudPartners/odoo.svg";
import opentextLogo from "@/assets/HomePage/OurProudPartners/opentext.svg";
import sophosLogo from "@/assets/HomePage/OurProudPartners/sophos.svg";
import mcafeeLogo from "@/assets/HomePage/OurProudPartners/mcafee.svg";
import mongodbLogo from "@/assets/HomePage/OurProudPartners/mongodb.svg";
import couchbaseLogo from "@/assets/HomePage/OurProudPartners/couchbase.svg";
import redisLogo from "@/assets/HomePage/OurProudPartners/redis.svg";
import kafkaLogo from "@/assets/HomePage/OurProudPartners/kafka.svg";
import confluenceLogo from "@/assets/HomePage/OurProudPartners/confluence.svg";

// Heights are balanced by aspect ratio (roughly equal visual area), so a tall
// mark like Salesforce and a long wordmark like Confluence read at the same
// weight. width/height are the desktop size; mobile renders at 75%.
const PARTNERS = [
    { name: "SAP", logo: sapLogo, width: 78, height: 39 },
    { name: "Microsoft", logo: microsoftLogo, width: 120, height: 26 },
    { name: "AWS", logo: awsLogo, width: 60, height: 40 },
    { name: "Salesforce", logo: salesforceLogo, width: 57, height: 40 },
    { name: "Google", logo: googleLogo, width: 94, height: 32 },
    { name: "Databricks", logo: databricksLogo, width: 141, height: 22 },
    { name: "UiPath", logo: uipathLogo, width: 92, height: 32 },
    { name: "Automation Anywhere", logo: automationAnywhereLogo, width: 91, height: 33 },
    { name: "Appian", logo: appianLogo, width: 87, height: 34 },
    { name: "Odoo", logo: odooLogo, width: 96, height: 31 },
    { name: "OpenText", logo: opentextLogo, width: 122, height: 24 },
    { name: "Sophos", logo: sophosLogo, width: 131, height: 23 },
    { name: "McAfee", logo: mcafeeLogo, width: 122, height: 25 },
    { name: "MongoDB", logo: mongodbLogo, width: 105, height: 28 },
    { name: "Couchbase", logo: couchbaseLogo, width: 115, height: 27 },
    { name: "Redis", logo: redisLogo, width: 94, height: 32 },
    { name: "Kafka", logo: kafkaLogo, width: 81, height: 37 },
    { name: "Confluence", logo: confluenceLogo, width: 154, height: 20 },
];

// Continuous logo strip: the list renders twice and the track slides left by
// one copy (-50%), so the loop has no seam. Hover pauses it; with
// prefers-reduced-motion it stops and falls back to a centred, wrapping grid.
const MARQUEE_CSS = `
@keyframes partner-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.partner-marquee-track { animation: partner-marquee 45s linear infinite; }
.partner-marquee:hover .partner-marquee-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .partner-marquee { -webkit-mask-image: none; mask-image: none; }
  .partner-marquee-track { animation: none; width: 100%; justify-content: center; }
  .partner-marquee-track > div:first-child { flex-wrap: wrap; justify-content: center; row-gap: 2rem; padding-right: 0; }
  .partner-marquee-copy { display: none; }
}
`;

export default function OurProudPartners() {
    return (
        <section className="w-full bg-[#f3f6f9] pt-10 pb-12 sm:pt-16 sm:pb-16 px-8 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-8 w-full"
            >
                {/* Same size, weight and accent as the FAQ heading below ("Actually Ask"). */}
                <h2 className="text-xl sm:text-[28px] font-semibold text-center max-w-[818px]">
                    <span className="text-[#2E3033]">Our Proud </span>
                    <span className="text-[#2D8EC5]">Partners</span>
                </h2>

                <style>{MARQUEE_CSS}</style>
                <div className="partner-marquee w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                    <div className="partner-marquee-track flex w-max items-center">
                        {[0, 1].map((copy) => (
                            <div
                                key={copy}
                                aria-hidden={copy === 1 ? true : undefined}
                                className={`flex shrink-0 items-center gap-x-12 sm:gap-x-16 pr-12 sm:pr-16 ${copy === 1 ? "partner-marquee-copy" : ""}`}
                            >
                                {PARTNERS.map((partner) => (
                                    <Image
                                        key={partner.name}
                                        src={partner.logo}
                                        alt={copy === 1 ? "" : partner.name}
                                        width={partner.width}
                                        height={partner.height}
                                        style={{ "--logo-h": `${partner.height}px` }}
                                        className="w-auto h-[calc(var(--logo-h)*0.75)] sm:h-[var(--logo-h)] object-contain shrink-0"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
