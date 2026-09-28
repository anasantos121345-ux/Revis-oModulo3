Plataforma.adicionarAula("matematica", {
  id: "funcoes-varias-variaveis",
  titulo: "Funções de Várias Variáveis",
  descricao: "Definição, avaliação, domínio e imagem, gráficos 3D, traços e curvas de nível.",
  duracao: "45 min",

  resumo: [
    { tipo: "titulo", texto: "De uma entrada para várias" },
    { tipo: "tabela", cabecalho: ["", "Uma variável", "Várias variáveis"], linhas: [
      ["Função", "f : ℝ → ℝ, y = f(x)", "f : ℝⁿ → ℝ, z = f(x, y) (n = 2)"],
      ["Ideia", "uma entrada → uma saída", "várias entradas → UMA saída"],
      ["Exemplo", "tempo → distância", "latitude e longitude → altitude"],
      ["Geometria", "curva no plano", "superfície no espaço (n = 2)"]
    ]},
    { tipo: "lista", itens: [
      "<strong>Variáveis independentes:</strong> as entradas, um vetor x ∈ ℝⁿ (ex.: (x, y)).",
      "<strong>Variável dependente:</strong> a saída z = f(x, y), determinada pela regra f."
    ]},
    { tipo: "destaque", titulo: "Conexão com IA", texto: "Um modelo de regressão é uma função de várias variáveis: recebe dezenas de features (clima, demografia, histórico) e as condensa em <strong>uma única previsão numérica</strong> ŷ." },

    { tipo: "titulo", texto: "Avaliar uma função" },
    { tipo: "passos", itens: ["Identifique o ponto (x, y) a partir do cenário.", "Substitua x e y na expressão.", "Calcule respeitando a ordem das operações."] },
    { tipo: "exemplo", titulo: "Exemplo — temperatura de um fogão industrial", texto: "T(x, y) = 2x² + 3y − 5, com carga x = 4 e ambiente y = 25.<br>T(4, 25) = 2(16) + 75 − 5 = 32 + 75 − 5 = <strong>102 °C</strong>." },

    { tipo: "titulo", texto: "Domínio: quais entradas são válidas?" },
    { tipo: "texto", texto: "O domínio é o conjunto de pares (x, y) que produzem uma saída <strong>real</strong>. Excluímos as impossibilidades matemáticas:" },
    { tipo: "tabela", cabecalho: ["Expressão", "Restrição", "Fronteira no gráfico"], linhas: [
      ["Fração a / b", "b ≠ 0", "linha tracejada (excluída)"],
      ["Raiz par √u, ⁴√u…", "u ≥ 0", "linha sólida (incluída)"],
      ["Logaritmo ln(u)", "u &gt; 0 (estritamente)", "linha tracejada (excluída)"]
    ]},
    { tipo: "texto", texto: "Geometricamente, o domínio é uma <strong>região do plano xy</strong>. Desigualdades definem áreas sombreadas; ≤ e ≥ usam fronteira <strong>sólida</strong>; &lt;, &gt; e ≠ usam fronteira <strong>tracejada</strong>." },
    { tipo: "exemplo", titulo: "Exemplo 1 — raiz quadrada", texto: "f(x, y) = √(16 − x² − y²) → 16 − x² − y² ≥ 0 → <strong>x² + y² ≤ 16</strong>: disco fechado de centro (0, 0) e raio 4 (fronteira sólida)." },
    { tipo: "exemplo", titulo: "Exemplo 2 — restrições mistas", texto: "f(x, y) = ln(y − x) + 1/(x + 2).<br>Log: y − x &gt; 0 → <strong>y &gt; x</strong> (região acima da reta y = x, tracejada).<br>Fração: x + 2 ≠ 0 → <strong>x ≠ −2</strong> (reta vertical excluída).<br>Domínio: {(x, y) | y &gt; x e x ≠ −2}." },
    { tipo: "texto", texto: "A <strong>imagem</strong> é o conjunto de valores que z pode assumir. Para √(16 − x² − y²), a imagem é [0, 4]." },

    { tipo: "titulo", texto: "Gráficos 3D e traços" },
    { tipo: "texto", texto: "O gráfico de z = f(x, y) é uma <strong>superfície</strong>. Para entendê-la, fatiamos com planos. Cada fatia gera um <strong>traço</strong> (uma curva 2D)." },
    { tipo: "lista", itens: [
      "Traço no plano <strong>xz</strong>: faça <strong>y = 0</strong>.",
      "Traço no plano <strong>yz</strong>: faça <strong>x = 0</strong>.",
      "Traço horizontal (z = k): gera as curvas de nível."
    ]},
    { tipo: "exemplo", titulo: "Exemplo — z = 4x² + y² (paraboloide elíptico)", texto: "y = 0 → z = 4x²: parábola <strong>estreita</strong> no plano xz.<br>x = 0 → z = y²: parábola <strong>mais aberta</strong> no plano yz." },

    { tipo: "titulo", texto: "Curvas de nível e mapas de contorno" },
    { tipo: "texto", texto: "Uma <strong>curva de nível</strong> é o conjunto de pontos com a mesma saída: f(x, y) = k. Várias delas juntas formam um <strong>mapa de contorno</strong>, como as linhas de altitude de um mapa topográfico." },
    { tipo: "exemplo", titulo: "Exemplo — f(x, y) = x² + y² com k = 1, 4 e 9", texto: "x² + y² = 1, 4 e 9: <strong>círculos concêntricos</strong> de raios 1, 2 e 3." },
    { tipo: "destaque", titulo: "Como ler um mapa de contorno", itens: [
      "Curvas <strong>próximas</strong> → a superfície é <strong>íngreme</strong> (a saída muda rápido).",
      "Curvas <strong>afastadas</strong> → a superfície é <strong>suave</strong>.",
      "Em IA, mapas de contorno mostram a superfície de perda, e a otimização desce em direção ao “fundo do vale”."
    ]},
    { tipo: "dica", itens: [
      "Para achar o domínio, procure três vilões: <strong>denominador, raiz par e logaritmo</strong>.",
      "O domínio final é a <strong>interseção</strong> de todas as restrições.",
      "Para reconhecer uma superfície, calcule os traços com x = 0, y = 0 e z = k."
    ]},
    { tipo: "cuidado", itens: [
      "Raiz par aceita zero (≥ 0), mas logaritmo não aceita (&gt; 0).",
      "Curva de nível fica no plano xy (2D). Traço vertical fica em xz ou yz. Não confunda os dois.",
      "Uma função de várias variáveis tem várias entradas, mas <strong>uma única</strong> saída."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Dada T(x, y) = 2x² + 3y − 5, qual é o valor de T(4, 25)?",
      alternativas: ["102", "86", "107", "1257"],
      correta: 0,
      explicacao: "T(4, 25) = 2·4² + 3·25 − 5 = 32 + 75 − 5 = 102.",
      erros: [null, "86 = 16 + 75 − 5: faltou multiplicar 4² pelo coeficiente 2 (2·16 = 32).", "107 = 32 + 75: faltou subtrair o −5 no final.", "1257 = 2·25² + 3·4 − 5: os valores de x e y foram trocados. x é a carga (4) e y é a temperatura ambiente (25)."]
    },
    {
      pergunta: "Qual é o domínio de f(x, y) = √(9 − x² − y²)?",
      alternativas: ["x² + y² < 9", "x² + y² ≥ 9", "x² + y² ≤ 9 (disco fechado de raio 3)", "Todo o plano ℝ²"],
      correta: 2,
      explicacao: "A raiz par exige argumento não negativo: 9 − x² − y² ≥ 0 → x² + y² ≤ 9, um disco de centro na origem e raio 3, com a fronteira incluída.",
      erros: ["A raiz de zero existe (√0 = 0), então a fronteira x² + y² = 9 está incluída: é ≤, não <.", "Inverteu a desigualdade: fora do círculo o radicando fica negativo.", null, "Para pontos longe da origem, 9 − x² − y² < 0 e a raiz não é real."]
    },
    {
      pergunta: "Para f(x, y) = ln(y − x), qual restrição define o domínio?",
      alternativas: ["y − x ≥ 0", "y − x > 0, ou seja, y > x", "y − x ≠ 0", "Nenhuma, o logaritmo aceita qualquer valor"],
      correta: 1,
      explicacao: "O logaritmo exige argumento ESTRITAMENTE positivo: y − x > 0 → y > x. A fronteira y = x é tracejada (excluída).",
      erros: ["ln(0) não existe, então o zero não pode entrar. A condição é estrita (>).", null, "≠ 0 ainda permitiria valores negativos, e ln de negativo não é real.", "O logaritmo não aceita zero nem negativos."]
    },
    {
      pergunta: "No gráfico do domínio, como se desenha a fronteira de uma restrição do tipo x + 2 ≠ 0?",
      alternativas: ["Linha sólida em x = −2", "Região sombreada à direita de x = −2", "Não se desenha nada", "Linha vertical tracejada em x = −2 (excluída do domínio)"],
      correta: 3,
      explicacao: "“≠” exclui exatamente os pontos da reta x = −2. Pontos excluídos são indicados com linha tracejada.",
      erros: ["Linha sólida indica pontos INCLUÍDOS (≤, ≥), o oposto de ≠.", "≠ não restringe a um lado: ambos os lados são válidos, só a reta é removida.", "É preciso marcar a exclusão; senão o gráfico sugere que x = −2 é permitido.", null]
    },
    {
      pergunta: "Para a superfície z = 4x² + y², qual é o traço no plano xz?",
      alternativas: ["z = y²", "z = 4x², uma parábola estreita", "x² + y² = 4", "z = 4"],
      correta: 1,
      explicacao: "O plano xz corresponde a y = 0. Substituindo: z = 4x² + 0 = 4x², uma parábola voltada para cima e estreita por causa do coeficiente 4.",
      erros: ["z = y² é o traço no plano yz (x = 0).", null, "Essa é uma curva no plano xy, não um traço vertical em xz.", "z = 4 seria um plano horizontal de corte, não o traço em xz."]
    },
    {
      pergunta: "As curvas de nível de f(x, y) = x² + y² para k = 1, 4 e 9 são:",
      alternativas: ["Retas paralelas", "Parábolas", "Círculos concêntricos de raios 1, 2 e 3", "Círculos de raios 1, 4 e 9"],
      correta: 2,
      explicacao: "x² + y² = k é um círculo de raio √k. Para k = 1, 4 e 9, os raios são 1, 2 e 3.",
      erros: ["x² + y² = k não é linear, então não gera retas.", "Parábolas aparecem nos traços verticais (x = 0 ou y = 0), não nas curvas de nível.", null, "O raio é √k, não k. Para k = 4, o raio é 2."]
    },
    {
      pergunta: "Em um mapa de contorno, curvas de nível muito próximas umas das outras indicam:",
      alternativas: ["Região íngreme: a função muda rapidamente", "Região plana: a função quase não muda", "Um erro no gráfico", "Que a função não está definida ali"],
      correta: 0,
      explicacao: "Curvas próximas significam que uma pequena distância no plano gera uma grande mudança de nível: a superfície é íngreme.",
      erros: [null, "Região plana tem curvas AFASTADAS: é preciso andar muito para mudar de nível.", "É uma leitura legítima do mapa, igual à dos mapas topográficos.", "Curvas de nível só existem onde a função está definida."]
    },
    {
      pergunta: "Qual é o domínio de f(x, y) = 1/(x − y)?",
      alternativas: ["x > y", "x ≠ y (todo o plano, exceto a reta y = x)", "x = y", "x ≥ 0 e y ≥ 0"],
      correta: 1,
      explicacao: "O denominador não pode ser zero: x − y ≠ 0 → x ≠ y. Retira-se apenas a reta y = x (tracejada).",
      erros: ["x < y também é permitido: o denominador fica negativo, mas não zero.", null, "x = y é exatamente o que precisa ser EXCLUÍDO.", "Não há raiz nem logaritmo, então não há exigência de positividade."]
    },
    {
      pergunta: "Qual afirmação sobre funções de várias variáveis está correta?",
      alternativas: ["Possuem várias saídas para cada entrada", "Seu gráfico, com duas entradas, é sempre uma reta", "Associam uma única saída a cada combinação de várias entradas", "Não podem ser usadas em Machine Learning"],
      correta: 2,
      explicacao: "f : ℝⁿ → ℝ recebe um vetor de entradas e devolve um único número. É exatamente o que um modelo de regressão faz com várias features.",
      erros: ["Função tem uma única saída por entrada. Várias saídas seriam uma função vetorial.", "Com duas entradas, o gráfico é uma superfície no espaço 3D, não uma reta.", null, "São a base da ML: um modelo mapeia muitas features em uma previsão."]
    },
    {
      pergunta: "Qual é o domínio de g(x, y) = √x + ln(y)?",
      alternativas: ["x > 0 e y > 0", "x ≥ 0 e y ≥ 0", "x ≥ 0 ou y > 0", "x ≥ 0 e y > 0"],
      correta: 3,
      explicacao: "√x exige x ≥ 0 (zero é permitido) e ln(y) exige y > 0 (zero não é permitido). As duas condições valem juntas (interseção).",
      erros: ["√0 existe, então x = 0 deve ser incluído.", "ln(0) não existe, então y = 0 deve ser excluído.", "Precisamos das DUAS condições ao mesmo tempo (“e”), não de uma ou outra.", null]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre uma função de uma variável e uma função de várias variáveis, relacionando com um modelo preditivo do seu projeto.",
    "Determine e descreva geometricamente o domínio de f(x, y) = √(25 − x² − y²) + 1/y.",
    "O que são curvas de nível? Explique como interpretar o espaçamento entre elas em um mapa de contorno.",
    "Descreva o passo a passo para encontrar os traços da superfície z = x² + 9y² nos planos xz e yz e identifique as formas obtidas.",
    "Por que é importante que um sistema de IA filtre entradas fora do domínio da função antes de processá-las? Dê um exemplo."
  ],

  respostasDiscursivas: [
    "Uma função de <strong>uma variável</strong> (y = f(x)) liga uma entrada a uma saída e seu gráfico é uma curva. Uma função de <strong>várias variáveis</strong> (z = f(x, y, …)) combina várias entradas em <strong>uma única</strong> saída; com duas entradas, o gráfico é uma superfície. O modelo do projeto é desse tipo: recebe carga do fogão, temperatura ambiente, tipo de queimador, tempo de uso… e devolve uma única previsão, a temperatura da parede.",
    "Duas restrições:<br>1) Raiz par: 25 − x² − y² ≥ 0 → <strong>x² + y² ≤ 25</strong>, disco fechado de centro (0, 0) e raio 5 (fronteira sólida).<br>2) Denominador: <strong>y ≠ 0</strong>, então retira-se o eixo x (linha tracejada).<br>Domínio: {(x, y) | x² + y² ≤ 25 e y ≠ 0}. Geometricamente, é o disco de raio 5 cortado ao meio pelo eixo x: duas metades (superior e inferior), sem os pontos com y = 0.",
    "Curva de nível é o conjunto de pontos (x, y) em que a função tem o mesmo valor: f(x, y) = k. Várias curvas para diferentes k formam um mapa de contorno, como as linhas de altitude de um mapa topográfico. <strong>Curvas próximas</strong> indicam que a função muda rápido (região íngreme); <strong>curvas afastadas</strong> indicam mudança lenta (região suave). Em IA, isso ajuda a ler superfícies de perda e a entender em que direção a saída é mais sensível.",
    "1) Traço no plano <strong>xz</strong>: faça y = 0 → z = x², uma parábola voltada para cima.<br>2) Traço no plano <strong>yz</strong>: faça x = 0 → z = 9y², também uma parábola para cima, porém bem mais <strong>estreita</strong> por causa do coeficiente 9.<br>3) Opcional, com z = k: x² + 9y² = k, elipses.<br>Conclusão: é um <strong>paraboloide elíptico</strong>, mais íngreme na direção y.",
    "Fora do domínio a função não produz um número real: raiz de negativo, logaritmo de zero, divisão por zero. Sem filtro, o sistema pode gerar NaN, travar ou, pior, entregar uma previsão sem sentido que alguém usa para decidir. Ex.: se o modelo usa ln(carga) e chega uma leitura de sensor com carga = 0 ou negativa (erro de sensor), a previsão quebra. Validar as entradas antes (faixas plausíveis, tipos, zeros) protege o pipeline e sinaliza dados ruins para revisão."
  ]
});
