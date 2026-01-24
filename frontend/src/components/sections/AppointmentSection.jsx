import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, ClipboardList, Send } from 'lucide-react';

const AppointmentSection = () => {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const upcomingDates = [];
        const today = new Date();
        for (let i = 1; i <= 6; i++) {
            const date = new Date();
            date.setDate(today.getDate() + i);
            upcomingDates.push({
                value: date.toISOString().split('T')[0],
                label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
            });
        }
        setDates(upcomingDates);
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden" id="booking">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Side: Content */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">Seamless Experience</span>
                            <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-8 leading-[1.1]">
                                Experience Efficient & <br />
                                <span className="text-dark">Personalized Care.</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our appointment booking system is designed with you in mind. Whether you need a routine check-up or specialized treatment, our team makes scheduling straightforward and personalized.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Timely Consultations", desc: "Minimal wait times with optimized scheduling." },
                                { title: "Expert Matching", desc: "Connect with the most suitable specialist for your needs." },
                                { title: "Effortless Booking", desc: "Simple 3-step process to secure your slot." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-accent/30 rounded-2xl flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-secondary group-hover:text-white">
                                        <div className="w-2 h-2 bg-secondary rounded-full group-hover:bg-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-accent/15 p-10 md:p-14 rounded-[4rem] border border-primary/5 shadow-2xl shadow-primary/5"
                        >
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-4">Patient's Name</label>
                                        <div className="relative">
                                            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input type="text" className="w-full bg-white border-none rounded-2xl py-4 pl-14 pr-6 text-dark placeholder:text-gray-300 focus:ring-2 focus:ring-primary/20 outline-none shadow-sm" placeholder="Enter Full Name" required />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-4">Age</label>
                                            <input type="number" className="w-full bg-white border-none rounded-2xl py-4 px-6 text-dark placeholder:text-gray-300 focus:ring-2 focus:ring-primary/20 outline-none shadow-sm" placeholder="Age" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-4">Sex</label>
                                            <select className="w-full bg-white border-none rounded-2xl py-4 px-6 text-dark focus:ring-2 focus:ring-primary/20 outline-none shadow-sm appearance-none" required>
                                                <option value="">Sex</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-4">Preferred Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <select className="w-full bg-white border-none rounded-2xl py-4 pl-14 pr-6 text-dark focus:ring-2 focus:ring-primary/20 outline-none shadow-sm appearance-none" required>
                                                <option value="">Select Date</option>
                                                {dates.map(date => (
                                                    <option key={date.value} value={date.value}>{date.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-4">Preferred Time</label>
                                        <div className="relative">
                                            <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <select className="w-full bg-white border-none rounded-2xl py-4 pl-14 pr-6 text-dark focus:ring-2 focus:ring-primary/20 outline-none shadow-sm appearance-none" required>
                                                <option value="">Select Time Slot</option>
                                                <option>9:00 AM - 10:00 AM</option>
                                                <option>10:00 AM - 11:00 AM</option>
                                                <option>11:00 AM - 12:00 PM</option>
                                                <option>02:00 PM - 05:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-4">Treatment Details</label>
                                    <div className="relative">
                                        <ClipboardList className="absolute left-6 top-6 text-gray-400" size={18} />
                                        <textarea className="w-full bg-white border-none rounded-[2rem] py-5 pl-14 pr-6 text-dark placeholder:text-gray-300 focus:ring-2 focus:ring-primary/20 outline-none shadow-sm min-h-[120px]" placeholder="Briefly describe your medical requirement..." required></textarea>
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-primary hover:bg-secondary text-white py-5 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-[0.98]">
                                    Book My Appointment <Send size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;
