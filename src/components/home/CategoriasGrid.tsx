import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CATEGORIAS = [
  { id: 'licores', nome: "Licores", img: "https://images.unsplash.com/photo-1583094851221-50e50f3b0638?auto=format&fit=crop&q=80&w=600" },
  { id: 'aguardente', nome: "Aguardente", img: "https://images.unsplash.com/photo-1516073762112-8e1de32e0c90?auto=format&fit=crop&q=80&w=600" },
  { id: 'mel', nome: "Mel", img: "https://images.unsplash.com/photo-1587049352847-81a56d773c1c?auto=format&fit=crop&q=80&w=600" },
  { id: 'enchidos', nome: "Enchidos", img: "https://images.unsplash.com/photo-1628268909376-e8c4dfbffb50?auto=format&fit=crop&q=80&w=600" },
  { id: 'queijos', nome: "Queijos", img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=600" }
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
            <Link key={categoria.id} to={`/catalogo?cat=${categoria.id}`}>
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
