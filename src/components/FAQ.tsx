import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es Criptoneros?",
    answer: "Criptoneros es la comunidad líder de blockchain y criptomonedas en Venezuela. Ofrecemos educación, recursos gratuitos, cursos y un espacio para conectar con otros entusiastas cripto."
  },
  {
    question: "¿Los recursos son realmente gratuitos?",
    answer: "Sí, ofrecemos una gran cantidad de contenido educativo gratuito incluyendo guías, artículos y material descargable. También tenemos cursos premium para quienes deseen profundizar más."
  },
  {
    question: "¿Necesito conocimientos previos?",
    answer: "No necesitas experiencia previa. Tenemos contenido para todos los niveles, desde principiantes absolutos hasta traders y desarrolladores avanzados."
  },
  {
    question: "¿Cómo puedo unirme a la comunidad?",
    answer: "Simplemente regístrate con tu email y obtendrás acceso inmediato a nuestra comunidad, recursos gratuitos y notificaciones sobre nuevos cursos y eventos."
  },
  {
    question: "¿Qué tipo de cursos ofrecen?",
    answer: "Ofrecemos cursos sobre fundamentos de blockchain, trading de criptomonedas, análisis técnico, DeFi, NFTs, desarrollo de smart contracts y mucho más."
  },
  {
    question: "¿Cómo me mantengo actualizado?",
    answer: "Al unirte recibirás nuestro newsletter con las últimas noticias, análisis de mercado y actualizaciones sobre nuevos cursos y recursos disponibles."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Respuestas a las dudas más comunes
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
