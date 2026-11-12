"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Solutions/Landing/Hero";
import HeroText from "@/components/Solutions/Landing/HeroText";
import Intro from "@/components/Solutions/Landing/Intro";
import CategoryBand from "@/components/Solutions/Landing/CategoryBand";
import ReadyToTransform from "@/components/Solutions/Landing/ReadyToTransform";
import { CATEGORIES } from "@/components/Solutions/Landing/solutionsLandingData";

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
                title="Discover the Possibilities."
                description="Contact us for a personalized demo."
                buttonLabel="Get in Touch"
                bgImage={ctaBg}
            />

            <Footer />
        </div>
    );
};

export default page;
