import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-crypto-green to-crypto-green-dark">
      {/* Circuit board pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, hsl(var(--primary-foreground) / 0.1) 50px, hsl(var(--primary-foreground) / 0.1) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, hsl(var(--primary-foreground) / 0.1) 50px, hsl(var(--primary-foreground) / 0.1) 51px)`
        }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4 max-w-4xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Líderes en educación en Criptoactivos, finanzas descentralizadas y tradicionales
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Educación, información y comunidad para dominar el mundo de las criptomonedas
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 group hover:scale-105 transition-transform"
            >
              Descargar Recursos Gratis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Ver Cursos
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
              <span className="text-sm">+10K Miembros</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
              <span className="text-sm">Recursos Gratuitos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
              <span className="text-sm">Comunidad Activa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
    </section>
  );
};
