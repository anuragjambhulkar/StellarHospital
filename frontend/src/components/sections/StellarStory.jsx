import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const StellarStory = () => {
    return (
        <section className="bg-white" id="stellar-story">
            {/* Visual Header */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src="./assets/stellar-hospital-nagpur.png"
                    alt="Stellar Hospital"
                    className="w-full h-full object-cover grayscale-[20%] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="absolute bottom-12 left-0 right-0">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">Our Legacy</span>
                            <h2 className="font-display text-5xl md:text-7xl font-bold text-primary mb-2">The Stellar Story</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-8 text-lg text-gray-700 leading-relaxed font-sans">
                        <p className="font-bold text-2xl text-dark font-display">
                            A Multi-speciality Hospital and a beacon of exceptional healthcare in the heart of Vidarbha and Central India.
                        </p>

                        <p>
                            At Stellar Health, we bring together decades of deep clinical expertise and cutting-edge innovation with a steadfast commitment to a patient-first philosophy. Every facet of our care is thoughtfully designed to ensure that you receive not only the highest standard of treatment but also an experience that is deeply personalized and compassionate.
                        </p>

                        <div className="bg-accent/15 p-12 rounded-[3rem] border border-primary/5 relative overflow-hidden group">
                            <div className="relative z-10 italic text-primary text-xl md:text-2xl font-bold leading-relaxed">
                                "Every decision we make is driven by an unwavering dedication to ensuring your health and well-being. We blend deep medical wisdom with surgical perfection."
                            </div>
                            <div className="absolute -right-8 -bottom-8 text-secondary/10 transition-transform group-hover:scale-110 duration-700">
                                <CheckCircle2 size={200} />
                            </div>
                        </div>

                        <div className="space-y-6 pt-4">
                            <p>
                                Founded by a visionary team of esteemed medical professionals alongside a dedicated healthcare entrepreneur, our institution stands as a testament to innovation. We assemble a distinguished roster of experts whose achievements place them at the very forefront of medical excellence.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
                                {[
                                    {
                                        name: "Dr. Nitin Shinde",
                                        title: "Infectious Disease Specialist",
                                        desc: "Renowned as an esteemed Infectious Disease Specialist, Dr. Shinde leverages decades of experience combined with cutting-edge diagnostic techniques to address and manage complex infections."
                                    },
                                    {
                                        name: "Dr. Nishant Deshpande",
                                        title: "Renowned Nephrologist",
                                        desc: "Dr. Deshpande is dedicated to advancing kidney health through a blend of innovative treatments and empathetic care, anchored in the latest clinical research."
                                    },
                                    {
                                        name: "Dr. Tushar Patil",
                                        title: "Distinguished Neurologist",
                                        desc: "Dr. Patil offers an in-depth understanding of neurological conditions, employing state-of-the-art diagnostic and therapeutic techniques to enhance patient recovery."
                                    },
                                    {
                                        name: "Dr. Rashmi Shinde",
                                        title: "Obstetrician & Gynaecologist",
                                        desc: "Specializes in managing high-risk pregnancies and pioneering assisted reproductive technologies, blending scientific expertise with heartfelt sensitivity."
                                    },
                                ].map((founder, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative pl-8 flex flex-col gap-2"
                                    >
                                        <div className="absolute left-0 top-1 text-secondary">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <h4 className="font-display font-bold text-xl text-dark">{founder.name}</h4>
                                        <p className="text-secondary font-semibold text-sm tracking-wide uppercase">{founder.title}</p>
                                        <p className="text-gray-600 text-base leading-relaxed">{founder.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <p className="pt-8 border-t border-gray-100 italic text-gray-500">
                            Supporting this talent is <strong>Mr. Shrikant Waghulkar</strong>, whose innovative vision has been a catalyst for transformative change. His strategic acumen developed our state-of-the-art facility—designed meticulously to adapt to the evolving needs of our community.
                        </p>
                    </div>

                    <div className="lg:col-span-4 lg:block">
                        <div className="sticky top-32 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-10 bg-primary rounded-[3rem] text-white shadow-2xl shadow-primary/30"
                            >
                                <h3 className="text-3xl font-display font-bold mb-6">Experience Excellence</h3>
                                <p className="text-secondary max-w-xs mb-8 leading-relaxed font-medium">
                                    Visit our world-class facility in the heart of Nagpur for personalized care that redefines wellness.
                                </p>
                                <div className="space-y-4 text-sm font-medium">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="text-accent uppercase tracking-widest text-[10px]">Location</span>
                                        <span className="text-right">Gurudev Nagar, Nagpur</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="text-accent uppercase tracking-widest text-[10px]">Weekdays</span>
                                        <span>8 AM - 8 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="text-accent uppercase tracking-widest text-[10px]">Saturday</span>
                                        <span>9 AM - 2 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="bg-secondary text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase">Emergency</span>
                                        <span className="text-secondary font-bold text-lg">24 / 7</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default StellarStory;
