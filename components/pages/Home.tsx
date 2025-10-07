
import React from 'react';
import HeroSection from '../HeroSection';
import FeaturedGems from '../FeaturedGems';
import LiveAuctions from '../LiveAuctions';
import TrustSection from '../TrustSection';
import AiRecommendations from '../AiRecommendations';

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FeaturedGems />
            <LiveAuctions />
            <TrustSection />
            <AiRecommendations />
        </>
    );
};

export default Home;