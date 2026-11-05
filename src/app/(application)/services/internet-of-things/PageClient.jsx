"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/InternetOfThings/Hero";
import HeroText from "@/components/Services/InternetOfThings/HeroText";
// TODO: section component not committed yet (d806cf3).
// import IotOverview from "@/components/Services/InternetOfThings/IotOverview";
// TODO: section component not committed yet (d806cf3).
// import IotServices from "@/components/Services/InternetOfThings/IotServices";
// TODO: section component not committed yet (d806cf3).
// import WhyIot from "@/components/Services/InternetOfThings/WhyIot";
// TODO: section component not committed yet (d806cf3).
// import IotArchitecture from "@/components/Services/InternetOfThings/IotArchitecture";
// TODO: section component not committed yet (d806cf3).
// import IotDelivery from "@/components/Services/InternetOfThings/IotDelivery";
// TODO: section component not committed yet (d806cf3).
// import IotIndustries from "@/components/Services/InternetOfThings/IotIndustries";
import ReadyToTransform from "@/components/Services/InternetOfThings/ReadyToTransform";

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
                {/* <IotOverview /> */}
                {/* <IotServices /> */}
            </div>
            {/* <WhyIot /> */}
            {/* <IotArchitecture /> */}
            {/* <IotDelivery /> */}
            {/* <IotIndustries /> */}
            <ReadyToTransform
                title="Elevate Your Business with IoT (Internet of Things) – Where Innovation Meets Efficiency."
                description="Discover the possibilities. Contact us for a personalized demo."
                buttonLabel="Get in Touch"
            />
            <Footer />
        </div>
    );
};

export default page;
