Plataforma.adicionarAula("programacao", {
  id: "ml-ia-ciencia-de-dados",
  titulo: "Visão Geral: IA, Machine Learning e Ciência de Dados",
  descricao: "Usos da IA, sistemas baseados em regras × aprendizado, tipos de aprendizado, treinamento e dados estruturados, semiestruturados e não estruturados.",
  duracao: "40 min",

  resumo: [
    { tipo: "titulo", texto: "O que a IA pode fazer" },
    { tipo: "tabela", cabecalho: ["Uso", "Exemplo", "Nome da área"], linhas: [
      ["Prever", "tendências, preferências, eventos a partir do histórico", "modelos preditivos"],
      ["Interpretar imagens", "fotos, vídeos, raio-X", "visão computacional"],
      ["Entender linguagem", "traduzir, reconhecer fala, classificar textos", "PLN (processamento de linguagem natural)"],
      ["Criar conteúdo", "imagens, textos, código", "IA generativa"]
    ]},
    { tipo: "destaque", titulo: "No fundo, só números", texto: "Em nível básico, a IA está <strong>sempre processando valores numéricos</strong>. O salto recente veio de duas tendências: <strong>mais dados</strong> (celulares, redes, transações) e <strong>hardware melhor</strong> (processadores rápidos, armazenamento barato)." },

    { tipo: "titulo", texto: "Regras × aprendizado" },
    { tipo: "tabela", cabecalho: ["", "Sistema especialista (regras)", "Machine Learning (aprendizado)"], linhas: [
      ["Natureza", "<strong>determinístico</strong>", "<strong>probabilístico</strong>"],
      ["Como funciona", "desenvolvedor escreve cada regra manualmente", "algoritmo aprende padrões a partir de exemplos"],
      ["Explicabilidade", "total", "variável (precisa de técnicas como SHAP)"],
      ["Mesma entrada", "sempre a mesma saída", "saída baseada em probabilidades aprendidas"],
      ["Adaptação", "difícil quando o cenário muda", "reaprende com novos dados"]
    ]},
    { tipo: "exemplo", titulo: "Aprovação de financiamento", texto: "<strong>Regras:</strong> se renda &lt; 4.000 → nega; senão, se score &lt; 600 → nega; senão, se comprometimento &gt; 30% → nega; senão aprova.<br><strong>ML:</strong> com 5 milhões de financiamentos históricos (renda, score, idade, cidade, valor do imóvel, <em>atrasou?</em>), o algoritmo descobre sozinho que pessoas de renda menor ainda podem ser boas pagadoras dependendo de outras variáveis." },
    { tipo: "formula", legenda: "A inversão fundamental", texto: "Tradicional: Dados + Regras → Resultados   ·   ML: Dados + Resultados → Regras" },

    { tipo: "titulo", texto: "Machine Learning" },
    { tipo: "texto", texto: "Subárea da IA que desenvolve algoritmos capazes de <strong>aprender padrões a partir de dados</strong> e fazer previsões ou decisões <strong>sem ser explicitamente programados</strong> para cada caso." },
    { tipo: "tabela", cabecalho: ["Tipo", "Dados", "Objetivo", "Exemplo"], linhas: [
      ["<strong>Supervisionado</strong>", "rotulados (um humano marcou a resposta)", "prever o rótulo", "diagnóstico: idade, pressão, colesterol → doente/saudável"],
      ["<strong>Não supervisionado</strong>", "sem rótulos", "descobrir padrões/grupos", "segmentação de clientes sem coluna “tipo de cliente”"],
      ["<strong>Por reforço</strong>", "parcialmente rotulados + recompensas", "aprender a <strong>tomar decisões ao longo do tempo</strong>", "robôs, jogos, controle"]
    ]},
    { tipo: "exemplo", titulo: "Segmentação descoberta pelo algoritmo", texto: "Sem que ninguém informe, um algoritmo pode encontrar: <strong>Grupo 1</strong>, jovens que compram muito e gastam pouco; <strong>Grupo 2</strong>, alta renda com poucas compras caras; <strong>Grupo 3</strong>, perfil intermediário." },

    { tipo: "titulo", texto: "Treinamento" },
    { tipo: "texto", texto: "O modelo é exposto a um <strong>conjunto de treinamento</strong> com milhares a milhões de exemplos. O que todos têm em comum: incluem as <strong>características</strong> que a organização quer que o modelo aprenda." },

    { tipo: "titulo", texto: "Tipos de dados pela organização" },
    { tipo: "tabela", cabecalho: ["Tipo", "Organização", "Exemplos", "Ferramentas"], linhas: [
      ["<strong>Estruturado</strong>", "tabela com schema fixo; cada coluna tem significado definido", "planilhas, MySQL, PostgreSQL, Oracle", "SQL, bancos relacionais"],
      ["<strong>Semiestruturado</strong>", "alguma organização, schema flexível", "JSON, XML, YAML, logs, MongoDB", "NoSQL"],
      ["<strong>Não estruturado</strong>", "sem formato tabular, sem schema", "texto, PDF, imagens, áudio, vídeo, e-mails", "IA, PLN, visão computacional"]
    ]},
    { tipo: "codigo", texto: "{\n  \"nome\": \"João\",\n  \"idade\": 32,\n  \"telefone\": [\"9999-9999\", \"8888-8888\"]\n}\n// JSON: semiestruturado (lista de tamanho variável dentro de um campo)" },
    { tipo: "destaque", titulo: "Ciência de Dados", texto: "Área multidisciplinar (programação, estatística, matemática, ML, bancos de dados) que transforma dados em conhecimento para decisões. Responde: <em>O que aconteceu? Por que aconteceu? O que provavelmente acontecerá? O que devemos fazer?</em>" },
    { tipo: "dica", texto: "Pergunta-chave para escolher o tipo de aprendizado: <strong>“Eu tenho a resposta certa (rótulo) nos dados históricos?”</strong> Sim → supervisionado. Não → não supervisionado. A decisão é sequencial, com recompensa → reforço." },
    { tipo: "cuidado", itens: [
      "Nem todo problema precisa de ML: se as regras são poucas, estáveis e exigem explicabilidade total, um sistema de regras pode ser melhor.",
      "Nos não supervisionados, os grupos encontrados <strong>precisam ser interpretados</strong> por humanos: o algoritmo não dá nome a eles.",
      "JSON não é “não estruturado”: ele tem organização, só que flexível."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual é a diferença essencial entre programação tradicional e Machine Learning?",
      alternativas: ["No ML, regras são escritas à mão e os dados são descartados", "Na programação tradicional, Dados + Regras → Resultados; no ML, Dados + Resultados → Regras", "Não há diferença, só o nome", "ML dispensa dados de treinamento"],
      correta: 1,
      explicacao: "No ML, fornecemos exemplos com as respostas e o algoritmo infere as regras (padrões). Na programação tradicional, o desenvolvedor codifica as regras.",
      erros: ["Isso descreve a programação tradicional (regras manuais), e o ML depende justamente dos dados.", null, "A lógica é invertida: quem produz as regras muda.", "ML depende de dados de treinamento; sem eles não há o que aprender."]
    },
    {
      pergunta: "Um sistema especialista baseado em regras é:",
      alternativas: ["Probabilístico e aprende sozinho", "Determinístico, totalmente explicável e difícil de adaptar a mudanças", "Sempre mais preciso que ML", "Um tipo de aprendizado não supervisionado"],
      correta: 1,
      explicacao: "Sistemas de regras produzem sempre a mesma saída para a mesma entrada (determinísticos), são totalmente explicáveis e exigem reescrever regras quando o cenário muda.",
      erros: ["Probabilístico e com aprendizado são características do ML.", null, "Não há garantia: em problemas complexos, com muitas variáveis, ML costuma superar regras manuais.", "Sistemas de regras não aprendem com dados, então não são nenhum tipo de ML."]
    },
    {
      pergunta: "Um hospital tem dados de pacientes com a coluna “doença cardíaca: sim/não” e quer prever novos casos. Qual tipo de aprendizado usar?",
      alternativas: ["Não supervisionado", "Por reforço", "Supervisionado", "Sistema de regras obrigatoriamente"],
      correta: 2,
      explicacao: "Os dados históricos têm rótulo (sim/não). Com dados rotulados e o objetivo de prever esse rótulo, o aprendizado é supervisionado (classificação).",
      erros: ["Não supervisionado é para dados SEM rótulo. Aqui o rótulo existe.", "Reforço envolve decisões sequenciais com recompensas, e não é o caso.", null, "Não é obrigatório: há dados rotulados suficientes para ML."]
    },
    {
      pergunta: "Uma loja quer descobrir perfis de clientes, mas não tem nenhuma coluna indicando o “tipo de cliente”. Qual abordagem é adequada?",
      alternativas: ["Aprendizado não supervisionado (agrupamento)", "Aprendizado supervisionado (classificação)", "Regressão linear", "Não é possível sem rótulos"],
      correta: 0,
      explicacao: "Sem rótulos, o objetivo é descobrir estruturas nos dados: agrupamento (clustering) é aprendizado não supervisionado.",
      erros: [null, "Classificação exige classes conhecidas (rótulos) no treino.", "Regressão prevê um valor numérico conhecido no histórico, o que não é o objetivo aqui.", "É justamente para isso que existe o aprendizado não supervisionado."]
    },
    {
      pergunta: "O que caracteriza o aprendizado por reforço?",
      alternativas: ["Usa apenas dados totalmente rotulados", "Não usa nenhum tipo de feedback", "Serve só para agrupar dados", "O sistema aprende a tomar decisões ao longo do tempo, com dados parcialmente rotulados"],
      correta: 3,
      explicacao: "A característica definidora do reforço é aprender a decidir ao longo do tempo (sequência de ações), com dados parcialmente rotulados e recompensas.",
      erros: ["Dados totalmente rotulados caracterizam o supervisionado.", "O reforço depende de feedback (recompensas e penalidades).", "Agrupamento é tarefa de aprendizado não supervisionado.", null]
    },
    {
      pergunta: "Um arquivo JSON com campos que variam entre registros é um exemplo de dado:",
      alternativas: ["Estruturado", "Semiestruturado", "Não estruturado", "Binário"],
      correta: 1,
      explicacao: "JSON tem organização (chaves e valores), mas o schema é flexível: registros podem ter campos diferentes. Isso é dado semiestruturado.",
      erros: ["Estruturado exige schema fixo, como uma tabela SQL.", null, "Não estruturado é texto livre, imagem, áudio, sem organização por campos.", "“Binário” não é uma das categorias de organização vistas."]
    },
    {
      pergunta: "Qual item é um exemplo de dado NÃO estruturado?",
      alternativas: ["Tabela de vendas no PostgreSQL", "Planilha Excel com colunas fixas", "Arquivo YAML de configuração", "Gravações de áudio de atendimento ao cliente"],
      correta: 3,
      explicacao: "Áudio não tem organização tabular nem schema. Para extrair informação, é preciso usar técnicas de IA, como reconhecimento de fala.",
      erros: ["Tabela SQL é o exemplo clássico de dado estruturado.", "Planilha com colunas fixas é estruturada.", "YAML é semiestruturado (organização hierárquica flexível).", null]
    },
    {
      pergunta: "Quais duas tendências explicam a aceleração recente da IA?",
      alternativas: ["Menos dados e computadores mais lentos", "Aumento da quantidade de dados e avanços de hardware", "Fim da programação e surgimento do Excel", "Proibição de sistemas de regras"],
      correta: 1,
      explicacao: "Mais dados (celulares, redes sociais, transações) e hardware mais rápido e barato permitiram treinar modelos maiores e mais eficientes.",
      erros: ["É o oposto: há MAIS dados e hardware MAIS rápido.", null, "Programação continua essencial, e o Excel já existia muito antes da aceleração da IA.", "Sistemas de regras continuam sendo usados e não foram proibidos."]
    },
    {
      pergunta: "“Interpretar dados visuais como fotos ou vídeos” corresponde a qual área?",
      alternativas: ["Processamento de linguagem natural", "IA generativa", "Visão computacional", "Sistemas especialistas"],
      correta: 2,
      explicacao: "Visão computacional (computer vision) é a área da IA dedicada a interpretar imagens e vídeos.",
      erros: ["PLN trata de linguagem escrita ou falada.", "IA generativa CRIA conteúdo; interpretar imagens é visão computacional.", null, "Sistemas especialistas seguem regras manuais e não são uma área de interpretação visual."]
    },
    {
      pergunta: "Nos resultados de um algoritmo não supervisionado, os grupos encontrados:",
      alternativas: ["Já vêm com nomes definidos pelo algoritmo", "São sempre iguais às categorias de negócio existentes", "Estão errados, pois não havia rótulos", "Precisam ser analisados e interpretados por humanos"],
      correta: 3,
      explicacao: "O algoritmo encontra estruturas segundo um critério matemático. Dar significado aos grupos (ex.: “clientes premium”) é trabalho de análise humana.",
      erros: ["O algoritmo só atribui números/índices aos grupos, sem nomes com significado.", "Os grupos podem não coincidir com categorias pré-existentes, e muitas vezes revelam perfis novos.", "A ausência de rótulos é o cenário normal do não supervisionado, e não um erro.", null]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre um sistema baseado em regras e um sistema de Machine Learning, usando o exemplo de aprovação de crédito.",
    "Descreva um problema do seu projeto e classifique-o como supervisionado, não supervisionado ou por reforço, justificando.",
    "Dê um exemplo de dado estruturado, semiestruturado e não estruturado que poderia existir no seu projeto.",
    "Em quais situações um sistema de regras seria preferível a um modelo de ML? Justifique.",
    "Explique como “mais dados” e “hardware melhor” contribuíram para os avanços recentes da IA."
  ],

  respostasDiscursivas: [
    "No <strong>sistema de regras</strong>, especialistas escrevem as condições: se renda < 4.000 nega; se score < 600 nega; se comprometimento > 30% nega; senão aprova. É determinístico, totalmente explicável, mas rígido e difícil de adaptar. No <strong>Machine Learning</strong>, fornecemos milhões de financiamentos históricos com o resultado (atrasou ou não), e o algoritmo <strong>aprende</strong> os padrões sozinho, inclusive combinações que ninguém programou (renda menor pode ser bom pagador conforme outras variáveis). É probabilístico: dados + resultados → regras.",
    "Exemplo: prever a temperatura das paredes de um fogão a partir de dados de simulação CFD e testes físicos. É <strong>supervisionado</strong> (regressão), porque os dados históricos têm o valor real medido (o rótulo) e queremos prever um número contínuo para novos cenários. Se o objetivo fosse agrupar modelos de fogão com comportamento térmico parecido, sem rótulo, seria não supervisionado (clustering).",
    "<strong>Estruturado:</strong> tabela de testes físicos (modelo, carga, temperatura ambiente, temperatura medida) em SQL ou CSV. <strong>Semiestruturado:</strong> logs de sensores ou arquivos JSON de configuração das simulações, com campos que variam. <strong>Não estruturado:</strong> relatórios técnicos em PDF, imagens térmicas (câmera infravermelha) ou anotações livres dos engenheiros.",
    "Quando as regras são <strong>poucas, claras e estáveis</strong>; quando é exigida <strong>explicabilidade total</strong> (regulação, auditoria); quando o <strong>custo de um erro é crítico</strong> e é preciso previsibilidade; quando <strong>não há dados</strong> suficientes para treinar; ou quando a prioridade é entregar rápido e barato. Ex.: “bloquear a operação se a temperatura passar de 120 °C” é uma regra de segurança que deve ser determinística, e não uma probabilidade.",
    "<strong>Mais dados:</strong> desde 2014 há mais dispositivos móveis que pessoas, gerando textos, imagens, mapas e transações todos os dias. Modelos precisam de muitos exemplos para aprender padrões complexos. <strong>Hardware melhor:</strong> processadores mais rápidos (incluindo GPUs) e armazenamento mais barato permitem guardar esses dados e treinar modelos muito maiores em tempo viável. Juntos, criaram datasets maiores e treinos mais eficientes, e mais organizações conseguiram adotar IA."
  ]
});
