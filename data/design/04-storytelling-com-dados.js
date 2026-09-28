Plataforma.adicionarAula("design", {
  id: "storytelling-com-dados",
  titulo: "Storytelling com Dados",
  descricao: "Direção e hierarquia de leitura, narrativa em gráficos, arquiteturas de história, contexto do público, demonstração e storyboard.",
  duracao: "45 min",

  resumo: [
    { tipo: "titulo", texto: "Do gráfico à história" },
    { tipo: "texto", texto: "Um gráfico correto <strong>mostra</strong> dados; uma história com dados <strong>conduz</strong> alguém a entender algo e a agir. A pergunta de partida: <strong>“O que eu pretendo revelar ou tornar visível ao leitor com esta imagem?”</strong>" },

    { tipo: "titulo", texto: "Como o olhar lê uma imagem" },
    { tipo: "lista", itens: [
      "<strong>Existe uma direção de leitura, e ela é cultural:</strong> em português, tendemos a ler da esquerda para a direita e de cima para baixo (padrões em Z e F).",
      "<strong>Existe uma hierarquia de leitura:</strong> título, destaque, rótulos e só depois os detalhes.",
      "<strong>Olhamos primeiro para o que se destaca:</strong> cor saturada, tamanho, posição, contraste (atributos pré-atentivos)."
    ]},
    { tipo: "destaque", titulo: "Todo gráfico conta uma narrativa?", texto: "Não necessariamente com clareza: <strong>dependemos da interpretação do leitor</strong>. Por isso o autor precisa <strong>guiar</strong> a leitura: título que afirma a conclusão, destaque no ponto principal, anotações nos momentos-chave." },
    { tipo: "exemplo", titulo: "Título descritivo × título-mensagem", texto: "“Vendas mensais 2025” (descreve) → “<strong>As vendas caíram 30% após a mudança de preço em junho</strong>” (conta a história). O segundo diz ao leitor o que ver antes mesmo de ele olhar o gráfico." },

    { tipo: "titulo", texto: "Arquiteturas de história" },
    { tipo: "tabela", cabecalho: ["Estrutura", "Quando usar"], linhas: [
      ["<strong>Abertura → Desafio → Ação → Resolução</strong>", "apresentar um problema e como a solução o resolve (clássico em pitch e sprint review)"],
      ["<strong>Manchete → Desenvolvimento → Resolução</strong>", "público executivo e com pouco tempo: a conclusão vem primeiro"],
      ["<strong>Ação → Contexto → Desenvolvimento → Clímax → Final</strong>", "prender a atenção começando por um momento forte, depois explicar"]
    ]},
    { tipo: "exemplo", titulo: "Aplicando ao projeto de previsão térmica", itens: [
      "<strong>Abertura:</strong> hoje, cada novo fogão exige dezenas de testes físicos caros.",
      "<strong>Desafio:</strong> simulações CFD demoram e os testes custam caro; o time precisa prever temperaturas com precisão.",
      "<strong>Ação:</strong> um modelo preditivo treinado com simulações e testes estima a temperatura das paredes.",
      "<strong>Resolução:</strong> redução de testes e decisões de projeto mais rápidas, mostrando o erro médio e o intervalo de confiança."
    ]},

    { tipo: "titulo", texto: "Entenda o contexto do seu público" },
    { tipo: "texto", texto: "Assim como uma boa professora de computação quântica adapta a explicação para uma criança, um adolescente, uma estudante universitária e uma especialista, a mesma história de dados muda conforme <strong>quem ouve</strong>: vocabulário, nível de detalhe, métricas e o que essa pessoa precisa decidir." },

    { tipo: "titulo", texto: "Demonstração (demo) do projeto" },
    { tipo: "tabela", cabecalho: ["Pergunta", "Por que importa"], linhas: [
      ["Qual é o <strong>propósito</strong>?", "define o que a demo precisa provar"],
      ["<strong>Por que importa</strong>?", "conecta a demo ao valor para o parceiro"],
      ["Que <strong>tipo</strong> de demo é?", "ao vivo, gravada, protótipo, jornada guiada…"],
      ["Quem é o <strong>público</strong>?", "use o mapa de jornada: escolha uma persona"],
      ["Qual é o <strong>local</strong> e quanto <strong>tempo</strong> há?", "limita o escopo e o nível de detalhe"],
      ["Qual é a <strong>primeira</strong> e a <strong>última cena</strong>?", "a primeira prende a atenção; a última deixa a mensagem"]
    ]},
    { tipo: "passos", itens: [
      "<strong>Esboce:</strong> individualmente, mapeie o fluxo da jornada em um roteiro de demo com até 6 post-its.",
      "<strong>Discuta:</strong> compare os esboços com o grupo.",
      "<strong>Alinhe:</strong> combinem o melhor fluxo final (novo, a partir dos post-its individuais).",
      "<strong>Compartilhe:</strong> fotografe o resultado e publique no Slack do grupo."
    ]},
    { tipo: "dica", itens: [
      "Escreva a <strong>ideia central em uma frase</strong> antes de montar os slides (a “big idea”: ponto de vista + o que está em jogo).",
      "Teste a história de 3 minutos: se você consegue contá-la sem slides, ela está clara.",
      "Use cor só para destacar o que importa; o resto em tons neutros."
    ]},
    { tipo: "cuidado", itens: [
      "Não despeje todos os gráficos da análise exploratória: a apresentação é <strong>explanatória</strong>, com o que sustenta a mensagem.",
      "A direção de leitura é cultural; não pressuponha que todos leem igual.",
      "Uma história envolvente não pode distorcer os dados: mostre incertezas e limitações."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual pergunta orienta a construção de uma visualização com storytelling?",
      alternativas: ["Quantos gráficos cabem em um slide?", "O que eu pretendo revelar ou tornar visível ao leitor com esta imagem?", "Qual é a paleta mais bonita?", "Qual ferramenta é mais moderna?"],
      correta: 1,
      explicacao: "Storytelling começa pela intenção: o que o público precisa ver e entender.",
      erros: ["Mais gráficos não significam mais clareza.", null, "Estética sem intenção não conta uma história.", "A ferramenta é secundária à mensagem."]
    },
    {
      pergunta: "Sobre a direção de leitura de uma imagem, é correto afirmar:",
      alternativas: ["É universal e igual em todas as culturas", "Não influencia a leitura de gráficos", "Sempre começa pelo centro", "É cultural; em português, tendemos a começar pelo canto superior esquerdo"],
      correta: 3,
      explicacao: "A direção de leitura é aprendida culturalmente. Por isso a posição do título e do destaque importa.",
      erros: ["Culturas que leem da direita para a esquerda, por exemplo, percorrem imagens de forma diferente.", "Influencia muito: define onde o olhar começa.", "Não há regra universal de começar pelo centro; o destaque visual pode atrair, mas a direção é cultural.", null]
    },
    {
      pergunta: "Em um gráfico, o que tende a ser notado PRIMEIRO?",
      alternativas: ["O que mais se destaca visualmente (cor, tamanho, contraste, posição)", "As notas de rodapé", "A fonte dos dados", "Os valores do eixo"],
      correta: 0,
      explicacao: "Atributos pré-atentivos, como cor saturada, tamanho e contraste, capturam o olhar antes da leitura consciente.",
      erros: [null, "Rodapés ficam no fim da hierarquia de leitura.", "A fonte dos dados costuma ser lida por último.", "Eixos são elementos de apoio."]
    },
    {
      pergunta: "Qual título conta MELHOR uma história com dados?",
      alternativas: ["“Vendas mensais”", "“Gráfico 1”", "“As vendas caíram 30% após a mudança de preço em junho”", "“Dados de 2025”"],
      correta: 2,
      explicacao: "Um título-mensagem afirma a conclusão e diz ao leitor o que observar.",
      erros: ["É descritivo: diz o tema, mas não a mensagem.", "Não informa nada sobre o conteúdo.", null, "Indica o período, mas não a conclusão."]
    },
    {
      pergunta: "Para uma diretoria com pouquíssimo tempo, qual arquitetura de história é mais adequada?",
      alternativas: ["Ação → Contexto → Desenvolvimento → Clímax → Final", "Manchete → Desenvolvimento → Resolução", "Uma sequência aleatória de gráficos", "Começar pelos detalhes técnicos do modelo"],
      correta: 1,
      explicacao: "Começar pela manchete (a conclusão) garante que a mensagem principal seja entregue mesmo que o tempo acabe.",
      erros: ["Funciona para prender a atenção, mas demora mais a chegar à conclusão.", null, "Sem estrutura não há narrativa.", "Detalhes técnicos primeiro atrasam a mensagem para um público executivo."]
    },
    {
      pergunta: "Na estrutura Abertura → Desafio → Ação → Resolução, o que corresponde à “Ação” em um projeto de IA?",
      alternativas: ["A solução proposta (ex.: o modelo preditivo e como ele funciona)", "O problema do parceiro", "O agradecimento final", "A lista de integrantes"],
      correta: 0,
      explicacao: "A ação é o que foi feito para enfrentar o desafio: a solução e o caminho até ela.",
      erros: [null, "O problema aparece na abertura ou no desafio.", "Agradecimentos não são parte da estrutura narrativa.", "A lista de integrantes não é um elemento da narrativa."]
    },
    {
      pergunta: "Por que adaptar a história ao contexto do público?",
      alternativas: ["Porque cada público tem vocabulário, conhecimento e decisões diferentes a tomar", "Porque isso economiza slides", "Não é necessário adaptar", "Para esconder resultados ruins"],
      correta: 0,
      explicacao: "A mesma análise precisa de enquadramentos diferentes para engenheiros, gestores ou usuários finais, como no exemplo da explicação de computação quântica em vários níveis.",
      erros: [null, "O objetivo é a compreensão, não o número de slides.", "Sem adaptação, a mensagem pode não ser compreendida.", "Adaptar não é distorcer: incertezas e limitações devem ser mostradas."]
    },
    {
      pergunta: "Qual é a primeira fase ao planejar a demonstração do projeto?",
      alternativas: ["Gravar o vídeo final", "Escolher as cores dos slides", "Escrever o código da interface", "Definir propósito, importância, tipo de demo, público, primeira e última cena"],
      correta: 3,
      explicacao: "A fase de definição responde a essas perguntas e gera acordo no grupo antes do roteiro.",
      erros: ["Gravar vem depois de roteirizar.", "Cores são detalhe de execução.", "A demo parte da narrativa, não do código.", null]
    },
    {
      pergunta: "Na atividade de storyboard da demo, qual é a sequência correta?",
      alternativas: ["Compartilhar → esboçar → alinhar → discutir", "Alinhar → esboçar → compartilhar → discutir", "Esboçar individualmente (até 6 post-its) → discutir → alinhar o fluxo final → compartilhar", "Discutir → compartilhar → esboçar"],
      correta: 2,
      explicacao: "Primeiro cada pessoa esboça; depois o grupo compara, combina o melhor fluxo e publica o resultado.",
      erros: ["Compartilhar vem por último, depois do alinhamento.", "Alinhar exige esboços prévios para comparar.", null, "Sem esboços individuais, a discussão perde diversidade de ideias."]
    },
    {
      pergunta: "Qual prática é INADEQUADA em uma apresentação com storytelling?",
      alternativas: ["Mostrar incertezas e limitações do modelo", "Usar título-mensagem", "Incluir todos os gráficos da análise exploratória, mesmo os que não sustentam a mensagem", "Destacar com cor o ponto principal"],
      correta: 2,
      explicacao: "A apresentação é explanatória: selecione o que sustenta a mensagem. Excesso de gráficos dilui a história.",
      erros: ["Transparência sobre limitações aumenta a confiança.", "Título-mensagem é uma boa prática.", null, "Cor com intenção direciona a atenção."]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre mostrar dados e contar uma história com dados.",
    "Escolha uma arquitetura de história e escreva o roteiro da apresentação do seu projeto seguindo-a.",
    "Reescreva três títulos descritivos de gráficos do seu projeto como títulos-mensagem.",
    "Planeje a demo do seu projeto respondendo: propósito, por que importa, tipo, público, local, tempo, primeira e última cena.",
    "Como você adaptaria a mesma história para (a) o time técnico do parceiro e (b) a diretoria?"
  ],

  respostasDiscursivas: [
    "<strong>Mostrar dados</strong> é apresentar números ou gráficos e deixar a interpretação por conta do leitor, que pode não ver o que importa ou concluir outra coisa. <strong>Contar uma história com dados</strong> é conduzir o público: definir a mensagem principal (o que quero que ele entenda e faça), escolher só os dados que a sustentam, criar hierarquia visual (título-mensagem, destaques, anotações) e organizar em uma narrativa com começo, conflito e resolução, adaptada à audiência.",
    "<strong>Abertura → Desafio → Ação → Resolução</strong><br><strong>Abertura:</strong> cada novo fogão precisa de dezenas de testes físicos e simulações demoradas.<br><strong>Desafio:</strong> testes são caros, o laboratório é gargalo e os dados de Brasil e México estão desorganizados.<br><strong>Ação:</strong> treinamos um modelo com CFD e testes físicos que prevê a temperatura das paredes (mostrar o fluxo e os três modelos comparados).<br><strong>Resolução:</strong> erro médio de X °C, com Y% menos testes necessários; próximos passos e limitações.",
    "1) “Erro do modelo por sprint” → “<strong>O erro caiu de 8 °C para 3 °C em três sprints</strong>”.<br>2) “Temperatura por modelo de fogão” → “<strong>O modelo X é o único acima do limite de segurança</strong>”.<br>3) “Comparação de modelos” → “<strong>Random Forest tem o menor erro e continua explicável</strong>”.<br>O título-mensagem afirma a conclusão que o gráfico sustenta.",
    "<strong>Propósito:</strong> mostrar que o modelo prevê a temperatura com precisão suficiente para priorizar testes. <strong>Por que importa:</strong> reduz custos e tempo de desenvolvimento. <strong>Tipo:</strong> jornada guiada ao vivo no protótipo, com dados reais. <strong>Público:</strong> a engenheira de validação (persona do mapa de jornada) e a gestão do parceiro. <strong>Local e tempo:</strong> Sprint Review, cerca de 7 minutos. <strong>Primeira cena:</strong> a engenheira diante de uma lista de 40 testes para agendar. <strong>Última cena:</strong> o painel mostrando os 8 cenários críticos e a economia estimada.",
    "<strong>(a) Time técnico:</strong> foco no <em>como</em>: dados usados (CFD + testes), pré-processamento, modelos comparados, métricas (MAE, RMSE por faixa), validação cruzada, explicabilidade (SHAP), limitações e erros por cenário. Vocabulário técnico, mais detalhes e espaço para perguntas.<br><strong>(b) Diretoria:</strong> estrutura “manchete primeiro”: a conclusão e o impacto no negócio (custo, tempo, risco), em poucas métricas em linguagem simples (“erra em média 2 °C”), com a decisão que precisa ser tomada. Detalhes técnicos só no apêndice."
  ]
});
