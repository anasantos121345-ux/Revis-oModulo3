Plataforma.adicionarAula("negocios", {
  id: "gestao-governanca-dados",
  titulo: "Gestão e Governança de Dados",
  descricao: "Diferença entre gestão e governança, papéis (owner, steward, custodian), qualidade de dados, metadados, catálogo, linhagem, ciclo de vida e DAMA-DMBOK.",
  duracao: "45 min",

  resumo: [
    { tipo: "titulo", texto: "Dados como ativo" },
    { tipo: "texto", texto: "Se decisões e modelos de IA dependem de dados, eles precisam ser tratados como <strong>ativo estratégico</strong>: com dono, regras, qualidade medida e proteção. Sem isso surgem planilhas paralelas, números que não batem e modelos treinados com lixo (<em>garbage in, garbage out</em>)." },

    { tipo: "titulo", texto: "Governança × gestão" },
    { tipo: "tabela", cabecalho: ["", "Governança de dados", "Gestão de dados"], linhas: [
      ["Pergunta", "<strong>Quem decide</strong> e com quais regras?", "<strong>Como executar</strong> no dia a dia?"],
      ["Foco", "políticas, padrões, papéis, responsabilidades, direitos de decisão, conformidade", "processos e tecnologia: coletar, integrar, armazenar, limpar, disponibilizar"],
      ["Analogia", "as leis e o poder que fiscaliza", "o trabalho de quem constrói e opera"]
    ]},
    { tipo: "destaque", titulo: "Definição útil", texto: "Governança de dados é o exercício de <strong>autoridade, controle e tomada de decisão compartilhada</strong> (planejamento, monitoramento e fiscalização) sobre a gestão dos ativos de dados (DAMA-DMBOK)." },

    { tipo: "titulo", texto: "Papéis" },
    { tipo: "tabela", cabecalho: ["Papel", "Responsabilidade"], linhas: [
      ["<strong>Comitê / conselho de dados</strong>", "define prioridades e políticas e resolve conflitos"],
      ["<strong>CDO</strong> (Chief Data Officer)", "lidera a estratégia de dados da organização"],
      ["<strong>Data Owner</strong> (proprietário)", "responsável de <strong>negócio</strong> por um domínio de dados: define regras de acesso e uso e aprova mudanças"],
      ["<strong>Data Steward</strong> (curador)", "cuida da <strong>qualidade e das definições</strong> no dia a dia: glossário, regras, correções"],
      ["<strong>Data Custodian</strong> (custodiante)", "papel <strong>técnico</strong> (TI): armazenamento, backup, segurança e infraestrutura"],
      ["Consumidores", "analistas e cientistas que usam os dados seguindo as políticas"]
    ]},

    { tipo: "titulo", texto: "Qualidade de dados: dimensões" },
    { tipo: "tabela", cabecalho: ["Dimensão", "Pergunta", "Exemplo de problema"], linhas: [
      ["Acurácia (exatidão)", "o valor representa a realidade?", "temperatura registrada 10 °C abaixo da real"],
      ["Completude", "está tudo preenchido?", "30% das linhas sem data do teste"],
      ["Consistência", "bate entre sistemas?", "o fogão é “modelo A” no ERP e “A-01” no CRM"],
      ["Atualidade (tempestividade)", "está atualizado quando preciso?", "dados de estoque de ontem para decisão de hoje"],
      ["Validade", "respeita formato e regras?", "idade = −15; data em formato inválido"],
      ["Unicidade", "sem duplicatas?", "o mesmo cliente cadastrado três vezes"]
    ]},

    { tipo: "titulo", texto: "Metadados, catálogo e linhagem" },
    { tipo: "lista", itens: [
      "<strong>Metadados:</strong> “dados sobre os dados”, como significado, tipo, origem, dono, data de atualização e sensibilidade.",
      "<strong>Glossário de negócio:</strong> definição única de termos (“cliente ativo” = compra nos últimos 90 dias).",
      "<strong>Catálogo de dados:</strong> inventário pesquisável de datasets, com seus metadados.",
      "<strong>Linhagem (lineage):</strong> caminho do dado desde a origem, passando pelas transformações, até o relatório ou modelo. Permite rastrear erros e auditar.",
      "<strong>Dados mestres (MDM):</strong> versão única e confiável de entidades centrais (clientes, produtos, fornecedores)."
    ]},

    { tipo: "titulo", texto: "Ciclo de vida e classificação" },
    { tipo: "passos", itens: ["Criação/coleta", "Armazenamento", "Uso e processamento", "Compartilhamento", "Arquivamento", "Descarte seguro"] },
    { tipo: "tabela", cabecalho: ["Classificação", "Exemplo", "Acesso"], linhas: [
      ["Pública", "catálogo de produtos no site", "qualquer pessoa"],
      ["Interna", "procedimentos internos", "colaboradores"],
      ["Confidencial", "dados de clientes, resultados de testes", "equipes autorizadas"],
      ["Restrita", "dados sensíveis, segredos industriais", "mínimo de pessoas, com controle forte"]
    ]},

    { tipo: "titulo", texto: "Frameworks" },
    { tipo: "texto", texto: "O <strong>DAMA-DMBOK</strong> (Data Management Body of Knowledge) organiza a gestão de dados em áreas de conhecimento, como arquitetura, modelagem, armazenamento, segurança, integração, documentos, dados mestres, data warehousing/BI, metadados e qualidade, com a <strong>governança no centro</strong>, conectando todas." },
    { tipo: "exemplo", titulo: "Aplicando ao projeto (dados de simulação + testes físicos)", itens: [
      "<strong>Owner:</strong> a área de engenharia térmica do parceiro.",
      "<strong>Steward:</strong> alguém que padroniza unidades (°C), nomes de modelos e regras de validade (faixas de temperatura plausíveis).",
      "<strong>Linhagem:</strong> registrar quais simulações CFD e quais testes físicos alimentaram cada versão do modelo.",
      "<strong>Qualidade:</strong> medir completude e consistência entre as fontes Brasil e México antes de treinar."
    ]},
    { tipo: "dica", texto: "Comece pequeno: escolha os <strong>dados críticos</strong> do projeto, defina dono e steward, escreva o glossário e meça 2 ou 3 dimensões de qualidade." },
    { tipo: "cuidado", itens: [
      "Governança não é só TI nem só compliance: exige donos de negócio.",
      "Ter uma ferramenta de catálogo não significa ter governança; papéis e processos vêm antes.",
      "“Limpar” dados sem regras documentadas pode apagar casos raros importantes e dificultar auditorias."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual é a diferença central entre governança e gestão de dados?",
      alternativas: ["São sinônimos", "A governança define regras, papéis e direitos de decisão; a gestão executa os processos no dia a dia", "A gestão define as leis e a governança programa os sistemas", "A governança só existe em bancos públicos"],
      correta: 1,
      explicacao: "A governança responde “quem decide e com quais regras”; a gestão responde “como fazer”: coletar, armazenar, integrar e disponibilizar.",
      erros: ["Estão relacionadas, mas têm funções diferentes.", null, "Está invertido: a governança define as regras e a gestão executa os processos.", "Qualquer organização que depende de dados precisa de governança."]
    },
    {
      pergunta: "Quem é o responsável de NEGÓCIO por um domínio de dados, com autoridade para definir regras de acesso e uso?",
      alternativas: ["Data Custodian", "Data Owner", "Consumidor de dados", "Operador da LGPD"],
      correta: 1,
      explicacao: "O Data Owner (proprietário) responde pelo domínio de dados perante o negócio e aprova regras, acessos e mudanças.",
      erros: ["O custodiante é o papel técnico (infraestrutura, backup, segurança).", null, "Consumidores usam os dados, mas não definem as regras.", "O operador é um papel da LGPD (quem trata dados para o controlador), não da governança interna."]
    },
    {
      pergunta: "Qual papel cuida, no dia a dia, das definições, do glossário e da qualidade dos dados?",
      alternativas: ["Data Steward", "CEO", "Auditor externo", "Titular"],
      correta: 0,
      explicacao: "O Data Steward (curador) mantém definições, regras de qualidade e correções, e faz a ponte entre negócio e TI.",
      erros: [null, "O CEO dirige a empresa e não cuida da curadoria de dados.", "O auditor avalia de forma independente; não mantém os dados.", "O titular é a pessoa a quem os dados pessoais se referem (LGPD)."]
    },
    {
      pergunta: "O mesmo cliente aparece cadastrado três vezes na base. Qual dimensão de qualidade foi violada?",
      alternativas: ["Atualidade", "Acurácia", "Unicidade", "Validade"],
      correta: 2,
      explicacao: "Unicidade significa não haver registros duplicados da mesma entidade.",
      erros: ["Atualidade trata de os dados estarem em dia no momento do uso.", "Os três registros podem estar corretos; o problema é a repetição.", null, "Validade trata de formato e regras (ex.: idade negativa)."]
    },
    {
      pergunta: "Um modelo de fogão aparece como “Modelo A” no ERP e como “A-01” no CRM. Qual dimensão de qualidade está comprometida?",
      alternativas: ["Consistência", "Completude", "Unicidade", "Atualidade"],
      correta: 0,
      explicacao: "Consistência exige que a mesma informação seja representada da mesma forma entre sistemas.",
      erros: [null, "Os campos estão preenchidos; o problema é a divergência entre sistemas.", "Não há duplicata dentro de um mesmo sistema.", "Não se trata de dado desatualizado."]
    },
    {
      pergunta: "O que são metadados?",
      alternativas: ["Dados apagados", "Dados sobre os dados: significado, origem, tipo, dono, atualização", "Dados de metas de vendas", "Backups"],
      correta: 1,
      explicacao: "Metadados descrevem os dados e permitem encontrá-los, entendê-los e confiar neles.",
      erros: ["Dados apagados não são metadados.", null, "Metas de vendas são dados de negócio comuns.", "Backups são cópias dos dados, não descrições deles."]
    },
    {
      pergunta: "Qual conceito permite rastrear o caminho de um dado da origem até o dashboard ou o modelo, passando pelas transformações?",
      alternativas: ["Unicidade", "Criptografia", "Linhagem de dados (data lineage)", "Pseudonimização"],
      correta: 2,
      explicacao: "A linhagem documenta de onde o dado veio e por quais transformações passou, o que é essencial para auditoria e para corrigir erros.",
      erros: ["Unicidade é uma dimensão de qualidade (sem duplicatas).", "Criptografia protege os dados, mas não descreve seu caminho.", null, "Pseudonimização é uma técnica de privacidade."]
    },
    {
      pergunta: "Qual framework é referência em gestão de dados e coloca a governança no centro das áreas de conhecimento?",
      alternativas: ["Scrum Guide", "DAMA-DMBOK", "PMBOK", "Business Model Canvas"],
      correta: 1,
      explicacao: "O DAMA-DMBOK organiza a gestão de dados em áreas de conhecimento conectadas pela governança.",
      erros: ["O Scrum Guide trata de desenvolvimento ágil.", null, "O PMBOK é referência em gerenciamento de projetos.", "O Canvas é uma ferramenta de modelagem de negócios."]
    },
    {
      pergunta: "Qual afirmação sobre governança de dados está correta?",
      alternativas: ["Basta comprar uma ferramenta de catálogo", "É responsabilidade exclusiva da TI", "Exige papéis definidos, políticas e participação das áreas de negócio", "Só é necessária por causa da LGPD"],
      correta: 2,
      explicacao: "Governança é sobre pessoas, processos e decisões. Ferramentas apoiam, mas não substituem papéis e políticas, e o negócio precisa participar.",
      erros: ["A ferramenta sem papéis e processos vira só mais um repositório desatualizado.", "Sem donos de negócio, faltam definições e autoridade.", null, "A LGPD é um motivo, mas também há qualidade para decisões, eficiência e IA confiável."]
    },
    {
      pergunta: "Resultados de testes físicos de fogões ainda não divulgados devem ser classificados, em geral, como:",
      alternativas: ["Públicos", "Confidenciais, com acesso restrito a equipes autorizadas", "Internos, acessíveis a qualquer pessoa na internet", "Não precisam de classificação"],
      correta: 1,
      explicacao: "Informações estratégicas não divulgadas exigem acesso controlado a quem precisa delas.",
      erros: ["Divulgá-los livremente exporia informação estratégica do parceiro.", null, "“Interno” não significa aberto na internet, e o nível adequado aqui é mais restrito.", "Classificar é o que define controles de acesso adequados."]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre governança e gestão de dados, com um exemplo do seu projeto.",
    "Defina os papéis de Data Owner, Data Steward e Data Custodian para os dados do seu projeto.",
    "Escolha três dimensões de qualidade de dados e proponha como medi-las nos dados do seu projeto.",
    "O que é linhagem de dados e por que ela é importante para modelos de IA?",
    "Como a governança de dados ajuda a cumprir a LGPD? Dê dois exemplos concretos."
  ],

  respostasDiscursivas: [
    "<strong>Governança</strong> define <strong>quem decide e com quais regras</strong>: políticas, papéis, padrões, direitos de acesso e responsabilidades. <strong>Gestão</strong> é a execução no dia a dia: coletar, integrar, armazenar, limpar e disponibilizar os dados. No projeto: a governança define que só dados de testes validados pela engenharia entram no treino e quem aprova mudanças no dataset; a gestão é o pipeline que junta os arquivos CFD e os testes, padroniza as unidades e gera a tabela final.",
    "<strong>Data Owner:</strong> o gestor da engenharia térmica do parceiro, dono do negócio desses dados, que decide quem acessa e para quê. <strong>Data Steward:</strong> um engenheiro ou analista que mantém as definições (nomes dos modelos, unidades, faixas válidas de temperatura), o glossário e as correções de qualidade. <strong>Data Custodian:</strong> o time de TI ou infraestrutura que guarda os dados tecnicamente (servidores, nuvem, backup, controle de acesso, segurança).",
    "<strong>Completude:</strong> % de registros com todos os campos essenciais preenchidos (ex.: meta de 98% com temperatura e carga preenchidas), medida com <code>isna()</code>. <strong>Validade:</strong> % de valores dentro das faixas físicas plausíveis (ex.: temperatura entre 0 e 400 °C, carga não negativa). <strong>Consistência:</strong> % de modelos de fogão com o mesmo código no sistema de testes e no de simulação, e diferença média entre CFD e teste para o mesmo cenário. Acompanhar esses indicadores a cada nova carga de dados.",
    "Linhagem é o registro do <strong>caminho do dado</strong>: de onde veio (qual simulação, qual teste), por quais transformações passou (limpeza, junção, features) e onde foi usado (qual versão do dataset e do modelo). Para IA é importante porque permite <strong>rastrear erros</strong> (uma previsão ruim veio de um dado corrompido?), <strong>reproduzir</strong> resultados, <strong>auditar</strong> decisões e atender exigências de conformidade, e saber qual impacto terá mudar uma fonte.",
    "A governança cria a estrutura que a LGPD exige. Exemplos: 1) <strong>Inventário e classificação</strong>: com catálogo e metadados, a empresa sabe onde estão os dados pessoais e sensíveis, o que é essencial para atender pedidos de acesso ou eliminação do titular. 2) <strong>Papéis e controle de acesso</strong>: owners e custodians garantem que só quem precisa acessa os dados (princípios da necessidade e da segurança), com registros que demonstram conformidade (responsabilização). Também ajudam: políticas de retenção e descarte e a linhagem para comunicar incidentes."
  ]
});
