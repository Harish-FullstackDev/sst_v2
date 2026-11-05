"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/SapConversionEccToS4hana/Hero";
import HeroText from "@/components/Services/SapConversionEccToS4hana/HeroText";
import WhySwitchToS4hana from "@/components/Services/SapConversionEccToS4hana/WhySwitchToS4hana";
import ConversionKeyAspects from "@/components/Services/SapConversionEccToS4hana/ConversionKeyAspects";
import ConversionAccelerator from "@/components/Services/SapConversionEccToS4hana/ConversionAccelerator";
import ConversionApproaches from "@/components/Services/SapConversionEccToS4hana/ConversionApproaches";
import DeploymentOptions from "@/components/Services/SapConversionEccToS4hana/DeploymentOptions";
import ConversionReadiness from "@/components/Services/SapConversionEccToS4hana/ConversionReadiness";
import ConversionRoadmap from "@/components/Services/SapConversionEccToS4hana/ConversionRoadmap";
import ReadyToTransform from "@/components/Services/SapConversionEccToS4hana/ReadyToTransform";
import customBg from "@/assets/Services/SapConversionEccToS4hana/cta.png";

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
                <WhySwitchToS4hana />
                <ConversionKeyAspects />
            </div>
            <ConversionAccelerator />
            <ConversionApproaches />
            <DeploymentOptions />
            <ConversionReadiness />
            <ConversionRoadmap />

            <ReadyToTransform
                title="Upgrade to S/4HANA and Gain a Competitive Edge"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
