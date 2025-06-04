import React from "react";

const ForArtists: React.FC = () => {
  return (
    <section
      id="artists"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/about-us-bg.png"
          alt="RGB Blur Background"
          className="w-full h-full object-cover"
        />
        {/* Black blend over image */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />

        {/* Top fade overlay */}
        <div className="absolute top-0 left-0 w-full h-[8rem] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center max-w-4xl mx-auto">
          <p>
            about
            <span className="underline ml-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#00FF00]">
              us
            </span>
          </p>
        </h2>
      </div>
    </section>
  );
};

export default ForArtists;
