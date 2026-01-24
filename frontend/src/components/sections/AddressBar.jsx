import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const AddressBar = () => {
    return (
        <section className="bg-primary pt-24 pb-12 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="font-display text-4xl font-bold">STELLAR HEALTH</h2>
                        <p className="text-secondary text-lg leading-relaxed max-w-sm font-medium">
                            Where modern care meets compassion, blending technology with human touch.
                        </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Address */}
                        <div className="space-y-6">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-secondary">
                                <MapPin size={20} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Location</h4>
                                <address className="text-blue-50 text-xs not-italic leading-relaxed">
                                    30, Gurudev Nagar,<br />
                                    Nandanwan, Nagpur,<br />
                                    Maharashtra, India.
                                </address>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="space-y-6">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-secondary">
                                <Phone size={20} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Contact</h4>
                                <div className="text-blue-50 text-xs space-y-2">
                                    <p className="flex items-center gap-2">info@stellarhospital.com</p>
                                    <p className="flex items-center gap-2 font-bold text-secondary">1-833-213-6353</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-secondary invisible md:visible">
                                <Clock size={20} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Services</h4>
                                <div className="flex flex-col gap-2 text-xs text-blue-50">
                                    <a href="#emergency" className="hover:text-secondary transition-colors">Emergency</a>
                                    <a href="#services" className="hover:text-secondary transition-colors">Medical Services</a>
                                    <a href="#facilities" className="hover:text-secondary transition-colors">Facilities</a>
                                </div>
                            </div>
                        </div>

                        {/* Support */}
                        <div className="space-y-6">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-secondary invisible md:visible">
                                <Clock size={20} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-bold text-sm text-white uppercase tracking-wider">Help</h4>
                                <div className="flex flex-col gap-2 text-xs text-blue-50">
                                    <a href="#stellar-story" className="hover:text-secondary transition-colors">Our Story</a>
                                    <a href="#doctors" className="hover:text-secondary transition-colors">Specialists</a>
                                    <a href="#contact" className="hover:text-secondary transition-colors">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary/60">
                    <p>&copy; 2026 Stellar Health. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddressBar;
