"use client";

import Image from 'next/image'
import { ArrowRight } from 'lucide-react';
import Scene from "@/app/components/Scene/scene";
import HeroOverlay from "@/app/components/HeroOverlay/heroOverlay";

const Hero = () => {
    return (
        <section
            id="hero"
            className="bg-black min-h-screen w-screen text-white relative overflow-hidden px-4 lg:px-24 pb-12 lg:pb-24"
            aria-label="Hero section"
        >
            <div
                className="absolute inset-0 z-0"
                aria-hidden="true"
            >
                <HeroOverlay/>
                <Scene/>
            </div>

            <div className="relative h-full container mx-auto pt-24">
                <div className="text-center max-w-3xl mx-auto relative">
                    <div
                        className="inline-flex items-center rounded-full bg-white/5 border border-white/[0.05] px-3 py-1 text-sm text-white/80 backdrop-blur-sm mb-8"
                        aria-live="polite"
                    >
                        Beta version now available
                    </div>

                    <h1
                        className="text-3xl md:text-7xl font-medium tracking-tight mb-2 lg:mb-4"
                        aria-label="Nexus: The Powerlifting Training Framework"
                    >
                        Nexus: The Powerlifting
                        <span
                            className="block bg-gradient-to-r from-cyan-300 to-slate-800 text-transparent bg-clip-text pb-0 md:pb-2"
                            aria-hidden="true"
                        >
                    Training Framework
                </span>
                    </h1>

                    <p
                        className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mb-12"
                    >
                        Your strength. Our expertise. One path to powerlifting mastery.
                    </p>

                    <div
                        className="flex flex-col md:flex-row justify-center items-center gap-4"
                        aria-label="Call to action buttons"
                    >
                        <button
                            className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-3 w-fit"
                            type="button"
                            aria-label="Get Started with Nexus powerlifting training"
                            role="button"
                        >
                            Get Started
                        </button>

                        <button
                            className="flex backdrop-blur-md bg-white/[0.05] border border-white/[0.1] text-white/50 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-colors w-fit"
                            type="button"
                            aria-label="Read Nexus documentation"
                            role="button"
                        >
                            Read Documentation
                            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true"/>
                        </button>
                    </div>
                </div>
                <div
                    className="relative mt-16 w-full mx-auto md:max-w-4xl bg-white/[0.05] backdrop-blur-md p-4 overflow-hidden border border-white/[0.1] rounded-2xl lg:rounded-3xl"
                    aria-label="Preview of Nexus dashboard interface"
                >
                    <Image
                        src="/mockups/dashboard.webp"
                        alt="Detailed view of Nexus dashboard interface showing training progress tracking and analytics"  // bardziej szczegółowy opis
                        width={1200}
                        height={675}
                        className="relative w-full rounded-xl overflow-hidden"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;