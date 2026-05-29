import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from '../data';
import { CheckCircle2, ArrowRight, ArrowLeft, RefreshCw, Smartphone, ClipboardCheck } from 'lucide-react';

interface QuizEstimateProps {
  onShowNotification: (msg: string) => void;
}

export default function QuizEstimate({ onShowNotification }: QuizEstimateProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, { text: string; modifier: number }>>({});
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [preferredMessenger, setPreferredMessenger] = useState('Max');
  const [isCompleted, setIsCompleted] = useState(false);

  const basePrice = 120000; // Base cost of software development & wiring blueprint markup

  // Calculate live price based on current questions answered
  const calculateCurrentPrice = () => {
    let modsSum = 0;
    Object.keys(selections).forEach((key) => {
      modsSum += selections[key].modifier;
    });
    const estMin = basePrice + modsSum;
    const estMax = Math.round(estMin * 1.25);
    return { min: estMin, max: estMax };
  };

  const handleOptionSelect = (fieldName: string, optionText: string, modifier: number) => {
    setSelections({
      ...selections,
      [fieldName]: { text: optionText, modifier }
    });

    // Advance to next step automatically
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 350);
    } else {
      // Go to final contact info
      setCurrentStep(QUIZ_QUESTIONS.length);
    }
  };

  const handleNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setSelections({});
    setCurrentStep(0);
    setIsCompleted(false);
    setUserName('');
    setUserPhone('');
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userPhone) return;

    const { min, max } = calculateCurrentPrice();

    // Format the choices for the final dispatch log
    const selectionSummary = Object.keys(selections)
      .map((key) => {
        const title = QUIZ_QUESTIONS.find((q) => q.fieldName === key)?.question || key;
        return `• ${title}: ${selections[key].text}`;
      })
      .join('\n');

    const formattedMessage = `📊 НОВАЯ ЗАЯВКА С КВИЗА (РАСЧЕТ СМЕТЫ)\n\n` +
      `👤 Клиент: ${userName || 'Не указано'}\n` +
      `📞 Телефон: ${userPhone}\n` +
      `💬 Связаться через: ${preferredMessenger}\n\n` +
      `💰 ОРИЕНТИР СМЕТЫ:\n${new Intl.NumberFormat('ru-RU').format(min)} - ${new Intl.NumberFormat('ru-RU').format(max)} руб.\n\n` +
      `⚙️ ПАРАМЕТРЫ КОТЕЛЬНОЙ:\n${selectionSummary}`;

    sendToMax(formattedMessage);
    setIsCompleted(true);
    onShowNotification('Вы успешно запросили смету! Сведения отправлены нашему инженеру.');
  };

  const progressPercentage = Math.round((currentStep / QUIZ_QUESTIONS.length) * 100);
  const currentPrice = calculateCurrentPrice();

  return (
    <section id="quiz-section" className="py-20 bg-brand-blue relative text-white overflow-hidden">
      {/* Background visual geometry */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-900 to-transparent opacity-60"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/10 blur-[130px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-brand-orange text-xs uppercase font-extrabold tracking-widest bg-brand-orange/15 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
            Онлайн Экспресс-Расчет
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 mb-4 text-white">
            Калькулятор сметы автоматизации
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Ответьте на несколько простых вопросов о Вашей котельной и получите расчет стоимости оборудования и пусконаладочных работ за 1 минуту.
          </p>
        </div>

        {/* Master Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Main Quiz Card (Col Span 8) */}
          <div className="lg:col-span-8 bg-[#0C2449] border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 min-h-[440px] flex flex-col justify-between">
            
            {!isCompleted ? (
              <>
                {/* Header status bar */}
                {currentStep < QUIZ_QUESTIONS.length && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center text-xs text-white/50 font-mono mb-2">
                      <span>КОНФИГУРАТОР: ШАГ {currentStep + 1} ИЗ {QUIZ_QUESTIONS.length}</span>
                      <span>ПОДГОТОВЛЕНО НА {progressPercentage}%</span>
                    </div>
                    {/* Visual Progress Line */}
                    <div className="w-full bg-slate-900/60 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-brand-orange h-1.5 rounded-full transition-all duration-300" 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Question Views */}
                <div className="my-auto py-4">
                  <AnimatePresence mode="wait">
                    {currentStep < QUIZ_QUESTIONS.length ? (
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-6">
                          {QUIZ_QUESTIONS[currentStep].question}
                        </h3>

                        {/* Options render as block buttons */}
                        <div className="flex flex-col gap-3.5">
                          {QUIZ_QUESTIONS[currentStep].options?.map((opt) => {
                            const isSelected = selections[QUIZ_QUESTIONS[currentStep].fieldName]?.text === opt.text;
                            return (
                              <button
                                key={opt.id}
                                onClick={() => handleOptionSelect(QUIZ_QUESTIONS[currentStep].fieldName, opt.text, opt.priceModifier)}
                                className={`w-full text-left p-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-between border ${
                                  isSelected 
                                    ? 'bg-brand-orange border-brand-orange text-white shadow-md shadow-brand-orange/20' 
                                    : 'bg-brand-blue/40 border-white/10 text-white/90 hover:bg-brand-blue/80 hover:border-white/20'
                                }`}
                              >
                                <span>{opt.text}</span>
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-white bg-white/20' : 'border-white/30'
                                }`}>
                                  {isSelected && <span className="w-2 h-2 bg-white rounded-full"></span>}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    ) : (
                      /* Final Contact Details request step */
                      <motion.div
                        key="contact-step"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-2 mb-4 text-brand-orange">
                          <CheckCircle2 size={20} className="animate-bounce" />
                          <span className="text-xs uppercase font-extrabold tracking-widest font-mono">Расчет готов</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-2">
                          Оставьте контакты для фиксации персональной скидки
                        </h3>
                        <p className="text-xs md:text-sm text-white/65 mb-6">
                          Мы автоматически сгенерируем предварительное коммерческое предложение на основе ответов и отправим смету.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase text-white/50 tracking-wider mb-1.5 font-mono">
                              Ваше имя или организация
                            </label>
                            <input
                              type="text"
                              required
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              placeholder="Например, ООО 'ТеплоСервис' или Иван"
                              className="w-full bg-brand-blue/60 border border-white/15 focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase text-white/50 tracking-wider mb-1.5 font-mono">
                              Телефон для отправки сметы
                            </label>
                            <input
                              type="tel"
                              required
                              value={userPhone}
                              onChange={(e) => setUserPhone(e.target.value)}
                              placeholder="+7 (___) ___-__-__"
                              className="w-full bg-brand-blue/60 border border-white/15 focus:border-brand-orange rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase text-white/50 tracking-wider mb-1.5 font-mono">
                              Куда направить документацию?
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                              {['Max', 'WhatsApp', 'Звонок'].map((m) => (
                                <button
                                  type="button"
                                  key={m}
                                  onClick={() => setPreferredMessenger(m)}
                                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors text-center ${
                                    preferredMessenger === m 
                                      ? 'bg-brand-orange text-white' 
                                      : 'bg-brand-blue/80 text-white/70 hover:bg-brand-blue'
                                  }`}
                                >
                                  {m}
                                </button>
                              ))}
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full mt-6 bg-[#10B981] hover:bg-[#059669] text-white py-4 rounded-xl font-bold tracking-wide transition-colors shadow-lg hover:shadow-emerald-500/10 flex items-center justify-center gap-2"
                          >
                            <ClipboardCheck size={18} />
                            <span>Получить смету и проект в {preferredMessenger}</span>
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Controls */}
                {currentStep < QUIZ_QUESTIONS.length && (
                  <div className="flex justify-between items-center border-t border-white/5 pt-5 mt-6">
                    <button
                      onClick={handlePrev}
                      disabled={currentStep === 0}
                      className={`text-xs inline-flex items-center gap-1 font-bold ${
                        currentStep === 0 ? 'text-white/20 cursor-not-allowed' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <ArrowLeft size={14} />
                      <span>Назад</span>
                    </button>

                    <button
                      onClick={handleNext}
                      className="text-xs inline-flex items-center gap-1 font-bold text-brand-orange hover:text-white"
                    >
                      <span>Пропустить вопрос</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Success screen layout upon form completion */
              <div className="text-center py-10 flex flex-col items-center justify-center my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/30">
                  <CheckCircle2 size={36} />
                </div>
                
                <h3 className="text-2xl font-heading font-extrabold text-white mb-2 leading-tight">
                  Расчет стоимости сформирован!
                </h3>
                
                <p className="text-sm text-white/70 max-w-md mx-auto mb-8">
                  Мы получили Ваши параметры. Копия расчёта направлена в мессенджер <span className="text-brand-orange font-bold font-mono">{preferredMessenger}</span> по номеру {userPhone}. Специалист свяжется с Вами в течение 10 минут.
                </p>

                <div className="bg-slate-900/65 rounded-2xl p-5 border border-white/5 text-left w-full max-w-sm mb-8">
                  <div className="text-xs uppercase font-mono font-bold text-white/50 mb-3 tracking-wider">Выбранная конфигурация:</div>
                  <ul className="space-y-2 text-xs text-white/80">
                    {Object.keys(selections).map((key) => (
                      <li key={key} className="flex items-start gap-1">
                        <span className="text-brand-orange">•</span>
                        <span>{selections[key].text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={resetQuiz}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white/90 text-xs font-semibold rounded-lg flex items-center gap-2 border border-white/10 transition-colors"
                >
                  <RefreshCw size={14} />
                  <span>Рассчитать заново</span>
                </button>
              </div>
            )}
          </div>

          {/* Dynamic Price Display Panel (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Live Pricing Counter View */}
            <div className="bg-[#091D3C] border border-white/10 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-[50px] rounded-full"></div>
              
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange font-mono mb-2">
                Предварительная оценка бюджета
              </h4>
              <p className="text-xs text-white/50 leading-relaxed mb-6">
                Оборудование, обвязка щита, монтаж на объекте, пусконаладка и сдача КИПиА.
              </p>

              <div className="space-y-2 mb-6 border-b border-white/15 pb-6">
                <span className="text-4xl md:text-5xl font-heading font-extrabold text-white leading-none block">
                  {new Intl.NumberFormat('ru-RU').format(currentPrice.min)}
                </span>
                <span className="text-xs text-white/40 font-mono">минимальный порог (руб)</span>
                
                <div className="flex gap-1.5 items-center my-3">
                  <span className="text-white/60 text-xs">до</span>
                  <span className="text-lg font-bold font-heading text-white/90">
                    {new Intl.NumberFormat('ru-RU').format(currentPrice.max)}
                  </span>
                  <span className="text-white/60 text-xs font-mono">руб.</span>
                </div>
              </div>

              {/* Dynamic summary item logs */}
              {Object.keys(selections).length > 0 ? (
                <div className="space-y-3">
                  <div className="text-[10px] uppercase font-mono font-bold text-white/30 tracking-wider">Учтенные модификаторы:</div>
                  <div className="max-h-[140px] overflow-y-auto space-y-2 font-mono pr-1 custom-scrollbar">
                    {Object.keys(selections).map((key, index) => (
                      <div key={key} className="flex justify-between gap-2 text-[10px] text-white/70">
                        <span className="truncate max-w-[140px] text-white/60">{index+1}. {selections[key].text}</span>
                        <span className="text-brand-orange">+{new Intl.NumberFormat('ru-RU').format(selections[key].modifier)} ₽</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 text-xs text-white/40 italic">
                  Выберите параметры слева для подсчёта стоимости КИПиА в реальном времени.
                </div>
              )}
            </div>

            {/* Quick Consultation sidebar */}
            <div className="bg-gradient-to-tr from-brand-blue to-[#0e274f] border border-white/5 rounded-3xl p-6 relative">
              <div className="flex items-start gap-4">
                <div className="text-brand-orange text-2xl">📋</div>
                <div>
                  <h5 className="font-heading font-bold text-sm text-white mb-1">Готовые Типовые Сметы</h5>
                  <p className="text-xs text-white/65 leading-relaxed">
                    Если у Вас уже разработан проект АТМ или есть спецификация — кликните внизу и выгрузите спецификацию нашему инженеру в Max!
                  </p>
                  <button 
                    onClick={() => sendToMax('Здравствуйте, у нас есть готовый проект/спецификация котельной, хотим запросить коммерческий расчет сборки.')}
                    className="mt-4 text-xs font-extrabold text-brand-orange hover:text-white transition-colors uppercase tracking-wider block"
                  >
                    Отправить ТЗ в Max →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
