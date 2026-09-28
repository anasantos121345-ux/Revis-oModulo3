Plataforma.adicionarAula("programacao", {
  id: "problemas-comuns-modelagem",
  titulo: "Problemas Comuns na Modelagem de IA",
  descricao: "Escolha de modelos, overfitting e underfitting, validação cruzada k-fold, data leakage, desbalanceamento de classes e mais feature engineering.",
  duracao: "55 min",

  resumo: [
    { tipo: "titulo", texto: "Escolher um modelo vai além da maior nota" },
    { tipo: "texto", texto: "Escolher um modelo <strong>não é</strong> pegar o algoritmo com a maior pontuação em um único treinamento. É preciso considerar:" },
    { tipo: "lista", itens: [
      "o <strong>tipo de tarefa</strong> (classificação, regressão, agrupamento) e o tipo de variável alvo;",
      "a <strong>estrutura dos dados</strong> (escala das variáveis, tipos, ruído, relações);",
      "o <strong>tamanho</strong> do conjunto de dados e o custo computacional;",
      "a necessidade de <strong>interpretabilidade</strong>."
    ]},
    { tipo: "destaque", titulo: "Modelo × configuração", texto: "Random Forest, SVM, KNN e Gradient Boosting são <strong>famílias</strong> de algoritmos. Uma Random Forest mal configurada pode perder para uma SVM bem ajustada, e a situação pode se inverter com outros hiperparâmetros. Compare <strong>modelos ajustados</strong>, não nomes." },

    { tipo: "titulo", texto: "Underfitting × overfitting" },
    { tipo: "tabela", cabecalho: ["", "Underfitting", "Overfitting"], linhas: [
      ["O que é", "modelo simples demais, que não captura os padrões", "modelo complexo demais, que decora detalhes e ruído do treino"],
      ["Treino", "erro ALTO", "erro MUITO BAIXO"],
      ["Validação/teste", "erro ALTO", "erro ALTO (bem pior que no treino)"],
      ["Exemplo (árvore)", "max_depth = 1", "max_depth ilimitado"],
      ["Como corrigir", "modelo mais complexo, mais features", "simplificar, regularizar, mais dados, poda, early stopping"]
    ]},
    { tipo: "exemplo", titulo: "Lendo os números", texto: "Treino 99% / validação 71% → <strong>overfitting</strong> (grande gap).<br>Treino 62% / validação 60% → <strong>underfitting</strong> (ambos ruins).<br>Treino 88% / validação 86% → bom equilíbrio: <strong>generaliza</strong>." },

    { tipo: "titulo", texto: "Validação cruzada (k-fold)" },
    { tipo: "texto", texto: "Evita concluir que um modelo é bom só porque se ajustou bem a <em>uma</em> divisão específica dos dados. O treino é dividido em <strong>k partes (folds)</strong>: em cada rodada, um fold valida e os outros k − 1 treinam. Ao final, analisamos as k métricas juntas (média e desvio)." },
    { tipo: "exemplo", titulo: "5-fold", texto: "Rodada 1: valida no fold 1, treina nos folds 2–5. Rodada 2: valida no fold 2… Resultado: <strong>5 treinamentos e 5 métricas</strong>. Ex.: F1 = 0,81 ± 0,02 é mais confiável que um único 0,84." },
    { tipo: "codigo", texto: "from sklearn.model_selection import cross_val_score\n\nscores = cross_val_score(modelo, X_train, y_train, cv=5, scoring=\"f1\")\nprint(scores.mean(), scores.std())" },

    { tipo: "titulo", texto: "Data leakage (vazamento de dados)" },
    { tipo: "texto", texto: "Acontece quando o modelo recebe, no treino, informação que <strong>não estaria disponível no momento da previsão real</strong>. O resultado é uma métrica excelente no teste e fracasso em produção." },
    { tipo: "lista", itens: [
      "<strong>Feature do futuro:</strong> usar “data_do_cancelamento” para prever se o cliente vai cancelar.",
      "<strong>Pré-processar antes de dividir:</strong> escalonar ou imputar com média calculada em TODO o dataset (o teste “vaza” para o treino).",
      "<strong>Duplicatas</strong> do mesmo registro no treino e no teste.",
      "<strong>Séries temporais</strong> embaralhadas: treinar com o futuro para prever o passado."
    ]},
    { tipo: "codigo", texto: "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\n# o Pipeline garante: fit do scaler SÓ nos dados de treino de cada fold\npipe = Pipeline([(\"scaler\", StandardScaler()),\n                 (\"modelo\", LogisticRegression())])" },

    { tipo: "titulo", texto: "Classes desbalanceadas" },
    { tipo: "texto", texto: "Quando uma classe é rara (fraude 1%, falha 2%), o modelo tende a ignorá-la, e a acurácia engana." },
    { tipo: "tabela", cabecalho: ["Estratégia", "Como funciona"], linhas: [
      ["Métricas adequadas", "precisão, recall, F1, ROC-AUC, PR-AUC em vez de acurácia"],
      ["<code>stratify=y</code>", "mantém a proporção das classes em treino e teste"],
      ["class_weight=\"balanced\"", "erros na classe rara pesam mais"],
      ["Undersampling", "reduz exemplos da classe majoritária"],
      ["Oversampling / SMOTE", "replica ou sintetiza exemplos da classe minoritária (só no treino!)"],
      ["Ajuste de limiar", "mudar o corte de 0,5 para aumentar recall ou precisão"]
    ]},

    { tipo: "titulo", texto: "Mais feature engineering" },
    { tipo: "lista", itens: [
      "<strong>Seleção de features:</strong> remover variáveis irrelevantes ou redundantes (VIF alto, correlação quase 1).",
      "<strong>Maldição da dimensionalidade:</strong> muitas features para poucos exemplos deixam as distâncias pouco informativas e favorecem overfitting.",
      "<strong>Transformações:</strong> log em variáveis muito assimétricas (renda), binning (faixas etárias), interações (área × padrão).",
      "<strong>Datas:</strong> extrair dia da semana, mês, sazonalidade, tempo desde o último evento.",
      "<strong>Alta cardinalidade:</strong> one-hot de 5.000 CEPs explode; agrupe por região ou use target/frequency encoding com cuidado."
    ]},
    { tipo: "dica", itens: [
      "Sempre compare com um <strong>baseline</strong> simples (prever a média ou a classe mais frequente).",
      "Olhe a curva de aprendizado: o gap entre treino e validação denuncia overfitting.",
      "Divida os dados <strong>antes</strong> de qualquer transformação que “aprende” com os dados."
    ]},
    { tipo: "cuidado", itens: [
      "SMOTE/oversampling aplicados antes da divisão causam leakage.",
      "Uma métrica boa demais para ser verdade (99,9%) costuma ser sinal de vazamento.",
      "Validação cruzada comum embaralha os dados; em séries temporais use divisão temporal (TimeSeriesSplit)."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Um modelo tem 99% de acurácia no treino e 70% na validação. Qual é o diagnóstico mais provável?",
      alternativas: ["Underfitting", "Overfitting", "Modelo ideal", "Data Lake"],
      correta: 1,
      explicacao: "Desempenho excelente no treino e muito pior em dados novos indica que o modelo decorou o treino (incluindo ruído) e não generaliza: overfitting.",
      erros: ["No underfitting, o desempenho é ruim também no TREINO.", null, "O gap de 29 pontos mostra baixa generalização.", "Data Lake é armazenamento de dados, não um diagnóstico de modelo."]
    },
    {
      pergunta: "Treino 61% e validação 60% em um problema em que outros modelos chegam a 88%. O que isso sugere?",
      alternativas: ["Overfitting", "Data leakage", "Underfitting: o modelo é simples demais para capturar os padrões", "Excelente generalização"],
      correta: 2,
      explicacao: "Treino e validação igualmente ruins indicam que o modelo não tem capacidade para aprender os padrões: underfitting.",
      erros: ["Overfitting teria treino alto e validação baixa.", "Vazamento costuma gerar métricas altas demais, e não baixas.", null, "Generaliza de forma consistente, mas o desempenho é ruim em ambos."]
    },
    {
      pergunta: "Na validação cruzada 5-fold, quantas vezes o modelo é treinado?",
      alternativas: ["1", "4", "10", "5"],
      correta: 3,
      explicacao: "Com k = 5, cada fold serve de validação uma vez; o modelo é treinado 5 vezes, gerando 5 métricas.",
      erros: ["Uma vez seria uma validação simples (holdout).", "4 é o número de folds usados para TREINO em cada rodada.", "10 treinamentos aconteceriam com k = 10 folds, e não com 5.", null]
    },
    {
      pergunta: "Qual é o principal objetivo da validação cruzada?",
      alternativas: ["Aumentar o tamanho do dataset", "Estimar a capacidade de generalização de forma mais robusta, sem depender de uma única divisão", "Remover outliers", "Substituir o conjunto de teste final"],
      correta: 1,
      explicacao: "Avaliar em várias divisões reduz o risco de concluir que o modelo é bom por sorte em uma divisão específica.",
      erros: ["Os dados continuam os mesmos, só são reutilizados em rodadas.", null, "Tratamento de outliers é pré-processamento.", "O teste final continua reservado para a avaliação definitiva."]
    },
    {
      pergunta: "Qual situação é um exemplo de data leakage?",
      alternativas: ["Usar a feature “data_do_cancelamento” para prever se o cliente vai cancelar", "Usar a idade do cliente para prever churn", "Dividir os dados antes de escalonar", "Usar validação cruzada"],
      correta: 0,
      explicacao: "A data de cancelamento só existe DEPOIS do evento que queremos prever. O modelo “trapaceia” no teste e falha em produção.",
      erros: [null, "A idade está disponível no momento da previsão, então é legítima.", "Dividir antes de escalonar é justamente a prática CORRETA para evitar vazamento.", "Validação cruzada, feita corretamente, não causa vazamento."]
    },
    {
      pergunta: "Por que escalonar TODO o dataset antes de dividir em treino e teste é um problema?",
      alternativas: ["Porque deixa o código mais lento", "Porque o scaler não funciona em dados de teste", "Porque estatísticas do teste (média, desvio) influenciam o treino, causando vazamento", "Não é problema"],
      correta: 2,
      explicacao: "A média e o desvio usados no escalonamento incluiriam o teste, e informação do teste vazaria para o treino. O correto é fazer o fit no treino e o transform no teste (ou usar Pipeline).",
      erros: ["O problema é estatístico, não de desempenho computacional.", "O scaler pode e deve transformar o teste, mas com parâmetros aprendidos no treino.", null, "É uma forma sutil e comum de vazamento."]
    },
    {
      pergunta: "Em uma base de fraudes com 1% de positivos, qual métrica é MENOS adequada como critério principal?",
      alternativas: ["Recall", "F1-score", "PR-AUC", "Acurácia"],
      correta: 3,
      explicacao: "Um modelo que prevê “não fraude” para todos teria 99% de acurácia sem detectar nenhuma fraude. Em bases desbalanceadas, a acurácia engana.",
      erros: ["O recall mede quantas fraudes foram encontradas, o que é crucial aqui.", "O F1 equilibra precisão e recall da classe rara.", "A PR-AUC é recomendada justamente para classes raras.", null]
    },
    {
      pergunta: "Quando o oversampling (ou SMOTE) deve ser aplicado?",
      alternativas: ["No dataset inteiro, antes de dividir", "Apenas no conjunto de treino, depois da divisão", "Apenas no conjunto de teste", "Nunca"],
      correta: 1,
      explicacao: "Gerar exemplos sintéticos antes de dividir coloca “cópias” de pontos do treino no teste, inflando as métricas. Aplique só no treino (de cada fold).",
      erros: ["Isso causa vazamento: exemplos parecidos acabam no treino e no teste.", null, "O teste deve refletir a distribuição real, sem dados sintéticos.", "É uma técnica válida para desbalanceamento quando aplicada corretamente."]
    },
    {
      pergunta: "Qual afirmação sobre comparar modelos está correta?",
      alternativas: ["Random Forest é sempre melhor que SVM", "Basta comparar os nomes dos algoritmos", "O melhor modelo é o de maior nota em um único treino", "É preciso comparar modelos com hiperparâmetros ajustados, pois a configuração muda muito o desempenho"],
      correta: 3,
      explicacao: "Algoritmos são famílias configuráveis. Uma RF mal configurada pode perder para uma SVM bem ajustada. A comparação justa é entre modelos otimizados e bem validados.",
      erros: ["Não existe algoritmo universalmente superior (teorema “no free lunch”).", "O nome não diz nada sobre a configuração e o desempenho.", "Uma única divisão pode favorecer um modelo por acaso. Use validação cruzada.", null]
    },
    {
      pergunta: "Qual problema a “maldição da dimensionalidade” descreve?",
      alternativas: ["Ter poucas features em um dataset", "Com muitas features para poucos exemplos, os dados ficam esparsos, as distâncias perdem significado e cresce o risco de overfitting", "Usar gráficos 3D", "Arrays NumPy com muitas dimensões ficam lentos"],
      correta: 1,
      explicacao: "Em alta dimensão, os pontos ficam distantes e parecidos entre si em distância, o que prejudica algoritmos como KNN e facilita o modelo decorar ruído.",
      erros: ["O problema é o oposto: features demais.", null, "Não tem relação com visualização.", "É um fenômeno estatístico e geométrico, não de desempenho de biblioteca."]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre overfitting e underfitting e como identificá-los comparando métricas de treino e validação.",
    "Descreva como funciona a validação cruzada k-fold e por que ela é mais confiável que uma única divisão treino/validação.",
    "Dê dois exemplos de data leakage que poderiam acontecer no seu projeto e como evitá-los.",
    "Seu dataset tem uma classe muito rara. Proponha uma estratégia completa (divisão, técnica de balanceamento e métricas) e justifique.",
    "Quais critérios você usaria para escolher entre três modelos candidatos no seu projeto? Considere desempenho, interpretabilidade e custo."
  ],

  respostasDiscursivas: [
    "<strong>Overfitting:</strong> o modelo é complexo demais e decora o treino, inclusive o ruído. Sinal: desempenho <strong>alto no treino e bem pior na validação</strong> (ex.: 99% × 70%). <strong>Underfitting:</strong> o modelo é simples demais e não captura os padrões. Sinal: desempenho <strong>ruim nos dois</strong> (ex.: 61% × 60%). O ideal é os dois altos e próximos. Correções: para overfitting, simplificar, regularizar ou usar mais dados; para underfitting, um modelo mais expressivo e melhores features.",
    "O treino é dividido em k partes (folds). Em cada rodada, um fold valida e os k − 1 restantes treinam. Repete-se até cada fold ter validado uma vez, gerando k métricas, que resumimos pela média e pelo desvio. É mais confiável porque não depende da sorte de uma única divisão: todos os dados participam da validação, e o desvio mostra se o desempenho é estável.",
    "1) <strong>Usar informação do futuro:</strong> incluir como feature algo medido depois do evento previsto (ex.: temperatura final do teste para prever o resultado do mesmo teste). Evitar: listar para cada feature quando ela está disponível na hora da previsão.<br>2) <strong>Pré-processar antes de dividir:</strong> escalonar ou imputar com estatísticas de todo o dataset, ou ter o mesmo fogão ou teste repetido em treino e teste. Evitar: dividir primeiro, usar Pipeline e fazer a divisão por grupo (por modelo de fogão).",
    "1) <strong>Divisão estratificada</strong> (<code>stratify=y</code>) e validação cruzada estratificada, para manter a proporção da classe rara em cada parte.<br>2) <strong>Balanceamento só no treino:</strong> class_weight=\"balanced\" ou SMOTE/oversampling dentro de cada fold (via pipeline), nunca antes de dividir.<br>3) <strong>Métricas:</strong> recall, precisão, F1 e PR-AUC da classe rara, e não a acurácia.<br>4) <strong>Ajustar o limiar</strong> de decisão conforme o custo de um falso negativo em relação a um falso positivo.",
    "1) <strong>Desempenho</strong> na métrica que reflete o erro mais caro (ex.: MAE e RMSE nas faixas críticas de temperatura), com média e desvio na validação cruzada, e confirmação no teste. 2) <strong>Generalização:</strong> gap pequeno entre treino e validação. 3) <strong>Interpretabilidade:</strong> permitir explicar as previsões aos engenheiros (SHAP ou coeficientes). 4) <strong>Custo</strong> de treino e inferência e facilidade de manutenção. 5) Comparação com um <strong>baseline</strong> simples. Se dois modelos empatam, prefiro o mais simples e explicável."
  ]
});
