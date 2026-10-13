"""Genera la comparacion antes/despues del G1.

Uso (desde la carpeta resultados/):
    pip install matplotlib pillow
    python generar_comparacion.py
"""
import os
import glob
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager
from matplotlib.lines import Line2D
from PIL import Image, ImageDraw, ImageFont

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(AQUI)

# ---------------------------------------------------------------- CURVAS
# Mismas 7 etapas y misma escala que la curva-inicial de Shantall.
# Escala: +1 Positiva | 0 Neutra | -1 Negativa | -2 Muy negativa
ETAPAS = ["1. Primera\nimpresión", "2. Carrito:\nprecio y envío", "3. Domicilio",
          "4. Datos de\nquien recibe", "5. Mapa", "6. Resumen\ndel pedido", "7. Pago"]
ANTES = [-0.4, 0.6, -0.8, -1.1, -1.3, -1.85, -1.6]
DESPUES = [0.4, 0.7, 0.4, 0.5, 0.6, 0.9, 0.8]
MOMENTOS_VERDAD = [1, 2, 5, 6]
NOTAS = [
    "Paleta sobria, sin banners ni\ncuenta regresiva; sin faltas",
    "Descuento explicado, envío gratis\nreal y sin urgencia falsa",
    "Provincia en lista; sin cédula ni\nfecha; errores que dicen qué corregir",
    "Cada dato con su motivo;\nbotón principal visible",
    "Pin centrado con guía;\n'Guardar dirección' principal",
    "Total fijo: envío y comisión\nvisibles desde el inicio",
    "Candado; casilla de ofertas\ndesmarcada; error claro sin cobro",
]


def dibujar(ax, serie, color):
    ax.plot(range(len(serie)), serie, "-", color=color, lw=4, zorder=3)
    for i, y in enumerate(serie):
        if i in MOMENTOS_VERDAD:
            ax.plot(i, y, marker="*", ms=24, color="#f5a623", mec="black", mew=1.2, zorder=4)
        else:
            ax.plot(i, y, marker="o", ms=11, color=color, mec="black", mew=1, zorder=4)


def base(titulo):
    fig, ax = plt.subplots(figsize=(14, 7.5), dpi=150)
    ax.axhspan(-2.6, 0, color="#fcf1f0")
    ax.axhspan(0, 2.3, color="#f1f7ef")
    ax.axhline(0, color="#777", lw=1.2, ls="--")
    ax.set_ylim(-2.6, 2.3)
    ax.set_xlim(-0.6, len(ETAPAS) - 0.4)
    ax.set_xticks(range(len(ETAPAS)))
    ax.set_xticklabels(ETAPAS, fontsize=11)
    ax.set_yticks([1, 0, -1, -2])
    ax.set_yticklabels(["Positiva", "Neutra", "Negativa", "Muy negativa"], fontsize=11)
    ax.set_xlabel("Etapas del recorrido (touchpoints)", fontsize=12)
    ax.set_ylabel("Emoción del usuario", fontsize=12)
    ax.set_title(titulo, fontsize=15, weight="bold")
    return fig, ax


def leyenda(ax, extra=None):
    h = [Line2D([], [], marker="*", ls="", ms=17, color="#f5a623", mec="black", label="Momento de verdad"),
         Line2D([], [], marker="o", ls="", ms=10, color="#555", mec="black", label="Touchpoint")]
    ax.legend(handles=(extra or []) + h, loc="lower right", fontsize=11, framealpha=0.95)


def curvas():
    fig, ax = base("Curva emocional nueva - Propuesta corregida de SuperOfertas Ecuador")
    dibujar(ax, DESPUES, "#0b5f6b")
    for i, (txt, y) in enumerate(zip(NOTAS, DESPUES)):
        ax.annotate(txt, xy=(i, y + 0.12), xytext=(i, 1.85 if i % 2 == 0 else 1.45),
                    ha="center", va="center", fontsize=9,
                    bbox=dict(boxstyle="round,pad=0.35", fc="white", ec="#777"),
                    arrowprops=dict(arrowstyle="-", color="#777"), zorder=2)
    leyenda(ax)
    fig.tight_layout()
    fig.savefig(os.path.join(AQUI, "curva-despues.png"))
    plt.close(fig)

    fig, ax = base("Comparación de curvas emocionales: antes vs después")
    dibujar(ax, ANTES, "#a12a2a")
    dibujar(ax, DESPUES, "#0b5f6b")
    for i in range(len(ETAPAS)):
        ax.annotate("", xy=(i, DESPUES[i] - 0.1), xytext=(i, ANTES[i] + 0.1),
                    arrowprops=dict(arrowstyle="->", color="#8b97a5", lw=1, ls="--"), zorder=2)
    leyenda(ax, [Line2D([], [], color="#a12a2a", lw=4, label="Antes (SuperOfertas original)"),
                 Line2D([], [], color="#0b5f6b", lw=4, label="Después (propuesta corregida)")])
    fig.tight_layout()
    fig.savefig(os.path.join(AQUI, "comparacion-curvas.png"))
    plt.close(fig)
    print("OK curvas")


# ------------------------------------------------------- CAPTURAS LADO A LADO
ORIGINAL = os.path.join(RAIZ, "prototipos", "original")
PROPUESTA = os.path.join(RAIZ, "prototipos", "propuesta")
# (nombre de salida, prefijo de la captura B del original, prefijo de la propuesta)
PARES = [
    ("1-carrito",        "B-1-", "propuesta-1-"),
    ("2-domicilio",      "B-2-", "propuesta-2-"),
    ("3-datos-receptor", "B-3-", "propuesta-2-"),
    ("4-mapa",           "B-4-", "propuesta-3-"),
    ("5-pago",           "B-5-", "propuesta-4-"),
]


def buscar(carpeta, prefijo):
    r = sorted(glob.glob(os.path.join(carpeta, prefijo + "*")))
    return r[0] if r else None


def fuente(tam):
    try:
        return ImageFont.truetype(font_manager.findfont("DejaVu Sans:bold"), tam)
    except Exception:
        return ImageFont.load_default()


def lado_a_lado():
    salida = os.path.join(AQUI, "capturas-lado-a-lado")
    os.makedirs(salida, exist_ok=True)
    altura, banda, margen = 900, 70, 24
    hechos = 0
    for nombre, pref_a, pref_d in PARES:
        pa, pd = buscar(ORIGINAL, pref_a), buscar(PROPUESTA, pref_d)
        if not (pa and pd):
            print("FALTA ->", pref_a if not pa else pref_d)
            continue
        imgs = []
        for p in (pa, pd):
            im = Image.open(p).convert("RGB")
            imgs.append(im.resize((int(im.width * altura / im.height), altura)))
        w = imgs[0].width + imgs[1].width + margen * 3
        lienzo = Image.new("RGB", (w, altura + banda + margen * 2), "#f6f7f9")
        d = ImageDraw.Draw(lienzo)
        x = margen
        for im, rot, col in ((imgs[0], "ANTES", "#a12a2a"), (imgs[1], "DESPUÉS", "#0b5f6b")):
            d.rectangle([x, margen, x + im.width, margen + banda - 10], fill=col)
            d.text((x + 16, margen + 16), rot, font=fuente(28), fill="white")
            lienzo.paste(im, (x, margen + banda))
            x += im.width + margen
        lienzo.save(os.path.join(salida, nombre + ".png"))
        hechos += 1
    print("OK capturas lado a lado:", hechos, "de", len(PARES))


if __name__ == "__main__":
    curvas()
    lado_a_lado()