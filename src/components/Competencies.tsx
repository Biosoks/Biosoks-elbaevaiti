import React, { useState } from 'react';
import { SERVICES } from '../data';
import { ChevronDown, ChevronUp, FileText, Cpu, PackageCheck } from 'lucide-react';

export default function Competencies() {
  const [activeCardId, setActiveCardId] = useState<string | null>('sec-1');

  const toggleCard = (id: string) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'sec-1': return <FileText className="w-5 h-5" />;
      case 'sec-2': return <PackageCheck className="w-5 h-5 text-brand-orange" />;
      case 'sec-3': return <Cpu className="w-5 h-5 text-blue-500" />;
      default: return null;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-orange text-xs uppercase font-extrabold tracking-widest bg-brand-orange/5 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
            Наш Профиль
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mt-4 mb-4 text-brand-blue">
            Компетенции ООО «Елбаев Айти»
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Мы берем на себя полную цепочку создания автоматики КИПиА: от предпроектного обследования до сдачи надзорным инспекциям Ростехнадзора.
          </p>
        </div>

        {/* Competencies grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {SERVICES.map((sec) => {
            const isActive = activeCardId === sec.id;
            return (
              <div 
                key={sec.id}
                onClick={() => toggleCard(sec.id)}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer shadow-sm select-none ${
                  isActive 
                    ? 'border-brand-orange ring-1 ring-brand-orange/25 shadow-lg transform -translate-y-2' 
                    : 'border-slate-200/60 hover:border-slate-300 hover:-translate-y-1'
                }`}
              >
                {/* Visual Cover */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                  <img src={sec.img} alt={sec.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  
                  {/* Floating ID badge */}
                  <div className="absolute top-4 left-4 bg-brand-blue/90 backdrop-blur-md text-white z-20 rounded-xl px-3.5 py-1.5 text-xs font-mono font-bold border border-white/10 flex items-center gap-2">
                    {getCardIcon(sec.id)}
                    <span>РАЗДЕЛ {sec.id.slice(-1)}</span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg md:text-xl font-heading font-extrabold text-brand-blue leading-snug">
                      {sec.title}
                    </h3>
                    <div className="p-1 rounded-full bg-slate-100/80 text-slate-500 mt-1">
                      {isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                    {sec.shortDesc}
                  </p>

                  {/* Expandable sub-details (React Toggle State) */}
                  {isActive && (
                    <div className="mt-6 pt-6 border-t border-slate-100 animate-fadeIn space-y-4">
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        {sec.fullDesc}
                      </p>

                      <div className="space-y-2">
                        <div className="text-[10px] uppercase font-mono font-extrabold text-slate-400 tracking-wider">Что выполняем:</div>
                        <ul className="space-y-2">
                          {sec.bulletPoints.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 flex-shrink-0"></span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
