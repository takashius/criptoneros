import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import criptonerosLogo from "@/assets/criptoneros-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={criptonerosLogo} 
              alt="Criptoneros Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("benefits")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cómo Funciona
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("lead-capture")}>
              Comenzar Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            <button 
              onClick={() => scrollToSection("benefits")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Cómo Funciona
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button onClick={() => scrollToSection("lead-capture")} className="w-full">
              Comenzar Gratis
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
