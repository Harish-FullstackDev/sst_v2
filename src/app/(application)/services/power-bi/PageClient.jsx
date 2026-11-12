"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/PowerBi/Hero";
import HeroText from "@/components/Services/PowerBi/HeroText";
import WhyChoosePowerBi from "@/components/Services/PowerBi/WhyChoosePowerBi";
import PowerBiForYourBusiness from "@/components/Services/PowerBi/PowerBiForYourBusiness";
import PowerBiFeatures from "@/components/Services/PowerBi/PowerBiFeatures";
import ImplementationRoadmap from "@/components/Services/PowerBi/ImplementationRoadmap";
import WhoPowerBiIsFor from "@/components/Services/PowerBi/WhoPowerBiIsFor";
import PowerBiFaq from "@/components/Services/PowerBi/PowerBiFaq";
import ReadyToTransform from "@/components/Services/PowerBi/ReadyToTransform";

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
                <WhyChoosePowerBi />
                <PowerBiForYourBusiness />
            </div>
            <PowerBiFeatures />
            <ImplementationRoadmap />
            <WhoPowerBiIsFor />
            <PowerBiFaq />

            <ReadyToTransform
                title="Make Every Insight Count."
                description="Transform complex data into actionable insights for smarter decisions."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
