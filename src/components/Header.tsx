import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageSquareQuote } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sendToMax = (text: string) => {
    const phone = '79130268626';
    const webLink = `https://max.ru/chat?phone=${phone}&text=${encodeURIComponent(text)}`;
    const deepLink = `max://send?phone=${phone}&text=${encodeURIComponent(text)}`;
    
    try {
      const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = deepLink;
        setTimeout(() => {
          window.location.href = webLink;
        }, 1500);
      } else {
        window.open(webLink, '_blank');
      }
    } catch (e) {
      window.location.href = webLink;
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-brand-blue/95 backdrop-blur-md z-50 py-4 shadow-lg border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 select-none text-white font-heading font-extrabold text-xl md:text-2xl tracking-tight">
          <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center text-white shadow-md shadow-brand-orange/20 animate-pulse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span>Елбаев Айти</span>
            <span className="text-[10px] uppercase tracking-widest font-sans font-medium text-white/55">Автоматизация котельных</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#services" className="text-white/85 hover:text-white font-medium text-sm transition-colors border-b-2 border-transparent hover:border-brand-orange py-1">
            Компетенции
          </a>
          <a href="#interactive-schema" className="text-white/85 hover:text-white font-medium text-sm transition-colors border-b-2 border-transparent hover:border-brand-orange py-1">
            Схема котельной
          </a>
          <a href="#projects" className="text-white/85 hover:text-white font-medium text-sm transition-colors border-b-2 border-transparent hover:border-brand-orange py-1">
            Реализованные объекты
          </a>
          <a href="#roi-cal" className="text-white/85 hover:text-white font-medium text-sm transition-colors border-b-2 border-transparent hover:border-brand-orange py-1">
            Калькулятор окупаемости
          </a>
          <a href="#quiz-section" className="text-white/85 hover:text-white font-medium text-sm transition-colors border-b-2 border-transparent hover:border-brand-orange py-1">
            Расчет стоимости
          </a>
        </nav>

        {/* Right side Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={() => sendToMax('Здравствуйте, хотел бы проконсультироваться по автоматизации КИПиА котельной.')}
            className="flex items-center gap-2 bg-[#0077FF] hover:bg-[#005CE6] text-white py-2 px-4 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md hover:scale-103"
          >
            <MessageSquareQuote size={15} />
            <span>Написать в Max</span>
          </button>
          
          <div className="flex flex-col text-right">
            <span className="text-xs text-white/50">Горячая линия</span>
            <a href="tel:+79130268626" className="text-sm font-bold text-white hover:text-brand-orange transition-colors">
              +7 (913) 026-86-26
            </a>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button className="lg:hidden text-white bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {isOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-brand-blue/98 z-45 animate-fadeIn flex flex-col justify-between p-6">
          <div className="flex flex-col gap-6 text-center mt-8">
            <a href="#services" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold tracking-wide border-b border-white/5 pb-3">
              Наши Компетенции
            </a>
            <a href="#interactive-schema" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold tracking-wide border-b border-white/5 pb-3">
              Как устроена автоматика
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold tracking-wide border-b border-white/5 pb-3">
              Успешные кейсы
            </a>
            <a href="#roi-cal" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold tracking-wide border-b border-white/5 pb-3">
              Окупаемость
            </a>
            <a href="#quiz-section" onClick={() => setIsOpen(false)} className="text-white text-lg font-semibold tracking-wide border-b border-white/5 pb-3 text-brand-orange">
              💵 Рассчитать смету за 3 вопроса
            </a>
          </div>

          <div className="flex flex-col gap-4 text-center pb-12">
            <button
              onClick={() => {
                setIsOpen(false);
                sendToMax('Здравствуйте! Мне нужна консультация инженера КИПиА.');
              }}
              className="bg-[#0077FF] hover:bg-[#005CE6] text-white py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md w-full"
            >
              <MessageSquareQuote size={18} />
              <span>Консультация в Max</span>
            </button>
            <div className="text-white/60 text-sm">
              Для заявок и ТЗ: <a href="tel:+79130268626" className="text-white font-bold block text-lg mt-1">+7 (913) 026-86-26 working hour</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
