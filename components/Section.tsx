
import React, { ReactNode } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useLocalization } from '../contexts/LocalizationContext';

interface SectionProps {
    titleKey: keyof typeof import('../constants/localization').translations.en;
    children: ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ titleKey, children, className = '' }) => {
    const { t, language } = useLocalization();
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

    const titleClasses = `
        text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white 
        ${language === 'ar' ? 'font-tajawal' : 'font-poppins'}
    `;

    const containerClasses = `
        transition-all duration-1000 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    `;

    return (
        <section ref={ref} className={`py-16 md:py-24 ${className}`}>
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerClasses}`}>
                <h2 className={titleClasses}>{t(titleKey)}</h2>
                {children}
            </div>
        </section>
    );
};

export default Section;
