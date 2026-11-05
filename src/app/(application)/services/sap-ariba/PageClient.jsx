"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/SapAriba/Hero";
import HeroText from "@/components/Services/SapAriba/HeroText";
import AribaImportance from "@/components/Services/SapAriba/AribaImportance";
import WhyAriba from "@/components/Services/SapAriba/WhyAriba";
import AribaSolutions from "@/components/Services/SapAriba/AribaSolutions";
import AribaMethodology from "@/components/Services/SapAriba/AribaMethodology";
import AribaOutcomes from "@/components/Services/SapAriba/AribaOutcomes";
import AribaSuccessFactors from "@/components/Services/SapAriba/AribaSuccessFactors";
import ReadyToTransform from "@/components/Services/SapAriba/ReadyToTransform";

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
                <AribaImportance />
                <WhyAriba />
            </div>
            <AribaSolutions />
            <AribaMethodology />
            <AribaOutcomes />
            <AribaSuccessFactors />

            <ReadyToTransform
                title="Transform Procurement With SAP Ariba Today!"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
