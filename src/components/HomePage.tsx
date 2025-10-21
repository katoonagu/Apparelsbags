import imgRectangle1177 from "figma:asset/5e07f8dfd12124b9aaa1b98445b339a60711b610.jpeg";
import img12 from "figma:asset/3ceafa090867e63a41d6929856032b507fe5c556.jpeg";
import img13 from "figma:asset/ceb1ed6c484abef22100b895ae4ed78a70cf7510.jpeg";
import img14 from "figma:asset/ba296c153dc3b3c1e6e5e0bf4b7f9b4bd56f44f3.jpeg";
import svgPaths from "../imports/svg-hku44hqw04";

interface HomePageProps {
  onNavigate?: (page: "home" | "catalog" | "contact") => void;
  onProductClick?: (product: { image: string; title: string; price: string }) => void;
}

export function HomePage({ onNavigate, onProductClick }: HomePageProps) {
  return (
    <div className="w-full bg-white">
      {/* Hero Section with VIEW ALL button */}
      <div className="relative w-full max-w-[896px] mx-auto px-4 md:px-0 mb-8 md:mb-12">
        {/* Hero Image */}
        <div className="relative overflow-clip rounded-[10px] w-full aspect-[896/626]">
          <img 
            alt="Luxury handbag collection" 
            className="absolute inset-0 w-full h-full object-cover" 
            src={imgRectangle1177} 
          />
        </div>
        
        {/* VIEW ALL Button - centered below hero */}
        <div className="flex justify-center mt-8 md:mt-12">
          <button 
            onClick={() => onNavigate?.("catalog")}
            className="relative w-[275px] h-[72px] rounded-[10px] bg-white border-2 border-black flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[32px] text-black text-center">VIEW ALL</p>
          </button>
        </div>
      </div>

      {/* Product Showcase Section */}
      <div className="w-full max-w-[1094px] mx-auto px-4 pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Product 1 - Louis Vuitton Keepall */}
          <div 
            className="w-full cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onProductClick?.({
              image: img13,
              title: "Louis Vuitton Keepall Vernis Silver 50",
              price: "$ 6,500"
            })}
          >
            <div className="w-full aspect-[293/220] mb-4">
              <img 
                alt="Louis Vuitton Keepall Vernis Silver 50" 
                className="w-full h-full object-cover" 
                src={img13} 
              />
            </div>
            <p className="font-['Abel:Regular',_sans-serif] text-[13px] text-black capitalize leading-[10px] mb-3">
              Louis Vuitton Keepall Vernis Silver 50
            </p>
            <p className="font-['Abel:Regular',_sans-serif] text-[12px] text-black uppercase leading-[10px]">
              $ 6,500
            </p>
          </div>

          {/* Product 2 - Louis Vuitton Horizon Pixel */}
          <div 
            className="w-full cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onProductClick?.({
              image: img12,
              title: "Louis Vuitton Horizon Pixel Limited Edition Suitcase",
              price: "$ 12,400"
            })}
          >
            <div className="w-full aspect-[293/220] mb-4">
              <img 
                alt="Louis Vuitton Horizon Pixel Limited Edition Suitcase" 
                className="w-full h-full object-cover" 
                src={img12} 
              />
            </div>
            <p className="font-['Abel:Regular',_sans-serif] text-[13px] text-black capitalize leading-[10px] mb-3">
              Louis Vuitton Horizon Pixel Limited Edition Suitcase
            </p>
            <p className="font-['Abel:Regular',_sans-serif] text-[12px] text-black uppercase leading-[10px]">
              $ 12,400
            </p>
          </div>

          {/* Product 3 - Hermès Birkin */}
          <div 
            className="w-full cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onProductClick?.({
              image: img14,
              title: "Hermès Birkin 25 Club Bleu Saphire",
              price: "$ 16,000"
            })}
          >
            <div className="w-full aspect-[293/220] mb-4">
              <img 
                alt="Hermès Birkin 25 Club Bleu Saphire" 
                className="w-full h-full object-cover" 
                src={img14} 
              />
            </div>
            <p className="font-['Abel:Regular',_sans-serif] text-[13px] text-black capitalize leading-[10px] mb-3">
              Hermès Birkin 25 Club Bleu Saphire
            </p>
            <p className="font-['Abel:Regular',_sans-serif] text-[12px] text-black uppercase leading-[10px]">
              $ 16,000
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white w-full py-12 md:py-16">
        <div className="max-w-[1094px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Feature 1 - Free Express Shipping */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <g clipPath="url(#clip0_7_1616)">
                    <path clipRule="evenodd" d={svgPaths.p11286000} fill="black" fillRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_1616">
                      <rect fill="white" height="48" width="48" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="font-['Arial:Regular',_sans-serif] text-[16px] text-neutral-950 uppercase mb-2">Free Express Shipping</h3>
              <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-[#4a5565]">On all orders, no minimum</p>
            </div>

            {/* Feature 2 - Duties and Taxes */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <path d={svgPaths.p34a8b500} stroke="black" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="font-['Arial:Regular',_sans-serif] text-[16px] text-neutral-950 uppercase mb-2">Duties and taxes guaranteed</h3>
              <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-[#4a5565]">On all orders, no minimum</p>
            </div>

            {/* Feature 3 - Customer Love */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <path d={svgPaths.p29e72b70} fill="black" />
                </svg>
              </div>
              <h3 className="font-['Arial:Regular',_sans-serif] text-[16px] text-neutral-950 uppercase mb-2">Customer love</h3>
              <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-[#4a5565]">We got you via phone, email, or text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
