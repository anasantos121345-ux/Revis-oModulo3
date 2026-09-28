Plataforma.adicionarAula("programacao", {
  id: "aprendizado-nao-supervisionado",
  titulo: "Aprendizado Não Supervisionado: K-means",
  descricao: "Dados sem rótulo, clustering, funcionamento do K-means, centróides, método do cotovelo (inertia/SSE) e Silhouette.",
  duracao: "45 min",

  resumo: [
    { tipo: "titulo", texto: "Aprender sem gabarito" },
    { tipo: "texto", texto: "No aprendizado <strong>não supervisionado</strong>, o sistema recebe dados <strong>sem rótulos</strong>: não existe uma coluna dizendo a resposta correta. O desenvolvedor escolhe o <strong>método</strong> e fornece os dados, mas <strong>não determina antecipadamente</strong> quais grupos ou padrões serão encontrados." },
    { tipo: "tabela", cabecalho: ["", "Supervisionado", "Não supervisionado"], linhas: [
      ["Rótulo", "existe (ex.: “cancelou: sim/não”)", "não existe"],
      ["Orientação humana", "define o que prever", "define só o método"],
      ["Resultado", "previsão de um alvo conhecido", "estruturas, grupos, associações, anomalias"]
    ]},
    { tipo: "destaque", titulo: "O que pode ser encontrado", itens: [
      "<strong>Agrupamentos (clustering):</strong> elementos semelhantes entre si e diferentes dos demais.",
      "<strong>Relações entre características</strong> e <strong>associações entre eventos</strong>.",
      "<strong>Anomalias:</strong> padrões que se afastam do comportamento habitual."
    ]},
    { tipo: "exemplo", titulo: "Perfis de clientes", texto: "Sem nenhum rótulo, o algoritmo pode achar: quem compra com frequência produtos de alto valor; quem faz muitas compras pequenas; quem compra principalmente em certas épocas do ano. Os grupos <strong>precisam ser interpretados</strong> depois por pessoas." },

    { tipo: "titulo", texto: "K-means" },
    { tipo: "texto", texto: "Um dos algoritmos mais usados para clustering. <strong>K</strong> é a quantidade de grupos desejada; <strong>means</strong> (médias) é como se calcula o centro de cada grupo, o <strong>centróide</strong>." },
    { tipo: "passos", itens: [
      "Defina K (quantos grupos).",
      "Escolha K pontos iniciais como centróides.",
      "Calcule a distância (normalmente <strong>euclidiana</strong>) de cada ponto a cada centróide e atribua o ponto ao centróide mais próximo.",
      "Recalcule cada centróide como a <strong>média</strong> dos pontos do seu grupo.",
      "Repita os passos 3 e 4 até os grupos pararem de mudar (convergência)."
    ]},
    { tipo: "codigo", texto: "from sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\n\nX_esc = StandardScaler().fit_transform(X)      # escalonar antes!\nmodelo = KMeans(n_clusters=3, random_state=42, n_init=10)\nrotulos = modelo.fit_predict(X_esc)\nprint(modelo.cluster_centers_)   # centróides\nprint(modelo.inertia_)           # SSE" },
    { tipo: "cuidado", titulo: "O K-means não descobre K sozinho", texto: "Com K = 2 ele procura dois grupos; com K = 5, cinco. É preciso uma estratégia para escolher K." },

    { tipo: "titulo", texto: "Escolhendo K: método do cotovelo (Elbow)" },
    { tipo: "texto", texto: "Rode o K-means com K = 1, 2, 3, 4, 5… e calcule a <strong>SSE</strong> (soma dos erros quadráticos, a soma das distâncias ao quadrado de cada ponto até seu centróide), chamada de <strong>inertia</strong> no scikit-learn." },
    { tipo: "formula", legenda: "SSE / Inertia", texto: "SSE = ∑ ∑ ‖ xᵢ − μ<sub>k</sub> ‖²", nota: "Sempre diminui quando K aumenta (com K = n pontos, SSE = 0)." },
    { tipo: "texto", texto: "Até certo K, a SSE cai muito; depois, os ganhos ficam pequenos. Esse ponto de “dobra” do gráfico é o <strong>cotovelo</strong>, um bom candidato a K." },

    { tipo: "titulo", texto: "Escolhendo K: análise de Silhouette" },
    { tipo: "texto", texto: "Avalia se os grupos são <strong>bem separados e internamente consistentes</strong>. Para cada ponto:" },
    { tipo: "lista", itens: [
      "<strong>a</strong> = distância média até os pontos do <strong>próprio</strong> cluster (coesão);",
      "<strong>b</strong> = distância média até o <strong>cluster vizinho mais próximo</strong> (separação)."
    ]},
    { tipo: "formula", legenda: "Coeficiente de Silhouette", texto: "s = (b − a) / max(a, b)   ∈ [−1, 1]" },
    { tipo: "tabela", cabecalho: ["Valor", "Interpretação"], linhas: [
      ["≈ 1", "ponto bem encaixado: perto do seu grupo e longe dos outros"],
      ["≈ 0", "ponto na fronteira entre dois clusters"],
      ["&lt; 0", "atenção: mais perto de outro cluster do que do próprio (provavelmente mal atribuído)"]
    ]},
    { tipo: "exemplo", titulo: "Calculando para um ponto", texto: "a = 2 e b = 8 → s = (8 − 2)/8 = <strong>0,75</strong>: bem agrupado.<br>a = 5 e b = 4 → s = (4 − 5)/5 = <strong>−0,2</strong>: provavelmente no cluster errado." },
    { tipo: "dica", itens: [
      "Use cotovelo e Silhouette <strong>juntos</strong> e escolha o K que também faça sentido para o negócio.",
      "Escalone os dados antes: o K-means usa distância euclidiana.",
      "Rode várias inicializações (<code>n_init</code>) para não depender de centróides iniciais ruins."
    ]},
    { tipo: "cuidado", itens: [
      "K-means ≠ KNN: o K-means agrupa sem rótulo (K = nº de grupos); o KNN classifica com rótulo (K = nº de vizinhos).",
      "A SSE sempre cai com mais clusters. Escolher o K de menor SSE levaria a K = n, sem sentido.",
      "K-means supõe grupos aproximadamente esféricos e é sensível a outliers."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual é a principal característica dos dados no aprendizado não supervisionado?",
      alternativas: ["Possuem rótulos definidos por especialistas", "Não possuem rótulos ou respostas previamente definidas", "São sempre séries temporais", "Contêm apenas uma coluna"],
      correta: 1,
      explicacao: "Os dados não têm a resposta correta; o algoritmo procura estruturas e padrões por conta própria.",
      erros: ["Dados rotulados caracterizam o aprendizado supervisionado.", null, "Qualquer tipo de dado pode ser usado.", "Normalmente há várias features (idade, frequência, gasto…)."]
    },
    {
      pergunta: "No nome K-means, o que representam “K” e “means”?",
      alternativas: ["K = número de vizinhos; means = votação", "K = número de grupos; means = médias usadas para calcular os centróides", "K = número de iterações; means = significado", "K = constante de aprendizado; means = mediana"],
      correta: 1,
      explicacao: "K é a quantidade de clusters desejada; means refere-se à média dos pontos, usada para posicionar cada centróide.",
      erros: ["Número de vizinhos com votação descreve o KNN.", null, "K não é o número de iterações.", "O centróide é a MÉDIA, não a mediana (essa seria a variante K-medians)."]
    },
    {
      pergunta: "Qual é a ordem correta das etapas do K-means?",
      alternativas: ["Recalcular centróides → definir K → atribuir pontos", "Definir K → escolher centróides iniciais → atribuir cada ponto ao centróide mais próximo → recalcular centróides → repetir", "Rotular os dados → treinar → testar", "Calcular a Silhouette → escolher K = 1"],
      correta: 1,
      explicacao: "O K-means alterna entre atribuir pontos ao centróide mais próximo e recalcular os centróides como média, até convergir.",
      erros: ["Não dá para recalcular centróides antes de ter K e os pontos atribuídos.", null, "Rotular dados é característica do supervisionado.", "A Silhouette é usada para avaliar/escolher K, não é uma etapa interna do algoritmo."]
    },
    {
      pergunta: "Qual distância o K-means normalmente utiliza?",
      alternativas: ["Distância euclidiana", "Distância de Hamming", "Distância de edição (Levenshtein)", "Nenhuma distância"],
      correta: 0,
      explicacao: "Normalmente usa-se a distância euclidiana entre cada ponto e cada centróide, embora variações possam usar outras métricas.",
      erros: [null, "Hamming é para strings/binários de mesmo tamanho.", "Levenshtein mede diferenças entre textos.", "Sem distância não há como decidir o centróide mais próximo."]
    },
    {
      pergunta: "No método do cotovelo, o que se plota em função de K?",
      alternativas: ["A acurácia", "O recall", "A SSE (inertia): a soma das distâncias quadráticas aos centróides", "O número de features"],
      correta: 2,
      explicacao: "Plota-se a SSE/inertia para vários K. O ponto onde a queda deixa de ser expressiva (o cotovelo) sugere um K adequado.",
      erros: ["Acurácia exige rótulos, que não existem no não supervisionado.", "Recall também exige rótulos.", null, "O número de features não muda com K."]
    },
    {
      pergunta: "Por que NÃO se escolhe simplesmente o K com a menor SSE?",
      alternativas: ["Porque a SSE sempre diminui com mais clusters, chegando a zero com K = número de pontos", "Porque a SSE aumenta com K", "Porque a SSE não pode ser calculada", "Porque o K-means só aceita K = 2"],
      correta: 0,
      explicacao: "Com mais clusters, os pontos ficam mais perto dos centróides. No limite (cada ponto um cluster), SSE = 0, mas sem nenhuma utilidade. Por isso procuramos o cotovelo.",
      erros: [null, "É o contrário: a SSE diminui (ou fica igual) quando K aumenta.", "É calculada facilmente (inertia_ no scikit-learn).", "K é escolhido livremente pelo usuário."]
    },
    {
      pergunta: "Um ponto tem a = 2 (distância média ao próprio cluster) e b = 8 (ao cluster vizinho). Qual é o Silhouette?",
      alternativas: ["0,25", "−0,75", "6", "0,75"],
      correta: 3,
      explicacao: "s = (b − a)/max(a, b) = (8 − 2)/8 = 0,75. É um valor alto: o ponto está bem encaixado no seu cluster.",
      erros: ["0,25 = a/b. Não é a fórmula da Silhouette.", "O sinal ficaria negativo só se b < a.", "6 é b − a sem dividir por max(a, b).", null]
    },
    {
      pergunta: "Um Silhouette negativo para um ponto indica que:",
      alternativas: ["O ponto está perfeitamente agrupado", "O ponto está, em média, mais próximo de outro cluster do que do próprio", "O ponto está exatamente no centróide", "O modelo tem 100% de acurácia"],
      correta: 1,
      explicacao: "s < 0 ocorre quando a > b: o ponto se parece mais com o cluster vizinho, sinal de atribuição provavelmente errada.",
      erros: ["Pontos bem agrupados têm Silhouette próximo de 1.", null, "Estar no centróide daria a pequeno e tenderia a s positivo.", "Silhouette não mede acurácia, e não há rótulos."]
    },
    {
      pergunta: "Qual é a diferença entre K-means e KNN?",
      alternativas: ["São o mesmo algoritmo", "K-means é supervisionado e KNN é não supervisionado", "K-means agrupa dados sem rótulo (K = nº de grupos); KNN classifica com dados rotulados (K = nº de vizinhos)", "Ambos exigem rótulos"],
      correta: 2,
      explicacao: "Apesar do K no nome, são algoritmos distintos: K-means é não supervisionado (clustering) e KNN é supervisionado (classificação/regressão).",
      erros: ["Têm objetivos e tipos de aprendizado diferentes.", "Está invertido: o KNN é que é supervisionado e o K-means é não supervisionado.", null, "O K-means não usa rótulos: ele só recebe as features e descobre os grupos."]
    },
    {
      pergunta: "Depois de rodar o K-means e obter 3 grupos de clientes, o que ainda é necessário?",
      alternativas: ["Nada, os grupos já vêm nomeados", "Interpretar e analisar os grupos para dar significado de negócio a eles", "Apagar os centróides", "Transformar o problema em regressão"],
      correta: 1,
      explicacao: "O algoritmo só devolve números (grupo 0, 1, 2). Analistas precisam estudar as características de cada grupo para entendê-los e nomeá-los.",
      erros: ["O algoritmo não sabe o significado de negócio dos grupos.", null, "Os centróides ajudam justamente a interpretar os grupos.", "Não há alvo numérico a prever."]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre aprendizado supervisionado e não supervisionado, com um exemplo de cada.",
    "Descreva o funcionamento do K-means passo a passo, explicando o papel dos centróides.",
    "Explique o método do cotovelo e por que a SSE sozinha não é suficiente para escolher K.",
    "Interprete os valores de Silhouette próximos de 1, de 0 e negativos. Como você usaria essa métrica no seu projeto?",
    "Proponha uma aplicação de clustering no seu projeto: quais features usaria e como interpretaria os grupos?"
  ],

  respostasDiscursivas: [
    "No <strong>supervisionado</strong>, os dados têm rótulo (a resposta certa) e o modelo aprende a prevê-lo: ex. prever se o cliente cancela (sim/não) com base no histórico. No <strong>não supervisionado</strong>, não há rótulo: o algoritmo procura estruturas por conta própria, ex. agrupar clientes por comportamento de compra sem saber de antemão quais perfis existem. A diferença está na orientação humana: no primeiro definimos o que prever; no segundo, só o método.",
    "1) Definir K (número de grupos). 2) Posicionar K centróides iniciais. 3) Calcular a distância (euclidiana) de cada ponto até cada centróide e atribuí-lo ao mais próximo. 4) Recalcular cada centróide como a <strong>média</strong> dos pontos do seu grupo. 5) Repetir 3 e 4 até os grupos pararem de mudar. O <strong>centróide</strong> é o “centro” representativo de cada grupo; é o que define a qual cluster cada ponto pertence e ajuda a interpretar o perfil do grupo.",
    "Roda-se o K-means para K = 1, 2, 3… e plota-se a SSE (inertia), a soma das distâncias quadráticas dos pontos aos seus centróides. No começo a SSE cai muito; a partir de certo K os ganhos ficam pequenos. Esse ponto de dobra é o <strong>cotovelo</strong>, um bom candidato. A SSE sozinha não basta porque <strong>sempre diminui</strong> com mais clusters (com K = n ela é zero), então “menor SSE” escolheria sempre o maior K. Por isso combinamos com o cotovelo, a Silhouette e o sentido de negócio.",
    "s = (b − a)/max(a, b). <strong>Perto de 1:</strong> o ponto está muito perto do próprio grupo e longe dos outros (bem agrupado). <strong>Perto de 0:</strong> está na fronteira entre dois clusters. <strong>Negativo:</strong> está mais perto de outro cluster que do seu, provavelmente mal atribuído. No projeto, calcularia a Silhouette média para vários K e escolheria o de maior valor (junto com o cotovelo), e investigaria os pontos negativos, que podem ser casos atípicos.",
    "Agrupar <strong>cenários de teste</strong> dos fogões por comportamento térmico, usando features como potência, carga, tempo até a temperatura máxima, temperatura máxima e taxa de aquecimento (todas escalonadas). Os grupos poderiam revelar perfis como “aquecimento rápido e alto”, “estável” e “atípico”. Eu interpretaria cada grupo pelos centróides, validaria com engenheiros e usaria os grupos para priorizar testes físicos ou treinar modelos específicos."
  ]
});
