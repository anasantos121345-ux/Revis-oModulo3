Plataforma.adicionarAula("programacao", {
  id: "aprendizado-supervisionado-1",
  titulo: "Aprendizado Supervisionado I: Classificação e KNN",
  descricao: "Dados rotulados, divisão treino/validação/teste, classificação, KNN, distância euclidiana e métricas de classificação.",
  duracao: "50 min",

  resumo: [
    { tipo: "titulo", texto: "Treinar com dados rotulados" },
    { tipo: "lista", itens: [
      "<strong>Dados rotulados:</strong> cada exemplo tem a resposta correta (rótulo/anotação), como em Idade 65, Pressão 160 → <em>Doença cardíaca</em>.",
      "<strong>Dados não rotulados:</strong> sem resposta para guiar o modelo."
    ]},
    { tipo: "texto", texto: "No <strong>aprendizado supervisionado</strong>, um humano organizou e rotulou os dados, e o sistema também recebe antecipadamente as <strong>conclusões possíveis</strong> (as classes)." },

    { tipo: "titulo", texto: "Divisão dos dados" },
    { tipo: "tabela", cabecalho: ["Conjunto", "Para quê", "Proporção típica"], linhas: [
      ["<strong>Treino</strong>", "o modelo aprende com estes exemplos", "70%"],
      ["<strong>Validação</strong>", "avaliar durante o desenvolvimento e ajustar hiperparâmetros", "20%"],
      ["<strong>Teste</strong>", "avaliação FINAL: o modelo nunca treinou com eles", "10%"]
    ]},
    { tipo: "codigo", texto: "from sklearn.model_selection import train_test_split\n\nX_train, X_temp, y_train, y_temp = train_test_split(\n    X, y, test_size=0.30, random_state=42, stratify=y)\nX_val, X_test, y_val, y_test = train_test_split(\n    X_temp, y_temp, test_size=1/3, random_state=42, stratify=y_temp)\n# resultado: 70% treino, 20% validação, 10% teste" },
    { tipo: "destaque", titulo: "Por que separar o teste?", texto: "Avaliar no mesmo dado em que o modelo treinou é como corrigir a prova com o gabarito na mão: mede <strong>memorização</strong>, não <strong>generalização</strong>." },

    { tipo: "titulo", texto: "Classificação" },
    { tipo: "texto", texto: "Prever a qual <strong>categoria</strong> um item pertence, com base em exemplos conhecidos. <strong>Entrada:</strong> features. <strong>Saída:</strong> uma <strong>classe discreta</strong> (gato/cachorro, sucesso/fracasso, spam/não spam)." },

    { tipo: "titulo", texto: "KNN — K-Nearest Neighbors" },
    { tipo: "texto", texto: "Ideia central: <strong>objetos semelhantes tendem a pertencer à mesma categoria</strong>. O KNN não aprende uma equação: ele <strong>memoriza</strong> os exemplos de treino e, quando chega um novo, procura os K mais parecidos e decide pela <strong>maioria</strong> (classificação) ou pela <strong>média</strong> (regressão)." },
    { tipo: "formula", legenda: "Distância euclidiana (2 features)", texto: "d = √[ (x₂ − x₁)² + (y₂ − y₁)² ]" },
    { tipo: "passos", itens: [
      "Escolha K (número de vizinhos).",
      "Calcule a distância do novo ponto até todos os pontos de treino.",
      "Selecione os K mais próximos.",
      "Classifique pela classe mais frequente entre eles."
    ]},
    { tipo: "exemplo", titulo: "Exemplo — videogames", texto: "Treino: A (9,2; 10 mi) sucesso · B (8,8; 8 mi) sucesso · C (8,5; 7 mi) sucesso · D (5,0; 1 mi) fracasso · E (4,8; 0,8 mi) fracasso · F (5,5; 1,2 mi) fracasso.<br>Novo jogo: nota 8,9 e 8,5 mi de vendas. Com K = 3, os vizinhos mais próximos são A, B e C, todos sucesso → <strong>Sucesso</strong>." },
    { tipo: "lista", itens: [
      "<strong>K pequeno</strong> (ex.: 1): sensível a ruído → risco de <em>overfitting</em>.",
      "<strong>K grande</strong>: fronteira muito suave → risco de <em>underfitting</em>.",
      "Em classificação binária, prefira <strong>K ímpar</strong> para evitar empates.",
      "KNN exige <strong>escalonar</strong> as features, pois é baseado em distância."
    ]},

    { tipo: "titulo", texto: "Avaliando classificadores: matriz de confusão" },
    { tipo: "tabela", cabecalho: ["", "Real positivo", "Real negativo"], linhas: [
      ["<strong>Previsto positivo</strong>", "VP (verdadeiro positivo)", "FP (falso positivo)"],
      ["<strong>Previsto negativo</strong>", "FN (falso negativo)", "VN (verdadeiro negativo)"]
    ]},
    { tipo: "tabela", cabecalho: ["Métrica", "Fórmula", "Pergunta que responde"], linhas: [
      ["Acurácia", "(VP + VN) / total", "Quanto acertei no geral?"],
      ["Precisão", "VP / (VP + FP)", "Quando disse “positivo”, quanto acertei?"],
      ["Recall (sensibilidade)", "VP / (VP + FN)", "Dos positivos reais, quantos encontrei?"],
      ["F1-score", "2 · P · R / (P + R)", "Equilíbrio entre precisão e recall"]
    ]},
    { tipo: "exemplo", titulo: "O perigo da acurácia", texto: "Com 99% de pessoas saudáveis, um modelo que diz “todos são saudáveis” tem <strong>99% de acurácia</strong> e recall 0% para doentes. Em bases desbalanceadas, olhe precisão, recall e F1." },
    { tipo: "dica", itens: [
      "Use <code>stratify=y</code> na divisão para manter a proporção das classes em cada conjunto.",
      "Priorize <strong>recall</strong> quando deixar passar custa caro (doença, fraude); priorize <strong>precisão</strong> quando alarme falso custa caro (bloquear cartão legítimo)."
    ]},
    { tipo: "cuidado", itens: [
      "Nunca ajuste o modelo olhando o conjunto de teste: ele é só para a avaliação final.",
      "KNN é “preguiçoso” (lazy): treinar é rápido, mas prever é lento em bases grandes, pois compara com todos os pontos.",
      "Classificação prevê <strong>categorias</strong>; valores numéricos contínuos são tarefa de <strong>regressão</strong>."
    ]}
  ],

  objetivas: [
    {
      pergunta: "O que caracteriza os dados usados no aprendizado supervisionado?",
      alternativas: ["Não possuem nenhuma coluna de resposta", "São rotulados: cada exemplo tem a resposta correta", "São sempre imagens", "São gerados aleatoriamente pelo modelo"],
      correta: 1,
      explicacao: "No supervisionado, um humano anotou os exemplos com o rótulo correto, e o modelo aprende a mapear features → rótulo.",
      erros: ["Dados sem resposta são usados no aprendizado não supervisionado.", null, "Pode ser qualquer tipo de dado: tabelas, textos, imagens…", "Os dados vêm do mundo real; o modelo aprende com eles, não os gera."]
    },
    {
      pergunta: "Qual é a função do conjunto de TESTE?",
      alternativas: ["Treinar o modelo", "Ajustar os hiperparâmetros durante o desenvolvimento", "Avaliar o desempenho final com dados nunca vistos no treino", "Aumentar a quantidade de dados de treino"],
      correta: 2,
      explicacao: "O teste é reservado para medir a generalização final. O modelo não pode ter treinado nem sido ajustado com ele.",
      erros: ["Treinar é função do conjunto de treino.", "Ajustar hiperparâmetros é papel do conjunto de validação.", null, "Se entrasse no treino, deixaria de servir como avaliação imparcial."]
    },
    {
      pergunta: "Qual é a divisão típica apresentada em aula para treino, validação e teste?",
      alternativas: ["70% / 20% / 10%", "50% / 25% / 25%", "10% / 20% / 70%", "100% / 0% / 0%"],
      correta: 0,
      explicacao: "Em aula: 70% treino, 20% validação e 10% teste. A proporção pode variar conforme o tamanho do dataset.",
      erros: [null, "É uma divisão possível, mas não a apresentada em aula.", "Está invertida: o treino deve ter a maior parte.", "Sem validação e teste, não há como avaliar a generalização."]
    },
    {
      pergunta: "Qual é o princípio do algoritmo KNN?",
      alternativas: ["Encontrar uma reta que minimize o erro quadrático", "Objetos semelhantes tendem a pertencer à mesma categoria, então classifica pelos K vizinhos mais próximos", "Agrupar dados sem rótulo em K clusters", "Criar árvores de decisão aleatórias"],
      correta: 1,
      explicacao: "O KNN compara o novo exemplo com os exemplos memorizados e decide pela maioria dos K mais próximos.",
      erros: ["Essa é a ideia da regressão linear.", null, "Isso é o K-means (não supervisionado). O K do KNN é o número de vizinhos.", "Isso descreve Random Forest."]
    },
    {
      pergunta: "Qual é a distância euclidiana entre os pontos (1, 2) e (4, 6)?",
      alternativas: ["7", "25", "3,5", "5"],
      correta: 3,
      explicacao: "d = √[(4 − 1)² + (6 − 2)²] = √(9 + 16) = √25 = 5.",
      erros: ["7 = 3 + 4 é a distância de Manhattan, que soma as diferenças sem elevar ao quadrado.", "25 é o valor antes de tirar a raiz quadrada.", "3,5 é a média das diferenças, que não é uma medida de distância.", null]
    },
    {
      pergunta: "No KNN, o que tende a acontecer com K = 1?",
      alternativas: ["O modelo fica muito sensível a ruído (risco de overfitting)", "O modelo fica simples demais (underfitting)", "O modelo passa a fazer regressão", "O resultado não muda em relação a K = 15"],
      correta: 0,
      explicacao: "Com K = 1, a decisão depende de um único vizinho: um ponto ruidoso ou mal rotulado muda a previsão. O modelo decora o treino.",
      erros: [null, "Underfitting é o risco de K MUITO GRANDE.", "O tipo de tarefa não depende de K.", "K muda bastante a fronteira de decisão."]
    },
    {
      pergunta: "Por que é importante escalonar as features antes de usar KNN?",
      alternativas: ["Porque o KNN não aceita números decimais", "Para transformar o problema em regressão", "Para reduzir o número de classes", "Porque o KNN usa distâncias, e features de escala grande dominariam o cálculo"],
      correta: 3,
      explicacao: "Sem escalonar, uma feature como vendas (milhões) dominaria a nota (0–10) no cálculo da distância.",
      erros: ["O KNN aceita decimais normalmente.", "Escalonar não muda o tipo de tarefa.", "O número de classes é definido pelo problema, não pelo escalonamento.", null]
    },
    {
      pergunta: "Um modelo bloqueou 100 e-mails como spam, mas 20 eram importantes. Qual é a precisão?",
      alternativas: ["20%", "80%", "100%", "Não dá para calcular"],
      correta: 1,
      explicacao: "Precisão = VP/(VP + FP) = 80/(80 + 20) = 80%. Das vezes em que disse “spam”, acertou 80%.",
      erros: ["20% é a taxa de alarmes falsos entre os bloqueados, o complemento da precisão.", null, "Houve 20 falsos positivos, então não é 100%.", "Temos VP = 80 e FP = 20, o suficiente para a precisão."]
    },
    {
      pergunta: "Há 10 doentes e o modelo detectou 6. Qual é o recall?",
      alternativas: ["40%", "6%", "60%", "100%"],
      correta: 2,
      explicacao: "Recall = VP/(VP + FN) = 6/(6 + 4) = 60%. O modelo encontrou 60% dos doentes existentes.",
      erros: ["40% é a proporção de doentes que PASSARAM sem diagnóstico (FN/total de positivos).", "Confundiu contagem com porcentagem: são 6 de 10.", null, "4 doentes não foram detectados."]
    },
    {
      pergunta: "Em uma base com 99% de pessoas saudáveis, um modelo que prevê “saudável” para todos tem 99% de acurácia. Isso significa que:",
      alternativas: ["O modelo é excelente", "A acurácia engana em bases desbalanceadas; o recall para doentes é 0%", "A precisão também é 99%", "O modelo não comete erros"],
      correta: 1,
      explicacao: "O modelo nunca identifica um doente: o recall da classe positiva é 0%. Em bases desbalanceadas, a acurácia esconde esse fracasso.",
      erros: ["É inútil para o objetivo real, que é encontrar doentes.", null, "Para a classe “doente”, a precisão nem pode ser calculada (nenhum positivo previsto).", "Erra 100% dos doentes (1% da base)."]
    }
  ],

  discursivas: [
    "Explique com suas palavras por que dividimos os dados em treino, validação e teste, e o que acontece se avaliarmos no próprio treino.",
    "Descreva o funcionamento do KNN passo a passo e explique como a escolha de K afeta o modelo.",
    "No seu projeto, o erro mais grave seria um falso positivo ou um falso negativo? Qual métrica você priorizaria? Justifique.",
    "Calcule a distância euclidiana entre (2, 3) e (5, 7) e explique por que features em escalas diferentes distorcem esse cálculo.",
    "Dê um exemplo de problema de classificação e outro de regressão, explicando a diferença entre eles."
  ],

  respostasDiscursivas: [
    "O <strong>treino</strong> é onde o modelo aprende; a <strong>validação</strong> serve para comparar modelos e ajustar hiperparâmetros; o <strong>teste</strong> fica guardado para a avaliação final com dados nunca vistos (ex.: 70/20/10). Queremos medir <strong>generalização</strong>, ou seja, o desempenho em dados novos. Avaliar no próprio treino mede memorização: um modelo que decorou tudo teria nota altíssima e falharia em produção (overfitting invisível).",
    "1) Escolher K. 2) Para um novo ponto, calcular a distância (euclidiana) até todos os pontos de treino. 3) Selecionar os K mais próximos. 4) Classificar pela maioria (ou fazer a média, em regressão). O KNN não aprende uma equação: memoriza os exemplos. <strong>K pequeno</strong> (ex.: 1) fica sensível a ruído e tende ao overfitting; <strong>K grande</strong> suaviza demais e tende ao underfitting. Usa-se K ímpar para evitar empates, escolhido por validação cruzada, e as features precisam estar escalonadas.",
    "Se o modelo prevê que o fogão ultrapassa o limite de segurança: <strong>falso negativo</strong> = dizer que está seguro quando não está. É o erro mais grave, pois pode aprovar um produto com risco de queimadura. Prioriza-se o <strong>recall</strong> da classe “acima do limite”, aceitando alguns falsos positivos (testes físicos extras). Em regressão, deve-se olhar o erro nas faixas altas de temperatura.",
    "d = √[(5 − 2)² + (7 − 3)²] = √(9 + 16) = √25 = <strong>5</strong>.<br>A distância soma as diferenças ao quadrado de cada feature. Se uma feature estiver em escala muito maior (ex.: potência em watts, de 1000 a 3000) e outra em escala pequena (ex.: tempo em horas, de 1 a 5), a diferença de potência domina completamente a distância, e o tempo é praticamente ignorado. Por isso é preciso escalonar antes.",
    "<strong>Classificação:</strong> prever uma categoria, como “o fogão passa ou não passa no teste de segurança” (sim/não). <strong>Regressão:</strong> prever um valor numérico contínuo, como “qual será a temperatura da parede em °C”. A diferença está no tipo da saída (classe discreta × número) e, por consequência, nas métricas: acurácia, precisão e recall na classificação; MAE, RMSE e R² na regressão."
  ]
});
