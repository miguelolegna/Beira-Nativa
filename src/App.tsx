import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/shared/Layout';
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </Layout>
    </Router>
  );
}
