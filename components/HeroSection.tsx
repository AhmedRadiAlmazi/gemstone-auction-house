
import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';

const GoldenParticles: React.FC = () => {
    const particles = Array.from({ length: 50 });
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
                <div
                    key={i}
                    className="absolute bottom-0 rounded-full bg-brand-gold/50"
                    style={{
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        left: `${Math.random() * 100}%`,
                        animation: `particle-float-${(i % 3) + 1} ${Math.random() * 20 + 15}s linear infinite`,
                        animationDelay: `${Math.random() * -30}s`,
                    }}
                />
            ))}
        </div>
    );
};


const HeroSection: React.FC = () => {
    const { t, language } = useLocalization();

    return (
        <section className="relative h-screen flex items-center justify-center bg-brand-charcoal-dark text-white overflow-hidden pt-20">
            <GoldenParticles />
            <div className="relative z-10 text-center p-4">
                <h1 className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-float ${language === 'ar' ? 'font-tajawal' : 'font-poppins'}`}>
                    {t('heroTitle')}
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-3 bg-brand-gold text-brand-charcoal-dark font-semibold rounded-full hover:bg-brand-gold-light transform hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-gold/20">
                        {t('viewAuctions')}
                    </button>
                    <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-charcoal-dark transform hover:scale-105 transition-all duration-300">
                        {t('shopNow')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
