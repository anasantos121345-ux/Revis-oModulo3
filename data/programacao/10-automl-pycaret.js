Plataforma.adicionarAula("programacao", {
  id: "automl-pycaret",
  titulo: "AutoML com PyCaret",
  descricao: "O que é AutoML, fluxo do PyCaret (setup, compare_models, create_model, tune_model, finalize_model, predict_model), vantagens e limites.",
  duracao: "40 min",

  resumo: [
    { tipo: "titulo", texto: "O que é AutoML" },
    { tipo: "texto", texto: "<strong>AutoML</strong> (Automated Machine Learning) automatiza etapas repetitivas do fluxo de ML: pré-processamento, treino de vários algoritmos, validação cruzada, comparação, tuning de hiperparâmetros e até ensembles. O objetivo é chegar a bons modelos <strong>mais rápido</strong> e com <strong>menos código</strong>." },
    { tipo: "destaque", titulo: "AutoML não substitui o cientista de dados", texto: "A ferramenta executa; <strong>você decide</strong>: qual problema resolver, qual métrica importa, se há vazamento, se os dados são representativos, se o modelo é justo e explicável." },

    { tipo: "titulo", texto: "PyCaret" },
    { tipo: "texto", texto: "Biblioteca <strong>low-code</strong> de Python que empacota scikit-learn, XGBoost, LightGBM, CatBoost e outras em poucas funções. Tem módulos por tarefa: <code>pycaret.classification</code>, <code>pycaret.regression</code>, <code>pycaret.clustering</code>, <code>pycaret.anomaly</code>, <code>pycaret.time_series</code>." },
    { tipo: "tabela", cabecalho: ["Função", "O que faz"], linhas: [
      ["<code>setup()</code>", "inicializa o experimento: define o target, divide treino/teste, trata ausentes, codifica categorias, normaliza (se pedido) e define os folds"],
      ["<code>compare_models()</code>", "treina e avalia <strong>dezenas de algoritmos</strong> com validação cruzada e mostra um ranking de métricas"],
      ["<code>create_model(\"rf\")</code>", "treina um modelo específico com validação cruzada"],
      ["<code>tune_model()</code>", "otimiza hiperparâmetros (busca aleatória por padrão; aceita outros otimizadores)"],
      ["<code>blend_models()</code> / <code>stack_models()</code>", "combina modelos em ensembles"],
      ["<code>evaluate_model()</code> / <code>plot_model()</code>", "gráficos: matriz de confusão, AUC, importância de features…"],
      ["<code>interpret_model()</code>", "explicabilidade com SHAP"],
      ["<code>predict_model()</code>", "prevê no conjunto de teste (hold-out) ou em dados novos"],
      ["<code>finalize_model()</code>", "retreina o modelo escolhido com <strong>todos</strong> os dados (treino + teste)"],
      ["<code>save_model()</code> / <code>load_model()</code>", "salva e carrega o pipeline completo"]
    ]},
    { tipo: "codigo", texto: "from pycaret.classification import *\n\nexp = setup(data=df, target=\"cancelou\", session_id=42,\n            train_size=0.8, fold=5, normalize=True)\n\nmelhores = compare_models(sort=\"AUC\", n_select=3)  # ranking por AUC\nrf = create_model(\"rf\")\nrf_tunado = tune_model(rf, optimize=\"Recall\", n_iter=30)\nevaluate_model(rf_tunado)\ninterpret_model(rf_tunado)            # SHAP\n\npredict_model(rf_tunado)              # avalia no hold-out\nfinal = finalize_model(rf_tunado)     # retreina com tudo\nsave_model(final, \"modelo_churn\")" },
    { tipo: "passos", itens: [
      "<strong>setup:</strong> prepare o experimento (e revise o que ele inferiu sobre os tipos das colunas).",
      "<strong>compare_models:</strong> descubra quais famílias funcionam melhor.",
      "<strong>create + tune:</strong> ajuste os 2 ou 3 melhores com a métrica certa.",
      "<strong>analyze:</strong> avalie gráficos e explique com SHAP.",
      "<strong>predict (hold-out):</strong> confirme em dados não vistos.",
      "<strong>finalize + save:</strong> retreine com todos os dados e salve para produção."
    ]},
    { tipo: "exemplo", titulo: "Ligando com a entrega da sprint", texto: "A entrega pede: escolher métricas justificadas pelo problema; pelo menos <strong>três modelos candidatos com tuning</strong>; e explicabilidade em pelo menos um. O PyCaret acelera tudo isso: <code>compare_models(n_select=3)</code> → <code>tune_model</code> em cada um → <code>interpret_model</code>. Mas <strong>a justificativa das métricas é sua</strong>." },

    { tipo: "titulo", texto: "Vantagens e limites" },
    { tipo: "tabela", cabecalho: ["Vantagens", "Limites"], linhas: [
      ["poucas linhas de código para testar muitos modelos", "“caixa-preta”: fácil aceitar resultados sem entender"],
      ["padroniza validação cruzada e métricas", "pré-processamento automático pode não ser o ideal para o seu domínio"],
      ["tuning e ensembles prontos", "não detecta sozinho data leakage conceitual (features do futuro)"],
      ["rápido para prototipar e criar baselines", "custo computacional alto em bases grandes"]
    ]},
    { tipo: "dica", itens: [
      "Use <code>session_id</code> para reprodutibilidade.",
      "Ordene o <code>compare_models</code> pela métrica que reflete o custo do erro (<code>sort=\"Recall\"</code>, <code>\"F1\"</code>, <code>\"MAE\"</code>…).",
      "Guarde a tabela do <code>compare_models</code> como evidência na documentação."
    ]},
    { tipo: "cuidado", itens: [
      "<code>finalize_model</code> usa também o hold-out; depois dele, não há mais como avaliar em dados não vistos.",
      "Limpe e entenda os dados antes: AutoML com dados ruins gera modelos ruins mais rápido.",
      "Acurácia é o padrão de ordenação em classificação; em bases desbalanceadas, troque a métrica."
    ]}
  ],

  objetivas: [
    {
      pergunta: "O que o AutoML automatiza?",
      alternativas: ["A definição do problema de negócio", "Etapas repetitivas como pré-processamento, treino de vários modelos, validação, comparação e tuning", "A coleta de dados junto ao parceiro", "A interpretação ética dos resultados"],
      correta: 1,
      explicacao: "O AutoML acelera o ciclo técnico de experimentação. Definir o problema, coletar dados e avaliar impactos continuam sendo decisões humanas.",
      erros: ["Definir o problema é trabalho humano, junto ao negócio.", null, "A coleta depende de acesso e acordos, fora do escopo do AutoML.", "A avaliação ética e de contexto continua com o time."]
    },
    {
      pergunta: "Qual função do PyCaret deve ser chamada PRIMEIRO para iniciar um experimento?",
      alternativas: ["compare_models()", "finalize_model()", "setup()", "predict_model()"],
      correta: 2,
      explicacao: "setup() inicializa o ambiente: define o target, faz a divisão treino/teste, o pré-processamento e a configuração da validação cruzada. As demais funções dependem dele.",
      erros: ["compare_models precisa de um experimento já configurado pelo setup.", "finalize_model é uma das últimas etapas.", null, "predict_model exige um modelo já treinado."]
    },
    {
      pergunta: "O que faz compare_models()?",
      alternativas: ["Treina e avalia vários algoritmos com validação cruzada e exibe um ranking de métricas", "Compara dois datasets", "Salva o modelo em disco", "Remove outliers"],
      correta: 0,
      explicacao: "compare_models treina dezenas de algoritmos, avalia com CV e ordena pela métrica escolhida (sort).",
      erros: [null, "Não compara datasets, e sim modelos no mesmo dataset.", "Salvar é papel do save_model.", "Tratamento de dados ocorre no setup."]
    },
    {
      pergunta: "Qual função otimiza os hiperparâmetros de um modelo no PyCaret?",
      alternativas: ["create_model()", "tune_model()", "blend_models()", "load_model()"],
      correta: 1,
      explicacao: "tune_model() busca hiperparâmetros melhores (por padrão, busca aleatória com n_iter) segundo a métrica em optimize.",
      erros: ["create_model treina com hiperparâmetros padrão.", null, "blend_models combina modelos em ensemble.", "load_model carrega um modelo salvo."]
    },
    {
      pergunta: "O que finalize_model() faz?",
      alternativas: ["Apaga o experimento", "Avalia o modelo no hold-out", "Retreina o modelo escolhido usando todos os dados, inclusive o conjunto de teste", "Gera gráficos SHAP"],
      correta: 2,
      explicacao: "Depois de escolher e validar o modelo, finalize_model o retreina com todos os dados disponíveis, para produção.",
      erros: ["Não apaga nada; retreina o modelo.", "A avaliação no hold-out é feita com predict_model ANTES de finalizar.", null, "SHAP é gerado por interpret_model."]
    },
    {
      pergunta: "Qual função do PyCaret gera explicabilidade baseada em SHAP?",
      alternativas: ["interpret_model()", "setup()", "compare_models()", "save_model()"],
      correta: 0,
      explicacao: "interpret_model() produz gráficos SHAP (resumo, correlação, razão de uma previsão) para modelos compatíveis, como os baseados em árvores.",
      erros: [null, "setup só prepara o experimento.", "compare_models ranqueia modelos por métricas, sem explicar previsões.", "save_model só persiste o pipeline."]
    },
    {
      pergunta: "Em uma base de fraudes muito desbalanceada, como ajustar o compare_models?",
      alternativas: ["Manter a ordenação por acurácia", "Ordenar por uma métrica como Recall, F1 ou AUC (sort=\"Recall\")", "Remover a validação cruzada", "Usar apenas um modelo"],
      correta: 1,
      explicacao: "A acurácia engana com classes raras. Ordenar por Recall, F1 ou AUC alinha o ranking ao custo real dos erros.",
      erros: ["A acurácia premiaria o modelo que prevê sempre “não fraude”.", null, "Sem CV, as métricas ficam menos confiáveis.", "Comparar vários modelos é justamente a vantagem da ferramenta."]
    },
    {
      pergunta: "Qual é um LIMITE importante do AutoML?",
      alternativas: ["Não consegue treinar modelos", "Só funciona com imagens", "Não detecta sozinho vazamentos conceituais, como features que só existem depois do evento", "Não permite salvar modelos"],
      correta: 2,
      explicacao: "A ferramenta não sabe o significado de negócio das colunas. Se você incluir uma feature do futuro, ela vai usar e reportar métricas infladas.",
      erros: ["Treinar modelos é justamente o que ela faz.", "O PyCaret trabalha principalmente com dados tabulares.", null, "save_model e load_model existem."]
    },
    {
      pergunta: "Por que usar session_id no setup()?",
      alternativas: ["Para garantir reprodutibilidade dos resultados (mesma semente aleatória)", "Para conectar ao banco de dados", "Para aumentar a acurácia", "Para escolher o target"],
      correta: 0,
      explicacao: "session_id fixa a semente aleatória usada em divisões, folds e buscas, o que torna o experimento reproduzível.",
      erros: [null, "A conexão com dados é feita antes, carregando o DataFrame.", "Fixar a semente não melhora o modelo; só torna o resultado repetível.", "O target é definido pelo argumento target."]
    },
    {
      pergunta: "A entrega pede três modelos candidatos com tuning e explicabilidade. Qual sequência no PyCaret atende melhor?",
      alternativas: ["setup → save_model", "compare_models → finalize_model, sem tuning", "setup → compare_models(n_select=3) → tune_model em cada um → interpret_model no escolhido", "predict_model → setup → compare_models"],
      correta: 2,
      explicacao: "Essa sequência seleciona três candidatos, otimiza os hiperparâmetros de cada um e gera explicabilidade, cobrindo os critérios da entrega.",
      erros: ["Pula comparação, tuning e explicabilidade.", "Falta o tuning de hiperparâmetros exigido.", null, "A ordem está errada: o setup precisa vir primeiro."]
    }
  ],

  discursivas: [
    "Explique com suas palavras o que é AutoML e por que ele não substitui o trabalho do cientista de dados.",
    "Descreva o fluxo completo de um experimento no PyCaret, da função setup até save_model, explicando cada etapa.",
    "Qual métrica você usaria para ordenar o compare_models no seu projeto? Justifique com base no custo dos erros.",
    "Cite duas vantagens e duas limitações do uso de AutoML em um projeto real.",
    "Explique a diferença entre avaliar com predict_model no hold-out e retreinar com finalize_model. Por que a ordem importa?"
  ],

  respostasDiscursivas: [
    "AutoML automatiza etapas repetitivas do ciclo de ML: pré-processamento, treino de vários algoritmos, validação cruzada, comparação, tuning e ensembles, e chega a bons modelos rápido e com pouco código. Mas não substitui o cientista de dados, porque não sabe <strong>o que</strong> vale a pena prever, qual métrica reflete o custo real dos erros, se há vazamento (features do futuro), se os dados são representativos ou enviesados, nem como explicar e implantar a solução com responsabilidade.",
    "1) <code>setup()</code>: define o target, divide treino e hold-out, trata ausentes, codifica categorias, normaliza e define os folds.<br>2) <code>compare_models()</code>: treina e ranqueia dezenas de algoritmos por validação cruzada.<br>3) <code>create_model()</code>: treina o candidato escolhido.<br>4) <code>tune_model()</code>: otimiza os hiperparâmetros pela métrica definida.<br>5) <code>evaluate_model()</code> / <code>interpret_model()</code>: gráficos e SHAP.<br>6) <code>predict_model()</code>: confirma no hold-out.<br>7) <code>finalize_model()</code>: retreina com todos os dados.<br>8) <code>save_model()</code>: salva o pipeline para produção.",
    "Como o modelo do projeto é de regressão, ordenaria por <strong>MAE</strong> (erro médio em °C, fácil de comunicar) ou por <strong>RMSE</strong>, se errar muito em uma previsão alta for especialmente perigoso, porque ele penaliza erros grandes. Em uma versão de classificação (passa/não passa no limite de segurança), ordenaria por <strong>Recall</strong>, porque o falso negativo (aprovar um fogão inseguro) é o erro mais caro.",
    "<strong>Vantagens:</strong> 1) testa muitos modelos com pouco código e cria baselines rápido; 2) padroniza validação cruzada, métricas e tuning, o que facilita comparar e documentar. <strong>Limitações:</strong> 1) efeito caixa-preta: é fácil aceitar resultados sem entender o pré-processamento; 2) não detecta vazamentos conceituais nem vieses dos dados, e pode ser custoso computacionalmente em bases grandes.",
    "<strong>predict_model</strong> no hold-out avalia o modelo em dados que ele não viu, o que dá uma estimativa honesta do desempenho. <strong>finalize_model</strong> retreina o modelo escolhido com <strong>todos</strong> os dados (inclusive o hold-out), para usá-lo em produção. A ordem importa: primeiro avaliamos, depois finalizamos. Se finalizarmos antes, o hold-out entra no treino e não existe mais nenhum dado “não visto” para medir o desempenho real."
  ]
});
