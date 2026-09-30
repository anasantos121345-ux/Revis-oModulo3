/*
 * Plataforma de Revisão · Módulo Machine Learning — lógica da interface.
 *
 * Rotas (hash, funcionam abrindo o index.html direto do disco):
 *   #/                          página inicial
 *   #/<categoria>               lista de aulas
 *   #/<categoria>/aula/<n>      aula n (1, 2, 3...)
 *
 * O conteúdo vem de window.Plataforma (data/categorias.js + data/<categoria>/*.js).
 * O progresso do estudante fica no localStorage deste navegador.
 */
(function () {
  "use strict";

  var DADOS = window.Plataforma || { categorias: [] };
  // Configuração opcional da página (ex.: sprint3.html). Sem ela, vale o site completo.
  var CFG = window.PlataformaConfig || {};
  var NOME_SITE = CFG.nomeSite || "Plataforma de Revisão · Módulo Machine Learning";
  var CATS = CFG.ocultarAreasVazias
    ? DADOS.categorias.filter(function (c) { return c.aulas.length; })
    : DADOS.categorias;
  var STORAGE_KEY = CFG.storageKey || "minha-plataforma-estudos:v1";
  var LETRAS = ["A", "B", "C", "D", "E", "F"];

  var app = document.getElementById("app");
  var catNav = document.getElementById("cat-nav");
  var header = document.querySelector(".site-header");

  /* ---------------- armazenamento ---------------- */

  var store = {};
  try { store = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { store = {}; }

  function salvar() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); } catch (e) { /* modo privado etc. */ }
  }
  function chave(cat, aula) { return cat.id + "/" + (aula.id || aula.titulo); }
  function estado(cat, aula) {
    var k = chave(cat, aula);
    if (!store[k]) store[k] = { obj: {}, disc: {} };
    return store[k];
  }
  function lerEstado(cat, aula) { return store[chave(cat, aula)] || { obj: {}, disc: {} }; }

  function stats(cat, aula) {
    var st = lerEstado(cat, aula);
    var acertos = 0, erros = 0;
    aula.objetivas.forEach(function (q, i) {
      if (st.obj[i] === undefined) return;
      if (st.obj[i] === q.correta) acertos++; else erros++;
    });
    var disc = 0;
    aula.discursivas.forEach(function (_, i) { if (st.disc[i] && st.disc[i].texto) disc++; });
    var respObj = acertos + erros;
    return {
      acertos: acertos,
      erros: erros,
      respObj: respObj,
      totalObj: aula.objetivas.length,
      disc: disc,
      totalDisc: aula.discursivas.length,
      respondidas: respObj + disc,
      total: aula.objetivas.length + aula.discursivas.length,
      aproveitamento: respObj ? Math.round((acertos / respObj) * 100) : 0
    };
  }

  function progressoCategoria(cat) {
    var r = 0, t = 0, concl = 0;
    cat.aulas.forEach(function (a) {
      var s = stats(cat, a);
      r += s.respondidas; t += s.total;
      if (s.total && s.respondidas === s.total) concl++;
    });
    return { pct: t ? Math.round((r / t) * 100) : 0, concluidas: concl };
  }

  /* ---------------- utilidades ---------------- */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function catPorId(id) { return CATS.find(function (c) { return c.id === id; }); }
  function linkCat(cat) { return "#/" + cat.id; }
  function linkAula(cat, i) { return "#/" + cat.id + "/aula/" + (i + 1); }
  function linkSimulado(cat) { return "#/" + cat.id + "/simulado"; }
  function totalQuestoes() {
    return CATS.reduce(function (s, c) {
      return s + c.aulas.reduce(function (s2, a) { return s2 + a.objetivas.length + a.discursivas.length; }, 0);
    }, 0);
  }

  function ajustarHeader() {
    document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  }

  /* ---------------- rotas ---------------- */

  var atual = null; // contexto da aula aberta: { cat, aula, idx }

  function rota() {
    var partes = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
    if (!partes.length) return { view: "home" };
    var cat = catPorId(partes[0]);
    if (!cat) return { view: "404" };
    if (partes.length === 1) return { view: "categoria", cat: cat };
    if (partes[1] === "simulado" && partes.length === 2 && cat.aulas.length) return { view: "simulado", cat: cat };
    if (partes[1] === "aula" && partes.length === 3) {
      var n = parseInt(partes[2], 10);
      if (n >= 1 && n <= cat.aulas.length) return { view: "aula", cat: cat, idx: n - 1 };
    }
    return { view: "404", cat: cat };
  }

  function render() {
    var r = rota();
    atual = null;
    renderNav(r.cat);
    if (r.view === "home") renderHome();
    else if (r.view === "categoria") renderCategoria(r.cat);
    else if (r.view === "aula") renderAula(r.cat, r.idx);
    else if (r.view === "simulado") renderSimulado(r.cat);
    else render404();
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
    ajustarHeader();
  }

  /* ---------------- barra de categorias ---------------- */

  function renderNav(ativa) {
    catNav.innerHTML = CATS.map(function (c) {
      var on = ativa && ativa.id === c.id;
      return '<a class="cat-link' + (on ? " is-active" : "") + '" href="' + linkCat(c) + '"' +
        (on ? ' aria-current="page"' : "") + '>' +
        '<span class="cat-link-icon" aria-hidden="true">' + c.icone + "</span>" +
        "<span>" + esc(c.nome) + "</span></a>";
    }).join("");
    var act = catNav.querySelector(".is-active");
    if (act) catNav.scrollLeft = act.offsetLeft - (catNav.clientWidth - act.offsetWidth) / 2;
    else catNav.scrollLeft = 0;
  }

  /* ---------------- página inicial ---------------- */

  function renderHome() {
    document.title = NOME_SITE;
    var totalAulas = CATS.reduce(function (s, c) { return s + c.aulas.length; }, 0);
    var concluidas = CATS.reduce(function (s, c) { return s + progressoCategoria(c).concluidas; }, 0);

    var cards = CATS.map(function (c) {
      var p = progressoCategoria(c);
      return '<article class="cat-card" style="--card-accent:' + c.cor + '">' +
        '<div class="cat-card-top"><span class="cat-card-icon" aria-hidden="true">' + c.icone + "</span>" +
        '<span class="cat-card-count">' + c.aulas.length + (c.aulas.length === 1 ? " aula" : " aulas") + "</span></div>" +
        "<h3>" + esc(c.nome) + "</h3>" +
        "<p>" + esc(c.descricao) + "</p>" +
        '<div class="mini-progress"><div class="bar" role="progressbar" aria-label="Progresso em ' + esc(c.nome) +
        '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p.pct + '"><span style="width:' + p.pct + '%"></span></div>' +
        "<small>" + p.pct + "% concluído · " + p.concluidas + "/" + c.aulas.length + " aulas finalizadas</small></div>" +
        '<a class="btn btn-primary btn-block" href="' + linkCat(c) + '">Começar a estudar <span aria-hidden="true">→</span></a>' +
        "</article>";
    }).join("");

    var palavras = CFG.faixa || ["aprenda", "pratique", "revise", "erre sem medo", "tente de novo", "evolua"];
    var faixa = palavras.concat(palavras).concat(palavras).concat(palavras)
      .map(function (p) { return "<span>" + p + "</span><span aria-hidden=\"true\">♡</span>"; }).join("");

    app.innerHTML =
      '<div class="view">' +
      '<section class="hero">' +
      "<div>" +
      '<span class="sticker">' + (CFG.selo || "✦ canal de estudos · ao vivo ✦") + "</span>" +
      "<h1>" + (CFG.tituloHTML || "Plataforma de Revisão <em>Módulo Machine Learning</em>") + "</h1>" +
      '<p class="subtitle">' + (CFG.subtitulo || "Aprenda, pratique e acompanhe sua evolução.") + "</p>" +
      '<div class="hero-actions">' +
      '<a class="btn btn-primary" href="' + (CATS[0] ? linkCat(CATS[0]) : "#/") + '">Começar agora <span aria-hidden="true">→</span></a>' +
      '<button type="button" class="btn btn-soft" data-action="ver-areas">Ver as ' + CATS.length + " áreas</button>" +
      (CFG.entrega ? '<button type="button" class="btn btn-soft" data-action="ver-entrega">Ver a entrega</button>' : "") +
      "</div>" +
      '<div class="hero-stats">' +
      '<div class="hero-stat"><strong>' + CATS.length + "</strong>áreas</div>" +
      '<div class="hero-stat"><strong>' + totalAulas + "</strong>aulas</div>" +
      '<div class="hero-stat"><strong>' + totalQuestoes() + "</strong>questões</div>" +
      '<div class="hero-stat"><strong>' + concluidas + "</strong>aulas concluídas</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<div class="marquee" aria-hidden="true"><div class="marquee-track">' + faixa + "</div></div>" +
      secaoEntrega() +
      '<section id="areas" style="scroll-margin-top: calc(var(--header-h) + 20px)">' +
      '<h2 class="section-title">Escolha sua área</h2>' +
      '<p class="section-lead">Cada área tem aulas com resumo, 10 questões objetivas com correção na hora e 5 discursivas.</p>' +
      '<div class="cat-grid">' + cards + "</div>" +
      "</section>" +
      "</div>";
  }

  /* ---------------- entrega da sprint (opcional, via CFG.entrega) ---------------- */

  function aulaPorRef(ref) {
    var cat = catPorId(ref.cat);
    if (!cat) return null;
    for (var i = 0; i < cat.aulas.length; i++) {
      if (cat.aulas[i].id === ref.aula) return { cat: cat, idx: i, aula: cat.aulas[i] };
    }
    return null;
  }

  function secaoEntrega() {
    var E = CFG.entrega;
    if (!E) return "";
    var feitos = store.entrega || {};
    var total = 0, marcados = 0;
    var grupos = E.grupos.map(function (g) {
      var itens = g.itens.map(function (it) {
        total++;
        var on = !!feitos[it.id];
        if (on) marcados++;
        var links = (it.aulas || []).map(function (ref) {
          var a = aulaPorRef(ref);
          return a ? '<a class="entrega-link" href="' + linkAula(a.cat, a.idx) + '">' + a.cat.icone + " " + esc(a.aula.titulo) + " →</a>" : "";
        }).join("");
        return '<li class="entrega-item' + (on ? " is-done" : "") + '">' +
          '<input type="checkbox" id="entrega-' + it.id + '" data-entrega="' + it.id + '"' + (on ? " checked" : "") + ">" +
          '<div class="entrega-texto"><label for="entrega-' + it.id + '">' + it.texto + "</label>" +
          (it.pontos ? '<span class="entrega-pontos">' + it.pontos + "</span>" : "") +
          (links ? '<div class="entrega-links">' + links + "</div>" : "") + "</div></li>";
      }).join("");
      return '<div class="entrega-grupo"><h3>' + g.titulo + "</h3><ul>" + itens + "</ul></div>";
    }).join("");
    var pct = total ? Math.round((marcados / total) * 100) : 0;
    return '<section id="entrega" class="panel entrega" style="scroll-margin-top: calc(var(--header-h) + 20px)">' +
      '<h2 class="section-head"><span aria-hidden="true">📦</span> ' + E.titulo + "</h2>" +
      '<p class="section-sub">' + E.descricao + "</p>" +
      '<div class="progress-box"><div class="progress-row"><strong>Checklist: <span data-entrega-cont>' + marcados + "/" + total + "</span> itens prontos</strong></div>" +
      '<div class="bar"><span data-entrega-bar style="width:' + pct + '%"></span></div></div>' +
      '<div class="entrega-grid">' + grupos + "</div>" +
      (E.aviso ? '<div class="callout callout-cuidado"><div class="callout-title">⚠️ Atenção</div><p>' + E.aviso + "</p></div>" : "") +
      "</section>";
  }

  function atualizarEntrega(input) {
    var feitos = store.entrega || (store.entrega = {});
    if (input.checked) feitos[input.dataset.entrega] = true;
    else delete feitos[input.dataset.entrega];
    salvar();
    input.closest(".entrega-item").classList.toggle("is-done", input.checked);
    var todos = app.querySelectorAll("[data-entrega]");
    var n = 0;
    todos.forEach(function (i) { if (i.checked) n++; });
    var cont = app.querySelector("[data-entrega-cont]");
    if (cont) cont.textContent = n + "/" + todos.length;
    var bar = app.querySelector("[data-entrega-bar]");
    if (bar) bar.style.width = (todos.length ? (n / todos.length) * 100 : 0) + "%";
  }

  /* ---------------- lista de aulas ---------------- */

  function statusAula(s) {
    if (s.respondidas === 0) return ["Não iniciada", "idle"];
    if (s.respondidas === s.total) return ["Concluída ✓", "done"];
    return ["Em andamento · " + s.respondidas + "/" + s.total, "doing"];
  }

  function renderCategoria(cat) {
    document.title = cat.nome + " · " + NOME_SITE;
    var p = progressoCategoria(cat);

    var lista = cat.aulas.map(function (a, i) {
      var s = stats(cat, a);
      var st = statusAula(s);
      var pct = s.total ? Math.round((s.respondidas / s.total) * 100) : 0;
      return '<a class="lesson-card' + (st[1] === "done" ? " is-done" : "") + '" href="' + linkAula(cat, i) + '">' +
        '<span class="lesson-num">Aula<b>' + pad(i + 1) + "</b></span>" +
        '<div class="lesson-body">' +
        "<h3>" + esc(a.titulo) + "</h3>" +
        "<p>" + esc(a.descricao || "") + "</p>" +
        '<div class="lesson-meta">' +
        (a.duracao ? "<span>⏱ " + esc(a.duracao) + "</span>" : "") +
        "<span>📝 " + a.objetivas.length + " objetivas</span>" +
        "<span>✍️ " + a.discursivas.length + " discursivas</span>" +
        (s.respObj ? "<span>🎯 " + s.aproveitamento + "% de acerto</span>" : "") +
        "</div>" +
        '<div class="bar" aria-hidden="true"><span style="width:' + pct + '%"></span></div>' +
        "</div>" +
        '<div class="lesson-side"><span class="status status-' + st[1] + '">' + st[0] + "</span>" +
        '<span class="lesson-go" aria-hidden="true">→</span></div>' +
        "</a>";
    }).join("");

    app.innerHTML =
      '<div class="view">' +
      '<nav class="crumbs" aria-label="Você está em"><a href="#/">Início</a><span aria-hidden="true">/</span><span>' + esc(cat.nome) + "</span></nav>" +
      '<header class="cat-hero">' +
      '<span class="cat-hero-icon" aria-hidden="true">' + cat.icone + "</span>" +
      '<div class="cat-hero-body">' +
      "<h1>" + esc(cat.nome) + "</h1>" +
      "<p>" + esc(cat.descricao) + "</p>" +
      '<div class="cat-hero-progress"><div class="bar"><span style="width:' + p.pct + '%"></span></div>' +
      "<span>" + p.pct + "% · " + p.concluidas + "/" + cat.aulas.length + " aulas concluídas</span></div>" +
      "</div></header>" +
      (cat.aulas.length ? bannerSimulado(cat) : "") +
      (cat.aulas.length
        ? '<div class="lesson-list">' + lista + "</div>"
        : '<div class="empty"><div class="big">📼</div><h2>Nenhuma aula por aqui ainda</h2><p>Adicione aulas em data/' + esc(cat.id) + "/.</p></div>") +
      "</div>";
  }

  /* ---------------- aula ---------------- */

  function corpoCallout(b) {
    var h = "";
    if (b.texto) h += "<p>" + b.texto + "</p>";
    if (b.itens) h += "<ul>" + b.itens.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>";
    if (b.codigo) h += '<pre class="r-code"><code>' + esc(b.codigo) + "</code></pre>";
    return h;
  }

  function blocoHTML(b) {
    switch (b.tipo) {
      case "titulo": return '<h2 class="r-h2">' + b.texto + "</h2>";
      case "subtitulo": return '<h3 class="r-h3">' + b.texto + "</h3>";
      case "texto": return "<p>" + b.texto + "</p>";
      case "lista": return "<ul>" + b.itens.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>";
      case "passos": return '<ol class="r-steps">' + b.itens.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ol>";
      case "formula":
        return '<div class="r-formula">' +
          (b.legenda ? '<span class="r-formula-label">' + b.legenda + "</span>" : "") +
          '<div class="r-formula-expr">' + b.texto + "</div>" +
          (b.nota ? '<span class="r-formula-note">' + b.nota + "</span>" : "") + "</div>";
      case "codigo": return '<pre class="r-code"><code>' + esc(b.texto) + "</code></pre>";
      case "tabela":
        return '<div class="r-table-wrap"><table class="r-table"><thead><tr>' +
          b.cabecalho.map(function (c) { return "<th>" + c + "</th>"; }).join("") +
          "</tr></thead><tbody>" +
          b.linhas.map(function (l) { return "<tr>" + l.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") +
          "</tbody></table></div>";
      case "exemplo":
        return '<div class="callout callout-exemplo"><div class="callout-title">✏️ ' + (b.titulo || "Exemplo") + "</div>" + corpoCallout(b) + "</div>";
      case "destaque":
        return '<div class="callout callout-destaque"><div class="callout-title">⭐ ' + (b.titulo || "Conceito importante") + "</div>" + corpoCallout(b) + "</div>";
      case "dica":
        return '<div class="callout callout-dica"><div class="callout-title">💡 ' + (b.titulo || "Dica") + "</div>" + corpoCallout(b) + "</div>";
      case "cuidado":
        return '<div class="callout callout-cuidado"><div class="callout-title">⚠️ ' + (b.titulo || "Cuidado com") + "</div>" + corpoCallout(b) + "</div>";
      default:
        return b.texto ? "<p>" + b.texto + "</p>" : "";
    }
  }

  function navAulas(cat, idx) {
    var prev = idx > 0
      ? '<a class="btn btn-ghost" href="' + linkAula(cat, idx - 1) + '">← Aula anterior</a>'
      : '<span class="btn btn-ghost is-disabled" aria-disabled="true">← Aula anterior</span>';
    var next;
    if (idx < cat.aulas.length - 1) {
      next = '<a class="btn btn-primary" href="' + linkAula(cat, idx + 1) + '">Próxima aula →</a>';
    } else {
      next = '<a class="btn btn-primary" href="' + linkSimulado(cat) + '" title="Última aula desta área">Simulado da área →</a>';
    }
    return '<nav class="lesson-nav" aria-label="Navegação entre aulas">' + prev +
      '<a class="btn btn-soft" href="' + linkCat(cat) + '">☰ Lista de aulas</a>' + next + "</nav>";
  }

  function questaoHTML(q, i) {
    var ops = q.alternativas.map(function (alt, oi) {
      return '<button type="button" class="option" data-oi="' + oi + '">' +
        '<span class="letter">' + LETRAS[oi] + "</span>" +
        '<span class="opt-text">' + alt + "</span>" +
        '<span class="opt-icon" aria-hidden="true"></span></button>';
    }).join("");
    return '<article class="q-card" data-qi="' + i + '" id="q-' + (i + 1) + '">' +
      '<div class="q-head"><span class="q-num">Questão ' + pad(i + 1) + '</span><span class="q-badge" aria-live="polite"></span></div>' +
      '<p class="q-text">' + q.pergunta + "</p>" +
      '<div class="options" role="group" aria-label="Alternativas da questão ' + (i + 1) + '">' + ops + "</div>" +
      '<div class="feedback" hidden aria-live="polite"></div>' +
      "</article>";
  }

  function discursivaHTML(texto, i) {
    return '<article class="disc-card" data-di="' + i + '">' +
      '<label class="disc-q" for="disc-' + i + '"><span class="q-num">Questão ' + pad(i + 1) + "</span>" + texto + "</label>" +
      '<textarea id="disc-' + i + '" rows="5" placeholder="Escreva sua resposta com suas palavras…"></textarea>' +
      '<div class="disc-foot"><div class="disc-info"><span class="disc-status" aria-live="polite"></span>' +
      '<span class="disc-count">0 caracteres</span></div>' +
      '<button type="button" class="btn btn-primary disc-send">Enviar resposta</button></div>' +
      respostaReferenciaHTML(i) +
      "</article>";
  }

  function respostaReferenciaHTML(i) {
    var refs = atual && atual.aula && atual.aula.respostasDiscursivas;
    if (!refs || !refs[i]) return "";
    return '<div class="disc-ref" hidden>' +
      '<div class="disc-ref-title">📌 Resposta de referência</div>' +
      '<p class="disc-ref-note">Compare com a sua: não precisa ser igual. Veja se você cobriu os pontos principais.</p>' +
      '<div class="disc-ref-body">' + refs[i] + "</div></div>";
  }

  function renderAula(cat, idx) {
    var aula = cat.aulas[idx];
    atual = { cat: cat, aula: aula, idx: idx };
    document.title = aula.titulo + " · " + cat.nome;
    var s = stats(cat, aula);

    app.innerHTML =
      '<div class="view" style="--accent:' + cat.cor + '">' +
      '<nav class="crumbs" aria-label="Você está em"><a href="#/">Início</a><span aria-hidden="true">/</span>' +
      '<a href="' + linkCat(cat) + '">' + esc(cat.nome) + '</a><span aria-hidden="true">/</span><span>Aula ' + pad(idx + 1) + "</span></nav>" +
      '<header class="lesson-hero">' +
      '<span class="kicker">' + cat.icone + " " + esc(cat.nome) + " · Aula " + pad(idx + 1) + " de " + pad(cat.aulas.length) + "</span>" +
      "<h1>" + esc(aula.titulo) + "</h1>" +
      (aula.descricao ? "<p>" + esc(aula.descricao) + "</p>" : "") +
      '<div class="lesson-meta">' + (aula.duracao ? "<span>⏱ " + esc(aula.duracao) + "</span>" : "") +
      "<span>📝 " + s.totalObj + " objetivas</span><span>✍️ " + s.totalDisc + " discursivas</span></div>" +
      "</header>" +
      navAulas(cat, idx) +
      '<section class="panel" id="sec-resumo"><h2 class="section-head"><span aria-hidden="true">📚</span> Resumo da aula</h2>' +
      '<div class="resumo">' + aula.resumo.map(blocoHTML).join("") + "</div></section>" +
      '<section class="panel" id="sec-objetivas"><h2 class="section-head"><span aria-hidden="true">📝</span> Questões Objetivas</h2>' +
      '<p class="section-sub">Clique em uma alternativa para ver a correção na hora. Depois de respondida, a questão fica travada. Para tentar tudo de novo, use <strong>Refazer objetivas</strong> no fim da aula.</p>' +
      '<div class="q-list">' + aula.objetivas.map(questaoHTML).join("") + "</div></section>" +
      '<section class="panel" id="sec-discursivas"><h2 class="section-head"><span aria-hidden="true">✍️</span> Questões Discursivas</h2>' +
      '<p class="section-sub">Escreva com suas palavras e clique em <strong>Enviar resposta</strong>. As respostas ficam salvas neste navegador e você pode editá-las quando quiser.</p>' +
      '<div class="disc-list">' + aula.discursivas.map(discursivaHTML).join("") + "</div></section>" +
      '<section class="panel" id="sec-desempenho"><h2 class="section-head"><span aria-hidden="true">📊</span> Seu desempenho</h2>' +
      '<div class="progress-box" id="progresso">' +
      '<div class="progress-row"><strong>Progresso: <span data-p="resp">0</span>/<span data-p="total">' + s.total + "</span> questões respondidas</strong>" +
      '<span class="progress-counters"><span class="pc pc-ok" title="Acertos">✓ <span data-p="ok">0</span></span>' +
      '<span class="pc pc-bad" title="Erros">✗ <span data-p="bad">0</span></span>' +
      '<span class="pc pc-pct" title="Aproveitamento nas objetivas"><span data-p="pct">0</span>%</span></span></div>' +
      '<div class="bar bar-lg" role="progressbar" aria-label="Progresso na aula" aria-valuemin="0" aria-valuemax="' + s.total + '" data-p="barwrap"><span data-p="bar"></span></div>' +
      "</div>" +
      '<div id="resultado"></div></section>' +
      navAulas(cat, idx) +
      "</div>";

    // restaura o que já foi respondido
    var st = lerEstado(cat, aula);
    app.querySelectorAll(".q-card").forEach(function (card) {
      var qi = +card.dataset.qi;
      if (st.obj[qi] !== undefined) marcarQuestao(card, aula.objetivas[qi], st.obj[qi], false);
    });
    app.querySelectorAll(".disc-card").forEach(function (card) {
      var di = +card.dataset.di;
      var salvo = st.disc[di];
      var ta = card.querySelector("textarea");
      if (salvo && salvo.texto) {
        ta.value = salvo.texto;
        marcarDiscursiva(card, salvo);
      }
      contarCaracteres(card);
    });
    atualizarProgresso(false);
  }

  function marcarQuestao(card, q, escolhida, animar) {
    var acertou = escolhida === q.correta;
    card.querySelectorAll(".option").forEach(function (b, oi) {
      b.disabled = true;
      var icon = b.querySelector(".opt-icon");
      if (oi === escolhida) {
        b.classList.add(acertou ? "is-correct" : "is-wrong");
        b.setAttribute("aria-label", LETRAS[oi] + ": sua resposta, " + (acertou ? "correta" : "incorreta"));
        icon.textContent = acertou ? "✓" : "✗";
      } else if (oi === q.correta) {
        b.classList.add("is-answer");
        b.setAttribute("aria-label", LETRAS[oi] + ": alternativa correta");
        icon.textContent = "✓";
      } else {
        b.classList.add("is-dim");
      }
      if (!animar) b.style.animation = "none";
    });
    card.classList.add(acertou ? "card-ok" : "card-bad");

    var badge = card.querySelector(".q-badge");
    badge.textContent = acertou ? "✓ acertou" : "✗ errou";
    badge.className = "q-badge " + (acertou ? "ok" : "bad");

    var fb = card.querySelector(".feedback");
    var html;
    if (acertou) {
      html = '<div class="fb-title">🎉 Resposta correta!</div><p>' + q.explicacao + "</p>";
      fb.className = "feedback feedback-ok";
    } else {
      var motivo = (q.erros && q.erros[escolhida]) || "Essa alternativa não corresponde ao conceito cobrado na questão.";
      html = '<div class="fb-title">Resposta incorreta. A alternativa correta é a ' + LETRAS[q.correta] + ".</div>" +
        '<div class="fb-sub bad">Por que a alternativa ' + LETRAS[escolhida] + " está errada</div><p>" + motivo + "</p>" +
        '<div class="fb-sub ok">Por que a alternativa ' + LETRAS[q.correta] + " está correta</div><p>" + q.explicacao + "</p>";
      fb.className = "feedback feedback-bad";
    }
    fb.innerHTML = html;
    fb.hidden = false;
    if (animar) fb.classList.add("reveal");
  }

  function dataCurta(ts) {
    try {
      return new Date(ts).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
    } catch (e) { return ""; }
  }

  function marcarDiscursiva(card, salvo) {
    card.classList.add("is-sent");
    var status = card.querySelector(".disc-status");
    status.textContent = "✓ Resposta enviada" + (salvo.data ? " em " + dataCurta(salvo.data) : "");
    status.className = "disc-status ok";
    card.querySelector(".disc-send").textContent = "Atualizar resposta";
    var ref = card.querySelector(".disc-ref");
    if (ref && ref.hidden) { ref.hidden = false; ref.classList.add("reveal"); }
  }

  function contarCaracteres(card) {
    var n = card.querySelector("textarea").value.trim().length;
    card.querySelector(".disc-count").textContent = n + (n === 1 ? " caractere" : " caracteres");
  }

  function atualizarProgresso(recemConcluida) {
    if (!atual || !atual.aula) return;
    var s = stats(atual.cat, atual.aula);
    function set(k, v) { var el = app.querySelector('[data-p="' + k + '"]'); if (el) el.textContent = v; }
    set("resp", s.respondidas);
    set("ok", s.acertos);
    set("bad", s.erros);
    set("pct", s.aproveitamento);
    set("objc", s.respObj + "/" + s.totalObj);
    set("discc", s.disc + "/" + s.totalDisc);
    var bar = app.querySelector('[data-p="bar"]');
    if (bar) bar.style.width = (s.total ? (s.respondidas / s.total) * 100 : 0) + "%";
    var wrap = app.querySelector('[data-p="barwrap"]');
    if (wrap) wrap.setAttribute("aria-valuenow", s.respondidas);
    renderResultado(s);
    if (recemConcluida) coracoes();
  }

  function mensagemDesempenho(s) {
    if (!s.respObj) return "Comece pelas questões objetivas: o desempenho aparece aqui conforme você responde.";
    var p = s.aproveitamento;
    if (p >= 90) return "💖 Arrasou! Você domina este conteúdo. Que tal ensinar para alguém do grupo?";
    if (p >= 70) return "✨ Muito bom! Revise as explicações das questões que você errou para fechar as lacunas.";
    if (p >= 50) return "🌷 Bom caminho. Releia as caixas “Cuidado com” do resumo e refaça as objetivas.";
    return "📼 Sem pressa: volte ao resumo, leia os exemplos com calma e tente de novo. Errar faz parte.";
  }

  function renderResultado(s) {
    var el = document.getElementById("resultado");
    if (!el || !atual || !atual.aula) return;
    var completo = s.respondidas === s.total;
    var faltamObj = s.totalObj - s.respObj;
    var faltamDisc = s.totalDisc - s.disc;
    var cat = atual.cat, idx = atual.idx;

    var proximo = "";
    if (idx < cat.aulas.length - 1) {
      proximo = '<a class="btn btn-primary" href="' + linkAula(cat, idx + 1) + '">Próxima aula →</a>';
    } else {
      proximo = '<a class="btn btn-primary" href="' + linkSimulado(cat) + '">Fazer o simulado da área →</a>';
    }

    var pend = [];
    if (faltamObj) pend.push(faltamObj + (faltamObj === 1 ? " objetiva" : " objetivas"));
    if (faltamDisc) pend.push(faltamDisc + (faltamDisc === 1 ? " discursiva" : " discursivas"));

    el.innerHTML =
      (completo
        ? '<div class="done-banner"><span class="big" aria-hidden="true">🎉</span><div><h3>Aula concluída!</h3>' +
          "<p>Você respondeu todas as " + s.total + " questões desta aula.</p></div></div>"
        : '<p class="result-hint">Faltam <strong>' + pend.join(" e ") + "</strong> para concluir a aula. O resumo abaixo se atualiza sozinho.</p>") +
      '<div class="result-grid">' +
      '<div class="stat"><span class="stat-label">Questões objetivas</span><span class="stat-value">' + s.totalObj + "</span></div>" +
      '<div class="stat stat-ok"><span class="stat-label">Acertos</span><span class="stat-value">' + s.acertos + "</span></div>" +
      '<div class="stat stat-bad"><span class="stat-label">Erros</span><span class="stat-value">' + s.erros + "</span></div>" +
      '<div class="stat"><span class="stat-label">Aproveitamento</span><div class="ring" style="--p:' + s.aproveitamento + '"><span>' + s.aproveitamento + "%</span></div></div>" +
      '<div class="stat"><span class="stat-label">Discursivas respondidas</span><span class="stat-value">' + s.disc + "/" + s.totalDisc + "</span></div>" +
      "</div>" +
      '<p class="result-message">' + mensagemDesempenho(s) + "</p>" +
      '<div class="result-actions">' +
      (s.respObj ? '<button type="button" class="btn btn-soft" data-action="refazer">↺ Refazer objetivas</button>' : "") +
      '<a class="btn btn-ghost" href="' + linkCat(cat) + '">☰ Lista de aulas</a>' +
      proximo +
      "</div>";
  }

  function coracoes() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var box = document.createElement("div");
    box.className = "hearts";
    box.setAttribute("aria-hidden", "true");
    var simbolos = ["♡", "♥", "✦", "♡"];
    for (var i = 0; i < 22; i++) {
      var h = document.createElement("span");
      h.textContent = simbolos[i % simbolos.length];
      h.style.left = Math.random() * 100 + "vw";
      h.style.animationDelay = Math.random() * 0.9 + "s";
      h.style.fontSize = 18 + Math.random() * 22 + "px";
      box.appendChild(h);
    }
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 4200);
  }

  function render404() {
    document.title = "Página não encontrada · " + NOME_SITE;
    app.innerHTML = '<div class="view empty"><div class="big" aria-hidden="true">📺</div>' +
      "<h1>Fora do ar…</h1><p>Esse canal não existe. Que tal voltar para a programação normal?</p>" +
      '<a class="btn btn-primary" href="#/">Voltar ao início</a></div>';
  }

  /* ---------------- simulado da área ---------------- */

  var SIM_QTD = 20;

  function chaveSim(cat) { return "simulado/" + cat.id; }

  function embaralhar(lista) {
    for (var i = lista.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = lista[i]; lista[i] = lista[j]; lista[j] = t;
    }
    return lista;
  }

  // sorteia questões de TODAS as aulas, distribuindo igualmente entre elas
  function sortearSimulado(cat) {
    var pools = cat.aulas.map(function (a) {
      return embaralhar(a.objetivas.map(function (_, qi) { return { aula: a.id, qi: qi }; }));
    });
    var disponiveis = pools.reduce(function (s, p) { return s + p.length; }, 0);
    var total = Math.min(SIM_QTD, disponiveis), sel = [], k = 0;
    while (sel.length < total) {
      var pool = pools[k % pools.length];
      if (pool.length) sel.push(pool.shift());
      k++;
    }
    return { questoes: embaralhar(sel), respostas: {}, finalizado: false, inicio: Date.now() };
  }

  function questaoDoSimulado(cat, ref) {
    for (var ai = 0; ai < cat.aulas.length; ai++) {
      if (cat.aulas[ai].id === ref.aula) {
        var q = cat.aulas[ai].objetivas[ref.qi];
        return q ? { q: q, ai: ai, aula: cat.aulas[ai] } : null;
      }
    }
    return null;
  }

  // descarta simulados salvos que apontem para aulas/questões que não existem mais
  function simuladoValido(cat, sim) {
    return !!(sim && Array.isArray(sim.questoes) && sim.questoes.length &&
      sim.questoes.every(function (r) { return questaoDoSimulado(cat, r); }));
  }

  function lerSimulado(cat) {
    var sim = store[chaveSim(cat)];
    return simuladoValido(cat, sim) ? sim : null;
  }

  function statsSimulado(cat, sim) {
    var r = { total: sim.questoes.length, acertos: 0, erros: 0, branco: 0, respondidas: 0, porAula: {} };
    sim.questoes.forEach(function (ref, si) {
      var info = questaoDoSimulado(cat, ref);
      var pa = r.porAula[info.ai] || (r.porAula[info.ai] = { aula: info.aula, ai: info.ai, total: 0, acertos: 0 });
      pa.total++;
      var resp = sim.respostas[si];
      if (resp === undefined) { r.branco++; return; }
      r.respondidas++;
      if (resp === info.q.correta) { r.acertos++; pa.acertos++; } else r.erros++;
    });
    r.pct = r.total ? Math.round((r.acertos / r.total) * 100) : 0;
    return r;
  }

  function bannerSimulado(cat) {
    var sim = lerSimulado(cat), status;
    if (!sim) status = "Ainda não feito";
    else if (sim.finalizado) {
      var s = statsSimulado(cat, sim);
      status = "Último resultado: <strong>" + s.pct + "%</strong> (" + s.acertos + "/" + s.total + ")";
    } else status = "Em andamento: " + Object.keys(sim.respostas).length + "/" + sim.questoes.length + " respondidas";
    var qtd = Math.min(SIM_QTD, cat.aulas.reduce(function (t, a) { return t + a.objetivas.length; }, 0));
    return '<a class="sim-banner" href="' + linkSimulado(cat) + '">' +
      '<span class="sim-banner-icon" aria-hidden="true">🧪</span>' +
      '<div class="sim-banner-body"><h2>Simulado de ' + esc(cat.nome) + "</h2>" +
      "<p>" + qtd + " questões sorteadas de todas as " + cat.aulas.length + " aulas da área, com correção no final.</p>" +
      "<small>" + status + "</small></div>" +
      '<span class="btn btn-primary">' + (sim && !sim.finalizado ? "Continuar" : sim ? "Ver resultado" : "Fazer simulado") + " →</span></a>";
  }

  function simQuestaoHTML(cat, sim, ref, si) {
    var info = questaoDoSimulado(cat, ref);
    var resp = sim.respostas[si];
    var ops = info.q.alternativas.map(function (alt, oi) {
      var sel = !sim.finalizado && resp === oi;
      return '<button type="button" class="option' + (sel ? " is-selected" : "") + '" data-oi="' + oi + '" aria-pressed="' + sel + '">' +
        '<span class="letter">' + LETRAS[oi] + "</span>" +
        '<span class="opt-text">' + alt + "</span>" +
        '<span class="opt-icon" aria-hidden="true"></span></button>';
    }).join("");
    return '<article class="q-card sim-card" data-si="' + si + '">' +
      '<div class="q-head"><span class="q-num">Questão ' + pad(si + 1) + "</span>" +
      (sim.finalizado ? '<span class="sim-tag">Aula ' + pad(info.ai + 1) + " · " + esc(info.aula.titulo) + "</span>" : "") +
      '<span class="q-badge" aria-live="polite"></span></div>' +
      '<p class="q-text">' + info.q.pergunta + "</p>" +
      '<div class="options" role="group" aria-label="Alternativas da questão ' + (si + 1) + '">' + ops + "</div>" +
      '<div class="feedback" hidden aria-live="polite"></div>' +
      "</article>";
  }

  function marcarEmBranco(card, q) {
    card.querySelectorAll(".option").forEach(function (b, oi) {
      b.disabled = true;
      b.style.animation = "none";
      if (oi === q.correta) { b.classList.add("is-answer"); b.querySelector(".opt-icon").textContent = "✓"; }
      else b.classList.add("is-dim");
    });
    card.classList.add("card-bad");
    var badge = card.querySelector(".q-badge");
    badge.textContent = "— em branco";
    badge.className = "q-badge bad";
    var fb = card.querySelector(".feedback");
    fb.className = "feedback feedback-bad";
    fb.innerHTML = '<div class="fb-title">Questão em branco. A alternativa correta é a ' + LETRAS[q.correta] + ".</div>" +
      '<div class="fb-sub ok">Por que a alternativa ' + LETRAS[q.correta] + " está correta</div><p>" + q.explicacao + "</p>";
    fb.hidden = false;
  }

  function renderSimulado(cat) {
    var sim = lerSimulado(cat);
    if (!sim) { sim = sortearSimulado(cat); store[chaveSim(cat)] = sim; salvar(); }
    atual = { cat: cat, simulado: sim };
    document.title = "Simulado de " + cat.nome + " · Plataforma de Revisão";

    app.innerHTML =
      '<div class="view">' +
      '<nav class="crumbs" aria-label="Você está em"><a href="#/">Início</a><span aria-hidden="true">/</span>' +
      '<a href="' + linkCat(cat) + '">' + esc(cat.nome) + '</a><span aria-hidden="true">/</span><span>Simulado</span></nav>' +
      '<header class="lesson-hero">' +
      '<span class="kicker">🧪 Simulado · ' + esc(cat.nome) + "</span>" +
      "<h1>Simulado de " + esc(cat.nome) + "</h1>" +
      "<p>" + sim.questoes.length + " questões sorteadas de todas as " + cat.aulas.length + " aulas da área. " +
      (sim.finalizado ? "Veja a correção de cada questão e o seu desempenho por aula." : "Responda todas e clique em <strong>Finalizar simulado</strong> para ver a correção.") + "</p>" +
      '<div class="lesson-meta"><span>📝 ' + sim.questoes.length + " questões</span><span>📚 " + cat.aulas.length + " aulas</span>" +
      "<span>⏱ ~" + Math.round(sim.questoes.length * 1.5) + " min</span></div>" +
      "</header>" +
      '<nav class="lesson-nav" aria-label="Navegação do simulado">' +
      '<a class="btn btn-ghost" href="' + linkCat(cat) + '">← Lista de aulas</a><span></span>' +
      '<button type="button" class="btn btn-soft" data-action="sim-novo">↻ Novo simulado</button></nav>' +
      '<section class="panel" id="sim-questoes"><h2 class="section-head"><span aria-hidden="true">📝</span> Questões</h2>' +
      '<p class="section-sub">' + (sim.finalizado
        ? "Simulado finalizado. Cada questão mostra a aula de origem e a explicação."
        : "Clique na alternativa que você acha correta. Você pode trocar a resposta até finalizar; a correção só aparece no final.") + "</p>" +
      '<div class="q-list">' + sim.questoes.map(function (ref, si) { return simQuestaoHTML(cat, sim, ref, si); }).join("") + "</div></section>" +
      '<section class="panel" id="sim-resultado"><h2 class="section-head"><span aria-hidden="true">📊</span> ' + (sim.finalizado ? "Resultado do simulado" : "Finalizar") + "</h2>" +
      '<div id="sim-painel"></div></section>' +
      "</div>";

    if (sim.finalizado) {
      app.querySelectorAll(".sim-card").forEach(function (card) {
        var si = +card.dataset.si, q = questaoDoSimulado(cat, sim.questoes[si]).q;
        if (sim.respostas[si] === undefined) marcarEmBranco(card, q);
        else marcarQuestao(card, q, sim.respostas[si], false);
      });
    }
    renderPainelSimulado();
  }

  function renderPainelSimulado() {
    var el = document.getElementById("sim-painel");
    if (!el || !atual || !atual.simulado) return;
    var cat = atual.cat, sim = atual.simulado, s = statsSimulado(cat, sim);
    var barra = '<div class="progress-box"><div class="progress-row"><strong>Respondidas: ' + s.respondidas + "/" + s.total + "</strong>" +
      (s.branco ? '<span class="progress-counters"><span class="pc pc-pct">' + s.branco + " em branco</span></span>" : "") + "</div>" +
      '<div class="bar bar-lg" role="progressbar" aria-label="Questões respondidas" aria-valuemin="0" aria-valuemax="' + s.total + '" aria-valuenow="' + s.respondidas + '">' +
      '<span style="width:' + (s.total ? (s.respondidas / s.total) * 100 : 0) + '%"></span></div></div>';

    if (!sim.finalizado) {
      el.innerHTML = barra +
        '<p class="result-hint">' + (s.branco
          ? "Faltam <strong>" + s.branco + "</strong> questões. Você pode finalizar mesmo assim; as questões em branco contam como erro."
          : "Tudo respondido! Clique em finalizar para ver a correção.") + "</p>" +
        '<div class="result-actions"><button type="button" class="btn btn-primary" data-action="sim-finalizar">✓ Finalizar simulado</button></div>';
      return;
    }

    var linhas = Object.keys(s.porAula).map(function (k) { return s.porAula[k]; })
      .sort(function (a, b) { return a.ai - b.ai; })
      .map(function (pa) {
        var pct = Math.round((pa.acertos / pa.total) * 100);
        var fraca = pct < 60;
        return '<a class="sim-row' + (fraca ? " is-weak" : "") + '" href="' + linkAula(cat, pa.ai) + '">' +
          '<span class="sim-row-name"><b>Aula ' + pad(pa.ai + 1) + "</b> " + esc(pa.aula.titulo) + "</span>" +
          '<span class="sim-row-score">' + pa.acertos + "/" + pa.total + "</span>" +
          '<span class="bar" aria-hidden="true"><span style="width:' + pct + '%"></span></span>' +
          '<span class="sim-row-tag">' + (fraca ? "Revisar →" : "Ver aula →") + "</span></a>";
      }).join("");

    var prox = CATS[CATS.indexOf(cat) + 1];
    el.innerHTML = barra +
      '<div class="result-grid">' +
      '<div class="stat"><span class="stat-label">Questões</span><span class="stat-value">' + s.total + "</span></div>" +
      '<div class="stat stat-ok"><span class="stat-label">Acertos</span><span class="stat-value">' + s.acertos + "</span></div>" +
      '<div class="stat stat-bad"><span class="stat-label">Erros</span><span class="stat-value">' + s.erros + "</span></div>" +
      '<div class="stat"><span class="stat-label">Aproveitamento</span><div class="ring" style="--p:' + s.pct + '"><span>' + s.pct + "%</span></div></div>" +
      '<div class="stat"><span class="stat-label">Em branco</span><span class="stat-value">' + s.branco + "</span></div>" +
      "</div>" +
      '<p class="result-message">' + mensagemDesempenho({ respObj: s.total, aproveitamento: s.pct }) + "</p>" +
      '<h3 class="sim-sub">Desempenho por aula</h3>' +
      '<div class="sim-table">' + linhas + "</div>" +
      '<div class="result-actions">' +
      '<button type="button" class="btn btn-soft" data-action="sim-novo">↻ Novo simulado</button>' +
      '<a class="btn btn-ghost" href="' + linkCat(cat) + '">☰ Lista de aulas</a>' +
      (prox && prox.aulas.length
        ? '<a class="btn btn-primary" href="' + linkCat(prox) + '">Próxima área: ' + esc(prox.nome) + " →</a>"
        : '<a class="btn btn-primary" href="#/">Voltar ao início</a>') +
      "</div>";
  }


  /* ---------------- confirmação dentro da página ---------------- */
  // Substitui window.confirm(), que alguns ambientes (como páginas incorporadas) bloqueiam.

  function confirmar(mensagem, textoOk, aoConfirmar) {
    var anterior = document.activeElement;
    var ov = document.createElement("div");
    ov.className = "confirm-overlay";
    ov.innerHTML = '<div class="confirm-box" role="alertdialog" aria-modal="true" aria-labelledby="confirm-msg">' +
      '<p id="confirm-msg"></p><div class="confirm-actions">' +
      '<button type="button" class="btn btn-ghost" data-c="nao">Cancelar</button>' +
      '<button type="button" class="btn btn-primary" data-c="sim"></button></div></div>';
    ov.querySelector("#confirm-msg").textContent = mensagem;
    ov.querySelector('[data-c="sim"]').textContent = textoOk;
    function fechar() {
      ov.remove();
      document.removeEventListener("keydown", teclado);
      if (anterior && anterior.focus && document.contains(anterior)) anterior.focus();
    }
    function teclado(e) { if (e.key === "Escape") fechar(); }
    ov.addEventListener("click", function (e) {
      var b = e.target.closest("[data-c]");
      if (e.target === ov || (b && b.dataset.c === "nao")) fechar();
      else if (b) { fechar(); aoConfirmar(); }
    });
    document.addEventListener("keydown", teclado);
    document.body.appendChild(ov);
    ov.querySelector('[data-c="sim"]').focus();
  }

  /* ---------------- eventos (delegação) ---------------- */

  app.addEventListener("click", function (ev) {
    var alvo = ev.target;

    var opt = alvo.closest(".option");
    if (opt && atual && atual.simulado && !opt.disabled) {
      var scard = opt.closest(".sim-card");
      var simAt = atual.simulado;
      if (!scard || simAt.finalizado) return;
      var si = +scard.dataset.si, escolhida = +opt.dataset.oi;
      simAt.respostas[si] = escolhida;
      salvar();
      scard.querySelectorAll(".option").forEach(function (b, oi) {
        b.classList.toggle("is-selected", oi === escolhida);
        b.setAttribute("aria-pressed", oi === escolhida);
      });
      renderPainelSimulado();
      return;
    }
    if (opt && atual && atual.aula && !opt.disabled) {
      var card = opt.closest(".q-card");
      var qi = +card.dataset.qi;
      var st = estado(atual.cat, atual.aula);
      if (st.obj[qi] !== undefined) return;
      var antes = stats(atual.cat, atual.aula);
      st.obj[qi] = +opt.dataset.oi;
      salvar();
      marcarQuestao(card, atual.aula.objetivas[qi], st.obj[qi], true);
      var depois = stats(atual.cat, atual.aula);
      atualizarProgresso(antes.respondidas < antes.total && depois.respondidas === depois.total);
      return;
    }

    var send = alvo.closest(".disc-send");
    if (send && atual) {
      var dcard = send.closest(".disc-card");
      var di = +dcard.dataset.di;
      var ta = dcard.querySelector("textarea");
      var texto = ta.value.trim();
      var status = dcard.querySelector(".disc-status");
      if (!texto) {
        status.textContent = "Escreva sua resposta antes de enviar.";
        status.className = "disc-status warn";
        ta.classList.remove("shake");
        void ta.offsetWidth;
        ta.classList.add("shake");
        ta.focus();
        return;
      }
      var st2 = estado(atual.cat, atual.aula);
      var antes2 = stats(atual.cat, atual.aula);
      st2.disc[di] = { texto: texto, data: Date.now() };
      salvar();
      marcarDiscursiva(dcard, st2.disc[di]);
      var depois2 = stats(atual.cat, atual.aula);
      atualizarProgresso(antes2.respondidas < antes2.total && depois2.respondidas === depois2.total);
      return;
    }

    var jump = alvo.closest("[data-jump]");
    if (jump) {
      var sec = document.getElementById(jump.dataset.jump);
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    var acao = alvo.closest("[data-action]");
    if (acao) {
      if (acao.dataset.action === "ver-entrega") {
        var ent = document.getElementById("entrega");
        if (ent) ent.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (acao.dataset.action === "ver-areas") {
        var areas = document.getElementById("areas");
        if (areas) areas.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (acao.dataset.action === "sim-finalizar" && atual && atual.simulado) {
        var simF = atual.simulado, catF = atual.cat;
        var finalizar = function () {
          simF.finalizado = true;
          simF.fim = Date.now();
          salvar();
          renderSimulado(catF);
          var res = document.getElementById("sim-resultado");
          if (res) res.scrollIntoView({ behavior: "smooth", block: "start" });
          coracoes();
        };
        var sf = statsSimulado(catF, simF);
        if (sf.branco) confirmar("Você deixou " + sf.branco + (sf.branco === 1 ? " questão" : " questões") + " em branco. Elas contam como erro. Finalizar mesmo assim?", "Finalizar", finalizar);
        else finalizar();
      } else if (acao.dataset.action === "sim-novo" && atual && atual.simulado) {
        var simN = atual.simulado, catN = atual.cat;
        var novo = function () {
          store[chaveSim(catN)] = sortearSimulado(catN);
          salvar();
          renderSimulado(catN);
          window.scrollTo(0, 0);
        };
        if (!simN.finalizado && Object.keys(simN.respostas).length) confirmar("Começar um novo simulado? As respostas do atual serão descartadas.", "Começar novo", novo);
        else novo();
      } else if (acao.dataset.action === "refazer" && atual && atual.aula) {
        var catR = atual.cat, aulaR = atual.aula, idxR = atual.idx;
        confirmar("Apagar suas respostas objetivas desta aula e tentar de novo? As discursivas continuam salvas.", "Refazer", function () {
          estado(catR, aulaR).obj = {};
          salvar();
          renderAula(catR, idxR);
          observarSecoes();
          var obj = document.getElementById("sec-objetivas");
          if (obj) obj.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  });

  app.addEventListener("change", function (ev) {
    if (ev.target.matches && ev.target.matches("[data-entrega]")) atualizarEntrega(ev.target);
  });

  app.addEventListener("input", function (ev) {
    if (ev.target.tagName !== "TEXTAREA" || !atual || !atual.aula) return;
    var card = ev.target.closest(".disc-card");
    contarCaracteres(card);
    var salvo = lerEstado(atual.cat, atual.aula).disc[+card.dataset.di];
    var status = card.querySelector(".disc-status");
    if (salvo && salvo.texto) {
      if (ev.target.value.trim() !== salvo.texto) {
        status.textContent = "Alterações não enviadas";
        status.className = "disc-status pending";
      } else {
        marcarDiscursiva(card, salvo);
      }
    } else if (status.classList.contains("warn")) {
      status.textContent = "";
      status.className = "disc-status";
    }
  });

  // destaca no atalho a seção visível
  var observer = null;
  function observarSecoes() {
    if (observer) observer.disconnect();
    if (!atual || !("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        app.querySelectorAll(".jump button").forEach(function (b) {
          b.classList.toggle("is-current", b.dataset.jump === en.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    app.querySelectorAll(".panel[id]").forEach(function (s) { observer.observe(s); });
  }

  /* ---------------- tema claro / escuro ---------------- */

  var TEMA_KEY = "plataforma-tema";
  var btnTema = document.getElementById("theme-toggle");
  function aplicarTema(tema) {
    document.documentElement.setAttribute("data-theme", tema);
    if (btnTema) {
      var rotulo = tema === "dark" ? "Mudar para o tema claro" : "Mudar para o tema escuro";
      btnTema.setAttribute("aria-label", rotulo);
      btnTema.setAttribute("title", rotulo);
    }
  }
  aplicarTema(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
  if (btnTema) btnTema.addEventListener("click", function () {
    var novo = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    aplicarTema(novo);
    try { localStorage.setItem(TEMA_KEY, novo); } catch (e) { /* sem armazenamento: vale só nesta visita */ }
  });

  window.addEventListener("hashchange", function () { render(); observarSecoes(); });
  window.addEventListener("resize", ajustarHeader);
  window.addEventListener("load", ajustarHeader);

  render();
  observarSecoes();
})();
