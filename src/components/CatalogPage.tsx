import image_65fbd156fa8b439e20b4ee9df650e16dfe744fcf from 'figma:asset/65fbd156fa8b439e20b4ee9df650e16dfe744fcf.jpeg';
import image_3ceafa090867e63a41d6929856032b507fe5c556 from 'figma:asset/3ceafa090867e63a41d6929856032b507fe5c556.jpeg';
import image_0f02f42dccd4b9aaaac741005dd46c1070c1de29 from 'figma:asset/0f02f42dccd4b9aaaac741005dd46c1070c1de29.jpeg';
import image_ba296c153dc3b3c1e6e5e0bf4b7f9b4bd56f44f3 from 'figma:asset/ba296c153dc3b3c1e6e5e0bf4b7f9b4bd56f44f3.jpeg';
import image_b8193464ac97a00efa3868b308bfb0861777ed5b from 'figma:asset/b8193464ac97a00efa3868b308bfb0861777ed5b.jpeg';
import image_ceb1ed6c484abef22100b895ae4ed78a70cf7510 from 'figma:asset/ceb1ed6c484abef22100b895ae4ed78a70cf7510.jpeg';
import image_b8193464ac97a00efa3868b308bfb0861777ed5b from 'figma:asset/b8193464ac97a00efa3868b308bfb0861777ed5b.jpeg';
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Grid, List, ChevronDown } from "lucide-react";
import img12 from "../imports/Catalog";
import img13 from "../imports/Catalog";
import img14 from "../imports/Catalog";
import img15 from "../imports/Catalog";
import img16 from "../imports/Catalog";
import img17 from "../imports/Catalog";

const products = [
  {
    id: 1,
    image: image_ceb1ed6c484abef22100b895ae4ed78a70cf7510,
    title: "Louis Vuitton Keepall Vernis Silver 50",
    price: "$ 6,500",
    colors: ["black"],
  },
  {
    id: 2,
    image: image_b8193464ac97a00efa3868b308bfb0861777ed5b,
    title: "Hermès Birkin 25 Rose Tyrien Ostrich Palladium Hardware",
    price: "$ 35,000",
    colors: ["pink"],
  },
  {
    id: 3,
    image: image_ba296c153dc3b3c1e6e5e0bf4b7f9b4bd56f44f3,
    title: "Hermès Birkin 25 Club Bleu Saphire",
    price: "$ 16,000",
    colors: ["blue"],
  },
  {
    id: 4,
    image: image_0f02f42dccd4b9aaaac741005dd46c1070c1de29,
    title: "Louis Vuitton Petite Malle Red Epi leather",
    price: "$ 1,900",
    colors: ["red"],
  },
  {
    id: 5,
    image: image_3ceafa090867e63a41d6929856032b507fe5c556,
    title: "Louis Vuitton Horizon Pixel Limited Edition Suitcase",
    price: "$ 12,400",
    colors: ["black", "blue"],
  },
  {
    id: 6,
    image: image_65fbd156fa8b439e20b4ee9df650e16dfe744fcf,
    title: "Hermès Birkin 25 Rouge Radieux Togo Palladium Hardware",
    price: "$ 24,000",
    colors: ["red"],
  },
];

interface CatalogPageProps {
  onProductClick: (product: { image: string; title: string; price: string }) => void;
}

