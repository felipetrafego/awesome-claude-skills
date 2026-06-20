# Casa de Origem

Galeria digital premium e cinematográfica para uma marca de quadros pintados à
mão, nascida em **Belém do Pará**, no coração da Amazônia brasileira.

> Arte amazônica e brasileira em obras de presença, memória e exclusividade.
> *Art from the Amazon · Curated in Belém · Collected beyond borders.*

Site estático, sem build e sem dependências — HTML, CSS e um arquivo JS.

## Como visualizar

Abra `index.html` no navegador, ou rode um servidor local:

```bash
cd casa-de-origem
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Estrutura

| Arquivo | Tela |
|---|---|
| `index.html` | Home cinematográfica (hero, manifesto, destaques, origem, coleções, exclusividade, CTA) |
| `acervo.html` | Acervo / Coleções com filtros por coleção e status |
| `obra.html` | Página individual da obra (leitura curatorial, especificações, ambiente) |
| `sobre.html` | Sobre a Casa / Curadoria |
| `amazonia.html` | Amazônia & Origem (storytelling de Belém) |
| `contato.html` | Contato / Reserva / Private Inquiry |
| `journal.html` | Editorial / Journal |
| `international.html` | International collectors (versão em inglês) |
| `assets/css/style.css` | Sistema visual completo (paleta, tipografia, layout, animações) |
| `assets/js/main.js` | Navbar, menu mobile, reveal no scroll, parallax leve, filtros, form demo |
| `assets/img/*.svg` | **Placeholders** painterly gerados na paleta da marca |

## Identidade

**Paleta**

| Cor | Hex | Uso |
|---|---|---|
| Preto carvão | `#0D0F0E` | fundo / profundidade |
| Marfim envelhecido | `#F2EBDD` | texto / acervo / tela |
| Verde amazônico | `#1D2B24` | natureza |
| Azul rio | `#254A55` | água / silêncio |
| Dourado queimado | `#B08A4A` / `#C9A968` | luz / moldura / detalhes |
| Barro / terracota | `#7A4E2D` | origem / matéria |

**Tipografia** — Cormorant Garamond (títulos editoriais) + Inter (texto), via Google Fonts.

## Substituindo os placeholders por obras reais

As imagens em `assets/img/` são SVGs atmosféricos gerados na paleta da marca,
para o site nascer apresentável. Para colocar as obras de verdade:

1. Fotografe cada quadro em alta resolução (proporção **4:5** funciona melhor no grid).
2. Salve em `assets/img/` (ex.: `obra-lago-garcas.jpg`).
3. Troque o `src` no HTML — ex.: `src="assets/img/obra-lago-garcas.svg"` → `.jpg`.
4. Para o hero, um `<video>` de água/folhagem pode substituir o `<img class="scene">` em `.hero__media`.

## Próximos passos sugeridos

- Conectar o formulário a um backend/serviço (Formspree, Resend, etc.) — hoje está em modo demonstração.
- Trocar número de WhatsApp (`wa.me/5591000000000`) e e-mail (`contato@casadeorigem.art`).
- Adicionar segunda língua completa (PT/EN) se o público internacional crescer.
- Conteúdos reais no Journal para SEO e autoridade.
