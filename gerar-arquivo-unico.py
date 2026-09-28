"""
Gera publicar/index.html: o site inteiro (HTML + CSS + JS + aulas) em um único arquivo.
Útil para publicar no GitHub Pages subindo só um arquivo pelo navegador.

Uso:  python gerar-arquivo-unico.py
"""
import os
import re

RAIZ = os.path.dirname(os.path.abspath(__file__))


def ler(caminho):
    with open(os.path.join(RAIZ, caminho), encoding="utf-8") as f:
        return f.read()


html = ler("index.html")

# CSS externo -> <style> embutido
html = html.replace('<link rel="stylesheet" href="css/style.css">',
                    "<style>\n" + ler("css/style.css") + "\n</style>")


# <script src="..."></script> -> <script> embutido
def embutir(m):
    codigo = ler(m.group(1))
    if "</script" in codigo.lower():
        raise SystemExit("O arquivo " + m.group(1) + " contém '</script' e não pode ser embutido.")
    return "<script>\n/* " + m.group(1) + " */\n" + codigo + "\n</script>"


html, n = re.subn(r'<script src="([^"]+)"></script>', embutir, html)

os.makedirs(os.path.join(RAIZ, "publicar"), exist_ok=True)
destino = os.path.join(RAIZ, "publicar", "index.html")
with open(destino, "w", encoding="utf-8") as f:
    f.write(html)

print("Gerado:", destino, "| scripts embutidos:", n, "| tamanho: %.0f KB" % (len(html.encode("utf-8")) / 1024))

# Versão para publicar como página do claude.ai: a plataforma já coloca doctype, <html>, <head>,
# <body>, charset e viewport, então o arquivo leva só o conteúdo (título, estilos, página e scripts).
frag = html
for padrao in [r"<!doctype html>\s*", r"<html[^>]*>\s*", r"\s*</html>", r"<head>\s*", r"\s*</head>",
               r"<body>\s*", r"\s*</body>", r'<meta charset="utf-8">\s*', r'<meta name="viewport"[^>]*>\s*']:
    frag = re.sub(padrao, "", frag, count=1, flags=re.I)
frag = re.sub(r"<title>.*?</title>", "<title>Revisão Machine Learning</title>", frag, count=1)
destino2 = os.path.join(RAIZ, "publicar", "artifact.html")
with open(destino2, "w", encoding="utf-8") as f:
    f.write(frag)
print("Gerado:", destino2)
