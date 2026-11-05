"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/Azure/Hero";
import HeroText from "@/components/Services/Azure/HeroText";
import AzureAtAGlance from "@/components/Services/Azure/AzureAtAGlance";
import AzureServices from "@/components/Services/Azure/AzureServices";
import WhyChooseAzure from "@/components/Services/Azure/WhyChooseAzure";
import AzureDeliveryApproach from "@/components/Services/Azure/AzureDeliveryApproach";
import AzureMicrosoftEcosystem from "@/components/Services/Azure/AzureMicrosoftEcosystem";
import AzureScenarios from "@/components/Services/Azure/AzureScenarios";
import ReadyToTransform from "@/components/Services/Azure/ReadyToTransform";
import customBg from "@/assets/Services/Azure/cta.png";

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
                <AzureAtAGlance />
                <AzureServices />
            </div>
            <WhyChooseAzure />
            <AzureDeliveryApproach />
            <AzureMicrosoftEcosystem />
            <AzureScenarios />
            <ReadyToTransform
                title="Harness the Power of Azure for Innovation, Scalability, and Efficiency in Your Digital Transformation Journey"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
