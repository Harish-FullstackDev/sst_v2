"use client";

import { motion } from "framer-motion";

const CARDS = [
    {
        title: "Streamlined Project Management",
        desc: "Front-end and back-end development are integrated in one solution, so a single team plans and manages the work and every part of the system communicates seamlessly with the others.",
    },
    {
        title: "Reduced Development Time and Cost",
        desc: "Without separate teams handing work back and forth, development time and costs come down while the quality of the overall solution goes up.",
    },
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

export default function FullStackBusinessBenefits() {
    return (
        <section className="w-full pt-10 sm:pt-16 pb-6 sm:pb-16 px-8 sm:px-[0px] flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-6 sm:px-0"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Benefits of <span className="text-[#2D8EC5]">Full-Stack Development</span> for Your Business</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    A comprehensive approach that integrates front-end and back-end development in one solution.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 w-full px-6 sm:px-0">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="border border-[#a5a5a5] bg-[#f5f6f6] flex flex-col gap-4 px-6 py-8"
                    >
                        <p className="text-[#2E3033] text-base sm:text-lg font-semibold">{card.title}</p>
                        <p className="text-[#55595E] text-sm font-light">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
            <div className="hidden lg:block relative w-full lg:min-h-[303px]">
                <div className="absolute inset-x-0 top-[99px] bottom-0 bg-[#F5F6F6]" />

                <div className="relative z-10 max-w-full mx-auto px-6 sm:px-[64px] grid grid-cols-5 gap-x-6">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="flex flex-col"
                        >
                            <div className="bg-white border border-[#a5a5a5] min-h-[121px] flex items-center justify-center text-center px-5">
                                <h2 className="text-[#2E3033] text-xl  font-semibold leading-tight">{card.title}</h2>
                            </div>
                            <p className="text-[#55595E] justify-center text-center text-base font-light px-3 py-6">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

