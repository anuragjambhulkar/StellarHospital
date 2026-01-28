import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Search, ChevronDown, Award, Briefcase, GraduationCap, BookOpen, User } from 'lucide-react';

const doctorsData = [
    {
        id: 1,
        name: "Dr. Nitin Shinde",
        specialty: "Internal Medicine & Infections",
        qualification: "MBBS, MD, (Internal Medicine), Post-Doctoral Fellowship in Infectious Diseases",
        image: "./assets/dr-nitin-shinde.png",
        availability: "10:00 AM - 04:00 PM",
        details: {
            experience: [
                "Alexis Multispecialty Hospital, Nagpur – (June 2018 – till date)",
                "Wockhardt Multispecialty Hospital, Nagpur – (April 2013 – June 2018)",
                "Fellow – Columbia Asia Hospital, Bangalore - (July 2011–Feb 2013)"
            ],
            education: [
                "MD (Internal Medicine) – Government Medical College, Nagpur (2010)",
                "MBBS – JN Medical College, Wardha (2005)",
                "Post-doctoral Fellowship in Infectious Diseases – RGUHS, Karnataka"
            ],
            publications: ["Clinical Profile of Acute Hepatitis E in Pregnancy", "Scrub Typhus - Vidarbha Journal"],
            academic: ["Contributor, National Guidelines for Infection Prevention (NCDC)", "Organizing Secretary, CIDSCON"]
        }
    },
    {
        id: 2,
        name: "Dr. Rashmi Shinde",
        specialty: "Obstetrics, Gynecology & IVF",
        qualification: "MBBS, MS (OBGY), DNB (OBGY), MRCOG, Fellowship in Obstetric Medicine & IVF",
        image: "./assets/dr-rashmi-shinde.png",
        availability: "09:00 AM - 01:00 PM",
        details: {
            experience: [
                "10 Years of Experience in Obstetrics and Gynecology",
                "Conducted more than 600 high-risk deliveries",
                "Consultant at Wockhardt Hospital (Nagpur)"
            ],
            education: [
                "MBBS, MS (OBGY), DNB (OBGY)",
                "MRCOG (UK Member)",
                "Fellowship in High-Risk Pregnancy - Fernandez Hospital"
            ],
            publications: ["Predictive value of cytological smear in reproductive health"],
            academic: ["K2MS CTG Training", "Member of SOMI and FOGSI"]
        }
    },
    {
        id: 3,
        name: "Dr. Nishant Deshpande",
        specialty: "Nephrology",
        qualification: "MBBS, MD, (General Medicine), Diplomate of the National Board in Nephrology",
        image: "./assets/dr-nishant-deshpandey.png",
        availability: "11:00 AM - 05:00 PM",
        details: {
            experience: ["Consultant Nephrologist with years of expertise", "Expert in Dialysis and Renal Transplant"],
            education: ["MD (General Medicine)", "DNB (Nephrology)"],
            publications: ["Kidney Health Awareness Studies"],
            academic: ["Speaker at National Nephrology Conferences"]
        }
    },
    {
        id: 4,
        name: "Dr. Tushar Patil",
        specialty: "Neurology",
        qualification: "MBBS, MD, (General Medicine), DM (Neurology), Neurocritical & Stroke Fellowship",
        image: "./assets/dr-tushar-patil.png",
        availability: "02:00 PM - 07:00 PM",
        details: {
            experience: ["Neurocritical & Stroke Specialist", "Decades of clinical experience"],
            education: ["MD (General Medicine)", "DM (Neurology)"],
            publications: ["Stroke Management Updates"],
            academic: ["Fellowship in Neurocritical Care"]
        }
    },
    {
        id: 5,
        name: "Dr. Shivani Malhotra",
        specialty: "Cardiology",
        qualification: "MBBS, MD (General Medicine), DM (Cardiology and Internal Vascular Health)",
        image: "./assets/dr-shivani-malhotra.png",
        availability: "10:00 AM - 02:00 PM",
        details: {
            experience: ["Vascular Health Specialist", "Advanced Cardiac Interventionist"],
            education: ["MD (Medicine)", "DM (Cardiology)"],
            publications: ["Cardiac Health in Young Adults"],
            academic: ["Advanced Fellow in Vascular Medicine"]
        }
    },
    {
        id: 6,
        name: "Dr. Rajiv Joshi",
        specialty: "Orthopedics",
        qualification: "MBBS, MS (Orthopedics), Clinical Fellowship in Sports Medicine & Bone Care",
        image: "./assets/dr-rajiv-joshi.png",
        availability: "04:00 PM - 08:00 PM",
        details: {
            experience: ["Specialist in Sports Injuries", "Joint Replacement Surgeon"],
            education: ["MS (Orthopedics)", "Fellowship in Sports Medicine"],
            publications: ["Arthroscopic Management Trends"],
            academic: ["Sports Medicine Association Member"]
        }
    }
];

