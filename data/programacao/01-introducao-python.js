Plataforma.adicionarAula("programacao", {
  id: "introducao-python",
  titulo: "Introdução ao Python",
  descricao: "Características da linguagem, tipagem dinâmica, entrada de dados, decisões, laços, listas, tuplas, dicionários e funções.",
  duracao: "50 min",

  resumo: [
    { tipo: "titulo", texto: "O que é Python" },
    { tipo: "texto", texto: "Python é uma linguagem de <strong>alto nível</strong>, <strong>interpretada</strong>, com <strong>tipagem dinâmica</strong> e de <strong>propósito geral</strong>. Foi criada por Guido van Rossum e lançada em 1991. É conhecida pela sintaxe clara e legível." },
    { tipo: "tabela", cabecalho: ["Característica", "O que significa"], linhas: [
      ["Sintaxe simples", "usa <strong>indentação</strong> (e não chaves) para definir blocos de código"],
      ["Interpretada", "o <strong>interpretador</strong> executa o código linha a linha, sem etapa de compilação separada"],
      ["Tipagem dinâmica", "não se declara o tipo; ele é descoberto em <strong>tempo de execução</strong> e pode mudar"],
      ["Multiparadigma", "orientada a objetos, funcional e procedimental"],
      ["Bibliotecas extensas", "dados (Pandas), web, automação, ML (scikit-learn)…"],
      ["Comunidade ativa", "fóruns, tutoriais e documentação"]
    ]},
    { tipo: "subtitulo", texto: "Compilada × interpretada · estática × dinâmica" },
    { tipo: "lista", itens: [
      "<strong>Compilada:</strong> o código-fonte é traduzido por um <em>compilador</em> e depois executado pelo processador (C, C++).",
      "<strong>Interpretada:</strong> um <em>interpretador</em> lê e executa o código (Python).",
      "<strong>Tipagem estática:</strong> exige declarar o tipo antes do uso (<code>int num1 = 5;</code> em Java).",
      "<strong>Tipagem dinâmica:</strong> <code>num1 = 5</code> já basta; o tipo é inferido."
    ]},
    { tipo: "destaque", titulo: "Sintaxe × semântica", texto: "<strong>Sintaxe</strong> são as regras de escrita (onde vão os dois-pontos, a indentação). <strong>Semântica</strong> é o significado do que foi escrito (o que a instrução faz)." },

    { tipo: "titulo", texto: "Variáveis e entrada de dados" },
    { tipo: "codigo", texto: "nome = \"João\"      # str\nidade = 18         # int\nturma = \"T29\"      # str\nativo = True       # bool\n\nnome = input(\"Digite seu nome: \")\nidade = int(input(\"Digite sua idade: \"))\naltura = float(input(\"Digite sua altura: \"))" },
    { tipo: "cuidado", titulo: "input() sempre devolve texto", texto: "<code>input()</code> retorna <strong>string</strong>. Para fazer contas, converta com <code>int()</code>, <code>float()</code>, <code>str()</code> ou <code>bool()</code>. Sem isso, <code>\"2\" + \"3\"</code> vira <code>\"23\"</code>." },

    { tipo: "titulo", texto: "Estruturas de decisão" },
    { tipo: "texto", texto: "Python usa <code>if</code>, <code>elif</code> e <code>else</code>. <strong>Não existe</strong> <code>else if</code>. Os blocos são definidos por dois-pontos e indentação." },
    { tipo: "codigo", texto: "nota = 8\n\nif nota >= 9:\n    print(\"Excelente\")\nelif nota >= 7:\n    print(\"Aprovado\")\nelif nota >= 5:\n    print(\"Recuperação\")\nelse:\n    print(\"Reprovado\")   # saída: Aprovado" },

    { tipo: "titulo", texto: "Laços de repetição" },
    { tipo: "subtitulo", texto: "while: repete enquanto a condição for verdadeira" },
    { tipo: "codigo", texto: "contador = 1\nwhile contador <= 5:\n    print(contador)\n    contador += 1     # sem isso, laço infinito!" },
    { tipo: "subtitulo", texto: "for: percorre coleções (e range)" },
    { tipo: "codigo", texto: "for i in range(5):         # 0, 1, 2, 3, 4\n    print(i)\nfor i in range(1, 6):      # 1 a 5\n    print(i)\nfor i in range(0, 11, 2):  # 0, 2, 4, 6, 8, 10\n    print(i)" },
    { tipo: "destaque", titulo: "range(início, fim, passo)", texto: "O <strong>fim não é incluído</strong>. <code>range(5)</code> tem 5 números, de 0 a 4." },

    { tipo: "titulo", texto: "Coleções: listas, tuplas e dicionários" },
    { tipo: "tabela", cabecalho: ["Estrutura", "Sintaxe", "Mutável?", "Uso típico"], linhas: [
      ["Lista", "<code>[\"Maçã\", \"Banana\"]</code>", "Sim", "sequência que muda (parecida com array do JS)"],
      ["Tupla", "<code>(\"Azul\", \"Verde\")</code>", "<strong>Não</strong> (imutável)", "dados fixos, como coordenadas"],
      ["Dicionário", "<code>{\"nome\": \"João\"}</code>", "Sim", "pares <strong>chave → valor</strong> (como Object do JS / HashMap)"]
    ]},
    { tipo: "codigo", texto: "frutas = [\"Maçã\", \"Banana\", \"Laranja\"]\nfrutas.append(\"Uva\")        # adiciona no fim\nfrutas.insert(1, \"Kiwi\")    # insere na posição 1\nfrutas.remove(\"Banana\")     # remove pelo valor\n\ncores = (\"Azul\", \"Verde\", \"Vermelho\")\nprint(cores[0])              # Azul (índices começam em 0)\n\naluno = {\"nome\": \"João\", \"idade\": 18, \"turma\": \"T29\", \"ativo\": True}\nprint(aluno[\"nome\"])         # João\nprint(aluno.get(\"telefone\")) # None, sem erro\naluno[\"cidade\"] = \"São Paulo\"  # insere nova chave\ndel aluno[\"idade\"]           # remove" },
    { tipo: "dica", texto: "Prefira <code>dicionario.get(\"chave\")</code> quando a chave pode não existir: devolve <code>None</code> em vez de lançar <code>KeyError</code>." },

    { tipo: "titulo", texto: "Funções" },
    { tipo: "codigo", texto: "def saudacao():\n    print(\"Olá!\")\n\ndef soma(a, b):\n    return a + b\n\nsaudacao()          # Olá!\nprint(soma(2, 3))   # 5" },
    { tipo: "exemplo", titulo: "Mesma tarefa em três linguagens", texto: "Multiplicar 5 × 4 exige várias instruções em Assembly (mov, mul…), uma classe inteira com tipos declarados em Java e, em Python, apenas:", codigo: "resultado = 5 * 4\nprint(\"O resultado é:\", resultado)" },
    { tipo: "dica", titulo: "Zen do Python", texto: "Rode <code>import this</code>. Alguns princípios: “Bonito é melhor que feio”, “Explícito é melhor que implícito”, “Simples é melhor que complexo”, “Legibilidade conta”." },
    { tipo: "cuidado", itens: [
      "Indentação errada gera <code>IndentationError</code> ou muda a lógica do programa.",
      "<code>=</code> atribui; <code>==</code> compara.",
      "Tuplas não aceitam <code>append</code> nem atribuição por índice.",
      "Acessar <code>dic[\"chave\"]</code> inexistente gera <code>KeyError</code>.",
      "Palavras reservadas (<code>if</code>, <code>for</code>, <code>class</code>, <code>def</code>, <code>True</code>, <code>None</code>…) não podem ser nomes de variáveis."
    ]}
  ],

  objetivas: [
    {
      pergunta: "Qual conjunto de características descreve corretamente o Python?",
      alternativas: ["Baixo nível, compilado e com tipagem estática", "Alto nível, interpretado e com tipagem dinâmica", "Alto nível, compilado e sem tipos", "Baixo nível, interpretado e exclusivo para web"],
      correta: 1,
      explicacao: "Python é de alto nível (próximo da linguagem humana), interpretado (executado por um interpretador) e dinamicamente tipado (tipo definido em tempo de execução).",
      erros: ["Essas são características mais próximas de C/Assembly. Python é o oposto nos três pontos.", null, "Python não é compilado no sentido tradicional, e tem tipos (int, str, bool…), só que dinâmicos.", "Python é de alto nível e de propósito geral: dados, automação, web, IA…"]
    },
    {
      pergunta: "O que caracteriza a tipagem dinâmica?",
      alternativas: ["O tipo precisa ser declarado antes do uso", "Variáveis não têm tipo", "O tipo é determinado em tempo de execução e pode mudar", "Só números podem ser armazenados"],
      correta: 2,
      explicacao: "Na tipagem dinâmica, x = 5 cria um int; depois, x = \"oi\" passa a ser str. O interpretador decide o tipo durante a execução.",
      erros: ["Declarar o tipo antes é característica da tipagem ESTÁTICA (Java, C).", "Os valores têm tipo, sim (verifique com type()). Só não é preciso declará-lo.", null, "Python armazena textos, booleanos, listas, dicionários… não só números."]
    },
    {
      pergunta: "Qual é o tipo retornado por input() em Python?",
      alternativas: ["int", "float", "Depende do que o usuário digitar", "str"],
      correta: 3,
      explicacao: "input() SEMPRE retorna uma string. Para usar como número, converta: int(input(...)) ou float(input(...)).",
      erros: ["Só vira int se você converter com int().", "Só vira float se você converter com float().", "Mesmo que o usuário digite 42, o retorno é o texto \"42\".", null]
    },
    {
      pergunta: "Qual palavra-chave Python usa para testar uma condição adicional após um if?",
      alternativas: ["else if", "elif", "elseif", "case"],
      correta: 1,
      explicacao: "Python usa elif (abreviação de else if). Não existe a forma “else if” em uma única estrutura.",
      erros: ["“else if” é a forma de JavaScript, C e Java. Em Python, gera erro ou aninha blocos de forma incorreta.", null, "elseif é usado em PHP, não em Python.", "case aparece no match/case (Python 3.10+), mas não substitui o elif após um if."]
    },
    {
      pergunta: "Quais números são impressos por: for i in range(1, 6): print(i)?",
      alternativas: ["1, 2, 3, 4, 5", "1, 2, 3, 4, 5, 6", "0, 1, 2, 3, 4, 5", "1, 3, 5"],
      correta: 0,
      explicacao: "range(início, fim) inclui o início e EXCLUI o fim. De 1 até 5.",
      erros: [null, "O 6 é o limite superior e não é incluído.", "O range começa no primeiro argumento, que aqui é 1, e não em 0.", "Isso exigiria passo 2: range(1, 6, 2)."]
    },
    {
      pergunta: "Qual é a principal diferença entre uma lista e uma tupla?",
      alternativas: ["Listas só guardam números", "Tuplas usam colchetes []", "Tuplas são imutáveis; listas podem ser alteradas", "Não há diferença"],
      correta: 2,
      explicacao: "Listas ([]) são mutáveis (append, insert, remove). Tuplas (()) são imutáveis: depois de criadas, não mudam.",
      erros: ["Listas guardam qualquer tipo, inclusive misturado.", "Colchetes definem listas. Tuplas usam parênteses.", null, "A (i)mutabilidade é uma diferença fundamental."]
    },
    {
      pergunta: "Dado aluno = {\"nome\": \"João\"}, o que acontece com print(aluno.get(\"telefone\"))?",
      alternativas: ["Lança KeyError", "Imprime None", "Imprime uma string vazia", "Cria a chave telefone"],
      correta: 1,
      explicacao: "get() devolve None (ou um valor padrão informado) quando a chave não existe, sem gerar erro.",
      erros: ["KeyError ocorre com aluno[\"telefone\"], não com get().", null, "O retorno padrão é None, não \"\".", "get() só lê. Para criar, use aluno[\"telefone\"] = ..."]
    },
    {
      pergunta: "Qual comando adiciona \"Uva\" ao FINAL da lista frutas?",
      alternativas: ["frutas.insert(\"Uva\")", "frutas.add(\"Uva\")", "frutas[\"Uva\"] = True", "frutas.append(\"Uva\")"],
      correta: 3,
      explicacao: "append() adiciona um elemento ao final da lista.",
      erros: ["insert() exige a posição: frutas.insert(1, \"Uva\").", "add() é método de conjuntos (set), não de listas.", "Essa sintaxe é de dicionário; em lista, o índice precisa ser um inteiro.", null]
    },
    {
      pergunta: "O código abaixo tem um problema. Qual?<br><code>contador = 1</code><br><code>while contador &lt;= 5:</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;print(contador)</code>",
      alternativas: ["Laço infinito: contador nunca é incrementado", "Erro de sintaxe no while", "Imprime de 1 a 5 normalmente", "Não imprime nada"],
      correta: 0,
      explicacao: "Sem contador += 1, a condição contador <= 5 é sempre verdadeira e o programa imprime 1 para sempre.",
      erros: [null, "A sintaxe está correta: dois-pontos e indentação estão certos.", "Para parar em 5, seria necessário incrementar o contador a cada volta.", "Imprime, sim: o valor 1, repetidamente."]
    },
    {
      pergunta: "O que a função abaixo retorna com soma(2, 3)?<br><code>def soma(a, b):</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;return a + b</code>",
      alternativas: ["\"23\"", "None", "5", "Erro, pois faltou declarar os tipos"],
      correta: 2,
      explicacao: "a = 2 e b = 3 são inteiros, e return devolve 2 + 3 = 5.",
      erros: ["Seria \"23\" se os argumentos fossem as STRINGS \"2\" e \"3\".", "A função tem return, então não devolve None.", null, "Python não exige declarar tipos (tipagem dinâmica)."]
    }
  ],

  discursivas: [
    "Explique com suas palavras a diferença entre linguagens compiladas e interpretadas e entre tipagem estática e dinâmica, citando exemplos.",
    "Escreva um programa em Python que leia duas notas, calcule a média e informe “Aprovado”, “Recuperação” ou “Reprovado” usando if/elif/else.",
    "Quando você usaria uma lista, uma tupla ou um dicionário? Dê um exemplo prático para cada um.",
    "Por que é necessário converter o valor de input() antes de fazer cálculos? O que acontece se não converter?",
    "Escolha dois princípios do Zen do Python e explique como eles melhorariam um código confuso."
  ],

  respostasDiscursivas: [
    "<strong>Compilada:</strong> um compilador traduz todo o código-fonte para linguagem de máquina antes da execução (C, C++); costuma ser mais rápida. <strong>Interpretada:</strong> um interpretador lê e executa o código durante a execução (Python), o que facilita testar e depurar. <strong>Tipagem estática:</strong> o tipo é declarado e verificado antes de rodar (<code>int num = 5;</code> em Java), o que pega erros cedo. <strong>Tipagem dinâmica:</strong> o tipo é descoberto em tempo de execução e pode mudar (<code>x = 5</code> e depois <code>x = \"oi\"</code> em Python). O código fica mais curto, mas alguns erros só aparecem ao executar.",
    "<code>n1 = float(input(\"Nota 1: \"))</code><br><code>n2 = float(input(\"Nota 2: \"))</code><br><code>media = (n1 + n2) / 2</code><br><code>if media >= 7:</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Aprovado\")</code><br><code>elif media >= 5:</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Recuperação\")</code><br><code>else:</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Reprovado\")</code><br>Pontos-chave: converter o input com float(), usar parênteses na média e ordenar as condições da maior para a menor.",
    "<strong>Lista</strong> para sequências que mudam: tarefas da sprint, com append e remove (<code>tarefas = [\"EDA\", \"modelo\"]</code>). <strong>Tupla</strong> para dados fixos que não devem ser alterados: coordenadas ou dimensões de um fogão (<code>(60, 90)</code>). <strong>Dicionário</strong> para acessar informações por nome (chave → valor): o cadastro de um teste (<code>{\"modelo\": \"A\", \"temp\": 82.5}</code>).",
    "input() sempre retorna uma <strong>string</strong>. Sem converter, as operações seguem as regras de texto: <code>\"2\" + \"3\"</code> vira <code>\"23\"</code> (concatenação), e <code>\"2\" * 3</code> vira <code>\"222\"</code>. Comparações como <code>\"10\" > \"9\"</code> dão False, porque comparam caractere a caractere. Misturar com números (<code>\"2\" + 3</code>) gera TypeError. Por isso usamos int() ou float() antes de calcular.",
    "Exemplo: <strong>“Legibilidade conta”</strong>: nomes claros (<code>media_notas</code> em vez de <code>m</code>), indentação consistente e comentários só onde necessário tornam o código compreensível para o grupo. <strong>“Simples é melhor que complexo”</strong>: trocar vários ifs aninhados e repetidos por uma função bem nomeada ou por um dicionário de opções reduz bugs. Também valem “Explícito é melhor que implícito” e “Erros nunca devem passar silenciosamente” (não usar except vazio)."
  ]
});
