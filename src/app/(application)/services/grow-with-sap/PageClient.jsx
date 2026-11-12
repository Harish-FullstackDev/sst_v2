"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/Services/GrowWithSap/ReadyToTransform";

import Hero from "@/components/Services/GrowWithSap/Hero";
import HeroText from "@/components/Services/GrowWithSap/HeroText";
import GrowIntro from "@/components/Services/GrowWithSap/GrowIntro";
import WhatIsGrow from "@/components/Services/GrowWithSap/WhatIsGrow";
import GrowDifferentiators from "@/components/Services/GrowWithSap/GrowDifferentiators";
import GrowStatement from "@/components/Services/GrowWithSap/GrowStatement";
import GrowMethodology from "@/components/Services/GrowWithSap/GrowMethodology";
import GrowWhoItsFor from "@/components/Services/GrowWithSap/GrowWhoItsFor";
import GrowFaq from "@/components/Services/GrowWithSap/GrowFaq";

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
                <GrowIntro />
                <WhatIsGrow />
            </div>
            <GrowDifferentiators />
            <GrowStatement />
            <GrowMethodology />
            <GrowWhoItsFor />
            <GrowFaq />
            <ReadyToTransform
                title="Ready to Accelerate Your Growth?"
                description="Build scalable cloud ERP foundations for evolving business needs."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
