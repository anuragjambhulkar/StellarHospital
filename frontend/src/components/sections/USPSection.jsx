import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Stethoscope, Award, Microscope } from 'lucide-react';

const USPSection = () => {
    const features = [
        { icon: <Award size={24} />, text: "NABH & NABL Accredited Facility" },
        { icon: <ShieldCheck size={24} />, text: "Always Patient Safety First" },
        { icon: <HeartPulse size={24} />, text: "Comprehensive Medical Services" },
        { icon: <Stethoscope size={24} />, text: "Highly Qualified Specialists" },
        { icon: <Microscope size={24} />, text: "State-of-the-art Facilities" }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div>
                            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">Your Partners in Good Health</span>
                            <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-8 leading-[1.1]">
                                Comprehensive Integrative <br />
                                <span className="text-dark">& Compassionate Care</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <span className="font-bold text-dark text-sm leading-tight max-w-[150px]">
                                        {feature.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                The Institute for Specialized Medicine and Intervention, Stellar, is a health-care institute based on care, dignity and hope. Our Mission is to restore and preserve our patients’ peace of mind and dignity by offering compassionate and accountable state of the art medical care.
                            </p>
                            <p className="hidden md:block">
                                Building on our legacy of excellence, our dedicated team embraces the latest research and breakthrough technologies to deliver care that adapts to the evolving needs of our patients. We empower each individual with comprehensive support and tailor-made treatment plans designed to nurture both body and spirit.
                            </p>
                        </div>

                        <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                            Learn More
                        </button>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/10">
                            <img
                                src="/assets/super-speciality-hospital-stellar-health.png"
                                alt="Modern Medical Team"
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Abstract background element */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                        <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default USPSection;
