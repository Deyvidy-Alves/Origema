import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast("Enviando sua mensagem...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/deyvidyalvessilvacontato@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          Nome: formData.name,
          Email: formData.email,
          Telefone: formData.phone,
          Assunto: formData.subject,
          Mensagem: formData.message,
          _subject: `Novo Contato Origema: ${formData.subject}`,
          _template: "box",
        })
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! Retornaremos em breve.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast.error("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro de conexão. Verifique sua internet e tente novamente.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePartnershipClick = (typeTitle: string) => {
    setFormData({ ...formData, subject: `Interesse em Parceria - ${typeTitle}` });
    
    const formSection = document.getElementById("contato-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactInfo = [
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: "Email", 
      value: "deyvidyalvessilvacontato@gmail.com", 
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=deyvidyalvessilvacontato@gmail.com&su=Contato%20pelo%20site%20Origema" 
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      title: "WhatsApp", 
      value: "(88) 99354-4345", 
      link: "https://wa.me/5588993544345?text=Olá,%20vim%20pelo%20site%20da%20Origema%20e%20gostaria%20de%20falar%20com%20vocês!" 
    },
    { 
      icon: <MapPin className="w-6 h-6" />, 
      title: "Endereço", 
      value: "IFCE Campus Cedro - CE", 
      link: "https://www.google.com/maps/search/?api=1&query=IFCE+Cedro+CE" 
    }
  ];

  const partnershipTypes = [
    { title: "Empresas", description: "Desenvolvemos produtos personalizados", cta: "Projetos Corporativos" },
    { title: "Artesãos", description: "Buscamos parcerias com artesãos", cta: "Seja um Parceiro" },
    { title: "Instituições", description: "Projetos especiais culturais", cta: "Projetos Culturais" }
  ];

  // Classe padrão para todos os inputs ficarem uniformes e bonitos
  const inputStyles = "bg-white border border-foreground/20 shadow-sm focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary text-foreground";

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4 font-bold">Entre em Contato</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">Vamos criar juntos? Estamos prontos para ouvir suas ideias</p>
        </div>
      </section>

      <section id="contato-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulário com bordas corrigidas */}
            <div className="bg-secondary/10 p-8 rounded-lg shadow-sm border border-secondary/30">
              <h2 className="text-3xl mb-6 text-foreground font-bold">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-semibold">Nome completo *</Label>
                  <Input id="name" name="name" required value={formData.name} onChange={handleChange} className={inputStyles} />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground font-semibold">Email *</Label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputStyles} />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground font-semibold">Telefone</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputStyles} />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-foreground font-semibold">Assunto *</Label>
                  <Input id="subject" name="subject" required value={formData.subject} onChange={handleChange} className={inputStyles} />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground font-semibold">Mensagem *</Label>
                  <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={inputStyles} />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-bold shadow-md">
                  Enviar Mensagem <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-6 text-foreground font-bold">Informações de Contato</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index} 
                      href={info.link}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-secondary/40 hover:border-primary hover:shadow-md transition-all group cursor-pointer block"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary/40 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm text-foreground/60 mb-1 font-semibold">{info.title}</h3>
                        <p className="text-lg text-foreground font-bold group-hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-secondary text-foreground p-8 rounded-lg shadow-md border border-secondary/50">
                <h3 className="text-2xl mb-4 font-bold text-primary">Horário de Atendimento</h3>
                <div className="space-y-2 font-medium">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-foreground font-bold">Parcerias e Colaborações</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-secondary/30 text-center flex flex-col h-full">
                <h3 className="text-2xl mb-3 text-primary font-bold">{type.title}</h3>
                <p className="text-foreground/70 mb-6 flex-grow">{type.description}</p>
                
                <Button 
                  onClick={() => handlePartnershipClick(type.title)}
                  className="w-full bg-primary text-white hover:bg-primary/90 mt-auto shadow-sm"
                >
                  {type.cta}
                </Button>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}