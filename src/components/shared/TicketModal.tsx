import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Ticket, User, Mail, Phone, ChevronRight, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import logo from '../../assets/logo.png';

export const TicketModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', quantidade: 1, horario: '14:00' });

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({ nome: '', email: '', telefone: '', quantidade: 1, horario: '14:00' });
    }
  }, [isOpen]);

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = () => {
    setStep(3);
    setTimeout(() => {
      setStep(4);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={step === 3 ? undefined : onClose}
        />
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-brand-surface border border-white/10 rounded-2xl p-6 shadow-2xl z-10 overflow-hidden"
        >
          {step !== 3 && step !== 4 && (
            <button onClick={onClose} className="absolute right-4 top-4 text-brand-text-muted hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          )}

          {/* STEP 1: FORM */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-medium text-brand-gold mb-6 font-serif">Reservar Experiência</h3>
              <form onSubmit={handleNext} className="space-y-4">
                <div>
                  <label className="block text-sm text-brand-text-muted mb-1">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-brand-text-muted" />
                    <input required type="text" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} className="w-full bg-brand-dark border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="O teu nome" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-brand-text-muted mb-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-brand-text-muted" />
                      <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-brand-dark border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="email@exemplo.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-brand-text-muted mb-1">Telemóvel</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-brand-text-muted" />
                      <input required type="tel" value={formData.telefone} onChange={e => setFormData({...formData, telefone: e.target.value})} className="w-full bg-brand-dark border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="900 000 000" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-brand-text-muted mb-1">Quantidade</label>
                    <div className="relative">
                      <Ticket className="absolute left-3 top-3 w-4 h-4 text-brand-text-muted" />
                      <input required type="number" min="1" max="10" value={formData.quantidade} onChange={e => setFormData({...formData, quantidade: parseInt(e.target.value)})} className="w-full bg-brand-dark border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-brand-text-muted mb-1">Horário</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 w-4 h-4 text-brand-text-muted" />
                      <select required value={formData.horario} onChange={e => setFormData({...formData, horario: e.target.value})} className="w-full bg-brand-dark border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                        <option value="10:00">10:00</option>
                        <option value="14:00">14:00</option>
                        <option value="16:00">16:00</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full mt-6 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  Avançar <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {/* STEP 2: PAYMENT */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-6 cursor-pointer text-brand-text-muted hover:text-white transition-colors w-fit" onClick={() => setStep(1)}>
                <ArrowRight className="w-4 h-4 rotate-180" />
                <span className="text-sm">Voltar</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-6 font-serif">Métodos de pagamento dos bilhetes</h3>
              
              <div className="bg-brand-dark border border-brand-gold/30 rounded-xl p-5 mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-bl-full" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-teal-600 text-xs">
                      MBWAY
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Opção MBWay</h4>
                      <p className="text-xs text-brand-text-muted">Acesso Imediato</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-4 border-brand-gold" />
                </div>
                
                <div className="p-3 bg-white/5 rounded-lg text-sm text-brand-text-muted relative z-10">
                  <p>Envia o valor para o número:</p>
                  <p className="font-mono text-brand-gold text-lg mt-1 tracking-wider">+351 900 000 000</p>
                  <p className="text-xs mt-2 opacity-80">Total: {formData.quantidade * 12}€</p>
                </div>
              </div>

              <button onClick={handlePayment} className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                Confirmar Pagamento
              </button>
            </motion.div>
          )}

          {/* STEP 3: LOADING */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 flex flex-col items-center justify-center text-center">
              <Loader2 className="w-12 h-12 text-brand-gold animate-spin mb-4" />
              <h3 className="text-lg font-medium text-white mb-1">A processar pagamento</h3>
              <p className="text-sm text-brand-text-muted">Por favor aguarde um momento...</p>
            </motion.div>
          )}

          {/* STEP 4: SUCCESS */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-2 font-serif">Reserva Confirmada!</h3>
              <p className="text-sm text-brand-text-muted mb-6">O teu bilhete digital está pronto para as experiências.</p>

              {/* VIRTUAL TICKET */}
              <div className="bg-brand-dark rounded-xl border border-white/10 overflow-hidden relative mb-6">
                <div className="p-4 border-b border-dashed border-white/20 text-left relative">
                  <div className="absolute -left-3 -bottom-3 w-6 h-6 bg-brand-surface rounded-full"></div>
                  <div className="absolute -right-3 -bottom-3 w-6 h-6 bg-brand-surface rounded-full"></div>
                  <img src={logo} alt="Beira Nativa" className="h-8 object-contain mb-1 drop-shadow-md" />
                  <p className="text-xs text-brand-text-muted mt-1 uppercase tracking-wider">Passe Experiências</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div>
                      <p className="text-brand-text-muted text-xs">Titular</p>
                      <p className="font-medium truncate">{formData.nome || 'Convidado'}</p>
                    </div>
                    <div>
                      <p className="text-brand-text-muted text-xs">Horário</p>
                      <p className="font-medium">{formData.horario}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex justify-center bg-white">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BEIRANATIVA2026" alt="QR Code" className="w-32 h-32" />
                </div>
              </div>

              <button onClick={onClose} className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-lg transition-colors">
                Fechar e voltar ao site
              </button>
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
