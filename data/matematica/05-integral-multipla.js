Plataforma.adicionarAula("matematica", {
  id: "integral-multipla",
  titulo: "Integral Múltipla",
  descricao: "Revisão de integrais, integrais duplas como volume, integrais iteradas, Teorema de Fubini, regiões gerais e integral tripla.",
  duracao: "55 min",

  resumo: [
    { tipo: "titulo", texto: "Revisão: integral de uma variável" },
    { tipo: "tabela", cabecalho: ["f(x)", "∫ f(x) dx"], linhas: [
      ["k (constante)", "kx + C"],
      ["xⁿ (n ≠ −1)", "xⁿ⁺¹ / (n + 1) + C"],
      ["1/x", "ln|x| + C"],
      ["eˣ", "eˣ + C"],
      ["sen x", "−cos x + C"],
      ["cos x", "sen x + C"]
    ]},
    { tipo: "lista", itens: [
      "<strong>Constante sai da integral:</strong> ∫ k·f(x) dx = k ∫ f(x) dx.",
      "<strong>Soma:</strong> ∫ (f + g) dx = ∫ f dx + ∫ g dx.",
      "<strong>Teorema Fundamental do Cálculo:</strong> ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a)."
    ]},
    { tipo: "exemplo", titulo: "Exemplo — probabilidade com uma PDF", texto: "Latência L com f(x) = (x² + 1)/12 em [0, 3]. P(2 ≤ L ≤ 3) = (1/12)·[x³/3 + x]<sub>2</sub><sup>3</sup> = (1/12)·(12 − 14/3) = (1/12)·(22/3) = <strong>11/18 ≈ 61,1%</strong>. Integrar uma PDF é somar área, e área é probabilidade." },

    { tipo: "titulo", texto: "Integral dupla: somando sobre uma região" },
    { tipo: "texto", texto: "Se f(x, y) ≥ 0 sobre uma região R do plano, a integral dupla dá o <strong>volume do sólido</strong> entre a superfície z = f(x, y) e a região R. A ideia é somar infinitos “prismas” de base dA e altura f(x, y)." },
    { tipo: "formula", legenda: "Integral dupla", texto: "V = ∬<sub>R</sub> f(x, y) dA", nota: "Casos especiais: ∬ 1 dA = área de R · (1/Área)∬ f dA = valor médio de f em R" },
    { tipo: "destaque", titulo: "Conexão com IA", itens: [
      "Consumo de energia total de um cluster = integral da taxa f(t, w) no tempo e na carga.",
      "Probabilidade conjunta: ∬ f(x, y) dA de uma PDF conjunta sobre uma região."
    ]},

    { tipo: "titulo", texto: "Integrais iteradas e Teorema de Fubini" },
    { tipo: "texto", texto: "Calculamos uma integral dupla como <strong>duas integrais simples</strong>, de dentro para fora:" },
    { tipo: "passos", itens: [
      "<strong>Integral interna:</strong> integre em uma variável tratando a outra como constante. O resultado é a área de uma seção transversal.",
      "Substitua os limites da variável interna.",
      "<strong>Integral externa:</strong> integre o resultado na outra variável, acumulando as áreas para obter o volume."
    ]},
    { tipo: "destaque", titulo: "Teorema de Fubini", texto: "Em uma região <strong>retangular</strong> R = [a, b] × [c, d] (com f contínua), a ordem não importa:<br>∬<sub>R</sub> f dA = ∫<sub>c</sub><sup>d</sup>∫<sub>a</sub><sup>b</sup> f dx dy = ∫<sub>a</sub><sup>b</sup>∫<sub>c</sub><sup>d</sup> f dy dx" },
    { tipo: "exemplo", titulo: "Exemplo — energia E = ∬ (2x + 3y) dA em [0, 2] × [1, 3]", texto: "Interna (em x, de 0 a 2): [x² + 3xy]<sub>0</sub><sup>2</sup> = 4 + 6y.<br>Externa (em y, de 1 a 3): [4y + 3y²]<sub>1</sub><sup>3</sup> = (12 + 27) − (4 + 3) = <strong>32 kWh</strong>.<br>Pela outra ordem (dy dx) o resultado também é 32, como garante Fubini." },
    { tipo: "exemplo", titulo: "Atalho — função separável", texto: "Se f(x, y) = g(x)·h(y) em um retângulo, a integral vira um produto: ∬ xy dA em [0, 2]×[0, 3] = (∫₀² x dx)(∫₀³ y dy) = 2 · 4,5 = <strong>9</strong>." },

    { tipo: "titulo", texto: "Regiões gerais (não retangulares)" },
    { tipo: "texto", texto: "Quando a região não é um retângulo, os limites da integral <strong>interna</strong> passam a ser <strong>funções</strong> da variável externa." },
    { tipo: "tabela", cabecalho: ["Tipo", "Descrição", "Integral"], linhas: [
      ["Tipo I (verticais)", "a ≤ x ≤ b,  g₁(x) ≤ y ≤ g₂(x)", "∫<sub>a</sub><sup>b</sup> ∫<sub>g₁(x)</sub><sup>g₂(x)</sup> f dy dx"],
      ["Tipo II (horizontais)", "c ≤ y ≤ d,  h₁(y) ≤ x ≤ h₂(y)", "∫<sub>c</sub><sup>d</sup> ∫<sub>h₁(y)</sub><sup>h₂(y)</sup> f dx dy"]
    ]},
    { tipo: "exemplo", titulo: "Exemplo — triângulo x ≥ 0, y ≥ 0, x + y ≤ 2, com f = 2x + y²", texto: "Ordem dy dx: x vai de 0 a 2 e y vai de 0 a <strong>2 − x</strong>.<br>∫₀² [2xy + y³/3]<sub>0</sub><sup>2−x</sup> dx = ∫₀² [2x(2 − x) + (2 − x)³/3] dx = 8/3 + 4/3 = <strong>4</strong>.<br>Ordem dx dy: y de 0 a 2 e x de 0 a 2 − y. O resultado também é 4." },
    { tipo: "dica", texto: "Sempre <strong>desenhe a região</strong> antes. Trace uma reta vertical (ou horizontal) atravessando-a: onde ela entra e sai são os limites da integral interna." },

    { tipo: "titulo", texto: "Integral tripla" },
    { tipo: "texto", texto: "Estende a ideia para três variáveis: ∭<sub>E</sub> f(x, y, z) dV. Com f = 1, dá o volume de E. Com f = densidade, dá a massa total." },
    { tipo: "exemplo", titulo: "Exemplo — ∭ (2x + y + 3z) dV em [0,1]×[0,2]×[0,3]", texto: "Em x (0 a 1): 1 + y + 3z → em y (0 a 2): 4 + 6z → em z (0 a 3): [4z + 3z²]₀³ = 12 + 27 = <strong>39</strong>." },
    { tipo: "cuidado", itens: [
      "A variável da integral interna é tratada como a única variável; as outras são constantes.",
      "Os limites da integral <strong>externa</strong> são sempre números. Só os internos podem depender de outra variável.",
      "Fubini troca a ordem livremente em retângulos. Em regiões gerais, trocar a ordem exige <strong>reescrever os limites</strong>.",
      "Para usar ∫ como probabilidade, a PDF precisa integrar 1 em todo o domínio."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual é o valor de ∫<sub>0</sub><sup>2</sup> 3x² dx?",
      alternativas: ["12", "2,67", "8", "4"],
      correta: 2,
      explicacao: "A primitiva de 3x² é x³ (pois (x³)′ = 3x²). Pelo Teorema Fundamental: 2³ − 0³ = 8.",
      erros: ["12 = 3·2²: calculou a função no ponto em vez de integrar.", "2,67 = 2³/3: dividiu por 3 e esqueceu que o coeficiente 3 multiplica tudo (3 · x³/3 = x³).", null, "4 = 2²: esqueceu de aumentar o expoente para 3."]
    },
    {
      pergunta: "Se f(x, y) ≥ 0, o que ∬<sub>R</sub> f(x, y) dA representa geometricamente?",
      alternativas: ["A área da região R", "A inclinação da superfície", "O volume do sólido sob a superfície z = f(x, y) e acima de R", "O perímetro de R"],
      correta: 2,
      explicacao: "Somamos prismas de base dA e altura f(x, y). O total é o volume entre a superfície e a região R.",
      erros: ["A área de R é ∬ 1 dA, um caso especial com f = 1.", "Inclinação é assunto de derivadas parciais.", null, "Integral dupla não mede perímetro."]
    },
    {
      pergunta: "Calcule ∫<sub>1</sub><sup>3</sup>∫<sub>0</sub><sup>2</sup> (2x + 3y) dx dy.",
      alternativas: ["20", "32", "39", "56"],
      correta: 1,
      explicacao: "Interna: [x² + 3xy]₀² = 4 + 6y. Externa: [4y + 3y²]₁³ = 39 − 7 = 32.",
      erros: ["20 = [4y + 3y²] de 0 a 2: usou os limites de x também para y. Em y, os limites são 1 e 3.", null, "39 = 4·3 + 3·9: esqueceu de subtrair o valor no limite inferior y = 1 (7).", "56 aparece ao integrar 6y como 6y² (a primitiva correta é 3y²: faltou dividir por 2)."]
    },
    {
      pergunta: "O Teorema de Fubini garante que, em uma região retangular com f contínua:",
      alternativas: ["A integral dupla é sempre zero", "A ordem de integração (dx dy ou dy dx) não altera o resultado", "Só é possível integrar primeiro em x", "Os limites internos dependem da variável externa"],
      correta: 1,
      explicacao: "Fubini: em R = [a, b]×[c, d], ∫∫ f dx dy = ∫∫ f dy dx. Escolhemos a ordem mais conveniente.",
      erros: ["Não há motivo para o resultado ser zero; depende de f.", null, "Justamente o contrário: qualquer ordem funciona no retângulo.", "Em retângulos os limites são constantes. Limites variáveis aparecem em regiões gerais."]
    },
    {
      pergunta: "Qual é o valor de ∬ xy dA em R = [0, 2] × [0, 3]?",
      alternativas: ["6", "9", "18", "4,5"],
      correta: 1,
      explicacao: "Função separável em retângulo: (∫₀² x dx)(∫₀³ y dy) = (2)(4,5) = 9.",
      erros: ["6 é a área do retângulo (2·3), não a integral de xy.", null, "18 = 2·9: esqueceu uma das divisões por 2 das primitivas x²/2 ou y²/2.", "4,5 é só ∫₀³ y dy. Faltou multiplicar por ∫₀² x dx = 2."]
    },
    {
      pergunta: "Para a região triangular x ≥ 0, y ≥ 0, x + y ≤ 2, na ordem dy dx, os limites são:",
      alternativas: ["0 ≤ x ≤ 2 e 0 ≤ y ≤ 2", "0 ≤ y ≤ 2 − x e 0 ≤ x ≤ 2 − y", "0 ≤ x ≤ 2 e 0 ≤ y ≤ 2 − x", "0 ≤ x ≤ 2 − y e 0 ≤ y ≤ 2"],
      correta: 2,
      explicacao: "Na ordem dy dx, y é interna: para cada x fixo, y vai de 0 até a reta y = 2 − x. Depois x varia de 0 a 2.",
      erros: ["Esses limites descrevem o quadrado [0, 2]², que contém o dobro da área do triângulo.", "Os dois limites não podem depender um do outro: os limites externos são sempre números.", null, "Esses limites correspondem à ordem dx dy (x interna), não à ordem dy dx pedida."]
    },
    {
      pergunta: "Qual integral dupla fornece a ÁREA de uma região R?",
      alternativas: ["∬<sub>R</sub> x dA", "∬<sub>R</sub> 1 dA", "∬<sub>R</sub> 0 dA", "∬<sub>R</sub> xy dA"],
      correta: 1,
      explicacao: "Integrar a função constante 1 sobre R equivale a um “sólido” de altura 1. O volume numericamente igual à área da base.",
      erros: ["∬ x dA dá o momento em relação ao eixo y (usado para centroides), não a área.", null, "Integrar a função nula dá sempre 0, qualquer que seja a região.", "∬ xy dA dá o volume sob z = xy, não a área."]
    },
    {
      pergunta: "Ao calcular ∫∫ f dy dx, como a variável x é tratada na integral interna?",
      alternativas: ["Como constante", "Como a variável de integração", "É substituída por zero", "É derivada"],
      correta: 0,
      explicacao: "Na integral interna em dy, só y varia; x é fixado e tratado como constante (como nas derivadas parciais).",
      erros: [null, "A variável de integração da interna é y (dy), não x.", "x não vale zero; ele é mantido como um parâmetro fixo.", "Não há derivação: estamos integrando."]
    },
    {
      pergunta: "Qual é o valor de ∭ (2x + y + 3z) dV sobre [0,1] × [0,2] × [0,3]?",
      alternativas: ["39", "27", "6", "12"],
      correta: 0,
      explicacao: "Em x: 1 + y + 3z. Em y (0 a 2): 2 + 2 + 6z = 4 + 6z. Em z (0 a 3): 4·3 + 3·9 = 39.",
      erros: [null, "27 é só a parcela 3z² avaliada em z = 3. Faltou o termo 4z = 12.", "6 é o volume da caixa (1·2·3), que seria ∭ 1 dV.", "12 é só a parcela 4z. Faltou somar 3z² = 27."]
    },
    {
      pergunta: "A PDF f(x) = (x² + 1)/12 em [0, 3] é válida porque:",
      alternativas: ["f(3) = 1", "É sempre crescente", "Não depende de y", "Sua integral em [0, 3] vale 1 e f ≥ 0"],
      correta: 3,
      explicacao: "Uma PDF precisa ser não negativa e ter área total 1: ∫₀³ (x² + 1)/12 dx = (9 + 3)/12 = 1.",
      erros: ["f(3) = 10/12. Além disso, o valor da densidade num ponto não é o critério de validade.", "Ser crescente não é exigência; PDFs podem ter qualquer forma.", "Ser de uma variável não a torna válida. O critério é área 1 e f ≥ 0.", null]
    }
  ],

  discursivas: [
    "Explique com suas palavras o significado geométrico de uma integral dupla e diferencie ∬ f dA de ∬ 1 dA.",
    "Descreva o passo a passo para calcular uma integral iterada, explicando o papel da integral interna e da externa.",
    "Desenhe (descreva) a região limitada por y = x² e y = 4 e escreva a integral dupla da sua área nas duas ordens de integração.",
    "O que diz o Teorema de Fubini e por que ele não permite simplesmente trocar a ordem em regiões não retangulares sem ajustar os limites?",
    "Dê um exemplo de aplicação de integrais múltiplas em um projeto de IA ou de dados, como consumo total, probabilidade conjunta ou valor médio."
  ],

  respostasDiscursivas: [
    "Se f(x, y) ≥ 0, <strong>∬<sub>R</sub> f dA</strong> é o <strong>volume</strong> do sólido entre a superfície z = f(x, y) e a região R do plano: somam-se infinitos prismas de base dA e altura f. Já <strong>∬<sub>R</sub> 1 dA</strong> usa altura 1, e o “volume” numericamente igual à <strong>área</strong> da região R. Dividir a primeira pela segunda dá o valor médio de f em R.",
    "1) Identifique a ordem (ex.: dy dx) e os limites de cada variável.<br>2) <strong>Integral interna:</strong> integre em relação à variável de dentro (y), tratando a outra (x) como constante. O resultado é a área de uma seção transversal para cada x.<br>3) Substitua os limites da variável interna.<br>4) <strong>Integral externa:</strong> integre esse resultado em x entre números fixos, acumulando todas as seções para obter o volume (ou o total).",
    "A região fica entre a parábola y = x² (embaixo) e a reta y = 4 (em cima), que se cruzam em x = ±2.<br><strong>Ordem dy dx:</strong> A = ∫<sub>−2</sub><sup>2</sup> ∫<sub>x²</sub><sup>4</sup> dy dx = ∫<sub>−2</sub><sup>2</sup> (4 − x²) dx = 16 − 16/3 = <strong>32/3</strong>.<br><strong>Ordem dx dy:</strong> y vai de 0 a 4 e x de −√y a √y: A = ∫<sub>0</sub><sup>4</sup> ∫<sub>−√y</sub><sup>√y</sup> dx dy = ∫<sub>0</sub><sup>4</sup> 2√y dy = (4/3)·8 = <strong>32/3</strong>. As duas ordens dão o mesmo resultado.",
    "Fubini garante que, em um <strong>retângulo</strong> [a, b] × [c, d] com f contínua, ∫∫ f dx dy = ∫∫ f dy dx: a ordem não altera o resultado, e os limites continuam os mesmos números. Em regiões gerais, os limites internos são <strong>funções</strong> da variável externa (ex.: y de x² até 4). Ao trocar a ordem, a descrição da região muda: é preciso reescrever os limites (x de −√y a √y) a partir do desenho. Trocar só a ordem dos “d” sem ajustar os limites descreve outra região e dá outro resultado.",
    "Exemplos:<br>• <strong>Consumo total:</strong> se f(t, w) é a potência de um servidor em função do tempo e da carga, ∬ f dA dá a energia total (kWh) para planejar orçamento de nuvem.<br>• <strong>Probabilidade conjunta:</strong> com uma PDF conjunta f(x, y) de temperatura e carga, ∬<sub>R</sub> f dA dá a probabilidade de o fogão operar em uma região crítica.<br>• <strong>Valor médio:</strong> a temperatura média de uma parede é (1/Área)·∬ T(x, y) dA."
  ]
});
