"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/MicrosoftRollout/Hero";
import HeroText from "@/components/Services/MicrosoftRollout/HeroText";
import RolloutOverview from "@/components/Services/MicrosoftRollout/RolloutOverview";
import RolloutStatement from "@/components/Services/MicrosoftRollout/RolloutStatement";
import RolloutFeatures from "@/components/Services/MicrosoftRollout/RolloutFeatures";
import RolloutApproach from "@/components/Services/MicrosoftRollout/RolloutApproach";
import RolloutEcosystem from "@/components/Services/MicrosoftRollout/RolloutEcosystem";
import RolloutOutcomes from "@/components/Services/MicrosoftRollout/RolloutOutcomes";
import ReadyToTransform from "@/components/Services/MicrosoftRollout/ReadyToTransform";

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
                <RolloutOverview />
                <RolloutStatement />
            </div>
            <RolloutFeatures />
            <RolloutApproach />
            <RolloutEcosystem />
            <RolloutOutcomes />

            <ReadyToTransform
                title="Empower Your Business With Microsoft Rollout Services, Where Strategy Meets Execution"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
