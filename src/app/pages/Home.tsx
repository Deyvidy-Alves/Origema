import { Link } from "react-router";
import { Leaf, Recycle, Heart, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import logoIcon from "../../assets/flor-secundaria.png";

export default function Home() {
  const products = [
    { id: 1, name: "Luminária Reciclada", price: "R$ 189,00", image: "https://images.unsplash.com/photo-1669800933233-97b994ffb380?w=1080", label: "Material 100% Reciclado" },
    { id: 2, name: "Banco Artesanal", price: "R$ 450,00", image: "https://images.unsplash.com/photo-1766939366622-40d9598e9c24?w=1080", label: "Madeira de Demolição" },
    { id: 3, name: "Vaso Decorativo", price: "R$ 120,00", image: "https://images.unsplash.com/photo-1767784060136-bfa4b5904d90?w=1080", label: "Feito à Mão" },
    { id: 4, name: "Kit Organizador", price: "R$ 95,00", image: "https://images.unsplash.com/photo-1765681415541-9d70775f88ae?w=1080", label: "Produção Consciente" }
  ];

  const values = [
    { icon: <Leaf className="w-8 h-8" />, title: "Sustentabilidade", description: "Produtos criados com respeito ao meio ambiente e processos responsáveis" },
    { icon: <Recycle className="w-8 h-8" />, title: "Economia Circular", description: "Valorizamos materiais reciclados e a reutilização criativa" },
    { icon: <Heart className="w-8 h-8" />, title: "Trabalho Artesanal", description: "Parcerias com artesãos locais que valorizam o fazer manual" }
  ];

  return (
    <div className="font-['Montserrat']">
      {/* Banner Principal */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1723549644189-c669e6f0e227?w=1080')` }} />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img src={logoIcon} alt="Origema" className="h-48 w-auto mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl mb-6 text-foreground font-['Chetta_Vissto']">Design que respeita origens</h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-2xl mx-auto">
            Criamos produtos sustentáveis que unem estética contemporânea, funcionalidade e responsabilidade socioambiental
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-['Montserrat']">
              <Link to="/produtos">Ver Produtos <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-['Montserrat']">
              <Link to="/sobre">Nossa História</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/60 text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl mb-2 text-foreground font-['Chetta_Vissto']">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Destaques */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-foreground font-['Chetta_Vissto']">Nossos Produtos</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Cada peça conta uma história de design consciente e respeito à natureza</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-secondary/30 flex flex-col h-full">
                <div className="aspect-square overflow-hidden shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="inline-block bg-secondary/40 text-foreground text-xs px-3 py-1 rounded-full mb-3 font-medium w-fit">
                    {product.label}
                  </div>
                  <h3 className="text-xl mb-2 text-foreground font-['Chetta_Vissto']">{product.name}</h3>
                  <p className="text-2xl text-primary mb-4 font-bold">{product.price}</p>
                  
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white mt-auto font-['Montserrat']">
                    <Link to="/produtos">Saiba Mais</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-foreground font-['Chetta_Vissto']">Nossa Essência</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>A <strong>ORIGEMA</strong> nasceu em 2018 da inquietação de jovens designers brasileiros com o consumo excessivo...</p>
              </div>
              <Button asChild className="mt-8 bg-primary hover:bg-primary/90 px-8 py-6 text-white font-['Montserrat']">
                <Link to="/sobre">Conheça Nossa História Completa</Link>
              </Button>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1723549644189-c669e6f0e227?w=1080" alt="Artesão" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-lg shadow-xl max-w-xs">
                <p className="text-sm">"Design consciente que valoriza a cultura local e promove uma relação ética com a natureza"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Contato Final */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 font-['Chetta_Vissto']">Vamos criar juntos?</h2>
          <p className="text-xl mb-8 text-secondary">
            Desenvolvemos produtos sustentáveis personalizados e oferecemos consultoria em design ecológico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-secondary text-foreground hover:bg-secondary/80 px-8 py-6 text-lg font-bold transition-all shadow-md font-['Montserrat']">
              <Link to="/contato">Entre em Contato</Link>
            </Button>
            <Button asChild className="bg-secondary text-foreground hover:bg-secondary/80 px-8 py-6 text-lg font-bold transition-all shadow-md font-['Montserrat']">
              <Link to="/sobre">Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}