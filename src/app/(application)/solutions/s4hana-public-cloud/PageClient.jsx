"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Solutions/S4hanaPublicCloud/Hero";
import HeroText from "@/components/Solutions/S4hanaPublicCloud/HeroText";
import PublicCloudEssentials from "@/components/Solutions/S4hanaPublicCloud/PublicCloudEssentials";
import PublicCloudFeatures from "@/components/Solutions/S4hanaPublicCloud/PublicCloudFeatures";
import FitToStandardStatement from "@/components/Solutions/S4hanaPublicCloud/FitToStandardStatement";
import AdoptionJourney from "@/components/Solutions/S4hanaPublicCloud/AdoptionJourney";
import TypicalScenarios from "@/components/Solutions/S4hanaPublicCloud/TypicalScenarios";
import WhyPublicCloud from "@/components/Solutions/S4hanaPublicCloud/WhyPublicCloud";
import ReadyToTransform from "@/components/Solutions/S4hanaPublicCloud/ReadyToTransform";
import customBg from "@/assets/Solutions/S4hanaPublicCloud/cta.webp";

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
                <PublicCloudEssentials />
                <PublicCloudFeatures />
            </div>
            <FitToStandardStatement />
            <AdoptionJourney />
            <TypicalScenarios />
            <WhyPublicCloud />
            <ReadyToTransform
                title="Unlock the Potential of S/4HANA Public Cloud Today!"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
