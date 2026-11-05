"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/AmazonWebServices/Hero";
import HeroText from "@/components/Services/AmazonWebServices/HeroText";
import AwsOverview from "@/components/Services/AmazonWebServices/AwsOverview";
import AwsServices from "@/components/Services/AmazonWebServices/AwsServices";
import AwsSecurity from "@/components/Services/AmazonWebServices/AwsSecurity";
import BestCloudSolution from "@/components/Services/AmazonWebServices/BestCloudSolution";
import AwsEngagementPath from "@/components/Services/AmazonWebServices/AwsEngagementPath";
import AwsOutcomes from "@/components/Services/AmazonWebServices/AwsOutcomes";
import ReadyToTransform from "@/components/Services/AmazonWebServices/ReadyToTransform";
import customBg from "@/assets/Services/AmazonWebServices/cta.webp";

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
                <AwsOverview />
                <AwsServices />
            </div>
            <AwsSecurity />
            <BestCloudSolution />
            <AwsEngagementPath />
            <AwsOutcomes />
            <ReadyToTransform
                title="Unlock the Full Potential of Your Business with AWS's Secure, Scalable, and Innovative Cloud Solutions"
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
                bgImage={customBg}
            />
            <Footer />
        </div>
    );
};

export default page;
