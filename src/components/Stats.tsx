import React, { useEffect, useState } from 'react';
import { Award, Briefcase, Users, Gauge } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

function StatItem({ icon, value, suffix, label, sublabel }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (end === 0) return;
    const totalDuration = 1500; // ms
    const incrementTime = Math.max(Math.floor(totalDuration / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="relative bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 rounded-xl bg-brand-orange/5 text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange/10 transition-colors">
        {icon}
      </div>
      
      <div className="text-3xl md:text-4xl font-heading font-extrabold text-brand-blue mb-1 flex items-baseline">
        <span className="tabular-nums">{count}</span>
        <span className="text-brand-orange ml-0.5">{suffix}</span>
      </div>

      <div className="text-sm font-semibold text-slate-800 mb-1 leading-tight">{label}</div>
      <div className="text-xs text-slate-500 leading-normal">{sublabel}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 relative z-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          <StatItem 
            icon={<Award size={24} />} 
            value={15} 
            suffix="лет" 
            label="Опыт в инженерии" 
            sublabel="Работаем на промышленных объектах с 2011 года" 
          />

          <StatItem 
            icon={<Briefcase size={24} />} 
            value={200} 
            suffix="+" 
            label="Сданных объектов" 
            sublabel="Котельные, ИТП, ЦТП и заводы на Урале и Сибири" 
          />

          <StatItem 
            icon={<Users size={24} />} 
            value={12} 
            suffix="" 
            label="Инженеров КИПиА" 
            sublabel="Дипломированные специалисты, аттестованные в Ростехнадзоре" 
          />

          <StatItem 
            icon={<Gauge size={24} />} 
            value={15} 
            suffix="%" 
            label="Экономия газа" 
            sublabel="За счет погодозависимой автоматики и балансировки" 
          />

        </div>
      </div>
    </section>
  );
}
