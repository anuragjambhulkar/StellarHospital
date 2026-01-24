import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';

const EmergencySection = () => {
    return (
        <section className="py-24 bg-accent/20 overflow-hidden" id="emergency">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Instructions */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div>
                            <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">24/7 Priority Emergency Care</span>
                            <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-8 leading-[1.1]">
                                Immediate Medical <br />
                                <span className="text-secondary underline decoration-primary/20 decoration-4 underline-offset-8">Attention, Anytime.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                If you require urgent care, please visit our Emergency Center as soon as you can. Our specialized trauma team is always ready to assist you.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-primary/5 border border-primary/5 space-y-8">
                            <h3 className="text-2xl font-bold text-dark flex items-center gap-3">
                                <AlertTriangle className="text-secondary" size={28} />
                                Emergency Arrival Instructions
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-accent/30 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark">Location</h4>
                                        <p className="text-sm text-gray-500">Go directly to the Ground Floor Entrance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-accent/30 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark">Inform Staff</h4>
                                        <p className="text-sm text-gray-500">Notify the legacy reception immediately about the urgency.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-accent/30 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark">Priority Team</h4>
                                        <p className="text-sm text-gray-500">Our specialized team will assist you upon arrival.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-primary hover:bg-secondary text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 transition-all flex items-center gap-3 active:scale-95">
                                <Phone size={24} /> 1800 5533 3355
                            </button>
                            <button className="bg-white border-2 border-secondary text-secondary hover:bg-secondary/5 px-10 py-5 rounded-2xl text-lg font-bold transition-all">
                                Call Hospital
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Quick Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-primary p-10 md:p-14 rounded-[4rem] shadow-2xl shadow-primary/20 text-white"
                    >
                        <h3 className="text-3xl font-bold mb-10">Quick Emergency Registration</h3>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-secondary">Patient's Name</label>
                                <input type="text" className="w-full bg-white/10 border-none rounded-2xl py-4 px-6 text-white placeholder:text-secondary/50 focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="Enter Full Name" />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-secondary">Age</label>
                                    <input type="number" className="w-full bg-white/10 border-none rounded-2xl py-4 px-6 text-white placeholder:text-secondary/50 focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="Age" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-secondary">Sex</label>
                                    <select className="w-full bg-white/10 border-none rounded-2xl py-4 px-6 text-white appearance-none focus:ring-2 focus:ring-secondary/50 outline-none">
                                        <option className="bg-primary">Male</option>
                                        <option className="bg-primary">Female</option>
                                        <option className="bg-primary">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-secondary">Condition Overview</label>
                                <textarea className="w-full bg-white/10 border-none rounded-2xl py-4 px-6 text-white placeholder:text-secondary/50 focus:ring-2 focus:ring-secondary/50 outline-none min-h-[120px]" placeholder="Briefly describe the emergency..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-secondary hover:bg-white hover:text-primary py-5 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-3 mt-4">
                                Secure Priority Slot <ArrowRight size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EmergencySection;
