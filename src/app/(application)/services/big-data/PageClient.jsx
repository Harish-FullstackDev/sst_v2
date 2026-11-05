"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/BigData/Hero";
import HeroText from "@/components/Services/BigData/HeroText";
import BigDataStatement from "@/components/Services/BigData/BigDataStatement";
import WhyBigData from "@/components/Services/BigData/WhyBigData";
import BigDataServices from "@/components/Services/BigData/BigDataServices";
import BigDataAdvantages from "@/components/Services/BigData/BigDataAdvantages";
import BigDataPipeline from "@/components/Services/BigData/BigDataPipeline";
import BigDataOutcomes from "@/components/Services/BigData/BigDataOutcomes";
import ReadyToTransform from "@/components/Services/BigData/ReadyToTransform";

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
                <BigDataStatement />
                <WhyBigData />
                <BigDataServices />
            </div>
            <BigDataAdvantages />
            <BigDataPipeline />
            <BigDataOutcomes />
            <ReadyToTransform
                title="Empower Your Business with Big Data for Unparalleled Growth."
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
