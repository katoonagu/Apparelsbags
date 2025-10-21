import image_6596e218f601affe77a0537c9d9944eeed676364 from 'figma:asset/6596e218f601affe77a0537c9d9944eeed676364.png';
import imgLYRcMwNd01 from "figma:asset/a35928d8b03c5ee26c150d5b18b2c69951125631.png";

export function AboutPage() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 max-w-[627px]">
        {/* Hero Image */}
        <div className="w-full h-[418px] mb-16">
          <img 
            alt="APARELS luxury handbags" 
            className="w-full h-full object-cover" 
            src={image_6596e218f601affe77a0537c9d9944eeed676364} 
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6 items-center">
          {/* Title */}
          <div className="flex flex-col font-['Abel:Regular',_sans-serif] justify-center leading-[0] not-italic text-[18px] text-black w-full">
            <p className="leading-[10px]">ABOUT US</p>
          </div>

          {/* Description */}
          <div className="flex flex-col font-['Abel:Regular',_'Noto_Sans:Regular',_sans-serif] justify-center leading-[20px] text-[#494949] text-[16px] text-justify w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            <p className="mb-[18px]">
              At APPARELS, we are dedicated curators of timeless French luxury, embarking on a continuous pursuit across France to secure the most advantageous and rare handbags and luggage for our discerning clientele. Our mission is to bridge the gap between you and these coveted, often elusive pieces, delivering exceptional finds from the ateliers of Hermès, Louis Vuitton, and Dior directly to you, anywhere in the world. We believe each piece we source is not merely an accessory, but a chapter in a wearable history, waiting to be continued by its new owner.
            </p>
            <p>
              Our by-appointment model is the cornerstone of our service, ensuring an intimate and personalized experience far removed from the conventional retail environment. In our private showroom, we provide a sanctuary where you can explore these investment-worthy pieces, receiving our undivided attention and expert guidance. This curated approach allows us to foster a harmonious relationship with our clients, transforming the acquisition of a luxury item into a moment of connection and personal storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
