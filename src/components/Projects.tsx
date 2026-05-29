import React from 'react';
import { PROJECTS } from '../data';
import { Settings, Zap } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-orange text-xs uppercase font-extrabold tracking-widest bg-brand-orange/5 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
            Опыт в деталях
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mt-4 mb-4 text-brand-blue">
            Наши Реализованные Объекты
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Реальные показатели экономии и безаварийности от запуска до сдачи. Каждый объект детально проанализирован.
          </p>
        </div>

        {/* Projects Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((prj) => (
            <div 
              key={prj.id} 
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10"></div>
                  <img src={prj.image} alt={prj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Floating badge for Payback */}
                  <div className="absolute top-4 right-4 bg-[#10B981] text-white z-20 rounded-md px-3 py-1 text-[11px] font-extrabold shadow-sm flex items-center gap-1">
                    <Zap size={12} />
                    <span>ОКУПАЕМОСТЬ: {prj.payback}</span>
                  </div>

                  {/* Power Rating Bottom Badge */}
                  <div className="absolute bottom-4 left-4 z-20 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange block">Тепловая мощность:</span>
                    <span className="text-sm font-heading font-extrabold">{prj.power}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 md:p-8">
                  {/* Savings Bullet Banner */}
                  <div className="inline-block bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-1.5 text-xs text-emerald-700 font-bold mb-4">
                    📈 {prj.savings}
                  </div>

                  <h3 className="text-base md:text-lg font-heading font-extrabold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors leading-snug">
                    {prj.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                    {prj.description}
                  </p>
                </div>
              </div>

              {/* Card Footer detail */}
              <div className="px-6 md:px-8 pb-8 pt-4 border-t border-slate-50/80 bg-slate-50/50 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 block font-mono">Контроллерный узел</span>
                  <span className="text-xs font-bold text-slate-700">{prj.controllers}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-orange/5 text-brand-orange flex items-center justify-center">
                  <Settings size={14} className="group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
