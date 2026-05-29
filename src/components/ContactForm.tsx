import React, { useState } from 'react';
import { Send, PhoneCall, MessagesSquare } from 'lucide-react';

interface ContactFormProps {
  onShowNotification: (msg: string) => void;
}

export default function ContactForm({ onShowNotification }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [method, setMethod] = useState('Max');

  const sendToMax = (text: string) => {
    const defaultPhone = '79130268626';
    const webLink = `https://max.ru/chat?phone=${defaultPhone}&text=${encodeURIComponent(text)}`;
    const deepLink = `max://send?phone=${defaultPhone}&text=${encodeURIComponent(text)}`;
    
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    const fullMessage = `🔧 НОВАЯ ЗАЯВКА С КОНТАКТНОЙ ФОРМЫ (ОБСУДИТЬ ПРОЕКТ)\n\n` +
      `👤 Клиент: ${name || 'Имя не указано'}\n` +
      `📞 Телефон: ${phone}\n` +
      `🛠️ Предпочитаемый канал связи: ${method}\n` +
      `📝 Описание задачи: ${message || 'Отсутствует'}`;

    sendToMax(fullMessage);
    onShowNotification('Ваша заявка сформирована! Инженер свяжется с Вами напрямую.');
    
    // Clear Form inputs
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="contact-form" className="py-20 bg-white relative">
      <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-slate-50 to-white -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Core Layout box */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-xl">
          
          <div className="text-center mb-10">
            <span className="text-brand-orange text-xs uppercase font-extrabold tracking-widest bg-brand-orange/5 px-3 py-1 rounded-full border border-brand-orange/15">
              Быстрая Связь
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-blue mt-3 mb-2">
              Обсудить С Вами Проект Автоматизации?
            </h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              Напишите нам. Мы перезвоним или вышлем готовое предложение в удобный Вам мессенджер в течение 10-15 минут в рабочее время.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                  Ваше имя:
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Например, Александр"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-brand-orange focus:bg-white rounded-xl px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                  Номер телефона:
                </label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-brand-orange focus:bg-white rounded-xl px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                Опишите задачу (объект, мощность, проблемы КИПиА):
              </label>
              <textarea 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Например, у нас 2 котла Rossen RS-A100, часто выключаются горелки, нужен расчет шкафа управления каскадом..."
                className="w-full bg-slate-50 border border-slate-200 focus:border-brand-orange focus:bg-white rounded-xl p-4 text-sm outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Messenger choice selectors */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                Где Вам удобнее получить расчет?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'Max', label: 'Max', icon: <MessagesSquare size={13} className="text-blue-500" /> },
                  { id: 'WhatsApp', label: 'WhatsApp', icon: <MessagesSquare size={13} className="text-emerald-500" /> },
                  { id: 'Звонок', label: 'Звонок', icon: <PhoneCall size={13} className="text-brand-orange" /> }
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setMethod(item.id)}
                    className={`py-3 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 border transition-colors ${
                      method === item.id 
                        ? 'bg-brand-blue text-white border-brand-blue shadow-sm' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-brand-orange hover:bg-brand-orange-hover text-white py-4 px-6 rounded-xl font-bold tracking-wide transition-colors shadow-lg hover:shadow-brand-orange/15 flex items-center justify-center gap-2"
            >
              <Send size={15} />
              <span>Отправить быструю заявку</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
