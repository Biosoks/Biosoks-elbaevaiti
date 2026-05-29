import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Competencies from './components/Competencies';
import InteractiveSystems from './components/InteractiveSystems';
import Projects from './components/Projects';
import RoiCalculator from './components/RoiCalculator';
import QuizEstimate from './components/QuizEstimate';
import Trust from './components/Trust';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { AnimatePresence, motion } from 'motion/react';
import { MessageSquareCode, ShieldCheck, ArrowUp } from 'lucide-react';

export default function App() {
  const [notification, setNotification] = useState<string | null>(null);

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Quick helper to message via Max
  const sendQuickMax = () => {
    const text = 'Здравствуйте, интересует автоматизация котельной. Разработайте, пожалуйста, КП.';
    const phone = '79130268626';
    const deepLink = `max://send?phone=${phone}&text=${encodeURIComponent(text)}`;
    const webLink = `https://max.ru/chat?phone=${phone}&text=${encodeURIComponent(text)}`;
    
    window.open(deepLink, '_blank');
    setTimeout(() => {
      window.open(webLink, '_blank');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-orange/30">
      
      {/* Visual Header */}
      <Header onContactClick={scrollToContact} />

      {/* Main Sections */}
      <main className="relative">
        
        {/* Immersive animated Hero */}
        <Hero />

        {/* Dynamic numerical stats */}
        <Stats />

        {/* Competencies: core engineering/PLC compilation services */}
        <Competencies />

        {/* Pulsing Interactive Boiler Schema & Hotspot configurator */}
        <InteractiveSystems />

        {/* Portfolio of successful implementations & ROIs */}
        <Projects />

        {/* ROI Fuel and operational savings calculator */}
        <RoiCalculator />

        {/* The requested Premium Live Estimation Quiz */}
        <QuizEstimate onShowNotification={triggerNotification} />

        {/* SRO licensing, Oven partnerships and Rostekhnadzor approvals */}
        <Trust />

        {/* Industrial query intake contact form */}
        <ContactForm onShowNotification={triggerNotification} />

      </main>

      {/* Legal & Corporate Footer */}
      <Footer />

      {/* Dynamic Floating Quick-Assist Max Messenger Widget (Bottom Right corner) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end">
        {/* Call to action label for Max */}
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          onClick={sendQuickMax}
          className="flex items-center gap-2 bg-[#0077FF] hover:bg-[#005CE6] text-white py-3 px-4.5 rounded-full shadow-xl hover:shadow-[#0077FF]/25 transition-all text-xs font-bold tracking-wide hover:scale-103 cursor-pointer"
        >
          <MessageSquareCode size={15} className="animate-bounce" />
          <span className="hidden sm:inline">Отправить ТЗ в Max</span>
        </motion.button>

        {/* Return to top pointer */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-brand-blue/90 text-white/80 hover:text-white p-3 rounded-full shadow-md border border-white/5 hover:bg-slate-900 transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      {/* Slide-in Unified Notification Toast alerts */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-8 left-5 right-5 sm:left-auto sm:right-8 bg-slate-900/95 backdrop-blur-md border border-brand-orange/30 text-white p-5 rounded-2xl shadow-2xl z-55 max-w-sm flex items-start gap-4"
          >
            <div className="w-9 h-9 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center flex-shrink-0 border border-brand-orange/20">
              <ShieldCheck size={20} className="animate-spin-slow" />
            </div>
            <div>
              <h5 className="font-heading font-extrabold text-xs text-brand-orange uppercase tracking-wider mb-1">
                Системный сигнал КИПиА
              </h5>
              <p className="text-white/80 text-xs leading-relaxed">
                {notification}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
