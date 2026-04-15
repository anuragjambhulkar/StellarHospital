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
                            <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block">Our Legacy</span>
                            <h2 className="font-display text-5xl md:text-7xl font-bold text-primary mb-2"></h2>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};


export default StellarStory;

