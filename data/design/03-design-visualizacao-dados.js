Plataforma.adicionarAula("design", {
  id: "design-visualizacao-dados",
  titulo: "Design e Visualização de Dados",
  descricao: "Perguntar → ver → representar → interpretar; linha, barras, empilhadas, dispersão e histograma; reduzir ruído, criar hierarquia, cor com intenção e acessibilidade.",
  duracao: "50 min",

  resumo: [
    { tipo: "titulo", texto: "Representar é escolher" },
    { tipo: "texto", texto: "Na aula anterior, uma <strong>ideia</strong> precisava ser codificada para ser decodificada por outra pessoa. Agora o <strong>dado</strong> é a matéria-prima: <strong>representar é escolher o que a outra pessoa precisa entender</strong>." },
    { tipo: "destaque", titulo: "Não comece pelo gráfico", texto: "“Tenho uma tabela. Que gráfico eu faço?” Resposta: <strong>ainda não sabemos</strong>. O caminho é:<br><strong>PERGUNTAR → VER → REPRESENTAR → INTERPRETAR</strong>.<br>A etapa que mais pulamos é <strong>VER</strong> (“o que precisamos ver?”), e é nela que a decisão de representação acontece." },

    { tipo: "titulo", texto: "Caso da academia: um dataset, cinco perguntas" },
    { tipo: "texto", texto: "<code>gym.csv</code>: 1.200 alunos, 12 meses; unidade, atividade, idade, frequência, check-ins e gasto." },
    { tipo: "tabela", cabecalho: ["Pergunta", "O que precisamos ver?", "Representação"], linhas: [
      ["Como a frequência mudou ao longo dos meses?", "mudança no tempo (<strong>tendência</strong>)", "<strong>Linha</strong>: continuidade"],
      ["Como as atividades se comparam em nº de alunos?", "maior, menor, diferença (<strong>comparação</strong>)", "<strong>Barras</strong>: magnitude"],
      ["Como cada unidade se compõe por atividade?", "partes e total juntos (<strong>composição</strong>)", "<strong>Barras empilhadas</strong>: parte + total"],
      ["Há relação entre frequência e gasto mensal?", "duas variáveis quantitativas (<strong>relação</strong>)", "<strong>Dispersão</strong>: ponto a ponto"],
      ["Como se distribuem as idades?", "concentração, dispersão, forma, extremos (<strong>distribuição</strong>)", "<strong>Histograma</strong>: intervalos"]
    ]},

    { tipo: "titulo", texto: "Boas práticas por tipo" },
    { tipo: "subtitulo", texto: "📈 Linha (tendência)" },
    { tipo: "lista", itens: ["ordem temporal no eixo X;", "escala legível, sem distorção;", "poucas séries de cada vez;", "anote os momentos-chave (ex.: o pico);", "a linha implica continuidade entre as observações;", "<strong>o eixo Y não precisa começar em zero</strong>."] },
    { tipo: "subtitulo", texto: "📊 Barras (comparação)" },
    { tipo: "lista", itens: ["o comprimento codifica a magnitude, então <strong>o eixo começa em zero</strong>;", "ordene com intenção (ex.: do maior para o menor);", "espaço entre as barras;", "rótulos claros;", "barras <strong>horizontais</strong> para nomes longos."] },
    { tipo: "subtitulo", texto: "🧱 Composição e a pizza" },
    { tipo: "texto", texto: "Barras empilhadas mostram o <strong>total e como ele se compõe</strong>. A pizza funciona para <strong>um único todo</strong>, com <strong>poucas categorias</strong>, para dar uma noção geral. Para comparar com precisão, <strong>as barras facilitam</strong>." },
    { tipo: "subtitulo", texto: "⚬ Dispersão (relação)" },
    { tipo: "lista", itens: ["X e Y representam variáveis; cada observação vira um ponto;", "observe <strong>direção, concentração e possíveis outliers</strong>;", "<strong>correlação não é causalidade</strong>."] },
    { tipo: "subtitulo", texto: "▮▮ Histograma (distribuição)" },
    { tipo: "lista", itens: ["uma variável quantitativa agrupada em <strong>intervalos (bins)</strong>;", "as barras <strong>se encostam</strong> (o eixo é contínuo);", "a largura do bin muda o que conseguimos ver;", "<strong>histograma ≠ gráfico de barras</strong>: barras comparam categorias; histograma mostra a distribuição de um número."] },
    { tipo: "destaque", titulo: "Se eu mudo os intervalos, estou mudando os dados?", texto: "<strong>Não.</strong> Muda a <strong>representação</strong> e, com ela, o que conseguimos ver." },

    { tipo: "titulo", texto: "Escolher o gráfico é só o começo" },
    { tipo: "texto", texto: "O gráfico certo <strong>sustenta</strong> os dados, mas deixa a leitura por conta de quem analisa. <strong>Os melhores gráficos reduzem ruído, criam hierarquia e direcionam a atenção.</strong>" },
    { tipo: "tabela", cabecalho: ["Ação", "Pergunta a fazer"], linhas: [
      ["<strong>Remover ruído</strong>", "O que posso remover (grades, bordas, legendas redundantes, 3D)?"],
      ["<strong>Criar hierarquia</strong>", "O que é principal e o que é apoio?"],
      ["<strong>Direcionar a atenção</strong>", "Para onde quero que olhem primeiro?"],
      ["<strong>Usar cor com intenção</strong>", "O que esta cor está codificando?"],
      ["<strong>Ordenar</strong>", "A ordem está ajudando?"]
    ]},
    { tipo: "exemplo", titulo: "Antes × depois", texto: "<strong>Antes:</strong> título genérico “Alunos por atividade”, barras fora de ordem (Yoga 28, Natação 62, Musculação 84, Corrida 46), todas coloridas.<br><strong>Depois:</strong> título-mensagem <strong>“Musculação tem mais alunos”</strong>, barras ordenadas (84, 62, 46, 28), destaque de cor só em Musculação e as demais em cinza. <em>Mesmo gráfico, menos ruído, mais hierarquia.</em>" },
    { tipo: "subtitulo", texto: "Acessibilidade" },
    { tipo: "lista", itens: [
      "<strong>Funciona para quem tem baixa visão?</strong> Tamanho de fonte, contraste e rótulos diretos.",
      "<strong>Teste da fotocópia:</strong> se o gráfico for impresso em preto e branco, continua legível? Então a informação não depende só da cor.",
      "Evite pares vermelho × verde como única diferença (daltonismo)."
    ]},
    { tipo: "dica", texto: "Referência: Cole Nussbaumer Knaflic, <em>Storytelling com Dados</em>, capítulos 3 a 5 (poluição visual, foco da atenção, pensar como designer). Na ponderada: <strong>escolher</strong> (2,0), <strong>representar</strong> (5,0) e <strong>interpretar</strong> (3,0). Mais de um gráfico pode funcionar, desde que você justifique." },
    { tipo: "cuidado", itens: [
      "Barras com eixo que não começa em zero exageram diferenças.",
      "Linhas ligando categorias sem ordem (atividades) sugerem uma continuidade que não existe.",
      "Pizza com muitas fatias ou várias pizzas lado a lado dificultam a comparação.",
      "Interprete só o que os dados permitem: dispersão mostra associação, não causa."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual é a ordem do caminho proposto para criar uma visualização?",
      alternativas: ["Representar → perguntar → ver → interpretar", "Perguntar → ver → representar → interpretar", "Ver → representar → perguntar → publicar", "Escolher o gráfico → coletar dados → interpretar"],
      correta: 1,
      explicacao: "Tudo começa pela pergunta; depois se define o que é preciso VER; só então se escolhe a representação e, por fim, se interpreta.",
      erros: ["Começar por representar é justamente “começar pelo gráfico”, o que a aula desaconselha.", null, "Sem a pergunta primeiro, não há como decidir o que ver.", "Escolher o gráfico antes da pergunta inverte a lógica."]
    },
    {
      pergunta: "“Como a frequência dos alunos mudou ao longo dos meses?” Qual representação é mais adequada?",
      alternativas: ["Pizza", "Histograma", "Linha", "Dispersão"],
      correta: 2,
      explicacao: "A pergunta é sobre tendência no tempo. A linha mostra continuidade e mudança ao longo dos meses.",
      erros: ["A pizza mostra partes de um todo, e não evolução temporal.", "O histograma mostra a distribuição de uma variável, e não mudança no tempo.", null, "A dispersão relaciona duas variáveis quantitativas; para séries temporais, a linha é mais clara."]
    },
    {
      pergunta: "Em um gráfico de BARRAS, por que o eixo deve começar em zero?",
      alternativas: ["Porque o comprimento da barra codifica a magnitude; cortar o eixo distorce a comparação", "Por estética", "Porque o software exige", "Não precisa começar em zero"],
      correta: 0,
      explicacao: "O leitor compara comprimentos. Se o eixo começa em 50, uma barra de 60 parece o dobro de uma de 55.",
      erros: [null, "É uma questão de honestidade perceptiva, não só de estética.", "Os softwares permitem cortar o eixo, e é justamente por isso que o cuidado é necessário.", "Isso vale para linhas; em barras, o zero é necessário."]
    },
    {
      pergunta: "Qual afirmação sobre histogramas está correta?",
      alternativas: ["É igual a um gráfico de barras de categorias", "Mudar a largura dos intervalos altera os dados originais", "As barras ficam separadas por espaços", "Agrupa uma variável quantitativa em intervalos, e as barras se encostam"],
      correta: 3,
      explicacao: "O histograma representa a distribuição de uma variável numérica contínua em bins adjacentes, por isso as barras se encostam.",
      erros: ["Barras comparam categorias; o histograma mostra a distribuição de um número.", "Muda só a representação (o que conseguimos ver), e não os dados.", "Espaço entre barras é característica do gráfico de barras de categorias.", null]
    },
    {
      pergunta: "Para investigar se existe relação entre frequência de treino e gasto mensal, o melhor gráfico é:",
      alternativas: ["Dispersão", "Pizza", "Barras empilhadas", "Linha do tempo"],
      correta: 0,
      explicacao: "Duas variáveis quantitativas juntas: cada aluno vira um ponto (X = frequência, Y = gasto), e observamos direção, concentração e outliers.",
      erros: [null, "A pizza não relaciona duas variáveis numéricas.", "Barras empilhadas mostram composição.", "Uma linha do tempo exige uma variável temporal no eixo X."]
    },
    {
      pergunta: "Um gráfico de dispersão mostra que quem treina mais gasta mais. Qual conclusão é adequada?",
      alternativas: ["Treinar mais causa gasto maior", "Há uma associação positiva entre frequência e gasto, mas isso não prova causalidade", "Gastar mais causa treinar mais", "Não há relação"],
      correta: 1,
      explicacao: "A dispersão mostra correlação. Pode haver outras variáveis envolvidas (ex.: planos premium incluem mais aulas).",
      erros: ["Afirmar causalidade extrapola o que os dados permitem.", null, "Também é uma afirmação causal sem evidência.", "O padrão descrito indica relação positiva."]
    },
    {
      pergunta: "Quando a pizza é aceitável, segundo a aula?",
      alternativas: ["Para comparar com precisão muitas categorias", "Para mostrar tendência no tempo", "Para um único todo, com poucas categorias e uma noção geral", "Nunca"],
      correta: 2,
      explicacao: "A pizza serve para dar uma noção geral de partes de um único todo, com poucas fatias. Para comparar com precisão, prefira barras.",
      erros: ["Com muitas categorias, ângulos são difíceis de comparar.", "Tendência no tempo pede linha.", null, "Ela tem um uso restrito, mas existe."]
    },
    {
      pergunta: "O que o “teste da fotocópia” verifica?",
      alternativas: ["Se o gráfico cabe em uma folha A4", "Se há erros de digitação", "Se o gráfico pode ser copiado sem autorização", "Se o gráfico continua legível quando impresso em preto e branco, sem depender só da cor"],
      correta: 3,
      explicacao: "Se a informação sobrevive sem cor (usando posição, rótulos, padrões e contraste), o gráfico é mais acessível, inclusive para pessoas com daltonismo.",
      erros: ["O tamanho do papel não é o objetivo.", "Revisão de texto é outra verificação.", "Não tem relação com direitos autorais.", null]
    },
    {
      pergunta: "No “antes × depois” do gráfico de alunos por atividade, qual mudança MELHOR direciona a atenção?",
      alternativas: ["Deixar todas as barras com cores fortes diferentes", "Ordenar as barras e destacar com cor apenas Musculação, com título-mensagem", "Adicionar efeito 3D", "Remover os rótulos das barras"],
      correta: 1,
      explicacao: "Ordenar cria hierarquia, e a cor com intenção (uma barra em destaque, as demais neutras) mais o título-mensagem dizem ao leitor para onde olhar.",
      erros: ["Muitas cores competem entre si e ninguém sabe o que é importante.", null, "O 3D adiciona ruído e distorce a leitura dos comprimentos.", "Rótulos claros são uma boa prática."]
    },
    {
      pergunta: "Qual é o peso de cada critério na ponderada de visualização?",
      alternativas: ["Escolher 2, representar 5, interpretar 3", "Escolher 5, representar 3, interpretar 2", "Todos valem o mesmo", "Só a estética é avaliada"],
      correta: 0,
      explicacao: "Escolher e justificar (2,0), representar com clareza (5,0) e interpretar o que os dados permitem (3,0).",
      erros: [null, "Os pesos estão trocados: representar é o critério de maior peso (5,0).", "Os critérios têm pesos diferentes: 2,0, 5,0 e 3,0.", "Avaliam-se clareza, legibilidade e adequação, e não estética isolada."]
    }
  ],

  discursivas: [
    "Explique com suas palavras por que “não se começa pelo gráfico” e o papel da etapa VER.",
    "Escolha três perguntas sobre os dados do seu projeto e indique, para cada uma, o que precisamos ver e a representação adequada.",
    "Qual é a diferença entre histograma e gráfico de barras? Por que mudar os bins não muda os dados?",
    "Pegue um gráfico que você já fez e descreva como aplicaria: remover ruído, criar hierarquia, direcionar atenção, usar cor com intenção e ordenar.",
    "Explique o teste da fotocópia e outras práticas de acessibilidade em visualização de dados."
  ],

  respostasDiscursivas: [
    "Porque o gráfico é consequência da pergunta. Se escolho o gráfico primeiro, corro o risco de mostrar dados sem responder nada. O caminho é <strong>PERGUNTAR → VER → REPRESENTAR → INTERPRETAR</strong>. A etapa <strong>VER</strong> é decidir o que precisamos enxergar para responder à pergunta: tendência, comparação, composição, relação ou distribuição. É ela que determina a representação adequada (linha, barras, empilhadas, dispersão, histograma).",
    "1) “Como o erro do modelo evoluiu a cada sprint?” → ver <strong>tendência</strong> → gráfico de <strong>linha</strong>.<br>2) “Qual modelo de fogão atinge maior temperatura média?” → ver <strong>comparação</strong> → <strong>barras</strong> ordenadas (eixo a partir do zero).<br>3) “A temperatura aumenta com a potência do queimador?” → ver <strong>relação</strong> → <strong>dispersão</strong>.<br>Extra: “Como se distribuem os erros?” → <strong>histograma</strong>.",
    "O <strong>gráfico de barras</strong> compara <strong>categorias</strong> distintas (modelos, atividades): as barras ficam separadas e a ordem pode ser escolhida. O <strong>histograma</strong> mostra a <strong>distribuição</strong> de uma única variável numérica contínua agrupada em intervalos (bins): as barras se encostam porque o eixo é contínuo. Mudar os bins não muda os dados, porque os valores originais continuam os mesmos. Muda só a <strong>representação</strong>, ou seja, como agrupamos para ver, e por isso vale testar larguras diferentes.",
    "Exemplo: barras com a temperatura média por modelo de fogão.<br><strong>Remover ruído:</strong> tirar grades, bordas, efeito 3D e a legenda redundante; rotular as barras diretamente.<br><strong>Hierarquia:</strong> título-mensagem (“O modelo X aquece 15% acima dos demais”) em destaque e eixos em cinza.<br><strong>Atenção:</strong> destacar só a barra do modelo X.<br><strong>Cor com intenção:</strong> magenta no X e cinza nos outros; a cor codifica “o que importa”.<br><strong>Ordenar:</strong> do maior para o menor, para a comparação ficar imediata.",
    "O <strong>teste da fotocópia</strong> pergunta: se o gráfico for impresso em preto e branco, continua legível? Se sim, a informação não depende só da cor, o que é bom para pessoas com daltonismo e para impressões. Outras práticas: contraste suficiente entre texto e fundo; fontes em tamanho legível para baixa visão; rótulos diretos em vez de legendas distantes; evitar vermelho × verde como única diferença; usar posição, forma ou padrão além da cor; e oferecer texto alternativo ou uma frase-resumo do gráfico."
  ]
});
