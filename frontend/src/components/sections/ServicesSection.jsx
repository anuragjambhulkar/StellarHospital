import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Shield, Stethoscope, Baby, FlaskConical, Brain, Eye, User, Sparkles, Ear, Thermometer, Bone, Smile, Layers } from 'lucide-react';

const services = [
    { title: "Cardiac Care", desc: "Expert assessment and prompt diagnostics for sustained heart health and renewed vitality.", icon: <Heart /> },
    //{ title: "Breast Care", desc: "Advanced imaging technologies deliver precise screening and early detection for women of all ages.", icon: <Sparkles /> },
    { title: "Prostate Care", desc: "State-of-the-art diagnostic tools and proactive screening for improved well-being.", icon: <Shield /> },
    { title: "Fever & Injection", desc: "Prompt evaluation and effective treatment for sudden illnesses, fevers, and necessary vaccinations.", icon: <Thermometer /> },
    { title: "Diabetic Care", desc: "Comprehensive management plans and targeted interventions for optimal blood sugar control.", icon: <Activity /> },
    { title: "Pediatric Care", desc: "Nurturing support, routine checkups, and specialized care for the holistic development of children.", icon: <Baby /> },
    { title: "Ortho Services", desc: "Innovative interventions for joint, bone, and soft tissue conditions to restore mobility and strength.", icon: <Bone /> },
    { title: "Women Health", desc: "Personalized wellness strategies and comprehensive gynecological care for every stage of life.", icon: <User /> },
    { title: "Metabolic Care", desc: "Targeted strategies and expert guidance for diagnosing and managing metabolic disorders.", icon: <FlaskConical /> },
    { title: "Dental Care", desc: "Comprehensive solutions for lasting oral wellness, hygiene, and a vibrant confident smile.", icon: <Smile /> },
    { title: "Kidney Health", desc: "Advanced renal diagnostics and management for overall kidney function and long-term wellness.", icon: <FlaskConical /> },
    { title: "Mental Health", desc: "Compassionate support and therapeutic strategies for emotional, psychological, and behavioral well-being.", icon: <Brain /> },
    { title: "Brain Health", desc: "Expert neurological care and advanced treatment plans for optimal cognitive health and recovery.", icon: <Brain /> },
    { title: "Others", desc: "A wide spectrum of specialized medical services tailored to address unique and varied healthcare needs.", icon: <Layers /> },
];

const ServicesSection = () => {
    return (
        <section className="py-24 bg-accent/20 overflow-hidden" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">Unmatched Infrastructure</span>
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">So , How can we help you <br /><span className="text-dark">Today?</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1 }}
                            className="bg-white p-10 rounded-[3rem] shadow-xl shadow-primary/5 border border-primary/5 hover:shadow-2xl transition-all group hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                                {React.cloneElement(service.icon, { size: 24 })}
                            </div>
                            <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
