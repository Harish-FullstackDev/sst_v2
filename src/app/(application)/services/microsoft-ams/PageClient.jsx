"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/MicrosoftAms/Hero";
import HeroText from "@/components/Services/MicrosoftAms/HeroText";
import WhyChooseAms from "@/components/Services/MicrosoftAms/WhyChooseAms";
import AmsCoreFeatures from "@/components/Services/MicrosoftAms/AmsCoreFeatures";
import SupportTiers from "@/components/Services/MicrosoftAms/SupportTiers";
import PerformanceMeetsReliability from "@/components/Services/MicrosoftAms/PerformanceMeetsReliability";
import OnboardingJourney from "@/components/Services/MicrosoftAms/OnboardingJourney";
import ApplicationsWeManage from "@/components/Services/MicrosoftAms/ApplicationsWeManage";
import ReadyToTransform from "@/components/Services/MicrosoftAms/ReadyToTransform";

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
                <WhyChooseAms />
                <AmsCoreFeatures />
            </div>
            <SupportTiers />
            <PerformanceMeetsReliability />
            <OnboardingJourney />
            <ApplicationsWeManage />

            <ReadyToTransform
                title="Keep Your Applications Running Smoothly."
                description="Maintain application performance through proactive support and continuous improvements."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
