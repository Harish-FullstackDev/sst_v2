"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Services/Landing/Hero";
import HeroText from "@/components/Services/Landing/HeroText";
import Intro from "@/components/Services/Landing/Intro";
import CategoryBand from "@/components/Services/Landing/CategoryBand";
import ReadyToTransform from "@/components/Services/Landing/ReadyToTransform";
import { CATEGORIES } from "@/components/Services/Landing/servicesLandingData";

import ctaBg from "@/assets/sst-cta.webp";

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
                <Intro />
                {CATEGORIES.map((category, i) => (
                    <CategoryBand key={category.id} category={category} index={i} />
                ))}
            </div>

            <ReadyToTransform
                title="Let's Build What Your Business Needs."
                description="Modernize systems, streamline operations and achieve your business goals."
                buttonLabel="Get in Touch"
                bgImage={ctaBg}
            />

            <Footer />
        </div>
    );
};

export default page;
