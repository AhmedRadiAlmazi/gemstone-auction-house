
import React from 'react';
import Section from '../Section';
import { sellersData } from '../../constants/data';
import SellerCard from './SellerCard';

const Sellers: React.FC = () => {
    return (
        <div className="bg-white dark:bg-brand-charcoal-dark">
            <Section titleKey="sellersPageTitle">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sellersData.map((seller, index) => (
                        <div key={seller.id} style={{ transitionDelay: `${index * 100}ms` }}>
                            <SellerCard seller={seller} />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Sellers;