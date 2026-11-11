"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Solutions/S4hanaOnPremise/Hero";
import HeroText from "@/components/Solutions/S4hanaOnPremise/HeroText";
import OnPremiseOverview from "@/components/Solutions/S4hanaOnPremise/OnPremiseOverview";
import OwnershipModel from "@/components/Solutions/S4hanaOnPremise/OwnershipModel";
import TransformativeCapabilities from "@/components/Solutions/S4hanaOnPremise/TransformativeCapabilities";
import DeliveryRoadmap from "@/components/Solutions/S4hanaOnPremise/DeliveryRoadmap";
import WhyOnPremise from "@/components/Solutions/S4hanaOnPremise/WhyOnPremise";
import WhenOnPremiseFits from "@/components/Solutions/S4hanaOnPremise/WhenOnPremiseFits";
import OnPremiseFaq from "@/components/Solutions/S4hanaOnPremise/OnPremiseFaq";
import ReadyToTransform from "@/components/Solutions/S4hanaOnPremise/ReadyToTransform";
import customBg from "@/assets/Solutions/sst-cta.webp";

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
                <OnPremiseOverview />
                <OwnershipModel />
            </div>
            <TransformativeCapabilities />
            <DeliveryRoadmap />
            <WhyOnPremise />
            <WhenOnPremiseFits />
            <OnPremiseFaq />
            <ReadyToTransform
                title="Harness the Power of S/4HANA On-Premises for Your Enterprise Today!"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
