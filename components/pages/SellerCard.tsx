
import React from 'react';
import type { Seller } from '../../types';
import { useLocalization } from '../../contexts/LocalizationContext';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface SellerCardProps {
    seller: Seller;
}

const SellerCard: React.FC<SellerCardProps> = ({ seller }) => {
    const { t, language } = useLocalization();
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });

    return (
        <div
            ref={ref}
            className={`
                bg-white dark:bg-brand-charcoal-light rounded-lg shadow-lg text-center p-6
                transform hover:-translate-y-2 transition-all duration-500 group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <img 
                src={seller.image} 
                alt={seller.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200 dark:border-brand-charcoal group-hover:border-brand-gold transition-colors duration-300"
            />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{seller.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-3">{seller.country[language]}</p>
            <div className="flex justify-center items-center space-x-4 rtl:space-x-reverse mb-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 ltr:mr-1 rtl:ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span>{seller.rating.toFixed(1)}</span>
                </div>
                <span>|</span>
                <div>
                    <span>{seller.products} {t('products')}</span>
                </div>
            </div>
            <button className="w-full bg-brand-charcoal-dark dark:bg-brand-gold text-white dark:text-brand-charcoal-dark font-bold py-2 px-4 rounded-lg hover:bg-brand-charcoal dark:hover:bg-brand-gold-light transition-colors duration-300">
                {t('viewStore')}
            </button>
        </div>
    );
};

export default SellerCard;