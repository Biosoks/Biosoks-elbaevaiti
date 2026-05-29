import React from 'react';
import { ShieldAlert, Award, Landmark, CheckCircle } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-orange text-xs uppercase font-extrabold tracking-widest bg-brand-orange/5 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
            Безопасность и Лицензии
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mt-4 mb-4 text-brand-blue">
            Работаем Официально в Белом Поле
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Автоматизация промышленного теплового оборудования строго регламентируется законом РФ. Мы обладаем всеми допусками.
          </p>
        </div>

        {/* Highlight row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 hover:shadow-md transition-shadow relative">
            <div className="text-4xl mb-4 text-brand-orange">📜</div>
            <h3 className="text-lg font-heading font-extrabold text-brand-blue mb-3">
              Выписка из реестра СРО
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
              Официально допущены к разработке проектно-сметной документации КИПиА и автоматики безопасности котельных залов (АТМ, АТХ, ЭМ).
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md w-fit">
              <CheckCircle size={12} />
              <span>СТАТУС: ДЕЙСТВУЕТ</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 hover:shadow-md transition-shadow relative">
            <div className="text-4xl mb-4 text-brand-orange">⚙️</div>
            <h3 className="text-lg font-heading font-extrabold text-brand-blue mb-3">
              Официальный интегратор ОВЕН
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
              Являемся сертифицированными партнерами главного отечественного изготовителя программируемых ПЛК контроллеров и частотных инверторов.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md w-fit">
              <CheckCircle size={12} />
              <span>СТАТУС: ПАРТНЕР</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 hover:shadow-md transition-shadow relative">
            <div className="text-4xl mb-4 text-brand-orange">🛡️</div>
            <h3 className="text-lg font-heading font-extrabold text-brand-blue mb-3">
              Аттестация Ростехнадзора
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
              Весь штат инженеров-проектировщиков и специалистов пусконаладки ежегодно проходит переаттестацию по промышленной безопасности А1, Б8.1.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md w-fit">
              <CheckCircle size={12} />
              <span>СТАТУС: СЕРТИФИЦИРОВАНО</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
