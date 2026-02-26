import React from 'react';
import { Check, Minus, ShieldCheck, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const SubscriptionPlans = () => {
    const plans = [
        {
            name: "Copper",
            price: "₹1,499",
            period: "per month",
            icon: <ShieldCheck className="text-secondary mb-2" size={28} />,
            color: "bg-white",
            headerClass: "text-dark"
        },
        {
            name: "Silver",
            price: "₹2,499",
            period: "per month",
            icon: <Zap className="text-primary mb-2" size={28} />,
            color: "bg-accent/15",
            headerClass: "text-primary",
            featured: true
        },
        {
            name: "Gold",
            price: "₹4,999",
            period: "per month",
            icon: <Crown className="text-yellow-400 mb-2" size={28} />,
            color: "bg-primary text-white",
            headerClass: "text-white"
        }
    ];

    const features = [
        { name: "Consultation", availability: [true, true, true] },
        { name: "Lab Test", availability: [true, true, true] },
        { name: "Radiology", availability: [false, true, true] },
        { name: "OT", availability: [false, false, true] },
        { name: "Pharmacy", availability: [true, true, true] },
        { name: "Inpatient charges*", availability: [false, true, true] }
    ];

    return (
        <section className="py-24 bg-light" id="subscriptions">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">What happens when you join Stellar Membership</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Choose a membership plan designed to provide you and your family with sustainable, high-priority healthcare excellence.</p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr>
                                    <th className="p-8 border-b border-gray-100 bg-gray-50/50 w-1/4 align-bottom">
                                        <span className="text-xl font-bold text-primary">Features & Benefits</span>
                                    </th>
                                    {plans.map((plan, idx) => (
                                        <th key={idx} className={`p-8 border-b border-gray-100 ${plan.color} relative text-center w-1/4 align-bottom`}>
                                            {plan.featured && (
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-b-xl text-[10px] font-bold uppercase tracking-widest shadow-md">
                                                    Most Popular
                                                </div>
                                            )}
                                            <div className="flex flex-col items-center justify-center mt-6">
                                                {plan.icon}
                                                <h3 className={`text-2xl font-display font-bold mb-1 ${plan.headerClass}`}>{plan.name}</h3>
                                                <div className="flex items-baseline justify-center gap-1">
                                                    <span className="text-3xl font-bold">{plan.price}</span>
                                                    <span className={`text-xs ${idx === 2 ? 'opacity-80' : 'text-gray-500'}`}>{plan.period}</span>
                                                </div>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/20 transition-colors">
                                        <td className="p-6 border-b border-gray-100 font-semibold text-gray-700 pl-8">
                                            {feature.name}
                                        </td>
                                        {feature.availability.map((isAvailable, colIdx) => (
                                            <td key={colIdx} className={`p-6 border-b border-gray-100 text-center ${plans[colIdx].color}`}>
                                                {isAvailable ? (
                                                    <Check size={24} className={`mx-auto ${colIdx === 2 ? 'text-secondary' : 'text-primary'}`} />
                                                ) : (
                                                    <Minus size={24} className={`mx-auto ${colIdx === 2 ? 'text-white/30' : 'text-gray-300'}`} />
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className="p-8 bg-gray-50/50 border-t border-gray-100"></td>
                                    {plans.map((plan, idx) => (
                                        <td key={idx} className={`p-8 text-center ${plan.color}`}>
                                            <button className={`w-full py-4 px-6 rounded-xl font-bold transition-transform hover:scale-105 shadow-md ${idx === 2 ? 'bg-white text-primary hover:bg-gray-50' : idx === 1 ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary text-white hover:bg-primary/90'}`}>
                                                Choose {plan.name}
                                            </button>
                                        </td>
                                    ))}
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
                    <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-primary/20 transition-transform hover:-translate-y-1 active:scale-95">
                        Book a Health Citizenship
                    </button>
                    <button className="bg-white hover:bg-accent/30 text-primary border border-primary/20 px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-gray-200/50 transition-transform hover:-translate-y-1 active:scale-95">
                        Book a lab test
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionPlans;
