import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import EmergencySection from '../sections/EmergencySection';
import ContactSection from '../sections/ContactSection';
import AppointmentSection from '../sections/AppointmentSection';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [emergencyPopupOpen, setEmergencyPopupOpen] = useState(false);
    const [contactPopupOpen, setContactPopupOpen] = useState(false);
    const [bookingPopupOpen, setBookingPopupOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Scrolled state for background change
            setScrolled(currentScrollY > 20);

            // Hide/Show logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down - Hide
            } else {
                setIsVisible(true); // Scrolling up - Show
            }

            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
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
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="mx-auto max-w-[1500px] pt-6 px-6 lg:px-10 flex items-start justify-between">
                    {/* 1. Floating Logo Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className={`pointer-events-auto flex items-center gap-4 cursor-pointer p-3 rounded-[32px] transition-all duration-500 origin-left border shadow-2xl ${scrolled ? 'bg-white/95 backdrop-blur-2xl border-white/40 scale-90 translate-y-[-5px]' : 'bg-white/80 backdrop-blur-xl border-white/20 scale-100'}`}
                    >
                        <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl overflow-hidden shadow-2xl bg-primary flex items-center justify-center p-[2px] ring-4 ring-primary/5">
                            <video
                                src="./assets/logoanimation.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover scale-[1.3] rounded-xl"
                            />
                        </div>
                        <div className="hidden sm:flex flex-col pr-4 justify-center">
                            <span className="text-3xl font-display font-black tracking-tighter text-primary leading-none">Stellar</span>
                            <span className="text-lg font-display font-black tracking-tight text-secondary leading-none">Health</span>
                        </div>
                    </motion.div>

                    {/* 2. Right Floating Group */}
                    <div className="flex flex-col items-end gap-5">
                        {/* Modular Nav Pill */}
                        <motion.nav
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`pointer-events-auto hidden lg:flex items-center relative rounded-full px-2 py-2 border shadow-2xl transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-2xl border-white/50 py-1.5' : 'bg-white/80 backdrop-blur-xl border-white/20'}`}
                        >
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onMouseEnter={() => setHoveredLink(link.id)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onClick={() => {
                                        if (link.id === 'contact') {
                                            setContactPopupOpen(true);
                                        } else if (link.id === 'booking') {
                                            setBookingPopupOpen(true);
                                        } else {
                                            scrollToSection(link.id);
                                        }
                                    }}
                                    className={`relative z-10 px-5 py-2.5 text-[11px] font-black transition-colors duration-300 uppercase tracking-widest ${hoveredLink === link.id ? 'text-white' : 'text-slate-600'}`}
                                >
                                    {/* THE "TRANSACTION" SLIDING PILL */}
                                    {hoveredLink === link.id && (
                                        <motion.div
                                            layoutId="navHoverBackground"
                                            className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    {link.name}
                                </button>
                            ))}
                        </motion.nav>

                        {/* Premium Actions Group */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="pointer-events-auto flex items-center gap-4"
                        >
                            {/* Emergency Glass Card */}
                            <button
                                onClick={() => setEmergencyPopupOpen(true)}
                                className={`hidden lg:flex items-center gap-3 px-7 py-3 rounded-[24px] text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-500 border shadow-2xl group relative overflow-hidden ${scrolled ? 'bg-secondary text-primary border-primary/10' : 'bg-white/90 text-primary border-primary/5'}`}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary group-hover:bg-primary transition-colors"></span>
                                </span>
                                Emergency Consultation
                            </button>



                            <button
                                className="lg:hidden p-4 rounded-2xl bg-white shadow-2xl text-primary border border-white/20"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:hidden pointer-events-auto fixed inset-x-6 top-24 p-8 bg-white/95 backdrop-blur-2xl border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[40px]"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        if (link.id === 'contact') {
                                            setContactPopupOpen(true);
                                            setMobileMenuOpen(false);
                                        } else if (link.id === 'booking') {
                                            setBookingPopupOpen(true);
                                            setMobileMenuOpen(false);
                                        } else {
                                            scrollToSection(link.id);
                                        }
                                    }}
                                    className="px-6 py-5 text-left font-bold text-primary bg-gray-50/50 rounded-2xl flex items-center justify-between group"
                                >
                                    <span className="text-xs uppercase tracking-widest">{link.name}</span>
                                    <ArrowRight size={14} />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </header >

            {/* Popups */}
            {emergencyPopupOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 overflow-y-auto">
                    <div className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-[3rem] bg-white my-auto shadow-2xl border-4 border-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <button onClick={() => setEmergencyPopupOpen(false)} className="absolute top-6 right-6 z-50 bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-dark transition-colors border border-gray-200">
                            <X size={24} />
                        </button>
                        <EmergencySection />
                    </div>
                </div>
            )}

            {contactPopupOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 overflow-y-auto">
                    <div className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-[3rem] bg-white my-auto shadow-2xl border-4 border-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <button onClick={() => setContactPopupOpen(false)} className="absolute top-6 right-6 z-50 bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-dark transition-colors border border-gray-200">
                            <X size={24} />
                        </button>
                        <ContactSection />
                    </div>
                </div>
            )}

            {bookingPopupOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 overflow-y-auto">
                    <div className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-[3rem] bg-white my-auto shadow-2xl border-4 border-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <button onClick={() => setBookingPopupOpen(false)} className="absolute top-6 right-6 z-50 bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-dark transition-colors border border-gray-200">
                            <X size={24} />
                        </button>
                        <AppointmentSection />
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
