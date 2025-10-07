
import React from 'react';
import Section from './Section';
import AuctionCard from './AuctionCard';
import { liveAuctionsData } from '../constants/data';

const LiveAuctions: React.FC = () => {
    return (
        <Section titleKey="liveAuctions" className="bg-white dark:bg-brand-charcoal-dark">
            <div className="space-y-8">
                {liveAuctionsData.map((auction, index) => (
                    <div key={auction.id} style={{ transitionDelay: `${index * 150}ms` }}>
                        <AuctionCard auction={auction} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LiveAuctions;
