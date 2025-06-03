import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-white font-bold text-xl tracking-widest mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                vi$ual
              </span>
            </div>
            <p className="text-white/60">
              Building the infrastructure for the creative economy.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <FooterLink href="#manifesto">about us</FooterLink>
              <FooterLink href="#artists">artists</FooterLink>
              <FooterLink href="#brands">brands</FooterLink>
            </div>

            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} ARTCONOMY. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="text-white/60 hover:text-white transition-colors">
      {children}
    </a>
  );
};

export default Footer;
