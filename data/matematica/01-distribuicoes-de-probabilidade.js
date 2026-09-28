Plataforma.adicionarAula("matematica", {
  id: "distribuicoes-de-probabilidade",
  titulo: "Distribuições de Probabilidade",
  descricao: "Variáveis aleatórias, PMF, PDF, CDF, valor esperado, Binomial, Uniforme, Normal e escore Z.",
  duracao: "50 min",

  resumo: [
    { tipo: "titulo", texto: "Variável aleatória: o ponto de partida" },
    { tipo: "texto", texto: "Uma <strong>variável aleatória</strong> atribui um <strong>valor numérico</strong> a cada resultado possível de um experimento aleatório. É o que permite fazer contas com a incerteza." },
    { tipo: "tabela", cabecalho: ["Tipo", "Assume…", "Exemplos"], linhas: [
      ["<strong>Discreta</strong>", "valores contáveis (0, 1, 2, …)", "nº de peças defeituosas, nº de pacientes que chegam, sim/não"],
      ["<strong>Contínua</strong>", "qualquer valor em um intervalo", "temperatura exata de um forno, receita, tempo entre falhas"]
    ]},

    { tipo: "titulo", texto: "Funções de probabilidade: PMF, PDF e CDF" },
    { tipo: "subtitulo", texto: "PMF — Função de Massa de Probabilidade (discretas)" },
    { tipo: "formula", legenda: "PMF", texto: "P(X = x) = p(x)", nota: "Dá a probabilidade de X ser exatamente igual a um valor. A soma de todas as p(x) é 1." },
    { tipo: "subtitulo", texto: "PDF — Função Densidade de Probabilidade (contínuas)" },
    { tipo: "formula", legenda: "PDF", texto: "P(a ≤ X ≤ b) = ∫<sub>a</sub><sup>b</sup> f(x) dx", nota: "Probabilidade é a ÁREA sob a curva no intervalo. A área total sob a curva é 1." },
    { tipo: "subtitulo", texto: "CDF — Função de Distribuição Acumulada (ambas)" },
    { tipo: "formula", legenda: "CDF", texto: "F(x) = P(X ≤ x)", nota: "Acumula a probabilidade até x. Sempre cresce (ou fica igual) e converge para 1 (100%)." },
    { tipo: "destaque", titulo: "Conexão com IA", itens: [
      "<strong>Classificação</strong> (churn × retenção, falha × normal) → a IA gera uma <strong>massa de probabilidade discreta</strong> (PMF).",
      "<strong>Regressão</strong> (litros de combustível, receita exata) → a incerteza é uma <strong>densidade contínua</strong> (PDF)."
    ]},

    { tipo: "titulo", texto: "Valor esperado E(X)" },
    { tipo: "texto", texto: "É a <strong>média de longo prazo</strong> da variável: cada valor possível é multiplicado pela sua probabilidade e tudo é somado." },
    { tipo: "formula", legenda: "Valor esperado (discreto)", texto: "E(X) = ∑ [ x · P(X = x) ]" },
    { tipo: "exemplo", titulo: "Exemplo — demanda diária de um recurso", texto: "Demanda 0 a 5 com probabilidades 0,05 · 0,15 · 0,30 · 0,25 · 0,15 · 0,10.<br>E(X) = 0·0,05 + 1·0,15 + 2·0,30 + 3·0,25 + 4·0,15 + 5·0,10 = 0 + 0,15 + 0,60 + 0,75 + 0,60 + 0,50 = <strong>2,60</strong>.<br>Ninguém pede 2,6 unidades num dia, mas em 30 dias espera-se ≈ 78 unidades. É essa a utilidade do valor esperado." },

    { tipo: "titulo", texto: "Distribuição Binomial" },
    { tipo: "texto", texto: "Conta o <strong>número de sucessos</strong> em <strong>n tentativas</strong>. Escrevemos X ~ B(n, p)." },
    { tipo: "lista", itens: [
      "<strong>n fixo</strong> de tentativas;",
      "cada tentativa tem só <strong>dois resultados</strong> (sucesso/fracasso);",
      "<strong>probabilidade p constante</strong> em todas as tentativas;",
      "tentativas <strong>independentes</strong>."
    ]},
    { tipo: "formula", legenda: "Probabilidade binomial", texto: "P(X = k) = C(n, k) · p<sup>k</sup> · (1 − p)<sup>n − k</sup>", nota: "C(n, k) = n! / [k!(n − k)!]  ·  Média: E(X) = n · p" },
    { tipo: "passos", itens: [
      "Identifique n (tentativas), p (probabilidade de sucesso) e k (sucessos desejados).",
      "Calcule a combinação C(n, k).",
      "Multiplique por p<sup>k</sup> e por (1 − p)<sup>n − k</sup>."
    ]},
    { tipo: "exemplo", titulo: "Exemplo — classificador com 80% de precisão", texto: "n = 10 amostras, p = 0,8. Qual a chance de acertar exatamente 9?<br>C(10, 9) = 10 → P(X = 9) = 10 · 0,8<sup>9</sup> · 0,2<sup>1</sup> = 10 · 0,1342 · 0,2 ≈ <strong>0,2684 (26,8%)</strong>.<br>Como E(X) = 10 · 0,8 = 8, acertar 8 é mais provável que acertar 9." },

    { tipo: "titulo", texto: "Distribuição Uniforme Contínua" },
    { tipo: "texto", texto: "Todos os valores de um intervalo [a, b] são “igualmente prováveis”: a PDF é um <strong>retângulo</strong>." },
    { tipo: "formula", legenda: "Uniforme em [a, b]", texto: "f(x) = 1 / (b − a)   ·   E(X) = (a + b) / 2", nota: "P(c < X < d) = (d − c) · 1/(b − a)  → área do retângulo (base × altura)" },
    { tipo: "exemplo", titulo: "Exemplo — pacote de sensor IoT entre 0 e 10 ms", texto: "Altura: 1/(10 − 0) = 0,1. P(3 < X < 6) = (6 − 3) · 0,1 = <strong>0,3 (30%)</strong>.<br>E P(X = 3)? Um ponto tem largura zero, então a área é zero: <strong>P(X = 3) = 0</strong>." },

    { tipo: "titulo", texto: "Distribuição Normal (Gaussiana)" },
    { tipo: "lista", itens: [
      "Formato de <strong>sino</strong> e <strong>simétrica</strong> em torno do centro;",
      "<strong>média = mediana = moda</strong>, todas no centro;",
      "definida por <strong>μ</strong> (centro) e <strong>σ</strong> (largura/dispersão)."
    ]},
    { tipo: "destaque", titulo: "Regra Empírica 68 – 95 – 99,7", itens: [
      "≈ <strong>68%</strong> dos dados em μ ± 1σ",
      "≈ <strong>95%</strong> em μ ± 2σ",
      "≈ <strong>99,7%</strong> em μ ± 3σ"
    ]},
    { tipo: "exemplo", titulo: "Exemplo — resíduos de um modelo (μ = 0, σ = 15)", texto: "P(−15 < X < 30)? −15 = μ − 1σ e 30 = μ + 2σ.<br>De −1σ a +1σ: 68%. De +1σ a +2σ: (95 − 68)/2 = 13,5%.<br>Total: 68% + 13,5% = <strong>81,5%</strong>." },

    { tipo: "titulo", texto: "Padronização e escore Z" },
    { tipo: "texto", texto: "A <strong>Normal Padrão</strong> tem μ = 0 e σ = 1 (Z ~ N(0, 1)). Qualquer normal pode ser convertida nela, e é isso que as tabelas Z usam." },
    { tipo: "formula", legenda: "Escore Z", texto: "Z = (X − μ) / σ", nota: "Quantos desvios padrão o valor está da média. Z > 0: acima; Z < 0: abaixo; Z = 0: na média." },
    { tipo: "exemplo", titulo: "Exemplo — qual entrada é mais incomum?", texto: "A: μ = 100, σ = 20, hoje 140 → Z = 40/20 = <strong>2,0</strong>.<br>B: μ = 5000, σ = 500, hoje 5800 → Z = 800/500 = <strong>1,6</strong>.<br>Mesmo com diferença bruta maior (+800), B é <em>menos</em> incomum que A. O Z coloca tudo na mesma régua." },
    { tipo: "dica", itens: [
      "Em ML, padronizar (Z) evita que variáveis com números grandes (renda) dominem as pequenas (idade).",
      "|Z| > 3 costuma sinalizar <strong>anomalia/outlier</strong>.",
      "Para “maior que” na tabela Z: P(Z > z) = 1 − P(Z < z), ou use a simetria: P(Z > 2,4) = P(Z < −2,4)."
    ]},
    { tipo: "cuidado", itens: [
      "Em variável <strong>contínua</strong>, P(X = valor exato) = 0. Probabilidade só existe em intervalos.",
      "A PDF <strong>não é</strong> probabilidade: ela pode valer mais que 1. Probabilidade é a área.",
      "Binomial exige p constante e independência. Sem isso, a fórmula não vale.",
      "Não confunda σ (desvio padrão) com σ² (variância)."
    ]}
  ],

  objetivas: [
    {
      pergunta: "O número de pacientes que chegam a um hospital em uma hora é uma variável aleatória:",
      alternativas: ["Contínua, pois o tempo é contínuo", "Discreta, pois assume valores contáveis (0, 1, 2, …)", "Uniforme, pois qualquer número é igualmente provável", "Normal, pois todo fenômeno natural é normal"],
      correta: 1,
      explicacao: "Contamos pacientes inteiros: 0, 1, 2, 3… Valores contáveis caracterizam uma variável aleatória discreta, descrita por uma PMF.",
      erros: ["O período (uma hora) é contínuo, mas a variável é a CONTAGEM de pacientes, que só assume inteiros.", null, "“Uniforme” é um tipo de distribuição, não a natureza da variável. E não há motivo para supor que todas as contagens sejam igualmente prováveis.", "Nem todo fenômeno é normal. Além disso, “normal” descreve uma distribuição contínua, e aqui a variável é discreta."]
    },
    {
      pergunta: "Uma PMF indica P(X=0)=0,2, P(X=1)=0,5 e P(X=2)=0,3. Qual é o valor esperado E(X)?",
      alternativas: ["1,0", "0,5", "1,1", "1,5"],
      correta: 2,
      explicacao: "E(X) = 0·0,2 + 1·0,5 + 2·0,3 = 0 + 0,5 + 0,6 = 1,1. Cada valor é multiplicado pela sua probabilidade e os produtos são somados.",
      erros: ["1,0 seria a média simples de 0, 1 e 2, ignorando as probabilidades. O valor esperado é uma média PONDERADA.", "0,5 é só a probabilidade de X = 1, e não o valor esperado.", null, "1,5 não sai da soma ponderada. Provavelmente houve erro no produto 2 · 0,3 = 0,6."]
    },
    {
      pergunta: "Qual condição NÃO é uma premissa da distribuição Binomial?",
      alternativas: ["Número fixo de tentativas n", "Probabilidade de sucesso p constante em cada tentativa", "Tentativas independentes entre si", "Os resultados seguem formato de sino"],
      correta: 3,
      explicacao: "As premissas da Binomial são: n fixo, dois resultados possíveis, p constante e independência. “Formato de sino” é característica da Normal, não uma premissa da Binomial.",
      erros: ["n fixo é justamente a primeira premissa da Binomial.", "p constante é premissa: se p mudasse a cada tentativa, a fórmula não valeria.", "Independência é premissa: o resultado de uma tentativa não pode afetar o de outra.", null]
    },
    {
      pergunta: "Um modelo acerta 80% das previsões. Em 10 previsões independentes, qual é o número ESPERADO de acertos?",
      alternativas: ["8", "9", "10", "0,8"],
      correta: 0,
      explicacao: "Para X ~ B(n, p), E(X) = n · p = 10 · 0,8 = 8 acertos.",
      erros: [null, "9 é um resultado possível, mas não é a média de longo prazo. P(X = 9) ≈ 26,8%, menor que a chance de 8.", "10 acertos exigiria p = 1. Com 80%, acertar tudo é pouco provável (0,8¹⁰ ≈ 10,7%).", "0,8 é a probabilidade de acerto de UMA previsão, não o número esperado em 10."]
    },
    {
      pergunta: "X é uniforme entre 0 e 20 minutos. Qual é P(5 < X < 9)?",
      alternativas: ["0,05", "0,45", "0,25", "0,20"],
      correta: 3,
      explicacao: "Altura do retângulo: 1/(20 − 0) = 0,05. Base do intervalo: 9 − 5 = 4. Área = 4 · 0,05 = 0,20 (20%).",
      erros: ["0,05 é só a altura (densidade) f(x). Faltou multiplicar pela largura do intervalo.", "0,45 = 9/20. Esse cálculo usa P(X < 9) e esquece de descontar o trecho de 0 a 5.", "0,25 = 5/20 usa só o limite inferior, sem calcular a largura 9 − 5.", null]
    },
    {
      pergunta: "Para uma variável contínua X, qual é o valor de P(X = 3)?",
      alternativas: ["Depende da altura da PDF em x = 3", "Zero, porque um único ponto tem largura zero e, portanto, área zero", "Sempre 0,5, pois está no centro", "1/(b − a)"],
      correta: 1,
      explicacao: "Em distribuições contínuas, probabilidade é área sob a curva. Um ponto isolado tem largura zero, então P(X = x) = 0 para qualquer x. Para ter probabilidade positiva é preciso um intervalo, como P(2,9 < X < 3,1).",
      erros: ["A altura f(3) é a densidade, não a probabilidade. Densidade × largura zero = 0.", null, "Nada garante que 3 esteja no centro, e mesmo o centro exato tem probabilidade zero em variável contínua.", "1/(b − a) é a altura da PDF uniforme (densidade), não a probabilidade de um ponto."]
    },
    {
      pergunta: "Em uma distribuição normal, aproximadamente qual porcentagem dos dados está entre μ − 2σ e μ + 2σ?",
      alternativas: ["68%", "99,7%", "95%", "50%"],
      correta: 2,
      explicacao: "Pela Regra Empírica: ≈68% em ±1σ, ≈95% em ±2σ e ≈99,7% em ±3σ.",
      erros: ["68% é a faixa de ±1σ, não de ±2σ.", "99,7% corresponde à faixa de ±3σ, mais larga que a pedida.", null, "50% é a metade da curva (abaixo ou acima da média), não a faixa de ±2σ."]
    },
    {
      pergunta: "O tempo de resposta de uma API é normal com μ = 50 s e σ = 5 s. Qual é o escore Z de 62 s?",
      alternativas: ["2,4", "12", "−2,4", "1,24"],
      correta: 0,
      explicacao: "Z = (X − μ)/σ = (62 − 50)/5 = 12/5 = 2,4. O valor está 2,4 desvios padrão ACIMA da média.",
      erros: [null, "12 é a diferença bruta (62 − 50). Faltou dividir pelo desvio padrão σ = 5.", "O sinal negativo indicaria um valor abaixo da média, mas 62 > 50.", "1,24 = 62/50. Não é a fórmula do escore Z, que usa (X − μ)/σ."]
    },
    {
      pergunta: "Duas features têm escalas diferentes: A (μ=100, σ=20, valor 140) e B (μ=5000, σ=500, valor 5800). Qual valor é relativamente mais incomum?",
      alternativas: ["B, porque a diferença bruta (+800) é maior", "São igualmente incomuns", "Não é possível comparar variáveis de naturezas diferentes", "A, porque Z = 2,0 contra Z = 1,6 de B"],
      correta: 3,
      explicacao: "Z_A = (140 − 100)/20 = 2,0 e Z_B = (5800 − 5000)/500 = 1,6. A está mais longe da própria média em desvios padrão, então é mais incomum.",
      erros: ["Diferenças brutas não são comparáveis entre escalas diferentes. É exatamente para isso que existe o escore Z.", "Os escores Z são diferentes (2,0 × 1,6), então não são igualmente incomuns.", "É possível comparar: a padronização coloca variáveis de naturezas diferentes na mesma escala.", null]
    },
    {
      pergunta: "Sobre a CDF (Função de Distribuição Acumulada), é correto afirmar:",
      alternativas: ["F(x) = P(X = x) para qualquer variável", "F(x) = P(X ≤ x) e converge para 1 quando x cresce", "Só existe para variáveis contínuas", "Pode diminuir quando x aumenta"],
      correta: 1,
      explicacao: "A CDF acumula a probabilidade até x: F(x) = P(X ≤ x). Vale para discretas e contínuas, nunca diminui e tende a 1 (100%).",
      erros: ["P(X = x) é a definição da PMF (discreta), não da CDF.", null, "A CDF existe tanto para variáveis discretas (em “degraus”) quanto contínuas (curva suave).", "A CDF é não decrescente: acumular probabilidade nunca reduz o total."]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre PMF, PDF e CDF, dando um exemplo de variável do seu projeto para cada uma.",
    "Um classificador tem 90% de acerto e será aplicado a 5 amostras independentes. Calcule a probabilidade de acertar exatamente 4 e explique cada etapa do cálculo.",
    "Por que, em uma distribuição contínua, P(X = x) = 0? Isso significa que o valor x é impossível? Justifique.",
    "Os erros de um modelo de regressão são normais com μ = 0 e σ = 10. Use a Regra Empírica para estimar P(−20 < erro < 10) e explique o raciocínio.",
    "Explique por que a padronização por escore Z é importante no pré-processamento de modelos de Machine Learning baseados em distância."
  ],

  respostasDiscursivas: [
    "A <strong>PMF</strong> (função de massa) vale para variáveis <strong>discretas</strong> e dá P(X = x) de cada valor; a soma de todas é 1. Ex.: número de testes físicos reprovados por lote. A <strong>PDF</strong> (densidade) vale para variáveis <strong>contínuas</strong>; a probabilidade é a <strong>área</strong> sob a curva em um intervalo, e a área total é 1. Ex.: temperatura máxima da parede do fogão. A <strong>CDF</strong> vale para ambas e acumula a probabilidade até x: F(x) = P(X ≤ x), sempre crescente até 1. Ex.: probabilidade de a temperatura ficar abaixo do limite de segurança.",
    "É uma Binomial com n = 5, p = 0,9 e k = 4.<br>1) Combinação: C(5, 4) = 5!/(4!·1!) = 5 (há 5 posições possíveis para o único erro).<br>2) p<sup>k</sup> = 0,9⁴ = 0,6561.<br>3) (1 − p)<sup>n−k</sup> = 0,1¹ = 0,1.<br>4) P(X = 4) = 5 · 0,6561 · 0,1 = <strong>0,328 (≈ 32,8%)</strong>.<br>Para comparar: o valor esperado é n·p = 4,5 acertos.",
    "Em uma variável contínua, probabilidade é área sob a PDF. Um único ponto tem <strong>largura zero</strong>, então a área (e a probabilidade) é zero. Isso <strong>não</strong> significa que o valor é impossível: a temperatura pode ser exatamente 3,000… °C, mas a chance de acertar um valor exato entre infinitos possíveis é nula. Por isso, trabalhamos com intervalos, como P(2,9 < X < 3,1).",
    "Com μ = 0 e σ = 10: −20 = μ − 2σ e 10 = μ + 1σ.<br>De −1σ a +1σ há ≈ 68%. De −2σ a −1σ há (95% − 68%)/2 = 13,5%.<br>Total: 68% + 13,5% = <strong>81,5%</strong>. Ou seja, em cerca de 81,5% das previsões o erro fica entre −20 e +10 unidades.",
    "Algoritmos baseados em distância (KNN, K-means) somam diferenças entre features. Se uma variável tem escala muito maior (renda em milhares) do que outra (idade em dezenas), ela <strong>domina</strong> a distância e a outra é praticamente ignorada. O escore Z, z = (x − μ)/σ, coloca todas as features na mesma escala (média 0, desvio 1), de modo que cada uma contribua de forma comparável. Também acelera a convergência de redes neurais e ajuda a identificar outliers (|z| > 3)."
  ]
});
