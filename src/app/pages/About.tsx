import { Leaf, Users, Target, Eye, Award, Sparkles } from "lucide-react";
import logoIcon from "../../assets/flor-primaria.png";

export default function About() {
  const values = [ 
    { icon: <Leaf className="w-8 h-8" />, title: "Sustentabilidade", description: "Comprometidos com práticas que respeitam o meio ambiente" }, 
    { icon: <Users className="w-8 h-8" />, title: "Ética", description: "Parcerias justas" }, 
    { icon: <Sparkles className="w-8 h-8" />, title: "Artesanal", description: "Celebramos a habilidade manual" }, 
    { icon: <Award className="w-8 h-8" />, title: "Inovação", description: "Design contemporâneo" }, 
    { icon: <Target className="w-8 h-8" />, title: "Funcionalidade", description: "Beleza e utilidade" }, 
    { icon: <Eye className="w-8 h-8" />, title: "Origens", description: "Valorizamos as raízes" } 
  ];
  
  const timeline = [ 
    { year: "2018", title: "Fundação", description: "Primeira linha sustentável" }, 
    { year: "2019", title: "Expansão", description: "Feiras de design" }, 
    { year: "2020", title: "Consolidação", description: "Consultoria" }, 
    { year: "2021-2026", title: "Crescimento", description: "Reconhecimento nacional" } 
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Seção de Destaque (Hero) */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10">
          <img src={logoIcon} alt="" className="h-96 w-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 font-bold">A Origema</h1>
            <p className="text-xl leading-relaxed text-secondary">
              Somos uma empresa brasileira que acredita no poder transformador do design consciente. Cada produto que criamos carrega a essência da sustentabilidade, o respeito às origens e o compromisso com um futuro mais equilibrado.
            </p>
          </div>
        </div>
      </section>

      {/* Seção da História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-foreground font-bold">Nossa História</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  A <strong>Origema</strong> foi fundada em 2018 por um grupo de jovens designers recém-formados que compartilhavam a inquietação com o consumo excessivo e o descarte de materiais na indústria do design.
                </p>
                <p>
                  O primeiro produto da marca foi uma linha de luminárias produzidas a partir de <strong>madeira de demolição e resíduos industriais</strong>. A aceitação do público impulsionou a expansão do portfólio, mantendo sempre o compromisso com processos produtivos responsáveis e parcerias com pequenos produtores e artesãos.
                </p>
                <p>
                  Hoje, a <strong>Origema</strong> atua no mercado nacional, participando de feiras de design, exposições e projetos colaborativos, mantendo sua identidade baseada no conceito de <strong>origem, essência e propósito</strong>.
                </p>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1723549644189-c669e6f0e227?w=1080" alt="Artesão trabalhando" className="rounded-lg shadow-2xl border-4 border-secondary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória da Empresa */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-foreground font-bold">Nossa Trajetória</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary h-full flex flex-col">
                <div className="text-3xl text-primary font-bold mb-2">{item.year}</div>
                <h3 className="text-xl text-foreground font-bold mb-3">{item.title}</h3>
                {/* flex-grow para manter os cards com o mesmo tamanho mesmo se o texto variar */}
                <p className="text-foreground/70 text-sm flex-grow">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl mb-4 font-bold text-secondary">Missão</h3>
              <p className="text-lg leading-relaxed">
                Criar produtos de design que respeitem o meio ambiente, valorizem a cultura local e promovam uma relação mais consciente entre pessoas, objetos e natureza.
              </p>
            </div>
            <div className="bg-secondary text-foreground p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl mb-4 font-bold text-primary">Visão</h3>
              <p className="text-lg leading-relaxed">
                Ser referência nacional em design sustentável, reconhecida por unir inovação, estética e impacto social positivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-foreground font-bold">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-secondary/40 flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/40 text-primary mb-4 shrink-0">
                  {value.icon}
                </div>
                <h3 className="text-xl mb-2 text-foreground font-bold">{value.title}</h3>
                <p className="text-foreground/70 flex-grow">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-6 font-bold text-secondary">Quer fazer parte dessa história?</h2>
          <p className="text-xl mb-8">Estamos sempre abertos a novas parcerias e colaborações sustentáveis.</p>
          <a href="/contato" className="inline-block bg-secondary text-foreground font-bold hover:bg-white px-8 py-4 rounded-lg transition-colors">
            Entre em Contato
          </a>
        </div>
      </section>
    </div>
  );
}