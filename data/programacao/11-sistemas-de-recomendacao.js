Plataforma.adicionarAula("programacao", {
  id: "sistemas-de-recomendacao",
  titulo: "Sistemas de Recomendação",
  descricao: "Feedback explícito e implícito, filtragem baseada em conteúdo, colaborativa e híbrida, vetores, similaridade do cosseno, embeddings e cold start.",
  duracao: "45 min",

  resumo: [
    { tipo: "titulo", texto: "Qual pergunta um recomendador responde" },
    { tipo: "texto", texto: "Diferente da classificação tradicional, o recomendador responde a uma pergunta aberta: <strong>“Dado o que sabemos sobre este usuário e sobre os itens, quais itens devemos apresentar a ele?”</strong> Com 50.000 filmes e um usuário que viu 100, não dá para mostrar tudo: é preciso <strong>ordenar por relevância</strong>." },
    { tipo: "texto", texto: "A relevância pode ser uma <strong>nota prevista</strong>, uma <strong>probabilidade de interação</strong>, uma pontuação de interesse ou apenas um valor para ordenar os itens." },

    { tipo: "titulo", texto: "Dados de interação" },
    { tipo: "tabela", cabecalho: ["Tipo", "O que é", "Exemplos"], linhas: [
      ["<strong>Feedback explícito</strong>", "o usuário <strong>declara</strong> a preferência", "estrelas de 1 a 5, like/dislike, nota, avaliação positiva ou negativa"],
      ["<strong>Feedback implícito</strong>", "o sistema <strong>observa</strong> o comportamento", "clicou, assistiu, adicionou ao carrinho, comprou, pesquisou, ouviu, tempo na página"]
    ]},
    { tipo: "destaque", titulo: "Trade-off", texto: "O explícito é mais <strong>direto</strong> (nota 5 = gostou), porém <strong>escasso</strong>. O implícito é <strong>abundante</strong>, porém <strong>ambíguo</strong> (clicar não significa gostar)." },

    { tipo: "titulo", texto: "Principais paradigmas" },
    { tipo: "subtitulo", texto: "Filtragem baseada em conteúdo (content-based)" },
    { tipo: "texto", texto: "“Se o usuário gostou de X, procure itens <strong>semelhantes a X</strong>.” A semelhança vem das <strong>características dos itens</strong>." },
    { tipo: "tabela", cabecalho: ["Filme", "Ação", "Ficção", "Drama", "Comédia"], linhas: [
      ["Matrix", "1", "1", "0", "0"],
      ["Interestelar", "0", "1", "1", "0"],
      ["Vingadores", "1", "1", "0", "0"],
      ["Titanic", "0", "0", "1", "0"]
    ]},
    { tipo: "subtitulo", texto: "Filtragem colaborativa (collaborative filtering)" },
    { tipo: "texto", texto: "“Usuários com comportamento parecido no passado tendem a ter comportamento parecido no futuro.” Olha o <strong>comportamento coletivo</strong>, não as características do item." },
    { tipo: "tabela", cabecalho: ["Usuário", "Matrix", "Titanic", "Interestelar", "Avatar"], linhas: [
      ["Ana", "5", "2", "5", "<strong>?</strong>"],
      ["João", "5", "2", "5", "4"],
      ["Carlos", "1", "5", "1", "5"]
    ]},
    { tipo: "exemplo", titulo: "Lendo a tabela", texto: "Ana e João avaliam de forma quase idêntica. Como João deu 4 para Avatar, o sistema recomenda <strong>Avatar para Ana</strong>, <em>sem precisar saber</em> que Avatar é ficção científica." },
    { tipo: "destaque", titulo: "A diferença em uma frase", itens: [
      "<strong>Conteúdo:</strong> itens são semelhantes pelas suas <strong>características</strong>.",
      "<strong>Colaborativa:</strong> itens são semelhantes porque <strong>usuários semelhantes</strong> interagem com eles.",
      "<strong>Híbridos:</strong> combinam os dois (e outras fontes: conhecimento, demografia, contexto)."
    ]},

    { tipo: "titulo", texto: "Representação vetorial e similaridade" },
    { tipo: "texto", texto: "Para calcular, representamos itens e usuários como <strong>vetores</strong>. Matrix = (1, 1, 0, 0) em [ação, ficção, drama, comédia]. Um usuário pode ser u = (0,9; 0,8; 0,1; 0,05), o seu grau de interesse em cada característica." },
    { tipo: "formula", legenda: "Similaridade do cosseno", texto: "cos θ = (u · v) / (‖u‖ · ‖v‖)", nota: "Mede o ângulo entre os vetores. Quanto mais próximo de 1, mais semelhantes." },
    { tipo: "exemplo", titulo: "Matrix × Vingadores × Titanic", texto: "Matrix (1,1,0,0) · Vingadores (1,1,0,0) = 2; normas √2 · √2 = 2 → cos = <strong>1</strong> (idênticos no perfil).<br>Matrix · Titanic (0,0,1,0) = 0 → cos = <strong>0</strong> (nada em comum)." },

    { tipo: "titulo", texto: "Embeddings" },
    { tipo: "texto", texto: "Um <strong>embedding</strong> representa um dado (palavra, frase, imagem, item, usuário) como um vetor de números em um espaço de alta dimensão, como um “resumo numérico” que captura a essência do item. A propriedade-chave: <strong>coisas com significado parecido ficam próximas</strong> no espaço (similaridade semântica)." },

    { tipo: "titulo", texto: "O problema do cold start" },
    { tipo: "tabela", cabecalho: ["Situação", "Por que é difícil", "Mitigações comuns"], linhas: [
      ["Novo usuário", "não há histórico dele", "pedir preferências no cadastro, recomendar populares, usar demografia/contexto"],
      ["Novo item", "ninguém interagiu ainda (a colaborativa não o enxerga)", "usar características do item (conteúdo), destacar novidades"],
      ["Novo sistema", "não há dados de ninguém", "regras, curadoria, popularidade, conteúdo"]
    ]},

    { tipo: "titulo", texto: "Recomendação como problema supervisionado" },
    { tipo: "texto", texto: "Também dá para transformar em <strong>X → y</strong>: X = idade, histórico, categoria, preço, horário, nº de visitas e cliques…; y = clicou / comprou / assistiu (0 ou 1). Um classificador prevê a probabilidade de interação, e os itens são ordenados por ela." },
    { tipo: "dica", itens: [
      "Pergunta rápida: a recomendação usa <strong>atributos do item</strong> (conteúdo) ou <strong>comportamento de outros usuários</strong> (colaborativa)?",
      "Sistemas reais quase sempre são <strong>híbridos</strong> para contornar o cold start."
    ]},
    { tipo: "cuidado", itens: [
      "A colaborativa sofre com itens novos; a de conteúdo tende a recomendar “mais do mesmo” (pouca diversidade).",
      "Feedback implícito é ruidoso: um clique acidental não é preferência.",
      "Recomendadores podem criar <strong>bolhas</strong> e amplificar vieses de popularidade."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual é um exemplo de feedback IMPLÍCITO?",
      alternativas: ["Dar 5 estrelas a um filme", "Clicar em “não gostei”", "Assistir a um vídeo até o fim", "Escrever uma avaliação positiva"],
      correta: 2,
      explicacao: "O feedback implícito é inferido pelo comportamento observado (assistir, clicar, comprar, tempo na página), sem que o usuário declare a preferência.",
      erros: ["Estrelas são uma declaração direta: feedback explícito.", "Um dislike é uma declaração direta: explícito.", null, "Uma avaliação escrita é uma declaração explícita."]
    },
    {
      pergunta: "A filtragem baseada em conteúdo recomenda itens:",
      alternativas: ["Populares entre todos os usuários", "Semelhantes, em características, aos que o próprio usuário gostou", "Que usuários parecidos consumiram", "Aleatórios"],
      correta: 1,
      explicacao: "A ideia é: “se gostou de X, veja itens com características parecidas com X” (gênero, autor, categoria…).",
      erros: ["Recomendar por popularidade é outra estratégia, útil no cold start.", null, "Usar usuários parecidos é filtragem colaborativa.", "Recomendação aleatória não usa nenhum sinal de preferência."]
    },
    {
      pergunta: "Ana e João avaliaram Matrix, Titanic e Interestelar com as mesmas notas. João deu 4 para Avatar. Recomendar Avatar para Ana é um exemplo de:",
      alternativas: ["Filtragem colaborativa", "Filtragem baseada em conteúdo", "Regressão linear", "Cold start"],
      correta: 0,
      explicacao: "A recomendação vem da semelhança de COMPORTAMENTO entre Ana e João, sem usar as características do filme.",
      erros: [null, "O sistema não usou o gênero de Avatar, só o comportamento de usuários parecidos.", "Não se trata de ajustar uma reta a variáveis contínuas.", "Cold start é a falta de dados. Aqui há histórico suficiente."]
    },
    {
      pergunta: "Na filtragem colaborativa, dois itens são considerados semelhantes porque:",
      alternativas: ["Têm o mesmo gênero", "Têm o mesmo preço", "Usuários semelhantes interagem com eles", "Foram lançados no mesmo ano"],
      correta: 2,
      explicacao: "A colaborativa descobre relações pelo comportamento coletivo: quem gosta de um tende a gostar do outro.",
      erros: ["Gênero é uma característica do item, usada na filtragem por conteúdo.", "Preço também é um atributo do item (conteúdo).", null, "O ano de lançamento é um atributo do item, não um padrão de comportamento."]
    },
    {
      pergunta: "Qual é a similaridade do cosseno entre (1, 1, 0, 0) e (1, 1, 0, 0)?",
      alternativas: ["0", "2", "0,5", "1"],
      correta: 3,
      explicacao: "Produto escalar = 2; normas = √2 · √2 = 2. cos = 2/2 = 1: os vetores apontam na mesma direção (máxima semelhança).",
      erros: ["0 indicaria vetores sem nada em comum (ortogonais).", "2 é o produto escalar, antes de dividir pelas normas.", "0,5 aparece ao dividir o produto escalar por 4, errando a multiplicação das normas.", null]
    },
    {
      pergunta: "Qual é a similaridade do cosseno entre Matrix (1, 1, 0, 0) e Titanic (0, 0, 1, 0)?",
      alternativas: ["1", "0", "−1", "0,5"],
      correta: 1,
      explicacao: "O produto escalar é 1·0 + 1·0 + 0·1 + 0·0 = 0, então cos = 0: não há características em comum.",
      erros: ["1 seria para vetores idênticos em direção.", null, "−1 exigiria direções opostas. Com valores 0/1 não negativos, isso não ocorre.", "Não há nenhuma característica compartilhada que gere semelhança parcial."]
    },
    {
      pergunta: "O que é um embedding?",
      alternativas: ["Um arquivo de vídeo incorporado a um site", "Uma tabela SQL", "Um tipo de feedback explícito", "Uma representação vetorial em que itens de significado parecido ficam próximos no espaço"],
      correta: 3,
      explicacao: "Embeddings mapeiam palavras, imagens ou itens em vetores numéricos que preservam a similaridade semântica.",
      erros: ["“Embed” de vídeo é outro uso do termo, fora do contexto de ML.", "Embedding é um vetor, não uma estrutura de banco de dados.", "Feedback é a interação do usuário, não uma representação vetorial.", null]
    },
    {
      pergunta: "Um filme acabou de ser lançado e ninguém o assistiu. Qual abordagem SOFRE mais com esse cold start?",
      alternativas: ["Filtragem colaborativa", "Filtragem baseada em conteúdo", "Recomendação por popularidade", "Curadoria manual"],
      correta: 0,
      explicacao: "A colaborativa depende de interações. Sem ninguém ter assistido, o item é invisível. A de conteúdo usa os atributos (gênero, elenco) e consegue recomendá-lo.",
      erros: [null, "A de conteúdo consegue lidar com itens novos usando suas características.", "A popularidade também sofre, mas é a colaborativa que perde toda a capacidade de relacionar o item.", "A curadoria humana independe do histórico."]
    },
    {
      pergunta: "Para um usuário recém-cadastrado, qual estratégia ajuda no cold start?",
      alternativas: ["Esperar meses antes de recomendar qualquer coisa", "Pedir preferências iniciais no cadastro e mostrar itens populares", "Usar só filtragem colaborativa", "Apagar o perfil"],
      correta: 1,
      explicacao: "Coletar preferências (onboarding) e usar popularidade, contexto e demografia gera recomendações iniciais até existir histórico.",
      erros: ["Deixar o usuário sem recomendações prejudica a experiência e a retenção.", null, "Sem histórico, a colaborativa não tem de onde partir.", "Não resolve nada e perde o usuário."]
    },
    {
      pergunta: "Como um problema de recomendação pode virar um problema supervisionado?",
      alternativas: ["Removendo os usuários", "Usando só o K-means", "Prevendo y = “usuário clicou/comprou o item” a partir de X = características do usuário, do item e do contexto", "Não pode"],
      correta: 2,
      explicacao: "Com histórico de interações rotulado (comprou = 1 ou 0), treina-se um classificador que estima a probabilidade de interação; os itens são ordenados por ela.",
      erros: ["Sem usuários não há recomendação.", "K-means é não supervisionado: agrupa, mas não prevê a interação.", null, "Pode, e é uma abordagem muito usada na prática."]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre filtragem baseada em conteúdo e filtragem colaborativa, com um exemplo de cada.",
    "Compare feedback explícito e implícito, citando uma vantagem e uma desvantagem de cada.",
    "Calcule a similaridade do cosseno entre u = (1, 0, 1) e v = (1, 1, 0) e interprete o resultado.",
    "O que é o problema do cold start? Proponha soluções para um novo usuário e para um novo item.",
    "Quais riscos éticos e de viés um sistema de recomendação pode trazer (bolhas, popularidade)? Como mitigá-los?"
  ],

  respostasDiscursivas: [
    "<strong>Baseada em conteúdo:</strong> recomenda itens <strong>parecidos, em características</strong>, com os que o usuário já gostou. Ex.: quem assistiu Matrix (ação e ficção) recebe Vingadores (também ação e ficção). <strong>Colaborativa:</strong> recomenda o que <strong>usuários com comportamento parecido</strong> gostaram, sem olhar as características do item. Ex.: Ana e João dão as mesmas notas; João gostou de Avatar, então Avatar é recomendado para Ana.",
    "<strong>Explícito</strong> (estrelas, like/dislike): vantagem, indica preferência de forma direta e clara; desvantagem, é escasso, pois poucos usuários avaliam. <strong>Implícito</strong> (cliques, tempo assistido, compras): vantagem, é abundante e coletado automaticamente; desvantagem, é ambíguo e ruidoso (um clique pode ser acidental, e assistir não significa gostar).",
    "u · v = 1·1 + 0·1 + 1·0 = 1. ‖u‖ = √(1 + 0 + 1) = √2 e ‖v‖ = √(1 + 1 + 0) = √2.<br>cos θ = 1/(√2 · √2) = 1/2 = <strong>0,5</strong>.<br>Interpretação: semelhança moderada. Os vetores compartilham uma das características (a primeira), mas cada um tem outra que o outro não tem. Com 1 seriam idênticos em perfil; com 0, não teriam nada em comum.",
    "O <strong>cold start</strong> ocorre quando não há dados suficientes para recomendar: novo usuário, novo item ou sistema novo. <strong>Novo usuário:</strong> pedir preferências no cadastro (onboarding), recomendar itens populares ou em alta, usar contexto (localização, horário) e demografia. <strong>Novo item:</strong> usar filtragem por conteúdo (atributos como gênero, categoria, descrição ou embeddings), destacá-lo em seções de novidades e fazer exploração controlada para coletar as primeiras interações.",
    "Riscos: <strong>bolhas de filtro</strong> (o usuário só vê mais do mesmo e perde diversidade); <strong>viés de popularidade</strong> (itens já populares ganham ainda mais exposição e os de nicho ou de criadores novos somem); <strong>amplificação</strong> de conteúdos polarizadores, se o objetivo for só engajamento; e uso indevido de dados pessoais. Mitigações: incluir diversidade e novidade no ranking, reservar espaço para exploração, auditar exposição por grupo de itens, dar transparência e controle ao usuário (“por que estou vendo isso?”) e respeitar a LGPD."
  ]
});
