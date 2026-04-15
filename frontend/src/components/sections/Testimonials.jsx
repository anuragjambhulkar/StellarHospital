import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const [isPaused, setIsPaused] = useState(false);

    const testimonials = [
        {
            name: "Harpreet Nahar",
            role: "Nagpur",
            text: "Stellar truly lives up to its name. The doctors and staff were incredibly compassionate and attentive throughout my treatment. I cannot thank the team enough for restoring my health and peace of mind.",
            rating: 5,
            image: "./assets/harpreet-nahar-stellar-health-patient.png"
        },
        {
            name: "Anita Choudhary",
            role: "Old Pune",
            text: "The state-of-the-art facilities at Stellar are outstanding. From advanced diagnostics to personalized care, everything exceeded my expectations. Made my experience seamless and reassuring.",
            rating: 5,
            image: "./assets/anita-choudhary-stellar-health-patient.png"
        },
        {
            name: "Meenal More",
            role: "Nagpur",
            text: "I am so grateful for the exceptional treatment I received. The doctors are knowledgeable, approachable, and dedicated to their patients' well-being. From consultation to recovery, I felt cared for at every stage.",
            rating: 5,
            image: "./assets/meenal-more-stellar-health-patient.png"
        }
    ];

    return (
        <section className="py-24 bg-accent/20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    {/* <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">Patient Stories</span> */}
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Hear From Our Patients</h2>
                </div>

                {/* Marquee Loop */}
                <div
                    className="w-full relative overflow-hidden -mx-6 px-6 sm:-mx-0 sm:px-0 mt-8 cursor-pointer"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <style>
                        {`
                            @keyframes marquee {
                                0% { transform: translateX(0%); }
                                100% { transform: translateX(-50%); }
                            }
                        `}
                    </style>

                    {/* Optional gradient masks for smooth fade in/out on edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 md:w-1/6 bg-gradient-to-r from-accent/20 to-transparent z-10 hidden sm:block"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 md:w-1/6 bg-gradient-to-l from-accent/20 to-transparent z-10 hidden sm:block"></div>

                    <div
                        className="flex gap-6 md:gap-8 w-max py-4"
                        style={{
                            animation: 'marquee 40s linear infinite',
                            animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                    >
                        {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
                            <div
                                key={idx}
                                className="w-[320px] md:w-[400px] flex-shrink-0 bg-white p-8 md:p-10 rounded-[2.5rem] border border-primary/5 relative group hover:shadow-[0_20px_50px_rgba(0,156,223,0.1)] transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <Quote className="absolute top-6 right-8 text-secondary/20 group-hover:text-secondary/40 transition-colors" size={48} />

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={18} className="fill-secondary text-secondary" />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 mb-8 italic leading-relaxed whitespace-normal min-h-[140px] md:min-h-[120px]">
                                        "{t.text}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="p-1 border border-secondary/20 rounded-full shrink-0">
                                        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-bold text-dark text-lg whitespace-normal">{t.name}</h4>
                                        <p className="text-sm font-medium text-secondary tracking-wide whitespace-normal">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

