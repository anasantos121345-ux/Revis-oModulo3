Plataforma.adicionarAula("negocios", {
  id: "cultura-organizacional",
  titulo: "Cultura Organizacional",
  descricao: "Conceito de Edgar Schein, os 3 níveis da cultura, cultura forte e fraca, subculturas, tipos de cultura, cultura digital e mudança cultural.",
  duracao: "45 min",

  resumo: [
    { tipo: "titulo", texto: "O que é cultura organizacional" },
    { tipo: "texto", texto: "<strong>Edgar Schein</strong>, professor do MIT Sloan e PhD em Psicologia Social por Harvard, popularizou o conceito de <strong>cultura organizacional</strong> nos anos 1980." },
    { tipo: "destaque", titulo: "Em essência", texto: "São <strong>crenças e valores</strong> que, de tão bem-sucedidos e repetidos, <strong>se naturalizam e deixam de ser questionados</strong>, passando a orientar a percepção, o pensamento e o comportamento do grupo." },
    { tipo: "texto", texto: "Para Schein, a cultura é um padrão de <strong>pressupostos básicos compartilhados</strong> que o grupo aprendeu ao resolver problemas de <strong>adaptação externa</strong> (mercado, clientes) e de <strong>integração interna</strong> (como trabalhamos juntos). Como funcionou bem o bastante, passa a ser ensinado aos novos membros como “o jeito certo” de agir." },

    { tipo: "titulo", texto: "Os 3 níveis da cultura (Schein)" },
    { tipo: "tabela", cabecalho: ["Nível", "O que é", "Exemplos", "Visibilidade"], linhas: [
      ["<strong>1. Artefatos</strong>", "estruturas e processos visíveis: o que se vê, ouve e sente", "layout do escritório, vestimenta, linguagem, rituais, cerimônias, organograma, logos, “puffs e videogame”", "<strong>alta</strong>, mas difícil de decifrar sozinha"],
      ["<strong>2. Crenças e valores expostos (declarados)</strong>", "estratégias, objetivos e filosofias declaradas", "missão, visão, valores na parede, código de conduta, discurso da liderança", "média"],
      ["<strong>3. Pressupostos básicos subjacentes</strong>", "crenças <strong>inconscientes</strong>, tidas como certas, que determinam o comportamento", "“o cliente sempre tem razão”, “errar é inaceitável”, “quem fica até tarde é mais comprometido”", "<strong>baixa</strong>, e é a essência da cultura"]
    ]},
    { tipo: "exemplo", titulo: "Quando os níveis não batem", texto: "Na parede: “<strong>Inovação e ousadia</strong>” (valor declarado). Na prática, qualquer erro é punido publicamente e toda decisão precisa de três aprovações. O <strong>pressuposto real</strong> é “errar é perigoso”, e é ele, não o cartaz, que guia o comportamento. Para entender uma cultura, observe o que as pessoas <strong>fazem</strong>, e não só o que a empresa <strong>diz</strong>." },
    { tipo: "destaque", titulo: "Analogia do iceberg", texto: "Artefatos ficam <strong>acima da água</strong>. Valores declarados, na linha d'água. Os pressupostos básicos são a <strong>grande parte submersa</strong>, onde está o que realmente sustenta a cultura." },

    { tipo: "titulo", texto: "Características e conceitos" },
    { tipo: "lista", itens: [
      "<strong>Cultura forte:</strong> valores intensamente compartilhados e praticados. Dá coesão e identidade, mas pode dificultar mudanças.",
      "<strong>Cultura fraca:</strong> pouco consenso, e comportamentos variam muito.",
      "<strong>Subculturas:</strong> áreas, unidades ou equipes podem ter culturas próprias (engenharia × vendas).",
      "<strong>Papel dos fundadores e líderes:</strong> suas crenças moldam a cultura inicial; o que o líder <strong>presta atenção, mede, recompensa e pune</strong> ensina a cultura.",
      "<strong>Socialização:</strong> onboarding, histórias e rituais transmitem a cultura aos novos membros."
    ]},
    { tipo: "subtitulo", texto: "Tipos de cultura (Competing Values Framework, Cameron e Quinn)" },
    { tipo: "tabela", cabecalho: ["Tipo", "Foco", "Exemplo de valor"], linhas: [
      ["Clã", "colaboração, pessoas, família", "“cuidamos uns dos outros”"],
      ["Adhocracia", "inovação, risco, criatividade", "“teste rápido, aprenda rápido”"],
      ["Mercado", "resultados, competição, metas", "“bater a meta é o que importa”"],
      ["Hierarquia", "controle, processos, estabilidade", "“siga o procedimento”"]
    ]},

    { tipo: "titulo", texto: "Existe cultura digital?" },
    { tipo: "texto", texto: "Cultura digital não é ter ferramentas modernas (isso é artefato). É ter pressupostos como: <strong>decisões baseadas em dados</strong>, <strong>experimentação e aprendizado com o erro</strong>, <strong>foco no cliente</strong>, colaboração entre áreas e <strong>autonomia com responsabilidade</strong>. Uma empresa pode ter a melhor IA e continuar decidindo “pela intuição do chefe”." },
    { tipo: "exemplo", titulo: "Aplicando ao projeto", texto: "Para o modelo preditivo ser adotado pelo parceiro, não basta ter boa acurácia: a cultura precisa confiar em dados e aceitar mudar processos. Se o pressuposto for “o engenheiro experiente sempre sabe mais”, a solução pode ser ignorada. Envolver usuários, explicar o modelo (SHAP) e mostrar ganhos rápidos ajuda." },

    { tipo: "titulo", texto: "Mudar uma cultura" },
    { tipo: "passos", itens: [
      "Diagnosticar os três níveis, principalmente os pressupostos reais.",
      "Líderes darem o exemplo (coerência entre discurso e prática).",
      "Alinhar sistemas: metas, recompensas, promoções, processos de contratação.",
      "Criar e celebrar novas histórias de sucesso.",
      "Ter paciência: pressupostos mudam devagar."
    ]},
    { tipo: "dica", texto: "Na prova, identifique o nível pela <strong>visibilidade</strong>: dá para ver ou fotografar? <strong>Artefato</strong>. Está escrito ou declarado? <strong>Valor exposto</strong>. É uma crença inconsciente que ninguém questiona? <strong>Pressuposto básico</strong>." },
    { tipo: "cuidado", itens: [
      "Valores escritos na parede <strong>não são</strong> a cultura inteira: são o nível intermediário.",
      "Artefatos são fáceis de ver e <strong>difíceis de interpretar</strong> sem conhecer os níveis mais profundos.",
      "Mudar só artefatos (escritório descolado) sem mudar pressupostos não muda a cultura."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Quem conceituou e tornou conhecido o termo “cultura organizacional”, propondo seus três níveis?",
      alternativas: ["Peter Drucker", "Edgar Schein", "Henry Mintzberg", "Frederick Taylor"],
      correta: 1,
      explicacao: "Edgar Schein, do MIT Sloan, conceituou a cultura organizacional e propôs os níveis de artefatos, valores expostos e pressupostos básicos.",
      erros: ["Drucker é referência em gestão (“a cultura come a estratégia no café da manhã” é atribuída a ele), mas não criou o modelo dos três níveis.", null, "Mintzberg é referência em estrutura e design organizacional.", "Taylor é o pai da Administração Científica."]
    },
    {
      pergunta: "O layout aberto do escritório, a forma de se vestir e os rituais de comemoração pertencem a qual nível da cultura?",
      alternativas: ["Pressupostos básicos", "Valores expostos", "Artefatos", "Subculturas"],
      correta: 2,
      explicacao: "Artefatos são o nível mais visível: estruturas, processos, ambiente físico, linguagem e rituais.",
      erros: ["Pressupostos são crenças inconscientes, e não elementos visíveis.", "Valores expostos são o que a empresa declara (missão, valores).", null, "Subculturas são culturas de grupos específicos, e não um dos três níveis."]
    },
    {
      pergunta: "A missão, a visão e os valores publicados no site da empresa correspondem a:",
      alternativas: ["Crenças e valores expostos (declarados)", "Pressupostos básicos subjacentes", "Artefatos", "Governança corporativa"],
      correta: 0,
      explicacao: "São as estratégias, objetivos e filosofias declaradas: o que a organização diz que valoriza.",
      erros: [null, "Pressupostos básicos não costumam estar escritos: são inconscientes.", "Embora publicados, o conteúdo desses textos é o nível dos valores declarados.", "Governança é o sistema de direção e controle, e não um nível cultural."]
    },
    {
      pergunta: "Qual nível da cultura é considerado sua essência, e o mais difícil de perceber e mudar?",
      alternativas: ["Artefatos", "Valores expostos", "Organograma", "Pressupostos básicos subjacentes"],
      correta: 3,
      explicacao: "Os pressupostos básicos são crenças inconscientes, tidas como verdades, que realmente guiam o comportamento.",
      erros: ["Artefatos são o nível mais superficial e visível.", "Valores declarados são conscientes e explícitos.", "O organograma é um artefato.", null]
    },
    {
      pergunta: "Uma empresa declara “inovação” como valor, mas pune qualquer erro. Segundo Schein, o comportamento das pessoas tende a seguir:",
      alternativas: ["O valor declarado de inovação", "O pressuposto real de que errar é perigoso", "O layout do escritório", "Nenhum dos dois"],
      correta: 1,
      explicacao: "Quando valores declarados e pressupostos divergem, o comportamento segue os pressupostos, aquilo que as pessoas aprenderam que funciona (ou que é punido).",
      erros: ["O discurso sem prática coerente não muda o comportamento.", null, "O layout é um artefato e não determina o comportamento diante do erro.", "Os pressupostos são justamente o que guia o comportamento."]
    },
    {
      pergunta: "Para Schein, a cultura se forma a partir de soluções que o grupo encontrou para quais tipos de problema?",
      alternativas: ["Adaptação externa e integração interna", "Contabilidade e finanças", "Marketing e vendas", "Tecnologia e infraestrutura"],
      correta: 0,
      explicacao: "A cultura nasce do aprendizado do grupo ao lidar com o ambiente externo (sobreviver no mercado) e ao organizar sua convivência interna.",
      erros: [null, "São áreas funcionais, e não os problemas fundamentais que formam a cultura.", "Também são áreas funcionais.", "A tecnologia pode ser um artefato, mas não é a origem da cultura."]
    },
    {
      pergunta: "O que caracteriza uma cultura FORTE?",
      alternativas: ["Muitos cartazes com valores", "Ausência de regras", "Valores intensamente compartilhados e praticados pela maioria", "Alta rotatividade"],
      correta: 2,
      explicacao: "Uma cultura forte tem alto consenso sobre valores, que são vividos no dia a dia. Isso traz coesão, mas pode dificultar mudanças.",
      erros: ["Cartazes são artefatos e não garantem que os valores sejam vividos.", "Culturas fortes podem ter muitas ou poucas regras; o que as define é o compartilhamento.", null, "Alta rotatividade costuma indicar o oposto."]
    },
    {
      pergunta: "Uma organização focada em inovação, experimentação e tolerância ao risco se aproxima de qual tipo no modelo de Cameron e Quinn?",
      alternativas: ["Hierarquia", "Mercado", "Clã", "Adhocracia"],
      correta: 3,
      explicacao: "A adhocracia valoriza criatividade, empreendedorismo e adaptação rápida.",
      erros: ["A hierarquia foca em controle e estabilidade.", "O mercado foca em resultados e competição.", "O clã foca em colaboração e pessoas.", null]
    },
    {
      pergunta: "Sobre “cultura digital”, é correto afirmar que:",
      alternativas: ["É ter computadores modernos", "Envolve pressupostos como decidir com dados, experimentar e aprender com o erro, não só usar ferramentas", "Existe apenas em empresas de tecnologia", "É definida pelo departamento de TI"],
      correta: 1,
      explicacao: "Ferramentas são artefatos. A cultura digital está nos comportamentos e pressupostos: dados, experimentação, foco no cliente e colaboração.",
      erros: ["Equipamentos são artefatos; sem mudança de mentalidade não há cultura digital.", null, "Qualquer organização pode desenvolvê-la.", "A cultura é construída por toda a organização, especialmente pela liderança."]
    },
    {
      pergunta: "Qual ação tende a ser MAIS eficaz para mudar uma cultura?",
      alternativas: ["Trocar a decoração do escritório", "Publicar novos valores no site", "Líderes agirem de forma coerente e alinharem metas, recompensas e processos aos novos valores", "Proibir conversas sobre cultura"],
      correta: 2,
      explicacao: "O que os líderes praticam, medem, recompensam e punem ensina a cultura. Alinhar sistemas e exemplo é o que atinge os pressupostos.",
      erros: ["Muda só artefatos, sem atingir os pressupostos.", "Muda só o discurso (valores expostos).", null, "Isso reforçaria uma cultura de silêncio."]
    }
  ],

  discursivas: [
    "Explique com suas palavras o conceito de cultura organizacional segundo Edgar Schein.",
    "Descreva os três níveis da cultura com exemplos do Inteli ou de uma empresa que você conhece.",
    "“Vocês diriam que o Inteli tem uma cultura forte? Como a descreveriam?” Responda usando os três níveis de Schein.",
    "Existe cultura digital? Argumente a partir da diferença entre artefatos e pressupostos básicos.",
    "Como a cultura da empresa parceira pode facilitar ou dificultar a adoção do modelo de IA do seu projeto? Proponha ações."
  ],

  respostasDiscursivas: [
    "Para Schein, cultura organizacional é o conjunto de <strong>pressupostos básicos compartilhados</strong> que um grupo aprendeu ao resolver seus problemas de <strong>adaptação externa</strong> (sobreviver no mercado) e de <strong>integração interna</strong> (como trabalhar junto). Como essas soluções funcionaram bem o bastante, passam a ser consideradas válidas, se naturalizam e deixam de ser questionadas, e são ensinadas aos novos membros como o jeito certo de perceber, pensar e agir.",
    "<strong>Artefatos</strong> (visíveis): no Inteli, o ateliê com mesas de grupo, dailies diárias, uso intenso do Slack, projetos com parceiros reais e a linguagem própria (“sprint”, “ponderada”, “card”). <strong>Valores declarados:</strong> aprendizagem ativa, autonomia, trabalho em equipe, protagonismo e colaboração com o mercado, presentes em discursos e documentos. <strong>Pressupostos básicos</strong> (inconscientes): “o aluno é responsável pelo próprio aprendizado”, “aprende-se fazendo, com problemas reais” e “entregar no prazo é inegociável”, crenças que guiam o comportamento sem que ninguém as questione.",
    "Sim, há sinais de <strong>cultura forte</strong>, porque os três níveis parecem coerentes. <strong>Artefatos:</strong> rotina de sprints, dailies, entregas às sextas, ateliê colaborativo. <strong>Valores declarados:</strong> sala invertida, autonomia e projetos reais, reforçados pelos professores (“você é responsável pelo seu aprendizado”). <strong>Pressupostos:</strong> os alunos já agem como se estudar antes do encontro e colaborar no grupo fosse o normal. Descreveria como uma cultura de <strong>aprendizagem ativa, colaboração e foco em entrega</strong>, próxima da adhocracia (inovação) com traços de clã (grupos). Pode haver subculturas entre turmas e cursos.",
    "Existe, mas não está nas ferramentas. Ter notebooks, IA e dashboards é <strong>artefato</strong>: é fácil de ver e de comprar, e não muda como as pessoas decidem. Cultura digital de verdade está nos <strong>pressupostos básicos</strong>: acreditar que decisões devem se basear em dados, que experimentar e errar rápido faz parte, que o cliente está no centro e que áreas devem colaborar com autonomia. Uma empresa pode ter tecnologia de ponta e manter a crença de que “quem decide é o chefe pela intuição”, e aí não tem cultura digital.",
    "<strong>Facilita</strong> se a cultura confia em dados, aceita experimentar e valoriza melhorias de processo. <strong>Dificulta</strong> se o pressuposto for “só teste físico é confiável”, “o engenheiro experiente sabe mais que qualquer modelo” ou “errar é inaceitável”, porque então o modelo tende a ser ignorado. Ações: envolver os engenheiros desde o início (cocriação); explicar as previsões (SHAP) e mostrar o erro com transparência; começar com um piloto de baixo risco que amplie o trabalho em vez de substituir; ter um patrocinador na liderança; e celebrar e divulgar ganhos concretos para criar novas histórias de sucesso."
  ]
});
