import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Estudiante de Cripto",
    content: "Criptoneros me ayudó a entender el mundo blockchain desde cero. Los cursos son claros y la comunidad es muy activa y solidaria.",
    rating: 5
  },
  {
    name: "Carlos Pérez",
    role: "Inversor",
    content: "La mejor fuente de información cripto en Venezuela. Siempre actualizado con las últimas noticias y análisis técnicos confiables.",
    rating: 5
  },
  {
    name: "Ana Rodríguez",
    role: "Desarrolladora Blockchain",
    content: "Los talleres técnicos son excelentes. He aprendido a desarrollar smart contracts y ahora trabajo en proyectos blockchain.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Lo que Dicen Nuestros Miembros
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miles de personas ya están aprendiendo con nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative hover:shadow-xl transition-all duration-300 bg-card">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-card-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
