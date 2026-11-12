"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/AiMl/Hero";
import HeroText from "@/components/Services/AiMl/HeroText";
import WhyAiMl from "@/components/Services/AiMl/WhyAiMl";
import AiMlServices from "@/components/Services/AiMl/AiMlServices";
import WhyAdoptAiMl from "@/components/Services/AiMl/WhyAdoptAiMl";
import AiMlLifecycle from "@/components/Services/AiMl/AiMlLifecycle";
import AiMlIndustries from "@/components/Services/AiMl/AiMlIndustries";
import AiMlPrinciples from "@/components/Services/AiMl/AiMlPrinciples";
import ReadyToTransform from "@/components/Services/AiMl/ReadyToTransform";

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
                <WhyAiMl />
                <AiMlServices />
            </div>
            <WhyAdoptAiMl />
            <AiMlLifecycle />
            <AiMlIndustries />
            <AiMlPrinciples />
            <ReadyToTransform
                title="Put Intelligence to Work."
                description="Turn business data into intelligence for smarter decisions."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
