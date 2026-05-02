import { motion } from 'framer-motion';

export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  img: string;
  preco: number;
}

interface CardProdutoProps {
  produto: Produto;
}

export const CardProduto = ({ produto }: CardProdutoProps) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group relative bg-brand-surface rounded-2xl overflow-hidden border border-white/5 transition-[border-color,box-shadow] duration-300 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          loading="lazy" 
          src={produto.img} 
          alt={produto.nome} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-brand-gold text-sm font-medium">{produto.categoria}</span>
          <span className="text-white font-medium">{produto.preco.toFixed(2)}€</span>
        </div>
        <h3 className="text-xl font-serif text-white">{produto.nome}</h3>
      </div>
    </motion.div>
  );
};
