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
            className="fixed top-6 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10 pointer-events-none"
        >
            <div className="mx-auto max-w-[1400px] flex items-center justify-between">

                {/* Left Logo Container - Pointer events auto */}
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`pointer-events-auto flex items-center gap-5 cursor-pointer p-2 pr-6 rounded-2xl transition-all duration-300 origin-left ${scrolled ? 'bg-white/90 shadow-lg backdrop-blur-xl border border-white/40 scale-95' : 'bg-transparent scale-100 hover:scale-[1.02]'}`}
                >
                    <div className="h-[76px] w-[76px] shrink-0 rounded-2xl overflow-hidden shadow-inner bg-primary flex items-center justify-center p-[2px]">
                        <video
                            src="./assets/logoanimation.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover scale-[1.3] rounded-xl"
                        />
                    </div>
                    <div className="font-display font-bold transition-all hidden sm:flex flex-col leading-[1.05]">
                        <span className="text-[32px] tracking-tight text-primary">Stellar</span>
                        <span className="text-[32px] tracking-tight text-secondary">Health</span>
                    </div>
                </div>

                {/* Center Nav Container - distinct pill */}
                <nav className={`pointer-events-auto hidden lg:flex items-center gap-7 px-8 py-4 rounded-full transition-all duration-300 shadow-sm ${scrolled ? 'bg-white/90 shadow-lg backdrop-blur-xl border border-white/40' : 'bg-white/70 backdrop-blur-md border border-white/20'}`}>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-[13px] font-bold text-slate-700 hover:text-primary transition-colors uppercase tracking-[0.1em]"
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>

                {/* Right CTA Container */}
                <div className="pointer-events-auto flex items-center gap-4">
                    <button className="hidden xl:flex bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-[24px] text-sm font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95 text-center leading-tight">
                        Download<br />App
                    </button>
                    <button
                        className={`md:hidden p-3 rounded-2xl transition-all ${scrolled ? 'bg-white/90 shadow-lg text-primary' : 'bg-white/50 text-gray-700 backdrop-blur-md'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
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
        </header >
    );
};

export default Header;
