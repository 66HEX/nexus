"use client";

import { Check } from 'lucide-react';
import BackgroundOverlay from "@/app/components/backgroundOverlay/backgroundOverlay";

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
}

const Pricing = () => {
    const tiers: PricingTier[] = [
        {
            name: "Starter",
            price: "Free",
            description: "Perfect for beginners starting their strength journey",
            features: [
                "Basic workout tracking",
                "Access to exercise library",
                "Basic progress charts",
                "Community forum access"
            ]
        },
        {
            name: "Athlete",
            price: "$29",
            description: "For dedicated lifters seeking professional guidance",
            features: [
                "Everything in Starter",
                "Personalized training plans",
                "Form check videos (2/month)",
                "Chat support with coaches",
                "Advanced analytics",
                "Priority support"
            ],
            highlighted: true
        },
        {
            name: "Elite",
            price: "$99",
            description: "For competitive athletes requiring premium coaching",
            features: [
                "Everything in Athlete",
                "1-on-1 coaching sessions",
                "Unlimited form checks",
                "Competition prep guidance",
                "Nutrition planning",
                "24/7 priority support",
                "Custom programming"
            ]
        }
    ];

    return (
        <section id="pricing" className="bg-black text-white py-12 lg:py-24 px-4 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <BackgroundOverlay/>
            </div>
            <div className="container mx-auto relative">
                <div className="text-center mb-8 sm:mb-16">
                    <div
                        className="inline-flex items-center rounded-full bg-white/[0.05] border border-white/[0.05] px-3 py-1 text-sm text-white/70 backdrop-blur-sm mb-6 sm:mb-8">
                        Pricing
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 lg:mb-6">
                        Choose your
                        <br/>
                        <span className="bg-gradient-to-r from-cyan-300 to-slate-800 text-transparent bg-clip-text">strength pathway</span>
                    </h2>
                    <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto">
                        Select a plan that best fits your training goals and level of commitment
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`bg-white/[0.05] backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 lg:p-8 border ${
                                tier.highlighted
                                    ? '[background:linear-gradient(45deg,#0D1011,#0D1011_100%,#0D1011)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.cyan.700/.48)_80%,_theme(colors.cyan.400)_86%,_theme(colors.cyan.300)_90%,_theme(colors.cyan.400)_94%,_theme(colors.cyan.700/.48))_border-box] border border-transparent animate-border shadow-lg'
                                    : 'border-white/[0.05]'
                            } h-fit relative`}
                        >
                            {tier.highlighted && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span
                                        className="bg-gradient-to-r from-cyan-300 to-slate-800 text-white text-sm px-3 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-medium mb-2">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl lg:text-4xl font-medium">{tier.price}</span>
                                        {tier.price !== "Free" && (
                                            <span className="text-white/50">/month</span>
                                        )}
                                    </div>
                                    <p className="text-white/50 text-sm mt-2">
                                        {tier.description}
                                    </p>
                                </div>

                                <button className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                    tier.highlighted
                                        ? 'bg-gradient-to-r from-cyan-300 to-slate-800 hover:from-cyan-200 hover:to-slate-800 text-white'
                                        : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}>
                                    Get Started
                                </button>

                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-sm text-white mb-4">Plan includes:</p>
                                    <ul className="space-y-3">
                                        {tier.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm opacity-50">
                                                <Check className="h-5 w-5 text-white shrink-0"/>
                                                <span className="text-white">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;