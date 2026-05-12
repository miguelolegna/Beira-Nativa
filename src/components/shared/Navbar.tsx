import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 glassmorphism border-b border-white/10 w-full transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0">
            <Link to="/">
              <img src={logo} alt="Beira Nativa" className="h-10 w-auto object-contain drop-shadow-md" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-brand-gold bg-white/5' 
                    : 'text-brand-text-muted hover:text-white hover:bg-white/5'
                }`}
              >
                Início
              </Link>
              <Link
                to="/catalogo"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/catalogo') 
                    ? 'text-brand-gold bg-white/5' 
                    : 'text-brand-text-muted hover:text-white hover:bg-white/5'
                }`}
              >
                Montra
              </Link>
            </div>
          </div>
          {/* Mobile menu - can be expanded later if needed */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/"
              className={`text-sm font-medium ${isActive('/') ? 'text-brand-gold' : 'text-brand-text-muted'}`}
            >
              Início
            </Link>
            <Link
              to="/catalogo"
              className={`text-sm font-medium ${isActive('/catalogo') ? 'text-brand-gold' : 'text-brand-text-muted'}`}
            >
              Montra
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
