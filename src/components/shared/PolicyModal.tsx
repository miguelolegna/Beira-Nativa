import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { POLITICA_DA_LOJA } from '../../content/politica';

export const PolicyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
