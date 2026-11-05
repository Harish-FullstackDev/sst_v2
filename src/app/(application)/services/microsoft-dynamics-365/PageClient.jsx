"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/MicrosoftDynamics365/Hero";
import HeroText from "@/components/Services/MicrosoftDynamics365/HeroText";
import WhyBusinessCentral from "@/components/Services/MicrosoftDynamics365/WhyBusinessCentral";
import BusinessCentralFeatures from "@/components/Services/MicrosoftDynamics365/BusinessCentralFeatures";
import BenefitsForYourOrganization from "@/components/Services/MicrosoftDynamics365/BenefitsForYourOrganization";
import SureStepApproach from "@/components/Services/MicrosoftDynamics365/SureStepApproach";
import AgilityMeetsIntelligence from "@/components/Services/MicrosoftDynamics365/AgilityMeetsIntelligence";
import Dynamics365Faq from "@/components/Services/MicrosoftDynamics365/Dynamics365Faq";
import ReadyToTransform from "@/components/Services/MicrosoftDynamics365/ReadyToTransform";

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
                <WhyBusinessCentral />
                <BusinessCentralFeatures />
            </div>
            <BenefitsForYourOrganization />
            <SureStepApproach />
            <AgilityMeetsIntelligence />
            <Dynamics365Faq />

            <ReadyToTransform
                title="Empower Your Business with Dynamics 365 Business Central – Where Agility Meets Intelligence"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
