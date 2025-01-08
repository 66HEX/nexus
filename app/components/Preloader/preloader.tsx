"use client";

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { MorphSVGPlugin } from '@/lib/gsap/MorphSVGPlugin';

gsap.registerPlugin(useGSAP, MorphSVGPlugin);

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const pathsRef = useRef<SVGPathElement[]>([]);

    const addToPathRefs = (el: SVGPathElement | null) => {
        if (el && !pathsRef.current.includes(el)) {
            pathsRef.current.push(el);
        }
    };

    useGSAP(() => {
        if (!svgRef.current || pathsRef.current.length === 0) return;

        const paths = pathsRef.current;
        const xPath = paths[2];

        const tl = gsap.timeline({
            onComplete: () => {
                setIsVisible(false);
            }
        });

        gsap.set(paths, {
            opacity: 0,
            scale: 0.8,
            transformOrigin: "50% 50%"
        });

        tl
            .to(paths, {
                visibility: "visible",
                opacity: 1,
                scale: 1,
                duration: 1.5,
                stagger: {
                    each: 0.05,
                    from: "start"
                },
                ease: "power3.out"
            })
            .add("morph", "+=0.3")
            .to(xPath, {
                scale: 1.5,
                duration: 0.5,
                ease: "power3.inOut"
            }, "morph")
            .to(paths, {
                opacity: 0,
                duration: 0.5,
                stagger: {
                    each: 0.05,
                    from: "edges"
                },
                ease: "power3.inOut",
            }, "morph")
            .to(containerRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, ">");

        return () => tl.kill();
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <svg
                    ref={svgRef}
                    style={{visibility: "hidden"}}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-200 -200 500 400"
                    className="w-full max-w-7xl"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        ref={addToPathRefs}
                        className="fill-white"
                        d="m17.44.02v17.44l-3.11-2.39L3.11,6.43v11.04H0V.07l3.11,2.39,11.21,8.65V0l3.11.02Z"
                    />
                    <path
                        ref={addToPathRefs}
                        className="fill-white"
                        d="m23.04,4.71v1.62h11.21v3.11h-11.21v3.29c0,.87.72,1.59,1.59,1.59h12.73v3.11h-12.73c-2.59,0-4.68-2.12-4.68-4.71V4.71c0-2.59,2.09-4.71,4.68-4.71h12.73v3.11h-12.73c-.87,0-1.59.72-1.59,1.59Z"
                    />
                    <path
                        ref={addToPathRefs}
                        className="fill-white"
                        d="m39.23,17.47h.05l-.05.05v-.05ZM56.73.02l-6.75,8.75,6.73,8.7h-3.94l-4.76-6.16-4.76,6.16h-3.94l6.7-8.7L39.26.02h3.94l4.78,6.2L52.76.02h3.96Zm-.05,17.49l-.03-.05h.03v.05Z"
                    />
                    <path
                        ref={addToPathRefs}
                        className="fill-white"
                        d="m75.98,0v8.72c0,4.81-3.91,8.72-8.72,8.72s-8.72-3.91-8.72-8.72V0h3.11v8.72c0,3.09,2.52,5.61,5.61,5.61s5.61-2.52,5.61-5.61V0h3.12Z"
                    />
                    <path
                        ref={addToPathRefs}
                        className="fill-white"
                        d="m91.85,4.83v-.1c0-.87-.72-1.59-1.59-1.59h-7.08c-.87,0-1.59.72-1.59,1.59v.1c0,.87.72,1.59,1.59,1.59h6.28c1.62,0,3.07.7,4.06,1.79.08.08.12.15.2.22.77.95,1.25,2.17,1.25,3.49,0,3.04-2.47,5.51-5.51,5.51h-5.46c-3.04,0-5.51-2.47-5.51-5.51h3.12c0,1.32,1.07,2.39,2.39,2.39h5.46c1.32,0,2.42-1.07,2.42-2.39s-1.1-2.39-2.42-2.39h-6.28c-1.27,0-2.42-.5-3.26-1.32-.22-.22-.42-.47-.6-.75-.52-.75-.82-1.67-.82-2.67v-.1c0-2.59,2.09-4.71,4.68-4.71h7.08c2.59,0,4.71,2.12,4.71,4.71v.1l-3.11.02Z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Preloader;