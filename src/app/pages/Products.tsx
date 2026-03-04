import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Leaf, Recycle, Heart, Package } from "lucide-react";

export default function Products() {
  // Filtro de categorias
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "decoracao", label: "Decoração" },
    { id: "mobiliario", label: "Mobiliário" },
    { id: "utilitarios", label: "Utilitários" },
  ];

  const products = [
    { id: 1, name: "Luminária Gota", category: "decoracao", price: "R$ 189,00", image: "https://images.unsplash.com/photo-1669800933233-97b994ffb380?w=1080", label: "Material 100% Reciclado", icon: <Recycle className="w-4 h-4" />, description: "Luminária produzida a partir de resíduos industriais reciclados" },
    { id: 2, name: "Banco Artesanal Raiz", category: "mobiliario", price: "R$ 450,00", image: "https://images.unsplash.com/photo-1766939366622-40d9598e9c24?w=1080", label: "Madeira de Demolição", icon: <Leaf className="w-4 h-4" />, description: "Banco feito com madeira recuperada de construções antigas" },
    { id: 3, name: "Vaso Origami", category: "decoracao", price: "R$ 120,00", image: "https://images.unsplash.com/photo-1767784060136-bfa4b5904d90?w=1080", label: "Feito à Mão", icon: <Heart className="w-4 h-4" />, description: "Vaso decorativo produzido artesanalmente por artesãos locais" },
    { id: 4, name: "Kit Organizador Modular", category: "utilitarios", price: "R$ 95,00", image: "https://images.unsplash.com/photo-1765681415541-9d70775f88ae?w=1080", label: "Produção Consciente", icon: <Package className="w-4 h-4" />, description: "Organizadores versáteis feitos com materiais sustentáveis" },
    { id: 5, name: "Luminária Pendente Terra", category: "decoracao", price: "R$ 245,00", image: "https://images.unsplash.com/photo-1669800933233-97b994ffb380?w=1080", label: "Material 100% Reciclado", icon: <Recycle className="w-4 h-4" />, description: "Design contemporâneo com fibras naturais recicladas" },
    { id: 6, name: "Mesa Lateral Origem", category: "mobiliario", price: "R$ 380,00", image: "https://images.unsplash.com/photo-1766939366622-40d9598e9c24?w=1080", label: "Madeira de Demolição", icon: <Leaf className="w-4 h-4" />, description: "Mesa lateral compacta com acabamento natural" },
  ];

  // Aplica o filtro de produtos de acordo com o botão selecionado
  const filteredProducts = selectedCategory === "todos" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header da Página */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4 font-bold">Nossos Produtos</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Cada peça é cuidadosamente criada com materiais sustentáveis e processos responsáveis
          </p>
        </div>
      </section>

      {/* Botões de Filtro */}
      <section className="py-8 bg-secondary/10 border-b border-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={
                  selectedCategory === category.id
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-foreground/30 text-foreground hover:bg-secondary/50 hover:border-primary"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grade de Produtos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              // flex e h-full para alinhar todos os cards da grade independentemente do tamanho do texto
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-secondary/20 flex flex-col h-full"
              >
                <div className="aspect-square overflow-hidden relative shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <Badge className="absolute top-4 right-4 bg-secondary/90 text-foreground hover:bg-secondary flex items-center gap-1 font-medium">
                    {product.icon}
                    <span className="text-xs">{product.label}</span>
                  </Badge>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl mb-2 text-foreground font-bold line-clamp-2">{product.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{product.description}</p>
                  
                  {/* mt-auto empurra o rodapé do card (preço/botão) para alinhar perfeitamente */}
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-2xl text-primary font-bold">{product.price}</span>
                    <Button className="bg-primary hover:bg-primary/90 text-white">Saiba Mais</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4 text-foreground font-bold">Projeto Personalizado?</h2>
          <p className="text-lg text-foreground/80 mb-8">Criamos produtos sob medida para empresas e projetos especiais</p>
          <Button asChild className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg">
            <Link to="/contato">Fale com Nossa Equipe</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}