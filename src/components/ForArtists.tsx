import React from "react";
const FeatureItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="relative p-6 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-300">
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-white/80 text-base leading-relaxed">{children}</p>
  </div>
);
const TimelineItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="pl-6 relative">
    {/* Dot */}
    <div className="absolute -left-[10px] top-1 w-3 h-3 bg-gradient-to-r from-[#FF0000] to-[#00FF00] rounded-full shadow-lg" />

    {/* Content */}
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-white/70 text-sm leading-relaxed">{children}</p>
  </div>
);

const ForArtists: React.FC = () => {
  return (
    <section
      id="artists"
      className="relative min-h-screen bg-black flex justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/3.png"
          alt="RGB Blur Background"
          className="w-full h-full object-cover"
        />

        {/* Black blend over image */}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

        {/* Top fade overlay */}
        <div className="absolute top-0 left-0 w-full h-[12rem] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      </div>

      <div className="mt-0 pt-0 container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 md:mb-32 text-2xl md:border border border-full border-white/60 md:text-2xl p-4 mx-auto md:w-2/3 text-center text-white/60">
          Your next project shouldn't start with a DM. It should start with a
          &nbsp;
          <span className="text-white underline">contract</span>.
        </div>

        <div className="flex flex-col md:items-center justify-center ">
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight md:mb-12 mx-auto">
            <p className="">features</p>
          </h2>
          <div className="p-4 px-auto ">
            <div className="flex flex-col justify-center lg:flex-row gap-8 max-w-5xl mx-auto">
              <FeatureItem title="AI-Powered Search">
                Brands search art like they speak —{" "}
                <em>“bold type, sci-fi colors, clean layout”</em>. Instantly
                find work that fits.
              </FeatureItem>

              <FeatureItem title="Built-In Contracts & Invoicing">
                Every project includes built-in agreements and secure payments —
                so you can focus on creating.
              </FeatureItem>
              <FeatureItem title="Your Style, Your Rate">
                Set your own pricing and availability. You control how, when,
                and what you work on.
              </FeatureItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForArtists;
