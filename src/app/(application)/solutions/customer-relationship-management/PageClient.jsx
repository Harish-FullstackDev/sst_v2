"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Solutions/CustomerRelationshipManagement/Hero";
import HeroText from "@/components/Solutions/CustomerRelationshipManagement/HeroText";
import CrmOverview from "@/components/Solutions/CustomerRelationshipManagement/CrmOverview";
import CrmModules from "@/components/Solutions/CustomerRelationshipManagement/CrmModules";
import CrmStatement from "@/components/Solutions/CustomerRelationshipManagement/CrmStatement";
import WhyCrm from "@/components/Solutions/CustomerRelationshipManagement/WhyCrm";
import CrmOutcomes from "@/components/Solutions/CustomerRelationshipManagement/CrmOutcomes";
import CrmApproach from "@/components/Solutions/CustomerRelationshipManagement/CrmApproach";
import ReadyToTransform from "@/components/Solutions/CustomerRelationshipManagement/ReadyToTransform";

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
                <CrmOverview />
                <CrmModules />
            </div>
            <CrmStatement />
            <WhyCrm />
            <CrmOutcomes />
            <CrmApproach />
            <ReadyToTransform
                title="Build Stronger Customer Relationships."
                description="Connect sales, marketing and service to strengthen customer engagement."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
