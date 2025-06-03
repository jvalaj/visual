import React from "react";

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center max-w-4xl mx-auto">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#00FF00]">
            our vision
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column — Vision for Artists */}
          <div className="space-y-6">
            <VisionItem>
              Artists Deserve More Than Likes. Brands Deserve More Than Stock
              Templates.
            </VisionItem>

            <VisionItem>
              Most Artists Don’t Even Know They’re Sitting On Brand Gold. They
              Create For The Feed — Not Realizing Their Work Could Be Campaign
              Material.
            </VisionItem>

            <VisionItem>
              Artists Are Building Visual Culture, One Post At A Time — And
              Getting Paid Like It’s A Side Hustle.
            </VisionItem>

            <VisionItem>
              Instagram Gave Artists An Audience — But No Infrastructure. Likes
              Don’t Pay Rent. Exposure Doesn’t Close Deals.
            </VisionItem>

            <VisionItem>
              The Internet Gave Artists Freedom — But No System. We’re Building
              That System.
            </VisionItem>
          </div>

          {/* Right Column — Vision for Brands */}
          <div className="space-y-6 mt-10 md:mt-0">
            <VisionItem>The Art Economy Is Broken.</VisionItem>

            <VisionItem>Find Artists Who Feel Like Your Brand.</VisionItem>

            <VisionItem>
              There Are Millions Of Artists Creating Every Day — But Almost No
              Infrastructure To Connect Them To Real Opportunities.
            </VisionItem>

            <VisionItem>
              This Is How The Next Wave Of Brands Will Work With Artists.
            </VisionItem>

            <VisionItem>
              Most Commission Work Still Starts With A Cold DM And Ends With A
              PayPal Link. That’s Not A Creative Economy — That’s A MESS.
            </VisionItem>

            <VisionItem>
              Brands Are Spending Millions On Ads Made By People Who Don’t Even
              Use The Platforms They’re Designing For.
            </VisionItem>
          </div>
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
      <div className="relative border border-white/10 p-6 sm:p-8 hover:border-white/30 transition-all duration-300 rounded-3xl">
        <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Vision;
