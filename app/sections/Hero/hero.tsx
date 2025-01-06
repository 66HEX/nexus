"use client";

import { ArrowRight } from 'lucide-react';
import Scene from "@/app/components/Scene/scene";
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

const Hero = () => {
    return (
        <section id="hero" className=" w-screen text-white relative overflow-hidden px-4 lg:px-24">
            <div className="absolute inset-0">
                <Scene/>
                <BackgroundOverlay/>
                <div className="bg-black/[0.3] absolute inset-0"/>
            </div>

            <div className="relative h-full container mx-auto pt-24">
                <div className="text-center max-w-3xl mx-auto relative">
                    <div
                        className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-white/50 backdrop-blur-sm mb-8">
                        Beta version now available
                    </div>

                    <h1 className="text-3xl md:text-7xl font-medium tracking-tight mb-6">
                        Nexus: The Powerlifting
                        <span
                            className="block bg-gradient-to-r from-slate-400 to-slate-900 text-transparent bg-clip-text">
                            Training Framework
                        </span>
                    </h1>

                    <p className="text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        Our training platform works on all devices - just log in
                        and start your journey towards new personal records.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <button className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-3 w-fit">
                            Get Started
                        </button>
                        <button
                            className="flex backdrop-blur-md bg-white/[0.05] border border-white/[0.1] text-white/50 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-colors w-fit">
                            Read Documentation
                            <ArrowRight className="ml-2 h-4 w-4"/>
                        </button>
                    </div>
                </div>
                <div className="relative mt-16 w-full mx-auto md:max-w-4xl bg-white/[0.05] backdrop-blur-md p-4 overflow-hidden border border-white/[0.1] rounded-2xl lg:rounded-3xl">
                    <img
                        src="/mockups/dashboard.webp"
                        alt="VPN App Interface"
                        className="relative w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;