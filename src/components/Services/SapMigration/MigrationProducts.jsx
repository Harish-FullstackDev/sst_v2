"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dataIcon from "@/assets/Services/SapMigration/icons/data-migration.svg";
import applicationIcon from "@/assets/Services/SapMigration/icons/application-migration.svg";
import infrastructureIcon from "@/assets/Services/SapMigration/icons/infrastructure-migration.svg";
import testingIcon from "@/assets/Services/SapMigration/icons/testing.svg";
import securityIcon from "@/assets/Services/SapMigration/icons/security.svg";
import trainingIcon from "@/assets/Services/SapMigration/icons/training.svg";

const ITEMS = [
    {
        icon: dataIcon,
        title: "Data Migration",
        desc: "Ensure data integrity and consistency when migrating from old to new systems.",
    },
    {
        icon: applicationIcon,
        title: "Application Migration",
        desc: "Migrate custom apps, configurations, and processes to the new SAP environment seamlessly.",
    },
    {
        icon: infrastructureIcon,
        title: "Infrastructure Migration",
        desc: "Upgrading hardware, networks, and server environments to support the new SAP system.",
    },
    {
        icon: testingIcon,
        title: "Testing & Validation",
        desc: "Comprehensive testing to validate the functionality of migrated data and applications.",
    },
    {
        icon: securityIcon,
        title: "Security & Compliance",
        desc: "Ensure security measures comply with regulations during and after the migration process.",
    },
    {
        icon: trainingIcon,
        title: "Training and Support",
        desc: "Providing training for users and support teams to effectively use and maintain the new SAP system.",
    },
];

export default function MigrationProducts() {
    return (
        <section className="w-full bg-white px-8 py-10 sm:px-[64px] sm:py-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-14"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">
                    SST&apos;s Principal Products for a Smooth Transition
                </h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    Six workstreams that carry your data, applications, and people safely onto the new SAP landscape.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E2E5EA]">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                        className="group relative flex flex-col gap-4 sm:gap-5 border-r border-b border-[#E2E5EA] p-6 sm:p-8 lg:p-10 transition-colors duration-300 hover:bg-[#f5f6f6]"
                    >
                        <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#2d8ec5] transition-all duration-500 group-hover:w-full" />
                        <div className="flex items-center justify-between">
                            <Image src={item.icon} alt="" width={48} height={48} className="size-10 sm:size-12" />
                            <span className="text-[#2d8ec5]/60 text-2xl sm:text-[32px] font-light">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>
                        <h3 className="text-[#2E3033] text-xl sm:text-2xl font-semibold">{item.title}</h3>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
