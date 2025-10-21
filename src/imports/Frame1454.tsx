import imgLYRcMwNd01 from "figma:asset/a35928d8b03c5ee26c150d5b18b2c69951125631.jpeg";

function Frame1454() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <div className="flex flex-col font-['Abel:Regular',_'Noto_Sans:Regular',_sans-serif] justify-center leading-[20px] relative shrink-0 text-[#494949] text-[16px] text-justify w-[627px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-[18px]">{`At APARELS, we are dedicated curators of timeless French luxury, embarking on a continuous pursuit across France to secure the most advantageous and rare handbags and luggage for our discerning clientele. Our mission is to bridge the gap between you and these coveted, often elusive pieces, delivering exceptional finds from the ateliers of Hermès, Louis Vuitton, and Dior directly to you, anywhere in the world. We believe each piece we source is not merely an accessory, but a chapter in a wearable history, waiting to be continued by its new owner. `}</p>
        <p>Our by-appointment model is the cornerstone of our service, ensuring an intimate and personalized experience far removed from the conventional retail environment. In our private showroom, we provide a sanctuary where you can explore these investment-worthy pieces, receiving our undivided attention and expert guidance. This curated approach allows us to foster a harmonious relationship with our clients, transforming the acquisition of a luxury item into a moment of connection and personal storytelling.</p>
      </div>
    </div>
  );
}

function Frame1455() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Abel:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black w-[630px]">
        <p className="leading-[10px]">ABOUT US</p>
      </div>
      <Frame1454 />
    </div>
  );
}

function Frame1456() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-0 top-[458px]">
      <Frame1455 />
    </div>
  );
}

export default function Frame1457() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[418px] left-px top-0 w-[627px]" data-name="lY-RC-MwNd0 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLYRcMwNd01} />
      </div>
      <Frame1456 />
    </div>
  );
}