interface NavegacaoFiltrosProps {
  categoriaAtiva: string;
  setCategoriaAtiva: (cat: string) => void;
}

const CATEGORIAS = ['Todos', 'Licores', 'Aguardente', 'Mel', 'Enchidos', 'Queijos'];

export const NavegacaoFiltros = ({ categoriaAtiva, setCategoriaAtiva }: NavegacaoFiltrosProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {CATEGORIAS.map(cat => {
        const catValue = cat.toLowerCase();
        return (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(catValue)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              categoriaAtiva === catValue
                ? 'bg-brand-gold text-brand-dark shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                : 'bg-brand-surface border border-white/10 text-brand-text-muted hover:text-white hover:border-brand-gold/50'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
