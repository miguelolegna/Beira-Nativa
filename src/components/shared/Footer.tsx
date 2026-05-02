import { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import logo from '../../assets/logo.png';
import { PolicyModal } from './PolicyModal';

export const Footer = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  return (
    <>
      <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10 px-4 mt-auto">
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
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-text-muted">
            <p>&copy; {new Date().getFullYear()} Beira Nativa. Todos os direitos reservados.</p>
            <p>Design de Protótipo Comercial</p>
          </div>
        </div>
      </footer>
      <PolicyModal isOpen={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
    </>
  );
};
