"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/RoboticProcessAutomation/Hero";
import HeroText from "@/components/Services/RoboticProcessAutomation/HeroText";
import RpaOverview from "@/components/Services/RoboticProcessAutomation/RpaOverview";
import HowRpaTransforms from "@/components/Services/RoboticProcessAutomation/HowRpaTransforms";
import RpaServices from "@/components/Services/RoboticProcessAutomation/RpaServices";
import WhyRpa from "@/components/Services/RoboticProcessAutomation/WhyRpa";
import RpaDeliveryApproach from "@/components/Services/RoboticProcessAutomation/RpaDeliveryApproach";
import RpaUseCases from "@/components/Services/RoboticProcessAutomation/RpaUseCases";
import RpaFaq from "@/components/Services/RoboticProcessAutomation/RpaFaq";
import ReadyToTransform from "@/components/Services/RoboticProcessAutomation/ReadyToTransform";

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
                <RpaOverview />
                <HowRpaTransforms />
            </div>
            <RpaServices />
            <WhyRpa />
            <RpaDeliveryApproach />
            <RpaUseCases />
            <RpaFaq />
            <ReadyToTransform
                title="Make Every Process More Efficient."
                description="Automate repetitive tasks and empower teams to focus strategically."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
