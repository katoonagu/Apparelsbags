import { useState } from "react";
import svgPaths from "../imports/svg-fn9y8mgrb3";
import { Menu, X } from "lucide-react";
import Group1453 from "../imports/Group1453";

interface HeaderProps {
  onNavigate: (page: "home" | "catalog" | "contact" | "about") => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Top Banner */}
      <div className="bg-[#f2f2f2] py-3 px-4 text-center">
        <button className="absolute right-4 top-3 text-[#717171] md:right-8">
          x
        </button>
        <p className="text-[#626262] underline text-xs md:text-sm">
          Please note in-stock pieces will ship within an estimated two weeks of order.
        </p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <div onClick={() => onNavigate("home")} className="w-28 h-9 md:w-32 md:h-10 cursor-pointer">
            <Group1453 />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          <button onClick={() => onNavigate("about")} className="text-[#494949] hover:text-black transition-colors">ABOUT</button>
          <button onClick={() => onNavigate("catalog")} className="text-[#494949] hover:text-black transition-colors">BAGS</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute right-4 top-20 p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col items-center gap-4 mt-4 pb-4 border-t pt-4">
            <button onClick={() => { onNavigate("about"); setMobileMenuOpen(false); }} className="text-[#494949]">ABOUT</button>
            <button onClick={() => { onNavigate("catalog"); setMobileMenuOpen(false); }} className="text-[#494949]">BAGS</button>
          </nav>
        )}
      </div>
    </header>
  );
}
