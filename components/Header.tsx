
import React, { useState } from 'react';
import { useLocalization } from '../contexts/LocalizationContext';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon, ShoppingCartIcon, BellIcon, MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, Bars3Icon, XMarkIcon } from './Icons';
import type { Page } from '../types';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const { language, setLanguage, t } = useLocalization();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLanguageToggle = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    const navLinks: { page: Page, key: 'navHome' | 'navAuctions' | 'navStore' | 'navSellers' | 'navSupport' }[] = [
        { page: 'home', key: 'navHome' },
        { page: 'auctions', key: 'navAuctions' },
        { page: 'store', key: 'navStore' },
        { page: 'sellers', key: 'navSellers' },
        { page: 'support', key: 'navSupport' },
    ];
    
    const NavLinksComponent: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => (
        <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden lg:flex lg:space-x-8 rtl:space-x-reverse items-center'}`}>
            {navLinks.map(link => (
                <button 
                    key={link.page} 
                    onClick={() => { setCurrentPage(link.page); setIsMenuOpen(false); }}
                    className={`
                        font-semibold transition-colors duration-300
                        ${isMobile ? 'text-xl py-2' : 'text-sm'}
                        ${currentPage === link.page 
                            ? 'text-brand-gold' 
                            : 'text-gray-600 dark:text-gray-300 hover:text-brand-gold-light'
                        }
                    `}
                >
                    {t(link.key)}
                </button>
            ))}
        </nav>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-brand-charcoal-dark/80 backdrop-blur-sm shadow-md transition-colors duration-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <button onClick={() => setCurrentPage('home')} className="flex-shrink-0 flex items-center">
                        <svg className="h-10 w-10 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1.5L21.5 12L12 22.5L2.5 12L12 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                            <path d="M12 1.5V22.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                            <path d="M2.5 12H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <NavLinksComponent />
                    </div>

                    {/* Controls */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="hidden md:flex relative w-full max-w-xs">
                             <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="w-full bg-gray-100 dark:bg-brand-charcoal text-gray-800 dark:text-gray-300 border border-transparent focus:ring-1 focus:ring-brand-gold focus:border-brand-gold rounded-full py-2 ps-10 pe-4 transition"
                                placeholder={t('searchPlaceholder')}
                            />
                        </div>
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-brand-charcoal transition-colors">
                            {theme === 'light' ? <MoonIcon className="h-6 w-6 text-gray-600" /> : <SunIcon className="h-6 w-6 text-yellow-400" />}
                        </button>
                        <button onClick={() => setCurrentPage('profile')} className="hidden sm:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-brand-charcoal transition-colors">
                            <UserCircleIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        </button>
                        <button className="hidden sm:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-brand-charcoal transition-colors relative">
                            <ShoppingCartIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        </button>
                         {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-brand-charcoal transition-colors">
                                {isMenuOpen ? <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" /> : <Bars3Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu Panel */}
            <div className={`
                lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white/95 dark:bg-brand-charcoal-dark/95 backdrop-blur-md transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : (language === 'ar' ? 'translate-x-full' : '-translate-x-full')}
            `}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col h-full">
                    <NavLinksComponent isMobile={true}/>
                     <div className="mt-auto border-t border-gray-200 dark:border-gray-700 pt-6">
                        <div className="flex items-center justify-between">
                            <button onClick={() => { setCurrentPage('profile'); setIsMenuOpen(false); }} className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 dark:text-gray-300">
                                <UserCircleIcon className="h-7 w-7" />
                                <span className="font-semibold">{t('profilePageTitle')}</span>
                            </button>
                            <button onClick={handleLanguageToggle} className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 dark:text-gray-300">
                                <GlobeAltIcon className="h-7 w-7" />
                                <span>{language === 'en' ? 'AR' : 'EN'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;