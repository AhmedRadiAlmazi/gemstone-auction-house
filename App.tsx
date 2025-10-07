
import React, { useState } from 'react';
import { LocalizationProvider } from './contexts/LocalizationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Auctions from './components/pages/Auctions';
import Sellers from './components/pages/Sellers';
import Support from './components/pages/Support';
import Profile from './components/pages/Profile';
import type { Page } from './types';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'store':
                return <Store />;
            case 'auctions':
                return <Auctions />;
            case 'sellers':
                return <Sellers />;
            case 'support':
                return <Support />;
            case 'profile':
                return <Profile />;
            default:
                return <Home />;
        }
    };

    return (
        <LocalizationProvider>
            <ThemeProvider>
                <div className="font-poppins flex flex-col min-h-screen bg-white dark:bg-brand-charcoal-dark transition-colors duration-500">
                   <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
                   <main className="flex-grow pt-20">
                       {renderPage()}
                   </main>
                   <Footer />
                </div>
            </ThemeProvider>
        </LocalizationProvider>
    );
};

export default App;