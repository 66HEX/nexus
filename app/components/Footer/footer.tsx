"use client";

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