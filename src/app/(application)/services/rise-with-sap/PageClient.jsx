"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/Services/RiseWithSap/ReadyToTransform";

import Hero from "@/components/Services/RiseWithSap/Hero";
import HeroText from "@/components/Services/RiseWithSap/HeroText";
import RiseIntro from "@/components/Services/RiseWithSap/RiseIntro";
import WhatIsRise from "@/components/Services/RiseWithSap/WhatIsRise";
import WhyRise from "@/components/Services/RiseWithSap/WhyRise";
import RiseDifferentiators from "@/components/Services/RiseWithSap/RiseDifferentiators";
import RiseMethodology from "@/components/Services/RiseWithSap/RiseMethodology";
import RiseOutcomes from "@/components/Services/RiseWithSap/RiseOutcomes";
import RiseFaq from "@/components/Services/RiseWithSap/RiseFaq";

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
                <RiseIntro />
                <WhatIsRise />
            </div>
            <WhyRise />
            <RiseDifferentiators />
            <RiseMethodology />
            <RiseOutcomes />
            <RiseFaq />
            <ReadyToTransform
                title="Streamline Your Business with Rise with SAP Today"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
