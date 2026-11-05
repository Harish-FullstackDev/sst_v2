"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/Solutions/SuccessFactors/ReadyToTransform";

import Hero from "@/components/Solutions/SuccessFactors/Hero";
import HeroText from "@/components/Solutions/SuccessFactors/HeroText";
import SfOverview from "@/components/Solutions/SuccessFactors/SfOverview";
import SfModules from "@/components/Solutions/SuccessFactors/SfModules";
import SfCloudShift from "@/components/Solutions/SuccessFactors/SfCloudShift";
import WhySf from "@/components/Solutions/SuccessFactors/WhySf";
import SfScenarios from "@/components/Solutions/SuccessFactors/SfScenarios";
import SfJourney from "@/components/Solutions/SuccessFactors/SfJourney";

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
                <SfOverview />
                <SfModules />
            </div>
            <SfCloudShift />
            <WhySf />
            <SfScenarios />
            <SfJourney />
            <ReadyToTransform
                title="Empower Your HR Strategy with SAP SuccessFactors Today!"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
