Plataforma.adicionarAula("matematica", {
  id: "derivadas-parciais",
  titulo: "Derivadas Parciais",
  descricao: "Revisão de derivadas, derivadas parciais de 1ª e 2ª ordem, derivadas mistas (Clairaut) e regra da cadeia com várias variáveis.",
  duracao: "55 min",

  resumo: [
    { tipo: "titulo", texto: "Revisão: regras de derivação" },
    { tipo: "tabela", cabecalho: ["Função f(x)", "Derivada f′(x)"], linhas: [
      ["c (constante)", "0"],
      ["xⁿ (regra da potência)", "n·xⁿ⁻¹"],
      ["eˣ", "eˣ"],
      ["sen(x)", "cos(x)"],
      ["cos(x)", "−sen(x)"],
      ["ln(x)", "1/x"]
    ]},
    { tipo: "tabela", cabecalho: ["Regra", "Função", "Derivada"], linhas: [
      ["Constante multiplicando", "c·f", "c·f′"],
      ["Soma / diferença", "f ± g", "f′ ± g′"],
      ["Produto", "f·g", "f′·g + f·g′"],
      ["Quociente", "f / g", "(f′·g − f·g′) / g²"],
      ["Cadeia", "f(g(x))", "f′(g(x)) · g′(x)"]
    ]},
    { tipo: "destaque", titulo: "A regra de ouro das constantes", itens: [
      "<strong>Constantes aditivas desaparecem:</strong> (5x³ + 4)′ = 15x². O 4 some.",
      "<strong>Constantes multiplicativas permanecem:</strong> (2x)′ = 2 e (−2cos x)′ = 2 sen x."
    ]},

    { tipo: "titulo", texto: "O que é uma derivada parcial" },
    { tipo: "texto", texto: "Em z = f(x, y, …), a derivada parcial mede <strong>como z muda quando UMA variável varia e todas as outras ficam fixas</strong>. Usa-se o símbolo ∂ (“d rond”)." },
    { tipo: "formula", legenda: "Notação", texto: "f<sub>x</sub> = ∂f/∂x   ·   f<sub>y</sub> = ∂f/∂y", nota: "Para derivar em x, trate y como constante (e vice-versa)." },
    { tipo: "texto", texto: "<strong>Geometricamente</strong>, f<sub>x</sub> é a inclinação da reta tangente à superfície quando andamos só na direção x (fatia com y fixo). f<sub>y</sub> é a inclinação na direção y." },
    { tipo: "exemplo", titulo: "Exemplo — custo de rota C(x, y) = 3x²y + y³ − 5x + 10", texto: "<strong>∂C/∂x</strong> (y constante): 3y·2x + 0 − 5 + 0 = <strong>6xy − 5</strong>. O y³ e o 10 somem, pois são constantes aditivas em relação a x.<br><strong>∂C/∂y</strong> (x constante): 3x²·1 + 3y² − 0 + 0 = <strong>3x² + 3y²</strong>. O −5x e o 10 somem." },
    { tipo: "destaque", titulo: "Conexão com IA: impacto marginal", texto: "Se a demanda D depende da inflação x e do preço y, <strong>D<sub>y</sub></strong> mede o efeito de mudar o preço mantendo a inflação fixa. Comparar |D<sub>x</sub>| e |D<sub>y</sub>| mostra qual variável tem mais influência local na previsão (sensibilidade)." },

    { tipo: "titulo", texto: "Derivadas de 2ª ordem e mistas" },
    { tipo: "formula", legenda: "Segunda ordem", texto: "f<sub>xx</sub> = ∂²f/∂x²   ·   f<sub>yy</sub> = ∂²f/∂y²", nota: "Descrevem a concavidade (curvatura) da superfície ao longo de cada eixo." },
    { tipo: "formula", legenda: "Mistas", texto: "f<sub>xy</sub> = ∂/∂y (f<sub>x</sub>)   ·   f<sub>yx</sub> = ∂/∂x (f<sub>y</sub>)", nota: "Medem como a inclinação em uma direção muda quando andamos na outra: a INTERAÇÃO entre variáveis." },
    { tipo: "destaque", titulo: "Teorema de Clairaut (Schwarz)", texto: "Se as derivadas mistas são contínuas, então <strong>f<sub>xy</sub> = f<sub>yx</sub></strong>. A ordem de derivação não importa." },
    { tipo: "exemplo", titulo: "Exemplo — f(x, y) = x³y² + 4xy", texto: "f<sub>x</sub> = 3x²y² + 4y  →  f<sub>xx</sub> = 6xy²  →  f<sub>xy</sub> = 6x²y + 4<br>f<sub>y</sub> = 2x³y + 4x  →  f<sub>yy</sub> = 2x³  →  f<sub>yx</sub> = 6x²y + 4 ✓ (Clairaut)" },

    { tipo: "titulo", texto: "Regra da cadeia com várias variáveis" },
    { tipo: "texto", texto: "Se z = f(x, y) e x e y dependem do tempo t, a variação total de z soma as contribuições de cada caminho:" },
    { tipo: "formula", legenda: "Regra da cadeia", texto: "dz/dt = (∂z/∂x)·(dx/dt) + (∂z/∂y)·(dy/dt)" },
    { tipo: "exemplo", titulo: "Exemplo — z = x·y², x(t) = t², y(t) = 2t + 1, em t = 2", texto: "∂z/∂x = y², ∂z/∂y = 2xy, dx/dt = 2t, dy/dt = 2.<br>Em t = 2: x = 4, y = 5 → dz/dt = 5²·(2·2) + 2·4·5·2 = 25·4 + 80 = <strong>180</strong>." },
    { tipo: "exemplo", titulo: "Cadeia dentro de uma função composta", texto: "∂/∂x [sen(x²y − z)] = cos(x²y − z) · 2xy (deriva o de fora e multiplica pela derivada do de dentro em relação a x)." },
    { tipo: "dica", itens: [
      "Antes de derivar em x, circule mentalmente tudo o que <strong>não</strong> tem x: é constante.",
      "Termos que só têm a outra variável (y³, 10) <strong>somem</strong>. Os que multiplicam x (3y em 3x²y) <strong>ficam</strong>.",
      "Use Clairaut para conferir suas contas: f<sub>xy</sub> e f<sub>yx</sub> devem bater."
    ]},
    { tipo: "cuidado", itens: [
      "(cos x)′ = <strong>−</strong>sen x. O sinal negativo é um erro clássico.",
      "Na cadeia, não esqueça de multiplicar pela derivada interna.",
      "Na regra da cadeia multivariável, não substitua x(t) e y(t) em z antes de derivar se o exercício pede o método da cadeia.",
      "f<sub>xy</sub> significa derivar primeiro em x e depois em y."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual é a derivada de f(x) = 5x³ + 4?",
      alternativas: ["15x² + 4", "15x²", "5x²", "15x³"],
      correta: 1,
      explicacao: "Regra da potência: (5x³)′ = 5·3x² = 15x². A constante aditiva 4 desaparece: (4)′ = 0.",
      erros: ["A constante aditiva 4 deveria sumir, pois sua derivada é 0.", null, "Faltou multiplicar pelo expoente 3: 5·3 = 15.", "O expoente deve diminuir em 1: x³ vira x²."]
    },
    {
      pergunta: "Qual é a derivada de f(x) = −2cos(x) + 7?",
      alternativas: ["−2sen(x)", "2cos(x)", "2sen(x) + 7", "2sen(x)"],
      correta: 3,
      explicacao: "(cos x)′ = −sen x. Logo, −2·(−sen x) = 2sen x. O 7 é constante aditiva e desaparece.",
      erros: ["Esqueceu que a derivada do cosseno já traz um sinal negativo: −2·(−sen x) = +2sen x.", "A derivada do cosseno é −seno, não cosseno.", "O 7 é constante aditiva e deveria desaparecer.", null]
    },
    {
      pergunta: "Para C(x, y) = 3x²y + y³ − 5x + 10, qual é ∂C/∂x?",
      alternativas: ["6xy − 5", "6xy + 3y² − 5", "3x² + 3y²", "6x − 5"],
      correta: 0,
      explicacao: "Tratando y como constante: (3x²y)′ = 6xy, (y³)′ = 0, (−5x)′ = −5, (10)′ = 0. Resultado: 6xy − 5.",
      erros: [null, "y³ é constante em relação a x, então desaparece e não vira 3y².", "Essa é ∂C/∂y, a derivada em relação a y.", "O y multiplicativo em 3x²y deveria permanecer: 6x·y."]
    },
    {
      pergunta: "Para a mesma C(x, y) = 3x²y + y³ − 5x + 10, qual é ∂C/∂y?",
      alternativas: ["6xy − 5", "3x² + 3y² − 5", "3x² + 3y²", "3y²"],
      correta: 2,
      explicacao: "Tratando x como constante: (3x²y)′ = 3x², (y³)′ = 3y², (−5x)′ = 0, (10)′ = 0. Resultado: 3x² + 3y².",
      erros: ["Essa é a derivada em relação a x.", "−5x é constante em relação a y e desaparece.", null, "Faltou derivar 3x²y em relação a y, que dá 3x² (o 3x² é constante multiplicativa e permanece)."]
    },
    {
      pergunta: "Geometricamente, f<sub>x</sub>(a, b) representa:",
      alternativas: ["A área sob a superfície", "A inclinação da tangente à superfície na direção x, com y fixo em b", "A altura da superfície no ponto (a, b)", "A curvatura na direção y"],
      correta: 1,
      explicacao: "Fixando y = b, cortamos a superfície e obtemos uma curva. f_x(a, b) é a inclinação da reta tangente a essa curva em x = a.",
      erros: ["Área sob superfície é assunto de integrais, não de derivadas.", null, "A altura é o próprio valor f(a, b), não a derivada.", "Curvatura em y é f_yy (segunda ordem na direção y)."]
    },
    {
      pergunta: "Se f(x, y) = x³y² + 4xy, qual é f<sub>xy</sub>?",
      alternativas: ["6xy²", "2x³", "3x²y² + 4y", "6x²y + 4"],
      correta: 3,
      explicacao: "f_x = 3x²y² + 4y. Derivando em y: f_xy = 6x²y + 4.",
      erros: ["6xy² é f_xx (derivou em x duas vezes).", "2x³ é f_yy (derivou duas vezes em y), não a derivada mista.", "3x²y² + 4y é só a primeira derivada f_x. Faltou derivar em y.", null]
    },
    {
      pergunta: "O Teorema de Clairaut afirma que, se as derivadas mistas são contínuas:",
      alternativas: ["f<sub>xx</sub> = f<sub>yy</sub>", "f<sub>xy</sub> = f<sub>yx</sub>", "f<sub>x</sub> = f<sub>y</sub>", "Todas as derivadas de 2ª ordem são zero"],
      correta: 1,
      explicacao: "Clairaut (ou Schwarz): a ordem de derivação das mistas não importa, f_xy = f_yx, desde que sejam contínuas.",
      erros: ["f_xx e f_yy medem curvaturas em direções diferentes e, em geral, são diferentes.", null, "As derivadas de primeira ordem em x e em y costumam ser diferentes.", "Não há essa exigência. Derivadas de 2ª ordem podem ter qualquer valor."]
    },
    {
      pergunta: "z = x·y², com x(t) = t² e y(t) = 2t + 1. Pela regra da cadeia, quanto vale dz/dt em t = 2?",
      alternativas: ["100", "80", "180", "25"],
      correta: 2,
      explicacao: "dz/dt = y²·(2t) + 2xy·2. Em t = 2: x = 4, y = 5 → 25·4 + 2·4·5·2 = 100 + 80 = 180.",
      erros: ["100 é só a parcela (∂z/∂x)(dx/dt). Faltou somar a contribuição de y.", "80 é só a parcela (∂z/∂y)(dy/dt). Faltou somar a contribuição de x.", null, "25 é y² em t = 2, sem multiplicar pelas taxas de variação."]
    },
    {
      pergunta: "Qual é ∂/∂x de sen(x²y − z)?",
      alternativas: ["cos(x²y − z) · 2xy", "cos(x²y − z)", "−cos(x²y − z) · 2xy", "sen(2xy)"],
      correta: 0,
      explicacao: "Regra da cadeia: derivada do seno (cosseno) aplicada ao interior, multiplicada pela derivada do interior em relação a x: ∂(x²y − z)/∂x = 2xy.",
      erros: [null, "Faltou multiplicar pela derivada da função de dentro (2xy).", "A derivada do seno é +cosseno, sem sinal negativo.", "Não se deriva “por dentro” do seno. Aplica-se a regra da cadeia."]
    },
    {
      pergunta: "Em um modelo de demanda D(x, y), onde x é a inflação e y o preço, |D<sub>y</sub>| muito maior que |D<sub>x</sub>| no ponto atual indica que:",
      alternativas: ["A inflação é a variável mais influente localmente", "As variáveis não afetam a demanda", "D<sub>xy</sub> = 0", "O preço tem maior influência local sobre a demanda prevista"],
      correta: 3,
      explicacao: "Derivadas parciais medem impacto marginal. Se |D_y| > |D_x|, uma pequena variação no preço muda mais a demanda do que a mesma variação na inflação.",
      erros: ["É o contrário: a derivada maior em módulo é a do preço (y).", "Derivadas não nulas indicam justamente que as variáveis afetam a demanda.", "Comparar primeiras derivadas não informa nada sobre a derivada mista.", null]
    }
  ],

  discursivas: [
    "Explique com suas palavras o que é uma derivada parcial e por que as “outras” variáveis são tratadas como constantes.",
    "Calcule f_x, f_y, f_xy e f_yx de f(x, y) = x²y³ − 2xy + 7 e verifique o Teorema de Clairaut.",
    "Interprete geometricamente f_x e f_y em um ponto de uma superfície. Se quiser, use um desenho descrito em palavras.",
    "Explique como derivadas parciais podem indicar a importância (sensibilidade) de cada feature em um modelo preditivo.",
    "Descreva, com um exemplo próprio, como aplicar a regra da cadeia com várias variáveis quando x e y dependem do tempo."
  ],

  respostasDiscursivas: [
    "A derivada parcial mede como a saída muda quando <strong>apenas uma</strong> variável varia. Para isolar esse efeito, as outras precisam ficar paradas, e por isso são tratadas como constantes. É o “mantidas as demais condições”: ∂T/∂x responde quanto a temperatura muda se aumentarmos só a carga, com o ambiente fixo. Consequência nas contas: constantes aditivas somem e multiplicativas permanecem.",
    "f = x²y³ − 2xy + 7<br><strong>f<sub>x</sub></strong> = 2xy³ − 2y (y é constante)<br><strong>f<sub>y</sub></strong> = 3x²y² − 2x (x é constante)<br><strong>f<sub>xy</sub></strong> = ∂/∂y (2xy³ − 2y) = 6xy² − 2<br><strong>f<sub>yx</sub></strong> = ∂/∂x (3x²y² − 2x) = 6xy² − 2<br>Como f<sub>xy</sub> = f<sub>yx</sub>, o Teorema de Clairaut é confirmado (as derivadas mistas são contínuas).",
    "Imagine a superfície como um morro. Em um ponto, corte o morro com um plano vertical paralelo ao eixo x (y fixo): surge uma curva, e f<sub>x</sub> é a <strong>inclinação da tangente</strong> a essa curva, ou seja, o quanto se sobe ou desce andando só para o leste. Fazendo o corte paralelo ao eixo y (x fixo), f<sub>y</sub> é a inclinação andando só para o norte. f<sub>x</sub> positivo indica subida na direção x; negativo, descida.",
    "A derivada parcial ∂ŷ/∂xᵢ mede o <strong>impacto marginal</strong> da feature xᵢ na previsão, mantendo as outras fixas. Comparando |∂ŷ/∂x₁| e |∂ŷ/∂x₂| no ponto de operação, vemos qual variável mexe mais na saída localmente. Ex.: se a derivada da temperatura em relação à carga é 3 °C por unidade e em relação ao ambiente é 0,5 °C por °C, a carga é a alavanca mais sensível. Cuidado: vale localmente e depende da escala das features.",
    "Seja T(x, y) = 2x + xy a temperatura, com carga x(t) = 3t e ambiente y(t) = 20 + t.<br>Regra: dT/dt = (∂T/∂x)(dx/dt) + (∂T/∂y)(dy/dt).<br>∂T/∂x = 2 + y; ∂T/∂y = x; dx/dt = 3; dy/dt = 1.<br>Em t = 1: x = 3, y = 21 → dT/dt = (2 + 21)·3 + 3·1 = 69 + 3 = <strong>72</strong> unidades por unidade de tempo. Cada caminho (via carga e via ambiente) contribui para a variação total."
  ]
});
