import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import {useLenis} from "lenis/react";

const Footer = () => {
    const lenis = useLenis();
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'FAQ', href: '#faq' },
        ],
        company: [
            { name: 'About', href: '#about' },
            { name: 'Careers', href: '#careers' },
            { name: 'Blog', href: '#blog' },
        ],
        legal: [
            { name: 'Privacy', href: '#privacy' },
            { name: 'Terms', href: '#terms' },
            { name: 'Cookie Policy', href: '#cookies' },
        ]
    };

    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            href: '#'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            href: '#'
        },
        {
            name: 'Youtube',
            icon: Youtube,
            href: '#'
        }
    ];

    const handleScroll = (sectionId: string) => {

        if (sectionId) {
            lenis?.scrollTo(sectionId);
        }
    };

    return (
        <footer className="bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="md:col-span-1 lg:col-span-4">
                        <div className="space-y-4">
                            <div
                                className="text-white/80 h-4 flex items-center"
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
                            </div>
                            <p className="text-sm text-white/50 max-w-md">
                                Empowering athletes through personalized powerlifting coaching and real-time progress
                                tracking.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-sm font-medium mb-4">Product</h3>
                            <ul className="space-y-2">
                                {footerLinks.product.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => handleScroll(link.href)}
                                            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium mb-4">Company</h3>
                            <ul className="space-y-2">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium mb-4">Legal</h3>
                            <ul className="space-y-2">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium mb-4">Follow us</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className="text-white/50 hover:text-white transition-colors duration-200"
                                            aria-label={social.name}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-white/50">
                        © {currentYear} Nexus. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;