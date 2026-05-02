import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { TicketModal } from '../shared/TicketModal';

const EXPERIENCIAS = [
  { id: 2, nome: "Painéis Interativos", descricao: "Descobre os segredos da fauna e flora locais de forma tátil e dinâmica.", img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=600" }
];

export const PaineisInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
                  <img loading="lazy" src={exp.img} alt={exp.nome} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
      
      <TicketModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
