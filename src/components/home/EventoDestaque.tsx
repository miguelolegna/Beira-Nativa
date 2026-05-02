// Se não existir evento ativo no ficheiro de dados, o componente deve retornar null
// A ler de eventos.json (placeholder)
const eventoAtual = null;

export const EventoDestaque = () => {
  if (!eventoAtual) return null;

  return (
    <section className="py-12 px-4 bg-brand-gold/10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-serif text-brand-gold mb-2">Evento em Destaque</h2>
        <p className="text-white">Detalhes do evento iriam aparecer aqui.</p>
      </div>
    </section>
  );
};
