"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AVATAR = "/blog/default-author.svg";

const TESTIMONIALS = [
    {
        avatar: AVATAR,
        name: "Tharanidharen",
        role: "Graphic Designer",
        quote:
            "I get to shape how the brand actually looks and feels across every touchpoint, not just push pixels on a template. That creative ownership is rare to find.",
    },
    {
        avatar: AVATAR,
        name: "Santhosh",
        role: "SAP MM",
        quote:
            "Every SAP engagement here is run with the same discipline, whether it's a small support ticket or a full rollout. That consistency is what clients keep coming back for.",
    },
    {
        avatar: AVATAR,
        name: "Deepak",
        role: "Sales Manager",
        quote:
            "I'm trusted to build client relationships from the first conversation onward, not just hand off leads. That ownership is what keeps the work interesting.",
    },
    {
        avatar: AVATAR,
        name: "Sneha",
        role: "Associate Project Coordinator",
        quote:
            "Coordinating across teams taught me more in a year here than I expected. Everyone is approachable, and there's always someone willing to explain the why behind a decision.",
    },
    {
        avatar: AVATAR,
        name: "Aravindh",
        role: "Associate SAP MM Consultant",
        quote:
            "Working on live procurement and inventory processes means every configuration choice shows up on the shop floor. The seniors here walk you through the reasoning, not just the steps.",
    },
    {
        avatar: AVATAR,
        name: "Harish",
        role: "Full Stack Developer",
        quote:
            "I build features end to end, from the database to the page a visitor sees. Shipping work that goes live quickly, with real feedback, is what makes the job rewarding.",
    },
    {
        avatar: AVATAR,
        name: "Santhiyarani",
        role: "HR Executive",
        quote:
            "Helping people settle in and grow is the best part of my role. Here, HR is part of how the team works every day, not a separate department people only visit for paperwork.",
    },
];

// Continuous marquee: the list renders twice and the track slides left by
// exactly one copy (-50%), so the loop is seamless. Hover pauses it, and for
// prefers-reduced-motion the second copy is hidden and the row simply wraps.
const MARQUEE_CSS = `
@keyframes team-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.team-marquee-track { animation: team-marquee 40s linear infinite; }
.team-marquee:hover .team-marquee-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .team-marquee-track { animation: none; flex-wrap: wrap; justify-content: center; width: 100%; }
  .team-marquee-copy { display: none; }
}
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TeamStory() {
    return (
        <section className="bg-[#fdfdfd] py-5 sm:py-8">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* These two hairlines are identical divs, but a 1px box at a fractional y
                    offset has its 10% of black split across two device rows, and that
                    split is what the eye reads as thickness. Two things had to be true
                    for them to match:

                    1. Whole-number layout between them — the heading block was 73.328px
                       and the card row 245.75px, so the rules sat on different subpixel
                       phases (.578 vs .656) and the lower one rendered heavier. The
                       leading pins on the h2 and the quote below fix that.
                    2. A gap that stays whole once multiplied by the device pixel ratio.
                       With 517px between them, 517 x 1.4 = 723.8 put them back on
                       different phases at 140% zoom (measured: top peaked at 28/255
                       darkness, bottom at 22 spread over two rows — the bottom read as
                       thicker and softer). 520 is a multiple of 20, so the product is
                       whole at 1.1, 1.25, 1.4, 1.5, 1.75 and 2, and both rules rasterise
                       the same way at every one. That is what the 67px below buys.

                    Tried and rejected: transform-gpu on each rule, hoping compositing
                    would snap them to the pixel grid. Measured no change at 1.1 or 1.4. */}
                <div aria-hidden className="w-full h-px bg-black/10 mb-8 sm:mb-16" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-xl sm:text-[28px] sm:leading-9 font-semibold text-[#2E3033] capitalize">Our Team <span className="text-[#2D8EC5]">Story</span></h2>
                    <p className="mt-2 text-sm font-light sm:text-lg text-[#55595E]">
                        You might want to hear from some of our team on their unique expeditions
                    </p>
                </motion.div>

                <style>{MARQUEE_CSS}</style>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="team-marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
                >
                    <div className="team-marquee-track flex w-max">
                        {[0, 1].map((copy) => (
                            <div
                                key={copy}
                                aria-hidden={copy === 1 ? true : undefined}
                                className={`flex shrink-0 gap-x-14 sm:gap-x-16 lg:gap-x-30 pr-14 sm:pr-16 lg:pr-30 ${copy === 1 ? "team-marquee-copy" : ""}`}
                            >
                                {TESTIMONIALS.map((item, index) => (
                                    <motion.div
                                        key={`${item.name}-${index}`}
                                        variants={itemVariants}
                                        className="flex w-60 shrink-0 flex-col items-center text-center gap-3"
                                    >
                                        <Image
                                            src={item.avatar}
                                            alt={copy === 1 ? "" : item.name}
                                            width={64}
                                            height={64}
                                            className="rounded-full object-cover size-16 bg-[#d8d8d8]"
                                        />
                                        <div>
                                            <p className="font-semibold text-[#2E3033] text-base">{item.name}</p>
                                            <p className="text-[#3d3d4e] text-sm opacity-60">{item.role}</p>
                                        </div>
                                        <p lang="en" className="text-sm text-[#55595E] leading-6 text-justify [text-align-last:center] hyphens-auto">{item.quote}</p>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div aria-hidden className="w-full h-px bg-black/10 mt-8 sm:mt-[67px]" />
            </div>
        </section>
    );
}
