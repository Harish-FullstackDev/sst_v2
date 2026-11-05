"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/FullStackDevelopment/Hero";
import HeroText from "@/components/Services/FullStackDevelopment/HeroText";
import FullStackOverview from "@/components/Services/FullStackDevelopment/FullStackOverview";
import FullStackBusinessBenefits from "@/components/Services/FullStackDevelopment/FullStackBusinessBenefits";
import FullStackServices from "@/components/Services/FullStackDevelopment/FullStackServices";
import FullStackLayers from "@/components/Services/FullStackDevelopment/FullStackLayers";
import FullStackDeliveryFlow from "@/components/Services/FullStackDevelopment/FullStackDeliveryFlow";
import WhatYouCanExpect from "@/components/Services/FullStackDevelopment/WhatYouCanExpect";
import ReadyToTransform from "@/components/Services/FullStackDevelopment/ReadyToTransform";

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
                <FullStackOverview />
                <FullStackBusinessBenefits />
            </div>
            <FullStackServices />
            <FullStackLayers />
            <FullStackDeliveryFlow />
            <WhatYouCanExpect />

            <ReadyToTransform
                title="Elevate Your Web Presence With Full-Stack Development"
                description="Innovation and seamless integration. Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
