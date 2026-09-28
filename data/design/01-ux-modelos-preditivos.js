Plataforma.adicionarAula("design", {
  id: "ux-modelos-preditivos",
  titulo: "Experiência do Usuário com Modelos Preditivos",
  descricao: "Quando usar IA, automatizar × ampliar, anatomia de uma previsão, limiar de confiança, precisão × recall, stakeholders e personas.",
  duracao: "50 min",

  resumo: [
    { tipo: "titulo", texto: "Por que UX importa em IA" },
    { tipo: "texto", texto: "Ignorar as pessoas no desenvolvimento de IA tem consequências reais: chatbots que dão informações erradas sobre direitos trabalhistas, robotáxis que precisam de humanos para fechar portas, conversas com IA associadas a danos à saúde mental. <strong>Um modelo tecnicamente bom pode falhar na experiência</strong>." },

    { tipo: "titulo", texto: "Quando a IA é (e não é) uma boa escolha" },
    { tipo: "tabela", cabecalho: ["IA costuma ser boa para…", "IA provavelmente não é a melhor para…"], linhas: [
      ["<strong>Personalização:</strong> recomendações e experiências sob medida", "<strong>Previsibilidade:</strong> quando o usuário precisa de elementos fixos e confiáveis"],
      ["<strong>Previsões:</strong> estimar valores ou eventos futuros", "<strong>Dados estáticos:</strong> informações simples que não mudam"],
      ["<strong>Reconhecimento:</strong> padrões, rostos, vozes, objetos", "<strong>Erros críticos:</strong> quando o custo da falha é muito alto"],
      ["<strong>Anomalias:</strong> fraudes e eventos raros e dinâmicos", "<strong>Transparência total:</strong> quando se exige explicabilidade completa"],
      ["<strong>Automação:</strong> tarefas repetitivas com variação", "<strong>Velocidade/custo:</strong> quando a prioridade é entregar rápido e barato"]
    ]},
    { tipo: "texto", texto: "Referência: guia <em>People + AI</em> (PAIR) do Google, capítulo “User Needs”." },
    { tipo: "destaque", titulo: "Automatizar ou ampliar?", itens: [
      "<strong>Automatizar:</strong> a IA faz a tarefa no lugar da pessoa (bom para tarefas chatas, repetitivas ou perigosas).",
      "<strong>Ampliar (augment):</strong> a IA ajuda a pessoa a fazer melhor (bom quando a pessoa gosta da tarefa, tem responsabilidade sobre ela ou precisa manter o controle).",
      "Perguntas-guia: <em>O que é previsto? Quem é afetado por isso?</em>"
    ]},

    { tipo: "titulo", texto: "Anatomia de uma previsão de IA" },
    { tipo: "passos", itens: [
      "<strong>Dados de treino rotulados</strong> (labeled training data), com a <strong>verdade de referência</strong> (ground truth): a resposta correta conhecida de cada exemplo.",
      "Um <strong>classificador</strong> (classifier), que aprende a separar as classes.",
      "<strong>Limiares de confiança</strong> (confidence thresholds): a partir de que probabilidade (ex.: 85%) o sistema “afirma” algo."
    ]},

    { tipo: "titulo", texto: "Três métricas, três perguntas" },
    { tipo: "tabela", cabecalho: ["Métrica", "Fórmula", "Pergunta", "Use quando…"], linhas: [
      ["<strong>Acurácia</strong>", "acertos / total", "Quanto acerto no geral?", "as classes são equilibradas"],
      ["<strong>Precisão</strong>", "VP / (VP + FP)", "Quando digo “positivo”, confio no alarme?", "o <strong>falso positivo</strong> custa caro (acusar inocente, bloquear cartão legítimo)"],
      ["<strong>Recall</strong> (sensibilidade)", "VP / (VP + FN)", "Dos positivos reais, quantos descobri?", "o <strong>falso negativo</strong> custa caro (doença grave, fraude)"]
    ]},
    { tipo: "exemplo", titulo: "Jogo “duas verdades e uma mentira” (classe positiva = “é mentira”)", texto: "6 pessoas, 18 frases: 12 mentiras e 6 verdades.<br><strong>Aluna A</strong> (limiar 85%, só acusa com certeza): acusa 6 frases → VP 6, FP 0, FN 6, VN 6 → <strong>precisão 100%, recall 50%</strong>, acurácia 67%. Ninguém foi acusado injustamente, mas 6 mentiras passaram.<br><strong>Aluno B</strong> (limiar 40%, desconfia de tudo): acusa 16 → VP 12, FP 4, FN 0, VN 2 → <strong>precisão 75%, recall 100%</strong>, acurácia 78%. Pegou todas as mentiras, mas acusou 4 inocentes." },
    { tipo: "destaque", titulo: "A lição de UX", texto: "Mesmas frases, mesmo “modelo”: o que muda é o <strong>limiar de confiança</strong>. E a acurácia (67% × 78%) <strong>esconde</strong> essa diferença. A pergunta de design é: <strong>qual erro custa mais para as pessoas afetadas?</strong> Nenhuma métrica sozinha descreve o modelo." },

    { tipo: "titulo", texto: "Stakeholders" },
    { tipo: "texto", texto: "R. Edward Freeman (<em>Strategic Management</em>, 1984) desenvolveu a Teoria dos Stakeholders: <strong>“stakeholders são qualquer grupo que afeta ou é afetado pela organização”</strong>. Em português: públicos de interesse ou partes interessadas." },
    { tipo: "tabela", cabecalho: ["Componente do mapa de stakeholders", "O que é"], linhas: [
      ["<strong>Usuário central</strong>", "a persona fica no centro, reforçando a centralidade no usuário"],
      ["<strong>Stakeholders diretos</strong>", "interagem diretamente com o usuário ou o produto (suporte, administradores)"],
      ["<strong>Stakeholders indiretos</strong>", "influenciam à distância (reguladores, concorrentes, alta liderança)"],
      ["<strong>Relações</strong>", "linhas ou agrupamentos mostrando interação e dependência"],
      ["<strong>Necessidades</strong>", "conectam os requisitos do usuário aos componentes do sistema"]
    ]},
    { tipo: "texto", texto: "A <strong>matriz poder × interesse</strong> ajuda a priorizar: alto poder e alto interesse → gerenciar de perto; alto poder e baixo interesse → manter satisfeito; baixo poder e alto interesse → manter informado; baixo e baixo → monitorar." },

    { tipo: "titulo", texto: "Personas" },
    { tipo: "texto", texto: "Personagens baseados em pesquisa que representam quem <strong>usa</strong>, quem <strong>toma decisões</strong> com a solução e quem é <strong>afetado</strong> pelo modelo preditivo. Para cada persona: <strong>perfil</strong>, <strong>dores</strong> e <strong>necessidades</strong> em relação ao problema, e <strong>como a solução ajuda ou afeta</strong> essa pessoa." },
    { tipo: "dica", itens: [
      "Antes de escolher o algoritmo, pergunte: <strong>a IA automatiza ou amplia?</strong> e <strong>quem é afetado pelo erro?</strong>",
      "Escolha a métrica que reflete o erro mais crítico do seu projeto e ajuste o limiar de acordo."
    ]},
    { tipo: "cuidado", itens: [
      "Acurácia alta pode esconder um modelo inútil em bases desbalanceadas.",
      "Stakeholder não é só quem usa: quem é <strong>afetado</strong> pela previsão também conta.",
      "Personas inventadas sem pesquisa viram estereótipos."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Segundo o guia PAIR, em qual situação a IA provavelmente NÃO é a melhor solução?",
      alternativas: ["Detectar fraudes raras e dinâmicas", "Recomendar conteúdos personalizados", "Quando o custo de um erro é crítico e se exige explicabilidade total", "Reconhecer vozes"],
      correta: 2,
      explicacao: "Erros críticos e necessidade de transparência total são sinais de que regras determinísticas ou processos humanos podem ser melhores que um modelo probabilístico.",
      erros: ["Anomalias (fraudes raras e dinâmicas) são um bom uso de IA.", "Personalização é um uso clássico de IA.", null, "Reconhecimento (vozes, rostos, objetos) é um bom uso de IA."]
    },
    {
      pergunta: "Qual é a diferença entre “automatizar” e “ampliar” com IA?",
      alternativas: ["Não há diferença", "Automatizar: a IA executa a tarefa no lugar da pessoa; ampliar: a IA ajuda a pessoa a executar melhor, mantendo-a no controle", "Ampliar significa usar mais dados", "Automatizar exige sempre um humano aprovando cada saída"],
      correta: 1,
      explicacao: "Ampliar (augment) é indicado quando a pessoa precisa ou quer manter controle e responsabilidade; automatizar, quando a tarefa pode ser delegada.",
      erros: ["A escolha muda completamente o design da experiência.", null, "Ampliar é sobre o papel da pessoa, não sobre volume de dados.", "Se um humano aprova cada saída, a IA está ampliando, e não automatizando."]
    },
    {
      pergunta: "O que é ground truth (verdade de referência)?",
      alternativas: ["A resposta correta conhecida de cada exemplo nos dados rotulados", "A previsão do modelo", "O limiar de confiança", "A opinião do usuário final"],
      correta: 0,
      explicacao: "Ground truth é o rótulo verdadeiro usado para treinar e avaliar o classificador.",
      erros: [null, "A previsão é a saída do modelo, comparada com a ground truth.", "O limiar define quando o modelo “afirma”; não é o rótulo real.", "Opinião não é, necessariamente, a verdade de referência."]
    },
    {
      pergunta: "Precisão é calculada como:",
      alternativas: ["VP / (VP + FN)", "(VP + VN) / total", "FP / total", "VP / (VP + FP)"],
      correta: 3,
      explicacao: "Precisão = das vezes em que o modelo disse “positivo”, quantas estavam certas: VP / (VP + FP).",
      erros: ["Essa é a fórmula do recall.", "Essa é a fórmula da acurácia.", "Isso mede a proporção de falsos positivos no total, não a precisão.", null]
    },
    {
      pergunta: "Em um sistema de diagnóstico de doença grave, qual métrica priorizar?",
      alternativas: ["Precisão, porque falsos positivos são o pior erro", "Recall, porque deixar um doente sem diagnóstico (falso negativo) custa muito caro", "Acurácia, sempre", "Nenhuma métrica importa"],
      correta: 1,
      explicacao: "Quando deixar passar é grave, é preciso encontrar o máximo de positivos reais, e isso é o recall.",
      erros: ["Aqui o falso NEGATIVO é mais grave que o falso positivo.", null, "A acurácia engana quando a doença é rara.", "A escolha da métrica é uma decisão central de design."]
    },
    {
      pergunta: "No jogo das mentiras, a Aluna A (limiar 85%) teve VP = 6, FP = 0 e FN = 6. Quais são sua precisão e seu recall?",
      alternativas: ["Precisão 50%, recall 100%", "Precisão 75%, recall 100%", "Precisão 100%, recall 50%", "Precisão 67%, recall 67%"],
      correta: 2,
      explicacao: "Precisão = 6/(6 + 0) = 100%: ninguém foi acusado injustamente. Recall = 6/(6 + 6) = 50%: metade das mentiras passou.",
      erros: ["Está invertido: com FP = 0 a precisão é máxima, e com 6 mentiras não detectadas o recall é baixo.", "Esses são os valores do Aluno B.", null, "67% é a acurácia da Aluna A, e não sua precisão nem seu recall."]
    },
    {
      pergunta: "O Aluno B baixou o limiar de confiança para 40%. O que tende a acontecer?",
      alternativas: ["O recall aumenta e a precisão tende a cair, com mais falsos positivos", "A precisão aumenta e o recall cai", "Nada muda", "O modelo deixa de funcionar"],
      correta: 0,
      explicacao: "Com um limiar mais baixo, o modelo acusa mais: encontra mais positivos reais (recall ↑), mas também acusa mais inocentes (precisão ↓).",
      erros: [null, "Esse é o efeito de SUBIR o limiar.", "O limiar muda diretamente a matriz de confusão.", "Continua funcionando, com outro equilíbrio entre os erros."]
    },
    {
      pergunta: "Segundo Freeman, stakeholders são:",
      alternativas: ["Apenas os acionistas", "Apenas os usuários finais", "Os funcionários de TI", "Qualquer grupo que afeta ou é afetado pela organização"],
      correta: 3,
      explicacao: "A definição de Freeman (1984) é ampla: inclui usuários, clientes, reguladores, comunidade e todos que afetam ou são afetados.",
      erros: ["Acionistas são um tipo de stakeholder (shareholders), e não todos.", "Usuários são apenas parte dos stakeholders.", "É uma visão restrita demais.", null]
    },
    {
      pergunta: "No mapa de stakeholders, órgãos reguladores e concorrentes são exemplos de:",
      alternativas: ["Usuário central", "Stakeholders indiretos", "Stakeholders diretos", "Personas"],
      correta: 1,
      explicacao: "Stakeholders indiretos influenciam o projeto à distância, sem interagir diretamente com o produto.",
      erros: ["O usuário central é a persona no centro do mapa.", null, "Os diretos interagem com o usuário ou com o produto (suporte, administradores).", "Personas representam usuários ou afetados, e não entidades como reguladores."]
    },
    {
      pergunta: "Quais informações uma persona deve conter para um projeto com modelo preditivo?",
      alternativas: ["Só nome e foto", "A arquitetura do modelo", "Perfil, dores, necessidades em relação ao problema e como a solução a ajuda ou afeta", "Apenas dados demográficos"],
      correta: 2,
      explicacao: "A persona precisa conectar a pessoa ao problema e à solução: quem é, o que dói, do que precisa e como o modelo muda sua experiência.",
      erros: ["Nome e foto sozinhos não orientam decisões de design.", "A arquitetura técnica não faz parte da persona.", null, "Dados demográficos sem dores e necessidades formam um estereótipo."]
    }
  ],

  discursivas: [
    "Explique com suas palavras por que um modelo preditivo com boa acurácia pode gerar uma experiência ruim para as pessoas.",
    "A solução do seu projeto deve automatizar ou ampliar o trabalho do usuário? Justifique.",
    "Explique a relação entre limiar de confiança, precisão e recall usando o exemplo do jogo das mentiras.",
    "No seu projeto, qual erro custa mais: falso positivo ou falso negativo? Para quem? Qual métrica você priorizaria?",
    "Descreva o mapa de stakeholders do seu projeto: usuário central, stakeholders diretos e indiretos, e as incógnitas."
  ],

  respostasDiscursivas: [
    "Acurácia mede acertos no geral, não a experiência. Um modelo pode acertar 95% e, mesmo assim: errar justamente nos casos mais graves (falsos negativos custosos); esconder o fracasso em uma classe rara (base desbalanceada); dar respostas sem explicação, gerando desconfiança; errar mais para certos grupos de pessoas; ou ser integrado a um fluxo que não atende às necessidades reais de quem usa. A experiência depende de quem é afetado pelos erros, de como a previsão é apresentada e de o usuário conseguir entender, contestar e corrigir.",
    "Exemplo: <strong>ampliar</strong>. O modelo prevê a temperatura das paredes para ajudar os engenheiros a decidir quais protótipos precisam de teste físico, mas a decisão final sobre segurança continua com eles, que têm a responsabilidade técnica e o conhecimento do domínio. Automatizar totalmente a aprovação seria arriscado, porque o custo de um erro é alto (segurança do consumidor) e há exigência de explicabilidade. A IA acelera o trabalho, e o humano mantém o controle.",
    "O modelo dá uma probabilidade, e o <strong>limiar</strong> decide a partir de quanto ele “acusa”. A Aluna A usou limiar alto (85%): acusou só 6 frases, todas mentiras → precisão 100% (nenhum inocente acusado), mas recall 50% (6 mentiras passaram). O Aluno B usou limiar baixo (40%): acusou 16 → recall 100% (pegou todas), mas precisão 75% (4 inocentes acusados). Subir o limiar aumenta a precisão e reduz o recall; baixar faz o contrário. A acurácia (67% × 78%) esconde esse trade-off.",
    "Se o modelo indica se o fogão ultrapassa o limite de temperatura, o pior erro é o <strong>falso negativo</strong>: dizer que está seguro quando não está. Quem paga é o <strong>consumidor</strong> (risco de queimadura) e a <strong>empresa</strong> (recall de produto, reputação). O falso positivo gera só um teste físico extra. Priorizaria o <strong>recall</strong> da classe “acima do limite”, com limiar mais baixo, aceitando alguns alarmes falsos.",
    "<strong>Usuário central:</strong> o engenheiro térmico que projeta e valida os fogões. <strong>Diretos:</strong> equipe de testes físicos, time de simulação CFD, time de dados/TI que mantém o modelo, gestão de produto. <strong>Indiretos:</strong> órgãos reguladores e de certificação (normas de segurança), consumidores finais, alta liderança, fornecedores e as operações do Brasil e do México. <strong>Relações:</strong> CFD e testes alimentam o modelo; engenheiros decidem; reguladores definem limites. <strong>Incógnitas (?):</strong> quem aprova a redução de testes, como a certificação aceita resultados de IA e qual é o volume real de dados no México."
  ]
});
