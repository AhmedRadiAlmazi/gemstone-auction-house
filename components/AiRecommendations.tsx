
import React from 'react';
import Section from './Section';
import GemCard from './GemCard';
import { featuredGemsData } from '../constants/data';

const AiRecommendations: React.FC = () => {
    // For demonstration, we'll reuse and shuffle the featured gems data.
    const recommendations = [...featuredGemsData].sort(() => 0.5 - Math.random()).slice(0, 4);

    return (
        <Section titleKey="aiRecommendations" className="bg-gray-50 dark:bg-brand-charcoal">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {recommendations.map((gem, index) => (
                    <div key={gem.id} style={{ transitionDelay: `${index * 100}ms` }}>
                        <GemCard gem={gem} />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default AiRecommendations;
