"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/MicrosoftMigration/Hero";
import HeroText from "@/components/Services/MicrosoftMigration/HeroText";
import WhyMigrateToMicrosoftErp from "@/components/Services/MicrosoftMigration/WhyMigrateToMicrosoftErp";
import WhyMigrateBand from "@/components/Services/MicrosoftMigration/WhyMigrateBand";
import MigrationStartingPoints from "@/components/Services/MicrosoftMigration/MigrationStartingPoints";
import MigrationScope from "@/components/Services/MicrosoftMigration/MigrationScope";
import MigrationJourney from "@/components/Services/MicrosoftMigration/MigrationJourney";
import MigrationBenefits from "@/components/Services/MicrosoftMigration/MigrationBenefits";
import ReadyToTransform from "@/components/Services/MicrosoftMigration/ReadyToTransform";

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
                <WhyMigrateToMicrosoftErp />
                <WhyMigrateBand />
            </div>
            <MigrationStartingPoints />
            <MigrationScope />
            <MigrationJourney />
            <MigrationBenefits />

            <ReadyToTransform
                title="Move Your Business to Modern Platforms."
                description="Migrate applications securely while minimizing disruption and protecting continuity."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
