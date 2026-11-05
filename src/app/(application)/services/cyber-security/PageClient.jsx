"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/CyberSecurity/Hero";
import HeroText from "@/components/Services/CyberSecurity/HeroText";
import CyberOverview from "@/components/Services/CyberSecurity/CyberOverview";
import CyberServices from "@/components/Services/CyberSecurity/CyberServices";
import WhyCyber from "@/components/Services/CyberSecurity/WhyCyber";
import CyberMatters from "@/components/Services/CyberSecurity/CyberMatters";
import CyberApproach from "@/components/Services/CyberSecurity/CyberApproach";
import CyberAssessment from "@/components/Services/CyberSecurity/CyberAssessment";
import ReadyToTransform from "@/components/Services/CyberSecurity/ReadyToTransform";

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
                <CyberOverview />
                <CyberServices />
            </div>
            <WhyCyber />
            <CyberMatters />
            <CyberApproach />
            <CyberAssessment />
            <ReadyToTransform
                title="Protect Your Business with Cybersecurity – Where Trust Meets Innovation."
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
