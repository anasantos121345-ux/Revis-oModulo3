Plataforma.adicionarAula("programacao", {
  id: "pre-processamento-feature-engineering",
  titulo: "Pré-processamento e Feature Engineering",
  descricao: "Features e targets, limpeza, valores ausentes, outliers, escalonamento, codificação de categorias, feature engineering, ETL/ELT, Data Lake e Data Warehouse.",
  duracao: "55 min",

  resumo: [
    { tipo: "titulo", texto: "Features e target" },
    { tipo: "lista", itens: [
      "Cada <strong>linha</strong> é um exemplo (ex.: um paciente).",
      "Cada <strong>coluna</strong> é um atributo (altura, peso, sexo…).",
      "Cada par atributo–valor é uma <strong>feature</strong> (característica) de um exemplo.",
      "O <strong>target</strong> (valor-alvo) é o que queremos prever (ex.: “desenvolveu doença cardíaca?”)."
    ]},
    { tipo: "tabela", cabecalho: ["Tipo de feature", "Outros nomes", "Exemplos"], linhas: [
      ["<strong>Categórica</strong>", "discreta, simbólica, nominal", "sexo, origem, cidade"],
      ["<strong>Numérica</strong>", "contínua, intervalar, de razão", "altura, peso (decimais); idade, pressão, nº de rodas (inteiros)"]
    ]},
    { tipo: "texto", texto: "Uma categoria pode ser registrada como <strong>uma única feature</strong> (Sexo = Masculino/Feminino) ou como <strong>várias features</strong>, uma por categoria, em que só uma vale “sim” (Sexo é feminino? / Sexo é masculino?). Essa segunda forma é a base do one-hot encoding." },

    { tipo: "titulo", texto: "Limpeza e pré-processamento" },
    { tipo: "texto", texto: "Problemas típicos depois de carregar um DataFrame: valores ausentes, formatos incorretos, valores inválidos, duplicatas, escalas diferentes, categorias em texto e outliers." },
    { tipo: "exemplo", titulo: "Dataset de exercícios com problemas", texto: "Duration = 600 (provável erro de digitação de 60) · Date = <code>'2020/12/25'</code> como texto e uma data <code>NaN</code> · Calories = <code>NaN</code> · linhas duplicadas." },
    { tipo: "subtitulo", texto: "Valores ausentes (NaN)" },
    { tipo: "tabela", cabecalho: ["Estratégia", "Quando faz sentido"], linhas: [
      ["Remover linhas", "poucos registros afetados e dataset grande"],
      ["Média", "variável numérica sem outliers fortes"],
      ["Mediana", "variável numérica <strong>com outliers ou assimétrica</strong> (é robusta)"],
      ["Moda", "variável <strong>categórica</strong>"],
      ["Estimar com modelos", "quando a variável é importante e pode ser prevista pelas outras"]
    ]},
    { tipo: "codigo", texto: "df = df.dropna(subset=[\"Date\"])                        # remove linhas sem data\ndf[\"Calories\"] = df[\"Calories\"].fillna(df[\"Calories\"].median())\ndf[\"Date\"] = pd.to_datetime(df[\"Date\"])                 # corrige tipo\ndf[\"idade\"] = pd.to_numeric(df[\"idade\"])                 # \"35\" -> 35\ndf = df.drop_duplicates()" },
    { tipo: "subtitulo", texto: "Erros e outliers" },
    { tipo: "texto", texto: "Idade = −15 ou peso = 700 kg não fazem sentido: podem ser <strong>corrigidos, removidos ou substituídos</strong>. <strong>Outliers</strong> são valores muito diferentes do resto (idades 22, 24, 23, <strong>400</strong>) e surgem por erro de digitação, de sensor, de coleta ou por situações raras. Eles distorcem médias e variâncias." },
    { tipo: "subtitulo", texto: "Normalização e escalonamento" },
    { tipo: "texto", texto: "Algoritmos baseados em <strong>distância</strong> (KNN, K-means) sofrem quando uma variável tem escala muito maior: salário (1.000–50.000) dominaria idade (20–80)." },
    { tipo: "formula", legenda: "Duas técnicas comuns", texto: "Min-Max: x′ = (x − min)/(max − min) ∈ [0, 1]   ·   Padronização: z = (x − μ)/σ" },
    { tipo: "subtitulo", texto: "Codificação de categorias" },
    { tipo: "tabela", cabecalho: ["Técnica", "Como fica", "Cuidado"], linhas: [
      ["<strong>Label Encoding</strong>", "Masculino → 0, Feminino → 1", "cria uma ordem artificial se houver mais de 2 categorias sem ordem natural"],
      ["<strong>One-Hot Encoding</strong>", "uma coluna 0/1 por categoria", "muitas categorias geram muitas colunas"],
      ["<strong>Ordinal</strong>", "baixo → 0, médio → 1, alto → 2", "use só quando a ordem existe de verdade"]
    ]},

    { tipo: "titulo", texto: "Feature Engineering" },
    { tipo: "destaque", titulo: "Definição", texto: "Usar <strong>conhecimento do problema</strong> e técnicas de transformação para <strong>criar, modificar ou combinar features</strong>, produzindo representações mais úteis para a análise ou o modelo." },
    { tipo: "exemplo", titulo: "Clientes: data_nascimento, data_cadastro, valor_total_compras, quantidade_compras", itens: [
      "data_nascimento → <strong>idade</strong>",
      "data_cadastro → <strong>tempo_de_cliente</strong> (em meses)",
      "valor_total ÷ quantidade → <strong>ticket_medio</strong>",
      "data → dia da semana, mês, é_feriado"
    ]},

    { tipo: "titulo", texto: "Pipelines e armazenamento" },
    { tipo: "tabela", cabecalho: ["", "ETL", "ELT"], linhas: [
      ["Sigla", "Extract, Transform, Load", "Extract, Load, Transform"],
      ["Fluxo", "Fonte → Extrair → <strong>Transformar</strong> → Armazenar", "Fonte → Extrair → <strong>Armazenar</strong> → Transformar"],
      ["Ideia", "limpa e padroniza antes de gravar", "guarda o bruto e transforma depois, conforme a necessidade"]
    ]},
    { tipo: "tabela", cabecalho: ["", "Data Lake", "Data Warehouse"], linhas: [
      ["Guarda", "dados <strong>brutos e variados</strong>: CSV, JSON, Parquet, logs, imagens, áudio", "dados <strong>estruturados, integrados e tratados</strong>"],
      ["Foco", "flexibilidade, volume e variedade", "organização, consistência e análise (BI, dashboards)"],
      ["Exemplos", "AWS S3, Google Cloud Storage, Azure Data Lake Storage", "BigQuery, Snowflake, Redshift, Azure Synapse"]
    ]},
    { tipo: "texto", texto: "O <strong>Databricks</strong> pode implementar uma arquitetura <strong>Lakehouse</strong>, que combina as duas ideias." },
    { tipo: "dica", itens: [
      "Com outliers, prefira a <strong>mediana</strong> à média para imputar ausentes.",
      "Ajuste o scaler (fit) <strong>só no conjunto de treino</strong> e aplique (transform) no teste.",
      "Antes de remover um outlier, pergunte: “É erro ou é um caso raro importante (como uma falha real)?”"
    ]},
    { tipo: "cuidado", itens: [
      "Label Encoding em categorias sem ordem (cidades) faz o modelo achar que “SP (2) &gt; RJ (1)”.",
      "Limpar demais pode apagar justamente os casos raros que o modelo precisa prever.",
      "Datas e números importados como texto precisam ser convertidos antes de qualquer cálculo."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Em um dataset de pacientes, a coluna “Doença cardíaca? (Sim/Não)” que queremos prever é chamada de:",
      alternativas: ["Feature categórica de entrada", "Target (valor-alvo)", "Outlier", "Índice"],
      correta: 1,
      explicacao: "O target é o atributo que o modelo aprende a prever a partir das demais features.",
      erros: ["Ela é categórica, mas não é uma entrada: é o que queremos prever.", null, "Outlier é um valor anômalo, não uma coluna.", "Índice é o identificador das linhas (como ID do paciente)."]
    },
    {
      pergunta: "Uma coluna de renda tem valores ausentes e alguns outliers muito altos. Qual imputação é mais indicada?",
      alternativas: ["Média", "Moda", "Mediana", "Substituir por zero"],
      correta: 2,
      explicacao: "A mediana é robusta a outliers: valores extremos puxam a média, mas quase não afetam a mediana.",
      erros: ["A média é distorcida pelos outliers altos e superestimaria a renda típica.", "A moda é indicada para variáveis categóricas.", null, "Zero é um valor real de renda e distorceria a distribuição."]
    },
    {
      pergunta: "Por que escalonar variáveis antes de usar KNN ou K-means?",
      alternativas: ["Para remover valores ausentes", "Porque variáveis de escala maior dominariam o cálculo de distâncias", "Para converter texto em números", "Porque esses algoritmos só aceitam valores negativos"],
      correta: 1,
      explicacao: "Esses algoritmos usam distância. Se o salário varia em milhares e a idade em dezenas, o salário domina a distância e a idade é praticamente ignorada.",
      erros: ["Escalonar não trata ausentes; isso é imputação ou remoção.", null, "Converter texto em número é codificação (label/one-hot).", "Não existe essa exigência."]
    },
    {
      pergunta: "Qual é o problema de aplicar Label Encoding (0, 1, 2) à coluna “cidade” com SP, RJ e BH?",
      alternativas: ["Nenhum problema", "Gera muitas colunas", "Cria uma ordem artificial, como se BH (2) fosse “maior” que SP (0)", "Apaga a coluna"],
      correta: 2,
      explicacao: "Cidades não têm ordem natural, mas números têm. Alguns modelos interpretariam essa ordem falsa. Nesse caso, prefira one-hot.",
      erros: ["Há o problema da ordem implícita para categorias nominais.", "Quem gera muitas colunas é o one-hot, não o label encoding.", null, "Label encoding substitui os valores, não apaga a coluna."]
    },
    {
      pergunta: "Criar a feature “ticket_medio = valor_total_compras / quantidade_compras” é um exemplo de:",
      alternativas: ["Feature Engineering", "Remoção de outliers", "Label Encoding", "Data Lake"],
      correta: 0,
      explicacao: "Feature Engineering é usar conhecimento do problema para criar ou combinar características mais úteis ao modelo.",
      erros: [null, "Nenhum valor foi removido; uma nova feature foi criada.", "Não houve codificação de categorias.", "Data Lake é um ambiente de armazenamento."]
    },
    {
      pergunta: "Qual é a diferença entre ETL e ELT?",
      alternativas: ["ETL não carrega dados", "No ETL a transformação ocorre antes do carregamento; no ELT, os dados são carregados primeiro e transformados depois", "ELT não extrai dados", "São sinônimos"],
      correta: 1,
      explicacao: "ETL: Extrair → Transformar → Carregar. ELT: Extrair → Carregar → Transformar (conforme a necessidade).",
      erros: ["O L de ETL é justamente Load (carregar).", null, "Ambos começam com Extract.", "A ordem das etapas muda, e isso muda a arquitetura."]
    },
    {
      pergunta: "Uma empresa quer armazenar logs, imagens de produtos, JSONs e CSVs brutos com máxima flexibilidade. O mais adequado é:",
      alternativas: ["Data Warehouse", "Planilha Excel", "Data Lake", "Tupla Python"],
      correta: 2,
      explicacao: "Data Lake armazena grandes volumes de dados variados e brutos, com foco em flexibilidade, volume e variedade.",
      erros: ["Data Warehouse é para dados estruturados e tratados, e não para imagens e logs brutos.", "Planilhas não escalam nem armazenam imagens e logs dessa forma.", null, "Tupla é uma estrutura em memória, não armazenamento corporativo."]
    },
    {
      pergunta: "Qual das ferramentas é tipicamente um Data Warehouse?",
      alternativas: ["AWS S3", "Google BigQuery", "Azure Data Lake Storage", "Google Cloud Storage"],
      correta: 1,
      explicacao: "BigQuery (assim como Snowflake, Redshift e Synapse) é um Data Warehouse para dados estruturados e análise.",
      erros: ["S3 é armazenamento de objetos, base comum de Data Lakes.", null, "O próprio nome indica: é armazenamento de Data Lake.", "É armazenamento de objetos, usado em Data Lakes."]
    },
    {
      pergunta: "Uma coluna de idades importada tem os valores \"35\", \"40\", \"52\" como texto. O que fazer?",
      alternativas: ["Nada, pois o modelo entende", "Aplicar one-hot encoding", "Converter para numérico (ex.: pd.to_numeric)", "Remover a coluna"],
      correta: 2,
      explicacao: "São números armazenados como texto. É um problema de tipo, resolvido com conversão para int/float.",
      erros: ["Modelos trabalham com números, e cálculos com texto falham ou dão resultados errados.", "One-hot trataria cada idade como categoria, perdendo a noção numérica.", null, "A informação é válida; basta corrigir o tipo."]
    },
    {
      pergunta: "No conjunto de idades [22, 24, 23, 400], qual é a melhor leitura do valor 400?",
      alternativas: ["É a idade mais representativa", "Deve ser mantido sem análise", "Deve ser usado para calcular a média", "É um outlier que provavelmente indica erro e precisa ser tratado"],
      correta: 3,
      explicacao: "400 anos é impossível: provável erro de digitação ou coleta. Deve ser corrigido, removido ou substituído, pois distorce média e variância.",
      erros: ["É justamente o valor menos representativo.", "Outliers sempre merecem análise antes da modelagem.", "Incluir 400 elevaria a média para cerca de 117, sem sentido.", null]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre feature e target, usando um exemplo do seu projeto.",
    "Descreva três estratégias para tratar valores ausentes e em quais situações cada uma é mais indicada.",
    "Explique por que o escalonamento é importante e compare Min-Max com padronização (escore Z).",
    "Proponha duas novas features (feature engineering) que poderiam melhorar o modelo do seu projeto e justifique.",
    "Compare Data Lake e Data Warehouse e explique qual (ou quais) faria sentido na arquitetura de dados do seu projeto."
  ],

  respostasDiscursivas: [
    "<strong>Features</strong> são as características de entrada que o modelo usa para aprender (as colunas explicativas). O <strong>target</strong> é o valor que queremos prever. No projeto: features = modelo do fogão, potência do queimador, carga, temperatura ambiente, tempo de operação; target = temperatura máxima da parede externa.",
    "1) <strong>Remover linhas:</strong> quando são poucas, aleatórias e o dataset é grande.<br>2) <strong>Imputar com média ou mediana:</strong> em numéricas. A média serve se não há outliers; a mediana é mais robusta com outliers ou assimetria. Em categóricas, use a <strong>moda</strong>.<br>3) <strong>Estimar com modelos</strong> (KNN imputer, regressão): quando a variável é importante e pode ser prevista pelas outras.<br>Em todos os casos, calcule a estatística só no treino, para evitar vazamento.",
    "Algoritmos baseados em distância ou em gradiente sofrem quando as features têm escalas muito diferentes: a de maior escala domina. <strong>Min-Max</strong>: x′ = (x − min)/(max − min), leva os valores para [0, 1]; é simples, mas sensível a outliers (um extremo comprime todos os outros). <strong>Padronização (Z)</strong>: z = (x − μ)/σ, com média 0 e desvio 1; lida melhor com outliers e é preferida em modelos lineares e redes. Em ambos, fit no treino e transform no teste.",
    "1) <strong>Densidade de potência</strong> = potência do queimador ÷ área da superfície. Combina duas variáveis em uma grandeza física mais diretamente ligada ao aquecimento.<br>2) <strong>Diferença térmica</strong> = temperatura interna simulada − temperatura ambiente, ou o tempo acumulado de operação. Capta o gradiente que causa o aquecimento da parede.<br>Ambas usam conhecimento do domínio para dar ao modelo informações que ele teria dificuldade de descobrir sozinho.",
    "<strong>Data Lake</strong> guarda dados brutos e variados (CSV, JSON, logs, imagens) com flexibilidade: ex. S3 ou GCS. <strong>Data Warehouse</strong> guarda dados estruturados, integrados e tratados, prontos para análise e BI: ex. BigQuery ou Snowflake. No projeto, faria sentido um <strong>lake</strong> para os arquivos brutos das simulações CFD e dos testes físicos e um <strong>warehouse</strong> (ou tabelas tratadas) com o dataset limpo que alimenta o modelo e os dashboards. A combinação é a ideia do Lakehouse."
  ]
});
