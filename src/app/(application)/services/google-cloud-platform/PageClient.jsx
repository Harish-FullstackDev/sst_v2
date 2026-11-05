"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/GoogleCloudPlatform/Hero";
import HeroText from "@/components/Services/GoogleCloudPlatform/HeroText";
import GcpOverview from "@/components/Services/GoogleCloudPlatform/GcpOverview";
import WhyGcp from "@/components/Services/GoogleCloudPlatform/WhyGcp";
import GcpServices from "@/components/Services/GoogleCloudPlatform/GcpServices";
import IdealChoice from "@/components/Services/GoogleCloudPlatform/IdealChoice";
import GcpAdoptionJourney from "@/components/Services/GoogleCloudPlatform/GcpAdoptionJourney";
import GcpUseCases from "@/components/Services/GoogleCloudPlatform/GcpUseCases";
import GcpFaq from "@/components/Services/GoogleCloudPlatform/GcpFaq";
import ReadyToTransform from "@/components/Services/GoogleCloudPlatform/ReadyToTransform";
import customBg from "@/assets/Services/GoogleCloudPlatform/cta.webp";

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
                <GcpOverview />
                <WhyGcp />
            </div>
            <GcpServices />
            <IdealChoice />
            <GcpAdoptionJourney />
            <GcpUseCases />
            <GcpFaq />
            <ReadyToTransform
                title="Propel Your Business with GCP's Advanced Cloud Ecosystem and Drive Transformative Innovation"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
