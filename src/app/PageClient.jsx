"use client";

// Home page. Navbar, hero, the Services carousel, partners, FAQ, closing CTA
// and footer are sst_v2's own; TechnologyPartner, ProofInNumbers,
// WhyEnterprisePartnerWithUs, BuiltForHowEnterprisesRun, HowWeWork and
// IndustriesWeServe come from the sst_website_current home page
// (IndustriesWeServe showing sst_v2's industry data).
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/HomePage/ReadyToTransform";
import customBg from "@/assets/HomePage/Homepage_CTA.webp";

import Hero from "@/components/HomePage/Hero";
import HeroText from "@/components/HomePage/HeroText";
import TechnologyPartner from "@/components/HomePage/TechnologyPartner";
import ProofInNumbers from "@/components/HomePage/ProofInNumbers";
import Services from "@/components/HomePage/Services";
import WhyEnterprisePartnerWithUs from "@/components/HomePage/WhyEnterprisePartnerWithUs";
import BuiltForHowEnterprisesRun from "@/components/HomePage/BuiltForHowEnterprisesRun";
import HowWeWork from "@/components/HomePage/HowWeWork";
import IndustriesWeServe from "@/components/HomePage/IndustriesWeServe";
import OurProudPartners from "@/components/HomePage/OurProudPartners";
import EnterpriseBuyerFAQ from "@/components/HomePage/EnterpriseBuyerFAQ";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] h-[920px] sm:h-[200vh]">
                <div className="sticky top-0 h-[460px] sm:h-screen z-0">
                    <Hero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[460px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>

            <div className="relative z-10 -mt-[460px] sm:-mt-[100vh] bg-white">
                <TechnologyPartner />
                <ProofInNumbers />
                <Services />
                <WhyEnterprisePartnerWithUs />
                <BuiltForHowEnterprisesRun />
                <HowWeWork />
                <IndustriesWeServe />
            </div>

            <OurProudPartners />
            <EnterpriseBuyerFAQ />
            <ReadyToTransform
                title="Ready to Transform Your Business?"
                description="Let's talk about where your technology is holding you back and what it would take to fix it for good."
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
