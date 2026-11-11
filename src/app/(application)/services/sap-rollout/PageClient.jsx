"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/SapRollout/Hero";
import HeroText from "@/components/Services/SapRollout/HeroText";
import RolloutOverview from "@/components/Services/SapRollout/RolloutOverview";
import RolloutStages from "@/components/Services/SapRollout/RolloutStages";
import RolloutScenarios from "@/components/Services/SapRollout/RolloutScenarios";
import GlobalTemplateLocalFit from "@/components/Services/SapRollout/GlobalTemplateLocalFit";
import RolloutOutcomes from "@/components/Services/SapRollout/RolloutOutcomes";
import RolloutFaq from "@/components/Services/SapRollout/RolloutFaq";
import ReadyToTransform from "@/components/Services/SapRollout/ReadyToTransform";
import customBg from "@/assets/sst-cta.webp";

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
                <RolloutStages />
            </div>
            <RolloutScenarios />
            <GlobalTemplateLocalFit />
            <RolloutOutcomes />
            <RolloutFaq />

            <ReadyToTransform
                title="Transform Operations With Our SAP Rollout Expertise Today!"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
