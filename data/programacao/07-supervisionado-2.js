Plataforma.adicionarAula("programacao", {
  id: "aprendizado-supervisionado-2",
  titulo: "Aprendizado Supervisionado II: Regressão",
  descricao: "Regressão linear simples e múltipla, métricas MAE, MSE, RMSE, MAPE, R², R² ajustado e multicolinearidade com VIF.",
  duracao: "55 min",

  resumo: [
    { tipo: "titulo", texto: "Regressão: prever um número" },
    { tipo: "texto", texto: "Uma tarefa de <strong>regressão</strong> prevê um <strong>valor numérico contínuo</strong> a partir de variáveis de entrada. Ex.: o preço de um apartamento a partir do bairro, da área e da distância do metrô." },

    { tipo: "titulo", texto: "Regressão linear" },
    { tipo: "texto", texto: "Modela a relação entre uma <strong>variável dependente</strong> (resposta) e uma ou mais <strong>independentes</strong> (explicativas), estimando quanto Y muda quando X muda." },
    { tipo: "formula", legenda: "Regressão linear simples", texto: "y = α + β·x + ε", nota: "α: intercepto (y quando x = 0) · β: coeficiente angular (inclinação) · ε: erro aleatório (resíduo)" },
    { tipo: "exemplo", titulo: "Exemplo — salário × anos de experiência", texto: "x = 1, 2, 3, 4, 5 → y = 30 mil, 35 mil, 40 mil, 45 mil, 50 mil.<br>Equação: <strong>y = 25.000 + 5.000·x</strong>. Cada ano a mais de experiência soma R$ 5.000; com 0 anos, o salário estimado é R$ 25.000. Para 7 anos: 25.000 + 35.000 = <strong>R$ 60.000</strong>." },
    { tipo: "formula", legenda: "Regressão linear múltipla", texto: "y = β₀ + β₁x₁ + β₂x₂ + … + βₙxₙ + ε" },
    { tipo: "exemplo", titulo: "Exemplo — preço da casa", texto: "Preço = 50.000 + 2.500·Tamanho + 20.000·Quartos.<br>Casa de 80 m² com 3 quartos: 50.000 + 200.000 + 60.000 = <strong>R$ 310.000</strong>. O coeficiente 2.500 significa “+R$ 2.500 por m², <em>mantendo o número de quartos fixo</em>”." },

    { tipo: "titulo", texto: "Métricas de avaliação" },
    { tipo: "tabela", cabecalho: ["Métrica", "Fórmula", "Interpretação"], linhas: [
      ["<strong>MAE</strong>", "(1/n) ∑ |yᵢ − ŷᵢ|", "erro médio absoluto, na unidade de y; robusto a outliers"],
      ["<strong>MSE</strong>", "(1/n) ∑ (yᵢ − ŷᵢ)²", "penaliza MAIS os erros grandes; unidade ao quadrado"],
      ["<strong>RMSE</strong>", "√MSE", "volta à unidade de y; “erro típico”, mas ainda penaliza erros grandes"],
      ["<strong>MAPE</strong>", "(100%/n) ∑ |(yᵢ − ŷᵢ)/yᵢ|", "erro percentual médio; abaixo de 10% costuma ser excelente"],
      ["<strong>R²</strong>", "1 − ∑(yᵢ − ŷᵢ)² / ∑(yᵢ − ȳ)²", "fração da variação de y explicada pelo modelo (0 a 1; pode ser negativo)"]
    ]},
    { tipo: "exemplo", titulo: "Calculando com 3 pontos", texto: "Real: 10, 20, 30 · Previsto: 12, 18, 33 → erros: −2, +2, −3.<br>MAE = (2 + 2 + 3)/3 ≈ <strong>2,33</strong> · MSE = (4 + 4 + 9)/3 ≈ <strong>5,67</strong> · RMSE = √5,67 ≈ <strong>2,38</strong> · MAPE = (20% + 10% + 10%)/3 ≈ <strong>13,3%</strong>." },
    { tipo: "destaque", titulo: "Para todas: quanto menor, melhor… exceto o R²", texto: "MAE, MSE, RMSE e MAPE: <strong>menor é melhor</strong>. R²: <strong>mais perto de 1 é melhor</strong> (R² = 0,9 → 90% da variação explicada; acima de 0,75 costuma ser bom, dependendo do domínio)." },
    { tipo: "subtitulo", texto: "R² ajustado" },
    { tipo: "formula", legenda: "R² ajustado", texto: "R²<sub>aj</sub> = 1 − (1 − R²)·(n − 1)/(n − k − 1)", nota: "n: nº de observações · k: nº de variáveis independentes" },
    { tipo: "texto", texto: "O R² comum <strong>nunca diminui</strong> quando se adicionam variáveis, mesmo irrelevantes. O ajustado <strong>penaliza variáveis desnecessárias</strong> e deve ser usado sempre que houver mais de uma variável explicativa. Ex.: R² = 0,80, n = 50, k = 4 → R²<sub>aj</sub> = 1 − 0,2·49/45 ≈ <strong>0,782</strong>." },

    { tipo: "titulo", texto: "Multicolinearidade e VIF" },
    { tipo: "texto", texto: "<strong>Multicolinearidade</strong>: variáveis independentes que carregam informação redundante. Ex.: casas maiores costumam ter mais quartos, então Área e Quartos se sobrepõem. Isso aumenta a incerteza sobre o efeito individual de cada uma." },
    { tipo: "formula", legenda: "Fator de Inflação da Variância", texto: "VIFⱼ = 1 / (1 − Rⱼ²)", nota: "Rⱼ² vem de uma regressão AUXILIAR: a variável xⱼ explicada pelas outras independentes." },
    { tipo: "exemplo", titulo: "Exemplo", texto: "Regredindo Área contra Quartos, Banheiros e Idade, obtém-se R² = 0,80 → VIF = 1/0,20 = <strong>5</strong>." },
    { tipo: "tabela", cabecalho: ["VIF", "Leitura prática"], linhas: [
      ["≈ 1", "pouca ou nenhuma multicolinearidade"],
      ["1 a 5", "geralmente aceitável"],
      ["5 a 10", "merece investigação"],
      ["&gt; 10", "forte indicação de multicolinearidade"]
    ]},
    { tipo: "dica", itens: [
      "Reporte uma métrica na unidade do negócio (MAE ou RMSE) e uma relativa (MAPE ou R²).",
      "Se RMSE ≫ MAE, existem alguns erros muito grandes: investigue os outliers.",
      "Com VIF alto, considere remover uma das variáveis redundantes, combiná-las ou usar regularização."
    ]},
    { tipo: "cuidado", itens: [
      "MAPE explode quando há valores reais próximos de zero (divisão por yᵢ).",
      "R² alto não prova causalidade nem garante boas previsões fora da faixa observada.",
      "O MSE está em unidades ao quadrado (R$²), então não compare diretamente com o MAE.",
      "R² pode ser negativo: o modelo é pior do que prever sempre a média."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual problema abaixo é de REGRESSÃO?",
      alternativas: ["Classificar e-mails em spam ou não spam", "Prever o preço de um apartamento em reais", "Agrupar clientes por comportamento", "Identificar se uma imagem é gato ou cachorro"],
      correta: 1,
      explicacao: "Regressão prevê um valor numérico contínuo, como um preço.",
      erros: ["Spam/não spam é classificação (classe discreta).", null, "Agrupar sem rótulo é clustering (não supervisionado).", "Gato/cachorro é classificação."]
    },
    {
      pergunta: "Na equação y = α + βx + ε, o que representa β?",
      alternativas: ["O valor de y quando x = 0", "O erro aleatório", "O coeficiente angular: quanto y muda para cada unidade de x", "O número de observações"],
      correta: 2,
      explicacao: "β é a inclinação da reta: a variação esperada de y quando x aumenta em 1 unidade.",
      erros: ["O valor de y quando x = 0 é o intercepto α, e não a inclinação.", "O erro aleatório (resíduo) é representado por ε, e não por β.", null, "O número de observações é n, e não aparece na equação."]
    },
    {
      pergunta: "Com y = 25.000 + 5.000x (x = anos de experiência), qual é o salário previsto para 6 anos?",
      alternativas: ["R$ 30.000", "R$ 150.000", "R$ 55.000", "R$ 31.000"],
      correta: 2,
      explicacao: "y = 25.000 + 5.000·6 = 25.000 + 30.000 = R$ 55.000.",
      erros: ["30.000 é só a parcela 5.000·6, sem o intercepto.", "150.000 = 25.000·6: multiplicou o intercepto em vez do coeficiente.", null, "31.000 = 25.000 + 6.000: tratou o 6 como milhar somado."]
    },
    {
      pergunta: "Qual métrica penaliza mais fortemente os erros grandes, por elevá-los ao quadrado?",
      alternativas: ["MAE", "MAPE", "MSE", "Acurácia"],
      correta: 2,
      explicacao: "O MSE eleva cada erro ao quadrado: um erro de 10 pesa 100, enquanto um de 2 pesa 4. Por isso erros grandes dominam a métrica.",
      erros: ["O MAE usa valor absoluto: todos os erros pesam proporcionalmente.", "O MAPE usa erros percentuais absolutos, sem elevar ao quadrado.", null, "Acurácia é métrica de classificação."]
    },
    {
      pergunta: "Qual é a principal vantagem do RMSE em relação ao MSE?",
      alternativas: ["Ignora erros grandes", "Volta à mesma unidade da variável de saída, facilitando a interpretação", "Sempre vale mais que 1", "Não precisa de valores reais"],
      correta: 1,
      explicacao: "RMSE = √MSE. A raiz traz o erro de volta para a unidade original (reais, °C…), e ele continua penalizando erros grandes.",
      erros: ["O RMSE ainda penaliza erros grandes.", null, "O RMSE pode ser qualquer valor ≥ 0.", "Todas essas métricas comparam previsão com valor real."]
    },
    {
      pergunta: "Reais 100 e 200; previstos 90 e 220. Qual é o MAPE?",
      alternativas: ["10%", "15", "20%", "30"],
      correta: 0,
      explicacao: "Erros percentuais: |100 − 90|/100 = 10% e |200 − 220|/200 = 10%. Média = 10%.",
      erros: [null, "15 = (10 + 20)/2 é o MAE (erro absoluto médio, em unidades), e não o erro percentual. O MAPE divide cada erro pelo valor real.", "20% é o erro absoluto de 20 lido como porcentagem, sem dividir por 200.", "30 é a soma dos erros absolutos (10 + 20), não um percentual médio."]
    },
    {
      pergunta: "Um modelo tem R² = 0,85. Isso significa que:",
      alternativas: ["85% das previsões estão corretas", "O erro médio é 15%", "O modelo causa 85% do resultado", "85% da variação de y é explicada pelo modelo"],
      correta: 3,
      explicacao: "R² mede a proporção da variância da variável dependente explicada pelo modelo.",
      erros: ["R² não é uma taxa de acerto; em regressão, “acertar exatamente” quase nunca ocorre.", "Erro percentual médio seria o MAPE.", "R² mede associação, não causalidade.", null]
    },
    {
      pergunta: "Por que usar o R² ajustado em regressão múltipla?",
      alternativas: ["Porque o R² comum sempre aumenta (ou não diminui) ao adicionar variáveis, mesmo irrelevantes", "Porque o R² ajustado é sempre maior", "Porque o R² comum não existe em regressão múltipla", "Para converter o erro em reais"],
      correta: 0,
      explicacao: "O R² ajustado penaliza o número de variáveis k, e só aumenta se a nova variável melhorar o modelo mais do que o esperado por acaso.",
      erros: [null, "Ele é menor ou igual ao R² comum, por causa da penalização.", "O R² comum existe, mas é otimista com muitas variáveis.", "Nenhum dos R² está na unidade da variável."]
    },
    {
      pergunta: "Na regressão auxiliar de uma variável contra as demais, obteve-se R² = 0,90. Qual é o VIF?",
      alternativas: ["0,9", "1,11", "10", "90"],
      correta: 2,
      explicacao: "VIF = 1/(1 − 0,90) = 1/0,10 = 10, que indica multicolinearidade forte.",
      erros: ["0,9 é o próprio R² da regressão auxiliar.", "1,11 = 1/0,9: dividiu por R² em vez de (1 − R²).", null, "90 não sai da fórmula; parece ter multiplicado 0,9 por 100."]
    },
    {
      pergunta: "Em um modelo de preço de casas, Área e Quartos têm VIF de 12,4 e 11,8. O que isso indica?",
      alternativas: ["As variáveis são independentes", "O modelo tem R² negativo", "O modelo não pode ser treinado", "Forte multicolinearidade: as duas carregam informação redundante"],
      correta: 3,
      explicacao: "VIF acima de 10 indica forte multicolinearidade. Casas maiores tendem a ter mais quartos, então as variáveis se sobrepõem e os coeficientes ficam instáveis.",
      erros: ["VIF ≈ 1 é que indicaria independência.", "VIF não informa sobre o R² do modelo principal.", "O modelo pode ser treinado, mas os coeficientes individuais ficam pouco confiáveis.", null]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre classificação e regressão e dê um exemplo de regressão no seu projeto.",
    "Interprete os coeficientes de Preço = 50.000 + 2.500·Tamanho + 20.000·Quartos para uma pessoa não técnica.",
    "Compare MAE, RMSE e MAPE. Qual você reportaria ao parceiro do projeto e por quê?",
    "Explique o que é multicolinearidade, como o VIF a detecta e o que fazer quando ele está alto.",
    "Por que um R² alto no treino não garante bom desempenho em produção? Relacione com generalização."
  ],

  respostasDiscursivas: [
    "<strong>Classificação</strong> prevê categorias (passa/não passa no teste); <strong>regressão</strong> prevê valores numéricos contínuos. No projeto, prever a <strong>temperatura máxima da parede do fogão (°C)</strong> a partir de carga, potência e ambiente é regressão, avaliada com MAE, RMSE e R².",
    "O <strong>50.000</strong> é o ponto de partida: o preço-base estimado antes de considerar tamanho e quartos. O <strong>2.500</strong> diz que cada m² a mais soma R$ 2.500, mantendo o mesmo número de quartos. O <strong>20.000</strong> diz que cada quarto a mais soma R$ 20.000, mantendo o mesmo tamanho. Ex.: uma casa de 80 m² com 3 quartos custa 50.000 + 200.000 + 60.000 = R$ 310.000.",
    "<strong>MAE:</strong> erro médio absoluto, na unidade do problema (°C), fácil de explicar e robusto a outliers. <strong>RMSE:</strong> também em °C, mas penaliza mais os erros grandes (útil se errar muito é perigoso). <strong>MAPE:</strong> erro percentual, bom para comunicar (“erra 5% em média”), mas instável com valores reais perto de zero. Ao parceiro reportaria o <strong>MAE</strong> (“erramos em média 2 °C”) junto com o <strong>RMSE</strong>, porque em segurança térmica erros grandes importam, e o R² para mostrar quanto da variação é explicada.",
    "<strong>Multicolinearidade</strong> é quando variáveis independentes carregam informação redundante (ex.: área e número de quartos), o que deixa os coeficientes instáveis e difíceis de interpretar. O <strong>VIF</strong> de uma variável vem de uma regressão dela contra as outras: VIF = 1/(1 − R²ⱼ). VIF ≈ 1 é ótimo; de 5 a 10 merece investigação; acima de 10 indica forte multicolinearidade. Soluções: remover uma das variáveis, combiná-las em uma nova feature, usar PCA ou regularização (Ridge).",
    "O R² no treino mede quão bem o modelo se ajustou aos dados que ele já viu. Um modelo complexo pode decorar ruído e ter R² alto no treino (overfitting), mas errar muito em dados novos. Além disso, o R² comum sobe ao adicionar variáveis, mesmo inúteis. O que importa é a <strong>generalização</strong>: avaliar em validação, validação cruzada e teste, usar o R² ajustado e verificar se os dados de produção se parecem com os de treino."
  ]
});
