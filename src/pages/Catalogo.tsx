import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NavegacaoFiltros } from '../components/catalogo/NavegacaoFiltros';
import { BarraPesquisa } from '../components/catalogo/BarraPesquisa';
import { GridProdutos } from '../components/catalogo/GridProdutos';
import produtosData from '../data/produtos.json';
import type { Produto } from '../components/catalogo/CardProduto';

export const Catalogo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat') || 'todos';
  
  const [categoriaAtiva, setCategoriaAtiva] = useState(catParam);
  const [termoPesquisa, setTermoPesquisa] = useState('');

  // Sync param to state if external change happens
  useEffect(() => {
    if (catParam !== categoriaAtiva) {
      setCategoriaAtiva(catParam);
    }
  }, [catParam]);

  // Sync state back to URL
  const handleSetCategoria = (cat: string) => {
    setCategoriaAtiva(cat);
    if (cat === 'todos') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const produtosFiltrados = useMemo(() => {
    return (produtosData as Produto[]).filter(produto => {
      let matchCategoria = false;
      if (categoriaAtiva === 'todos') {
        matchCategoria = true;
      } else if (categoriaAtiva === 'licores') {
        matchCategoria = produto.categoria.toLowerCase() === 'licores' || produto.categoria.toLowerCase() === 'doces';
      } else {
        matchCategoria = produto.categoria.toLowerCase() === categoriaAtiva;
      }
      const matchPesquisa = produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase());
      return matchCategoria && matchPesquisa;
    });
  }, [categoriaAtiva, termoPesquisa]);

  return (
    <section className="py-24 px-4 bg-brand-surface/30 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-white mb-4">Os Nossos Produtos</h1>
          <p className="text-brand-text-muted">Desfrute dos sabores puros da nossa terra</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <NavegacaoFiltros categoriaAtiva={categoriaAtiva} setCategoriaAtiva={handleSetCategoria} />
          <BarraPesquisa termo={termoPesquisa} setTermo={setTermoPesquisa} />
        </div>

        <GridProdutos produtos={produtosFiltrados} />
      </div>
    </section>
  );
};
