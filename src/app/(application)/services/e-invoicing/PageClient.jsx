"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/EInvoicing/Hero";
import HeroText from "@/components/Services/EInvoicing/HeroText";
import EInvoicingOverview from "@/components/Services/EInvoicing/EInvoicingOverview";
import EInvoicingServices from "@/components/Services/EInvoicing/EInvoicingServices";
import WhyEInvoicing from "@/components/Services/EInvoicing/WhyEInvoicing";
import EInvoicingBenefits from "@/components/Services/EInvoicing/EInvoicingBenefits";
import EInvoicingScenarios from "@/components/Services/EInvoicing/EInvoicingScenarios";
import EInvoicingDelivery from "@/components/Services/EInvoicing/EInvoicingDelivery";
import EInvoicingFaq from "@/components/Services/EInvoicing/EInvoicingFaq";
import ReadyToTransform from "@/components/Services/EInvoicing/ReadyToTransform";

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
                <EInvoicingOverview />
                <EInvoicingServices />
            </div>
            <WhyEInvoicing />
            <EInvoicingBenefits />
            <EInvoicingScenarios />
            <EInvoicingDelivery />
            <EInvoicingFaq />
            <ReadyToTransform
                title="Empower Your Business with E-Invoicing – Simplify Billing, Enhance and Accelerate Growth."
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
