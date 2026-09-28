Plataforma.adicionarAula("programacao", {
  id: "hiperparametros-explicabilidade",
  titulo: "Hiperparâmetros e Explicabilidade do Modelo",
  descricao: "Parâmetros × hiperparâmetros, GridSearchCV, RandomizedSearchCV e explicabilidade com SHAP (waterfall e beeswarm).",
  duracao: "50 min",

  resumo: [
    { tipo: "titulo", texto: "Parâmetro × hiperparâmetro" },
    { tipo: "texto", texto: "<strong>Hiperparâmetro</strong> é uma configuração do algoritmo definida <strong>antes ou fora</strong> do treinamento. <strong>Parâmetros</strong> são aprendidos <strong>a partir dos dados</strong> durante o treino. Os hiperparâmetros controlam <em>como</em> esse aprendizado acontece." },
    { tipo: "tabela", cabecalho: ["Conceito", "Exemplo", "Como é obtido"], linhas: [
      ["Parâmetro", "pesos (coeficientes) de uma regressão", "aprendido no treinamento"],
      ["Parâmetro", "limiares internos de uma árvore", "determinado pelo algoritmo"],
      ["Hiperparâmetro", "<code>max_depth</code> (árvore): profundidade máxima", "definido pelo usuário ou por busca"],
      ["Hiperparâmetro", "<code>n_estimators</code> (Random Forest): nº de árvores", "definido antes do treino"],
      ["Hiperparâmetro", "<code>n_neighbors</code> (KNN): nº de vizinhos", "definido antes do treino"],
      ["Hiperparâmetro", "<code>learning_rate</code> (boosting)", "definido antes do treino"]
    ]},
    { tipo: "destaque", titulo: "Hiperparâmetros controlam a capacidade", texto: "Árvore com profundidade muito pequena → <strong>underfitting</strong>. Profundidade enorme → <strong>overfitting</strong>. O objetivo do ajuste (tuning) não é maximizar a complexidade, e sim encontrar a configuração que <strong>generaliza</strong> melhor." },

    { tipo: "titulo", texto: "GridSearchCV: busca exaustiva" },
    { tipo: "texto", texto: "Testa <strong>todas as combinações</strong> de uma grade de valores. Cada combinação é avaliada com <strong>validação cruzada</strong>, e a melhor segundo a métrica escolhida é selecionada." },
    { tipo: "formula", legenda: "Custo do grid", texto: "treinamentos = (nº de combinações) × (nº de folds)", nota: "3 valores de n_estimators × 4 de max_depth × 3 de min_samples_split = 36 combinações · com cv = 5 → 180 ajustes" },
    { tipo: "codigo", texto: "from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\n\nparam_grid = {\n    \"n_estimators\": [100, 200, 400],\n    \"max_depth\": [4, 8, 12, None],\n    \"min_samples_split\": [2, 5, 10],\n}\nmodel = RandomForestClassifier(random_state=42)\ngrid = GridSearchCV(estimator=model, param_grid=param_grid,\n                    cv=5, scoring=\"roc_auc\", n_jobs=-1)\ngrid.fit(X_train, y_train)\nprint(grid.best_params_)\nprint(grid.best_score_)" },
    { tipo: "lista", itens: [
      "<strong>Vantagem:</strong> sistemático, testa tudo e deixa explícita a relação hiperparâmetro × desempenho.",
      "<strong>Limite:</strong> o custo cresce <strong>multiplicativamente</strong>; uma grade “pequena” pode virar milhares de treinos."
    ]},

    { tipo: "titulo", texto: "RandomizedSearchCV: busca amostrada" },
    { tipo: "texto", texto: "Em vez de todas as combinações, <strong>sorteia</strong> configurações de listas ou distribuições. O número de tentativas é controlado por <code>n_iter</code>, então o custo é limitado diretamente." },
    { tipo: "codigo", texto: "from sklearn.model_selection import RandomizedSearchCV\nfrom scipy.stats import loguniform, randint\n\nparam_dist = {\n    \"n_estimators\": randint(100, 600),\n    \"max_depth\": randint(3, 20),\n}\nrandom_search = RandomizedSearchCV(estimator=model, param_distributions=param_dist,\n                                   n_iter=30, cv=5, scoring=\"roc_auc\",\n                                   random_state=42, n_jobs=-1)\nrandom_search.fit(X_train, y_train)\n# 30 configurações × 5 folds = 150 treinos" },
    { tipo: "lista", itens: [
      "Em espaços grandes, costuma achar boas regiões sem testar tudo.",
      "Pode amostrar de <strong>distribuições</strong>: útil para <code>learning_rate</code>, onde a <em>escala</em> (0,001; 0,01; 0,1) importa mais que valores igualmente espaçados.",
      "<strong>Nenhuma das duas é sempre superior.</strong> Estratégia comum: Random para explorar amplamente e depois Grid refinado em torno dos melhores valores."
    ]},

    { tipo: "titulo", texto: "Explicabilidade com SHAP" },
    { tipo: "texto", texto: "<strong>SHAP</strong> (SHapley Additive exPlanations) explica <strong>por que</strong> o modelo chegou a uma previsão: mostra quais variáveis <strong>empurraram a previsão para cima ou para baixo</strong> e quanto cada uma contribuiu." },
    { tipo: "destaque", titulo: "De onde vem", texto: "Da <strong>teoria dos jogos cooperativos</strong> (valores de Shapley): cada variável é vista como um “jogador”, e sua contribuição é a contribuição marginal média para o resultado, em relação a um <strong>valor de referência</strong> (a previsão média, ou base value)." },
    { tipo: "formula", legenda: "Aditividade", texto: "previsão = valor base + ∑ (valores SHAP de cada variável)" },
    { tipo: "tabela", cabecalho: ["Gráfico", "Responde", "Como ler"], linhas: [
      ["<strong>Waterfall</strong>", "Por que ESTE registro recebeu esta previsão?", "parte do valor de referência; barras mostram cada variável deslocando até o valor final"],
      ["<strong>Beeswarm</strong>", "Quais variáveis importam no modelo como um todo?", "variáveis ordenadas pela importância média |SHAP|; cada ponto é uma observação; posição horizontal = contribuição; cor = valor da feature"]
    ]},
    { tipo: "exemplo", titulo: "Waterfall de um cliente", texto: "Valor base (probabilidade média de churn) = 0,20. Contrato mensal +0,25 · poucos meses de casa +0,15 · suporte bem avaliado −0,08 → previsão final = <strong>0,52</strong>." },
    { tipo: "codigo", texto: "import shap\nexplainer = shap.Explainer(modelo, X_train)\nshap_values = explainer(X_test)\nshap.plots.waterfall(shap_values[0])   # explica uma observação\nshap.plots.beeswarm(shap_values)       # visão global" },
    { tipo: "dica", itens: [
      "Otimize os hiperparâmetros com a métrica que reflete o erro mais caro do seu problema (<code>scoring=\"recall\"</code>, <code>\"roc_auc\"</code>…).",
      "Depois do tuning, avalie o melhor modelo no <strong>teste</strong>, que ficou fora da busca.",
      "Use o SHAP para validar se o modelo usa variáveis que fazem sentido para o negócio."
    ]},
    { tipo: "cuidado", itens: [
      "<code>best_score_</code> é a média na validação cruzada, e não o desempenho no teste.",
      "SHAP explica o <strong>modelo</strong>, não a causalidade do mundo real.",
      "Uma grade grande no GridSearch pode levar horas: calcule combinações × folds antes de rodar."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual item é um HIPERPARÂMETRO?",
      alternativas: ["Os coeficientes aprendidos por uma regressão linear", "max_depth de uma árvore de decisão", "Os limiares internos escolhidos em cada nó da árvore", "As previsões do modelo"],
      correta: 1,
      explicacao: "max_depth é definido pelo usuário antes do treino e controla como o modelo aprende. É um hiperparâmetro.",
      erros: ["Coeficientes são PARÂMETROS aprendidos a partir dos dados.", null, "Os limiares dos nós são determinados pelo algoritmo durante o treino: são parâmetros.", "Previsões são saídas do modelo, não configurações."]
    },
    {
      pergunta: "Qual é a diferença fundamental entre parâmetros e hiperparâmetros?",
      alternativas: ["Não há diferença", "Parâmetros são definidos pelo usuário; hiperparâmetros são aprendidos", "Parâmetros são aprendidos durante o treino; hiperparâmetros são definidos antes e controlam o aprendizado", "Hiperparâmetros só existem em redes neurais"],
      correta: 2,
      explicacao: "Durante o treino, o algoritmo aprende os parâmetros com os dados. Os hiperparâmetros são escolhidos antes (manualmente ou por busca) e governam esse processo.",
      erros: ["A distinção é central para o tuning de modelos.", "Está invertido: quem é aprendido a partir dos dados são os parâmetros.", null, "KNN (n_neighbors), árvores (max_depth), RF (n_estimators)… todos têm hiperparâmetros."]
    },
    {
      pergunta: "Uma grade tem 3 valores de n_estimators, 4 de max_depth e 3 de min_samples_split, com cv = 5. Quantos treinamentos o GridSearchCV fará?",
      alternativas: ["10", "36", "180", "15"],
      correta: 2,
      explicacao: "Combinações: 3 × 4 × 3 = 36. Cada uma é treinada 5 vezes (folds): 36 × 5 = 180 ajustes.",
      erros: ["10 = 3 + 4 + 3: as combinações se MULTIPLICAM, não se somam.", "36 são as combinações, mas cada uma é treinada 5 vezes na validação cruzada.", null, "15 = 3 × 5 considera só um hiperparâmetro."]
    },
    {
      pergunta: "Qual é a principal limitação do GridSearchCV?",
      alternativas: ["Não usa validação cruzada", "Só funciona com KNN", "Não retorna os melhores parâmetros", "O custo cresce multiplicativamente com o número de valores testados"],
      correta: 3,
      explicacao: "Cada novo hiperparâmetro ou valor multiplica o número de combinações, e o tempo de busca pode explodir.",
      erros: ["O GridSearchCV usa validação cruzada (o CV do nome).", "Funciona com qualquer estimador do scikit-learn.", "Retorna, sim: best_params_ e best_score_.", null]
    },
    {
      pergunta: "Como o RandomizedSearchCV controla o custo da busca?",
      alternativas: ["Pelo parâmetro n_iter, que define quantas configurações sorteadas serão testadas", "Testando todas as combinações", "Removendo a validação cruzada", "Usando apenas um fold"],
      correta: 0,
      explicacao: "Ele sorteia n_iter configurações das listas ou distribuições fornecidas; o custo total fica em n_iter × folds.",
      erros: [null, "Testar tudo é o comportamento do GridSearchCV.", "Ele mantém a validação cruzada (cv).", "O número de folds continua definido por cv."]
    },
    {
      pergunta: "Qual afirmação sobre Grid × Random Search está correta?",
      alternativas: ["Random Search é sempre superior", "Grid Search é sempre superior", "Depende do tamanho do espaço e do orçamento; é comum explorar com Random e refinar com Grid", "Os dois dão sempre o mesmo resultado"],
      correta: 2,
      explicacao: "Não há vencedor universal. Em espaços grandes, o Random é mais eficiente; em espaços pequenos, o Grid testa tudo. Combinar os dois é uma estratégia comum.",
      erros: ["O Random pode não sortear a melhor combinação em espaços pequenos.", "Em espaços grandes, o Grid pode ficar inviável.", null, "Testam conjuntos diferentes de configurações e podem divergir."]
    },
    {
      pergunta: "Por que amostrar learning_rate de uma distribuição (ex.: log-uniforme) é vantajoso?",
      alternativas: ["Porque learning_rate não influencia o modelo", "Porque a escala (0,001; 0,01; 0,1) importa mais que valores igualmente espaçados em escala linear", "Porque o Grid não aceita números decimais", "Para evitar a validação cruzada"],
      correta: 1,
      explicacao: "Para alguns hiperparâmetros, a ordem de grandeza é o que muda o comportamento. Amostrar em escala logarítmica cobre melhor essas ordens.",
      erros: ["É um dos hiperparâmetros mais influentes em boosting e redes.", null, "O Grid aceita decimais, mas uma lista linear cobre mal várias ordens de grandeza.", "A validação cruzada continua sendo usada."]
    },
    {
      pergunta: "Qual é o objetivo do SHAP?",
      alternativas: ["Aumentar a acurácia do modelo", "Explicar quanto cada variável contribuiu para empurrar uma previsão para cima ou para baixo", "Balancear classes", "Escolher hiperparâmetros automaticamente"],
      correta: 1,
      explicacao: "O SHAP atribui a cada feature uma contribuição para a previsão, em relação a um valor de referência, com base nos valores de Shapley.",
      erros: ["O SHAP explica o modelo; não o treina nem o melhora diretamente.", null, "Balanceamento é outra etapa (SMOTE, class_weight).", "Tuning é papel do Grid/Random Search."]
    },
    {
      pergunta: "Em qual teoria o SHAP se baseia?",
      alternativas: ["Teoria dos grafos", "Teoria das filas", "Teoria dos jogos cooperativos (valores de Shapley)", "Teoria da relatividade"],
      correta: 2,
      explicacao: "Os valores de Shapley vêm da teoria dos jogos cooperativos: distribuem o “ganho” (a previsão) entre os “jogadores” (features) de forma justa, pela contribuição marginal média.",
      erros: ["Grafos não são a base do SHAP.", "Teoria das filas estuda sistemas de espera.", null, "Não há relação com a física."]
    },
    {
      pergunta: "Você quer explicar ao cliente por que o pedido DELE foi negado. Qual gráfico SHAP é mais adequado?",
      alternativas: ["Waterfall, que explica uma observação individual a partir do valor de referência", "Beeswarm, que mostra a importância global", "Histograma", "Matriz de confusão"],
      correta: 0,
      explicacao: "O waterfall mostra, para um registro, como cada variável deslocou a previsão desde o valor base até o valor final.",
      erros: [null, "O beeswarm resume todas as observações; é ótimo para a visão global, mas não para explicar um caso específico.", "O histograma mostra a distribuição de uma variável, sem explicar a previsão.", "A matriz de confusão avalia o modelo como um todo, e não explica decisões individuais."]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre parâmetros e hiperparâmetros, com dois exemplos de cada.",
    "Compare GridSearchCV e RandomizedSearchCV em custo e cobertura do espaço de busca. Qual você usaria no seu projeto e por quê?",
    "Calcule quantos treinamentos uma busca Grid fará com 4 valores de n_estimators, 3 de max_depth e cv = 10, e comente o impacto disso.",
    "Explique como interpretar um gráfico waterfall e um gráfico beeswarm do SHAP.",
    "Por que a explicabilidade é importante em modelos de IA usados em decisões que afetam pessoas? Relacione com o seu projeto."
  ],

  respostasDiscursivas: [
    "<strong>Parâmetros</strong> são aprendidos com os dados durante o treino: ex. os <strong>coeficientes</strong> de uma regressão linear e os <strong>limiares de corte</strong> em cada nó de uma árvore. <strong>Hiperparâmetros</strong> são escolhidos antes do treino e controlam como o aprendizado acontece: ex. <strong>max_depth</strong> de uma árvore, <strong>n_estimators</strong> de uma Random Forest, <strong>n_neighbors</strong> do KNN ou <strong>learning_rate</strong> do boosting. Ajustamos hiperparâmetros para equilibrar underfitting e overfitting.",
    "<strong>GridSearchCV</strong> testa todas as combinações da grade: cobertura completa daquela grade, mas custo multiplicativo (combinações × folds). <strong>RandomizedSearchCV</strong> sorteia n_iter configurações: custo controlado e cobertura ampla de espaços grandes (inclusive distribuições contínuas), sem garantia de testar a melhor combinação exata. No projeto, usaria o Random para explorar amplamente (ex.: n_iter = 50) e depois um Grid pequeno em volta dos melhores valores.",
    "Combinações: 4 × 3 = 12. Cada uma é treinada 10 vezes (cv = 10): 12 × 10 = <strong>120 treinamentos</strong> (mais 1 refit final com o melhor). O impacto: o tempo cresce multiplicativamente; adicionar outro hiperparâmetro com 5 valores levaria a 600. Com modelos pesados isso fica caro, o que justifica reduzir a grade, usar cv menor ou RandomizedSearch.",
    "<strong>Waterfall:</strong> explica <strong>uma</strong> previsão. Começa no valor de referência (a média das previsões) e cada barra mostra quanto uma variável empurrou a previsão para cima (positiva) ou para baixo (negativa), até chegar ao valor final. Responde “por que este caso recebeu esta previsão?”. <strong>Beeswarm:</strong> visão <strong>global</strong>. As variáveis são ordenadas pela importância média |SHAP|; cada ponto é uma observação, a posição horizontal é o impacto e a cor é o valor da feature (alto/baixo). Mostra quais variáveis mais importam e em que direção agem.",
    "Quando a IA influencia decisões sobre pessoas (crédito, contratação, saúde, segurança de produtos), é preciso saber <strong>por que</strong> ela decidiu: para detectar vieses e variáveis indevidas, contestar erros (a LGPD prevê revisão de decisões automatizadas), gerar confiança e permitir auditoria. No projeto, se o modelo disser que um fogão é seguro, os engenheiros precisam ver quais fatores levaram a isso e se fazem sentido físico, antes de reduzir testes físicos."
  ]
});
