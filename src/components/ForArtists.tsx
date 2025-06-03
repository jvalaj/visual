import React from "react";

const ForArtists: React.FC = () => {
  return (
    <section
      id="artists"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/about-us-bg.png"
          alt="RGB Blur Background"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 md:px-12">hi dwid wdaw daw d</div>
    </section>
  );
};

export default ForArtists;
