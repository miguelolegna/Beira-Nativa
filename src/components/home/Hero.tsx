import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import logoBackground from '../../assets/logo_background.png';

export const Hero = () => {
  return (
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
            <Link 
              to="/catalogo"
              className="bg-brand-gold hover:bg-brand-gold-hover text-brand-dark px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] flex items-center gap-2"
            >
              Explorar Loja 
            </Link>
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
  );
};
