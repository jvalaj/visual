import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <div className="text-white font-light text-2xl tracking-wider">
            visual
          </div>
          
          <div className="hidden md:flex space-x-12">
            <NavLink href="#vision">vision</NavLink>
            <NavLink href="#artists">artists</NavLink>
            <NavLink href="#brands">brands</NavLink>
            <NavLink href="#signup" className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-all">
              sign up
            </NavLink>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-black z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <MobileNavLink href="#vision" onClick={() => setIsMenuOpen(false)}>vision</MobileNavLink>
          <MobileNavLink href="#artists" onClick={() => setIsMenuOpen(false)}>artists</MobileNavLink>
          <MobileNavLink href="#brands" onClick={() => setIsMenuOpen(false)}>brands</MobileNavLink>
          <MobileNavLink 
            href="#signup" 
            onClick={() => setIsMenuOpen(false)}
            className="border border-white px-8 py-3"
          >
            sign up
          </MobileNavLink>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '' }) => {
  return (
    <a 
      href={href} 
      className={`text-white font-light tracking-wider hover:text-opacity-70 transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick, className = '' }) => {
  return (
    <a 
      href={href} 
      className={`text-white font-light tracking-wider hover:text-opacity-70 transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Header;