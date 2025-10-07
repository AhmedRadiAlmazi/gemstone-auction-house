
import React, { useState, useEffect, useRef } from 'react';
import type { Auction } from '../types';
import { useLocalization } from '../contexts/LocalizationContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// FIX: Define a type for the time left object to prevent errors when accessing its properties.
interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const CountdownTimer: React.FC<{ endDate: Date }> = ({ endDate }) => {
    const { t } = useLocalization();

    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(endDate) - +new Date();
        let timeLeft: TimeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };
    
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents: {label: 'days' | 'hours' | 'minutes' | 'seconds', value: number}[] = [
        { label: 'days', value: timeLeft.days || 0 },
        { label: 'hours', value: timeLeft.hours || 0 },
        { label: 'minutes', value: timeLeft.minutes || 0 },
        { label: 'seconds', value: timeLeft.seconds || 0 },
    ];
    
    return (
        <div className="flex items-center space-x-2 rtl:space-x-reverse text-center">
            {timerComponents.map(obj => (
                <div key={obj.label} className="flex flex-col items-center">
                    <span className="text-2xl md:text-3xl font-bold text-brand-gold-dark dark:text-brand-gold-light animate-glow tracking-widest">{String(obj.value).padStart(2, '0')}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{t(obj.label)}</span>
                </div>
            ))}
        </div>
    );
};

const AuctionCard: React.FC<{ auction: Auction }> = ({ auction }) => {
    const { t, language } = useLocalization();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ triggerOnce: true });

    useEffect(() => {
        audioRef.current = document.getElementById('bid-sound') as HTMLAudioElement;
    }, []);

    const handleBidClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = buttonRef.current;
        if (!button) return;

        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => console.log("Audio play failed:", error));
        }

        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(button.clientWidth, button.clientHeight);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        ripple.classList.add('ripple');
        button.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    };

    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(auction.lastPrice);

    return (
        <div 
            ref={ref}
            className={`
                flex flex-col md:flex-row items-center bg-white dark:bg-brand-charcoal-light rounded-xl shadow-lg 
                overflow-hidden transform transition-all duration-700
                ${isVisible ? 'opacity-100 translate-x-0' : (language === 'ar' ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20')}
            `}
        >
            <img src={auction.gem.image} alt={auction.gem.name[language]} className="w-full md:w-1/3 h-64 md:h-auto object-cover"/>
            <div className="flex-1 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{auction.gem.name[language]}</h3>
                    <div className="flex items-center justify-center md:justify-start space-x-4 rtl:space-x-reverse text-gray-600 dark:text-gray-300">
                        <span>{t('bidders')}: <span className="font-semibold">{auction.bidders}</span></span>
                        <span>{t('lastPrice')}: <span className="font-semibold text-brand-gold-dark dark:text-brand-gold-light">{formattedPrice}</span></span>
                    </div>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                    <CountdownTimer endDate={auction.endDate} />
                    <button 
                        ref={buttonRef} 
                        onClick={handleBidClick}
                        className="ripple-effect relative overflow-hidden w-full md:w-auto px-10 py-3 bg-brand-gold text-brand-charcoal-dark font-bold rounded-lg shadow-md hover:bg-brand-gold-light transform hover:scale-105 transition-all duration-300"
                    >
                        {t('bidNow')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuctionCard;