export function CatalogPage({ onProductClick }: CatalogPageProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filterOpen, setFilterOpen] = useState({ collection: false, color: false });
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<"latest" | "oldest" | "price-high" | "price-low">("latest");

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const cycleSortOption = () => {
    const options: Array<"latest" | "oldest" | "price-high" | "price-low"> = ["latest", "oldest", "price-high", "price-low"];
    const currentIndex = options.indexOf(sortOption);
    const nextIndex = (currentIndex + 1) % options.length;
    setSortOption(options[nextIndex]);
  };

  const getSortLabel = (option: string) => {
    switch (option) {
      case "latest": return "Sort by latest";
      case "oldest": return "Sort by oldest";
      case "price-high": return "Price: High to Low";
      case "price-low": return "Price: Low to High";
      default: return "Sort by latest";
    }
  };

  const filteredProducts = selectedColors.length === 0 
    ? products 
    : products.filter(product => 
        product.colors.some(color => selectedColors.includes(color))
      );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "latest":
        return b.id - a.id; // Newest first
      case "oldest":
        return a.id - b.id; // Oldest first
      case "price-high":
        return parseFloat(b.price.replace(/[$,]/g, "")) - parseFloat(a.price.replace(/[$,]/g, ""));
      case "price-low":
        return parseFloat(a.price.replace(/[$,]/g, "")) - parseFloat(b.price.replace(/[$,]/g, ""));
      default:
        return 0;
    }
  });

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        {/* Page Title & Breadcrumb */}
        <div className="mb-8">
          <p className="text-xs text-[#818181] mb-4">
            <span className="capitalize">Home / </span>Bags
          </p>
          <h1 className="text-center uppercase mb-6">BAGS</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="space-y-4">
              {/* Collection Filter */}
              <div className="border-b pb-4">
                <button
                  onClick={() => setFilterOpen({ ...filterOpen, collection: !filterOpen.collection })}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span>Collection</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen.collection ? "rotate-180" : ""}`} />
                </button>
                {filterOpen.collection && (
                  <div className="mt-3 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="designer" />
                      <label htmlFor="designer">Designer</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="vintage" />
                      <label htmlFor="vintage">Vintage</label>
                    </div>
                  </div>
                )}
              </div>

              {/* Color Filter */}
              <div className="border-b pb-4">
                <button
                  onClick={() => setFilterOpen({ ...filterOpen, color: !filterOpen.color })}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span>Color</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen.color ? "rotate-180" : ""}`} />
                </button>
                {filterOpen.color && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <div 
                      onClick={() => toggleColor("black")}
                      className={`w-6 h-6 rounded-full bg-black border-2 cursor-pointer transition-all ${
                        selectedColors.includes("black") ? "border-gray-400 ring-2 ring-gray-300" : "border-gray-300"
                      }`}
                    ></div>
                    <div 
                      onClick={() => toggleColor("red")}
                      className={`w-6 h-6 rounded-full bg-red-500 border-2 cursor-pointer transition-all ${
                        selectedColors.includes("red") ? "border-red-700 ring-2 ring-red-300" : "border-gray-300"
                      }`}
                    ></div>
                    <div 
                      onClick={() => toggleColor("blue")}
                      className={`w-6 h-6 rounded-full bg-blue-500 border-2 cursor-pointer transition-all ${
                        selectedColors.includes("blue") ? "border-blue-700 ring-2 ring-blue-300" : "border-gray-300"
                      }`}
                    ></div>
                    <div 
                      onClick={() => toggleColor("pink")}
                      className={`w-6 h-6 rounded-full bg-pink-500 border-2 cursor-pointer transition-all ${
                        selectedColors.includes("pink") ? "border-pink-700 ring-2 ring-pink-300" : "border-gray-300"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 border ${viewMode === "list" ? "border-black" : "border-gray-300"}`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 border ${viewMode === "grid" ? "border-black" : "border-gray-300"}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>

              <button 
                onClick={cycleSortOption}
                className="flex items-center gap-2 text-sm text-[#494949] hover:text-black transition-colors"
              >
                <span>{getSortLabel(sortOption)}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Product Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  onClick={() => onProductClick({ image: product.image, title: product.title, price: product.price })}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 py-12 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-full h-full" fill="none" viewBox="0 0 13 11">
                  <path
                    clipRule="evenodd"
                    d="M6.65112 0.841954C6.55412 0.80308 6.44588 0.80308 6.34888 0.841954L1.49987 2.78139L3.45312 3.5622L8.45325 1.56264L6.65112 0.841954ZM9.54688 2.00058L4.54675 4.00014L6.5 4.78095L11.5001 2.78139L9.54688 2.00058ZM12.1875 3.38183L6.90625 5.49433V9.93095L12.1875 7.81845V3.38183ZM6.09375 9.93176V5.49352L0.8125 3.38183V7.81926L6.09375 9.93176ZM6.04744 0.0871411C6.33796 -0.029047 6.66204 -0.029047 6.95256 0.0871411L12.7449 2.40439C12.8202 2.43457 12.8847 2.48661 12.9302 2.5538C12.9757 2.62099 13 2.70026 13 2.78139V7.81926C12.9999 7.98162 12.9512 8.14022 12.8601 8.27462C12.769 8.40901 12.6397 8.51303 12.4889 8.57327L6.65112 10.9084C6.55412 10.9473 6.44588 10.9473 6.34888 10.9084L0.511875 8.57327C0.360954 8.51316 0.231516 8.40919 0.140272 8.27479C0.0490276 8.14038 0.000167643 7.98171 0 7.81926L0 2.78139C1.88825e-05 2.70026 0.0243293 2.62099 0.0697994 2.5538C0.11527 2.48661 0.179817 2.43457 0.255125 2.40439L6.04744 0.0871411Z"
                    fill="black"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="uppercase mb-2">Free Express Shipping</h3>
              <p className="text-sm text-gray-600">On all orders, no minimum</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-full h-full" fill="none" viewBox="0 0 16 12">
                  <path d="M0.353553 5.35355L5.35355 10.3536L15.3536 0.353553" stroke="black" />
                </svg>
              </div>
              <h3 className="uppercase mb-2">Duties and taxes guaranteed</h3>
              <p className="text-sm text-gray-600">On all orders, no minimum</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-full h-full" fill="none" viewBox="0 0 12 9">
                  <path
                    d="M11.25 0H0.75C0.551088 0 0.360322 0.0790176 0.21967 0.21967C0.0790176 0.360322 0 0.551088 0 0.75V8.25C0 8.44891 0.0790176 8.63968 0.21967 8.78033C0.360322 8.92098 0.551088 9 0.75 9H11.25C11.4489 9 11.6397 8.92098 11.7803 8.78033C11.921 8.63968 12 8.44891 12 8.25V0.75C12 0.551088 11.921 0.360322 11.7803 0.21967C11.6397 0.0790176 11.4489 0 11.25 0V0ZM10.6725 8.25H1.3725L3.9975 5.535L3.4575 5.01375L0.75 7.815V1.32L5.41125 5.95875C5.55177 6.09844 5.74186 6.17684 5.94 6.17684C6.13814 6.17684 6.32823 6.09844 6.46875 5.95875L11.25 1.20375V7.76625L8.49 5.00625L7.96125 5.535L10.6725 8.25ZM1.24125 0.75H10.6425L5.94 5.42625L1.24125 0.75Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h3 className="uppercase mb-2">Customer love</h3>
              <p className="text-sm text-gray-600">We got you via phone, email, or text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
