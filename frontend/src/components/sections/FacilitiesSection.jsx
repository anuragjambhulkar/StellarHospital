import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Activity, Heart, Shield, Microchip, Flame, Coffee, Bed, Scissors, Microscope, Zap, MapPin } from 'lucide-react';

const facilities = [
    { title: "Outpatient Clinic", icon: <Building2 />, tags: "OPEN 24X7 • APPOINTMENTS", image: "./assets/outpatient-clinic.png" },
    { title: "Dialysis Unit", icon: <Activity />, tags: "SESSIONS • SUPPORT • HYGIENE", image: "./assets/dialysis-unit.png" },
    { title: "Labour Suite", icon: <Heart />, tags: "OPEN 24X7 • SAFE • PRIVATE", image: "./assets/labour-suite.png" },
    { title: "Intensive Care Unit", icon: <Shield />, tags: "MONITORING • VENTILATORS", image: "./assets/intensive-care-unit.png" },
    { title: "Operation Theatres", icon: <Microchip />, tags: "TECH EQUIPPED • STERILE", image: "./assets/operation-theatres.png" },
    { title: "Clinical Laboratory", icon: <Microscope />, tags: "FAST • CERTIFIED • ACCURATE", image: "./assets/clinical-laboratory.png" },
    { title: "CT Scan Facility", icon: <Zap />, tags: "ADVANCED • PRECISE • EFFICIENT", image: "./assets/ct-scan-facility.png" },
    { title: "Stellar Pharmacy", icon: <Zap />, tags: "OPEN 24x7 • RELIABLE", image: "./assets/stellar-pharmacy.png" },
    { title: "Emergency Dept.", icon: <Flame />, tags: "RAPID • CRITICAL • 24X7", image: "./assets/emergency-department.png" },
    { title: "Physiotherapy Unit", icon: <Activity />, tags: "RECOVERY • WELLNESS", image: "./assets/phisiotherapy-unit.png" },
    { title: "Patient Rooms", icon: <Bed />, tags: "PRIVATE • COMFORTABLE", image: "./assets/patient-rooms.png" },
    { title: "Cafeteria", icon: <Coffee />, tags: "HEALTHY • FRESH • 24X7", image: "./assets/cafeteria.png" },
];

const FacilitiesSection = () => {
    return (
        <section className="py-24 bg-light overflow-hidden" id="facilities">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">Modern Technology, Compassionate Care</span>
                        <h2 className="font-display text-5xl md:text-6xl font-bold text-primary">World-Class Facilities <br /><span className="text-dark">Tailored for Your Care</span></h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facilities.map((fac, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx % 4 * 0.1 }}
                            className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-xl shadow-primary/5 border border-primary/5"
                        >
                            <img src={fac.image} alt={fac.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <div className="w-10 h-10 bg-secondary/30 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4">
                                    {React.cloneElement(fac.icon, { size: 20 })}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-1 tracking-tight">{fac.title}</h4>
                                <p className="text-[10px] font-bold text-secondary tracking-widest uppercase">{fac.tags}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
