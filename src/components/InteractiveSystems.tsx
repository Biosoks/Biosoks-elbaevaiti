import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BOILER_COMPONENTS } from '../data';
import { BoilerComponent } from '../types';
import { Info, Gauge, ShieldAlert, Wifi, Cpu, Settings } from 'lucide-react';

export default function InteractiveSystems() {
  const [selectedComp, setSelectedComp] = useState<BoilerComponent>(BOILER_COMPONENTS[0]);

  // Helper to match icons
  const getIcon = (id: string) => {
    switch (id) {
      case 'plc': return <Cpu className="w-5 h-5" />;
      case 'cascade': return <Settings className="w-5 h-5" />;
      case 'weather': return <Gauge className="w-5 h-5" />;
      case 'safety': return <ShieldAlert className="w-5 h-5" />;
      case 'vfd': return <Settings className="w-5 h-5" />;
      case 'scada': return <Wifi className="w-5 h-5" />;
      default: return <Info className="w-5 h-5" />;
    }
  };

  return (
    <section id="interactive-schema" className="py-20 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-[#07142A] opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-orange text-xs uppercase font-extrabold tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
            Анатомия современной автоматики
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mt-4 mb-5 text-white">
            Где рождается энергоэффективность котельной?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Посмотрите изнутри, какие контроллеры, распределители и датчики мы устанавливаем. Кликните по пульсирующим точкам для детального описания КИПиА узла.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Schematic Diagram (Col Span 7) */}
          <div className="lg:col-span-7 bg-slate-950/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[350px] md:min-h-[460px]">
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
              <span className="text-xs text-slate-400 font-mono">РЕЖИМ: СХЕМА АВТОМАТИЗАЦИИ СЕТИ</span>
            </div>

            {/* Vector style boiler diagram representation */}
            <div className="w-full h-full relative flex items-center justify-center py-10 my-auto">
              
              {/* Central pipe flow SVG design backcloth */}
              <svg className="absolute w-[80%] h-[70%] text-slate-800/40 select-none pointer-events-none" viewBox="0 0 400 200" fill="none">
                {/* Boilers */}
                <rect x="30" y="50" width="80" height="90" rx="8" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="150" y="50" width="80" height="90" rx="8" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Piping logic */}
                <path d="M 110 95 L 340 95" stroke="currentColor" strokeWidth="4" />
                <path d="M 230 95 L 230 140 H 340" stroke="currentColor" strokeWidth="4" />
                <path d="M 310 95 V 50 H 350" stroke="currentColor" strokeWidth="2" />
                {/* Labels */}
                <text x="70" y="95" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="monospace">Котёл 1</text>
                <text x="190" y="95" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="monospace">Котёл 2</text>
                
                <circle cx="340" cy="95" r="5" fill="#f97316" />
                <path d="M 340 95 L 360 80" stroke="#f97316" strokeWidth="1" />
              </svg>

              {/* Pulsing Hotspot Overlay mapping absolute x,y percentages */}
              {BOILER_COMPONENTS.map((comp) => {
                const isActive = selectedComp.id === comp.id;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComp(comp)}
                    style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20 group"
                  >
                    {/* Ring animation */}
                    <span className={`absolute inline-flex h-8 w-8 rounded-full opacity-75 animate-ping -left-1 -top-1 ${
                      isActive ? 'bg-brand-orange' : 'bg-brand-orange/40'
                    }`}></span>
                    
                    {/* Circle Pin button */}
                    <div className={`relative flex items-center justify-center w-6 h-6 rounded-full border-2 transition-transform duration-300 ${
                      isActive 
                        ? 'bg-brand-orange text-white border-white scale-125 shadow-lg shadow-brand-orange/50' 
                        : 'bg-slate-900 text-brand-orange border-brand-orange hover:scale-110'
                    }`}>
                      <span className="text-xs font-bold font-mono">
                        {BOILER_COMPONENTS.indexOf(comp) + 1}
                      </span>
                    </div>

                    {/* Tooltip on hovering pin (desktop) */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-slate-950 border border-slate-800 text-xs font-semibold py-1.5 px-3 rounded shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                      {comp.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Numerical indicators key map */}
            <div className="flex flex-wrap justify-center gap-4 border-t border-slate-800/80 pt-4 mt-auto">
              {BOILER_COMPONENTS.map((comp, idx) => (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComp(comp)}
                  className={`text-[11px] font-mono font-medium rounded-md px-2.5 py-1 transition-colors border ${
                    selectedComp.id === comp.id 
                      ? 'bg-brand-orange/10 border-brand-orange/40 text-brand-orange' 
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  [{idx + 1}] {comp.name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Description panel (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedComp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-950/40 border border-slate-800 p-8 rounded-3xl h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center">
                      {getIcon(selectedComp.id)}
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-brand-orange">
                        Узел #{BOILER_COMPONENTS.indexOf(selectedComp) + 1} автоматизации
                      </span>
                      <h3 className="text-xl font-heading font-extrabold text-white mt-0.5 leading-tight">
                        {selectedComp.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-200 text-sm font-medium mb-4 uppercase tracking-wider font-mono">
                    [{selectedComp.shortDesc}]
                  </p>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {selectedComp.fullDesc}
                  </p>
                </div>

                {selectedComp.savingsPercent > 0 ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 mt-4 flex items-center gap-4">
                    <div className="text-3xl font-heading font-black text-emerald-400">
                      +{selectedComp.savingsPercent}%
                    </div>
                    <div className="text-xs text-slate-300 leading-snug">
                      <span className="font-bold text-white block">Ожидаемая экономия затрат</span>
                      Реальное снижение расхода газа/сырья на основании запущенных объектов КИПиА
                    </div>
                  </div>
                ) : (
                  <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-2xl p-4 mt-4 flex items-center gap-4">
                    <div className="text-3xl font-heading font-black text-brand-orange">
                      100%
                    </div>
                    <div className="text-xs text-slate-300 leading-snug">
                      <span className="font-bold text-white block">Показатель безопасности</span>
                      Соответствие требованиям Ростехнадзора и СП 89.13330 (Котельные установки)
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
