"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/SapAms/Hero";
import HeroText from "@/components/Services/SapAms/HeroText";
import WhyImplementAms from "@/components/Services/SapAms/WhyImplementAms";
import AmsKeyFeatures from "@/components/Services/SapAms/AmsKeyFeatures";
import AmsQualityPrinciple from "@/components/Services/SapAms/AmsQualityPrinciple";
import AmsSupportScope from "@/components/Services/SapAms/AmsSupportScope";
import AmsEngagementFlow from "@/components/Services/SapAms/AmsEngagementFlow";
import AmsBenefits from "@/components/Services/SapAms/AmsBenefits";
import AmsFaq from "@/components/Services/SapAms/AmsFaq";
import ReadyToTransform from "@/components/Services/SapAms/ReadyToTransform";
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
                <WhyImplementAms />
                <AmsKeyFeatures />
                <AmsQualityPrinciple />
            </div>
            <AmsSupportScope />
            <AmsEngagementFlow />
            <AmsBenefits />
            <AmsFaq />

            <ReadyToTransform
                title="Enhance Efficiency With SAP Application & Managed Services Today"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
