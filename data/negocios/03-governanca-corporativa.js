Plataforma.adicionarAula("negocios", {
  id: "governanca-corporativa",
  titulo: "Governança Corporativa",
  descricao: "Conceito, teoria da agência, princípios do IBGC, agentes e estrutura da governança: assembleia, conselhos, diretoria, auditoria e comitês.",
  duracao: "45 min",

  resumo: [
    { tipo: "titulo", texto: "O que é governança corporativa" },
    { tipo: "destaque", titulo: "Definição (IBGC)", texto: "Sistema pelo qual as organizações são <strong>dirigidas, monitoradas e incentivadas</strong>, envolvendo os relacionamentos entre <strong>sócios, conselho de administração, diretoria, órgãos de fiscalização e controle</strong> e demais partes interessadas." },
    { tipo: "texto", texto: "Em termos simples: são as “regras do jogo” que garantem que quem <strong>administra</strong> a empresa aja no interesse de quem <strong>investe</strong> nela e das demais partes interessadas, com <strong>decisões equilibradas, controle e prestação de contas</strong>." },

    { tipo: "titulo", texto: "Por que existe: o problema de agência" },
    { tipo: "texto", texto: "A <strong>Teoria da Agência</strong> (Jensen e Meckling, 1976) descreve o conflito entre o <strong>principal</strong> (sócio ou acionista, dono do capital) e o <strong>agente</strong> (gestor contratado para administrar). O agente pode buscar interesses próprios (bônus de curto prazo, poder, conforto) diferentes dos do principal." },
    { tipo: "lista", itens: [
      "<strong>Assimetria de informação:</strong> o gestor sabe muito mais sobre a empresa do que o acionista.",
      "<strong>Custos de agência:</strong> gastos com monitoramento (auditorias, conselhos), incentivos e perdas por decisões desalinhadas.",
      "No Brasil também é comum o conflito entre <strong>acionista controlador e minoritários</strong>."
    ]},
    { tipo: "exemplo", titulo: "Exemplo", texto: "Um CEO recebe bônus pelo lucro do trimestre e corta investimentos em manutenção e P&D. O lucro sobe agora, mas a empresa perde valor no longo prazo. Metas de longo prazo, conselho independente e auditoria são mecanismos para alinhar esses interesses." },

    { tipo: "titulo", texto: "Princípios básicos (IBGC)" },
    { tipo: "tabela", cabecalho: ["Princípio", "Significado"], linhas: [
      ["<strong>Transparência</strong>", "disponibilizar informações relevantes, e não só as obrigatórias por lei, incluindo as não financeiras"],
      ["<strong>Equidade</strong>", "tratamento justo e isonômico de sócios e partes interessadas, sem discriminação"],
      ["<strong>Prestação de contas (accountability)</strong>", "agentes de governança prestam contas de forma clara e assumem as consequências dos seus atos"],
      ["<strong>Responsabilidade corporativa</strong>", "zelar pela viabilidade econômico-financeira e reduzir externalidades negativas (sociais e ambientais)"]
    ]},
    { tipo: "texto", texto: "Na 6ª edição do Código do IBGC (2023), os princípios foram atualizados para <strong>integridade, transparência, equidade, responsabilização (accountability) e sustentabilidade</strong>." },

    { tipo: "titulo", texto: "Agentes e estrutura da governança" },
    { tipo: "tabela", cabecalho: ["Órgão", "Papel"], linhas: [
      ["<strong>Assembleia geral de sócios/acionistas</strong>", "órgão soberano: elege o conselho, aprova contas e destinação do lucro, altera o estatuto"],
      ["<strong>Conselho de administração</strong>", "órgão colegiado <strong>estratégico</strong>: orienta a estratégia, elege, avalia e destitui a diretoria, monitora riscos. Deve ter membros <strong>independentes</strong>"],
      ["<strong>Diretoria executiva</strong> (CEO e diretores)", "<strong>gestão</strong> do dia a dia e execução da estratégia aprovada pelo conselho"],
      ["<strong>Conselho fiscal</strong>", "órgão de <strong>fiscalização</strong> dos atos da administração e das demonstrações financeiras, a serviço dos sócios"],
      ["<strong>Auditoria independente</strong> (externa)", "opina se as demonstrações financeiras refletem adequadamente a realidade"],
      ["<strong>Comitê de auditoria</strong>", "assessora o conselho em controles internos, riscos e relação com auditores"],
      ["<strong>Auditoria interna e compliance</strong>", "avaliam controles e riscos e garantem aderência a leis e políticas"]
    ]},
    { tipo: "passos", itens: [
      "<strong>Sócios</strong> elegem o conselho de administração na assembleia.",
      "O <strong>conselho</strong> define a estratégia e escolhe a diretoria.",
      "A <strong>diretoria</strong> executa e presta contas ao conselho.",
      "<strong>Conselho fiscal e auditorias</strong> fiscalizam e dão confiabilidade às informações."
    ]},
    { tipo: "destaque", titulo: "Separação de papéis", texto: "Uma boa prática é <strong>não acumular</strong> os cargos de presidente do conselho e CEO na mesma pessoa: quem executa não deve ser o mesmo que fiscaliza a execução." },

    { tipo: "titulo", texto: "Mercado e benefícios" },
    { tipo: "lista", itens: [
      "Na B3, segmentos como o <strong>Novo Mercado</strong> exigem regras mais rígidas (ex.: só ações ordinárias, tag along de 100%, conselheiros independentes).",
      "Benefícios: <strong>mais confiança dos investidores</strong>, menor custo de capital, decisões melhores, longevidade e redução de riscos e fraudes."
    ]},
    { tipo: "dica", texto: "Para memorizar os órgãos, pense em <strong>quem decide</strong> (assembleia e conselho), <strong>quem executa</strong> (diretoria) e <strong>quem fiscaliza</strong> (conselho fiscal e auditorias)." },
    { tipo: "cuidado", itens: [
      "Conselho de administração ≠ conselho fiscal: o primeiro orienta a estratégia; o segundo fiscaliza contas e atos.",
      "Auditoria independente é externa e não faz parte da gestão.",
      "Governança não é só para grandes empresas: startups e empresas familiares também se beneficiam (acordos, conselhos consultivos)."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Segundo o IBGC, governança corporativa é:",
      alternativas: ["O departamento de RH da empresa", "O sistema pelo qual as organizações são dirigidas, monitoradas e incentivadas, envolvendo sócios, conselho, diretoria e órgãos de controle", "Um software de gestão financeira", "A estratégia de marketing"],
      correta: 1,
      explicacao: "A definição do IBGC enfatiza direção, monitoramento e incentivo, e as relações entre os agentes de governança e as partes interessadas.",
      erros: ["O RH é uma área funcional, não o sistema de governança.", null, "Governança é um sistema de relações e regras, e não uma ferramenta.", "Marketing é uma área da gestão."]
    },
    {
      pergunta: "A Teoria da Agência descreve principalmente o conflito entre:",
      alternativas: ["Clientes e fornecedores", "Governo e sindicatos", "Principal (sócio/acionista) e agente (gestor)", "Concorrentes de mercado"],
      correta: 2,
      explicacao: "O gestor (agente) é contratado para agir em nome do dono do capital (principal), mas pode ter interesses próprios, agravados pela assimetria de informação.",
      erros: ["Essa é uma relação comercial, não o foco da Teoria da Agência.", "Não é a relação central estudada pela teoria.", null, "A concorrência é externa à relação de agência."]
    },
    {
      pergunta: "Um CEO corta investimentos de longo prazo para bater a meta de lucro trimestral que define seu bônus. Isso ilustra:",
      alternativas: ["Um conflito de agência: incentivos do gestor desalinhados dos interesses dos sócios", "Transparência exemplar", "Responsabilidade corporativa", "Equidade entre acionistas"],
      correta: 0,
      explicacao: "O gestor maximiza o próprio ganho de curto prazo em detrimento do valor de longo prazo, que interessa aos sócios. É o problema clássico de agência.",
      erros: [null, "Nada no caso envolve divulgar informações.", "Comprometer a viabilidade futura contraria a responsabilidade corporativa.", "O caso não trata do tratamento entre sócios."]
    },
    {
      pergunta: "Qual princípio de governança se refere a disponibilizar informações relevantes, e não apenas as exigidas por lei?",
      alternativas: ["Equidade", "Prestação de contas", "Responsabilidade corporativa", "Transparência"],
      correta: 3,
      explicacao: "A transparência envolve o desejo de informar, inclusive dados não financeiros e não obrigatórios que orientam a ação e a confiança.",
      erros: ["Equidade é o tratamento justo e isonômico.", "Prestação de contas é responder pelos próprios atos.", "Responsabilidade corporativa é zelar pela sustentabilidade da organização.", null]
    },
    {
      pergunta: "Tratar acionistas minoritários de forma justa e isonômica em relação aos controladores corresponde ao princípio da:",
      alternativas: ["Equidade", "Transparência", "Accountability", "Integridade contábil"],
      correta: 0,
      explicacao: "Equidade é o tratamento justo e isonômico de todos os sócios e partes interessadas.",
      erros: [null, "Transparência é sobre informação.", "Accountability é prestar contas.", "Não é um dos princípios clássicos com esse nome."]
    },
    {
      pergunta: "Qual órgão é soberano e elege os membros do conselho de administração?",
      alternativas: ["Diretoria executiva", "Assembleia geral de sócios/acionistas", "Auditoria independente", "Comitê de auditoria"],
      correta: 1,
      explicacao: "A assembleia geral reúne os sócios e é o órgão soberano: elege o conselho, aprova contas e decide sobre temas estruturais.",
      erros: ["A diretoria é escolhida pelo conselho, e não o contrário.", null, "A auditoria opina sobre as demonstrações; não elege ninguém.", "O comitê de auditoria assessora o conselho."]
    },
    {
      pergunta: "Qual é o papel típico do conselho de administração?",
      alternativas: ["Executar as operações do dia a dia", "Emitir parecer externo sobre as demonstrações financeiras", "Orientar a estratégia, eleger e avaliar a diretoria e monitorar riscos", "Atender clientes"],
      correta: 2,
      explicacao: "O conselho é o órgão colegiado estratégico: define direção, escolhe e supervisiona a diretoria e acompanha riscos.",
      erros: ["Operar o dia a dia é papel da diretoria executiva.", "Isso é função da auditoria independente.", null, "Atendimento é atividade operacional."]
    },
    {
      pergunta: "Qual é a diferença entre conselho de administração e conselho fiscal?",
      alternativas: ["São o mesmo órgão", "O conselho fiscal define a estratégia", "O conselho de administração é externo à empresa", "O conselho de administração orienta a estratégia; o conselho fiscal fiscaliza os atos da administração e as contas"],
      correta: 3,
      explicacao: "Um órgão direciona (administração) e o outro fiscaliza (fiscal), a serviço dos sócios.",
      erros: ["São órgãos distintos, com funções diferentes.", "A estratégia é papel do conselho de administração.", "Externa é a auditoria independente.", null]
    },
    {
      pergunta: "Por que se recomenda que o presidente do conselho NÃO seja também o CEO?",
      alternativas: ["Para reduzir salários", "Para separar quem executa de quem supervisiona a execução, reduzindo conflitos de interesse", "Porque a lei proíbe em todas as empresas", "Para acelerar decisões operacionais"],
      correta: 1,
      explicacao: "Acumular os dois papéis enfraquece a supervisão: a mesma pessoa avaliaria a própria gestão.",
      erros: ["O motivo é de controle e supervisão, não de custo.", null, "É uma recomendação de boas práticas, com exigências específicas em alguns segmentos, e não uma proibição geral.", "O objetivo é independência, não velocidade."]
    },
    {
      pergunta: "Qual é um benefício esperado de boas práticas de governança corporativa?",
      alternativas: ["Eliminar a necessidade de lucro", "Garantir que a empresa nunca tenha prejuízo", "Aumentar a confiança dos investidores e reduzir o custo de capital", "Dispensar auditorias"],
      correta: 2,
      explicacao: "Com mais transparência e controles, investidores percebem menos risco, o que tende a facilitar o acesso a capital e a reduzir seu custo.",
      erros: ["A viabilidade econômica continua sendo essencial.", "A governança reduz riscos, mas não garante resultados.", null, "Auditorias são parte da boa governança."]
    }
  ],

  discursivas: [
    "Explique com suas palavras o problema de agência e dê um exemplo de mecanismo de governança que o reduz.",
    "Descreva os quatro princípios clássicos de governança do IBGC e dê um exemplo prático de cada.",
    "Desenhe (em texto) a estrutura de governança de uma empresa: quem decide, quem executa e quem fiscaliza.",
    "Por que conselheiros independentes são importantes? Que riscos surgem quando o conselho é formado só por pessoas ligadas ao controlador?",
    "Como a governança corporativa da empresa parceira pode influenciar a adoção da solução de IA do seu projeto?"
  ],

  respostasDiscursivas: [
    "O <strong>problema de agência</strong> surge quando o dono do capital (principal, o sócio ou acionista) contrata alguém para administrar (agente, o gestor), e os interesses não são os mesmos. O gestor pode buscar bônus de curto prazo, poder ou conforto, e sabe mais sobre a empresa que o acionista (assimetria de informação). Mecanismos que reduzem o problema: um <strong>conselho de administração com membros independentes</strong> que supervisiona a diretoria; <strong>remuneração ligada a metas de longo prazo</strong>; e auditoria independente das demonstrações financeiras.",
    "<strong>Transparência:</strong> divulgar informações relevantes, além das obrigatórias (ex.: publicar relatórios de sustentabilidade e riscos). <strong>Equidade:</strong> tratar todos os sócios e partes interessadas de forma justa (ex.: tag along que dá aos minoritários as mesmas condições de venda do controlador). <strong>Prestação de contas (accountability):</strong> responder pelos próprios atos com clareza (ex.: a diretoria apresenta resultados e explica desvios ao conselho). <strong>Responsabilidade corporativa:</strong> zelar pela viabilidade de longo prazo e reduzir impactos negativos (ex.: política ambiental e de segurança de produtos).",
    "<strong>Quem decide:</strong> a <strong>Assembleia de sócios</strong> (órgão soberano) elege o <strong>Conselho de Administração</strong>, que define a estratégia e escolhe e avalia a diretoria.<br><strong>Quem executa:</strong> a <strong>Diretoria executiva</strong> (CEO e diretores) gere o dia a dia e presta contas ao conselho.<br><strong>Quem fiscaliza:</strong> o <strong>Conselho Fiscal</strong> (a serviço dos sócios), a <strong>auditoria independente</strong> (externa, sobre as demonstrações), o <strong>comitê de auditoria</strong> (assessora o conselho) e a auditoria interna e o compliance.",
    "Conselheiros independentes não têm vínculo com o controlador nem com a diretoria, então podem questionar decisões, supervisionar a gestão com isenção e proteger os interesses de todos os sócios e da empresa. Se o conselho é formado só por pessoas ligadas ao controlador: a supervisão fica fraca (quem fiscaliza é aliado de quem decide); minoritários podem ser prejudicados (transações com partes relacionadas, desvio de recursos); decisões viram “carimbo”; e a confiança de investidores e o valor da empresa caem.",
    "Na empresa parceira, a governança define <strong>quem aprova</strong> a adoção (conselho, diretoria, comitês de risco e qualidade), <strong>quais critérios</strong> a solução precisa cumprir (segurança, conformidade, LGPD, retorno) e <strong>quanto tempo</strong> leva a decisão. Uma governança forte pode exigir documentação, explicabilidade, testes de validação e gestão de riscos antes de usar a IA em decisões de produto. Isso atrasa, mas dá legitimidade. Para facilitar, o projeto deve envolver o patrocinador certo cedo, documentar métricas e limitações e mostrar como a IA se encaixa nos controles existentes."
  ]
});
