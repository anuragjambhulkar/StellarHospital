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
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="./assets/hero_bg.png"
                        alt="Stellar Health Interior"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-primary leading-[1.1]">
                            Healthcare <br />
                            <span className="text-dark">Reimagined.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed">
                            Experience the future of wellness with Stellar Health.
                            Advanced diagnostics, expert care, and a patient-first approach.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
                                Download App <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white hover:bg-accent/30 text-primary border border-primary/10 px-8 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105"
                            >
                                Book Consultation
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats / Features Banner */}
            <section className="bg-primary py-20 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                    {[
                        { label: "Satisfaction Rate", value: "98%" },
                        { label: "Doctors Onboard", value: "500+" },
                        { label: "Successful Treatments", value: "10K+" },
                        { label: "Emergency care", value: "24/7" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 border-l border-white/20"
                        >
                            <div className="text-4xl font-display font-bold mb-2">{stat.value}</div>
                            <div className="text-secondary font-bold tracking-wide uppercase text-[10px]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <StellarStory />
            <USPSection />
            <ServicesSection />
            <FacilitiesSection />
            <SubscriptionPlans />
            <DoctorsSection />
            <EmergencySection />
            <AppointmentSection />
            <Testimonials />
            <ContactSection />
            <AddressBar />
        </div>
    );
};



export default Home;
