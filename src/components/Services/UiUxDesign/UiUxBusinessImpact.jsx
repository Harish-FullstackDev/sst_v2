"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import navigationIcon from "@/assets/Services/UiUxDesign/icons/navigation.svg";
import conversionIcon from "@/assets/Services/UiUxDesign/icons/conversion.svg";
import loyaltyIcon from "@/assets/Services/UiUxDesign/icons/loyalty.svg";
import brandIcon from "@/assets/Services/UiUxDesign/icons/brand.svg";
import growthIcon from "@/assets/Services/UiUxDesign/icons/growth.svg";

const ITEMS = [
    {
        icon: navigationIcon,
        title: "Easier Navigation",
        desc: "A seamless, intuitive design helps users find what they need without friction.",
    },
    {
        icon: conversionIcon,
        title: "Higher Conversion Rates",
        desc: "Clear journeys and well-placed actions turn more visitors into customers.",
    },
    {
        icon: loyaltyIcon,
        title: "Customer Loyalty",
        desc: "Positive experiences bring users back and build lasting relationships with your brand.",
    },
    {
        icon: brandIcon,
        title: "Stronger Brand Perception",
        desc: "A polished, consistent experience shapes how customers see and trust your business.",
    },
    {
        icon: growthIcon,
        title: "Long-Term Success",
        desc: "Better outcomes today and a lasting edge in an increasingly competitive market.",
    },
];

export default function UiUxBusinessImpact() {
    return (
        <section className="w-full bg-white py-10 sm:py-16 px-8 sm:px-[64px] flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-start">
            {/* Heading sticks beside the taller grid on desktop so it stays in view. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 w-full lg:flex-[2] lg:sticky lg:top-28"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    How Does UI/UX Design Impact Your Business Success?
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light leading-relaxed">
                    UI/UX design plays a pivotal role in boosting user engagement and satisfaction. A seamless,
                    intuitive design improves user navigation, increases conversion rates, and fosters customer
                    loyalty. By creating a positive user experience, businesses can enhance brand perception, drive
                    better outcomes, and ensure long-term success in an increasingly competitive market.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:flex-[3]">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                        className={`group flex flex-col gap-4 border border-[#d3d5d8] bg-[#f5f6f6] px-6 py-7 sm:px-8 sm:py-8 transition-colors duration-300 hover:border-[#2d8ec5] hover:bg-white ${index === ITEMS.length - 1 ? "sm:col-span-2" : ""}`}
                    >
                        <div className="flex size-14 items-center justify-center rounded-full bg-white transition-colors duration-300 group-hover:bg-[#f5f6f6]">
                            <Image src={item.icon} alt="" width={32} height={32} className="size-8" />
                        </div>
                        <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h3>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
