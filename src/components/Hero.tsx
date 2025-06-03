import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };
  
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-white blur-[200px] animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-white blur-[200px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-white/60 text-xl md:text-2xl font-light mb-16">
            "most commission work still starts with a cold DM and ends with a PayPal link. 
            that's not a creative economy — that's a mess."
          </p>
          
          <h1 className="text-white text-4xl md:text-7xl font-light tracking-tight mb-8">
            get paid for your art
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mb-16">
            stop chasing likes. start making money.
            connect directly with brands that value your unique style.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
                className="flex-1 bg-transparent border border-white/20 text-white px-6 py-4 focus:outline-none focus:border-white"
              />
              <button 
                type="submit"
                className="bg-white text-black px-8 py-4 font-light hover:bg-opacity-90 transition-all"
              >
                sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Subtle gradient fade at bottom */}
      <div className="absolute -bottom-2 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;