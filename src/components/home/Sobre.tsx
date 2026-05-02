export const Sobre = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto text-center glassmorphism p-10 md:p-16 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full" />
        
        <h2 className="text-3xl md:text-4xl font-serif text-brand-gold mb-8">Sobre Nós</h2>
        <p className="text-lg md:text-xl leading-relaxed text-brand-text/90 relative z-10">
          A Beira Nativa nasce com o objetivo de valorizar os produtos tradicionais e a cultura da nossa região, unindo autenticidade e inovação num só espaço. Cada produto conta uma história, desde a sua origem até ao consumidor.
        </p>
      </div>
    </section>
  );
};
