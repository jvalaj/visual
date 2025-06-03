import React from 'react';
import { Search, Briefcase, Zap } from 'lucide-react';

const ForBrands: React.FC = () => {
  return (
    <section id="brands" className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-16">
          <div className="md:w-2/5 sticky top-24">
            <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                FOR BRANDS
              </span>
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              Find artists who actually understand your audience. 
              Discover creators who can translate your brand into authentic visual culture.
            </p>
            
            <a 
              href="#signup" 
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-black px-8 py-4 text-lg font-bold uppercase tracking-wider hover:opacity-90 transition-all"
            >
              JOIN WAITLIST
            </a>
          </div>
          
          <div className="md:w-3/5">
            <div className="space-y-16">
              <FeatureItem 
                icon={<Search size={32} />} 
                title="FIND YOUR PERFECT CREATIVE MATCH"
                description="Search by style, medium, or audience to find artists who naturally align with your brand aesthetic and audience."
              />
              
              <FeatureItem 
                icon={<Briefcase size={32} />} 
                title="STREAMLINED COMMISSION PROCESS"
                description="Clear pricing, straightforward contracts, and secure payments. No more back-and-forth over email or chasing invoices."
              />
              
              <FeatureItem 
                icon={<Zap size={32} />} 
                title="AUTHENTIC CONTENT THAT CONVERTS"
                description="Work with artists who understand digital culture and can create content that actually resonates with your target audience."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      <div className="relative border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
        <div className="text-pink-400 mb-4">{icon}</div>
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ForBrands;