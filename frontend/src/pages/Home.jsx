import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Heart, Shield } from 'lucide-react';
import Header from '../components/layout/Header';
import StellarStory from '../components/sections/StellarStory';
import ContactSection from '../components/sections/ContactSection';
import AddressBar from '../components/sections/AddressBar';
import USPSection from '../components/sections/USPSection';
import SubscriptionPlans from '../components/sections/SubscriptionPlans';
import DoctorsSection from '../components/sections/DoctorsSection';
import FacilitiesSection from '../components/sections/FacilitiesSection';
import ServicesSection from '../components/sections/ServicesSection';
import EmergencySection from '../components/sections/EmergencySection';
import Testimonials from '../components/sections/Testimonials';
import AppointmentSection from '../components/sections/AppointmentSection';

const Home = () => {
    return (
        <div className="min-h-screen font-sans bg-white selection:bg-primary selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden flex items-start justify-start">
                    <img
                        src="./assets/hero_bg.png"
                        alt="Stellar Health Interior"
                        className="h-[120%] w-[120%] lg:w-[110%] max-w-none object-cover origin-top-left transform -translate-x-[25%] -translate-y-[-11%] opacity-100"
                    />
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 pt-32 pb-12 flex-1 flex flex-col justify-center items-center text-center">
                    <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center gap-6"
                        >
                            {/* Tagline Badge */}
                            <div className="inline-flex items-center gap-3 bg-primary/5 text-primary border border-primary/20 px-6 py-3 rounded-full text-lg md:text-xl italic font-semibold backdrop-blur-sm shadow-sm">
                                <Activity size={24} className="animate-pulse" />
                                <span>Good Health has no limits</span>
                            </div>

                            {/* Headline */}
                            <h1 className="font-display font-bold tracking-tight text-primary leading-[1.15]">
                                <span className="text-4xl md:text-5xl lg:text-[64px]">
                                    Privilege Care <span className="text-dark">just a membership away.</span>
                                </span>
                            </h1>

                            {/* Download App Redesign */}
                            <button className="flex items-center gap-3 bg-gradient-to-br from-primary to-primary/80 hover:to-primary text-white px-8 py-3.5 rounded-[24px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95 group mt-4">
                                Download App
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            {/* Sub-headline
                            <p className="text-lg md:text-xl text-dark/70 max-w-2xl font-medium leading-relaxed">
                                Experience world-class hospitality paired with elite medical expertise. Your health deserves nothing less than perfection.
                            </p> */}

                            {/* CTAs */}
                            {/* <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full text-base font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                                    Explore Memberships <ArrowRight size={18} />
                                </button>
                                <button className="bg-white hover:bg-gray-50 text-primary border border-primary/20 px-8 py-3.5 rounded-full text-base font-bold shadow-sm transition-all hover:scale-105 active:scale-95">
                                    View Specialty Care
                                </button>
                            </div> */}
                        </motion.div>
                    </div>
                </div>

                {/* Premium Floating Stats Banner */}
                <div className="relative z-20 container mx-auto px-4 pb-8 w-full max-w-7xl">
                    <div className="bg-primary/90 backdrop-blur-xl py-5 px-8 lg:px-12 text-white rounded-[40px] shadow-2xl shadow-primary/30 border border-white/10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-white/10">
                            {[
                                { label: "Client Satisfaction", value: "98%" },
                                { label: "Elite Specialists", value: "500+" },
                                { label: "Expert Procedures", value: "10K+" },
                                { label: "Active Emergency", value: "24/7" },
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="flex flex-col items-center md:items-start md:px-10 first:pl-0"
                                >
                                    <div className="text-4xl lg:text-5xl font-display font-bold mb-1 tracking-tight">{stat.value}</div>
                                    <div className="text-white/60 font-black tracking-[0.2em] uppercase text-[9px] lg:text-[10px]">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <StellarStory />
            <Testimonials />
            {/* <USPSection /> */}
            <SubscriptionPlans />
            <DoctorsSection />
            <ServicesSection />
            <FacilitiesSection />
            {/* <EmergencySection /> */}
            {/* <AppointmentSection /> */}
            {/* <ContactSection /> */}
            <AddressBar />

        </div>
    );
};



export default Home;
