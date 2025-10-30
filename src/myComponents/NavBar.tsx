"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [{
        href: "/home-page",
        text: "Home"
    }, {
        href: "/features",
        text: "Features"
    }, {
        href: "/solutions",
        text: "Solutions"
    }, {
        href: "/how-it-works",
        text: "How It Works"
    }, {
        href: "/services",
        text: "Services"
    }, {
        href: "/blogs",
        text: "Blogs"
    }, {
        href: "/contact-us",
        text: "Contact Us"
    }];

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    // useEffect(() => {
    //     if (isMenuOpen) {
    //         document.body.classList.add('overflow-hidden');
    //     } else {
    //         document.body.classList.remove('overflow-hidden');
    //     }

    //     return () => {
    //         document.body.classList.remove('overflow-hidden');
    //     };
    // }, [isMenuOpen]);

    return <>
        <header className="sticky top-0 right-2 left-2 w-full bg-white dark:bg-gray-900/80 backdrop-blur-md dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo Section */}
                    <div className="shrink-0">
                        <a href="#">
                            <Image src="/sign-up-images/logo.svg" alt="logo" height={50} width={50} />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map(link => <a key={link.text} href={link.href} className="font-semibold text-[#6B7280] font-inter 
                        dark:text-gray-300 dark:hover:text-emerald-400 transition-colors duration-300">
                            {link.text}
                        </a>)}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center space-x-5">
                        <Link href="#">
                            <Image src="/home-page-images/user-logo.png" alt="user" width={40} height={40} className="rounded-full" />
                        </Link>
                        <button className="p-2 rounded-full text-white bg-[#235789] dark:text-gray-300 
                        dark:hover:bg-gray-800 transition-colors flex gap-2 cursor-pointer">
                            Go Dashboard
                            <FaArrowRightLong className="translate-y-1/3" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600 dark:text-gray-300 
                        hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md" aria-label="Toggle menu">
                            <Menu className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90 scale-0" :
                                "rotate-0 scale-100"}`} />
                            <X className={`h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform 
                                duration-300 ${isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
                        </button>
                    </div>
                </div>
            </div>
        </header>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity lg:hidden ${isMenuOpen ? "opacity-100" :
            "opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)} aria-hidden="true"></div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-4/5 max-w-sm z-50 bg-white dark:bg-gray-900 shadow-xl transform 
            transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                    {/* Logo Section */}
                    <div className="shrink-0">
                        <Link href="#">
                            <Image src="/sign-up-images/logo.svg" alt="logo" height={50} width={50} />
                        </Link>
                    </div>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-500 dark:text-gray-400 rounded-md 
                    hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Close menu">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="grow p-4">
                    <div className="flex flex-col space-y-2">
                        {navLinks.map(link => <a key={link.text} href={link.href} className="px-3 py-2 text-base font-medium 
                        text-[#6B7280] dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => setIsMenuOpen(false)}>
                            {link.text}
                        </a>)}
                    </div>
                </nav>

                {/* Mobile Footer */}
                <div className="flex gap-x-2 p-4 border-t border-gray-200 dark:border-gray-800">
                    <Link href="#">
                        <Image src="/home-page-images/user-logo.png" alt="user" width={40} height={40} className="rounded-full" />
                    </Link>
                    <button className="p-2 rounded-full text-white bg-[#235789] dark:text-gray-300 
                        dark:hover:bg-gray-800 transition-colors flex gap-2 cursor-pointer">
                        Go Dashboard
                        <FaArrowRightLong className="translate-y-1/3" />
                    </button>
                </div>
            </div>
        </div>
    </>;
};
