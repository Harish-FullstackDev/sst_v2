"use client";

import { motion } from "framer-motion";

const BIG_CARDS = [
    {
        title: "Streamlined Project Management",
        desc: "Front-end and back-end development are integrated in one solution, so a single team plans and manages the work and every part of the system communicates seamlessly with the others.",
    },
    {
        title: "Reduced Development Time and Cost",
        desc: "Without separate teams handing work back and forth, development time and costs come down while the quality of the overall solution goes up.",
    },
];

const SMALL_CARDS = [
    {
        title: "Scalability & Flexibility",
        desc: "A single, coherent architecture makes it easier to scale and adapt the application as the business grows.",
    },
    {
        title: "Simpler Maintenance",
        desc: "One consistent codebase and stack keeps updates, fixes, and ongoing maintenance straightforward.",
    },
    {
        title: "Faster Time to Market",
        desc: "A cohesive user experience delivered end to end gets your product in front of customers sooner.",
    },
];

// Cards size to their copy; the row grids keep each row's cards even.
function Card({ title, desc }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border border-[#d3d5d8] bg-[#E4E6E7] flex flex-col gap-3 sm:gap-6 px-6 py-7 sm:px-8 sm:py-8"
        >
            <h2 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{title}</h2>
            <p className="text-[#55595E] text-base sm:text-lg font-light">{desc}</p>
        </motion.div>
    );
}

export default function FullStackBusinessBenefits() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    Benefits of Full-Stack Development for Your Business
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    A comprehensive approach that integrates front-end and back-end development in one solution.
                </p>
            </motion.div>

            <div className="w-full flex flex-col gap-6 sm:gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {BIG_CARDS.map((card) => (
                        <Card key={card.title} {...card} />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {SMALL_CARDS.map((card) => (
                        <Card key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
