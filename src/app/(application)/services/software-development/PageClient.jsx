"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/SoftwareDevelopment/Hero";
import HeroText from "@/components/Services/SoftwareDevelopment/HeroText";
import SoftwareIntro from "@/components/Services/SoftwareDevelopment/SoftwareIntro";
import WhySoftwareDevelopment from "@/components/Services/SoftwareDevelopment/WhySoftwareDevelopment";
import SoftwareInvestment from "@/components/Services/SoftwareDevelopment/SoftwareInvestment";
import SoftwareServices from "@/components/Services/SoftwareDevelopment/SoftwareServices";
import SoftwareLifecycle from "@/components/Services/SoftwareDevelopment/SoftwareLifecycle";
import SoftwareQuality from "@/components/Services/SoftwareDevelopment/SoftwareQuality";
import ReadyToTransform from "@/components/Services/SoftwareDevelopment/ReadyToTransform";

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
                <SoftwareIntro />
                <WhySoftwareDevelopment />
            </div>
            <SoftwareInvestment />
            <SoftwareServices />
            <SoftwareLifecycle />
            <SoftwareQuality />

            <ReadyToTransform
                title="Achieve Business Success With Custom Software Development Today"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
