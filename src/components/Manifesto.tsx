import React from "react";
import { Palette, DollarSign, Users } from "lucide-react";
import { Search, Briefcase, Zap } from "lucide-react";

const Vision: React.FC = () => {
  return (
    <section id="vision" className="pt-0 md:pt-8 pb-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative p-6 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-300 text-white text-center mx-auto w-full px-4 mb-12">
          <p className="text-[2rem] sm:text-[3rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-extrabold tracking-tight leading-[1.05] ">
            The Future Of Branding Is Being Created On Feeds Right Now.{" "}
          </p>
          <p className="mt-4 text-white/70 text-base sm:text-xl tracking-tight">
            Your audience loves it. Now let brands <u>invest</u> in it.
          </p>
        </div>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-32 mb-6 text-center max-w-4xl mx-auto">
          <p>
            our
            <span className=" ml-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#00FF00]">
              vision
            </span>
          </p>
        </h2>

        <div className=" flex flex-col lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column — Vision for Artists */}
          <div className="space-y-6">
            <span className=" text-[#FF0000]">for Artists</span>
            <div className=" flex flex-col md:flex-row gap-8 ">
              <FeatureItem
                icon={<Users className="text-[#FF0000]" size={32} />}
                title="actually get recurring deals"
                description="Move beyond one-off gigs. Our platform helps you build ongoing relationships with brands that love your work."
              />
              <FeatureItem
                icon={<DollarSign className="text-[#FF0000]" size={32} />}
                title="no more 'open for commissions'"
                description="Stop waiting for DMs. Vi$ual turns your portfolio into a storefront — so brands come to you, not the other way around."
              />

              <FeatureItem
                icon={<Palette className="text-[#FF0000]" size={32} />}
                title="keep creating"
                description="Create just like you always have. We match you with brands specifically looking for YOUR unique aesthetic."
              />
            </div>
          </div>
          {/* Right Column — Vision for Brands */}
          <div className="text-right  space-y-6 mt-10 md:mt-0">
            <p className="bg-clip-text ml-auto text-end text-[#00FF00]">
              for Brands
            </p>
            <div className=" flex flex-col md:flex-row gap-8 ">
              <FeatureItem
                icon={<Zap className="ml-auto text-[#00FF00]" size={32} />}
                title="authentic art that converts"
                description="Work with artists who understand digital culture & create content that resonates with your target audience."
              />
              <FeatureItem
                icon={<Search className="ml-auto text-[#00FF00]" size={32} />}
                title="chatgpt what you're looking for"
                description="Search in raw terms to find art using our AI that aligns with your brand aesthetic and audience."
              />
              <FeatureItem
                icon={
                  <Briefcase className="ml-auto text-[#00FF00]" size={32} />
                }
                title="streamlined payments"
                description="Clear pricing, straightforward contracts, and secure payments. No more back-and-forth over email or chasing invoices."
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
    <div className="md:w-1/3 md:h-1/3">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      <div className="relative border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
        <div className="text-cyan-400 mb-4">{icon}</div>
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

interface VisionItemProps {
  children: React.ReactNode;
}

const VisionItem: React.FC<VisionItemProps> = ({ children }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/20 to-[#00FF00]/20 blur-sm group-hover:blur-md transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-3xl"></div>
      <div className="relative border border-white/10 p-6 sm:p-8 hover:border-white/30 transition-all duration-300 rounded-3xl">
        <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Vision;
