
import React from 'react';
import Section from '../Section';
import GemCard from '../GemCard';
import { featuredGemsData } from '../../constants/data';
import { useLocalization } from '../../contexts/LocalizationContext';

const Store: React.FC = () => {
    const { t } = useLocalization();
    const allGems = [...featuredGemsData, ...featuredGemsData.map(g => ({...g, id: g.id + 10}))].sort(() => 0.5 - Math.random());

    const FilterSidebar = () => (
        <aside className="w-full lg:w-1/4 xl:w-1/5 p-6 bg-gray-50 dark:bg-brand-charcoal rounded-lg shadow-md lg:sticky top-28 self-start">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{t('filterByType')}</h3>
            {/* Placeholder filters */}
            <div className="space-y-3">
                {['Sapphire', 'Diamond', 'Ruby', 'Opal', 'Citrine', 'Amethyst'].map(type => (
                    <label key={type} className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-gold focus:ring-brand-gold" />
                        <span className="ltr:ml-2 rtl:mr-2 text-gray-600 dark:text-gray-300">{type}</span>
                    </label>
                ))}
            </div>
            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{t('filterByPrice')}</h3>
                <input type="range" min="0" max="50000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            </div>
             <div className="mt-6 flex space-x-2 rtl:space-x-reverse">
                <button className="w-full bg-brand-gold text-brand-charcoal-dark font-bold py-2 px-4 rounded-lg hover:bg-brand-gold-light transition-colors duration-300">{t('applyFilters')}</button>
                <button className="w-full bg-gray-200 dark:bg-brand-charcoal-light text-gray-700 dark:text-gray-200 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-brand-charcoal transition-colors duration-300">{t('reset')}</button>
            </div>
        </aside>
    );

    return (
        <div className="bg-white dark:bg-brand-charcoal-dark">
            <Section titleKey="storePageTitle">
                <div className="flex flex-col lg:flex-row gap-8">
                    <FilterSidebar />
                    <div className="w-full lg:w-3/4 xl:w-4/5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {allGems.map((gem, index) => (
                                <div key={gem.id} style={{ transitionDelay: `${index * 50}ms` }}>
                                    <GemCard gem={gem} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Store;