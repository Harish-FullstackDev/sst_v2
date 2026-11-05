"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/Solutions/FinanceAndControlling/ReadyToTransform";

import Hero from "@/components/Solutions/FinanceAndControlling/Hero";
import HeroText from "@/components/Solutions/FinanceAndControlling/HeroText";
import FicoOverview from "@/components/Solutions/FinanceAndControlling/FicoOverview";
import FicoCoreStrengths from "@/components/Solutions/FinanceAndControlling/FicoCoreStrengths";
import FicoFeatures from "@/components/Solutions/FinanceAndControlling/FicoFeatures";
import FicoStatement from "@/components/Solutions/FinanceAndControlling/FicoStatement";
import WhyFico from "@/components/Solutions/FinanceAndControlling/WhyFico";
import FicoDelivery from "@/components/Solutions/FinanceAndControlling/FicoDelivery";
import FicoFaq from "@/components/Solutions/FinanceAndControlling/FicoFaq";

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
                <FicoOverview />
                <FicoCoreStrengths />
            </div>
            <FicoFeatures />
            <FicoStatement />
            <WhyFico />
            <FicoDelivery />
            <FicoFaq />
            <ReadyToTransform
                title="Empower Your Enterprise with SAP FICO for Enhanced Financial Management"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
