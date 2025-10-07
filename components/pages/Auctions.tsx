
import React, { useState } from 'react';
import Section from '../Section';
import AuctionCard from '../AuctionCard';
import { liveAuctionsData } from '../../constants/data';
import { useLocalization } from '../../contexts/LocalizationContext';

type AuctionTab = 'all' | 'endingSoon' | 'new';

const Auctions: React.FC = () => {
    const { t } = useLocalization();
    const [activeTab, setActiveTab] = useState<AuctionTab>('all');

    const tabs: { id: AuctionTab, key: 'tabAll' | 'tabEndingSoon' | 'tabNew' }[] = [
        { id: 'all', key: 'tabAll' },
        { id: 'endingSoon', key: 'tabEndingSoon' },
        { id: 'new', key: 'tabNew' },
    ];

    const getFilteredAuctions = () => {
        const now = new Date().getTime();
        switch (activeTab) {
            case 'endingSoon':
                return [...liveAuctionsData].sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime());
            case 'new':
                 return [...liveAuctionsData].sort((a, b) => b.id - a.id);
            case 'all':
            default:
                return liveAuctionsData;
        }
    };

    const filteredAuctions = getFilteredAuctions();

    return (
        <div className="bg-gray-50 dark:bg-brand-charcoal">
            <Section titleKey="auctionsPageTitle">
                <div className="mb-12 flex justify-center border-b border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-4 sm:space-x-8 rtl:space-x-reverse -mb-px">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    py-4 px-1 sm:px-4 font-semibold text-sm sm:text-base border-b-2 transition-colors duration-300
                                    ${activeTab === tab.id
                                        ? 'border-brand-gold text-brand-gold'
                                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-brand-gold-light'
                                    }
                                `}
                            >
                                {t(tab.key)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    {filteredAuctions.map((auction, index) => (
                        <div key={auction.id} style={{ transitionDelay: `${index * 100}ms` }}>
                            <AuctionCard auction={auction} />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Auctions;