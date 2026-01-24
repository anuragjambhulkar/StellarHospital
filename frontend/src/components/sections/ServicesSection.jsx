import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Shield, Activity as Lung, Stethoscope, Baby, FlaskConical, Brain, Eye, User, Sparkles, Ear } from 'lucide-react';

const services = [
    { title: "Cardiac Care", desc: "Expert assessment and prompt diagnostics for sustained heart health and renewed vitality.", icon: <Heart /> },
    { title: "Breast Care", desc: "Advanced imaging technologies deliver precise screening and early detection for women of all ages.", icon: <Sparkles /> },
    { title: "Prostate Care", desc: "State-of-the-art diagnostic tools and proactive screening for improved well-being.", icon: <Shield /> },
    { title: "Pain Management", desc: "Holistic therapies targeting discomfort at its source while promoting lasting healing.", icon: <Activity /> },
    { title: "Diabetes Control", desc: "Integrated monitoring and targeted interventions for optimal blood sugar management.", icon: <Lung /> },
    { title: "Pediatric Care", desc: "Nurturing support and early intervention for holistic child development.", icon: <Baby /> },
    { title: "Ortho Services", desc: "Innovative interventions for joint, bone, and soft tissue conditions to restore mobility.", icon: <Stethoscope /> },
    { title: "Women's Care", desc: "Personalized wellness strategies addressing unique needs at every stage of life.", icon: <User /> },
    { title: "Oncology", desc: "Breakthrough diagnostic technologies and individualized treatment strategies for targeted care.", icon: <FlaskConical /> },
    { title: "Dental Care", desc: "Comprehensive solutions for lasting oral wellness and vibrant confidence.", icon: <Sparkles /> },
    { title: "Nephrology", desc: "Advanced renal diagnostics and management for overall kidney wellness.", icon: <FlaskConical /> },
    { title: "Mental Health", desc: "Integrated empathy and innovative therapies for emotional and psychological needs.", icon: <Brain /> },
];

const ServicesSection = () => {
    return (
        <section className="py-24 bg-accent/20 overflow-hidden" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">Unmatched Infrastructure</span>
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">Elevate Your Experience with <br /><span className="text-dark">Transformative Healthcare</span></h2>
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
