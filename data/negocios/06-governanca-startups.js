Plataforma.adicionarAula("negocios", {
  id: "governanca-projetos-startups",
  titulo: "Governança Corporativa de Projetos e Startups",
  descricao: "Governança em startups, acordo de sócios, cap table, vesting e cliff, pró-labore, cláusulas de saída, conselhos, rodadas de investimento e governança de projetos. Estudo de caso.",
  duracao: "50 min",

  resumo: [
    { tipo: "titulo", texto: "Por que startups precisam de governança" },
    { tipo: "texto", texto: "No início, tudo parece informal: amigos, uma ideia e muita confiança. Mas é exatamente <strong>quando o negócio decola</strong> que surgem as brigas sobre participação, remuneração e decisões. A governança em startups é <strong>leve</strong>, mas precisa existir desde cedo, <strong>por escrito</strong>." },

    { tipo: "titulo", texto: "Estudo de caso: os dois amigos" },
    { tipo: "exemplo", titulo: "O caso", texto: "Dois amigos abrem uma startup. <strong>A</strong> coloca todo o capital inicial (economias, notebook, ferramentas), mas mantém o emprego CLT por mais seis meses e trabalha só nos fins de semana. <strong>B</strong> pede demissão no primeiro mês e trabalha em tempo integral, sem remuneração. Um ano depois, <strong>sem nenhum documento assinado</strong>, o negócio decola: B acha que merece mais participação por “carregar o projeto”; A acha que sem seu capital nada existiria; e B quer um <strong>pró-labore</strong> que nunca foi combinado." },
    { tipo: "passos", itens: [
      "<strong>Entenda o contexto e o problema central:</strong> ausência de acordo formal sobre participação, dedicação e remuneração.",
      "<strong>Identifique dados e restrições:</strong> capital de A × trabalho integral de B; nada assinado; o negócio agora tem valor.",
      "<strong>Aplique conceitos:</strong> acordo de sócios, cap table, vesting com cliff, pró-labore, cláusulas de saída.",
      "<strong>Avalie alternativas:</strong> dividir 50/50? proporcional ao capital? proporcional a trabalho + capital? capital de A virar mútuo conversível?",
      "<strong>Justifique a decisão:</strong> por exemplo, reconhecer o capital de A (como participação ou como empréstimo a ser devolvido), dar a B equity com vesting que valorize a dedicação integral e combinar pró-labore quando houver caixa, tudo por escrito."
    ]},
    { tipo: "destaque", titulo: "Dois lembretes do estudo de caso", itens: [
      "“O mais importante não é a resposta final, mas o <strong>raciocínio</strong> que leva à decisão.”",
      "“Não comecem pela solução. Comecem <strong>entendendo o problema</strong>.”"
    ]},

    { tipo: "titulo", texto: "Instrumentos de governança da startup" },
    { tipo: "tabela", cabecalho: ["Instrumento", "O que é / para que serve"], linhas: [
      ["<strong>Acordo de sócios</strong>", "contrato que regula a relação entre os sócios: participação, papéis, dedicação, decisões, entrada e saída"],
      ["<strong>Cap table</strong>", "tabela de capitalização: quem tem quanto da empresa e como isso muda a cada rodada (diluição)"],
      ["<strong>Vesting</strong>", "o sócio <strong>adquire a participação aos poucos</strong>, ao longo do tempo (ex.: 4 anos), conforme permanece e contribui"],
      ["<strong>Cliff</strong>", "período mínimo (ex.: 1 ano) antes do qual <strong>nada é adquirido</strong>; se sair antes, não leva participação"],
      ["<strong>Pró-labore</strong>", "remuneração do sócio pelo <strong>trabalho</strong> na empresa (diferente de distribuição de lucros, que remunera o capital)"],
      ["<strong>Good / bad leaver</strong>", "regras de saída: quem sai em boas condições leva o que já adquiriu; em más condições (justa causa, concorrência), pode perder ou vender barato"],
      ["<strong>Tag along</strong>", "direito do minoritário de <strong>vender junto</strong>, nas mesmas condições, se o controlador vender"],
      ["<strong>Drag along</strong>", "direito do majoritário de <strong>obrigar</strong> os minoritários a venderem junto, viabilizando a venda de 100%"],
      ["Direito de preferência, lock-up, não concorrência", "prioridade na compra de cotas; proibição de vender por um período; vedação a competir após a saída"]
    ]},
    { tipo: "exemplo", titulo: "Vesting com cliff na prática", texto: "B recebe 40% com vesting de 4 anos e cliff de 1 ano. Se sair no mês 10: <strong>0%</strong> (não passou do cliff). No mês 12, adquire 1/4 = <strong>10%</strong>. Depois, cerca de 10%/4 = 2,5% por trimestre, até completar 40% no mês 48." },

    { tipo: "titulo", texto: "Conselhos e investidores" },
    { tipo: "lista", itens: [
      "<strong>Conselho consultivo (advisory board):</strong> mentores que <strong>aconselham</strong>, sem poder de decisão formal. Comum no início.",
      "<strong>Conselho de administração:</strong> surge com o crescimento e com a entrada de investidores, e tem poder <strong>deliberativo</strong>.",
      "<strong>Rodadas:</strong> pré-seed → seed → Série A, B, C… Cada rodada tende a <strong>diluir</strong> os fundadores e traz exigências de governança (relatórios, direitos de veto, assento no conselho).",
      "<strong>Investidor-anjo</strong> e <strong>contrato de mútuo conversível</strong>: o investimento entra como empréstimo que pode virar participação. O Marco Legal das Startups (LC 182/2021) trouxe segurança a esses instrumentos."
    ]},

    { tipo: "titulo", texto: "Governança de projetos" },
    { tipo: "texto", texto: "Em projetos (como o seu, com um parceiro), governança define <strong>quem decide, quem aprova, como se reporta e como se escalam problemas</strong>." },
    { tipo: "tabela", cabecalho: ["Elemento", "Papel"], linhas: [
      ["Patrocinador (sponsor)", "garante recursos e apoio executivo e aprova as grandes decisões"],
      ["Comitê diretor (steering)", "acompanha o andamento, prioriza e resolve impasses"],
      ["Gerente de projeto / PO", "planeja, coordena e comunica"],
      ["Matriz RACI", "para cada entrega: quem é <strong>R</strong>esponsável, quem <strong>A</strong>prova, quem é <strong>C</strong>onsultado e quem é <strong>I</strong>nformado"],
      ["Rituais", "sprint review, daily, relatórios de status, registro de decisões e riscos"]
    ]},
    { tipo: "dica", texto: "Regra prática para sócios: <strong>combine tudo quando todos ainda estão de bem</strong>. Participação, dedicação, remuneração e saída precisam estar no papel antes do negócio ter valor." },
    { tipo: "cuidado", itens: [
      "Pró-labore ≠ distribuição de lucros: o primeiro paga o trabalho; o segundo remunera a participação.",
      "Tag along protege o <strong>minoritário</strong>; drag along favorece o <strong>majoritário</strong>. Não troque os dois.",
      "Dividir 50/50 “por amizade”, sem vesting, é uma das causas mais comuns de conflito entre fundadores."
    ]}
  ],

  objetivas: [
    {
      pergunta: "No estudo de caso dos dois amigos, qual é o problema CENTRAL?",
      alternativas: ["Falta de clientes", "Ausência de acordo formal sobre participação, dedicação e remuneração dos sócios", "Excesso de investidores", "Escolha errada da tecnologia"],
      correta: 1,
      explicacao: "Sem documento assinado, cada sócio valoriza sua contribuição de um jeito (capital × trabalho), e nada define participação nem pró-labore.",
      erros: ["O negócio está decolando; clientes não são o problema.", null, "Não há investidores no caso.", "O conflito é societário, não tecnológico."]
    },
    {
      pergunta: "O que é vesting?",
      alternativas: ["A venda de toda a empresa", "O salário mensal do sócio", "A aquisição gradual da participação societária ao longo do tempo, condicionada à permanência e à contribuição", "Um tipo de imposto"],
      correta: 2,
      explicacao: "Com vesting, o sócio conquista sua participação aos poucos (ex.: em 4 anos), o que protege a empresa se alguém sair cedo.",
      erros: ["A venda da empresa é chamada de saída (exit).", "O pagamento pelo trabalho é o pró-labore.", null, "Vesting é um mecanismo societário, e não um tributo."]
    },
    {
      pergunta: "Com vesting de 4 anos e cliff de 1 ano sobre 40% de participação, quanto o sócio leva se sair no 10º mês?",
      alternativas: ["0%", "10%", "8,3%", "40%"],
      correta: 0,
      explicacao: "Antes de completar o cliff (12 meses), nada é adquirido. Saindo no mês 10, o sócio não leva participação.",
      erros: [null, "10% só seria adquirido ao completar o cliff, no mês 12.", "8,3% seria um cálculo proporcional sem cliff (10/48 × 40%). O cliff impede isso.", "40% só seria adquirido ao fim dos 4 anos."]
    },
    {
      pergunta: "Qual é a diferença entre pró-labore e distribuição de lucros?",
      alternativas: ["São a mesma coisa", "O pró-labore remunera o trabalho do sócio; a distribuição de lucros remunera a participação no capital", "O pró-labore só existe em empresas públicas", "A distribuição de lucros é obrigatória todo mês"],
      correta: 1,
      explicacao: "O sócio que trabalha na empresa pode receber pró-labore pelo trabalho; lucros são distribuídos conforme a participação, quando existem.",
      erros: ["São conceitos distintos, com naturezas e tratamentos diferentes.", null, "O pró-labore é comum em empresas privadas, de qualquer porte.", "Só se distribui lucro quando há lucro e conforme o que foi deliberado."]
    },
    {
      pergunta: "O controlador vai vender sua parte a um comprador. Qual cláusula garante ao minoritário vender a dele nas MESMAS condições?",
      alternativas: ["Drag along", "Lock-up", "Tag along", "Cliff"],
      correta: 2,
      explicacao: "O tag along (“ir junto”) protege o minoritário, dando-lhe o direito de vender nas mesmas condições do controlador.",
      erros: ["O drag along é o oposto: permite ao majoritário OBRIGAR o minoritário a vender.", "Lock-up proíbe vender por um período.", null, "Cliff é o período mínimo do vesting."]
    },
    {
      pergunta: "Um comprador só aceita adquirir 100% da empresa. Qual cláusula permite ao majoritário obrigar os minoritários a vender junto?",
      alternativas: ["Tag along", "Drag along", "Direito de preferência", "Good leaver"],
      correta: 1,
      explicacao: "O drag along (“arrastar”) viabiliza a venda integral, obrigando os minoritários a acompanhar a venda nas mesmas condições.",
      erros: ["O tag along é um direito do minoritário, não uma obrigação imposta a ele.", null, "Direito de preferência dá prioridade na compra de cotas de quem quer vender.", "Good leaver define as condições de saída de um sócio."]
    },
    {
      pergunta: "O que é o cap table?",
      alternativas: ["Tabela que mostra quem detém quanto da empresa e como isso muda a cada rodada", "O plano de marketing", "O fluxo de caixa mensal", "A lista de clientes"],
      correta: 0,
      explicacao: "A tabela de capitalização registra a participação de fundadores, investidores e opções, e mostra o efeito da diluição.",
      erros: [null, "Marketing não tem relação com a estrutura societária.", "O fluxo de caixa é uma ferramenta financeira operacional.", "Clientes não aparecem no cap table."]
    },
    {
      pergunta: "Qual é a diferença entre conselho consultivo e conselho de administração em uma startup?",
      alternativas: ["Não há diferença", "O consultivo aconselha, sem poder formal de decisão; o de administração tem poder deliberativo", "O consultivo aprova as contas; o de administração só dá conselhos", "O conselho de administração é obrigatório desde o primeiro dia"],
      correta: 1,
      explicacao: "O conselho consultivo (advisory board) orienta os fundadores; o conselho de administração delibera sobre estratégia e gestão, e costuma surgir com o crescimento e os investidores.",
      erros: ["Os poderes são bem diferentes.", null, "Está invertido: quem aprova contas e delibera é o conselho de administração.", "Startups em estágio inicial geralmente não têm conselho de administração."]
    },
    {
      pergunta: "Na matriz RACI de um projeto, o “A” representa:",
      alternativas: ["Quem executa a tarefa", "Quem apenas é informado", "Quem é consultado", "Quem aprova e responde pelo resultado final"],
      correta: 3,
      explicacao: "RACI: Responsible (executa), Accountable (aprova e responde pelo resultado), Consulted (é consultado) e Informed (é informado).",
      erros: ["Quem executa é o R (Responsible).", "Quem é informado é o I (Informed).", "Quem é consultado é o C (Consulted).", null]
    },
    {
      pergunta: "Segundo a metodologia de estudo de caso vista em aula, qual é o PRIMEIRO passo?",
      alternativas: ["Propor a solução final", "Entender o contexto e o problema central", "Votar na melhor alternativa", "Aplicar a primeira teoria que vier à mente"],
      correta: 1,
      explicacao: "O passo a passo começa por entender o contexto e o problema; depois vêm dados e restrições, conceitos, alternativas e a justificativa da decisão.",
      erros: ["“Não comecem pela solução. Comecem entendendo o problema.”", null, "Avaliar alternativas vem depois de entender o problema e os dados.", "Aplicar conceitos é o terceiro passo, e deve ser feito com critério."]
    }
  ],

  discursivas: [
    "Resolva o estudo de caso dos dois amigos seguindo os cinco passos (contexto, dados, conceitos, alternativas e decisão justificada).",
    "Explique com suas palavras vesting e cliff e por que protegem uma startup e seus fundadores.",
    "Diferencie tag along e drag along, dando um exemplo de situação em que cada um seria acionado.",
    "Que elementos um acordo de sócios deve conter no mínimo? Justifique cada um.",
    "Monte uma matriz RACI simples para três entregas do seu projeto com o parceiro."
  ],

  respostasDiscursivas: [
    "<strong>1) Contexto e problema:</strong> dois sócios sem nenhum acordo escrito discordam sobre participação e remuneração justamente quando o negócio passa a ter valor.<br><strong>2) Dados e restrições:</strong> A aportou todo o capital, mas trabalhou em meio período por 6 meses; B trabalhou integralmente, sem salário, desde o início; nada foi assinado; B quer pró-labore.<br><strong>3) Conceitos:</strong> acordo de sócios, cap table, vesting com cliff, distinção entre remunerar capital e remunerar trabalho (pró-labore), cláusulas de saída.<br><strong>4) Alternativas:</strong> 50/50 simples; divisão proporcional só ao capital; proporcional a capital + trabalho; tratar o aporte de A como empréstimo ou mútuo conversível e dividir o equity pelo trabalho.<br><strong>5) Decisão:</strong> formalizar já um acordo de sócios que reconheça o capital de A (como participação adicional ou como empréstimo a ser devolvido), dê a B uma participação que reflita a dedicação integral, aplique vesting com cliff daqui para frente aos dois e defina um pró-labore para quem trabalha em tempo integral quando o caixa permitir. Justificativa: separa o que é capital do que é trabalho e evita novos conflitos.",
    "<strong>Vesting</strong> é o mecanismo em que o sócio <strong>adquire sua participação aos poucos</strong>, ao longo do tempo (ex.: 4 anos), conforme permanece e contribui. <strong>Cliff</strong> é o período mínimo (ex.: 1 ano) antes do qual nada é adquirido: quem sai antes não leva participação. Protegem a startup porque evitam que alguém saia cedo e fique com uma fatia grande sem ter contribuído (o chamado “sócio fantasma”), o que desmotivaria quem fica e afastaria investidores. Protegem os fundadores porque tornam a divisão justa e previsível.",
    "<strong>Tag along</strong> protege o <strong>minoritário</strong>: se o controlador vender sua participação, o minoritário tem o direito de vender a dele junto, nas mesmas condições. Ex.: o fundador majoritário vende para um grande grupo por um bom preço, e o sócio com 10% pode exigir vender pelo mesmo valor por ação. <strong>Drag along</strong> favorece o <strong>majoritário</strong>: permite obrigar os minoritários a vender junto, viabilizando a venda de 100%. Ex.: um comprador só aceita adquirir a empresa inteira, e o majoritário “arrasta” os pequenos sócios para fechar o negócio.",
    "1) <strong>Participação de cada sócio</strong> (cap table), para deixar claro quem tem quanto. 2) <strong>Papéis, responsabilidades e dedicação</strong> (tempo integral ou parcial), para evitar a sensação de que “um carrega o outro”. 3) <strong>Remuneração</strong> (pró-labore e distribuição de lucros), para combinar quem recebe o quê e quando. 4) <strong>Vesting e cliff</strong>, para que a participação acompanhe a contribuição. 5) <strong>Regras de decisão</strong> (maioria, temas que exigem unanimidade, direito de veto), para evitar impasses. 6) <strong>Entrada e saída de sócios</strong>: good e bad leaver, direito de preferência, tag e drag along, lock-up. 7) <strong>Não concorrência e propriedade intelectual</strong>, para proteger o negócio. 8) <strong>Resolução de conflitos</strong> (mediação ou arbitragem).",
    "<strong>Entrega 1, dataset limpo e documentado:</strong> R = cientista de dados do grupo; A = líder técnico do grupo; C = engenheiro de dados do parceiro; I = orientador.<br><strong>Entrega 2, comparação de 3 modelos com tuning e SHAP:</strong> R = dupla de modelagem; A = líder técnico; C = especialista térmico do parceiro; I = PO do parceiro.<br><strong>Entrega 3, apresentação da Sprint Review:</strong> R = responsáveis pela apresentação; A = PO do grupo; C = professores de Design e Negócios; I = sponsor do parceiro.<br>Regra: um único A por entrega."
  ]
});
