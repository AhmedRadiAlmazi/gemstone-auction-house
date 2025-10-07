
import React from 'react';
import Section from '../Section';
import { useLocalization } from '../../contexts/LocalizationContext';
import Accordion from './Accordion';

const Support: React.FC = () => {
    const { t } = useLocalization();

    const faqs = [
        { titleKey: 'faq1Title', contentKey: 'faq1Answer' },
        { titleKey: 'faq2Title', contentKey: 'faq2Answer' },
        { titleKey: 'faq3Title', contentKey: 'faq3Answer' },
    ] as const;

    const ContactForm = () => (
        <div className="bg-white dark:bg-brand-charcoal-light rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">{t('contactFormTitle')}</h3>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('formName')}</label>
                    <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-brand-charcoal border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('formEmail')}</label>
                    <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-brand-charcoal border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                </div>
                 <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('formSubject')}</label>
                    <input type="text" id="subject" className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-brand-charcoal border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('formMessage')}</label>
                    <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-brand-charcoal border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold"></textarea>
                </div>
                <div>
                     <button type="submit" className="w-full bg-brand-gold text-brand-charcoal-dark font-bold py-3 px-4 rounded-lg hover:bg-brand-gold-light transition-colors duration-300 shadow-md">
                        {t('formSubmit')}
                    </button>
                </div>
            </form>
        </div>
    );
    
    return (
        <div className="bg-gray-50 dark:bg-brand-charcoal">
            <Section titleKey="supportPageTitle">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="lg:pr-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center lg:text-left">{t('faqTitle')}</h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <Accordion key={index} title={t(faq.titleKey)}>
                                    <p className="text-gray-600 dark:text-gray-400">{t(faq.contentKey)}</p>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Support;