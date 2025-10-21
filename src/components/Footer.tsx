interface FooterProps {
  onNavigate: (page: "home" | "catalog" | "contact" | "about") => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6">
          <button onClick={() => onNavigate("about")} className="text-[#494949] text-xs md:text-sm hover:text-black transition-colors">ABOUT</button>
        </nav>
        <p className="text-center text-[#676767] text-xs">
          © 2022-2025 all rights reserved.
        </p>
      </div>
    </footer>
  );
}
