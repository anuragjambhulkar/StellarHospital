import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Shield, Stethoscope, Baby, FlaskConical, Brain, Eye, User, Sparkles, Ear, Thermometer, Bone, Smile, Layers } from 'lucide-react';

const services = [
    { title: "Brain Health", desc: "Expert neurological care and advanced treatment plans for optimal cognitive health and recovery.", bgImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&auto=format&fit=crop&q=80" },
    { title: "Mental Health", desc: "Compassionate support and therapeutic strategies for emotional, psychological, and behavioral well-being.", bgImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80" },
    { title: "Women's Health", desc: "Personalized wellness strategies and comprehensive gynecological care for every stage of life.", bgImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80" },
    { title: "Kidney Health", desc: "Advanced renal diagnostics and management for overall kidney function and long-term wellness.", bgImage: "https://images.unsplash.com/photo-1530497610205-94d31224d081?w=600&auto=format&fit=crop&q=80" },
    { title: "Diabetic Reversal & Metabolic Health", desc: "Targeted strategies and expert guidance for diagnosing and managing metabolic and digestive disorders.", bgImage: "https://images.unsplash.com/photo-1490818387583-1b0ba687a366?w=600&auto=format&fit=crop&q=80" },
    { title: "Infections", desc: "Prompt evaluation and effective treatment for viral, bacterial, and other sudden infections.", bgImage: "https://images.unsplash.com/photo-1584036561584-b0386620add1?w=600&auto=format&fit=crop&q=80" },
    { title: "Cardiac Problems", desc: "Expert assessment and prompt diagnostics for sustained heart health and renewed vitality.", bgImage: "https://images.unsplash.com/photo-1505506874776-66cd72666a46?w=600&auto=format&fit=crop&q=80" },
    { title: "Digestive Problems", desc: "Comprehensive management plans and targeted interventions for optimal blood sugar control.", bgImage: "https://images.unsplash.com/photo-1528642474492-35805494294a?w=600&auto=format&fit=crop&q=80" },
    { title: "Exercise & Longevity", desc: "Customized exercise and longevity planning to promote vitality, mobility, and a longer healthspan.", bgImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop&q=80" },
];

const ServicesSection = () => {
    return (
        <section className="py-24 bg-accent/20 overflow-hidden" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">So , How can we help you <br /><span className="text-dark">today ?</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                            className="relative bg-cover bg-center h-[350px] rounded-[2.5rem] shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-end"
                            style={{ backgroundImage: `url(${service.bgImage})` }}
                        >
                            {/* Dark Gradient Overlay for Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent group-hover:from-primary group-hover:via-primary/80 transition-colors duration-500"></div>

                            <div className="relative z-10 text-white p-8 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold mb-3 font-display">{service.title}</h3>
                                <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <p className="text-blue-50/90 leading-relaxed text-sm">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
