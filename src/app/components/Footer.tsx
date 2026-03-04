import { Link } from "react-router";
import { Instagram, Facebook, Mail, Linkedin } from "lucide-react";
import logoHorizontal from "../../assets/flor-primaria.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-secondary font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2">
            <img
              src={logoHorizontal}
              alt="Origema"
              className="h-16 w-auto mb-4 opacity-90"
            />
            <p className="text-sm text-secondary/80 max-w-md leading-relaxed">
              Criamos produtos de design que respeitem o meio ambiente, valorizem a cultura local e promovam uma relação mais consciente entre pessoas, objetos e natureza.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">A Origema</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white uppercase tracking-wider text-sm">Conecte-se</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=deyvidyalvessilvacontato@gmail.com&su=Contato%20pelo%20site%20Origema" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Enviar Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="border-t border-secondary/20 mt-8 pt-8 text-center text-xs text-secondary/60">
          <p>© {new Date().getFullYear()} Origema - Design Sustentável & Produtos Criativos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}