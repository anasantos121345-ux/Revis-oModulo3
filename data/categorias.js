/*
 * Categorias da plataforma.
 * A ordem deste array é a ordem dos botões na barra superior.
 *
 * Para adicionar uma aula: crie um arquivo em data/<categoria>/ chamando
 * Plataforma.adicionarAula("<id-da-categoria>", { ... }) e inclua a tag
 * <script> correspondente no index.html (a ordem das tags = ordem das aulas).
 */
window.Plataforma = {
  categorias: [
    {
      id: "design",
      nome: "Design",
      icone: "🎨",
      cor: "#e2456f",
      descricao: "UX para modelos preditivos, jornada do usuário, visualização e storytelling com dados.",
      aulas: []
    },
    {
      id: "lideranca",
      nome: "Liderança",
      icone: "👥",
      cor: "#d9822b",
      descricao: "Vieses de dados nas decisões de IA e feedback que realmente ajuda o time a evoluir.",
      aulas: []
    },
    {
      id: "matematica",
      nome: "Matemática",
      icone: "📐",
      cor: "#5b8fd1",
      descricao: "Probabilidade, inferência estatística, cálculo de várias variáveis e álgebra linear.",
      aulas: []
    },
    {
      id: "negocios",
      nome: "Negócios",
      icone: "💼",
      cor: "#8a5cc2",
      descricao: "LGPD, governança de dados e corporativa, cultura, design organizacional e startups.",
      aulas: []
    },
    {
      id: "programacao",
      nome: "Programação",
      icone: "💻",
      cor: "#2e9e7a",
      descricao: "Python, ciência de dados e Machine Learning: do pré-processamento ao AutoML.",
      aulas: []
    }
  ],

  adicionarAula: function (categoriaId, aula) {
    var cat = this.categorias.find(function (c) { return c.id === categoriaId; });
    if (!cat) {
      console.error("Categoria inexistente: " + categoriaId + " (aula: " + (aula && aula.titulo) + ")");
      return;
    }
    cat.aulas.push(aula);
  }
};
