import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md py-4"
          : "bg-transparent border-b-white py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <div className="text-white font-light text-2xl tracking-wider">
            vi$ual
          </div>

          <div className="hidden md:flex space-x-12">
            <NavLink href="#vision" className="py-auto my-auto">
              our vision
            </NavLink>
            <NavLink href="#artists" className="my-auto">
              for artists
            </NavLink>
            <NavLink href="#brands" className="my-auto">
              for brands
            </NavLink>
            <NavLink
              href="#signup"
              className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-all"
            >
              join waitlist
            </NavLink>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MobileNavLink
              href="#signup"
              onClick={() => setIsMenuOpen(false)}
              className="border border-white px-8 py-3"
            >
              join waitlist
            </MobileNavLink>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
}) => {
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

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  children,
  onClick,
  className = "",
}) => {
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
