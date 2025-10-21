import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { CatalogPage } from "./components/CatalogPage";
import { ContactPage } from "./components/ContactPage";
import { AboutPage } from "./components/AboutPage";

interface SelectedProduct {
  image: string;
  title: string;
  price: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "catalog" | "contact" | "about">("home");
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);

  const handleProductClick = (product: SelectedProduct) => {
    setSelectedProduct(product);
    setCurrentPage("contact");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onNavigate={setCurrentPage} />
      <main className="flex-1">
        {currentPage === "home" ? (
          <HomePage onNavigate={setCurrentPage} onProductClick={handleProductClick} />
        ) : currentPage === "catalog" ? (
          <CatalogPage onProductClick={handleProductClick} />
        ) : currentPage === "about" ? (
          <AboutPage />
        ) : (
          <ContactPage selectedProduct={selectedProduct} />
        )}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
