import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Harpreet Nahar",
            role: "Nagpur",
            text: "Stellar truly lives up to its name. The doctors and staff were incredibly compassionate and attentive throughout my treatment. I cannot thank the team enough for restoring my health and peace of mind.",
            rating: 5,
            image: "/assets/harpreet-nahar-stellar-health-patient.png"
        },
        {
            name: "Anita Choudhary",
            role: "Old Pune",
            text: "The state-of-the-art facilities at Stellar are outstanding. From advanced diagnostics to personalized care, everything exceeded my expectations. Made my experience seamless and reassuring.",
            rating: 5,
            image: "/assets/anita-choudhary-stellar-health-patient.png"
        },
        {
            name: "Meenal More",
            role: "Nagpur",
            text: "I am so grateful for the exceptional treatment I received. The doctors are knowledgeable, approachable, and dedicated to their patients' well-being. From consultation to recovery, I felt cared for at every stage.",
            rating: 5,
            image: "/assets/meenal-more-stellar-health-patient.png"
        }
    ];


    return (
        <section className="py-24 bg-accent/20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">Patient Stories</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Hear From Our Patients</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-primary/5 relative group hover:shadow-[0_20px_50px_rgba(0,156,223,0.1)] transition-all"
                        >
                            <Quote className="absolute top-6 right-8 text-secondary/20 group-hover:text-secondary/40 transition-colors" size={48} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-secondary text-secondary" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-8 italic leading-relaxed">"{t.text}"</p>

                            <div className="flex items-center gap-4">
                                <div className="p-1 border border-secondary/20 rounded-full">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-dark text-lg">{t.name}</h4>
                                    <p className="text-xs font-medium text-secondary tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
