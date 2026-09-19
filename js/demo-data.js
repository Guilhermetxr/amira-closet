/* ============================================================
   DADOS DE DEMONSTRAÇÃO
   Usados só quando o Firebase ainda não foi configurado, para que
   o site já abra com conteúdo. Assim que a loja for populada pelo
   painel, esses dados deixam de aparecer.
   As imagens são desenhadas em SVG (nenhum arquivo externo).
   ============================================================ */

/* silhuetas 400x500 — cada peça é um único contorno preenchido */
const FORMAS = {
  vestido: {
    d: "M170 96 L184 96 L190 168 Q200 182 210 168 L216 96 L230 96 L238 176 Q246 206 236 238 Q264 306 302 412 Q200 432 98 412 Q136 306 164 238 Q154 206 162 176 Z",
    linhas: "M164 238 L236 238",
  },
  blusa: {
    d: "M150 120 L92 156 L118 220 L150 204 L150 390 L250 390 L250 204 L282 220 L308 156 L250 120 Q236 152 200 152 Q164 152 150 120 Z",
    linhas: "M200 152 L200 240",
  },
  short: {
    d: "M128 150 L272 150 L290 340 L213 340 L200 240 L187 340 L110 340 Z",
    linhas: "M128 176 L272 176",
  },
  calca: {
    d: "M138 108 L262 108 L286 405 L216 405 L200 215 L184 405 L114 405 Z",
    linhas: "M138 134 L262 134",
  },
  conjunto: {
    d: "M150 96 L100 128 L120 176 L146 164 L146 226 L254 226 L254 164 L280 176 L300 128 L250 96 Q236 124 200 124 Q164 124 150 96 Z M138 262 L262 262 L278 392 L213 392 L200 322 L187 392 L122 392 Z",
    linhas: "M138 288 L262 288",
  },
  bolsa: {
    d: "M108 205 L292 205 L308 388 L92 388 Z",
    linhas: "M100 262 L300 262",
    alca: "M150 205 Q150 118 200 118 Q250 118 250 205",
  },
};

