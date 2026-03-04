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

  const inputStyles = "w-full bg-secondary/5 border-2 border-secondary/20 focus-visible:border-primary focus-visible:ring-0 text-foreground rounded-lg transition-all hover:border-secondary/50 text-base font-['Montserrat']";

  return (
    <div className="min-h-screen bg-white font-['Montserrat']">
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4 font-['Chetta_Vissto']">Entre em Contato</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-['Montserrat']">Vamos criar juntos? Estamos prontos para ouvir suas ideias</p>
        </div>
      </section>

      <section id="contato-form" className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-secondary/20">
              <div className="mb-8">
                <h2 className="text-3xl text-foreground mb-2 font-['Chetta_Vissto']">Envie sua Mensagem</h2>
                <p className="text-foreground/60 font-['Montserrat']">Preencha os dados abaixo e retornaremos o mais breve possível.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold text-foreground/70 uppercase tracking-widest font-['Montserrat']">Nome completo *</Label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleChange} className={`${inputStyles} h-14`} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold text-foreground/70 uppercase tracking-widest font-['Montserrat']">Email *</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={`${inputStyles} h-14`} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold text-foreground/70 uppercase tracking-widest font-['Montserrat']">Telefone</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={`${inputStyles} h-14`} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs font-bold text-foreground/70 uppercase tracking-widest font-['Montserrat']">Assunto *</Label>
                    <Input id="subject" name="subject" required value={formData.subject} onChange={handleChange} className={`${inputStyles} h-14`} />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <Label htmlFor="message" className="text-xs font-bold text-foreground/70 uppercase tracking-widest font-['Montserrat']">Sua Mensagem *</Label>
                  <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputStyles} p-4 resize-none`} />
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-7 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-['Montserrat']">
                    Enviar Mensagem <Send className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-8 lg:pt-8">
              <div>
                <h2 className="text-3xl mb-6 text-foreground font-['Chetta_Vissto']">Informações de Contato</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index} 
                      href={info.link}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-secondary/40 hover:border-primary hover:shadow-md transition-all group cursor-pointer block"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-secondary/40 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex-1 pt-1 font-['Montserrat']">
                        <h3 className="text-xs text-foreground/50 uppercase tracking-wider font-bold mb-1">{info.title}</h3>
                        <p className="text-lg text-foreground font-bold group-hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl mb-4 text-secondary font-['Chetta_Vissto']">Horário de Atendimento</h3>
                <div className="space-y-3 font-medium opacity-90 font-['Montserrat']">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Segunda a Sexta</span>
                    <span>9h às 18h</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Sábado</span>
                    <span>9h às 13h</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span>Domingo</span>
                    <span className="text-secondary font-bold">Fechado</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-foreground font-['Chetta_Vissto']">Parcerias e Colaborações</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30 text-center flex flex-col h-full hover:shadow-lg transition-shadow">
                <h3 className="text-2xl mb-3 text-primary font-['Chetta_Vissto']">{type.title}</h3>
                <p className="text-foreground/70 mb-8 flex-grow font-['Montserrat']">{type.description}</p>
                
                <Button 
                  onClick={() => handlePartnershipClick(type.title)}
                  className="w-full bg-secondary text-foreground hover:bg-secondary/80 mt-auto font-bold py-6 rounded-xl font-['Montserrat']"
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