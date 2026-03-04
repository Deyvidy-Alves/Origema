import { Link } from "react-router";
import { Instagram, Facebook, Mail, Linkedin } from "lucide-react";
import logoHorizontal from "../../assets/flor-primaria.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img
              src={logoHorizontal}
              alt="Origema"
              className="h-16 w-auto mb-4 opacity-90"
            />
            <p className="text-sm text-secondary/80 max-w-md">
              Criamos produtos de design que respeitem o meio ambiente, valorizem a cultura local e promovam uma relação mais consciente entre pessoas, objetos e natureza.
            </p>
          </div>

          {/* Links de navegação do rodapé */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">A Origema</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Conecte-se</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:contato@origema.com.br" className="hover:text-white transition-colors"><Mail size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-8 pt-8 text-center text-sm text-secondary/60">
          <p>&copy; {new Date().getFullYear()} Origema - Design Sustentável & Produtos Criativos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}