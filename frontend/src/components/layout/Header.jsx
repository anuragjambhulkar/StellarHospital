import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Header height offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'About', id: 'stellar-story' },
        { name: 'Services', id: 'services' },
        { name: 'Facilities', id: 'facilities' },
        { name: 'Plans', id: 'subscriptions' },
        { name: 'Doctors', id: 'doctors' },
        { name: 'Booking', id: 'booking' },
        { name: 'Emergency', id: 'emergency' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <header
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0`}
        >
            <div className={`
        mx-auto max-w-6xl rounded-2xl border transition-all duration-300
        ${scrolled ? 'bg-white/80 border-white/40 shadow-lg backdrop-blur-xl' : 'bg-white/50 border-white/20 backdrop-blur-md'}
      `}>
                <div className="flex h-16 items-center justify-between px-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="h-10 w-10 rounded-xl overflow-hidden shadow-inner bg-primary/5 flex items-center justify-center">
                            <video
                                src="./assets/logoanimation.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover scale-110"
                            />
                        </div>
                        <span className={`font-display text-2xl font-bold transition-colors hidden md:block tracking-tight ${scrolled ? 'text-primary' : 'text-primary'}`}>
                            Stellar <span className="text-secondary">Health</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                            Download App
                        </button>
                        <button className="md:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden border-t border-gray-100 p-6 space-y-4 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="block w-full text-left font-bold text-primary py-3 border-b border-gray-50 flex items-center justify-between group"
                            >
                                {link.name}
                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ))}
                        <button className="w-full bg-primary text-white py-4 rounded-xl font-bold mt-4 shadow-lg shadow-primary/20">
                            Download App
                        </button>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;