/** Gera a imagem de uma peça (data URI) para os produtos de exemplo. */
function peca(tipo, cor, detalhe = "") {
  const f = FORMAS[tipo];
  /* estampa: bolinhas/flores espalhadas, recortadas pelo contorno da peça */
  const pontos = [
    [150, 150, 9], [215, 130, 6], [262, 170, 8], [175, 215, 7], [235, 250, 10], [140, 290, 8],
    [205, 300, 6], [265, 330, 9], [165, 360, 7], [230, 380, 6], [120, 175, 6], [285, 250, 7],
  ];
  const estampa = detalhe
    ? `<g clip-path="url(#peca)" fill="${detalhe}">${pontos
        .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" opacity=".85"/><circle cx="${x + r * 1.7}" cy="${y + r * 0.6}" r="${r * 0.45}" opacity=".6"/>`)
        .join("")}</g>`
    : "";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f7ecdd"/><stop offset="1" stop-color="#eddcc6"/>
      </linearGradient>
      <clipPath id="peca"><path d="${f.d}"/></clipPath>
    </defs>
    <rect width="400" height="500" fill="url(#bg)"/>
    <circle cx="200" cy="470" r="150" fill="#dfaf6a" opacity=".16"/>
    ${f.alca ? `<path d="${f.alca}" fill="none" stroke="${cor}" stroke-width="10" stroke-linecap="round"/>` : ""}
    <path d="${f.d}" fill="${cor}" fill-rule="evenodd" stroke="#00000018" stroke-width="2" stroke-linejoin="round"/>
    ${estampa}
    <path d="${f.linhas}" stroke="#ffffff55" stroke-width="3" fill="none"/>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

export const CATEGORIAS_DEMO = [
  { id: "vestidos", nome: "Vestidos", slug: "vestidos", ordem: 1, ativa: true },
  { id: "blusas", nome: "Blusas", slug: "blusas", ordem: 2, ativa: true },
  { id: "shorts", nome: "Shorts", slug: "shorts", ordem: 3, ativa: true },
  { id: "calcas", nome: "Calças", slug: "calcas", ordem: 4, ativa: true },
  { id: "conjuntos", nome: "Conjuntos", slug: "conjuntos", ordem: 5, ativa: true },
  { id: "acessorios", nome: "Acessórios", slug: "acessorios", ordem: 6, ativa: true },
];

/* paleta da marca: terracota, rosa queimado, verde oliva, bege, dourado */
const TERRA = "#cc6b3e", ROSA = "#d98078", OLIVA = "#706432", BEGE = "#d9bfa0", OURO = "#dfaf6a";
const PX = ["P", "M", "G", "GG"];
const NUM = ["36", "38", "40", "42", "44"];

const base = {
  ativo: true,
  tamanhos: PX,
  descricao:
    "Tecido leve e confortável, com caimento que valoriza.\nTire dúvidas de tamanho e medidas pelo WhatsApp.",
};

let n = 0;
const p = (o) => ({ id: "demo" + ++n, ordem: n, criadoEm: Date.now() - n * 6e5, ...base, ...o });

export const PRODUTOS_DEMO = [
  p({ nome: "Vestido Midi Floral Tropical", categoria: "vestidos", preco: 129.9, precoAntigo: 189.9, selo: "novidade", thumb: peca("vestido", TERRA, OURO) }),
  p({ nome: "Vestido Longo Verde Oliva", categoria: "vestidos", preco: 139.9, precoAntigo: 0, tamanhos: ["P", "M", "G"], thumb: peca("vestido", OLIVA) }),
  p({ nome: "Vestido Curto Rosa Queimado", categoria: "vestidos", preco: 99.9, precoAntigo: 149.9, thumb: peca("vestido", ROSA) }),
  p({ nome: "Vestido Alcinha Estampado", categoria: "vestidos", preco: 119.9, precoAntigo: 0, selo: "maisvendido", thumb: peca("vestido", "#b8552a", ROSA) }),

  p({ nome: "Blusa Amarração Bege", categoria: "blusas", preco: 69.9, precoAntigo: 0, thumb: peca("blusa", BEGE) }),
  p({ nome: "Blusa Cropped Rosa", categoria: "blusas", preco: 54.9, precoAntigo: 79.9, selo: "novidade", thumb: peca("blusa", ROSA) }),
  p({ nome: "Camisa Linho Verde Oliva", categoria: "blusas", preco: 89.9, precoAntigo: 0, thumb: peca("blusa", OLIVA) }),
  p({ nome: "Blusa Regata Terracota", categoria: "blusas", preco: 49.9, precoAntigo: 69.9, selo: "ultimas", tamanhos: ["P", "M"], thumb: peca("blusa", TERRA) }),

  p({ nome: "Short Alfaiataria Bege", categoria: "shorts", preco: 79.9, precoAntigo: 0, tamanhos: NUM, thumb: peca("short", BEGE) }),
  p({ nome: "Short Saia Floral", categoria: "shorts", preco: 74.9, precoAntigo: 109.9, tamanhos: NUM, thumb: peca("short", TERRA, OURO) }),
  p({ nome: "Short Linho Verde Oliva", categoria: "shorts", preco: 84.9, precoAntigo: 0, tamanhos: NUM, thumb: peca("short", OLIVA) }),

  p({ nome: "Calça Pantalona Bege", categoria: "calcas", preco: 119.9, precoAntigo: 169.9, selo: "maisvendido", tamanhos: NUM, thumb: peca("calca", BEGE) }),
  p({ nome: "Calça Wide Leg Verde Oliva", categoria: "calcas", preco: 129.9, precoAntigo: 0, tamanhos: NUM, thumb: peca("calca", OLIVA) }),
  p({ nome: "Calça Reta Terracota", categoria: "calcas", preco: 124.9, precoAntigo: 0, tamanhos: NUM, thumb: peca("calca", TERRA) }),

  p({ nome: "Conjunto Cropped + Short Floral", categoria: "conjuntos", preco: 149.9, precoAntigo: 219.9, selo: "maisvendido", thumb: peca("conjunto", TERRA, OURO) }),
  p({ nome: "Conjunto Linho Bege", categoria: "conjuntos", preco: 169.9, precoAntigo: 0, thumb: peca("conjunto", BEGE) }),
  p({ nome: "Conjunto Verão Rosa Queimado", categoria: "conjuntos", preco: 99.9, precoAntigo: 139.9, selo: "novidade", thumb: peca("conjunto", ROSA) }),

  p({ nome: "Bolsa de Palha Bege", categoria: "acessorios", preco: 89.9, precoAntigo: 0, tamanhos: [], thumb: peca("bolsa", BEGE) }),
  p({ nome: "Bolsa Média Terracota", categoria: "acessorios", preco: 79.9, precoAntigo: 109.9, tamanhos: [], thumb: peca("bolsa", TERRA) }),
  p({ nome: "Bolsa Mini Verde Oliva", categoria: "acessorios", preco: 59.9, precoAntigo: 0, tamanhos: [], thumb: peca("bolsa", OLIVA) }),
];
