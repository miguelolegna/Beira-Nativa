import { Hero } from '../components/home/Hero';
import { Sobre } from '../components/home/Sobre';
import { CategoriasGrid } from '../components/home/CategoriasGrid';
import { PaineisInfo } from '../components/home/PaineisInfo';
// import { EventoDestaque } from '../components/home/EventoDestaque'; // Mantido comentado conforme solicitado

export const Home = () => {
  return (
    <>
      <Hero />
      <Sobre />
      <CategoriasGrid />
      {/* <EventoDestaque /> */}
      <PaineisInfo />
    </>
  );
};
