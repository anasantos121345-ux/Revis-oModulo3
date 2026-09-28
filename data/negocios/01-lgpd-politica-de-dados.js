Plataforma.adicionarAula("negocios", {
  id: "lgpd-politica-de-dados",
  titulo: "Contexto do Parceiro, LGPD e Política de Dados",
  descricao: "Dados pessoais e sensíveis, agentes de tratamento, princípios, bases legais, direitos do titular, ANPD, sanções e política de dados do projeto.",
  duracao: "50 min",

  resumo: [
    { tipo: "titulo", texto: "O que é a LGPD" },
    { tipo: "texto", texto: "A <strong>Lei Geral de Proteção de Dados</strong> (Lei nº 13.709/2018) regula o <strong>tratamento de dados pessoais</strong> por pessoas físicas e jurídicas, públicas ou privadas, inclusive nos meios digitais. O objetivo é proteger a <strong>liberdade</strong>, a <strong>privacidade</strong> e o <strong>livre desenvolvimento da personalidade</strong>." },
    { tipo: "texto", texto: "<strong>Tratamento</strong> é praticamente qualquer operação com dados: coleta, uso, acesso, armazenamento, compartilhamento, classificação, eliminação…" },

    { tipo: "titulo", texto: "Tipos de dados" },
    { tipo: "tabela", cabecalho: ["Tipo", "Definição", "Exemplos"], linhas: [
      ["<strong>Dado pessoal</strong>", "informação relacionada a pessoa natural <strong>identificada ou identificável</strong>", "nome, CPF, e-mail, endereço, telefone, <strong>localização</strong>, IP"],
      ["<strong>Dado pessoal sensível</strong>", "categoria com proteção reforçada, pelo risco de discriminação", "origem racial ou étnica, religião, opinião política, filiação sindical, <strong>saúde</strong>, vida sexual, dado genético ou <strong>biométrico</strong>"],
      ["<strong>Dado anonimizado</strong>", "não permite identificar o titular por meios razoáveis", "estatísticas agregadas sem identificação (fora da LGPD, se a anonimização for irreversível)"],
      ["<strong>Dado pseudonimizado</strong>", "identificação só com informação adicional mantida separada", "ID aleatório no lugar do CPF (<strong>continua sendo dado pessoal</strong>)"]
    ]},

    { tipo: "titulo", texto: "Quem é quem" },
    { tipo: "tabela", cabecalho: ["Papel", "Quem é", "No caso InstalaExpress"], linhas: [
      ["<strong>Titular</strong>", "a pessoa natural a quem os dados se referem", "o motorista (e os clientes)"],
      ["<strong>Controlador</strong>", "quem toma as <strong>decisões</strong> sobre o tratamento (finalidade, meios)", "a InstalaExpress"],
      ["<strong>Operador</strong>", "quem trata os dados <strong>em nome do controlador</strong>, seguindo suas instruções", "a fornecedora do software de gestão de frotas"],
      ["<strong>Encarregado (DPO)</strong>", "canal de comunicação entre controlador, titulares e ANPD", "o DPO da InstalaExpress"],
      ["<strong>ANPD</strong>", "Autoridade Nacional de Proteção de Dados: fiscaliza e aplica sanções", "pode multar a empresa"]
    ]},
    { tipo: "destaque", titulo: "Controlador e operador são “agentes de tratamento”", texto: "O operador responde pela <strong>segurança</strong> dos dados em seu sistema e por seguir as instruções; a <strong>base legal</strong> e a finalidade da coleta são decisões do controlador. Os dois podem responder solidariamente por danos se o operador descumprir a lei ou as instruções." },

    { tipo: "titulo", texto: "Princípios (art. 6º)" },
    { tipo: "tabela", cabecalho: ["Princípio", "Em uma frase"], linhas: [
      ["Finalidade", "propósitos legítimos, específicos, explícitos e informados"],
      ["Adequação", "o tratamento é compatível com a finalidade informada"],
      ["<strong>Necessidade</strong>", "usar só o <strong>mínimo</strong> de dados necessário (minimização)"],
      ["Livre acesso", "o titular consulta, de forma fácil e gratuita, seus dados"],
      ["Qualidade dos dados", "dados exatos, claros, relevantes e atualizados"],
      ["Transparência", "informações claras sobre o tratamento e quem o realiza"],
      ["Segurança", "medidas técnicas e administrativas contra acessos indevidos e incidentes"],
      ["Prevenção", "evitar danos antes que ocorram"],
      ["<strong>Não discriminação</strong>", "proibido tratar dados para fins discriminatórios ilícitos ou abusivos"],
      ["Responsabilização e prestação de contas", "demonstrar a adoção de medidas eficazes de conformidade"]
    ]},

    { tipo: "titulo", texto: "Bases legais: quando o tratamento é permitido" },
    { tipo: "texto", texto: "Todo tratamento precisa de <strong>uma base legal</strong> (art. 7º). As mais usadas nas empresas:" },
    { tipo: "lista", itens: [
      "<strong>Consentimento:</strong> manifestação livre, informada e inequívoca, para finalidade determinada, e <strong>revogável</strong> a qualquer momento.",
      "<strong>Execução de contrato:</strong> necessário para cumprir um contrato com o titular (ex.: endereço para entregar o fogão).",
      "<strong>Obrigação legal ou regulatória</strong> (ex.: guardar notas fiscais).",
      "<strong>Legítimo interesse</strong> do controlador ou de terceiro, respeitando direitos e expectativas do titular.",
      "Outras: proteção do crédito, proteção da vida, tutela da saúde, exercício regular de direitos, estudos por órgão de pesquisa, políticas públicas."
    ]},
    { tipo: "destaque", titulo: "Consentimento não é a única base", texto: "É um erro comum achar que tudo exige consentimento. Rastrear a rota do motorista durante a entrega, por exemplo, pode se apoiar em <strong>execução de contrato</strong> ou <strong>legítimo interesse</strong>. Mas a finalidade precisa ser informada e o uso, proporcional." },

    { tipo: "titulo", texto: "Direitos do titular (art. 18 e art. 20)" },
    { tipo: "lista", itens: [
      "confirmação da existência de tratamento e <strong>acesso</strong> aos dados;",
      "<strong>correção</strong> de dados incompletos, inexatos ou desatualizados;",
      "anonimização, bloqueio ou <strong>eliminação</strong> de dados desnecessários ou excessivos;",
      "<strong>portabilidade</strong> a outro fornecedor;",
      "informação sobre com quem os dados foram compartilhados;",
      "informação sobre a possibilidade de não consentir e <strong>revogação do consentimento</strong>;",
      "<strong>revisão de decisões tomadas unicamente com base em tratamento automatizado</strong> (art. 20), como perfis e pontuações."
    ]},
    { tipo: "exemplo", titulo: "Caso InstalaExpress", texto: "O motorista desligado por métricas de localização pode pedir <strong>acesso</strong> a todos os seus dados (relatório completo), questionar a <strong>finalidade</strong> e a <strong>transparência</strong> e pedir <strong>revisão</strong> da decisão automatizada que levou ao desligamento. O DPO deve responder, e a empresa precisa demonstrar a base legal e a proporcionalidade (<strong>responsabilização</strong>)." },

    { tipo: "titulo", texto: "Fiscalização e sanções" },
    { tipo: "lista", itens: [
      "Advertência, com prazo para medidas corretivas;",
      "<strong>Multa simples de até 2% do faturamento</strong> da empresa no Brasil no último exercício, <strong>limitada a R$ 50 milhões por infração</strong>;",
      "multa diária, publicização da infração, bloqueio e eliminação dos dados, suspensão parcial das atividades de tratamento.",
      "Incidentes de segurança com risco relevante devem ser <strong>comunicados à ANPD e aos titulares</strong>."
    ]},

    { tipo: "titulo", texto: "Política de dados para o projeto" },
    { tipo: "passos", itens: [
      "<strong>Mapear</strong> os dados: quais são coletados, de onde vêm, onde ficam e quem acessa (inventário).",
      "<strong>Classificar:</strong> pessoal, sensível, anonimizado; público, interno, confidencial.",
      "Definir <strong>finalidade</strong> e <strong>base legal</strong> para cada uso.",
      "<strong>Minimizar:</strong> só o necessário; anonimizar ou pseudonimizar para treinar modelos.",
      "<strong>Proteger:</strong> controle de acesso, criptografia, logs.",
      "Definir <strong>retenção e descarte</strong>, e registrar tudo (RIPD, o relatório de impacto, quando houver risco alto)."
    ]},
    { tipo: "dica", itens: [
      "Pergunta de ouro: <strong>“Eu preciso mesmo deste dado para esta finalidade?”</strong> (princípio da necessidade).",
      "Em projetos de IA, prefira dados de simulação, agregados ou anonimizados sempre que possível."
    ]},
    { tipo: "cuidado", itens: [
      "Pseudonimizado <strong>ainda é</strong> dado pessoal; só o anonimizado de forma irreversível sai da LGPD.",
      "Localização e biometria podem identificar pessoas; trate com cuidado reforçado.",
      "O operador não escolhe a base legal: segue as instruções do controlador.",
      "Decisões automatizadas que afetam pessoas (ex.: desligar um motorista) precisam permitir revisão."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Segundo a LGPD, “dado pessoal” é:",
      alternativas: ["Apenas nome e CPF", "Informação relacionada a pessoa natural identificada ou identificável", "Qualquer dado de uma empresa", "Somente dados de saúde"],
      correta: 1,
      explicacao: "Dado pessoal é qualquer informação que identifica ou pode identificar uma pessoa natural: nome, e-mail, localização, IP, entre outros.",
      erros: ["O conceito é muito mais amplo: localização, e-mail e até combinações de dados podem identificar alguém.", null, "Dados de pessoas jurídicas (CNPJ, faturamento) não são dados pessoais.", "Saúde é dado pessoal SENSÍVEL, uma subcategoria."]
    },
    {
      pergunta: "Qual item é um dado pessoal SENSÍVEL?",
      alternativas: ["Endereço residencial", "Histórico de localização do motorista", "Dado biométrico, como impressão digital", "Número de telefone"],
      correta: 2,
      explicacao: "A LGPD lista como sensíveis: origem racial/étnica, religião, opinião política, filiação sindical, saúde, vida sexual, dados genéticos e biométricos.",
      erros: ["O endereço é dado pessoal, mas não está no rol de sensíveis.", "A localização é dado pessoal que exige cuidado, mas não está na lista legal de sensíveis.", null, "O telefone é dado pessoal comum."]
    },
    {
      pergunta: "No caso InstalaExpress, a empresa fornecedora do software de gestão de frotas, que trata os dados seguindo as instruções da InstalaExpress, é:",
      alternativas: ["Controladora", "Titular", "Operadora", "ANPD"],
      correta: 2,
      explicacao: "O operador realiza o tratamento em nome do controlador, conforme suas instruções, e responde pela segurança dos dados em seu sistema.",
      erros: ["A controladora é a InstalaExpress, que decide finalidade e meios.", "Titulares são as pessoas a quem os dados se referem (motoristas e clientes).", null, "A ANPD é a autoridade fiscalizadora."]
    },
    {
      pergunta: "Qual é o papel do Encarregado (DPO)?",
      alternativas: ["Decidir sozinho a finalidade de todo tratamento", "Ser o canal de comunicação entre controlador, titulares e ANPD", "Aplicar multas às empresas", "Desenvolver o software de coleta"],
      correta: 1,
      explicacao: "O encarregado recebe reclamações e comunicações dos titulares, interage com a ANPD e orienta a organização sobre boas práticas.",
      erros: ["Decidir a finalidade é atribuição do controlador; o DPO orienta.", null, "Aplicar sanções é papel da ANPD.", "Desenvolver sistemas não é função do encarregado."]
    },
    {
      pergunta: "Qual princípio da LGPD determina usar apenas o mínimo de dados necessário para a finalidade?",
      alternativas: ["Transparência", "Livre acesso", "Qualidade dos dados", "Necessidade"],
      correta: 3,
      explicacao: "O princípio da necessidade (minimização) limita o tratamento ao mínimo necessário, com dados pertinentes, proporcionais e não excessivos.",
      erros: ["Transparência trata de informar claramente como os dados são usados.", "Livre acesso garante ao titular consultar seus dados.", "Qualidade exige dados exatos e atualizados.", null]
    },
    {
      pergunta: "Sobre o consentimento como base legal, é correto afirmar:",
      alternativas: ["Deve ser livre, informado, inequívoco, para finalidade determinada, e pode ser revogado", "É a única base legal da LGPD", "Depois de dado, nunca pode ser revogado", "Pode ser genérico, para “qualquer finalidade futura”"],
      correta: 0,
      explicacao: "O consentimento tem requisitos de qualidade e é revogável a qualquer momento. Há outras nove bases legais além dele.",
      erros: [null, "Existem outras bases: execução de contrato, obrigação legal, legítimo interesse, entre outras.", "A revogação é um direito expresso do titular.", "Autorizações genéricas são nulas: a finalidade deve ser determinada."]
    },
    {
      pergunta: "O motorista pediu um relatório com todos os dados que a empresa tem sobre ele. Qual direito está exercendo?",
      alternativas: ["Portabilidade", "Direito de acesso (e confirmação da existência de tratamento)", "Eliminação", "Revogação do consentimento"],
      correta: 1,
      explicacao: "O titular pode confirmar a existência de tratamento e acessar seus dados pessoais.",
      erros: ["Portabilidade é transferir os dados a outro fornecedor.", null, "Eliminação é apagar os dados, e ele pediu para vê-los.", "Ele não pediu para interromper um tratamento baseado em consentimento."]
    },
    {
      pergunta: "Qual é o limite da multa simples prevista na LGPD?",
      alternativas: ["Até 10% do faturamento, sem limite", "Até R$ 1 milhão por ano", "Não há multas na LGPD", "Até 2% do faturamento no Brasil, limitada a R$ 50 milhões por infração"],
      correta: 3,
      explicacao: "A multa simples é de até 2% do faturamento da pessoa jurídica no Brasil no último exercício, limitada a R$ 50 milhões por infração.",
      erros: ["Esses números não correspondem à LGPD.", "O teto é bem maior: R$ 50 milhões por infração.", "Há multas e outras sanções, aplicadas pela ANPD.", null]
    },
    {
      pergunta: "Um motorista foi desligado com base apenas em uma pontuação automática de desempenho. Qual direito da LGPD se aplica diretamente?",
      alternativas: ["Portabilidade", "Revisão de decisões tomadas unicamente com base em tratamento automatizado", "Nenhum, pois decisões automáticas são livres", "Direito ao esquecimento absoluto"],
      correta: 1,
      explicacao: "O art. 20 garante ao titular solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado que afetem seus interesses, incluindo perfis profissionais.",
      erros: ["Portabilidade não se relaciona à contestação de decisões.", null, "A LGPD regula expressamente decisões automatizadas.", "Não é esse o direito aplicável; o art. 20 é o que trata especificamente do caso."]
    },
    {
      pergunta: "Para treinar um modelo, a equipe substituiu o CPF por um código aleatório, mantendo a tabela de correspondência em local separado. Esse dado é:",
      alternativas: ["Anonimizado, logo fora da LGPD", "Dado sensível", "Dado público", "Pseudonimizado, ainda considerado dado pessoal"],
      correta: 3,
      explicacao: "Como é possível reidentificar com a informação adicional guardada, trata-se de pseudonimização. O dado continua pessoal, e a LGPD continua valendo.",
      erros: ["Só é anonimizado se a reidentificação não for possível por meios razoáveis, e aqui a tabela existe.", "CPF não é dado sensível pela LGPD.", "Tornar o identificador aleatório não torna o dado público.", null]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre controlador, operador, titular e encarregado, usando o caso InstalaExpress.",
    "Qual base legal você usaria para coletar a localização dos motoristas durante as entregas? Justifique e discuta os limites desse uso.",
    "O motorista alega tratamento injusto de seus dados de localização. Como o DPO deveria responder, passo a passo?",
    "Proponha uma política de dados para o seu projeto: quais dados serão usados, como serão protegidos e por quanto tempo serão mantidos.",
    "Explique a diferença entre dado anonimizado e pseudonimizado e por que isso importa para projetos de IA."
  ],

  respostasDiscursivas: [
    "<strong>Titular:</strong> a pessoa natural a quem os dados se referem, como o motorista (e os clientes). <strong>Controlador:</strong> quem decide por que e como os dados são tratados, a InstalaExpress. <strong>Operador:</strong> quem trata os dados em nome do controlador, seguindo suas instruções, a fornecedora do software de gestão de frotas; responde pela segurança no seu sistema. <strong>Encarregado (DPO):</strong> o canal de comunicação entre a InstalaExpress, os titulares e a ANPD; recebe reclamações, como a do motorista, e orienta a empresa sobre conformidade.",
    "A base mais adequada seria a <strong>execução de contrato</strong> (a localização é necessária para executar o serviço de entrega e instalação combinado com o motorista) e/ou o <strong>legítimo interesse</strong> (segurança, otimização de rotas), e não necessariamente o consentimento. <strong>Limites:</strong> coletar só durante a jornada e as entregas (necessidade); informar com clareza a finalidade (transparência); não usar para outras finalidades sem base (ex.: vigiar a vida pessoal); guardar pelo tempo necessário; e, se usada em avaliação de desempenho, garantir critérios justos e o direito de revisão de decisões automatizadas.",
    "1) Registrar a reclamação e confirmar o recebimento ao motorista. 2) Verificar quais dados dele são tratados, de onde vêm e com quem são compartilhados (inclusive com o operador). 3) Enviar o <strong>relatório de acesso</strong> com seus dados, finalidades, base legal e compartilhamentos, em linguagem clara e no prazo. 4) Analisar se o uso da localização no desligamento respeitou finalidade, adequação e não discriminação. 5) Se a decisão foi automatizada, garantir a <strong>revisão</strong> por uma pessoa. 6) Corrigir dados errados e ajustar processos, se for o caso. 7) Documentar tudo (responsabilização) e estar pronto para responder à ANPD.",
    "<strong>Dados:</strong> resultados de simulações CFD e de testes físicos (modelo, carga, temperaturas), sem dados pessoais. Se houver nomes de técnicos nos registros, removê-los ou pseudonimizá-los. <strong>Proteção:</strong> acesso restrito por papel (só o time do projeto), armazenamento no ambiente do parceiro, criptografia, registro de acessos e acordo de confidencialidade, já que são dados industriais estratégicos. <strong>Retenção:</strong> durante o projeto, com devolução ou exclusão segura ao final (conforme contrato), mantendo só o modelo e a documentação autorizados. <strong>Governança:</strong> um responsável pelos dados em cada lado e registro das versões usadas.",
    "<strong>Anonimizado:</strong> não é possível reidentificar a pessoa por meios razoáveis, porque a ligação foi destruída de forma irreversível (ex.: estatísticas agregadas). Deixa de ser dado pessoal e sai da LGPD. <strong>Pseudonimizado:</strong> os identificadores são trocados por códigos, mas a tabela de correspondência existe em algum lugar, então é possível reidentificar. <strong>Continua sendo dado pessoal</strong> e sujeito à LGPD. Para IA isso importa porque treinar com dados pseudonimizados ainda exige base legal, segurança e respeito aos direitos; e porque combinar muitas features pode reidentificar pessoas mesmo sem nome."
  ]
});
