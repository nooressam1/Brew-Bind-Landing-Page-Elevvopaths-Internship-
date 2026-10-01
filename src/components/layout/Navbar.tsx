'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import { useScrollSection } from "@/lib/ScrollContext";

export default function Navbar() {
    const { t } = useLanguage();
    const { scrollToSection } = useScrollSection();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close mobile menu on screen resize to desktop (lg breakpoint: 1024px)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNavClick = (id: string) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Mobile Backdrop overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm lg:hidden"
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>

            <nav className="absolute z-10 top-0 left-0 w-full px-4 sm:px-6 lg:px-10">
                <div className="relative flex justify-between items-center w-full h-20 lg:h-24">
                    {/* Desktop Left Links (visible on lg+) */}
                    <div className="hidden lg:flex flex-1 justify-end items-center gap-8 xl:gap-12">
                        <button
                            type="button"
                            onClick={() => scrollToSection('home')}
                            className="font-lateef text-white text-2xl cursor-pointer hover:text-MainOrange transition-colors whitespace-nowrap"
                        >
                            {t.nav.home}
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection('about')}
                            className="font-lateef text-white text-2xl cursor-pointer hover:text-MainOrange transition-colors whitespace-nowrap"
                        >
                            {t.nav.about}
                        </button>
                    </div>

                    {/* Brand Title: left-aligned on xs/mobile, centered on sm/tablets, in-flow on lg/desktop */}
                    <div className="shrink-0 text-left rtl:text-right px-1 sm:px-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:text-center lg:static lg:translate-x-0 lg:px-8 pointer-events-auto">
                        <button
                            type="button"
                            onClick={() => scrollToSection('home')}
                            className="font-goudy text-white text-2xl sm:text-3xl tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
                        >
                            Brew & Bind
                        </button>
                    </div>

                    {/* Desktop Right Links + Language Switcher (visible on lg+) */}
                    <div className="hidden lg:flex flex-1 justify-start items-center gap-6 xl:gap-8">
                        <button
                            type="button"
                            onClick={() => scrollToSection('features')}
                            className="font-lateef text-white text-2xl cursor-pointer hover:text-MainOrange transition-colors whitespace-nowrap"
                        >
                            {t.nav.features}
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection('contact')}
                            className="font-lateef text-white text-2xl cursor-pointer hover:text-MainOrange transition-colors whitespace-nowrap"
                        >
                            {t.nav.contact}
                        </button>
                        <LanguageSwitcher className="shrink-0" />
                    </div>

                    {/* Mobile Controls: Language Switcher + Hamburger Button (visible below lg, pushed to the end) */}
                    <div className="ml-auto lg:hidden flex items-center gap-2 sm:gap-3 shrink-0 z-10">
                        <LanguageSwitcher className="scale-90 sm:scale-100 origin-right rtl:origin-left" />
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            className="p-2 sm:p-2.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-white/15 active:scale-95 transition-all duration-200"
                        >
                            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu Card */}
                <AnimatePresence>



                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -15, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="lg:hidden absolute top-full left-4 right-4 sm:left-6 sm:right-6 mt-1 p-6 rounded-2xl bg-[#251A14]/95 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col items-center gap-3 text-center z-50"
                        >
                            <button
                                type="button"
                                onClick={() => handleNavClick('home')}
                                className="font-lateef text-white text-2xl hover:text-MainOrange transition-colors py-2 w-full"
                            >
                                {t.nav.home}
                            </button>
                            <button
                                type="button"
                                onClick={() => handleNavClick('about')}
                                className="font-lateef text-white text-2xl hover:text-MainOrange transition-colors py-2 w-full"
                            >
                                {t.nav.about}
                            </button>
                            <button
                                type="button"
                                onClick={() => handleNavClick('features')}
                                className="font-lateef text-white text-2xl hover:text-MainOrange transition-colors py-2 w-full"
                            >
                                {t.nav.features}
                            </button>
                            <button
                                type="button"
                                onClick={() => handleNavClick('contact')}
                                className="font-lateef text-white text-2xl hover:text-MainOrange transition-colors py-2 w-full"
                            >
                                {t.nav.contact}
                            </button>

                            <div className="w-full h-px bg-white/15 my-2" />


                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
