"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Solutions/BusinessTechnologyPlatform/Hero";
import HeroText from "@/components/Solutions/BusinessTechnologyPlatform/HeroText";
import BtpOverview from "@/components/Solutions/BusinessTechnologyPlatform/BtpOverview";
import BtpStrengths from "@/components/Solutions/BusinessTechnologyPlatform/BtpStrengths";
import BtpAreas from "@/components/Solutions/BusinessTechnologyPlatform/BtpAreas";
import BtpFeatures from "@/components/Solutions/BusinessTechnologyPlatform/BtpFeatures";
import BtpCleanCore from "@/components/Solutions/BusinessTechnologyPlatform/BtpCleanCore";
import WhyBtp from "@/components/Solutions/BusinessTechnologyPlatform/WhyBtp";
import ReadyToTransform from "@/components/Solutions/BusinessTechnologyPlatform/ReadyToTransform";

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
                <BtpOverview />
                <BtpStrengths />
            </div>
            <BtpAreas />
            <BtpFeatures />
            <BtpCleanCore />
            <WhyBtp />
            <ReadyToTransform
                title="Build a Smarter, Connected Enterprise."
                description="Integrate systems, develop applications and unlock enterprise data."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
