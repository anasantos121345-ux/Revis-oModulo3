Plataforma.adicionarAula("negocios", {
  id: "design-organizacional",
  titulo: "Design Organizacional",
  descricao: "Elementos da estrutura, centralização, amplitude de controle, estruturas funcional, divisional, matricial, por projetos e em rede, modelos mecanicista × orgânico e estruturas ágeis.",
  duracao: "45 min",

  resumo: [
    { tipo: "titulo", texto: "O que é design organizacional" },
    { tipo: "texto", texto: "É o processo de <strong>escolher e ajustar a estrutura</strong> de uma organização (como o trabalho é dividido, agrupado, coordenado e controlado) para que ela execute sua <strong>estratégia</strong>. A estrutura deve seguir a estratégia, e não o contrário." },

    { tipo: "titulo", texto: "Seis elementos da estrutura" },
    { tipo: "tabela", cabecalho: ["Elemento", "Pergunta que responde"], linhas: [
      ["<strong>Especialização do trabalho</strong>", "Em que grau as tarefas são divididas em funções separadas?"],
      ["<strong>Departamentalização</strong>", "Com que critério agrupamos as funções (função, produto, cliente, região, processo)?"],
      ["<strong>Cadeia de comando</strong>", "A quem cada pessoa se reporta? (unidade de comando, autoridade)"],
      ["<strong>Amplitude de controle</strong>", "Quantas pessoas um gestor consegue coordenar com eficácia?"],
      ["<strong>Centralização × descentralização</strong>", "Onde ficam as decisões: no topo ou perto de quem executa?"],
      ["<strong>Formalização</strong>", "Quanto o trabalho é padronizado por regras e procedimentos?"]
    ]},
    { tipo: "destaque", titulo: "Amplitude de controle e níveis hierárquicos", texto: "Amplitude <strong>estreita</strong> (poucos subordinados por gestor) → mais níveis → estrutura <strong>alta</strong>, com mais controle e decisões lentas. Amplitude <strong>ampla</strong> → menos níveis → estrutura <strong>achatada</strong>, com mais autonomia e agilidade." },

    { tipo: "titulo", texto: "Tipos de estrutura" },
    { tipo: "tabela", cabecalho: ["Estrutura", "Como agrupa", "Vantagens", "Desvantagens"], linhas: [
      ["<strong>Funcional</strong>", "por especialidade (Marketing, Finanças, Produção, TI)", "eficiência, especialização, carreira técnica clara", "silos, coordenação lenta entre áreas, visão fragmentada do cliente"],
      ["<strong>Divisional</strong>", "por produto, cliente ou região (Divisão Brasil, Divisão México)", "foco no resultado de cada unidade, adaptação ao mercado", "duplicação de recursos, competição interna"],
      ["<strong>Matricial</strong>", "combina funcional + projeto/produto (<strong>dupla subordinação</strong>)", "uso flexível de especialistas, integração", "conflito de autoridade (“dois chefes”), ambiguidade"],
      ["<strong>Por projetos</strong>", "equipes montadas para cada projeto, com gerente de projeto com autoridade", "foco total na entrega", "ociosidade entre projetos, perda de conhecimento ao fim"],
      ["<strong>Em rede / virtual</strong>", "núcleo pequeno + parceiros externos terceirizados", "flexibilidade, custo baixo", "menor controle, dependência de terceiros"]
    ]},
    { tipo: "exemplo", titulo: "Mesma empresa, estruturas diferentes", texto: "Uma fabricante de eletrodomésticos com operação no Brasil e no México pode ter uma estrutura <strong>divisional geográfica</strong> (cada país com sua produção e vendas) e, dentro dela, um projeto de IA em formato <strong>matricial</strong>: cientistas de dados da área de TI (chefe funcional) alocados ao projeto de previsão térmica (gerente de projeto)." },

    { tipo: "titulo", texto: "Mecanicista × orgânica" },
    { tipo: "tabela", cabecalho: ["", "Mecanicista", "Orgânica"], linhas: [
      ["Hierarquia", "rígida, muitos níveis", "achatada, redes de comunicação"],
      ["Decisão", "centralizada", "descentralizada"],
      ["Formalização", "alta", "baixa"],
      ["Ambiente ideal", "estável e previsível", "dinâmico e incerto (inovação)"]
    ]},
    { tipo: "texto", texto: "Proposta por <strong>Burns e Stalker</strong>: não há estrutura melhor em absoluto. Ela depende do ambiente, da estratégia, da tecnologia e do tamanho (<strong>abordagem contingencial</strong>)." },

    { tipo: "titulo", texto: "As cinco partes de Mintzberg" },
    { tipo: "lista", itens: [
      "<strong>Cúpula estratégica:</strong> alta direção.",
      "<strong>Linha intermediária:</strong> gerentes que ligam a cúpula à operação.",
      "<strong>Núcleo operacional:</strong> quem produz o produto ou serviço.",
      "<strong>Tecnoestrutura:</strong> analistas que padronizam o trabalho (planejamento, qualidade, processos).",
      "<strong>Assessoria de apoio:</strong> serviços indiretos (jurídico, RH, restaurante)."
    ]},

    { tipo: "titulo", texto: "Estruturas ágeis" },
    { tipo: "texto", texto: "Empresas digitais usam times pequenos, <strong>multifuncionais e autônomos</strong> organizados por produto ou jornada do cliente. O conhecido “modelo Spotify” popularizou os termos:" },
    { tipo: "tabela", cabecalho: ["Termo", "O que é"], linhas: [
      ["<strong>Squad</strong>", "time pequeno e multidisciplinar, com uma missão e autonomia (como uma mini startup)"],
      ["<strong>Tribo</strong>", "conjunto de squads que atuam em uma área relacionada"],
      ["<strong>Chapter</strong>", "pessoas da mesma especialidade em squads diferentes (ex.: todos os cientistas de dados da tribo)"],
      ["<strong>Guilda</strong>", "comunidade de interesse aberta, que atravessa a empresa inteira"]
    ]},
    { tipo: "destaque", titulo: "Lei de Conway", texto: "“Organizações projetam sistemas que <strong>copiam sua própria estrutura de comunicação</strong>.” Se as áreas não conversam, o software ou a solução também fica fragmentado." },
    { tipo: "dica", texto: "Na prova, procure a palavra-chave: “<strong>dois chefes</strong>” → matricial; “<strong>por especialidade</strong>” → funcional; “<strong>por produto/região</strong>” → divisional; “<strong>terceiriza quase tudo</strong>” → rede; “<strong>ambiente estável e regras</strong>” → mecanicista." },
    { tipo: "cuidado", itens: [
      "Centralização não é sinônimo de hierarquia alta: é <strong>onde</strong> a decisão é tomada.",
      "A matricial exige comunicação e regras claras de prioridade para não virar conflito constante.",
      "Copiar o “modelo Spotify” sem mudar cultura e autonomia real costuma fracassar."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Uma empresa organizada em departamentos de Marketing, Finanças, Produção e TI adota qual estrutura?",
      alternativas: ["Divisional", "Funcional", "Matricial", "Em rede"],
      correta: 1,
      explicacao: "A estrutura funcional agrupa pessoas por especialidade ou função.",
      erros: ["A divisional agrupa por produto, cliente ou região.", null, "A matricial combina funções com projetos ou produtos, com dupla subordinação.", "A estrutura em rede terceiriza grande parte das atividades."]
    },
    {
      pergunta: "Qual é a principal característica da estrutura matricial?",
      alternativas: ["Um único chefe para todos", "Dupla subordinação: o profissional responde ao gestor funcional e ao gestor de projeto ou produto", "Ausência total de hierarquia", "Terceirização completa"],
      correta: 1,
      explicacao: "Na matricial, as linhas funcionais se cruzam com as de projeto/produto, e a pessoa tem “dois chefes”.",
      erros: ["Esse é o princípio de unidade de comando, típico das estruturas tradicionais.", null, "A hierarquia existe; ela só é dupla.", "Terceirização caracteriza a estrutura em rede."]
    },
    {
      pergunta: "Qual é uma desvantagem típica da estrutura funcional?",
      alternativas: ["Falta de especialização", "Duplicação de recursos entre divisões", "Silos e coordenação lenta entre áreas", "Excesso de autonomia dos squads"],
      correta: 2,
      explicacao: "Como cada área olha para sua especialidade, a comunicação entre áreas e a visão integrada do cliente ficam prejudicadas.",
      erros: ["A especialização é justamente a vantagem da funcional.", "A duplicação de recursos é desvantagem da divisional.", null, "Squads são uma estrutura ágil, não funcional."]
    },
    {
      pergunta: "Uma empresa cria as divisões “Brasil” e “México”, cada uma com produção, vendas e finanças próprias. Qual estrutura é essa?",
      alternativas: ["Divisional geográfica", "Funcional", "Matricial", "Mecanicista"],
      correta: 0,
      explicacao: "A estrutura divisional agrupa por região (ou produto, ou cliente), e cada divisão tem as funções necessárias para operar.",
      erros: [null, "A funcional teria um único departamento de vendas para toda a empresa.", "Não há dupla subordinação descrita.", "Mecanicista descreve o grau de rigidez, não o critério de agrupamento."]
    },
    {
      pergunta: "O que é amplitude de controle?",
      alternativas: ["O orçamento de um departamento", "O número de produtos da empresa", "O número de subordinados que um gestor coordena diretamente", "O nível de formalização"],
      correta: 2,
      explicacao: "A amplitude de controle define quantas pessoas se reportam a um gestor e influencia quantos níveis hierárquicos a empresa terá.",
      erros: ["Orçamento não define a estrutura de reporte.", "O número de produtos pode influenciar a departamentalização, mas não é a amplitude.", null, "Formalização é o grau de padronização por regras."]
    },
    {
      pergunta: "Aumentar a amplitude de controle (mais subordinados por gestor) tende a:",
      alternativas: ["Aumentar o número de níveis hierárquicos", "Achatar a estrutura, reduzindo níveis e aumentando a autonomia", "Centralizar todas as decisões", "Eliminar a necessidade de gestores"],
      correta: 1,
      explicacao: "Com mais pessoas por gestor, são necessários menos níveis. A estrutura fica achatada e costuma dar mais autonomia.",
      erros: ["É o contrário: amplitude estreita é que cria mais níveis.", null, "Com mais subordinados, o gestor tende a delegar mais, e não a centralizar.", "Gestores continuam existindo, em menor número de níveis."]
    },
    {
      pergunta: "Uma estrutura com hierarquia rígida, alta formalização e decisões centralizadas, adequada a ambientes estáveis, é chamada de:",
      alternativas: ["Orgânica", "Em rede", "Ágil", "Mecanicista"],
      correta: 3,
      explicacao: "Segundo Burns e Stalker, a estrutura mecanicista funciona bem em ambientes estáveis e previsíveis.",
      erros: ["A orgânica é flexível, descentralizada e pouco formal.", "A estrutura em rede se baseia em parceiros externos.", "Estruturas ágeis são orgânicas, com times autônomos.", null]
    },
    {
      pergunta: "No modelo popularizado pelo Spotify, o que é um “chapter”?",
      alternativas: ["Um time multidisciplinar com uma missão", "Um grupo de pessoas da mesma especialidade distribuídas em squads diferentes", "O conjunto de todas as tribos", "Um relatório financeiro"],
      correta: 1,
      explicacao: "O chapter reúne profissionais de mesma competência (ex.: QA, dados) de squads diferentes dentro de uma tribo, para manter padrões e desenvolvimento técnico.",
      erros: ["Um time multidisciplinar com missão própria é o squad, e não o chapter.", null, "Um conjunto de squads relacionados é uma tribo; comunidades amplas são guildas.", "Não tem relação com finanças."]
    },
    {
      pergunta: "Na configuração de Mintzberg, a área que padroniza o trabalho (planejamento, qualidade, engenharia de processos) é a:",
      alternativas: ["Tecnoestrutura", "Cúpula estratégica", "Núcleo operacional", "Assessoria de apoio"],
      correta: 0,
      explicacao: "A tecnoestrutura reúne analistas que desenham e padronizam processos, sem executá-los diretamente.",
      erros: [null, "A cúpula é a alta direção.", "O núcleo operacional executa o trabalho principal.", "A assessoria de apoio presta serviços indiretos (jurídico, RH, restaurante)."]
    },
    {
      pergunta: "Segundo a abordagem contingencial, qual é a melhor estrutura organizacional?",
      alternativas: ["Sempre a matricial", "Sempre a funcional", "Depende do ambiente, da estratégia, da tecnologia e do tamanho da organização", "Sempre a ágil com squads"],
      correta: 2,
      explicacao: "Não existe uma estrutura ótima universal: o desenho deve se ajustar às contingências da organização.",
      erros: ["A matricial gera conflitos de autoridade e nem sempre é adequada.", "A funcional pode travar a inovação em ambientes dinâmicos.", null, "Estruturas ágeis também não servem para todos os contextos."]
    }
  ],

  discursivas: [
    "Explique com suas palavras o que é design organizacional e por que a estrutura deve seguir a estratégia.",
    "Compare as estruturas funcional, divisional e matricial, com uma vantagem e uma desvantagem de cada.",
    "Como você estruturaria o time do seu projeto (negócio, dados, UX, engenharia) e com qual lógica? Justifique.",
    "Explique a diferença entre estruturas mecanicistas e orgânicas e dê um exemplo de organização para cada uma.",
    "O que diz a Lei de Conway? Relacione com a forma como a solução do seu projeto será construída e integrada."
  ],

  respostasDiscursivas: [
    "Design organizacional é escolher e ajustar a <strong>estrutura</strong> da organização (como o trabalho é dividido, agrupado, coordenado e controlado: especialização, departamentalização, cadeia de comando, amplitude de controle, centralização e formalização) para executar bem a estratégia. A estrutura deve <strong>seguir a estratégia</strong> porque ela é o meio: uma empresa que quer inovar rápido precisa de times autônomos e decisões descentralizadas; uma que compete por eficiência em ambiente estável se beneficia de padronização. Uma estrutura desalinhada trava a estratégia.",
    "<strong>Funcional</strong> (por especialidade): vantagem, eficiência e profundidade técnica; desvantagem, silos e coordenação lenta entre áreas.<br><strong>Divisional</strong> (por produto, cliente ou região): vantagem, foco no resultado e adaptação a cada mercado; desvantagem, duplicação de recursos e competição interna.<br><strong>Matricial</strong> (funções × projetos, dupla subordinação): vantagem, uso flexível dos especialistas e integração entre áreas; desvantagem, conflito de autoridade (“dois chefes”) e ambiguidade de prioridades.",
    "Um time <strong>multifuncional e orientado ao produto</strong> (como um squad): pessoas de negócio, dados, UX e engenharia juntas, com um objetivo comum (o modelo preditivo e sua adoção) e autonomia para decidir no dia a dia. Papéis claros: um PO ou líder que prioriza com o parceiro; responsáveis por dados/modelo, por UX (personas, jornada) e por engenharia (integração). A lógica é reduzir dependências e handoffs, alinhar todos ao valor para o usuário e permitir iterar rápido a cada sprint, com rituais (daily, review) para coordenar.",
    "<strong>Mecanicista:</strong> hierarquia rígida, muitos níveis, decisões centralizadas e alta formalização (regras e procedimentos). Funciona em ambientes estáveis e previsíveis. Ex.: uma linha de produção industrial tradicional ou um órgão público burocrático. <strong>Orgânica:</strong> estrutura achatada, comunicação em rede, decisões descentralizadas e baixa formalização, adaptada a ambientes dinâmicos e incertos. Ex.: uma startup de tecnologia ou uma área de P&D. Segundo a abordagem contingencial, a melhor depende do ambiente e da estratégia.",
    "A Lei de Conway diz que <strong>organizações projetam sistemas que copiam sua estrutura de comunicação</strong>. Se o time de dados, o de UX e o de engenharia do parceiro trabalham isolados, a solução tende a sair fragmentada: um modelo que não conversa com o sistema de testes e um painel que não reflete a jornada real. Para o projeto, isso significa alinhar desde cedo com as áreas do parceiro que vão integrar e usar a solução, definir interfaces claras (formato dos dados, API) e manter comunicação frequente entre quem constrói cada parte."
  ]
});
