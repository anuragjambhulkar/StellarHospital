import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, MessageSquare } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="py-24 bg-accent/25 overflow-hidden" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Side: Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">Get In Touch</span>
                            <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-8 leading-[1.1]">
                                We're here to help you on <br />
                                <span className="text-secondary">your healthcare journey</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                At Stellar, we are dedicated to providing care, dignity, and hope at every step. Reach out to us today, and let us guide you toward healing and wellness.
                            </p>
                        </div>

                        <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-primary/5 h-[400px] relative group">
                            <iframe
                                title="Stellar Health Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14886.325390824084!2d79.10308023940313!3d21.12925070074007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c759f99c09c9%3A0x6e1aa815461d286d!2s30%2C%20Gurudev%20Nagar%2C%20Bapu%20Nagar%2C%20Nandanvan%2C%20Nagpur%2C%20Maharashtra%20440024%2C%20India!5e0!3m2!1sen!2sus!4v1741178181333!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute inset-x-6 bottom-6 flex justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
                                >
                                    Get Directions <MapPin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-primary/5 border border-primary/5"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-accent/10 border-none rounded-2xl px-6 py-4 text-dark focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-accent/10 border-none rounded-2xl px-6 py-4 text-dark focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">How can we help?</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                    className="w-full bg-accent/10 border-none rounded-3xl px-6 py-4 text-dark focus:ring-2 focus:ring-secondary/20 transition-all outline-none resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full bg-primary hover:bg-secondary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 group">
                                Send Message
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-12 pt-12 border-t border-primary/5 grid grid-cols-2 gap-8 text-center">
                            <div>
                                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 border border-secondary/20">
                                    <Phone size={24} />
                                </div>
                                <div className="font-bold text-dark">Call Us</div>
                                <div className="text-gray-500 text-sm">1800 5533 3355</div>
                            </div>
                            <div>
                                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 border border-secondary/20">
                                    <MessageSquare size={24} />
                                </div>
                                <div className="font-bold text-dark">Support</div>
                                <div className="text-gray-500 text-sm">info@stellar.com</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
