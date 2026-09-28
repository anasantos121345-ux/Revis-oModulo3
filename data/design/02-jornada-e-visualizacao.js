Plataforma.adicionarAula("design", {
  id: "jornada-usuario-visualizacao",
  titulo: "Jornada do Usuário e Introdução à Visualização de Dados",
  descricao: "A armadilha da linha de base em barras empilhadas, representação de conceitos, personas, mapa de jornada, cenários as-is e to-be.",
  duracao: "45 min",

  resumo: [
    { tipo: "titulo", texto: "A armadilha da linha de base (shifting baseline)" },
    { tipo: "texto", texto: "Imagine um gráfico de <strong>barras empilhadas</strong> com o crescimento de quatro empresas (A, B, C e D) em cinco anos. A empresa A é a caixa apoiada no chão; B e C ficam no meio; D fica no topo." },
    { tipo: "destaque", titulo: "Por que é fácil ver A e difícil ver C?", texto: "A tem uma <strong>linha de base comum</strong> (o eixo zero) em todos os anos, então comparar comprimentos é fácil. C “flutua”: <strong>sua base muda</strong> a cada ano, porque depende do tamanho de A e B abaixo dela. O olho precisa comparar segmentos desalinhados, o que é muito impreciso." },
    { tipo: "exemplo", titulo: "Alternativas para comparar C × B ao longo do tempo", itens: [
      "<strong>Gráfico de linhas</strong> com uma linha por empresa: todas partem do mesmo eixo.",
      "<strong>Barras agrupadas</strong> (lado a lado): cada barra começa no zero.",
      "<strong>Pequenos múltiplos</strong> (small multiples): um gráfico por empresa, na mesma escala."
    ]},

    { tipo: "titulo", texto: "Representar conceitos" },
    { tipo: "texto", texto: "Antes de representar dados, representamos <strong>ideias</strong>. <strong>Wassily Kandinsky</strong> (1866–1944), pioneiro da arte abstrata e professor da Bauhaus, tentou criar uma <strong>sintaxe da linguagem visual</strong> (<em>Ponto e linha sobre plano</em>): um sistema estruturado para expressar significado por forma e cor. <strong>Yayoi Kusama</strong> (1929– ) usa bolinhas e salas infinitas para criar sensações." },
    { tipo: "exemplo", titulo: "Jogo da composição", texto: "Cada pessoa representa, só com adesivos de bolinhas, um termo secreto (<em>nuvem</em>, <em>espaço</em>, <em>direção</em>…). O grupo tenta nomear cada composição. Lição: <strong>codificar</strong> uma ideia visualmente e <strong>decodificá-la</strong> depende de convenções compartilhadas. Quando o outro não decodifica, a representação falhou, mesmo que faça sentido para o autor." },

    { tipo: "titulo", texto: "Ferramentas de design de serviço" },
    { tipo: "subtitulo", texto: "Personas" },
    { tipo: "texto", texto: "Três perspectivas a considerar: quem <strong>usa</strong> a solução, quem <strong>toma decisões</strong> com ela e quem é <strong>afetado</strong> pelo modelo preditivo. Qual é o <strong>usuário principal</strong>?" },
    { tipo: "exemplo", titulo: "Pesquisa de campo: microcrédito no Nordeste (Candello et al., 2016)", texto: "20 entrevistas semiestruturadas, uma semana de campo, 25 h de áudio e 315 fotos com microempreendedores em Icapuí e Fortaleza. A pesquisa revelou práticas informais como o <strong>“fiado”</strong>: venda baseada na confiança e no conhecimento da comunidade, com data de pagamento negociável e sem juros. Mapa de stakeholders, oficina de jornada e cenário futuro geraram <strong>15 oportunidades de inovação</strong> em serviço." },

    { tipo: "subtitulo", texto: "Mapa de jornada (journey map)" },
    { tipo: "tabela", cabecalho: ["Parte do mapa", "Conteúdo"], linhas: [
      ["<strong>Topo</strong>", "um usuário específico, um cenário definido e suas expectativas ou objetivos"],
      ["<strong>Meio</strong>", "fases de alto nível, com as <strong>ações</strong>, os <strong>pensamentos</strong> e as <strong>emoções</strong> do usuário em cada uma"],
      ["<strong>Base</strong>", "conclusões: <strong>oportunidades</strong>, responsabilidades e insights"]
    ]},

    { tipo: "titulo", texto: "Cenário As-is × To-be (IBM Design Thinking)" },
    { tipo: "tabela", cabecalho: ["", "As-is (estado atual)", "To-be (estado futuro)"], linhas: [
      ["Objetivo", "entender a experiência <strong>atual</strong> e identificar oportunidades de melhoria", "desenhar a visão da experiência <strong>futura</strong> com as ideias do time"],
      ["Quando usar", "no início, para revelar o que o time sabe e o que não sabe; ou para organizar dados de pesquisa", "depois de ideação, para refletir como as ideias atendem às necessidades"],
      ["Linhas típicas", "fases/o que o usuário faz · pensando e sentindo · resultado · <strong>pontos negativos</strong> · possibilidades · perguntas", "fases · o que o <strong>sistema faz (backend)</strong> · resposta do sistema · pensando e sentindo · resultado · desafios · <strong>pontos positivos</strong> · perguntas"]
    ]},
    { tipo: "destaque", titulo: "Um bom To-be…", itens: [
      "<strong>se relaciona</strong> com o mapa As-is;",
      "<strong>resolve dores</strong> do usuário ou atende às suas necessidades;",
      "<strong>conta uma história envolvente</strong>."
    ]},
    { tipo: "dica", itens: [
      "Faça o As-is <strong>antes</strong> de pensar em solução: sem ele, o To-be vira lista de desejos.",
      "Inclua o que o <strong>sistema/modelo</strong> faz em cada fase do To-be: isso expõe dependências técnicas cedo.",
      "Vantagens da oficina de jornada: identifica pontos de contato, inovações, pesquisas futuras e falhas no serviço. Desvantagem: pode ter uma visão estreita (só de um tipo de usuário)."
    ]},
    { tipo: "cuidado", itens: [
      "Em barras empilhadas, só o segmento da base (e o total) é fácil de comparar.",
      "Jornada não é fluxograma de telas: inclui <strong>pensamentos e emoções</strong>.",
      "Personas devem incluir quem é <strong>afetado</strong> pelo modelo, mesmo que não o use."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Em um gráfico de barras empilhadas, por que é difícil avaliar se a empresa C (no meio da pilha) cresceu?",
      alternativas: ["Porque C tem cor mais clara", "Porque o segmento de C não tem linha de base comum: sua base muda conforme os segmentos abaixo", "Porque barras empilhadas não mostram totais", "Porque C tem menos dados"],
      correta: 1,
      explicacao: "Só o segmento apoiado no eixo tem base fixa. Os do meio começam em alturas diferentes a cada ano, o que dificulta comparar comprimentos.",
      erros: ["A cor não é o problema principal; a posição, sim.", null, "Barras empilhadas mostram bem o total (altura da pilha).", "O problema é perceptivo, não de quantidade de dados."]
    },
    {
      pergunta: "Para acompanhar a empresa C contra a empresa B ao longo de cinco anos, qual alternativa é melhor que as barras empilhadas?",
      alternativas: ["Gráfico de pizza por ano", "Tabela com cores aleatórias", "Nuvem de palavras", "Gráfico de linhas (ou barras agrupadas) com base comum"],
      correta: 3,
      explicacao: "Com linhas ou barras agrupadas, todas as séries partem do mesmo eixo, o que facilita comparar a evolução.",
      erros: ["Pizzas por ano dificultam ainda mais a comparação temporal.", "Cores aleatórias não resolvem a comparação.", "Nuvem de palavras não representa séries numéricas.", null]
    },
    {
      pergunta: "Qual é a lição principal do jogo da composição?",
      alternativas: ["Uma representação só funciona se o outro consegue decodificá-la; codificar depende de convenções compartilhadas", "Bolinhas são o melhor recurso visual", "O autor sempre sabe explicar melhor", "Arte abstrata não tem significado"],
      correta: 0,
      explicacao: "Representar é codificar uma ideia para que outra pessoa a decodifique. Se o grupo não reconhece o termo, a codificação falhou para aquele público.",
      erros: [null, "O recurso é só um meio; o foco é a comunicação.", "No jogo, o autor não participa da discussão, justamente para testar se a representação se sustenta sozinha.", "Kandinsky buscava justamente uma sintaxe de significado visual."]
    },
    {
      pergunta: "Kandinsky é citado em aula porque:",
      alternativas: ["Criou o gráfico de barras", "Inventou as personas", "Tentou estabelecer uma sintaxe da linguagem visual, expressando significado por forma e cor", "Fundou o Google PAIR"],
      correta: 2,
      explicacao: "Em Ponto e linha sobre plano, Kandinsky propôs uma análise estruturada dos elementos visuais, base para pensar representação.",
      erros: ["O gráfico de barras é atribuído a William Playfair (séc. XVIII).", "Personas foram popularizadas por Alan Cooper no design de software.", null, "Não tem relação com o Google."]
    },
    {
      pergunta: "Na estrutura típica de um mapa de jornada, o que fica na parte do MEIO?",
      alternativas: ["Oportunidades e insights", "As fases, com ações, pensamentos e emoções do usuário", "O logotipo da empresa", "A lista de requisitos técnicos"],
      correta: 1,
      explicacao: "Topo: usuário, cenário e expectativas. Meio: fases com ações, pensamentos e emoções. Base: oportunidades, responsabilidades e insights.",
      erros: ["Oportunidades e insights ficam na base do mapa.", null, "Logotipo não é parte da estrutura.", "Requisitos técnicos não são o foco da jornada."]
    },
    {
      pergunta: "Qual é o objetivo do cenário As-is?",
      alternativas: ["Entender a experiência atual do usuário e identificar oportunidades de melhoria", "Desenhar a experiência futura ideal", "Documentar o código", "Definir o preço do produto"],
      correta: 0,
      explicacao: "O As-is mapeia o estado atual, revela o que o time sabe (e não sabe) e expõe dores e oportunidades.",
      erros: [null, "Desenhar a experiência futura é o papel do To-be, e não do As-is.", "Não é documentação técnica.", "Não é uma ferramenta de precificação."]
    },
    {
      pergunta: "Qual linha costuma aparecer no To-be, mas não no As-is?",
      alternativas: ["Pensando e sentindo", "Fases", "Perguntas", "O que o sistema faz (backend) e a resposta do sistema"],
      correta: 3,
      explicacao: "O To-be mostra como a solução proposta atua em cada fase, incluindo o que o sistema faz nos bastidores.",
      erros: ["Pensamentos e sentimentos aparecem nos dois.", "Fases estruturam os dois mapas.", "Perguntas aparecem nos dois.", null]
    },
    {
      pergunta: "O que caracteriza um bom mapa To-be?",
      alternativas: ["Ignora o As-is para ser mais criativo", "Lista todas as funcionalidades possíveis", "Relaciona-se com o As-is, resolve dores ou necessidades e conta uma história envolvente", "Mostra só o backend"],
      correta: 2,
      explicacao: "Esses são os três critérios do material IBM: conexão com o As-is, resolução de dores e boa narrativa.",
      erros: ["Sem conexão com o As-is, não há como saber se as dores foram resolvidas.", "Listar funcionalidades não conta a experiência do usuário.", null, "O foco continua sendo a experiência do usuário."]
    },
    {
      pergunta: "Na pesquisa sobre microcrédito, o que é o “fiado”?",
      alternativas: ["Venda baseada na confiança e no conhecimento da comunidade, com pagamento futuro negociável e sem juros", "Um aplicativo bancário", "Um tipo de empréstimo com juros altos", "Uma rede social"],
      correta: 0,
      explicacao: "O fiado é uma prática financeira informal descoberta em campo, que revela como a confiança e o conhecimento local funcionam como “sistema de crédito”.",
      erros: [null, "É uma prática informal, não uma tecnologia.", "O fiado não cobra juros: o pagamento é negociado com base na confiança.", "O fiado é uma prática social de confiança, e não uma plataforma digital."]
    },
    {
      pergunta: "Quais três perspectivas de persona o material sugere considerar em projetos com modelos preditivos?",
      alternativas: ["Quem programa, quem testa e quem vende", "Apenas o cliente pagante", "Investidores, concorrentes e reguladores", "Quem usa, quem toma decisões com a solução e quem é afetado pelo modelo"],
      correta: 3,
      explicacao: "Em IA, quem usa, quem decide e quem sofre o impacto da previsão podem ser pessoas diferentes, e todos importam para o design.",
      erros: ["São papéis do time interno, não personas de uso.", "Deixaria de fora os afetados pelo modelo.", "São stakeholders, geralmente indiretos, e não personas de uso.", null]
    }
  ],

  discursivas: [
    "Explique com suas palavras a armadilha da linha de base em barras empilhadas e proponha uma alternativa.",
    "Descreva a estrutura de um mapa de jornada (topo, meio e base) e aplique-a a uma persona do seu projeto.",
    "Construa, em texto, um cenário As-is com três fases para a persona principal do seu projeto, incluindo pensamentos, sentimentos e pontos negativos.",
    "Agora descreva o To-be correspondente, indicando o que o sistema (modelo preditivo) faz em cada fase.",
    "O que o jogo da composição ensina sobre codificar e decodificar informações visuais?"
  ],

  respostasDiscursivas: [
    "Em barras empilhadas, só o segmento da base e o total têm uma <strong>linha de base comum</strong> (o zero). Os segmentos do meio começam em alturas que mudam a cada período, porque dependem do tamanho dos segmentos de baixo. Comparar o comprimento deles ao longo do tempo é muito impreciso: a empresa C pode parecer crescer só porque as de baixo cresceram. <strong>Alternativa:</strong> gráfico de linhas (uma linha por empresa, todas partindo do mesmo eixo), barras agrupadas lado a lado ou pequenos múltiplos na mesma escala.",
    "<strong>Topo:</strong> persona (ex.: Carla, engenheira de validação térmica), cenário (“validar um novo modelo de fogão para o México”) e objetivo (“aprovar com segurança em menos tempo”). <strong>Meio:</strong> fases (planejar testes → simular → testar fisicamente → analisar → aprovar), com as ações, pensamentos (“será que a simulação bate com o real?”) e emoções (ansiedade com prazos, frustração com retrabalho) em cada uma. <strong>Base:</strong> oportunidades (prever temperaturas para priorizar testes), responsabilidades (quem valida) e insights.",
    "<strong>Fase 1: planejar testes.</strong> Faz: define a lista de cenários. Pensa: “preciso testar tudo para garantir?”. Sente: sobrecarga. Ponto negativo: não sabe quais cenários são de risco.<br><strong>Fase 2: simular e testar.</strong> Faz: roda CFD (lento) e agenda o laboratório. Pensa: “o laboratório está lotado”. Sente: impaciência. Ponto negativo: espera longa e custo alto.<br><strong>Fase 3: analisar e aprovar.</strong> Faz: compara simulação e teste em planilhas. Pensa: “por que não bate nesta faixa?”. Sente: insegurança. Ponto negativo: dados desorganizados e decisão demorada.",
    "<strong>Fase 1:</strong> a engenheira informa o novo modelo. <em>Sistema:</em> o modelo preditivo estima a temperatura de cada cenário e destaca os de maior risco. Resultado: lista priorizada; ela se sente no controle.<br><strong>Fase 2:</strong> testa fisicamente só os cenários críticos. <em>Sistema:</em> registra os resultados e compara automaticamente com a previsão. Resultado: menos testes e menos espera.<br><strong>Fase 3:</strong> analisa o painel. <em>Sistema:</em> mostra erro, intervalo de confiança e explicação (SHAP) de cada previsão. Resultado: decisão mais rápida e confiante. Desafio: garantir que o modelo seja confiável também para o México.",
    "Que representar é <strong>codificar</strong> uma ideia em formas visuais, e que a comunicação só funciona se o outro consegue <strong>decodificar</strong>. O mesmo termo (“nuvem”, “direção”) virou composições muito diferentes, e o grupo nem sempre adivinhou. O significado depende de convenções compartilhadas e do repertório de quem lê, e não só da intenção do autor. Para gráficos, isso implica escolher codificações conhecidas pelo público, testar com usuários e não presumir que “está óbvio”."
  ]
});
