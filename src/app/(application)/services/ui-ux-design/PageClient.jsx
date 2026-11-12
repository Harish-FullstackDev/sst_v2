"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/UiUxDesign/Hero";
import HeroText from "@/components/Services/UiUxDesign/HeroText";
import UiUxIntro from "@/components/Services/UiUxDesign/UiUxIntro";
import WhyUiUx from "@/components/Services/UiUxDesign/WhyUiUx";
import UiUxBusinessImpact from "@/components/Services/UiUxDesign/UiUxBusinessImpact";
import UiUxServices from "@/components/Services/UiUxDesign/UiUxServices";
import UiUxProcess from "@/components/Services/UiUxDesign/UiUxProcess";
import UiUxFaq from "@/components/Services/UiUxDesign/UiUxFaq";
import ReadyToTransform from "@/components/Services/UiUxDesign/ReadyToTransform";

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
                <UiUxIntro />
                <WhyUiUx />
            </div>
            <UiUxBusinessImpact />
            <UiUxServices />
            <UiUxProcess />
            <UiUxFaq />

            <ReadyToTransform
                title="Design Experiences People Love."
                description="Create intuitive digital experiences that improve usability and engagement."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
