"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToTransform from "@/components/Services/SapSuccessFactors/ReadyToTransform";

import Hero from "@/components/Services/SapSuccessFactors/Hero";
import HeroText from "@/components/Services/SapSuccessFactors/HeroText";
import WhyChooseSuccessFactors from "@/components/Services/SapSuccessFactors/WhyChooseSuccessFactors";
import WhyBusinessesUseSuccessFactors from "@/components/Services/SapSuccessFactors/WhyBusinessesUseSuccessFactors";
import SuccessFactorsModules from "@/components/Services/SapSuccessFactors/SuccessFactorsModules";
import SuccessFactorsCorePillars from "@/components/Services/SapSuccessFactors/SuccessFactorsCorePillars";
import SuccessFactorsMethodology from "@/components/Services/SapSuccessFactors/SuccessFactorsMethodology";
import SuccessFactorsOutcomes from "@/components/Services/SapSuccessFactors/SuccessFactorsOutcomes";

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
                <WhyChooseSuccessFactors />
                <WhyBusinessesUseSuccessFactors />
            </div>
            <SuccessFactorsModules />
            <SuccessFactorsCorePillars />
            <SuccessFactorsMethodology />
            <SuccessFactorsOutcomes />
            <ReadyToTransform
                title="Achieve Business Success with SAP SuccessFactors Today"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
