import { AnimatePresence } from 'framer-motion';
import { CardProduto } from './CardProduto';
import type { Produto } from './CardProduto';

interface GridProdutosProps {
  produtos: Produto[];
}

export const GridProdutos = ({ produtos }: GridProdutosProps) => {
  if (produtos.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-brand-text-muted text-lg">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <AnimatePresence mode="popLayout">
        {produtos.map(produto => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </AnimatePresence>
    </div>
  );
};
