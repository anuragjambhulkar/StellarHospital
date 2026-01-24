import React from 'react';
import { Check, ShieldCheck, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const SubscriptionPlans = () => {
    const plans = [
        {
            name: "Silver",
            price: "₹1,499",
            period: "per month",
            icon: <ShieldCheck className="text-secondary" size={32} />,
            features: [
                "10% Flat Discount on All Services",
                "Basic Annual Health Checkup",
                "Priority Access to Support",
                "Personalized Health Tips"
            ],
            color: "bg-white border-primary/10"
        },
        {
            name: "Gold",
            price: "₹2,499",
            period: "per month",
            icon: <Zap className="text-secondary" size={32} />,
            features: [
                "15% Flat Discount on All Services",
                "Full Body Advanced Screening",
                "Complimentary Health Workshops",
                "Priority Appointment Scheduling",
                "Dedicated Health Manager"
            ],
            color: "bg-accent/30 border-secondary/30",
            featured: true
        },
        {
            name: "Platinum",
            price: "₹4,999",
            period: "per month",
            icon: <Crown className="text-yellow-500" size={32} />,
            features: [
                "25% Flat Discount on All Services",
                "Elite Executive Health Audit",
                "Unlimited Specialist Consultations",
                "24/7 Concierge Support",
                "Home Diagnostics & Sample Collection",
                "Luxury Suite Patient Upgrades"
            ],
            color: "bg-primary text-white border-primary",
            textColor: "text-white"
        }
    ];


    return (
        <section className="py-24 bg-light" id="subscriptions">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Stellar Care Plans</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Choose a membership plan designed to provide you and your family with sustainable, high-priority healthcare excellence.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-[2.5rem] border flex flex-col ${plan.color} ${plan.textColor || 'text-dark'} shadow-sm hover:shadow-2xl transition-all relative overflow-hidden`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 right-0 bg-secondary text-white px-6 py-1 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">Most Popular</div>
                            )}

                            <div className="mb-8">{plan.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className={`text-sm ${plan.textColor ? 'text-blue-100' : 'text-gray-500'}`}>{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check size={18} className={plan.textColor ? 'text-secondary' : 'text-primary'} />
                                        <span className={plan.textColor ? 'text-blue-50' : 'text-gray-600'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.textColor ? 'bg-secondary text-white hover:bg-white hover:text-primary' : 'bg-primary text-white hover:bg-primary/90'}`}>
                                Choose {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SubscriptionPlans;
