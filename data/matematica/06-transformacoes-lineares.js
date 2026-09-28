Plataforma.adicionarAula("matematica", {
  id: "transformacoes-lineares",
  titulo: "Transformações Lineares",
  descricao: "Definição e prova de linearidade, matriz padrão, autovalores, autovetores e diagonalização (A = PDP⁻¹).",
  duracao: "55 min",

  resumo: [
    { tipo: "titulo", texto: "O que é uma transformação linear" },
    { tipo: "texto", texto: "Uma transformação T : ℝⁿ → ℝᵐ leva vetores de um espaço a outro. Ela é <strong>linear</strong> quando preserva a <strong>soma</strong> de vetores e a <strong>multiplicação por escalar</strong>:" },
    { tipo: "formula", legenda: "As duas condições", texto: "T(u + v) = T(u) + T(v)   ·   T(c·u) = c·T(u)", nota: "Equivalente, em uma só equação: T(a·u + b·v) = a·T(u) + b·T(v) para quaisquer u, v, a, b." },
    { tipo: "destaque", titulo: "Teste rápido (condição necessária)", texto: "Toda transformação linear leva o vetor nulo no vetor nulo: <strong>T(0) = 0</strong>. Se T(0) ≠ 0, ela <strong>não é linear</strong>. Atenção: T(0) = 0 sozinho <em>não prova</em> que é linear." },
    { tipo: "lista", itens: [
      "<strong>Sinais de linearidade:</strong> cada coordenada da saída é uma combinação de x, y, z com coeficientes constantes (2x + y − 3z).",
      "<strong>Sinais de não linearidade:</strong> constantes somadas (x + 1), produtos entre variáveis (xy), potências (x²), funções como sen x ou |x|."
    ]},
    { tipo: "exemplo", titulo: "Exemplo — provando e refutando", texto: "<strong>T₁(x, y, z) = (2x + y + z, y − 3z)</strong>: T₁(a·u + b·v) separa em a·T₁(u) + b·T₁(v), porque cada termo é linear. → <strong>Linear</strong>.<br><strong>T₂(x, y) = (x + 1, xy)</strong>: T₂(0, 0) = (1, 0) ≠ (0, 0). → <strong>Não linear</strong>. O termo xy também quebraria a homogeneidade: T₂(2u) ≠ 2T₂(u)." },

    { tipo: "titulo", texto: "Matriz padrão" },
    { tipo: "texto", texto: "Toda transformação linear pode ser escrita como <strong>T(x) = A·x</strong>. Isso é ótimo para IA, porque o hardware (GPUs) é otimizadíssimo para multiplicação de matrizes." },
    { tipo: "passos", itens: [
      "Aplique T em cada vetor da base canônica: e₁ = (1, 0, …), e₂ = (0, 1, …), …",
      "Coloque cada resultado T(eᵢ) como uma <strong>coluna</strong> de A.",
      "Ou leia os coeficientes diretamente: cada <strong>linha</strong> de A tem os coeficientes de uma coordenada da saída."
    ]},
    { tipo: "exemplo", titulo: "Exemplo — matriz de T₁(x, y, z) = (2x + y + z, y − 3z)", texto: "A = [ [2, 1, 1], [0, 1, −3] ], uma matriz <strong>2 × 3</strong> (sai de ℝ³ e chega em ℝ²).<br>Confira: A·(1, 1, 1) = (2 + 1 + 1, 0 + 1 − 3) = (4, −2) = T₁(1, 1, 1) ✓" },

    { tipo: "titulo", texto: "Autovalores e autovetores" },
    { tipo: "texto", texto: "Um <strong>autovetor</strong> v ≠ 0 de A é um vetor que, ao ser transformado, <strong>não muda de direção</strong>: só é esticado ou encolhido por um fator λ, o <strong>autovalor</strong>." },
    { tipo: "formula", legenda: "Definição", texto: "A·v = λ·v   ⇒   (A − λI)·v = 0", nota: "Para existir v ≠ 0, (A − λI) não pode ser invertível: det(A − λI) = 0 (equação característica)." },
    { tipo: "passos", itens: [
      "Monte A − λI (subtraia λ da diagonal).",
      "Resolva det(A − λI) = 0 → autovalores λ.",
      "Para cada λ, resolva (A − λI)v = 0 → autovetores v."
    ]},
    { tipo: "exemplo", titulo: "Exemplo — matriz de covariância A = [ [3, 1], [1, 3] ]", texto: "det [ [3 − λ, 1], [1, 3 − λ] ] = (3 − λ)² − 1 = 0 → 3 − λ = ±1 → <strong>λ₁ = 4, λ₂ = 2</strong>.<br>λ = 4: [ [−1, 1], [1, −1] ]·v = 0 → x = y → <strong>v₁ = (1, 1)</strong>.<br>λ = 2: [ [1, 1], [1, 1] ]·v = 0 → x = −y → <strong>v₂ = (1, −1)</strong>." },
    { tipo: "destaque", titulo: "Conexão com IA: PCA", texto: "Na <strong>Análise de Componentes Principais</strong>, os autovetores da matriz de covariância são as direções principais dos dados, e os autovalores dizem quanta variância cada direção explica. No exemplo, a direção (1, 1) concentra a maior variância (λ = 4)." },

    { tipo: "titulo", texto: "Diagonalização" },
    { tipo: "formula", legenda: "Decomposição", texto: "A = P · D · P<sup>−1</sup>", nota: "P: autovetores como colunas · D: autovalores na diagonal (na mesma ordem)." },
    { tipo: "formula", legenda: "Potências ficam fáceis", texto: "A<sup>k</sup> = P · D<sup>k</sup> · P<sup>−1</sup>", nota: "D<sup>k</sup> é só elevar cada elemento da diagonal a k." },
    { tipo: "exemplo", titulo: "Exemplo — A⁴ para A = [ [3, 1], [1, 3] ]", texto: "P = [ [1, 1], [1, −1] ], D = diag(4, 2), P⁻¹ = ½·[ [1, 1], [1, −1] ].<br>D⁴ = diag(256, 16) → A⁴ = P·D⁴·P⁻¹ = <strong>[ [136, 120], [120, 136] ]</strong>. Sem multiplicar A por ela mesma quatro vezes." },
    { tipo: "dica", itens: [
      "Para matriz 2×2, confira: soma dos autovalores = traço (3 + 3 = 6 = 4 + 2) e produto = determinante (9 − 1 = 8 = 4·2).",
      "Autovetores são definidos a menos de um múltiplo: (1, 1) e (5, 5) representam a mesma direção.",
      "Para provar linearidade, use u = (x₁, y₁…) e v = (x₂, y₂…) genéricos. Um exemplo numérico não basta."
    ]},
    { tipo: "cuidado", itens: [
      "Um exemplo numérico que funciona <strong>não prova</strong> linearidade. Um contraexemplo <strong>refuta</strong>.",
      "Autovetor nunca é o vetor nulo.",
      "Na matriz padrão, T(eᵢ) vira <strong>coluna</strong>, não linha.",
      "Em P e D, a ordem dos autovetores precisa corresponder à ordem dos autovalores."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Uma transformação T é linear quando, para quaisquer vetores u, v e escalares a, b:",
      alternativas: ["T(u + v) = T(u)·T(v)", "T(a·u + b·v) = a·T(u) + b·T(v)", "T(u) = u para todo u", "T(0) = 1"],
      correta: 1,
      explicacao: "A linearidade exige preservar soma e multiplicação por escalar, o que se resume em T(au + bv) = aT(u) + bT(v).",
      erros: ["O produto T(u)·T(v) não aparece na definição. A soma deve ser preservada como SOMA.", null, "T(u) = u é a identidade, só um exemplo de transformação linear, não a definição.", "Toda transformação linear tem T(0) = 0, nunca 1."]
    },
    {
      pergunta: "T(x, y) = (x + 1, 2y) é linear?",
      alternativas: ["Sim, pois só usa somas", "Sim, porque 2y é linear", "Não, porque T(0, 0) = (1, 0) ≠ (0, 0)", "Depende do vetor"],
      correta: 2,
      explicacao: "Toda transformação linear leva o vetor nulo no vetor nulo. Como T(0, 0) = (1, 0), a constante +1 quebra a linearidade.",
      erros: ["Somar uma CONSTANTE (+1) é uma translação, e translações não são lineares.", "Uma coordenada linear não basta: todas as coordenadas precisam ser lineares.", null, "Linearidade é uma propriedade da transformação para TODOS os vetores, não de casos isolados."]
    },
    {
      pergunta: "Qual transformação abaixo é linear?",
      alternativas: ["T(x, y) = (xy, x)", "T(x, y) = (x², y)", "T(x, y) = (3x − y, 4y)", "T(x, y) = (sen x, y)"],
      correta: 2,
      explicacao: "Cada coordenada de (3x − y, 4y) é combinação de x e y com coeficientes constantes, sem constantes somadas nem produtos entre variáveis.",
      erros: ["O produto xy não é linear: T(2u) daria 4xy, e não 2xy.", "x² não é linear: (2x)² = 4x² ≠ 2x².", null, "sen x não é linear: sen(a + b) ≠ sen a + sen b."]
    },
    {
      pergunta: "Qual é a matriz padrão de T(x, y, z) = (2x + y + z, y − 3z)?",
      alternativas: ["[ [2, 0], [1, 1], [1, −3] ]", "[ [2, 1, 1], [0, 1, −3] ]", "[ [2, 1], [1, −3] ]", "[ [2, 1, 1], [1, −3, 0] ]"],
      correta: 1,
      explicacao: "Cada linha tem os coeficientes de x, y e z de uma coordenada da saída: (2, 1, 1) e (0, 1, −3). A matriz é 2×3, de ℝ³ para ℝ².",
      erros: ["Essa é a transposta (3×2). Não multiplica um vetor de ℝ³ para gerar ℝ².", null, "Faltou uma coluna: T recebe 3 coordenadas (x, y, z).", "A segunda linha deve respeitar a ordem x, y, z: 0·x + 1·y − 3·z."]
    },
    {
      pergunta: "Um autovetor v de uma matriz A satisfaz:",
      alternativas: ["A·v = 0", "A·v = v + λ", "A·v = λ·v, com v ≠ 0", "A·λ = v"],
      correta: 2,
      explicacao: "Autovetor é um vetor não nulo cuja direção é preservada por A: só é escalado pelo autovalor λ.",
      erros: ["A·v = 0 descreve o núcleo (autovalor λ = 0 como caso particular), não a definição geral.", "Não se soma escalar a vetor. A relação é multiplicativa: λ·v.", null, "λ é um escalar que multiplica v. A expressão A·λ = v não faz sentido na definição."]
    },
    {
      pergunta: "Quais são os autovalores de A = [ [3, 1], [1, 3] ]?",
      alternativas: ["3 e 3", "4 e 2", "1 e 3", "6 e 8"],
      correta: 1,
      explicacao: "det(A − λI) = (3 − λ)² − 1 = 0 → 3 − λ = ±1 → λ = 4 ou λ = 2. Confere: soma 6 = traço, produto 8 = determinante.",
      erros: ["3 e 3 são os elementos da diagonal. Isso só valeria se a matriz fosse diagonal.", null, "1 e 3 são entradas da matriz, não raízes da equação característica.", "6 é o traço e 8 o determinante: eles são a SOMA e o PRODUTO dos autovalores, e não os autovalores."]
    },
    {
      pergunta: "Para A = [ [3, 1], [1, 3] ] e λ = 4, qual é um autovetor associado?",
      alternativas: ["(1, −1)", "(1, 0)", "(0, 0)", "(1, 1)"],
      correta: 3,
      explicacao: "(A − 4I)v = [ [−1, 1], [1, −1] ]v = 0 → x = y. Então (1, 1) (ou qualquer múltiplo não nulo) é autovetor. Confere: A(1, 1) = (4, 4) = 4·(1, 1).",
      erros: ["(1, −1) é autovetor de λ = 2: A(1, −1) = (2, −2).", "A(1, 0) = (3, 1), que não é múltiplo de (1, 0).", "O vetor nulo nunca é autovetor, por definição.", null]
    },
    {
      pergunta: "Na diagonalização A = PDP⁻¹, o que contêm P e D?",
      alternativas: ["P: autovalores; D: autovetores", "P: autovetores nas colunas; D: autovalores na diagonal", "P: a matriz identidade; D: a transposta de A", "P e D são sempre iguais a A"],
      correta: 1,
      explicacao: "P tem os autovetores como colunas e D é diagonal com os autovalores correspondentes, na mesma ordem.",
      erros: ["Os papéis estão invertidos.", null, "Com P = I, teríamos A = D, o que só vale se A já for diagonal.", "Se P e D fossem iguais a A, a decomposição não teria utilidade."]
    },
    {
      pergunta: "Por que a diagonalização facilita o cálculo de A<sup>k</sup>?",
      alternativas: ["Porque A<sup>k</sup> = P·D<sup>k</sup>·P⁻¹, e elevar uma matriz diagonal é só elevar cada elemento da diagonal", "Porque A<sup>k</sup> = k·A", "Porque P⁻¹ = P sempre", "Porque dispensa conhecer os autovalores"],
      correta: 0,
      explicacao: "Os P⁻¹P internos se cancelam: (PDP⁻¹)^k = PD^kP⁻¹. E D^k de uma diagonal é trivial: diag(λ₁^k, λ₂^k).",
      erros: [null, "Potência de matriz não é multiplicação por escalar: A² = A·A, não 2A.", "P⁻¹ = P só em casos específicos. Não é o motivo geral.", "D é formada pelos autovalores, então eles são indispensáveis."]
    },
    {
      pergunta: "Em PCA, o autovetor associado ao MAIOR autovalor da matriz de covariância indica:",
      alternativas: ["A direção de menor variância dos dados", "A média dos dados", "Um outlier", "A direção de maior variância dos dados (1º componente principal)"],
      correta: 3,
      explicacao: "Os autovalores medem a variância explicada em cada direção. O maior autovalor corresponde ao autovetor que aponta para onde os dados mais se espalham.",
      erros: ["A menor variância corresponde ao MENOR autovalor.", "A média é um vetor calculado dos dados, não um autovetor da covariância.", "Autovetores descrevem direções globais, não pontos específicos como outliers.", null]
    }
  ],

  discursivas: [
    "Explique com suas palavras o que torna uma transformação linear e por que a condição T(0) = 0 é necessária, mas não suficiente.",
    "Prove algebricamente se T(x, y) = (4x − y, x + 2y) é linear e encontre sua matriz padrão.",
    "Calcule os autovalores e autovetores de A = [ [2, 0], [0, 5] ] e interprete geometricamente o que a matriz faz com os vetores.",
    "Explique o que é diagonalizar uma matriz e por que isso torna eficiente o cálculo de potências como A¹⁰.",
    "Relacione autovalores e autovetores com a redução de dimensionalidade (PCA) em um projeto de Machine Learning."
  ],

  respostasDiscursivas: [
    "Uma transformação é linear quando preserva soma e escala: T(u + v) = T(u) + T(v) e T(c·u) = c·T(u) (ou, juntos, T(au + bv) = aT(u) + bT(v)). T(0) = 0 é <strong>necessária</strong> porque, com c = 0, T(0) = T(0·u) = 0·T(u) = 0. Mas não é <strong>suficiente</strong>: T(x, y) = (x², y) leva 0 em 0 e não é linear, pois T(2u) ≠ 2T(u). Serve para descartar rapidamente (se T(0) ≠ 0, não é linear), mas não prova linearidade.",
    "Sejam u = (x₁, y₁), v = (x₂, y₂) e escalares a, b.<br>T(au + bv) = (4(ax₁ + bx₂) − (ay₁ + by₂), (ax₁ + bx₂) + 2(ay₁ + by₂))<br>= (a(4x₁ − y₁) + b(4x₂ − y₂), a(x₁ + 2y₁) + b(x₂ + 2y₂)) = aT(u) + bT(v). Logo, <strong>T é linear</strong>.<br>Matriz padrão: T(1, 0) = (4, 1) e T(0, 1) = (−1, 2) viram colunas → <strong>A = [ [4, −1], [1, 2] ]</strong>.",
    "A é diagonal, então os autovalores são os elementos da diagonal: det(A − λI) = (2 − λ)(5 − λ) = 0 → <strong>λ₁ = 2</strong> e <strong>λ₂ = 5</strong>.<br>λ = 2: (A − 2I)v = [ [0, 0], [0, 3] ]v = 0 → y = 0 → v₁ = (1, 0).<br>λ = 5: (A − 5I)v = [ [−3, 0], [0, 0] ]v = 0 → x = 0 → v₂ = (0, 1).<br>Geometricamente, a matriz <strong>estica</strong> tudo 2 vezes na direção do eixo x e 5 vezes na direção do eixo y. Vetores sobre os eixos só mudam de tamanho; os demais também mudam de direção.",
    "Diagonalizar é escrever A = P·D·P⁻¹, com os autovetores nas colunas de P e os autovalores na diagonal de D. Nas potências, os P⁻¹P internos se cancelam: A¹⁰ = P·D¹⁰·P⁻¹. E D¹⁰ é trivial: basta elevar cada autovalor a 10. Em vez de 9 multiplicações de matrizes completas, fazemos 2 multiplicações e 2 potências de números. Isso importa quando uma transformação se repete muitas vezes (etapas de tempo, cadeias de Markov).",
    "No PCA, calculamos a matriz de covariância das features. Seus <strong>autovetores</strong> são as direções principais em que os dados variam (componentes principais), e seus <strong>autovalores</strong> medem quanta variância cada direção explica. Ordenando pelos maiores autovalores e mantendo só os primeiros componentes (ex.: os que somam 95% da variância), reduzimos a dimensionalidade com pouca perda de informação. Isso ajuda a eliminar redundância (multicolinearidade), acelerar o treino e visualizar os dados em 2D."
  ]
});
