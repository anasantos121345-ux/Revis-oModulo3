Plataforma.adicionarAula("programacao", {
  id: "pandas-numpy-graficos",
  titulo: "Pandas, NumPy e Bibliotecas Gráficas",
  descricao: "Exploração de dados com Pandas, computação numérica com NumPy e visualização com Matplotlib e Seaborn.",
  duracao: "50 min",

  resumo: [
    { tipo: "titulo", texto: "Por que preparar dados é o grosso do trabalho" },
    { tipo: "texto", texto: "Dados raramente chegam organizados: informações incompletas, duplicadas, datas em formatos diferentes, erros de digitação, colunas inúteis e várias fontes misturadas. Estudos indicam que <strong>70% a 80% do tempo</strong> de um projeto de Ciência de Dados vai para limpeza, integração, transformação e exploração." },

    { tipo: "titulo", texto: "Pandas" },
    { tipo: "texto", texto: "Principal biblioteca Python para <strong>manipulação e análise de dados tabulares</strong>. O nome vem de <em>Panel Data</em> (dados observados ao longo do tempo) e de <em>Python Data Analysis</em>." },
    { tipo: "lista", itens: [
      "<strong>Series:</strong> uma coluna (vetor com índice).",
      "<strong>DataFrame:</strong> uma tabela (linhas × colunas), a estrutura central.",
      "Importa <strong>CSV, Excel, JSON, SQL e HTML</strong>.",
      "Integra-se com NumPy, Matplotlib, Scikit-Learn, SciPy e Statsmodels."
    ]},
    { tipo: "codigo", texto: "import pandas as pd\n\ndf = pd.read_csv(\"academia.csv\")\n\ndf.head()            # primeiras 5 linhas\ndf.info()            # tipos das colunas e valores não nulos\ndf.describe()        # estatísticas: média, desvio, quartis...\ndf.shape             # (linhas, colunas)\ndf.isna().sum()      # valores ausentes por coluna\n\ndf[df[\"idade\"] > 30]                     # filtrar linhas\ndf[[\"nome\", \"gasto\"]]                    # selecionar colunas\ndf.groupby(\"unidade\")[\"gasto\"].mean()   # agrupar e agregar\ndf[\"gasto_anual\"] = df[\"gasto\"] * 12    # criar coluna\ndf = df.drop_duplicates()                # remover duplicatas" },
    { tipo: "destaque", titulo: "Com Pandas você consegue…", texto: "importar, organizar em tabelas, filtrar, calcular estatísticas, remover erros, tratar ausentes, agrupar, criar colunas e fazer <strong>análise exploratória (EDA)</strong>." },

    { tipo: "titulo", texto: "NumPy" },
    { tipo: "texto", texto: "<strong>Numerical Python</strong>: base da computação numérica no Python. Seu núcleo é o <strong>ndarray</strong> (array N-dimensional). Pandas, SciPy, Scikit-Learn, TensorFlow, PyTorch e OpenCV usam arrays NumPy por baixo." },
    { tipo: "exemplo", titulo: "Lista Python × array NumPy", texto: "Com listas, o interpretador repete para <em>cada</em> elemento: localizar o objeto, verificar tipo, carregar, somar, criar objeto, armazenar. Com NumPy, a soma do vetor inteiro é uma única operação:", codigo: "# Python puro\nresultado = []\nfor i in range(len(lista1)):\n    resultado.append(lista1[i] + lista2[i])\n\n# NumPy (vetorizado)\nimport numpy as np\nresultado = np.array(lista1) + np.array(lista2)" },
    { tipo: "tabela", cabecalho: ["Por que o NumPy é rápido", "Explicação"], linhas: [
      ["Memória contínua", "elementos armazenados em sequência, e não milhares de objetos soltos"],
      ["Mesmo tipo de dado", "todos int32 ou float64: o processador sabe quantos bytes cada um ocupa"],
      ["Código em C", "o trabalho pesado é feito por código compilado, fora do interpretador"],
      ["Instruções vetoriais (SIMD)", "SSE, AVX, AVX2, AVX-512, NEON processam vários valores de uma vez"]
    ]},

    { tipo: "titulo", texto: "Matplotlib e Seaborn" },
    { tipo: "tabela", cabecalho: ["", "Matplotlib", "Seaborn"], linhas: [
      ["O que é", "principal biblioteca de visualização do Python", "biblioteca de visualização <strong>estatística</strong> construída <strong>sobre</strong> o Matplotlib"],
      ["Nível", "baixo nível, altamente personalizável", "alto nível, poucos comandos"],
      ["Foco", "30+ tipos de gráfico, 2D, 3D, animações", "EDA: distribuições, relações e comparações entre grupos"]
    ]},
    { tipo: "codigo", texto: "import matplotlib.pyplot as plt\nimport seaborn as sns\n\nplt.plot(df[\"mes\"], df[\"frequencia\"])   # linha: tendência\nplt.title(\"Frequência por mês\")\nplt.show()\n\nsns.histplot(df[\"idade\"], bins=10)       # distribuição\nsns.scatterplot(data=df, x=\"frequencia\", y=\"gasto\")  # relação\nsns.boxplot(data=df, x=\"atividade\", y=\"gasto\")      # grupos e outliers\nsns.heatmap(df.corr(numeric_only=True), annot=True) # correlações" },
    { tipo: "dica", itens: [
      "Roteiro de EDA: <code>shape</code> → <code>info()</code> → <code>isna().sum()</code> → <code>describe()</code> → gráficos de distribuição → correlações.",
      "Use operações vetorizadas (sem <code>for</code>) no Pandas/NumPy: são muito mais rápidas.",
      "Convenção de imports: <code>pd</code>, <code>np</code>, <code>plt</code>, <code>sns</code>."
    ]},
    { tipo: "cuidado", itens: [
      "Um ndarray tem <strong>um único tipo</strong>: misturar texto e números converte tudo para texto.",
      "<code>df[\"col\"]</code> devolve uma Series; <code>df[[\"col\"]]</code> devolve um DataFrame.",
      "Seaborn não substitui o Matplotlib: ele o usa internamente para desenhar.",
      "Correlação em heatmap não é causalidade."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual é a principal estrutura de dados do Pandas para representar uma tabela?",
      alternativas: ["ndarray", "DataFrame", "Tuple", "Dictionary"],
      correta: 1,
      explicacao: "O DataFrame representa dados em linhas e colunas, com rótulos. Cada coluna é uma Series.",
      erros: ["ndarray é a estrutura central do NumPy, não do Pandas.", null, "Tupla é uma estrutura nativa do Python, imutável e sem colunas nomeadas.", "Dicionários podem ser convertidos em DataFrame, mas não são a estrutura tabular do Pandas."]
    },
    {
      pergunta: "Segundo o material, qual fração do tempo de um projeto de Ciência de Dados costuma ir para preparação de dados?",
      alternativas: ["5% a 10%", "20% a 30%", "70% a 80%", "100%"],
      correta: 2,
      explicacao: "Estudos indicam que entre 70% e 80% do tempo vai para limpeza, integração, transformação e exploração, e não para treinar modelos.",
      erros: ["É bem maior: preparar dados é a maior parte do trabalho.", "Ainda subestima o esforço de preparação.", null, "Treinar, avaliar e comunicar resultados também tomam tempo."]
    },
    {
      pergunta: "Qual comando mostra a quantidade de valores ausentes por coluna em um DataFrame df?",
      alternativas: ["df.describe()", "df.head()", "df.shape", "df.isna().sum()"],
      correta: 3,
      explicacao: "isna() marca True onde há NaN; sum() soma por coluna, contando os ausentes.",
      erros: ["describe() mostra estatísticas (média, desvio, quartis), e não a contagem de ausentes diretamente.", "head() exibe só as primeiras linhas.", "shape devolve (linhas, colunas).", null]
    },
    {
      pergunta: "Qual é o objetivo de df.groupby(\"unidade\")[\"gasto\"].mean()?",
      alternativas: ["Calcular o gasto médio de cada unidade", "Ordenar a tabela por gasto", "Remover a coluna unidade", "Contar o número de unidades"],
      correta: 0,
      explicacao: "groupby agrupa as linhas por unidade; depois se seleciona a coluna gasto e calcula a média dentro de cada grupo.",
      erros: [null, "Para ordenar, usa-se sort_values(\"gasto\").", "Para remover, usa-se drop(columns=\"unidade\").", "Para contar, seria value_counts() ou .size()."]
    },
    {
      pergunta: "Por que operações com arrays NumPy são mais rápidas que laços com listas Python?",
      alternativas: ["Porque NumPy usa mais memória", "Porque NumPy é escrito em JavaScript", "Porque NumPy ignora os tipos dos dados", "Memória contínua, tipo único, código em C e instruções vetoriais do processador"],
      correta: 3,
      explicacao: "O ndarray guarda elementos contíguos e de mesmo tipo, e as operações são executadas por código C compilado, usando instruções SIMD (SSE, AVX…).",
      erros: ["Usar mais memória não acelera. Na verdade, arrays são mais compactos que listas.", "O processamento pesado do NumPy é feito em C.", "É o oposto: ter um tipo único e conhecido é o que evita checagens a cada elemento.", null]
    },
    {
      pergunta: "O que significa “ndarray”?",
      alternativas: ["New Data Array", "N-dimensional Array", "Numeric Dictionary Array", "Non-duplicated Array"],
      correta: 1,
      explicacao: "ndarray = N-dimensional array: pode ter 1 (vetor), 2 (matriz) ou mais dimensões.",
      erros: ["Não é “new”, e sim “N-dimensional”.", null, "Não tem relação com dicionário.", "Arrays podem ter elementos duplicados."]
    },
    {
      pergunta: "Qual é a relação entre Seaborn e Matplotlib?",
      alternativas: ["São concorrentes sem relação", "Matplotlib é construído sobre o Seaborn", "Seaborn é construído sobre o Matplotlib e oferece uma interface de alto nível para gráficos estatísticos", "Seaborn só faz gráficos 3D"],
      correta: 2,
      explicacao: "Seaborn usa o Matplotlib internamente para renderizar e oferece funções prontas para distribuições, relações e comparações entre grupos.",
      erros: ["Há dependência direta: Seaborn depende do Matplotlib.", "A relação é inversa: é o Seaborn que depende do Matplotlib, e não o contrário.", null, "O foco do Seaborn é visualização estatística (2D) para EDA."]
    },
    {
      pergunta: "Para visualizar a DISTRIBUIÇÃO das idades dos alunos, qual gráfico é o mais adequado?",
      alternativas: ["sns.histplot(df[\"idade\"])", "plt.plot(df[\"idade\"])", "sns.heatmap(df[\"idade\"])", "plt.pie(df[\"idade\"])"],
      correta: 0,
      explicacao: "O histograma agrupa uma variável quantitativa em intervalos e mostra concentração, dispersão e forma da distribuição.",
      erros: [null, "Gráfico de linha sugere continuidade/sequência temporal, e não distribuição.", "Heatmap é para matrizes (ex.: correlações), não para uma única coluna.", "Pizza mostra partes de um todo com poucas categorias, não uma distribuição numérica."]
    },
    {
      pergunta: "Qual formato o Pandas NÃO importa nativamente com funções read_*?",
      alternativas: ["CSV", "Excel", "JSON", "Arquivo de áudio MP3"],
      correta: 3,
      explicacao: "Pandas lê dados tabulares/estruturados: CSV, Excel, JSON, SQL, HTML… Áudio é dado não estruturado e exige outras bibliotecas.",
      erros: ["pd.read_csv() existe e é a função mais usada.", "pd.read_excel() existe e lê arquivos .xlsx/.xls diretamente para um DataFrame.", "pd.read_json() existe e converte JSON em DataFrame.", null]
    },
    {
      pergunta: "O que retorna df[[\"nome\"]] (com colchetes duplos)?",
      alternativas: ["Uma Series", "Um DataFrame com a coluna nome", "Uma lista Python", "Um erro"],
      correta: 1,
      explicacao: "Com colchetes duplos, passamos uma LISTA de colunas, e o resultado é um DataFrame. Com colchetes simples, df[\"nome\"] devolve uma Series.",
      erros: ["Series é o resultado de df[\"nome\"], com colchetes simples.", null, "O retorno é um objeto Pandas; para lista, use .tolist().", "A sintaxe é válida: colchetes duplos passam uma lista de colunas."]
    }
  ],

  discursivas: [
    "Explique com suas palavras por que a preparação de dados ocupa a maior parte do tempo em projetos de Ciência de Dados. Cite três problemas comuns.",
    "Descreva o passo a passo de uma análise exploratória inicial de um dataset do seu projeto usando Pandas.",
    "Explique por que o NumPy é mais rápido que listas Python para operações numéricas, citando pelo menos três motivos.",
    "Quando você usaria Matplotlib diretamente e quando preferiria o Seaborn? Dê exemplos de gráficos.",
    "Escolha duas perguntas sobre os dados do seu projeto e indique qual gráfico responderia cada uma, justificando."
  ],

  respostasDiscursivas: [
    "Os dados chegam de várias fontes e raramente prontos, e modelos só aprendem bem com dados confiáveis (garbage in, garbage out). Por isso, 70% a 80% do tempo vai para limpar, integrar, transformar e explorar. Problemas comuns: <strong>valores ausentes</strong> (NaN), <strong>duplicatas</strong>, <strong>formatos inconsistentes</strong> (datas diferentes, números como texto), erros de digitação e outliers impossíveis.",
    "1) <code>df = pd.read_csv(...)</code>: carregar.<br>2) <code>df.shape</code> e <code>df.head()</code>: tamanho e primeiras linhas.<br>3) <code>df.info()</code>: tipos e não nulos (corrigir tipos errados).<br>4) <code>df.isna().sum()</code> e <code>df.duplicated().sum()</code>: ausentes e duplicatas.<br>5) <code>df.describe()</code>: estatísticas e valores estranhos.<br>6) <code>value_counts()</code> nas categóricas; <code>groupby</code> para comparar grupos.<br>7) Gráficos: histogramas das numéricas, boxplots para outliers e heatmap de correlação com o alvo.",
    "1) <strong>Memória contínua:</strong> os elementos ficam lado a lado, e não espalhados como objetos independentes. 2) <strong>Tipo único</strong> (int32, float64): não é preciso verificar o tipo de cada elemento. 3) <strong>Código em C:</strong> as operações vetorizadas rodam em código compilado, fora do interpretador. 4) <strong>Instruções SIMD</strong> (SSE, AVX, NEON): o processador opera vários valores de uma vez. Com listas, o Python repete localizar, verificar tipo, somar e criar objeto para cada elemento.",
    "<strong>Matplotlib</strong> quando preciso de controle fino ou de gráficos fora do padrão: layout de figuras, anotações detalhadas, gráficos 3D, animações, formatação para relatório. <strong>Seaborn</strong> para análise exploratória estatística com poucas linhas: <code>histplot</code>/<code>kdeplot</code> (distribuições), <code>boxplot</code> (grupos e outliers), <code>scatterplot</code> com <code>hue</code> (relações), <code>heatmap</code> (correlação), <code>pairplot</code>. Como o Seaborn é construído sobre o Matplotlib, é comum combinar os dois.",
    "1) “A temperatura prevista varia com a carga do fogão?” → <strong>dispersão</strong> (carga no X, temperatura no Y), porque são duas variáveis quantitativas e queremos ver direção e outliers.<br>2) “Como se distribuem os erros do modelo?” → <strong>histograma</strong> (ou KDE), para ver concentração, assimetria e se ficam em torno de zero.<br>Outra opção: “Qual modelo de fogão aquece mais?” → barras ordenadas da temperatura média por modelo."
  ]
});
