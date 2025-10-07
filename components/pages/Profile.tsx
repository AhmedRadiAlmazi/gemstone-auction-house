
import React from 'react';
import Section from '../Section';
import { UserCircleIcon } from '../Icons';

const Profile: React.FC = () => {
    return (
        <div className="bg-gray-50 dark:bg-brand-charcoal">
            <Section titleKey="profilePageTitle">
                <div className="max-w-4xl mx-auto bg-white dark:bg-brand-charcoal-light rounded-lg shadow-lg p-8 text-center">
                    <UserCircleIcon className="w-24 h-24 mx-auto text-brand-gold mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome Back, User!</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        This is your personal dashboard. Sections for your orders, bids, notifications, and settings will be available here soon.
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default Profile;