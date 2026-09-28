Plataforma.adicionarAula("lideranca", {
  id: "vieses-de-dados-decisoes-ia",
  titulo: "Vieses de Dados e Decisões em IA",
  descricao: "Viés e viés de dados, os tipos principais (amostragem, histórico, medição, confirmação e algorítmico), variáveis proxy, mitigação e responsabilidade de quem constrói IA.",
  duracao: "45 min",

  resumo: [
    { tipo: "titulo", texto: "Qual candidato(a) você contrataria?" },
    { tipo: "texto", texto: "Quatro currículos <strong>idênticos</strong>: mesma formação (ADS em faculdade estadual), 3 anos como backend, liderou migração de sistema legado, certificação em Python. Só mudavam o <strong>nome</strong> (Rafael, Amanda, Ricardo, Adriana, ou seja, o gênero) e o <strong>bairro</strong> (Moema × Cidade Tiradentes, ou seja, o recorte socioeconômico e territorial)." },
    { tipo: "destaque", titulo: "A revelação", texto: "Se as escolhas da turma variaram, a diferença <strong>não estava nas competências</strong>. Estava em associações que fazemos com gênero e território. Se um modelo de IA aprendesse com decisões assim, ele <strong>reproduziria esse viés em escala</strong>." },

    { tipo: "titulo", texto: "Conceitos" },
    { tipo: "tabela", cabecalho: ["Termo", "Definição"], linhas: [
      ["<strong>Viés</strong>", "tendência ou inclinação que influencia como percebemos, interpretamos ou julgamos algo, podendo levar a conclusões distorcidas"],
      ["<strong>Viés de dados</strong>", "<strong>distorção sistemática</strong> que faz o modelo aprender padrões <strong>injustos ou não representativos</strong> da realidade"]
    ]},

    { tipo: "titulo", texto: "Tipos principais de viés de dados" },
    { tipo: "tabela", cabecalho: ["Tipo", "O que acontece", "Exemplo"], linhas: [
      ["<strong>Amostragem</strong>", "os dados <strong>não representam a população real</strong>", "reconhecimento facial treinado majoritariamente com rostos de pessoas brancas erra mais com pessoas negras"],
      ["<strong>Histórico</strong>", "os dados <strong>refletem desigualdades do passado</strong>", "histórico de contratações já desigual ensina o modelo a preferir o mesmo perfil"],
      ["<strong>Medição</strong>", "a forma de <strong>coletar ou rotular</strong> já distorce o resultado", "usar “prisões” como proxy de “criminalidade” (reflete onde há mais policiamento)"],
      ["<strong>Confirmação</strong>", "quem constrói busca, consciente ou não, dados que <strong>confirmem uma hipótese prévia</strong>", "prever quem vai pedir demissão e só procurar evidências do que já se suspeitava"],
      ["<strong>Algorítmico</strong>", "o <strong>próprio design do algoritmo amplifica</strong> pequenas diferenças dos dados", "conteúdos polarizadores geram só um pouco mais de engajamento, mas o algoritmo que otimiza engajamento passa a priorizá-los muito"]
    ]},
    { tipo: "subtitulo", texto: "Indo além: outros vieses" },
    { tipo: "lista", itens: [
      "<strong>Sobrevivência:</strong> analisar só quem “sobreviveu” (empresas que deram certo, peças que não quebraram).",
      "<strong>Exclusão:</strong> remover dados ou variáveis relevantes na limpeza (ex.: os casos raros de falha).",
      "<strong>Rotulagem (anotação):</strong> rótulos refletem a opinião de quem anotou.",
      "<strong>Automação:</strong> humanos confiam demais na saída do sistema e deixam de questioná-la.",
      "<strong>Variável proxy:</strong> mesmo sem usar raça ou gênero, variáveis como CEP ou nome podem funcionar como substitutas e reintroduzir a discriminação."
    ]},

    { tipo: "titulo", texto: "Mitigação" },
    { tipo: "tabela", cabecalho: ["Viés", "Proposta concreta de mitigação"], linhas: [
      ["Amostragem", "auditar a representatividade dos grupos; coletar mais dados dos grupos sub-representados; estratificar"],
      ["Histórico", "questionar se o rótulo do passado é o comportamento desejado; medir métricas <strong>por grupo</strong> (taxas de erro, aprovação)"],
      ["Medição", "revisar se a variável mede o que se pretende ou é uma proxy enviesada"],
      ["Confirmação", "definir hipóteses e critérios antes de ver os dados; revisão por pares; times diversos"],
      ["Algorítmico", "monitorar o sistema em produção, rever o objetivo otimizado, colocar limites e humano no circuito"]
    ]},
    { tipo: "exemplo", titulo: "Aplicando ao projeto (Brasil × México, CFD + testes físicos)", itens: [
      "<strong>Amostragem:</strong> se um mercado tem muito menos dados, o modelo dele fica pior. Compare volume e qualidade antes de treinar e considere estratégias de complementação.",
      "<strong>Medição:</strong> a simulação CFD é uma <em>proxy</em> do comportamento real. Se discordar sistematicamente dos testes físicos em uma faixa de temperatura, isso precisa ser investigado, e não apenas “ponderado”.",
      "<strong>Exclusão:</strong> ao limpar dados “desorganizados”, cuidado para não descartar justamente os <strong>casos raros de falha</strong>, que podem ser os mais importantes de prever."
    ]},
    { tipo: "destaque", titulo: "Mensagem de encerramento", texto: "“IA não cria vieses do nada. Ela aprende os que já existem nos nossos dados e nas nossas decisões. A pergunta não é apenas <em>‘a IA é justa?’</em>, mas <em>‘nós fomos justos com os dados que demos a ela?’</em>”" },
    { tipo: "texto", texto: "A atividade <strong>Máquina Moral</strong> (moralmachine.net) mostra como detalhes das imagens mudam decisões sobre o que um carro autônomo deveria fazer, e como grupos divergem. É um paralelo direto com as escolhas embutidas em modelos preditivos." },
    { tipo: "dica", texto: "Para identificar o tipo na prova: <strong>quem está nos dados?</strong> (amostragem) · <strong>o passado era justo?</strong> (histórico) · <strong>a variável mede o que diz medir?</strong> (medição) · <strong>eu procurei só o que queria achar?</strong> (confirmação) · <strong>o algoritmo exagerou uma diferença?</strong> (algorítmico)." },
    { tipo: "cuidado", itens: [
      "Remover a coluna “gênero” não elimina o viés se houver proxies (nome, bairro).",
      "Acurácia geral alta pode esconder erros muito maiores em um grupo específico.",
      "Viés não é só questão técnica: é também decisão de liderança sobre o que é justo."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Na dinâmica dos quatro currículos, o que variava entre os candidatos?",
      alternativas: ["A formação acadêmica", "Os anos de experiência", "Apenas o nome (gênero) e o bairro (território)", "As certificações"],
      correta: 2,
      explicacao: "Os currículos eram idênticos em competências. Só mudavam nome e bairro. Qualquer diferença na escolha revela viés.",
      erros: ["A formação era a mesma: ADS em faculdade estadual.", "Todos tinham 3 anos como backend.", null, "Todos tinham certificação em Python."]
    },
    {
      pergunta: "Qual é a definição de viés de dados apresentada em aula?",
      alternativas: ["Um erro aleatório de digitação", "Distorção sistemática que faz o modelo aprender padrões injustos ou não representativos da realidade", "A diferença entre treino e teste", "Uma métrica de avaliação"],
      correta: 1,
      explicacao: "O ponto-chave é “sistemática”: não é ruído aleatório, mas uma distorção consistente que o modelo aprende.",
      erros: ["Erros aleatórios não são sistemáticos, e o viés é justamente sistemático.", null, "A diferença entre treino e teste está ligada à generalização (overfitting).", "Viés não é uma métrica: é uma distorção que as métricas podem ajudar a revelar."]
    },
    {
      pergunta: "Um sistema de reconhecimento facial treinado majoritariamente com rostos de pessoas brancas erra mais com pessoas negras. Qual é o viés?",
      alternativas: ["Viés de confirmação", "Viés algorítmico", "Viés de amostragem", "Viés de recência"],
      correta: 2,
      explicacao: "Os dados de treino não representam a população real. É viés de amostragem.",
      erros: ["Confirmação envolve buscar dados que confirmem uma hipótese.", "O problema nasce nos dados, e não na amplificação pelo algoritmo.", null, "Recência é um viés de avaliação de pessoas (feedback), e não de dados."]
    },
    {
      pergunta: "Um modelo de contratação treinado com o histórico da empresa, que contratava quase só homens, passa a preferir candidatos homens. Qual é o viés?",
      alternativas: ["Histórico", "Medição", "Amostragem por falta de dados", "Algorítmico"],
      correta: 0,
      explicacao: "Os dados refletem desigualdades do passado, e o modelo aprende a reproduzi-las.",
      erros: [null, "O problema não é o instrumento de medida, e sim o passado desigual registrado.", "Pode haver muitos dados; o problema é o que eles refletem.", "Não é o design do algoritmo que amplifica; é o padrão histórico nos rótulos."]
    },
    {
      pergunta: "Usar “número de prisões” como indicador de “criminalidade” de um bairro é um exemplo de viés de:",
      alternativas: ["Confirmação", "Amostragem", "Algorítmico", "Medição"],
      correta: 3,
      explicacao: "A variável medida (prisões) é uma proxy que reflete onde há mais policiamento, e não necessariamente onde há mais crimes. A forma de medir distorce o resultado.",
      erros: ["Não se trata de buscar dados para confirmar uma hipótese.", "O problema não é quem está na amostra, e sim o que a variável mede.", "O algoritmo não é a origem da distorção.", null]
    },
    {
      pergunta: "Uma equipe que já “sabe” quais funcionários vão pedir demissão só procura dados que confirmam essa suspeita. Isso é:",
      alternativas: ["Viés histórico", "Viés de confirmação", "Viés de amostragem", "Efeito aura"],
      correta: 1,
      explicacao: "Buscar, consciente ou inconscientemente, evidências que confirmem uma hipótese prévia caracteriza o viés de confirmação.",
      erros: ["O histórico trata de desigualdades registradas no passado.", null, "A amostragem trata de representatividade da população.", "Efeito aura é um viés de percepção sobre pessoas (feedback)."]
    },
    {
      pergunta: "Conteúdos polarizadores geram só um pouco mais de engajamento, mas o algoritmo passa a exibi-los muito mais. Isso ilustra o viés:",
      alternativas: ["De medição", "Histórico", "Algorítmico", "De sobrevivência"],
      correta: 2,
      explicacao: "O próprio design do algoritmo (otimizar engajamento) amplifica uma pequena diferença dos dados.",
      erros: ["A medição do engajamento pode estar correta; o problema é a amplificação.", "Não há desigualdade passada sendo reproduzida.", null, "Sobrevivência é analisar só os casos que “sobreviveram”."]
    },
    {
      pergunta: "Um modelo não usa a coluna “raça”, mas usa o CEP, fortemente associado à composição racial dos bairros. Qual é o risco?",
      alternativas: ["Nenhum, pois a variável sensível foi removida", "O CEP funciona como variável proxy e pode reintroduzir a discriminação", "O modelo fica mais lento", "O CEP melhora a justiça automaticamente"],
      correta: 1,
      explicacao: "Variáveis correlacionadas com atributos sensíveis podem substituí-los. Remover a coluna não basta: é preciso medir resultados por grupo.",
      erros: ["Remover o atributo não elimina o viés quando existem proxies.", null, "O problema é ético e de justiça, não de desempenho computacional.", "Pode piorar a justiça, e não melhorá-la."]
    },
    {
      pergunta: "No projeto, ao limpar dados “desorganizados”, qual é o risco apontado em aula?",
      alternativas: ["Deixar o dataset grande demais", "Remover justamente os casos raros ou atípicos, que podem ser os cenários de falha mais importantes de prever", "Aumentar a acurácia", "Nenhum risco"],
      correta: 1,
      explicacao: "Critérios de limpeza mal pensados podem descartar outliers que representam falhas reais, e o modelo fica cego para o que mais importa.",
      erros: ["Limpar costuma reduzir o dataset, não aumentar.", null, "Pode até aumentar a acurácia no teste e piorar a utilidade real.", "Há risco de viés de exclusão."]
    },
    {
      pergunta: "Qual frase resume a mensagem de encerramento da aula?",
      alternativas: ["“A IA cria vieses sozinha.”", "“Dados são sempre neutros.”", "“IA não cria vieses do nada; ela aprende os que já existem nos nossos dados e decisões.”", "“Vieses só existem em redes sociais.”"],
      correta: 2,
      explicacao: "A responsabilidade é de quem coleta, rotula e decide: “nós fomos justos com os dados que demos a ela?”",
      erros: ["A IA aprende vieses dos dados e das escolhas humanas; não os cria do nada.", "Dados refletem processos humanos e históricos, e raramente são neutros.", null, "Vieses aparecem em crédito, saúde, contratação, segurança e muitas outras áreas."]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre viés (humano) e viés de dados, e como um leva ao outro.",
    "Escolha dois tipos de viés vistos em aula e, para cada um, traga um exemplo real e uma proposta concreta de mitigação.",
    "Pesquise e descreva um tipo de viés não visto em aula, com definição e exemplo real.",
    "Quais tipos de viés têm mais chance de aparecer no seu projeto? Que sinais de alerta nos dados indicariam isso cedo?",
    "Como vocês garantiriam volume e qualidade comparáveis entre os dados do Brasil e do México? O que fariam se um dos mercados tivesse muito menos dados?"
  ],

  respostasDiscursivas: [
    "<strong>Viés (humano)</strong> é uma tendência que influencia como percebemos e julgamos algo, podendo levar a conclusões distorcidas. <strong>Viés de dados</strong> é uma distorção <strong>sistemática</strong> nos dados que faz o modelo aprender padrões injustos ou não representativos. Um leva ao outro porque dados são produzidos por decisões humanas: quem coletamos, como medimos, como rotulamos e quais decisões históricas registramos. Se contratações passadas favoreciam um perfil, o histórico carrega esse viés e o modelo aprende a repeti-lo em escala.",
    "<strong>Amostragem:</strong> reconhecimento facial treinado com maioria de rostos brancos erra mais com pessoas negras. Mitigação: auditar a representatividade por grupo, coletar mais dados dos grupos sub-representados e medir a taxa de erro por grupo antes de implantar.<br><strong>Histórico:</strong> ferramenta de triagem de currículos que aprendeu a penalizar candidatas porque o histórico da empresa era majoritariamente masculino. Mitigação: questionar se o rótulo do passado é o comportamento desejado, remover proxies de gênero, avaliar métricas de equidade e manter revisão humana.",
    "Exemplo: <strong>viés de sobrevivência</strong>, que é analisar só os casos que “sobreviveram” a um processo, ignorando os que ficaram pelo caminho. Exemplo real: na Segunda Guerra, analisavam-se os aviões que voltavam com furos para decidir onde reforçar a blindagem. Abraham Wald notou que os pontos sem furos eram os críticos, porque os aviões atingidos ali não voltavam. Outros possíveis: viés de automação, viés de rotulagem, viés de exclusão.",
    "No projeto, os mais prováveis: <strong>amostragem</strong> (menos dados do México, ou só de alguns modelos de fogão), <strong>medição</strong> (o CFD é uma proxy do real e pode errar sistematicamente em certas faixas), <strong>exclusão</strong> (limpeza que remove justamente os casos raros de falha) e <strong>histórico</strong> (testes feitos só nos cenários que já se esperava serem críticos). Sinais de alerta: distribuição muito desigual de registros por país ou modelo; erro do modelo muito maior em um subgrupo; diferença sistemática entre CFD e teste físico em uma faixa; muitos outliers removidos; poucos exemplos de falha.",
    "Antes de treinar: fazer um <strong>inventário</strong> por mercado (quantidade de simulações e testes por modelo e cenário), definir <strong>critérios de qualidade</strong> iguais (unidades, completude, faixas válidas) e comparar as distribuições das variáveis. Se o México tiver muito menos dados: priorizar a coleta de novos testes nos cenários faltantes; usar transferência de aprendizado ou um modelo base treinado com o Brasil e ajustado com os dados do México; aumentar os dados com simulações CFD calibradas pelos poucos testes reais; reportar métricas e incerteza separadamente por país; e deixar claro ao parceiro que o modelo do México é menos confiável até haver mais dados."
  ]
});
