import { Card } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Educación de Calidad",
    description: "Aprende sobre blockchain, criptomonedas y tecnología con contenido actualizado y profesional."
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Únete a miles de entusiastas cripto en Latam. Comparte experiencias y aprende juntos."
  },
  {
    icon: TrendingUp,
    title: "Cursos y Talleres",
    description: "Accede a formación práctica desde básico hasta avanzado. Impulsa tu conocimiento cripto."
  },
  {
    icon: Shield,
    title: "Información Verificada",
    description: "Noticias confiables, análisis técnicos y asesoría de expertos en la comunidad blockchain."
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            ¿Por qué Criptoneros?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos tu puerta de entrada al mundo blockchain en Latam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card group"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-card-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
