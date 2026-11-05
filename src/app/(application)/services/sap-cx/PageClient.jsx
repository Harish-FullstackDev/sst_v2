"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/SapCx/Hero";
import HeroText from "@/components/Services/SapCx/HeroText";
import CxOverview from "@/components/Services/SapCx/CxOverview";
import WhyCx from "@/components/Services/SapCx/WhyCx";
import CxCapabilities from "@/components/Services/SapCx/CxCapabilities";
import CxSuccessFactors from "@/components/Services/SapCx/CxSuccessFactors";
import CxMethodology from "@/components/Services/SapCx/CxMethodology";
import ReadyToTransform from "@/components/Services/SapCx/ReadyToTransform";

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
                <CxOverview />
                <WhyCx />
            </div>
            <CxCapabilities />
            <CxSuccessFactors />
            <CxMethodology />

            <ReadyToTransform
                title="Transform Customer Experiences With SAP CX Today!"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
