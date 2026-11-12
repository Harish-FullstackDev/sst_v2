"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Solutions/AnalyticsCloud/Hero";
import HeroText from "@/components/Solutions/AnalyticsCloud/HeroText";
import SacOverview from "@/components/Solutions/AnalyticsCloud/SacOverview";
import SacPlatform from "@/components/Solutions/AnalyticsCloud/SacPlatform";
import SacFeatures from "@/components/Solutions/AnalyticsCloud/SacFeatures";
// import SacConnections from "@/components/Solutions/AnalyticsCloud/SacConnections";
import SacAudience from "@/components/Solutions/AnalyticsCloud/SacAudience";
import SacAdoption from "@/components/Solutions/AnalyticsCloud/SacAdoption";
import WhySac from "@/components/Solutions/AnalyticsCloud/WhySac";
import ReadyToTransform from "@/components/Solutions/AnalyticsCloud/ReadyToTransform";

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
                <SacOverview />
                <SacPlatform />
            </div>
            <SacFeatures />
            {/* Section hidden for now; the component is kept to restore later. */}
            {/* <SacConnections /> */}
            <SacAudience />
            <SacAdoption />
            <WhySac />
            <ReadyToTransform
                title="Make Better Decisions With Better Insights."
                description="Combine planning, analytics and predictive insights for informed decisions."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
