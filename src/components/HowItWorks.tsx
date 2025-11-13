import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Únete a nuestra comunidad",
    description: "Regístrate gratis y accede a nuestra comunidad de entusiastas cripto en Latam."
  },
  {
    number: "02",
    title: "Interactúa con nosotros",
    description: "Participa en debates, comparte experiencias y conecta con expertos en criptoactivos y finanzas."
  },
  {
    number: "03",
    title: "Elige tu curso",
    description: "Inscríbete en nuestros talleres y cursos desde nivel básico hasta avanzado."
  },
  {
    number: "04",
    title: "Aplica tu Conocimiento",
    description: "Ejecuta estrategias, participa en debates y alcanza tus objetivos en el mundo cripto."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Cuatro pasos simples para dominar las criptomonedas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary/30 -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-secondary-foreground flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    {step.title}
                  </h3>
                  <p className="text-secondary-foreground/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
