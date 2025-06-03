import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [email, setEmail] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background gradient effects 
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-red-500/40 via-green-500/20 to-blue-500/20 blur-3xl " />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-tl from-cyan-500/45 via-yellow-500/15 to-magenta-500/15 blur-2xl " />
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-orange-500/20 via-purple-500/10 to-emerald-500/10 blur-xl transition-all duration-900" />
      </div>
*/}
      <div className="absolute inset-0">
        <img
          src="/bg-drop.png"
          alt="RGB Blur Background"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-white/60 text-xl md:text-2xl font-light mb-16">
            "Most artists don’t even know they’re sitting on brand gold. They
            create for the feed — not realizing their work could be campaign
            material."
          </p>

          <h1 className="text-white text-4xl md:text-7xl font-light tracking-tight mb-8">
            join <u>vi$ual</u> today - get hired by brands.
          </h1>

          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mb-16"></p>

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
                join waitlist
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
