"use client";

import {useState, useRef, useEffect, FC} from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import BackgroundOverlay from "@/app/components/backgroundOverlay/backgroundOverlay";

interface FAQItem {
    question: string;
    answer: string;
    isOpen: boolean;
}

class FAQProps {
}

const FAQ: FC<FAQProps> = () => {
    const [faqItems, setFaqItems] = useState<FAQItem[]>([
        {
            question: "How do I get started with professional powerlifting coaching?",
            answer: "Getting started is simple. Choose a coach from our verified experts, select your preferred training package, and schedule an initial consultation. Your coach will assess your current level and create a personalized training plan.",
            isOpen: false
        },
        {
            question: "What essential equipment do I need to follow the program?",
            answer: "For powerlifting, you'll need access to a gym with basic equipment including a power rack, barbell, weights, and bench. Your coach will provide specific equipment recommendations based on your training plan and goals.",
            isOpen: false
        },
        {
            question: "How frequently will I be able to interact with my coach?",
            answer: "Coach interaction varies by package, but typically includes weekly check-ins, form reviews, and program adjustments. Premium packages offer daily communication and video consultations.",
            isOpen: false
        },
        {
            question: "Is it possible to switch coaches if I'm not satisfied with my current one?",
            answer: "Yes, we want you to have the best possible experience. If you're not satisfied with your current coach, you can switch to another coach within your first month at no additional cost.",
            isOpen: false
        },
        {
            question: "How are the personalized training plans customized for each client?",
            answer: "Training plans are tailored to your goals, experience level, available equipment, and schedule. Your coach will adjust your program based on your progress and feedback throughout your journey.",
            isOpen: false
        }
    ]);

    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentHeights = useRef<number[]>([]);

    useEffect(() => {
        const calculateHeights = () => {
            contentHeights.current = contentRefs.current.map(ref =>
                ref ? ref.scrollHeight : 0
            );
        };

        calculateHeights();
        window.addEventListener('resize', calculateHeights);

        return () => {
            window.removeEventListener('resize', calculateHeights);
        };
    }, []);

    const toggleQuestion = (index: number): void => {
        const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power3.inOut" } });

        const previousOpenIndex = faqItems.findIndex(item => item.isOpen);
        const isCurrentlyOpen = faqItems[index].isOpen;

        if (previousOpenIndex !== -1 && previousOpenIndex !== index) {
            const previousContent = contentRefs.current[previousOpenIndex];
            const previousFaq = faqRefs.current[previousOpenIndex];

            if (previousContent) {
                tl.to(previousContent, { height: 0 }, 0);
            }

            if (previousFaq) {
                const previousArrow = previousFaq.querySelector('.arrow');
                if (previousArrow) {
                    tl.to(previousArrow, {
                        rotation: 0,
                        transformOrigin: "center center",
                        force3D: true,
                    }, 0);
                }
            }
        }

        setFaqItems(prevItems => {
            return prevItems.map((item, i) => ({
                ...item,
                isOpen: i === index ? !item.isOpen : false
            }));
        });

        const currentContent = contentRefs.current[index];
        const currentFaq = faqRefs.current[index];

        if (currentContent) {
            tl.to(currentContent, {
                height: isCurrentlyOpen ? 0 : contentHeights.current[index],
            }, 0);
        }

        if (currentFaq) {
            const arrow = currentFaq.querySelector('.arrow');
            if (arrow) {
                tl.to(arrow, {
                    rotation: isCurrentlyOpen ? 0 : 180,
                    transformOrigin: "center center",
                    force3D: true,
                }, 0);
            }
        }
    };

    return (
        <section
            aria-labelledby="faq-heading"
            id="faq" className="bg-black text-white py-12 lg:py-24 px-4 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <BackgroundOverlay/>
            </div>
            <div className="container mx-auto relative">
                <div className="text-center mb-8 sm:mb-16">
                    <div
                        className="inline-flex items-center rounded-full bg-white/5 border border-white/[0.05] px-3 py-1 text-sm text-white/70 backdrop-blur-sm mb-6 sm:mb-8">
                        Frequently Asked Questions
                    </div>
                    <h2
                        id="faq-heading"
                        className="text-3xl md:text-5xl font-medium tracking-tight mb-4 lg:mb-6">
                        Common questions about
                        <br/>
                        <span className="bg-gradient-to-r from-cyan-500 to-slate-800 text-transparent bg-clip-text">
                            our coaching platform
                        </span>
                    </h2>
                    <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto">
                        Everything you need to know about our powerlifting coaching services
                    </p>
                </div>

                <div
                    aria-label="Frequently Asked Questions"
                    className="max-w-3xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            ref={(el: HTMLDivElement | null) => {
                                faqRefs.current[index] = el
                            }}
                            className="bg-white/[0.05] backdrop-blur-md rounded-2xl border border-white/[0.05] overflow-hidden"
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full text-left p-6 flex items-center justify-between"
                                aria-expanded={item.isOpen}
                                aria-controls={`faq-content-${index}`}
                                type="button"
                                id={`faq-button-${index}`}
                            >
                                <span className="text-base md:text-lg font-medium">{item.question}</span>
                                <ChevronDown
                                    className="w-6 h-6 text-white arrow ml-3"
                                    style={{minWidth: '24px', minHeight: '24px'}}
                                    aria-hidden="true"
                                />
                            </button>
                            <div
                                ref={(el: HTMLDivElement | null) => {
                                    contentRefs.current[index] = el
                                }}
                                className="overflow-hidden"
                                style={{height: 0}}
                                id={`faq-content-${index}`}
                                aria-labelledby={`faq-button-${index}`}
                            >
                                <div className="p-6 pt-0 text-sm lg:text-base text-white/50">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    aria-label="Additional support"
                    className="text-center mt-12 sm:mt-16">
                    <div
                        className="bg-white/[0.05] backdrop-blur-md rounded-2xl border border-white/[0.05] p-6 sm:p-8 max-w-2xl mx-auto"
                        ref={(el: HTMLDivElement | null) => {
                            faqRefs.current[faqItems.length] = el
                        }}
                    >
                        <h3
                            id="support-heading"
                            className="text-xl font-medium mb-2">Still have questions?</h3>
                        <p className="text-white/80 mb-6 mx-auto max-w-md">
                            Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help with any
                            questions you may have.
                        </p>
                        <button
                            className="bg-white/[0.05] text-white/50 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-colors"
                            type="button"
                            aria-label="Contact Support"
                            role="button"
                            aria-haspopup="dialog"
                        >
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;