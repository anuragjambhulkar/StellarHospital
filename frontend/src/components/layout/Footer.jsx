import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <div>
                        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
                            STELLAR<br />HEALTH
                        </h2>
                        <p className="text-secondary max-w-sm font-medium">
                            Medical Imaging & Intervention in an Oasis of Wellness.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg mb-4 text-secondary uppercase tracking-widest text-xs">Services</h3>
                            <a href="#emergency" className="block text-blue-50 hover:text-secondary transition-colors">Emergency</a>
                            <a href="#services" className="block text-blue-50 hover:text-secondary transition-colors">Medical Services</a>
                            <a href="#facilities" className="block text-blue-50 hover:text-secondary transition-colors">Facilities</a>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg mb-4 text-secondary uppercase tracking-widest text-xs">Organization</h3>
                            <a href="#stellar-story" className="block text-blue-50 hover:text-secondary transition-colors">Our Story</a>
                            <a href="#doctors" className="block text-blue-50 hover:text-secondary transition-colors">Specialists</a>
                            <a href="#contact" className="block text-blue-50 hover:text-secondary transition-colors">Contact Us</a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary/60">
                    <p>&copy; 2026 Stellar Health. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
