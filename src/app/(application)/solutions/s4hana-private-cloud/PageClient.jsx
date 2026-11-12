"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Solutions/S4hanaPrivateCloud/Hero";
import HeroText from "@/components/Solutions/S4hanaPrivateCloud/HeroText";
import PrivateCloudOverview from "@/components/Solutions/S4hanaPrivateCloud/PrivateCloudOverview";
import PrivateCloudFeatures from "@/components/Solutions/S4hanaPrivateCloud/PrivateCloudFeatures";
import ControlAndDedication from "@/components/Solutions/S4hanaPrivateCloud/ControlAndDedication";
import SecurityLayers from "@/components/Solutions/S4hanaPrivateCloud/SecurityLayers";
import TransitionPaths from "@/components/Solutions/S4hanaPrivateCloud/TransitionPaths";
import WhyPrivateCloud from "@/components/Solutions/S4hanaPrivateCloud/WhyPrivateCloud";
import ReadyToTransform from "@/components/Solutions/S4hanaPrivateCloud/ReadyToTransform";
import customBg from "@/assets/sst-cta.webp";

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
                <PrivateCloudOverview />
                <PrivateCloudFeatures />
            </div>
            <ControlAndDedication />
            <SecurityLayers />
            <TransitionPaths />
            <WhyPrivateCloud />
            <ReadyToTransform
                title="Get the Cloud on Your Terms."
                description="Combine dedicated infrastructure, enhanced control and cloud flexibility."
                buttonLabel="Get in Touch"
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
