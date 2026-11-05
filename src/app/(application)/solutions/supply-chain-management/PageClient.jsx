"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/Solutions/SupplyChainManagement/ReadyToTransform";

import Hero from "@/components/Solutions/SupplyChainManagement/Hero";
import HeroText from "@/components/Solutions/SupplyChainManagement/HeroText";
import ScmOverview from "@/components/Solutions/SupplyChainManagement/ScmOverview";
import ScmPillars from "@/components/Solutions/SupplyChainManagement/ScmPillars";
import ScmModules from "@/components/Solutions/SupplyChainManagement/ScmModules";
import ScmOutcomes from "@/components/Solutions/SupplyChainManagement/ScmOutcomes";
import WhyScm from "@/components/Solutions/SupplyChainManagement/WhyScm";

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
                <ScmOverview />
                <ScmPillars />
            </div>
            <ScmModules />
            <ScmOutcomes />
            <WhyScm />
            <ReadyToTransform
                title="Optimize Operations with SAP SCM for Efficient Supply Chain Management"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
