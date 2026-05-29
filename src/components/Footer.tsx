import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#061224] text-white/60 py-12 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Branding & Legal */}
        <div className="md:col-span-6 flex flex-col gap-2">
          <div className="text-white font-heading font-extrabold text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-brand-orange"></span>
            ООО «Елбаев Айти»
          </div>
          <p className="text-xs text-white/40 max-w-md leading-relaxed">
            Проектирование и интеграция АСУ ТП, сборка шкафов управления КИПиА и автоматика безопасности промышленных и бытовых котельных.
          </p>
          <div className="text-[11px] text-white/30 font-mono mt-2 space-y-1">
            <div>ОГРН: 1242200013615</div>
            <div>ИНН/КПП: 2250005037 / 225001001</div>
          </div>
        </div>

        {/* Sitemap shortlinks */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Карта сайта</span>
          <nav className="flex flex-col gap-1.5 text-xs">
            <a href="#services" className="hover:text-brand-orange transition-colors">Наши услуги</a>
            <a href="#interactive-schema" className="hover:text-brand-orange transition-colors">Как устроена автоматика</a>
            <a href="#projects" className="hover:text-brand-orange transition-colors">Кейсы внедрения</a>
            <a href="#roi-cal" className="hover:text-brand-orange transition-colors">Калькулятор окупаемости</a>
            <a href="#quiz-section" className="hover:text-brand-orange text-brand-orange font-semibold transition-colors">Калькулятор сметы</a>
          </nav>
        </div>

        {/* Contacts column */}
        <div className="md:col-span-3 flex flex-col gap-2 md:text-right">
          <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Контакты</span>
          <div className="text-white font-bold block text-sm mt-1">
            <a href="tel:+79130268626" className="hover:text-brand-orange">+7 (913) 026-86-26 d.y.</a>
          </div>
          <p className="text-xs text-white/40 leading-relaxed">
            Россия, Новосибирск / Барнаул.<br />
            Выезд инженеров по всей РФ.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row justify-between text-xs text-white/30 font-mono">
        <div>© {new Date().getFullYear()} ООО «Елбаев Айти». Все права защищены КИПиА.</div>
        <div className="mt-2 sm:mt-0">Сделано с уважением к промышленным стандартам.</div>
      </div>
    </footer>
  );
}
