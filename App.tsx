
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Faq } from './components/Faq';
import { Testimonials } from './components/Testimonials';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';
import { DiscountPopup } from './components/DiscountPopup';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Chatbot } from './components/Chatbot';
import AnalyticsService from './services/analytics';
import Snowfall from './components/Snowfall';

const App: React.FC = () => {
    const [isDiscountPopupOpen, setDiscountPopupOpen] = useState(false);

    useEffect(() => {
        AnalyticsService.trackPageView(window.location.pathname);

        const hasSeenPopup = localStorage.getItem('hasSeenDiscountPopup');
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setDiscountPopupOpen(true);
                localStorage.setItem('hasSeenDiscountPopup', 'true');
            }, 3000); // Show popup after 3 seconds
            return () => clearTimeout(timer);
        }
    }, []);
    
    return (
        <div className="bg-gradient-to-b from-slate-950 to-slate-900">
            <Snowfall />
            <Header />
            <main>
                <Hero />
                <Problem />
                <HowItWorks />
                <Benefits />
                <Faq />
                <Testimonials />
                <Cta />
            </main>
            <Footer />
            <DiscountPopup isOpen={isDiscountPopupOpen} onClose={() => setDiscountPopupOpen(false)} />
            <FloatingWhatsApp />
            <Chatbot />
        </div>
    );
};

export default App;