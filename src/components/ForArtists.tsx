import React from "react";
import { Palette, DollarSign, Users } from "lucide-react";

const ForArtists: React.FC = () => {
  return (
    <section
      id="artists"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col bg-red-500 gap-16">
          <div className="md:w-2/5 bg-yellow-400 sticky top-24">
            <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                for Artists
              </span>
            </h2>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              literally just sign up to get reached out to by brands.
            </p>

            <a
              href="#signup"
              className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-black px-8 py-4 text-lg font-bold uppercase tracking-wider hover:opacity-90 transition-all"
            >
              Get Early Access
            </a>
          </div>

          <div className="md:w-[30%] flex flex-col">
            <div className="space-y-4">
              <FeatureItem
                icon={<Palette size={32} />}
                title="keep creating"
                description="Create just like you always have. We match you with brands specifically looking for YOUR unique aesthetic."
              />

              <FeatureItem
                icon={<DollarSign size={32} />}
                title="decide your rates"
                description="No race to the bottom. Set prices that reflect your value and connect with brands willing to pay for quality and authenticity."
              />

              <FeatureItem
                icon={<Users size={32} />}
                title="actually get recurring deals"
                description="Move beyond one-off gigs. Our platform helps you build ongoing relationships with brands that love your work."
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

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      <div className="relative border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
        <div className="text-cyan-400 mb-4">{icon}</div>
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ForArtists;
