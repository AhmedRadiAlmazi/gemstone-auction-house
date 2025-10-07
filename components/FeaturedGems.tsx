
import React from 'react';
import Section from './Section';
import GemCard from './GemCard';
import { featuredGemsData } from '../constants/data';

const FeaturedGems: React.FC = () => {
    return (
        <Section titleKey="featuredGems" className="bg-gray-50 dark:bg-brand-charcoal">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredGemsData.map((gem, index) => (
                    <div key={gem.id} style={{ transitionDelay: `${index * 100}ms` }}>
                        <GemCard gem={gem} />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default FeaturedGems;
