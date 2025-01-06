"use client";

import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "How do I get started with powerlifting coaching?",
        answer: "Getting started is simple. Choose a coach from our verified experts, select your preferred training package, and schedule an initial consultation. Your coach will assess your current level and create a personalized training plan."
    },
    {
        question: "What equipment do I need for the program?",
        answer: "For powerlifting, you'll need access to a gym with basic equipment including a power rack, barbell, weights, and bench. Your coach will provide specific equipment recommendations based on your training plan and goals."
    },
    {
        question: "How often will I interact with my coach?",
        answer: "Coach interaction varies by package, but typically includes weekly check-ins, form reviews, and program adjustments. Premium packages offer daily communication and video consultations."
    },
    {
        question: "Can I switch coaches if I'm not satisfied?",
        answer: "Yes, we want you to have the best possible experience. If you're not satisfied with your current coach, you can switch to another coach within your first month at no additional cost."
    },
    {
        question: "How are the training plans customized?",
        answer: "Training plans are tailored to your goals, experience level, available equipment, and schedule. Your coach will adjust your program based on your progress and feedback throughout your journey."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number>(-1);
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleQuestion = (index: number): void => {
        if (openIndex !== -1 && openIndex !== index) {
            const currentContent = contentRefs.current[openIndex];
            if (currentContent) {
                gsap.to(currentContent, {
                    height: 0,
                    duration: 0.4,
                    ease: "power3.inOut"
                });
            }
        }

        if (openIndex === index) {
            const currentContent = contentRefs.current[index];
            if (currentContent) {
                gsap.to(currentContent, {
                    height: 0,
                    duration: 0.4,
                    ease: "power3.inOut",
                    onComplete: () => setOpenIndex(-1)
                });
            }
        } else {
            setOpenIndex(index);
            const newContent = contentRefs.current[index];
            if (newContent) {
                gsap.fromTo(newContent,
                    { height: 0 },
                    {
                        height: "auto",
                        duration: 0.4,
                        ease: "power3.inOut"
                    }
                );
            }
        }

        const currentFaq = faqRefs.current[index];
        if (currentFaq) {
            const arrow = currentFaq.querySelector('.arrow');
            if (arrow) {
                gsap.to(arrow, {
                    rotation: openIndex === index ? 0 : 180,
                    duration: 0.3
                });
            }
        }
    };

    return (
        <section id="faq" className="bg-black text-white py-12 sm:py-24 px-3 sm:px-4 lg:px-24 relative overflow-hidden">
            <div className="container mx-auto relative">
                <div className="text-center mb-8 sm:mb-16">
                    <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-white/70 backdrop-blur-sm mb-6 sm:mb-8">
                        Frequently Asked Questions
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 sm:mb-6">
                        Common questions about
                        <br />
                        <span className="bg-gradient-to-r from-slate-400 to-slate-600 text-transparent bg-clip-text">
              our coaching platform
            </span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                        Everything you need to know about our powerlifting coaching services
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            ref={(el: HTMLDivElement | null) => { faqRefs.current[index] = el }}
                            className="bg-white/[0.05] backdrop-blur-md rounded-2xl border border-white/[0.05] overflow-hidden"
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full text-left p-6 flex items-center justify-between"
                            >
                                <span className="text-lg font-medium">{item.question}</span>
                                <ChevronDown className="w-6 h-6 text-white arrow" />
                            </button>
                            <div
                                ref={(el: HTMLDivElement | null) => { contentRefs.current[index] = el }}
                                className="overflow-hidden"
                                style={{ height: 0 }}
                            >
                                <div className="p-6 pt-0 text-white/50">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 sm:mt-16">
                    <div
                        className="bg-white/[0.05] backdrop-blur-md rounded-2xl border border-white/[0.05] p-6 sm:p-8 max-w-2xl mx-auto"
                        ref={(el: HTMLDivElement | null) => { faqRefs.current[faqItems.length] = el }}
                    >
                        <h3 className="text-xl font-medium mb-2">Still have questions?</h3>
                        <p className="text-white/50 mb-6">
                            Can't find the answer you're looking for? We're here to help with any questions you may have.
                        </p>
                        <button className="bg-white/[0.05] border border-white/[0.1] text-white/50 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;