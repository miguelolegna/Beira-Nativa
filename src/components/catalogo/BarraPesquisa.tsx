import { Search } from 'lucide-react';

interface BarraPesquisaProps {
  termo: string;
  setTermo: (t: string) => void;
}

export const BarraPesquisa = ({ termo, setTermo }: BarraPesquisaProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0">
      <Search className="absolute left-4 top-3.5 w-5 h-5 text-brand-text-muted" />
      <input 
        type="text" 
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Pesquisar por nome..." 
        className="w-full bg-brand-surface border border-white/10 rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-brand-gold transition-colors"
      />
    </div>
  );
};
