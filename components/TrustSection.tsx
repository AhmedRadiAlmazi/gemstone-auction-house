
import React from 'react';
import Section from './Section';
import { useLocalization } from '../contexts/LocalizationContext';
import { LockClosedIcon, MagnifyingGlassCircleIcon, CheckBadgeIcon } from './Icons';
// FIX: Import the missing useIntersectionObserver hook.
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface StepCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ triggerOnce: true });
    
    return (
        <div 
            ref={ref}
            className={`
                text-center p-6 transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}
            style={{ transitionDelay: delay }}
        >
            <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 bg-brand-gold/10 rounded-full border-2 border-brand-gold text-brand-gold">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

const TrustSection: React.FC = () => {
    const { t } = useLocalization();

    return (
        <Section titleKey="trustAndEscrow" className="bg-brand-charcoal-dark dark:bg-black">
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-gold/30 hidden md:block"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StepCard
                        icon={<LockClosedIcon className="w-10 h-10" />}
                        title={t('escrowStep1')}
                        description={t('escrowStep1Desc')}
                        delay="0ms"
                    />
                    <StepCard
                        icon={<MagnifyingGlassCircleIcon className="w-10 h-10" />}
                        title={t('escrowStep2')}
                        description={t('escrowStep2Desc')}
                        delay="200ms"
                    />
                    <StepCard
                        icon={<CheckBadgeIcon className="w-10 h-10" />}
                        title={t('escrowStep3')}
                        description={t('escrowStep3Desc')}
                        delay="400ms"
                    />
                </div>
            </div>
        </Section>
    );
};

export default TrustSection;
