# Tokens de visual — Amira Closet

Identidade tirada do moodboard da marca (logo com sol dourado, paleta
terracota / rosa queimado / verde oliva / bege / dourado, tom "leve, estilosa,
acessível"). Os tokens ficam em `:root` de `css/loja.css`; o painel
(`css/admin.css`) reaproveita os mesmos.

## Cores

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#faf3ea` | fundo geral (creme quente, sem branco puro) |
| `--bg-2` | `#f2e6d6` | seções secundárias (rodapé, drawer) |
| `--surface` | `#fffcf8` | cards, inputs |
| `--surface-2` | `#efe0cc` | hover de superfície |
| `--line` / `--line-2` | `rgba(126,84,30,.16 / .30)` | bordas (marrom diluído) |
| `--txt` / `--txt-2` / `--txt-3` | `#3a2818` / `#6b5540` / `#82694f` | texto (marrom quente, nunca preto) |
| `--brand` | `#9a6214` | dourado do logo — botões, links, preço |
| `--brand-2` | `#7f4e0f` | hover e textos de apoio sobre o bege |
| `--accent` | `#b8552a` | terracota — selo de % OFF, destaque de palavra no título |
| `--terra` `--rosa` `--oliva` `--bege` `--dourado` | `#cc6b3e` `#d98078` `#706432` `#dabfa3` `#dfaf6a` | as 5 cores da paleta da marca (círculos de categoria, faixa de avisos) |
| `--wa` | `#25d366` | verde do WhatsApp (não muda com a marca) |

Contraste conferido (WCAG): texto claro sobre `--brand` 4,9:1; sobre `--oliva`
(faixa de avisos) 5,7:1; `--txt-3` sobre `--bg` 4,6:1.

## Tipografia

- **Cormorant Garamond** (`--serif`): títulos, nome da loja, hero. Lembra o "AMIRA" do logo.
- **Jost** (`--sans`): texto corrido, botões, preços, rótulos em caixa-alta espaçada.
- **La Belle Aurore** (`--script`): só a frasezinha manuscrita acima do título (estilo "Seu estilo, sua essência").

## Imagens

- `img/logo.png` — logo completa (sol + AMIRA + CLOSET), fundo transparente. Usada no login do painel.
- `img/sol.png` — só o sol. Header, favicon, marca d'água do hero.
- Ambas foram recortadas do moodboard e tiveram o fundo bege removido. Se a
  marca ganhar um arquivo vetorial (SVG), vale trocar — o recorte é de uma
  imagem JPEG, então em telas muito grandes pode aparecer um pouco suave.
- Fotos de produto: proporção **4:5** (retrato), como no feed do Instagram.

## Peças específicas de moda

- **Círculos de categoria** na home (estilo destaques do Instagram): ícone escolhido
  pelo nome da categoria (`iconeCategoria()` em `js/home.js`; sem correspondência usa o cabide).
- **Selo** na foto (Novidade / Mais vendido / Últimas peças): campo `selo` do produto,
  definido em `SELOS` (`js/db.js`). Substitui as "estrelinhas de qualidade" e a
  "embalagem para presente" da versão de bijuterias.
- **Tamanhos**: sugestões `PP–GG` e `36–46` no painel (`TAMANHOS_SUGERIDOS` em `js/admin.js`).

## Textos de exemplo a revisar

Em `js/config.js` (`CONFIG_PADRAO`) e `js/ui.js` (`perks`) há textos provisórios:
avisos da faixa, frase do hero, descrições da faixa de vantagens e o número de
WhatsApp (`5500000000000`). Depois que a dona salvar "Dados da loja" no painel,
o que estiver no Firestore passa a valer no lugar de `CONFIG_PADRAO`.
