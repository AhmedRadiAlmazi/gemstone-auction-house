
import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';

const Footer: React.FC = () => {
    const { t } = useLocalization();

    const socialLinks = [
        { name: 'Facebook', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>, href: '#' },
        { name: 'Twitter', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.418.113-.859.172-1.313.172-.304 0-.598-.03-.886-.084.629 1.884 2.445 3.256 4.604 3.295-1.78 1.39-4.032 2.223-6.49 2.223-.422 0-.838-.025-1.25-.073 2.298 1.474 5.031 2.333 7.982 2.333 9.578 0 14.82-7.947 14.527-14.886.994-.718 1.858-1.62 2.548-2.643z"/></svg>, href: '#' },
        { name: 'Instagram', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>, href: '#' }
    ];

    return (
        <footer className="bg-brand-charcoal dark:bg-black text-gray-400">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
                    <div className="flex flex-col items-center md:items-start">
                         <div className="flex items-center mb-4">
                            <svg className="h-10 w-10 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 1.5L21.5 12L12 22.5L2.5 12L12 1.5Z" strokeWidth="1.5" strokeLinejoin="round"/>
                                <path d="M12 1.5V22.5" strokeWidth="1.5" strokeLinejoin="round"/>
                                <path d="M2.5 12H21.5" strokeWidth="1.5" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-xl font-semibold text-gray-500 ml-2">Gemstone House</span>
                        </div>
                        <p className="max-w-xs">{t('heroTitle')}</p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="font-bold text-white mb-4">{t('policies')}</h3>
                        <a href="#" className="hover:text-brand-gold transition-colors">{t('privacyPolicy')}</a>
                        <a href="#" className="hover:text-brand-gold transition-colors mt-2">{t('termsOfService')}</a>
                    </div>
                    
                    <div className="flex flex-col">
                        <h3 className="font-bold text-white mb-4">{t('contact')}</h3>
                         <div className="flex space-x-4">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.href} className="hover:text-brand-gold transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Gemstone Auction House. {t('allRightsReserved')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
