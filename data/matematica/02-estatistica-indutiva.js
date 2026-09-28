Plataforma.adicionarAula("matematica", {
  id: "estatistica-indutiva",
  titulo: "Estatística Indutiva: Intervalos e Testes de Hipóteses",
  descricao: "Teorema do Limite Central, erro padrão, intervalos de confiança, tamanho de amostra, H₀/Hₐ, erros tipo I e II, teste Z e teste T.",
  duracao: "55 min",

  resumo: [
    { tipo: "titulo", texto: "Da amostra para a população" },
    { tipo: "texto", texto: "Estatística <strong>indutiva</strong> (ou inferencial) usa uma <strong>amostra</strong> para tirar conclusões sobre a <strong>população</strong>. Como toda amostra tem aleatoriedade, as conclusões vêm sempre acompanhadas de uma medida de incerteza." },

    { tipo: "titulo", texto: "Teorema do Limite Central (TLC)" },
    { tipo: "texto", texto: "Retire muitas amostras de tamanho n e calcule a média x̄ de cada uma. A distribuição dessas médias é a <strong>distribuição amostral da média</strong>." },
    { tipo: "destaque", titulo: "O que o TLC garante", texto: "Seja qual for a forma da população (assimétrica, uniforme…), a distribuição amostral da média <strong>se aproxima de uma Normal</strong> à medida que n cresce (regra prática: <strong>n ≥ 30</strong>)." },
    { tipo: "formula", legenda: "Propriedades da distribuição amostral", texto: "μ<sub>x̄</sub> = μ   ·   σ<sub>x̄</sub> = σ / √n", nota: "σ/√n é o ERRO PADRÃO (EP). Quanto maior n, menor o EP e mais precisa a média amostral." },
    { tipo: "exemplo", titulo: "Exemplo — erro padrão de um lote de avaliação", texto: "Erros individuais têm σ = 14 (distribuição assimétrica). Lote com n = 49.<br>EP = 14 / √49 = 14 / 7 = <strong>2</strong>. As previsões individuais variam 14 unidades, mas a média de lotes de 49 varia só 2, e segue um sino previsível graças ao TLC." },

    { tipo: "titulo", texto: "Intervalos de confiança" },
    { tipo: "lista", itens: [
      "<strong>Estimativa pontual:</strong> um único número (ex.: x̄ = 12).",
      "<strong>Estimativa intervalar:</strong> uma faixa que provavelmente contém o parâmetro verdadeiro.",
      "<strong>Nível de confiança (1 − α):</strong> proporção de intervalos que capturariam o parâmetro se repetíssemos o experimento muitas vezes (90%, 95%, 99%)."
    ]},
    { tipo: "formula", legenda: "IC para a média (σ conhecido ou n ≥ 30)", texto: "x̄ − E ≤ μ ≤ x̄ + E,   com   E = z<sub>α/2</sub> · σ / √n" },
    { tipo: "tabela", cabecalho: ["Confiança", "α", "Área acumulada procurada", "z<sub>α/2</sub>"], linhas: [
      ["90%", "0,10", "0,9500", "1,645"],
      ["95%", "0,05", "0,9750", "1,96"],
      ["98%", "0,02", "0,9900", "2,33"],
      ["99%", "0,01", "0,9950", "2,576"]
    ]},
    { tipo: "exemplo", titulo: "Exemplo — IC de 95% para o erro médio de um modelo", texto: "n = 100, x̄ = 12, σ = 4. E = 1,96 · 4/√100 = 1,96 · 0,4 = 0,784.<br>IC 95%: <strong>11,216 < μ < 12,784</strong>.<br>Com 98%: E = 2,33 · 0,4 = 0,932 → 11,068 < μ < 12,932. <em>Mais confiança exige um intervalo mais largo.</em>" },
    { tipo: "subtitulo", texto: "Tamanho mínimo de amostra" },
    { tipo: "formula", legenda: "Isolando n na margem de erro", texto: "n = ( z<sub>α/2</sub> · σ / E )<sup>2</sup>", nota: "Sempre arredonde PARA CIMA: a amostra precisa garantir a margem desejada." },
    { tipo: "exemplo", titulo: "Exemplo — margem de 1 ms com 99% de confiança", texto: "σ = 5 ms, E = 1, z = 2,576 → n = (2,576 · 5 / 1)² = 12,88² ≈ 165,9 → <strong>166 amostras</strong>." },

    { tipo: "titulo", texto: "Teste de hipóteses" },
    { tipo: "lista", itens: [
      "<strong>H₀ (hipótese nula):</strong> o status quo, “não há mudança”. Sempre contém a igualdade (=, ≤ ou ≥).",
      "<strong>Hₐ ou H₁ (alternativa):</strong> o que queremos provar, complementar a H₀.",
      "<strong>Bilateral:</strong> Hₐ com ≠. <strong>Unilateral:</strong> Hₐ com &gt; ou &lt;."
    ]},
    { tipo: "exemplo", titulo: "Exemplo — a V2 do modelo reduz o erro de 15?", texto: "H₀: μ<sub>V2</sub> ≥ 15 (sem melhoria)  ·  Hₐ: μ<sub>V2</sub> &lt; 15 (há melhoria).<br>É <strong>unilateral</strong>, porque só interessa se o erro DIMINUI." },
    { tipo: "tabela", cabecalho: ["", "H₀ verdadeira", "H₀ falsa"], linhas: [
      ["<strong>Rejeito H₀</strong>", "❌ Erro Tipo I (falso positivo), prob. α", "✅ Decisão correta: poder = 1 − β"],
      ["<strong>Não rejeito H₀</strong>", "✅ Decisão correta", "❌ Erro Tipo II (falso negativo), prob. β"]
    ]},
    { tipo: "destaque", titulo: "Consequências no projeto", itens: [
      "<strong>Tipo I:</strong> implantar a V2 achando que é melhor quando não é → custo de infraestrutura e engenharia sem ganho.",
      "<strong>Tipo II:</strong> descartar uma V2 que era de fato melhor → custo de oportunidade."
    ]},

    { tipo: "titulo", texto: "Teste Z × Teste T" },
    { tipo: "tabela", cabecalho: ["Use…", "Quando", "Estatística"], linhas: [
      ["<strong>Teste Z</strong>", "σ populacional conhecido <em>ou</em> n ≥ 30", "Z = (x̄ − μ₀) / (σ/√n)"],
      ["<strong>Teste T</strong>", "σ desconhecido <em>e</em> n &lt; 30", "T = (x̄ − μ₀) / (s/√n), com gl = n − 1"]
    ]},
    { tipo: "texto", texto: "A distribuição <strong>T de Student</strong> parece a normal, mas tem <strong>caudas mais longas</strong>, que compensam a incerteza de estimar σ com s em amostras pequenas. Quanto maior n, mais ela se aproxima da Z." },
    { tipo: "exemplo", titulo: "Exemplo — o novo modelo é mais rápido que 50 ms?", texto: "n = 15, x̄ = 46, s = 6. H₀: μ ≥ 50 · Hₐ: μ &lt; 50. σ é desconhecido e n &lt; 30 → <strong>teste T</strong>.<br>T = (46 − 50)/(6/√15) = −4/1,549 ≈ <strong>−2,58</strong>. Com gl = 14 e α = 0,05 (unilateral à esquerda), T<sub>crítico</sub> ≈ −1,761. Como −2,58 &lt; −1,761, <strong>rejeitamos H₀</strong>: há evidência de redução." },
    { tipo: "dica", itens: [
      "Roteiro de teste: (1) escreva H₀ e Hₐ; (2) escolha Z ou T; (3) calcule a estatística; (4) compare com o valor crítico (ou o p-valor com α); (5) conclua no contexto do negócio.",
      "Se a estatística cai na região crítica (ou p-valor &lt; α), <strong>rejeite H₀</strong>."
    ]},
    { tipo: "cuidado", itens: [
      "Nunca diga “aceito H₀”. O correto é <strong>“não rejeito H₀”</strong>: faltou evidência, e isso não prova que H₀ é verdadeira.",
      "IC de 95% não significa “95% de chance de μ estar neste intervalo específico”. Significa que o <em>método</em> acerta em 95% das repetições.",
      "O erro padrão usa √n, não n: quadruplicar a amostra só divide o EP por 2.",
      "No teste T, os graus de liberdade são n − 1, e não n."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Segundo o Teorema do Limite Central, a distribuição das médias amostrais:",
      alternativas: ["Tem sempre a mesma forma da população original", "Aproxima-se de uma Normal à medida que n aumenta, mesmo se a população não for normal", "Só é normal se a população for normal", "Fica mais larga à medida que n aumenta"],
      correta: 1,
      explicacao: "O TLC afirma que, independentemente da forma da população, a distribuição de x̄ tende à Normal quando n cresce (na prática, n ≥ 30).",
      erros: ["A graça do TLC é justamente que a forma da população NÃO precisa se repetir: a média amostral tende à Normal.", null, "O TLC vale mesmo para populações não normais (assimétricas, uniformes…). Essa é a sua força.", "É o contrário: o erro padrão σ/√n diminui com n, então a distribuição fica mais ESTREITA."]
    },
    {
      pergunta: "Com σ = 20 e n = 100, qual é o erro padrão da média?",
      alternativas: ["0,2", "20", "2", "200"],
      correta: 2,
      explicacao: "EP = σ/√n = 20/√100 = 20/10 = 2. A média de amostras de 100 varia bem menos que os valores individuais.",
      erros: ["0,2 = 20/100: dividiu por n em vez de √n.", "20 é o desvio padrão populacional, sem dividir por √n.", null, "200 = 20 · 10: multiplicou por √n em vez de dividir."]
    },
    {
      pergunta: "Para um intervalo de confiança de 95%, qual valor de z<sub>α/2</sub> se usa?",
      alternativas: ["1,645", "2,576", "1,96", "2,33"],
      correta: 2,
      explicacao: "95% deixa 5% nas caudas (2,5% em cada). A área acumulada até o ponto é 0,975, que corresponde a z = 1,96.",
      erros: ["1,645 corresponde a 90% de confiança (área 0,95).", "2,576 corresponde a 99% de confiança (área 0,995).", null, "2,33 corresponde a 98% de confiança (área 0,99)."]
    },
    {
      pergunta: "Mantidos x̄, σ e n, o que acontece com o intervalo de confiança ao passar de 95% para 99% de confiança?",
      alternativas: ["Fica mais estreito", "Fica mais largo", "Não muda", "Deixa de conter x̄"],
      correta: 1,
      explicacao: "Mais confiança exige um z maior (2,576 contra 1,96), o que aumenta a margem de erro E = z · σ/√n e alarga o intervalo.",
      erros: ["Estreitar o intervalo com a mesma informação exigiria MENOS confiança, não mais.", null, "O z muda com o nível de confiança, e com ele muda a margem de erro.", "O intervalo é sempre centrado em x̄: x̄ − E até x̄ + E."]
    },
    {
      pergunta: "Deseja-se margem de erro E = 2 com σ = 10 e 95% de confiança (z = 1,96). Qual é o tamanho mínimo da amostra?",
      alternativas: ["10", "97", "96", "20"],
      correta: 1,
      explicacao: "n = (z·σ/E)² = (1,96 · 10/2)² = 9,8² = 96,04. Arredondando PARA CIMA para garantir a margem: n = 97.",
      erros: ["10 = z·σ/E sem elevar ao quadrado (e ainda arredondado).", null, "96 arredonda para baixo. Com 96 a margem fica um pouco acima de 2. Tamanho de amostra sempre arredonda para cima.", "20 não sai da fórmula: parece ter usado 2·σ ou σ·E."]
    },
    {
      pergunta: "Uma equipe quer provar que a nova versão tem erro médio MENOR que 15. Qual é o par de hipóteses correto?",
      alternativas: ["H₀: μ < 15  ·  Hₐ: μ ≥ 15", "H₀: μ = 15  ·  Hₐ: μ ≠ 15", "H₀: μ ≥ 15  ·  Hₐ: μ < 15", "H₀: μ ≤ 15  ·  Hₐ: μ > 15"],
      correta: 2,
      explicacao: "O que se quer provar (melhoria, erro < 15) vai em Hₐ. H₀ é o status quo e contém a igualdade: μ ≥ 15. É um teste unilateral à esquerda.",
      erros: ["Inverteu: a afirmação a provar deve estar em Hₐ, e H₀ deve conter a igualdade.", "Seria bilateral (≠), mas o interesse é só na redução do erro.", null, "Isso testaria se o erro AUMENTOU, o oposto do objetivo."]
    },
    {
      pergunta: "Rejeitar H₀ quando ela é verdadeira é chamado de:",
      alternativas: ["Erro Tipo I (falso positivo), com probabilidade α", "Erro Tipo II (falso negativo), com probabilidade β", "Poder do teste", "Nível de confiança"],
      correta: 0,
      explicacao: "Erro Tipo I = rejeitar uma H₀ verdadeira. Sua probabilidade é α, o nível de significância escolhido.",
      erros: [null, "Tipo II é o oposto: NÃO rejeitar uma H₀ que é falsa.", "Poder (1 − β) é a probabilidade de rejeitar corretamente uma H₀ FALSA, uma decisão certa.", "Nível de confiança (1 − α) é a probabilidade de não rejeitar uma H₀ verdadeira, também uma decisão certa."]
    },
    {
      pergunta: "Qual teste usar com n = 15 e desvio padrão populacional desconhecido (apenas s amostral)?",
      alternativas: ["Teste Z, porque é o mais preciso", "Teste T com n graus de liberdade", "Não é possível testar com n < 30", "Teste T com n − 1 = 14 graus de liberdade"],
      correta: 3,
      explicacao: "σ desconhecido e n < 30 → Teste T, cuja forma depende dos graus de liberdade gl = n − 1 = 14.",
      erros: ["O teste Z exige σ conhecido ou n ≥ 30. Aqui não vale nenhum dos dois.", "Os graus de liberdade são n − 1, não n.", "É possível: o Teste T existe exatamente para amostras pequenas.", null]
    },
    {
      pergunta: "Em um teste T unilateral à esquerda, T<sub>calculado</sub> = −2,58 e T<sub>crítico</sub> = −1,761 (α = 0,05). A decisão é:",
      alternativas: ["Não rejeitar H₀, pois −2,58 é menor que −1,761", "Aceitar H₀", "Rejeitar H₀, pois o valor calculado está na região crítica", "Aumentar α até ficar significativo"],
      correta: 2,
      explicacao: "No teste à esquerda, a região crítica é T < T_crítico. Como −2,58 < −1,761, a estatística cai na região crítica e rejeitamos H₀.",
      erros: ["Justamente por ser menor (mais à esquerda) que o crítico, o valor está NA região de rejeição.", "Nunca se “aceita” H₀. E, aqui, a decisão é rejeitá-la.", null, "Ajustar α depois de ver o resultado é má prática (p-hacking). α é definido antes do teste."]
    },
    {
      pergunta: "Qual interpretação de “IC de 95%: 11,2 < μ < 12,8” é a mais adequada?",
      alternativas: ["95% dos dados individuais estão entre 11,2 e 12,8", "Se repetíssemos o procedimento muitas vezes, cerca de 95% dos intervalos construídos conteriam o verdadeiro μ", "μ está certamente entre 11,2 e 12,8", "A média amostral tem 95% de chance de estar no intervalo"],
      correta: 1,
      explicacao: "O nível de confiança descreve o método: em 95% das repetições, o intervalo construído captura o parâmetro verdadeiro μ.",
      erros: ["O IC é sobre a MÉDIA populacional, não sobre os valores individuais, que variam muito mais.", null, "Não há certeza: em cerca de 5% das repetições o intervalo não conteria μ.", "x̄ é o centro do intervalo, e está nele sempre, com 100% de certeza. A incerteza é sobre μ."]
    }
  ],

  discursivas: [
    "Explique com suas palavras o Teorema do Limite Central e por que ele permite usar a distribuição normal para avaliar lotes de previsões de um modelo.",
    "Um modelo teve erro médio de 8 unidades em 64 amostras, com σ = 4. Construa o IC de 95% e interprete o resultado para um gestor não técnico.",
    "Por que se diz “não rejeitar H₀” em vez de “aceitar H₀”? Dê um exemplo.",
    "No seu projeto, descreva um cenário de teste de hipóteses: escreva H₀ e Hₐ e explique a consequência de negócio de um Erro Tipo I e de um Erro Tipo II.",
    "Explique quando usar o teste Z e quando usar o teste T, e por que a distribuição T tem caudas mais longas."
  ],

  respostasDiscursivas: [
    "O TLC diz que, qualquer que seja a forma da população (mesmo assimétrica), a distribuição das <strong>médias amostrais</strong> se aproxima de uma Normal quando n cresce (n ≥ 30), com média μ e erro padrão σ/√n. Os erros individuais de um modelo podem ser irregulares, mas o <strong>erro médio de lotes grandes</strong> segue um sino. Isso permite usar ferramentas da Normal (escore Z, intervalos de confiança, teste Z) para avaliar o desempenho do modelo em lotes.",
    "EP = σ/√n = 4/√64 = 4/8 = 0,5.<br>Margem de erro (95%): E = 1,96 · 0,5 = 0,98.<br>IC: 8 − 0,98 até 8 + 0,98 → <strong>7,02 < μ < 8,98</strong>.<br>Para o gestor: “Com 95% de confiança, o erro médio real do modelo em produção fica entre 7 e 9 unidades. O valor 8 é nossa melhor estimativa, e essa faixa mostra a incerteza de termos testado só 64 casos.”",
    "O teste parte do pressuposto de que H₀ é verdadeira e procura evidência contra ela. Se a evidência é insuficiente, só podemos dizer que <strong>não há prova</strong> para rejeitá-la, e não que ela foi provada. Ex.: testamos se a V2 do modelo reduz o erro e obtemos p = 0,20. Isso não prova que a V2 é igual à V1; talvez a amostra fosse pequena demais para detectar a melhoria (erro tipo II). Como num julgamento: “não culpado” não significa “inocente”.",
    "Exemplo: uma nova versão do modelo térmico (V2) teria erro médio menor que a atual, de 5 °C.<br><strong>H₀:</strong> μ<sub>V2</sub> ≥ 5 (não há melhoria) · <strong>Hₐ:</strong> μ<sub>V2</sub> < 5 (há melhoria). Teste unilateral.<br><strong>Erro tipo I:</strong> concluir que a V2 é melhor sem que seja. A empresa troca o modelo, gasta engenharia e pode tomar decisões de projeto piores.<br><strong>Erro tipo II:</strong> não perceber que a V2 é melhor. Perde-se a oportunidade de reduzir testes físicos e custos.",
    "Use o <strong>teste Z</strong> quando o desvio padrão populacional σ é conhecido ou quando a amostra é grande (n ≥ 30). Use o <strong>teste T</strong> quando σ é desconhecido e n < 30, estimando-o pelo desvio amostral s, com gl = n − 1. A distribuição T tem <strong>caudas mais longas</strong> porque s varia de amostra para amostra, e essa incerteza extra torna valores extremos mais prováveis. Assim, o teste exige evidência mais forte antes de rejeitar H₀. Com n grande, a T se aproxima da Z."
  ]
});
