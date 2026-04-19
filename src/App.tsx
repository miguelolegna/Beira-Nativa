import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Ticket, User, Mail, Phone, ChevronRight, CheckCircle2, MapPin, Loader2, ArrowRight } from 'lucide-react';

import logo from './assets/logo.png';
import logoBackground from './assets/logo_background.png';
import { POLITICA_DA_LOJA } from './content/politica';

// --- DATA ---
const PRODUTOS = [
  { id: 1, nome: "Licor de Cereja", categoria: "Licores Artesanais", img: "https://licores-serrano.pt/images/noticias/2e09gvb28xlw0ow4w4.png?auto=format&fit=crop&q=80&w=600" },
  { id: 2, nome: "Queijo Curado da Beira", categoria: "Queijos", img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=600" },
  { id: 3, nome: "Mel Silvestre Biológico", categoria: "Mel", img: "https://loja.mel.com.br/wp-content/uploads/2020/08/mel-puro-silvestre_optimized.jpg?auto=format&fit=crop&q=80&w=600" }
];

const EXPERIENCIAS = [
  { id: 1, nome: "Cinema 3D: As Origens", descricao: "Uma viagem imersiva pela história e tradição da Beira Baixa.", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600" },
  { id: 2, nome: "Painéis Interativos", descricao: "Descobre os segredos da fauna e flora locais de forma tátil e dinâmica.", img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=600" }
];

// --- COMPONENTS ---

// 1. Ticketing Modal
const TicketModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', quantidade: 1, horario: '14:00' });

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({ nome: '', email: '', telefone: '', quantidade: 1, horario: '14:00' });
    }
  }, [isOpen]);

  const handleNext = (e: React.FormEvent) => {
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


// --- POLICY MODAL ---
const PolicyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg max-h-[80vh] bg-brand-surface border border-white/10 rounded-2xl shadow-2xl z-10 overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h3 className="text-xl font-medium text-brand-gold font-serif">{POLITICA_DA_LOJA.titulo}</h3>
            <button onClick={onClose} className="text-brand-text-muted hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto space-y-6">
            {POLITICA_DA_LOJA.seccoes.map((s, i) => (
              <div key={i}>
                <h4 className="text-white font-medium mb-2">{s.subtitulo}</h4>
                <p className="text-brand-text-muted leading-relaxed text-sm">{s.conteudo}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// --- MAIN APP ---
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold/30">
      
      <header className="relative min-h-[90vh] flex flex-col items-center overflow-hidden">
        {/* Background - full cover texture */}
        <div className="absolute inset-0 z-0">
          <img 
            src={logoBackground} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/60 via-transparent to-brand-bg" />
        </div>

        {/* Welcome Text */}
        <div className="relative z-10 text-center px-4 w-full pt-10 pb-4">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-white/90 tracking-[0.25em] text-base md:text-3xl uppercase font-semibold drop-shadow-md">Bem-vindo</span>
          </motion.div>
        </div>

        {/* Logo - centered, contained, never cropped */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 flex-1 flex items-center">
          <img 
            src={logo} 
            alt="Beira Nativa" 
            className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* CTA Buttons */}
        <div className="relative z-10 text-center px-4 w-full py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="sr-only">Beira Nativa - Recordar é Viver</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-9">
              <a 
                href="#catalogo"
                className="bg-brand-gold hover:bg-brand-gold-hover text-brand-dark px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] flex items-center gap-2"
              >
                Explorar Loja 
              </a>
              <a 
                href="#experiencias"
                className="border border-white/30 hover:border-brand-gold text-white hover:text-brand-gold px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                Reservar Experiências
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* SOBRE NOS */}
      <section className="py-24 px-4 relative">
        <div className="max-w-3xl mx-auto text-center glassmorphism p-10 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full" />
          
          <h2 className="text-3xl md:text-4xl font-serif text-brand-gold mb-8">Sobre Nós</h2>
          <p className="text-lg md:text-xl leading-relaxed text-brand-text/90 relative z-10">
            A Beira Nativa nasce com o objetivo de valorizar os produtos tradicionais e a cultura da nossa região, unindo autenticidade e inovação num só espaço. Cada produto conta uma história, desde a sua origem até ao consumidor.
          </p>
        </div>
      </section>

      {/* CATALOGO DE PRODUTOS */}
      <section id="catalogo" className="py-24 px-4 bg-brand-surface/30 scroll-mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Catálogo de Produtos</h2>
            <p className="text-brand-text-muted">Desfruta dos sabores puros da nossa terra.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUTOS.map((produto) => (
              <motion.div 
                key={produto.id} 
                whileHover={{ y: -10 }}
                className="group relative bg-brand-surface rounded-2xl overflow-hidden border border-white/5 transition-all hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={produto.img} alt={produto.nome} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Etiqueta inegociável */}
                  <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white uppercase tracking-wider">
                    <MapPin className="w-3 h-3 mr-1.5 text-brand-gold" />
                    Exclusivo em Loja Física
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-brand-gold text-sm font-medium mb-2 block">{produto.categoria}</span>
                  <h3 className="text-xl font-serif text-white">{produto.nome}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section id="experiencias" className="py-24 px-4 scroll-mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Experiências Imersivas</h2>
            <p className="text-brand-text-muted max-w-xl mx-auto">Vai além do sabor e sente a nossa história através de experiências únicas criadas para despertar os teus sentidos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXPERIENCIAS.map((exp) => (
              <div key={exp.id} className="group relative rounded-2xl overflow-hidden border border-white/10 flex flex-col sm:flex-row bg-brand-surface/50 hover:bg-brand-surface transition-colors">
                <div className="sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden">
                  <img src={exp.img} alt={exp.nome} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif text-brand-gold mb-3">{exp.nome}</h3>
                  <p className="text-brand-text-muted leading-relaxed mb-6">{exp.descricao}</p>
                  <button onClick={() => setIsModalOpen(true)} className="text-white flex items-center gap-2 text-sm font-medium mt-auto group/btn mr-auto">
                    Reservar lugar
                    <ArrowRight className="w-4 h-4 text-brand-gold transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
            <div>
              <img src={logo} alt="Beira Nativa" className="w-48 object-contain mb-8 drop-shadow-[0_0_20px_rgba(197,160,89,0.15)]" />
              <p className="text-brand-text-muted mb-6 max-w-xs">Unindo a autenticidade dos sabores à inovação das experiências culturais da Beira Baixa.</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/beira_nativa_" className="flex items-center justify-center text-brand-text hover:text-brand-gold transition-colors font-medium">
                  @beira_nativa_
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contactos</h3>
              <ul className="space-y-4 text-brand-text-muted">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span>R. Cidade de Salamanca 1<br/>6230-370 Fundão, Portugal</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>+351 930 946 599</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Informações Legais</h3>
              <ul className="space-y-3 text-brand-text-muted">
                <li><button onClick={() => setIsPolicyOpen(true)} className="hover:text-brand-gold transition-colors text-left">Política da Loja</button></li>
                {/* <li><a href="#cancelamentos" className="hover:text-brand-gold transition-colors">Cancelamentos e Reembolsos</a></li>
                <li><a href="#privacidade" className="hover:text-brand-gold transition-colors">Política de Privacidade</a></li> */}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-text-muted">
            <p>&copy; {new Date().getFullYear()} Beira Nativa. Todos os direitos reservados.</p>
            <p>Design de Protótipo Comercial</p>
          </div>
        </div>
      </footer>

      <TicketModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <PolicyModal isOpen={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
    </div>
  );
}
