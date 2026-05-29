import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, HelpCircle, FileCheck2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-gradient-to-br from-brand-blue via-[#112D55] to-brand-blue pt-28 pb-16 overflow-hidden text-white">
      {/* Decorative background grids */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-[5%] w-[250px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 rounded-full px-4 py-1.5 text-xs text-brand-orange font-semibold uppercase tracking-wider mb-6 w-fit"
          >
            <ShieldCheck size={14} className="animate-pulse" />
            <span>Официальный Сертификат & Допуски СРО</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.12] mb-6"
          >
            Автоматизация котельных <br />
            <span className="text-brand-orange inline-block">
              под ключ
            </span> <br className="hidden sm:inline" />
            от проекта до диспетчеризации
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mb-10"
          >
            ООО «Елбаев Айти» проектирует автоматизированные системы управления технологическими процессами (АСУ ТП), собирает шкафы КИПиА и программирует ПЛК. Мы снизим Ваши расходы на отопление и топливо <span className="text-brand-orange font-bold">до 15%</span> с гарантией сдачи Ростехнадзору.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <a 
              href="#quiz-section" 
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-xl text-center shadow-lg shadow-brand-orange/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Рассчитать смету проекта</span>
              <span className="text-xs px-2 py-0.5 bg-white/20 rounded-md font-medium">Бесплатно</span>
            </a>
            
            <a 
              href="#contact-form" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-center border border-white/25 transition-all text-sm flex items-center justify-center gap-2"
            >
              <span>Подать заявку на ТЗ</span>
            </a>
          </motion.div>

          {/* Core USP items in Hero */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-10 border-t border-white/10 mt-12"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded bg-brand-orange/20 flex items-center justify-center text-brand-orange mt-0.5">
                <FileCheck2 size={13} />
              </div>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">Проектирование</h4>
                <p className="text-xs text-white/60">Разделы АТМ, АТХ, ЭМ за 14 дней</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded bg-brand-orange/20 flex items-center justify-center text-brand-orange mt-0.5">
                <TrendingUp size={13} />
              </div>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">Бережливость</h4>
                <p className="text-xs text-white/60">Каскадный контроль ОВЕН/ПЛК</p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1 flex items-start gap-2.5">
              <div className="w-5 h-5 rounded bg-brand-orange/20 flex items-center justify-center text-brand-orange mt-0.5">
                <HelpCircle size={13} />
              </div>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">Диспетчеризация</h4>
                <p className="text-xs text-white/60">SCADA-системы и облачный контроль</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Right Media */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-full max-w-[480px]">
            {/* Glowing borders */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-amber-500 rounded-2xl blur-md opacity-30 select-none animate-pulse"></div>
            
            {/* Real boiler image mockup */}
            <div className="relative bg-[#0d2242] p-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80" 
                alt="Промышленный контроллер управления котлами КИПиА" 
                className="rounded-xl w-full h-[320px] sm:h-[400px] object-cover hover:scale-[1.01] transition-transform duration-500"
              />
              
              {/* Badge elements */}
              <div className="absolute bottom-5 left-5 right-5 bg-brand-blue/90 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold text-brand-orange tracking-wider">Текущий проект</p>
                  <p className="text-sm font-heading font-bold text-white leading-tight">Блочно-модульная автоматизация</p>
                </div>
                <div className="bg-brand-orange/15 px-2.5 py-1 rounded text-brand-orange text-xs font-bold border border-brand-orange/20">
                  ПЛК210
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
