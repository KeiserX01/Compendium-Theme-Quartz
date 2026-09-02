/**
 * Codex Aeternum — Theme override plugin (Quartz 5)
 * --------------------------------------------------------------
 * Inyecta un bloque CSS inline que sobreescribe la paleta y la
 * tipografía del theme @quartz-themes/core (its-theme / ttrpg-dnd).
 *
 * ¿Por qué un transformer y no custom.scss?
 * El theme del core se inyecta vía externalResources() como <link>
 * dentro del <head>. custom.scss se compila dentro del bundle
 * principal que se carga ANTES de esos <link>, por lo tanto el
 * theme siempre ganaba al cascade.
 *
 * Este plugin usa externalResources() con inline: true, que
 * produce un <style> tag. Los <style> inline van después de los
 * <link> en el <head> y siempre ganan al cascade para la misma
 * especificidad de selector.
 *
 * Como ordenamos con `order: 999`, este plugin se procesa último
 * entre los transformers, asegurando que su CSS quede al final.
 */

import { QuartzTransformerPluginInstance } from "@quartz-community/types"

const CODEX_CSS = `
/* ============================================================
   CODEX AETERNUM — Overrides de paleta y tipografía
   Inyectado por el plugin codex-aeternum-theme.
   Estas reglas sobreescriben el theme its-theme/ttrpg-dnd
   manteniendo la misma especificidad (:root:root[saved-theme=])
   pero cargándose al final del cascade.
   ============================================================ */

/* ---------- MODO CLARO (pergamino) ---------- */
:root:root[saved-theme="light"] {
  /* Fondos */
  --note: #e8dcc2;
  --side-bar: #211b17;
  --outer-bar: #2a221b;
  --bg: #d4c4a4;
  --td: rgba(212, 196, 164, 0.18);

  /* Texto */
  --text: #2b241c;
  --text-dl: #1a1410;
  --text-muted: #5d5142;
  --text-faint: #806f58;

  /* Acentos */
  --accent: #6f2927;
  --accent2: #a98243;
  --accent2-lite: #c5a467;
  --accent-text: #f0e6cf;
  --text-accent: #6f2927;
  --text-accent-hover: #a98243;

  /* Headers */
  --headers: #a98243;
  --h1-color: #a98243;
  --h2-color: #a98243;
  --h3-color: #6f2927;
  --h4-color: #6f2927;
  --h5-color: #5d5142;
  --h6-color: #5d5142;

  /* Tablas */
  --table: rgba(111, 86, 51, 0.45);
  --table-header-color: #6f2927;
  --table-header-background: rgba(255, 255, 255, 0.16);

  /* Código */
  --code-bg: #1a1410;
  --codeblock-background: #1a1410;
  --codeblock-header-background: #2a221b;
  --inline-code-color: #a98243;
  --inline-code-bg: rgba(169, 130, 67, 0.15);

  /* Blockquotes */
  --blockquote-color: #5d5142;
  --blockquote-border-color: #a98243;
  --blockquote-background: rgba(255, 255, 255, 0.23);

  /* Tags */
  --tag-color: #675541;
  --tag-background: rgba(232, 220, 194, 0.5);
  --tag-border-color: #bda77d;

  /* Highlights */
  --highlight: rgba(169, 130, 67, 0.18);
  --text-highlight-bg: rgba(255, 242, 54, 0.45);
}

/* ---------- MODO OSCURO (pergamino invertido) ---------- */
:root:root[saved-theme="dark"] {
  /* Fondos */
  --note: #2b241c;
  --side-bar: #16120f;
  --outer-bar: #0e0c0a;
  --bg: #1a1410;
  --td: rgba(70, 40, 15, 0.4);

  /* Texto */
  --text: #d9c9ac;
  --text-dl: #f0e6cf;
  --text-muted: #b8a888;
  --text-faint: #8f7b60;

  /* Acentos */
  --accent: #a98243;
  --accent2: #c5a467;
  --accent2-lite: #d4b478;
  --accent-text: #1a1410;
  --text-accent: #c5a467;
  --text-accent-hover: #d4b478;

  /* Headers */
  --headers: #c5a467;
  --h1-color: #c5a467;
  --h2-color: #c5a467;
  --h3-color: #a98243;
  --h4-color: #a98243;
  --h5-color: #8f7b60;
  --h6-color: #8f7b60;

  /* Tablas */
  --table: rgba(169, 130, 67, 0.45);
  --table-header-color: #c5a467;
  --table-header-background: rgba(70, 40, 15, 0.3);

  /* Código */
  --code-bg: #16120f;
  --codeblock-background: #16120f;
  --codeblock-header-background: #0e0c0a;
  --inline-code-color: #c5a467;
  --inline-code-bg: rgba(197, 164, 103, 0.18);

  /* Blockquotes */
  --blockquote-color: #b8a888;
  --blockquote-border-color: #a98243;
  --blockquote-background: rgba(70, 40, 15, 0.35);

  /* Tags */
  --tag-color: #c7b89d;
  --tag-background: rgba(111, 41, 39, 0.3);
  --tag-border-color: #6f2927;

  /* Highlights */
  --highlight: rgba(197, 164, 103, 0.22);
  --text-highlight-bg: rgba(255, 242, 136, 0.30);
}

/* ---------- TIPOGRAFÍA (ambos modos) ---------- */
:root:root[saved-theme="light"],
:root:root[saved-theme="dark"] {
  --font-default:
    "EB Garamond", Georgia, "Times New Roman", serif;
  --font-text:
    "EB Garamond", Georgia, "Times New Roman", serif;
  --font-interface:
    "EB Garamond", Georgia, "Times New Roman", serif;
  --font-monospace:
    "IBM Plex Mono", "Fira Code", "Courier New", monospace;
  --font-editor:
    "EB Garamond", Georgia, "Times New Roman", serif;

  --h1-font:
    "EB Garamond", Georgia, "Times New Roman", serif;
  --h2-font:
    "EB Garamond", Georgia, "Times New Roman", serif;
  --h3-font:
    "EB Garamond", Georgia, "Times New Roman", serif;
  --h4-font:
    "EB Garamond", Georgia, "Times New Roman", serif;
  --h5-font:
    "EB Garamond", Georgia, "Times New Roman", serif;
  --h6-font:
    "EB Garamond", Georgia, "Times New Roman", serif;

  --p-line-height: 1.7;
  --p-spacing: 1rem;
  --line-height: 1.7;

  --h1-size: clamp(48px, 6vw, 80px);
  --h2-size: 34px;
  --h3-size: 21px;
  --h4-size: 18px;
  --h5-size: 16px;
  --h6-size: 14px;

  --h1-line-height: 1.05;
  --h2-line-height: 1.2;
  --h3-line-height: 1.3;
}
`

export const CodexAeternumTheme = (): QuartzTransformerPluginInstance => {
  return {
    name: "CodexAeternumTheme",
    // textTransform no-op requerido por el validador de transformers de Quartz 5.
    // El trabajo real lo hace externalResources() abajo.
    textTransform(_ctx, src) {
      return src
    },
    externalResources() {
      return {
        css: [
          {
            content: CODEX_CSS,
            inline: true,
            spaPreserve: true,
          },
        ],
        js: [],
        additionalHead: [],
      }
    },
  }
}

export default CodexAeternumTheme
