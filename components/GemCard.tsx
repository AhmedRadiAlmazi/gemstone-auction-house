
import React from 'react';
import type { Gem } from '../types';
import { useLocalization } from '../contexts/LocalizationContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface GemCardProps {
    gem: Gem;
}

const GemCard: React.FC<GemCardProps> = ({ gem }) => {
    const { t, language } = useLocalization();
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });
    
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(gem.price);

    return (
        <div 
            ref={ref}
            className={`
                bg-white dark:bg-brand-charcoal-light rounded-lg shadow-lg overflow-hidden transform 
                hover:-translate-y-2 transition-all duration-500 group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <div className="relative">
                <img src={gem.image} alt={gem.name[language]} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-brand-gold/80 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center backdrop-blur-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Verified</span>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.2), transparent 70%)' }}>
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 truncate">{gem.name[language]}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-1">{gem.country[language]}</p>
                <p className="text-lg font-semibold text-brand-gold-dark dark:text-brand-gold-light mb-4">{formattedPrice}</p>
                <button className="w-full bg-brand-charcoal-dark dark:bg-brand-gold text-white dark:text-brand-charcoal-dark font-bold py-2 px-4 rounded-lg hover:bg-brand-charcoal dark:hover:bg-brand-gold-light transition-colors duration-300">
                    {t('details')}
                </button>
            </div>
        </div>
    );
};

export default GemCard;
