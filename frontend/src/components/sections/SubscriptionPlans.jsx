import React from 'react';
import { Check, Minus, ShieldCheck, Zap, Crown, Calendar, Stethoscope, Activity, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

const SubscriptionPlans = () => {
    const plans = [
        {
            name: "Silver",
            price: "₹1,499",
            period: "per month",
            icon: <ShieldCheck className="text-secondary mb-2" size={28} />,
            color: "bg-white",
            headerClass: "text-dark"
        },
        {
            name: "Gold",
            price: "₹2,499",
            period: "per month",
            icon: <Zap className="text-primary mb-2" size={28} />,
            color: "bg-accent/15",
            headerClass: "text-primary",
            featured: true
        },
        {
            name: "Platinum",
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
        <section className="pb-24 bg-light" id="subscriptions">
            {/* Quick Actions Action Stripe */}
            <div className="w-full bg-primary/95 backdrop-blur-md border-b border-white/10 pt-16 pb-20 px-4 mb-24 relative z-30 shadow-2xl">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                        {/* Tile 1 */}
                        <button className="group bg-white/5 hover:bg-white border border-white/10 hover:border-white rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 group-hover:bg-primary/10 flex items-center justify-center text-white group-hover:text-primary transition-colors">
                                <Calendar size={28} />
                            </div>
                            <span className="text-white group-hover:text-primary font-bold text-sm md:text-base tracking-wide leading-tight">Book An<br />Appointment</span>
                        </button>

                        {/* Tile 2 - Revenue Driver (Highlighted) */}
                        <button className="group bg-gradient-to-br from-secondary to-orange-500 hover:from-white hover:to-white border-2 border-secondary hover:border-white rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 shadow-[0_10px_40px_rgba(var(--color-secondary),0.4)] hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-3xl"></div>
                            <div className="w-16 h-16 rounded-2xl bg-white/20 group-hover:bg-secondary/10 flex items-center justify-center text-white group-hover:text-secondary transition-colors relative z-10 shadow-inner">
                                <Crown size={32} />
                            </div>
                            <span className="text-white group-hover:text-secondary font-black text-base md:text-lg tracking-wide leading-tight relative z-10">Become A<br />Stellar Member</span>
                        </button>

                        {/* Tile 3 */}
                        <button className="group bg-white/5 hover:bg-white border border-white/10 hover:border-white rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 group-hover:bg-primary/10 flex items-center justify-center text-white group-hover:text-primary transition-colors">
                                <Stethoscope size={28} />
                            </div>
                            <span className="text-white group-hover:text-primary font-bold text-sm md:text-base tracking-wide leading-tight">Book A<br />Consultation</span>
                        </button>

                        {/* Tile 4 */}
                        <button className="group bg-white/5 hover:bg-white border border-white/10 hover:border-white rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 group-hover:bg-primary/10 flex items-center justify-center text-white group-hover:text-primary transition-colors">
                                <Activity size={28} />
                            </div>
                            <span className="text-white group-hover:text-primary font-bold text-sm md:text-base tracking-wide leading-tight">Book A<br />Health Checkup</span>
                        </button>

                        {/* Tile 5 (Spans full width on mobile if odd, or wraps nicely) */}
                        <button className="group bg-white/5 hover:bg-white border border-white/10 hover:border-white rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 col-span-2 sm:col-span-1">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 group-hover:bg-primary/10 flex items-center justify-center text-white group-hover:text-primary transition-colors">
                                <FlaskConical size={28} />
                            </div>
                            <span className="text-white group-hover:text-primary font-bold text-sm md:text-base tracking-wide leading-tight">Book A<br />Lab Test</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">What happens when you join Stellar Membership</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">Choose a membership plan that provides you and your family a privileged healthcare experience.</p>
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
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                                                    <motion.div
                                                        animate={{ y: [0, 5, 0] }}
                                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                                        className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white px-5 pt-3 pb-6 shadow-[0_10px_20px_rgba(234,179,8,0.4)]"
                                                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)", WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }}
                                                    >
                                                        <span className="block text-[9px] font-black uppercase tracking-[0.2em] pt-1 whitespace-nowrap">
                                                            Most Popular
                                                        </span>
                                                    </motion.div>
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

                {/* <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
                    <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-primary/20 transition-transform hover:-translate-y-1 active:scale-95">
                        Book a Health Citizenship
                    </button>
                    <button className="bg-white hover:bg-accent/30 text-primary border border-primary/20 px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-gray-200/50 transition-transform hover:-translate-y-1 active:scale-95">
                        Book a lab test
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default SubscriptionPlans;
