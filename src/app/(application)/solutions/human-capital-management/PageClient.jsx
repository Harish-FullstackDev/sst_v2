"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/Solutions/HumanCapitalManagement/ReadyToTransform";

import Hero from "@/components/Solutions/HumanCapitalManagement/Hero";
import HeroText from "@/components/Solutions/HumanCapitalManagement/HeroText";
import HcmIntro from "@/components/Solutions/HumanCapitalManagement/HcmIntro";
import HcmFeatures from "@/components/Solutions/HumanCapitalManagement/HcmFeatures";
import HcmScenarios from "@/components/Solutions/HumanCapitalManagement/HcmScenarios";
import WhyHcm from "@/components/Solutions/HumanCapitalManagement/WhyHcm";
import HcmStatement from "@/components/Solutions/HumanCapitalManagement/HcmStatement";
import HcmDelivery from "@/components/Solutions/HumanCapitalManagement/HcmDelivery";
import HcmFaq from "@/components/Solutions/HumanCapitalManagement/HcmFaq";

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
                <HcmIntro />
                <HcmFeatures />
            </div>
            <HcmScenarios />
            <WhyHcm />
            <HcmDelivery />
            <HcmStatement />
            <HcmFaq />
            <ReadyToTransform
                title="Unlock the Power of SAP Human Capital Management for Your Enterprise Today!"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
