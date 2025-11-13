import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "El nombre es requerido" }).max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "El email debe tener menos de 255 caracteres" }),
  message: z.string().trim().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }).max(1000, { message: "El mensaje debe tener menos de 1000 caracteres" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const LeadCapture = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form data:", data);
    
    // Here you would integrate with your backend/email service
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    
    form.reset();
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary via-crypto-green to-crypto-green-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(var(--primary-foreground) / 0.1) 20px, hsl(var(--primary-foreground) / 0.1) 21px)`
        }} />
      </div>

      <div className="container relative z-10 max-w-4xl">
        <div className="bg-primary-foreground/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Send className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Contáctanos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes dudas? Envíanos un mensaje y nos pondremos en contacto contigo
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Nombre Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" className="h-12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu@email.com" className="h-12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Mensaje</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-12 text-lg group"
              >
                Enviar Mensaje
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Nos pondremos en contacto contigo lo antes posible
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
