"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/SapMigration/Hero";
import HeroText from "@/components/Services/SapMigration/HeroText";
import MigrationOverview from "@/components/Services/SapMigration/MigrationOverview";
import MigrationEssential from "@/components/Services/SapMigration/MigrationEssential";
import MigrationProducts from "@/components/Services/SapMigration/MigrationProducts";
import MigrationScenarios from "@/components/Services/SapMigration/MigrationScenarios";
import MigrationPhases from "@/components/Services/SapMigration/MigrationPhases";
import MigrationOutcomes from "@/components/Services/SapMigration/MigrationOutcomes";
import ReadyToTransform from "@/components/Services/SapMigration/ReadyToTransform";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>
            <div className="relative z-10 -mt-[340px] sm:-mt-[100vh] bg-white">
                <MigrationOverview />
                <MigrationEssential />
            </div>
            <MigrationProducts />
            <MigrationScenarios />
            <MigrationPhases />
            <MigrationOutcomes />

            <ReadyToTransform
                title="Transform Your Enterprise Through SAP Migration Excellence"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
