
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Dúvidas', path: '/duvidas' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "glass-container py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 relative z-10"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-semibold text-sm">D</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">Druu Renach</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  location.pathname === item.path 
                    ? "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-10 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 flex flex-col pt-24 px-8 md:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary py-2",
                location.pathname === item.path 
                  ? "text-primary" 
                  : "text-foreground/80"
              )}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
