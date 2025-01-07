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
                top: "37.5%",
                left: "50%",
                ease: "customEase",
            });
            gsap.to(toggleButtonLine2Ref.current, {
                duration: 0.25,
                rotate: 0,
                top: "62.5%",
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 94.22 17.3"
                                className="h-full w-auto"
                                fill="currentColor">
                                <path
                                    d="m0,.44h3.93l13.93,16.28-4.44.05L3.93,5.51v11.21H0V.44ZM13.93.44h3.93v11.93l-3.93-4.4V.44Z"/>
                                <path
                                    d="m35.86.44v3.28h-14.53V.44h14.53Zm0,6.51v3.25h-14.53v-3.25h14.53Zm0,6.49v3.28h-14.46v-3.28h14.46Z"/>
                                <path
                                    d="m43.18,16.72h-5.05l4.93-6.26,2.47,3.07-2.35,3.19Zm8.05,0L38.72.44h4.65l3.84,4.84,3.84-4.84h4.63l-6.05,7.88,6.65,8.4h-5.05Z"/>
                                <path
                                    d="m58.39.44h3.93v9.63c0,2.35,2.14,3.54,4.3,3.54s4.3-1.19,4.3-3.54V.44h3.93v9.63c0,4.81-4.12,7.23-8.23,7.23s-8.23-2.42-8.23-7.23V.44Z"/>
                                <path
                                    d="m92.27,5.56c-1.49-1.3-4.3-2.12-6.49-2.12-1.72,0-3.02.49-3.02,1.6,0,2.84,11.46.7,11.46,7.19,0,3.58-3.72,5.02-7.77,5.02-3.3,0-6.84-.95-8.81-2.49l1.93-3.26c1.54,1.42,4.81,2.3,7.28,2.3,1.72,0,3.07-.46,3.07-1.49,0-2.95-11.42-.91-11.42-7.35,0-3.58,3.35-4.98,7.12-4.98,3.12,0,6.51.93,8.56,2.4l-1.91,3.16Z"/>
                            </svg>
                        </button>
                        <div
                            className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 px-6 py-3 rounded-full backdrop-blur-md bg-white/[0.05] border border-white/[0.1]">
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
                            className="hidden md:block backdrop-blur-md bg-white/[0.05] border border-white/[0.1] text-white/50 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-colors">
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
                                className="absolute w-6 border-2 border-white top-[37.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            ></div>
                            <div
                                ref={toggleButtonLine2Ref}
                                className="absolute w-6 border-2 border-white top-[62.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
                            className="backdrop-blur-md bg-white/[0.05] border border-white/[0.1] text-white px-6 py-3 rounded-full text-lg font-medium mt-4"
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