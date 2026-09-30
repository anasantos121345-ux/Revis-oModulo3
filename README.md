# Plataforma de Revisão · Módulo Machine Learning ♡

Site de revisão para o módulo, feito por Ana Camelão. Tema escuro e claro, com a paleta magenta, vinho e azul.
Feito em HTML, CSS e JavaScript puros. Não precisa de instalação nem de servidor.

**Para abrir:** dê dois cliques em `index.html`.
As fontes vêm do Google Fonts; sem internet, o site usa fontes do sistema.

## Estrutura

```
index.html                 estrutura da página + lista de scripts de aulas
css/style.css              todos os estilos (tema, layout, responsivo)
js/app.js                  lógica: rotas, renderização, correção, progresso
data/categorias.js         as 5 áreas (ordem = ordem dos botões do topo)
data/<area>/NN-nome.js     uma aula por arquivo (só conteúdo, sem código de interface)
```

- **Rotas por hash** (`#/matematica/aula/2`): a troca de página acontece sem recarregar, e o site funciona abrindo o arquivo direto do disco.
- **Progresso:** fica salvo no `localStorage` do navegador (respostas objetivas e discursivas).

## Como adicionar uma aula

1. Crie `data/<area>/NN-minha-aula.js`:

```js
Plataforma.adicionarAula("matematica", {
  id: "minha-aula",                 // único dentro da área (é a chave do progresso salvo)
  titulo: "Título da aula",
  descricao: "Uma linha sobre o conteúdo.",
  duracao: "40 min",
  resumo: [
    { tipo: "titulo", texto: "Seção" },
    { tipo: "subtitulo", texto: "Subseção" },
    { tipo: "texto", texto: "Parágrafo (aceita <strong>, <em>, <code>, <sub>, <sup>)." },
    { tipo: "lista", itens: ["item 1", "item 2"] },
    { tipo: "passos", itens: ["passo 1", "passo 2"] },
    { tipo: "formula", legenda: "Nome", texto: "E(X) = ∑ x·P(x)", nota: "observação" },
    { tipo: "tabela", cabecalho: ["A", "B"], linhas: [["1", "2"]] },
    { tipo: "codigo", texto: "print('olá')" },
    { tipo: "exemplo", titulo: "Exemplo", texto: "…" },        // também aceita itens/codigo
    { tipo: "destaque", titulo: "Conceito importante", texto: "…" },
    { tipo: "dica", texto: "…" },                              // 💡 Dica
    { tipo: "cuidado", itens: ["…"] }                          // ⚠️ Cuidado com
  ],
  objetivas: [
    {
      pergunta: "Enunciado?",
      alternativas: ["A", "B", "C", "D"],
      correta: 2,                                   // índice (0 = A)
      explicacao: "Por que a correta está correta.",
      erros: ["Por que A está errada", "Por que B está errada", null, "Por que D está errada"]
    }
    // … 10 questões
  ],
  discursivas: ["Pergunta 1", "Pergunta 2", "…"],   // 5 questões
  respostasDiscursivas: ["Resposta de referência 1", "…"]  // mesma ordem; aparece após enviar
});
```

2. Inclua no `index.html`, na posição em que a aula deve aparecer:

```html
<script src="data/matematica/NN-minha-aula.js"></script>
```

Para remover uma aula, apague a tag `<script>` correspondente. Para reordenar, mude a ordem das tags.
Uma área nova entra em `data/categorias.js`.

## Conteúdo incluído

29 aulas baseadas no conteúdo da prova e nos slides das pastas:

| Área | Aulas |
|---|---|
| 🎨 Design | UX com modelos preditivos · Jornada do usuário e visualização · Design e visualização de dados · Storytelling com dados |
| 👥 Liderança | Vieses de dados e decisões em IA · Feedback em projetos |
| 📐 Matemática | Distribuições de probabilidade · Estatística indutiva · Funções de várias variáveis · Derivadas parciais · Integral múltipla · Transformações lineares |
| 💼 Negócios | LGPD e política de dados · Gestão e governança de dados · Governança corporativa · Cultura organizacional · Design organizacional · Governança de projetos e startups |
| 💻 Programação | Python · IA/ML/Ciência de Dados · Pandas, NumPy e gráficos · Pré-processamento e feature engineering · Supervisionado I · Não supervisionado · Supervisionado II · Problemas comuns · Hiperparâmetros e explicabilidade · AutoML/PyCaret · Sistemas de recomendação |

Cada aula tem resumo, 10 questões objetivas (com explicação da correta e de cada alternativa errada) e 5 discursivas com resposta de referência, que aparece depois do envio.

## Simulados

Cada área tem um simulado (`#/<area>/simulado`) com 20 questões objetivas sorteadas de forma equilibrada entre todas as aulas da área. A correção só aparece ao finalizar, junto com o desempenho por aula. As questões vêm das próprias aulas, então uma aula nova entra no sorteio automaticamente. A quantidade fica em `SIM_QTD`, em `js/app.js`.

## Publicar subindo um arquivo só

`python gerar-arquivo-unico.py` gera `publicar/index.html`, com o site inteiro (CSS, JS e aulas) num único arquivo. Para publicar no GitHub Pages sem usar o terminal, basta subir esse arquivo pelo navegador. Rode o script de novo sempre que mudar alguma aula ou estilo.

## Revisão da Sprint 3

`sprint3.html` usa o mesmo código e as mesmas aulas, mas mostra só os assuntos da Sprint 3 e a entrega com checklist. As aulas e os textos dessa página são configurados no próprio `sprint3.html` (`window.PlataformaConfig`), e o progresso fica salvo separado do site completo.
