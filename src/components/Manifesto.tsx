import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight mb-16 max-w-4xl mx-auto">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#00FF00]">
            OUR VISION
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <VisionItem>
            Most artists don't even know they're sitting on brand gold.
            They create for the feed — not realizing their work could be campaign material.
          </VisionItem>
          
          <VisionItem>
            Artists are building visual culture, one post at a time — and getting paid like it's a side hustle.
          </VisionItem>
          
          <VisionItem>
            Brands are spending millions on ads made by people who don't even use the platforms they're designing for.
          </VisionItem>
          
          <VisionItem>
            Instagram gave artists an audience — but no infrastructure.
            Likes don't pay rent. Exposure doesn't close deals.
          </VisionItem>
          
          <VisionItem>
            The internet gave artists freedom — but no system. 
            We're building that system.
          </VisionItem>
          
          <VisionItem>
            Artists deserve more than likes. 
            Brands deserve more than stock templates.
          </VisionItem>
        </div>
      </div>
    </section>
  );
};

interface VisionItemProps {
  children: React.ReactNode;
}

const VisionItem: React.FC<VisionItemProps> = ({ children }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/20 to-[#00FF00]/20 blur-sm group-hover:blur-md transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-3xl"></div>
      <div className="relative border border-white/10 p-8 hover:border-white/30 transition-all duration-300 rounded-3xl">
        <p className="text-white/80 text-lg md:text-xl leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

export default Vision;