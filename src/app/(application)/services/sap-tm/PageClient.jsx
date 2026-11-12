"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/SapTm/Hero";
import HeroText from "@/components/Services/SapTm/HeroText";
import TmOverview from "@/components/Services/SapTm/TmOverview";
import TmEfficiency from "@/components/Services/SapTm/TmEfficiency";
import TmKeyFactors from "@/components/Services/SapTm/TmKeyFactors";
import TmLifecycle from "@/components/Services/SapTm/TmLifecycle";
import TmCompliance from "@/components/Services/SapTm/TmCompliance";
import TmIndustries from "@/components/Services/SapTm/TmIndustries";
import ReadyToTransform from "@/components/Services/SapTm/ReadyToTransform";

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
                <TmOverview />
                <TmEfficiency />
            </div>
            <TmKeyFactors />
            <TmLifecycle />
            <TmCompliance />
            <TmIndustries />

            <ReadyToTransform
                title="Get the Right Expertise, When Needed."
                description="Access skilled SAP professionals through flexible project engagement models."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