const DoctorCard = ({ doctor }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            className="bg-white rounded-[3rem] p-4 shadow-xl shadow-primary/5 border border-gray-100 flex flex-col h-full overflow-hidden"
        >
            <div className="p-4 flex items-start gap-6">
                <div className="w-24 h-24 rounded-3xl overflow-hidden bg-accent/30 shrink-0 border border-secondary/20">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = "https://api.dicebear.com/7.x/initials/svg?seed=" + doctor.name }}
                    />
                </div>
                <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/5 px-3 py-1 rounded-lg">
                        {doctor.specialty}
                    </span>
                    <h4 className="text-xl font-bold text-dark">{doctor.name}</h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">{doctor.qualification}</p>
                </div>
            </div>

            <div className="px-6 py-4 bg-accent/20 rounded-[2.5rem] mb-4 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Availability</span>
                    <div className="flex gap-2">
                        <button className="text-gray-400 hover:text-primary"><ChevronLeft size={16} /></button>
                        <button className="text-gray-400 hover:text-primary"><ChevronRight size={16} /></button>
                    </div>
                </div>
                <div className="bg-white border border-gray-200/50 rounded-2xl p-3 flex items-center justify-center gap-3 text-primary font-bold shadow-sm">
                    <Calendar size={18} className="text-secondary" />
                    <span className="text-sm">{doctor.availability}</span>
                </div>
            </div>

            <div className="px-4 pb-4 space-y-4 flex-grow">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors"
                >
                    <span className="text-sm font-bold text-dark">View Professional Profile</span>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                        <ChevronDown size={20} className="text-primary" />
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden space-y-6 pt-2"
                        >
                            <div className="space-y-4">
                                <section>
                                    <h5 className="flex items-center gap-2 text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                                        <Briefcase size={14} className="text-secondary" /> Work Experience
                                    </h5>
                                    <ul className="space-y-2">
                                        {doctor.details.experience.map((ex, i) => (
                                            <li key={i} className="text-xs text-gray-600 leading-relaxed">• {ex}</li>
                                        ))}
                                    </ul>
                                </section>
                                <section>
                                    <h5 className="flex items-center gap-2 text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                                        <GraduationCap size={14} className="text-secondary" /> Education
                                    </h5>
                                    <ul className="space-y-2">
                                        {doctor.details.education.map((ed, i) => (
                                            <li key={i} className="text-xs text-gray-600 leading-relaxed">• {ed}</li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-all shadow-lg shadow-primary/10">
                    Book Appointment
                </button>
            </div>
        </motion.div>
    );
};

const DoctorsSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('All');

    const specialties = ['All', ...new Set(doctorsData.map(d => d.specialty.split(' & ')[0]))];

    const filteredDoctors = doctorsData.filter(doc => {
        const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty.includes(selectedSpecialty);
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSpecialty && matchesSearch;
    });

    return (
        <section className="py-24 bg-light overflow-hidden" id="doctors">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">Care Beyond Boundaries</span>
                        <h2 className="font-display text-5xl md:text-6xl font-bold text-primary">Meet Our Expert <br /><span className="text-dark">Medical Specialists</span></h2>
                    </div>

                    <div className="flex flex-wrap gap-4 bg-white p-3 rounded-[2rem] shadow-xl shadow-primary/5 border border-gray-100 w-full md:w-auto">
                        <div className="relative flex-grow md:flex-grow-0">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search by name or specialty..."
                                className="pl-12 pr-6 py-3 bg-gray-50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 border-none w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select
                            className="bg-gray-50 px-6 py-3 rounded-2xl text-sm border-none focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer font-bold text-gray-600"
                            value={selectedSpecialty}
                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                        >
                            {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredDoctors.map((doc) => (
                        <DoctorCard key={doc.id} doctor={doc} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorsSection;
