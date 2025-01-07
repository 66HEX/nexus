"use client";

import { useState, useRef } from 'react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

export default function Navbar() {
    const lenis = useLenis();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const toggleButtonLine1Ref = useRef(null);
    const toggleButtonLine2Ref = useRef(null);

    const refs = {
        features: useRef(null),
        mission: useRef(null),
        pricing: useRef(null),
        faq: useRef(null),
        getStarted: useRef(null)
    };

    const menuItems = [
        { href: "#features", label: "Features", ref: refs.features },
        { href: "#mission", label: "Mission", ref: refs.mission },
        { href: "#pricing", label: "Pricing", ref: refs.pricing },
        { href: "#faq", label: "FAQ", ref: refs.faq },
    ];

    CustomEase.create("customEase", "0.76,0,0.24,1");

    const animateHamburger = (isOpening: boolean) => {
        if (isOpening) {
            gsap.to(toggleButtonLine1Ref.current, {
                duration: 0.25,
                rotate: 45,
                top: "50%",
                left: "50%",
                ease: "customEase",
            });
            gsap.to(toggleButtonLine2Ref.current, {
                duration: 0.25,
                rotate: -45,
                top: "50%",
                left: "50%",
                ease: "customEase",
            });
        } else {
            gsap.to(toggleButtonLine1Ref.current, {
                duration: 0.25,
                rotate: 0,
                top: "35%",
                left: "50%",
                ease: "customEase",
            });
            gsap.to(toggleButtonLine2Ref.current, {
                duration: 0.25,
                rotate: 0,
                top: "65%",
                left: "50%",
                ease: "customEase",
            });
        }
    };

    const closeMenu = () => {
        animateHamburger(false);
        const tl = gsap.timeline();
        tl.to([
            ...menuItems.map(item => item.ref.current),
            refs.getStarted.current
        ], {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in"
        });
        tl.to(menuRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
                setIsMenuOpen(false);
            }
        });
    };

    const toggleMenu = () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            animateHamburger(true);
            setIsMenuOpen(true);
        }
    };

    useGSAP(() => {
        if (isMenuOpen) {
            gsap.fromTo(menuRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                }
            );
            gsap.fromTo(
                [
                    ...menuItems.map(item => item.ref.current),
                    refs.getStarted.current
                ],
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        }
    }, [isMenuOpen]);

    const handleScroll = (sectionId: string) => {
        if (isMenuOpen) {
            closeMenu();
        }

        if (sectionId) {
            lenis?.scrollTo(sectionId);
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-screen z-50">
                <nav className="absolute top-6 left-6 right-6 mx-auto">
                    <div className="w-full mx-auto flex items-center justify-between relative">
                        <button
                            onClick={() => handleScroll('#hero')}
                            className="text-white h-4 flex items-center"
                            aria-label="Go to homepage">
                            <img
                                src="/logos/nexus-logo.svg"
                                alt="Nexus Logo"
                                className="h-full w-auto"
                            />
                        </button>
                        <div
                            className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 px-6 py-3 rounded-full backdrop-blur-md bg-white/[0.05] border border-white/[0.05]">
                            {menuItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleScroll(item.href)}
                                    className="text-base text-white/50 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                        <button
                            className="hidden md:block backdrop-blur-md bg-white/[0.05] border border-white/[0.05] text-white/50 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-colors">
                            Get Started
                        </button>


                        <button
                            ref={toggleButtonRef}
                            onClick={toggleMenu}
                            className="md:hidden relative h-8 w-8 text-white/50 transition-colors z-50"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            <div
                                ref={toggleButtonLine1Ref}
                                className="absolute w-6 border-[1.5px] border-white top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                            ></div>
                            <div
                                ref={toggleButtonLine2Ref}
                                className="absolute w-6 border-[1.5px] border-white top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                            ></div>
                        </button>
                    </div>
                </nav>
            </header>

            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="fixed inset-0 w-screen h-svh md:hidden backdrop-blur-md bg-black/60 z-40"
                >
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.href}
                                ref={item.ref}
                                className="text-lg text-white hover:text-white transition-colors"
                                onClick={() => handleScroll(item.href)}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            ref={refs.getStarted}
                            className="backdrop-blur-md bg-white/[0.05] border border-white/[0.05] text-white px-6 py-3 rounded-full text-lg font-medium mt-4"
                            onClick={() => closeMenu()}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}