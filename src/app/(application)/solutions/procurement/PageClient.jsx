"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/Solutions/Procurement/ReadyToTransform";

import Hero from "@/components/Solutions/Procurement/Hero";
import HeroText from "@/components/Solutions/Procurement/HeroText";
import ProcurementOverview from "@/components/Solutions/Procurement/ProcurementOverview";
import ProcurementPillars from "@/components/Solutions/Procurement/ProcurementPillars";
import ProcurementFeatures from "@/components/Solutions/Procurement/ProcurementFeatures";
import ProcurementJourney from "@/components/Solutions/Procurement/ProcurementJourney";
import WhyProcurement from "@/components/Solutions/Procurement/WhyProcurement";
import ProcurementFaq from "@/components/Solutions/Procurement/ProcurementFaq";

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
                <ProcurementOverview />
                <ProcurementPillars />
            </div>
            <ProcurementFeatures />
            <ProcurementJourney />
            <WhyProcurement />
            <ProcurementFaq />
            <ReadyToTransform
                title="Transform Your Procurement Journey with SAP SSM for Your Enterprise Today!"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
