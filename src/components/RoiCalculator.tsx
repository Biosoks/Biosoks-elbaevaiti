import React, { useState } from 'react';
import { DollarSign, Percent, TrendingDown, Timer, ChevronRight } from 'lucide-react';

export default function RoiCalculator() {
  const [monthlyBill, setMonthlyBill] = useState<number>(250000); // Default monthly gas bill of 250,000 rubles
  const [powerKw, setPowerKw] = useState<number>(1000); // 1000 kW default boiler power

  const savingsRate = 0.14; // Typical 14% average savings from fully automated weather control & cascade programming
  const estimatedEquipmentCost = 420000; // Estimated cost of a mid-range PLC automation cabinet with commissioning

  const monthlySavings = monthlyBill * savingsRate;
  const yearlySavings = monthlySavings * 12;
  const paybackMonths = Math.round(estimatedEquipmentCost / (monthlySavings || 1));

  return (
    <section id="roi-cal" className="py-20 bg-slate-50 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-brand-orange text-xs uppercase font-extrabold tracking-widest bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/15">
              Инвестиционный Аудит
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-blue mt-3 mb-4 leading-tight">
              Калькулятор окупаемости КИПиА автоматизации
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
              Автоматизация — это не просто расходы, а инвестиции с четким возвратом. Перемещайте ползунки ниже, чтобы оценить реальный финансовый эффект в первый же отопительный сезон.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <div className="inline-block bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-2xl p-4 text-left">
              <span className="text-xs uppercase font-bold tracking-wider font-mono block text-brand-orange/80">Оценка окупаемости КИПиА</span>
              <span className="text-2xl font-heading font-extrabold">составляет от 6 до 12 месяцев</span>
            </div>
          </div>
        </div>

        {/* Dynamic Calculator Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Sliders Area (Col Span 6) */}
          <div className="lg:col-span-6 bg-white border border-slate-200/60 shadow-sm p-6 md:p-8 rounded-3xl flex flex-col justify-center space-y-8">
            
            {/* Monthly Bill Input */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-bold text-slate-800">Ежемесячный счет за газ/топливо:</label>
                <span className="text-lg font-heading font-extrabold text-brand-orange">
                  {new Intl.NumberFormat('ru-RU').format(monthlyBill)} <span className="text-xs text-slate-500 font-sans">руб.</span>
                </span>
              </div>
              <input 
                type="range"
                min="50000"
                max="2000000"
                step="25000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-brand-orange cursor-col-resize h-1.5 bg-slate-100 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-2">
                <span>50 тыс. ₽</span>
                <span>500 тыс. ₽</span>
                <span>1 млн. ₽</span>
                <span>2 млн. ₽</span>
              </div>
            </div>

            {/* Boiler Power Input */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-bold text-slate-800">Общая тепловая мощность:</label>
                <span className="text-lg font-heading font-extrabold text-brand-blue">
                  {new Intl.NumberFormat('ru-RU').format(powerKw)} <span className="text-xs text-slate-500 font-sans">кВт / квт⋅ч</span>
                </span>
              </div>
              <input 
                type="range"
                min="200"
                max="15000"
                step="100"
                value={powerKw}
                onChange={(e) => setPowerKw(Number(e.target.value))}
                className="w-full accent-brand-blue cursor-col-resize h-1.5 bg-slate-100 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-2">
                <span>200 кВт</span>
                <span>3.5 МВт</span>
                <span>7.5 МВт</span>
                <span>15 МВт</span>
              </div>
            </div>

            {/* Disclaimer text */}
            <p className="text-[11px] text-slate-500 leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-slate-100">
              * Расчёт является усреднённым для климатической зоны Сибири и Урала при стоимости газа на 2026 год. Реальный показатель экономии зависит от степени износа тепломеханических узлов котла и теплоизоляции сети.
            </p>

          </div>

          {/* Results Area (Col Span 6) */}
          <div className="lg:col-span-6 bg-brand-blue text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 blur-3xl rounded-full"></div>
            
            <div>
              <div className="flex items-center gap-2 text-brand-orange mb-6 bg-white/5 border border-white/5 rounded-full px-3.5 py-1 w-fit">
                <Percent size={14} />
                <span className="text-xs uppercase tracking-wider font-mono font-extrabold">Коэффициент полезного эффекта</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                
                {/* Stat 1: Monthly Savings */}
                <div>
                  <span className="text-xs text-slate-350 uppercase tracking-widest font-mono block mb-1">Экономия в месяц:</span>
                  <span className="text-2xl md:text-3xl font-heading font-extrabold text-brand-orange">
                    {new Intl.NumberFormat('ru-RU').format(Math.round(monthlySavings))} <span className="text-xs font-sans text-white/50">₽</span>
                  </span>
                </div>

                {/* Stat 2: Annual Savings */}
                <div>
                  <span className="text-xs text-slate-350 uppercase tracking-widest font-mono block mb-1">Сбережения за год:</span>
                  <span className="text-2xl md:text-3xl font-heading font-extrabold text-[#10B981]">
                    {new Intl.NumberFormat('ru-RU').format(Math.round(yearlySavings))} <span className="text-xs font-sans text-white/50">₽</span>
                  </span>
                </div>

              </div>

              {/* Payback message banner */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 flex items-start gap-4">
                <div className="text-brand-orange text-2xl mt-0.5"><Timer size={24} /></div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Срок возврата инвестиции</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Данный уровень автоматизации окупает полную стоимость разработки проекта КИПиА и шкафа сборки за <span className="text-brand-orange font-bold text-sm font-mono">{paybackMonths} месяцев</span>, далее система приносит чистую экономию!
                  </p>
                </div>
              </div>
            </div>

            {/* Quick button */}
            <a 
              href="#quiz-section" 
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-4 rounded-xl text-center font-bold tracking-wide transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <span>Подать заявку на готовое КП</span>
              <ChevronRight size={16} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
