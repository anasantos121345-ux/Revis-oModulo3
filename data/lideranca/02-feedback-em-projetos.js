Plataforma.adicionarAula("lideranca", {
  id: "feedback-em-projetos",
  titulo: "Feedback em Projetos",
  descricao: "Conceito e objetivo do feedback, modelo SCI (Situação, Comportamento, Impacto), por que o feedback não funciona e vieses de avaliação.",
  duracao: "40 min",

  resumo: [
    { tipo: "titulo", texto: "O que é feedback" },
    { tipo: "destaque", titulo: "Definição (Hattie e Timperley, 2007)", texto: "Feedback é a <strong>informação dada por alguém em relação ao desempenho ou à compreensão</strong> de uma determinada pessoa." },
    { tipo: "tabela", cabecalho: ["Dimensão", "Pergunta"], linhas: [
      ["<strong>Desempenho</strong> (resultado)", "O quanto você conseguiu fazer? Você conseguiu resolver?"],
      ["<strong>Compreensão</strong> (raciocínio)", "O quanto você entendeu? Você entendeu como e por que resolveu?"]
    ]},
    { tipo: "texto", texto: "<strong>Objetivo: aprimoramento.</strong> Aquisição ou aprofundamento de conhecimento e desenvolvimento de novas competências e habilidades. Feedback não é desabafo nem julgamento: é uma ferramenta para <strong>ajudar o outro a melhorar</strong>." },

    { tipo: "titulo", texto: "Modelo SCI" },
    { tipo: "texto", texto: "Desenvolvido pelo <strong>Center for Creative Leadership</strong>, o SCI propõe um discurso <strong>claro, não violento e baseado em comportamento</strong>, sem julgamentos e sem adjetivos." },
    { tipo: "tabela", cabecalho: ["Pilar", "O que é", "Exemplo de abertura"], linhas: [
      ["<strong>S</strong>ituação", "contexto e fatos com evidências: <strong>onde e quando</strong> aconteceu", "“Na quinta-feira passada, durante a daily…”"],
      ["<strong>C</strong>omportamento", "ações, reações e interações <strong>observáveis</strong>, descritas sem opinião", "“…você estava quieto…”"],
      ["<strong>I</strong>mpacto", "o que aconteceu <strong>depois</strong> do comportamento: os resultados", "“…isso fez com que a gente não soubesse o que foi feito no dia anterior e gerou retrabalho no grupo.”"]
    ]},
    { tipo: "exemplo", titulo: "Feedback construtivo em SCI", texto: "<strong>(S)</strong> Ontem à tarde, durante o desenvolvimento, <strong>(C)</strong> você fez o tratamento de dados de uma forma diferente do que havíamos combinado. <strong>(I)</strong> Isso fez o modelo não atingir a acurácia desejada, e parte do grupo teve que retratar os dados." },
    { tipo: "exemplo", titulo: "Feedback positivo em SCI", texto: "<strong>(S)</strong> Na Sprint Review 1, <strong>(C)</strong> a Mariana e o Eduardo fizeram uma ótima apresentação, trazendo detalhes importantes dos três modelos candidatos (KNN, K-means e Random Forest). <strong>(I)</strong> O parceiro elogiou o trabalho do grupo e fez considerações para avançarmos na entrega." },
    { tipo: "exemplo", titulo: "Identificando S, C e I", texto: "“Na primeira semana do módulo 1, enquanto revisava a documentação, percebi alguns erros de digitação. Ao falar com essa pessoa <strong>(S)</strong>, ela aumentou o tom de voz e disse que eu estava errada <strong>(C)</strong>. A partir daí, ninguém mais do grupo apontou erros, e vários passaram, diminuindo a nota <strong>(I)</strong>.”" },
    { tipo: "destaque", titulo: "Checklist para avaliar um feedback", itens: [
      "Está na estrutura <strong>SCI</strong>?",
      "Há <strong>julgamento</strong> ou adjetivos (“você é desleixado”)?",
      "É <strong>coerente</strong>? S, C e I “conversam” entre si?",
      "Há <strong>intencionalidade em ajudar</strong> o colega a melhorar?"
    ]},

    { tipo: "titulo", texto: "Por que o meu feedback não funcionou?" },
    { tipo: "tabela", cabecalho: ["Causa", "O que acontece"], linhas: [
      ["<strong>Formato</strong>", "o formato escolhido (falado × escrito) pode não ter sido o melhor para aquela pessoa ou situação"],
      ["<strong>Discordância</strong>", "quem recebe pode não concordar com o que foi dito"],
      ["<strong>Mensagem</strong>", "às vezes <strong>suavizamos</strong> tanto que a mensagem não é entendida como deveria"],
      ["<strong>Comportamento</strong>", "a mudança acontece de forma <strong>gradual</strong>, e não de uma hora para outra"]
    ]},

    { tipo: "titulo", texto: "Vieses que distorcem a avaliação" },
    { tipo: "tabela", cabecalho: ["Viés", "O que é", "Exemplo"], linhas: [
      ["<strong>Recência</strong>", "dar mais peso a evidências <strong>recentes</strong> do que às antigas", "avaliar a sprint inteira só pelo erro de ontem"],
      ["<strong>Efeito aura</strong> (halo)", "a <strong>impressão geral</strong> sobre a pessoa impede enxergar evidências contrárias", "“ela é ótima em código, então a documentação também deve estar boa”"],
      ["<strong>Efeito afinidade</strong>", "a <strong>proximidade</strong> com a pessoa impede enxergar evidências contrárias", "não apontar atrasos do colega que é seu amigo"],
      ["<strong>Frequência</strong>", "tratar uma situação <strong>isolada</strong> como se fosse frequente", "“você <em>sempre</em> chega atrasado”, por causa de um único atraso"]
    ]},
    { tipo: "dica", itens: [
      "Anote fatos ao longo da sprint (data, situação, comportamento) para fugir do viés de recência.",
      "Troque “você sempre/nunca” por uma situação específica.",
      "Termine perguntando: “Como você vê isso?” e “O que podemos combinar daqui para frente?”"
    ]},
    { tipo: "cuidado", itens: [
      "Adjetivos (“irresponsável”, “genial”) são julgamentos, não comportamentos observáveis.",
      "Impacto não é punição: é a consequência real do comportamento para o grupo ou o projeto.",
      "Feedback positivo também deve ser específico (SCI), para que o comportamento seja repetido."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Segundo Hattie e Timperley (2007), feedback é:",
      alternativas: ["Uma crítica sobre a personalidade de alguém", "Informação dada por alguém em relação ao desempenho ou à compreensão de uma pessoa", "Uma nota numérica", "Um elogio genérico"],
      correta: 1,
      explicacao: "A definição foca em informação sobre desempenho (resultado) e compreensão (raciocínio), e não sobre a personalidade.",
      erros: ["Feedback não é sobre personalidade; é sobre desempenho e compreensão.", null, "Uma nota sozinha não informa o que melhorar.", "Elogios genéricos não trazem informação útil."]
    },
    {
      pergunta: "Qual é o principal objetivo do feedback, segundo a aula?",
      alternativas: ["Punir erros", "Registrar problemas para o RH", "Aprimoramento: aprofundar conhecimento e desenvolver competências", "Mostrar quem manda no grupo"],
      correta: 2,
      explicacao: "O feedback serve para ajudar a pessoa a melhorar: adquirir conhecimento e desenvolver habilidades.",
      erros: ["Punir não é o objetivo e costuma gerar defensividade.", "O foco é o desenvolvimento, não o registro.", null, "Feedback usado como poder perde a intenção de ajudar."]
    },
    {
      pergunta: "O que significa a sigla SCI?",
      alternativas: ["Solução, Crítica, Incentivo", "Sentimento, Contexto, Intenção", "Síntese, Conclusão, Indicação", "Situação, Comportamento, Impacto"],
      correta: 3,
      explicacao: "SCI: Situação (contexto e fatos), Comportamento (ações observáveis) e Impacto (consequências).",
      erros: ["O modelo não fala em solução nem em crítica: descreve fatos, comportamento e consequência.", "O SCI evita supor sentimentos e intenções: foca no que é observável.", "Essas palavras descrevem um resumo, e não os três pilares do modelo SCI.", null]
    },
    {
      pergunta: "Quem desenvolveu o modelo SCI?",
      alternativas: ["Center for Creative Leadership", "Google PAIR", "IBGC", "Edgar Schein"],
      correta: 0,
      explicacao: "O SCI foi desenvolvido pelo Center for Creative Leadership, organização voltada a ampliar a capacidade de liderança nas organizações.",
      erros: [null, "O PAIR é um guia de UX para IA do Google.", "O IBGC é referência em governança corporativa.", "Schein é referência em cultura organizacional."]
    },
    {
      pergunta: "Qual frase descreve um COMPORTAMENTO (e não um julgamento)?",
      alternativas: ["“Você é desorganizado.”", "“Você não liga para o grupo.”", "“Na daily de quinta, você não comentou o que tinha feito no dia anterior.”", "“Você é preguiçoso.”"],
      correta: 2,
      explicacao: "O comportamento é algo observável e específico, descrito sem adjetivos.",
      erros: ["“Desorganizado” é um adjetivo e um julgamento sobre a pessoa.", "É uma interpretação de intenção, e não algo observável.", null, "“Preguiçoso” é um rótulo, não um comportamento."]
    },
    {
      pergunta: "Em “Na Sprint Review 1, a Mariana e o Eduardo fizeram uma ótima apresentação… O parceiro elogiou o trabalho”, qual trecho é o IMPACTO?",
      alternativas: ["“Na Sprint Review 1”", "“A Mariana e o Eduardo fizeram uma ótima apresentação”", "“trazendo detalhes dos três modelos candidatos”", "“O parceiro elogiou o trabalho do grupo e fez considerações para avançarmos”"],
      correta: 3,
      explicacao: "O impacto é o que aconteceu depois do comportamento: a reação do parceiro e os próximos passos.",
      erros: ["Esse trecho é a Situação (quando e onde).", "Esse trecho é o Comportamento.", "Esse trecho detalha o Comportamento.", null]
    },
    {
      pergunta: "Um colega avalia a sprint inteira de alguém apenas pelo erro cometido ontem. Qual viés é esse?",
      alternativas: ["Viés de recência", "Efeito aura", "Efeito afinidade", "Viés de amostragem"],
      correta: 0,
      explicacao: "O viés de recência dá mais peso a evidências recentes do que às mais antigas.",
      erros: [null, "O efeito aura envolve a impressão geral sobre a pessoa.", "O efeito afinidade envolve a proximidade com a pessoa.", "Amostragem é um viés de dados, e não de avaliação interpessoal."]
    },
    {
      pergunta: "“Ela é excelente programadora, então com certeza a parte dela da documentação também está ótima.” Isso ilustra:",
      alternativas: ["Viés de frequência", "Efeito aura (halo)", "Viés de recência", "Feedback SCI"],
      correta: 1,
      explicacao: "A impressão geral positiva sobre a pessoa impede enxergar evidências específicas que poderiam apontar o contrário.",
      erros: ["Frequência é tratar um caso isolado como frequente.", null, "Não há relação com o momento das evidências.", "Não há estrutura SCI; há um julgamento generalizado."]
    },
    {
      pergunta: "“Você SEMPRE entrega atrasado”, dito por causa de um único atraso, é um exemplo de:",
      alternativas: ["Efeito afinidade", "Viés de frequência", "Impacto bem descrito", "Viés de confirmação de dados"],
      correta: 1,
      explicacao: "O viés de frequência transforma uma situação isolada em algo que “sempre” acontece.",
      erros: ["Afinidade envolve proximidade com a pessoa.", null, "Não é impacto; é uma generalização injusta.", "É um viés interpessoal de avaliação, e não de dados."]
    },
    {
      pergunta: "Você deu um feedback, e a pessoa não mudou o comportamento na semana seguinte. Segundo a aula, o que pode explicar isso?",
      alternativas: ["Feedback nunca funciona", "Formato inadequado, discordância, mensagem suavizada demais ou o fato de a mudança ser gradual", "A pessoa é incapaz de mudar", "Faltou usar adjetivos mais fortes"],
      correta: 1,
      explicacao: "São os quatro motivos vistos: formato, discordância, mensagem e comportamento (a mudança é gradual).",
      erros: ["Feedback funciona, mas depende de como é dado e do tempo.", null, "Rotular a pessoa é julgamento e ignora as causas possíveis.", "Adjetivos pioram o feedback, tornando-o julgamento."]
    }
  ],

  discursivas: [
    "Explique com suas palavras o que é feedback e qual é o seu objetivo, segundo Hattie e Timperley.",
    "Elabore um feedback construtivo no formato SCI sobre uma situação real que aconteceu no Inteli (sem citar nomes).",
    "Elabore agora um feedback positivo no formato SCI para um colega do seu grupo.",
    "Reescreva a frase “Você nunca participa e é desinteressado” usando o modelo SCI e explique quais problemas a frase original tinha.",
    "Escolha dois vieses de avaliação (recência, aura, afinidade, frequência) e explique como evitá-los ao dar feedback no seu projeto."
  ],

  respostasDiscursivas: [
    "Segundo Hattie e Timperley (2007), feedback é a <strong>informação dada por alguém sobre o desempenho ou a compreensão</strong> de uma pessoa: tanto sobre o resultado (“você conseguiu resolver?”) quanto sobre o raciocínio (“você entendeu como e por que?”). O objetivo é o <strong>aprimoramento</strong>: ajudar a pessoa a adquirir ou aprofundar conhecimento e a desenvolver novas competências. Não é julgamento nem desabafo.",
    "“<strong>(S)</strong> Na sprint passada, durante a preparação da documentação da seção 4.3, <strong>(C)</strong> você enviou sua parte no Slack duas horas antes do prazo e sem as referências ABNT que tínhamos combinado. <strong>(I)</strong> Isso fez duas pessoas do grupo pararem o que estavam fazendo para revisar e formatar às pressas, e perdemos pontos por problemas de citação.” Sem adjetivos, com fato, comportamento observável e consequência.",
    "“<strong>(S)</strong> Na Sprint Review de ontem, <strong>(C)</strong> você explicou ao parceiro, com o gráfico de erro por faixa de temperatura, por que escolhemos a Random Forest em vez do KNN, e respondeu às perguntas técnicas com calma. <strong>(I)</strong> O parceiro disse que ficou claro, aprovou o próximo passo e o grupo saiu confiante para a próxima sprint.” Ser específico ajuda a pessoa a repetir o comportamento.",
    "“<strong>(S)</strong> Nas dailies de segunda e terça desta semana, <strong>(C)</strong> você não comentou o que tinha feito e não respondeu no Slack quando pedimos o status da limpeza dos dados. <strong>(I)</strong> Com isso, não soubemos se a tarefa estava pronta e duas pessoas começaram a mesma limpeza, gerando retrabalho.”<br>Problemas da frase original: <strong>“nunca”</strong> generaliza (viés de frequência); <strong>“desinteressado”</strong> é um julgamento sobre a pessoa, não um comportamento observável; não há situação concreta nem impacto, o que dificulta entender e mudar.",
    "<strong>Recência:</strong> para não avaliar a sprint inteira pelo último acontecimento, anotar fatos ao longo da sprint (data, situação, comportamento) e revisar as anotações antes de dar o feedback. <strong>Efeito afinidade:</strong> para não deixar de apontar problemas de um amigo (ou ser mais duro com quem tenho menos proximidade), usar os mesmos critérios e evidências para todos e, se possível, pedir a visão de outra pessoa do grupo. Em ambos, a estrutura SCI com fatos concretos reduz o espaço para impressões."
  ]
});
