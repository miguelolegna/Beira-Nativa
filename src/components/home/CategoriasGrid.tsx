import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CATEGORIAS = [
  { id: 'licores', nome: "Licores", img: "/produtos/licor_de_cereja_do_fundao.jpeg" },
  { id: 'aguardente', nome: "Aguardente", img: "/produtos/aguardente_medronho_serra_da_estrela.jpeg" },
  { id: 'mel', nome: "Mel", img: "/produtos/mel_acacia.png" },
  { id: 'enchidos', nome: "Enchidos", img: "/produtos/enchido_salpicao_caseiro.jpeg" },
  { id: 'queijos', nome: "Queijos", img: "/produtos/queijo_amarelo.png" }
];

export const CategoriasGrid = () => {
  return (
    <section className="py-24 px-4 bg-brand-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">As Nossas Categorias</h2>
          <p className="text-brand-text-muted">Desfruta dos sabores puros da nossa terra.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CATEGORIAS.map((categoria) => (
            <Link key={categoria.id} to={`/catalogo?cat=${categoria.id}`} onClick={() => window.scrollTo(0, 0)}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative bg-brand-surface rounded-2xl overflow-hidden border border-white/5 transition-[border-color,box-shadow] duration-300 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 h-64"
              >
                <img loading="lazy" src={categoria.img} alt={categoria.nome} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h3 className="text-2xl font-serif text-white">{categoria.nome}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
