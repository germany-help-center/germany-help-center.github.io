import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppShell } from "./App";

/**
 * Build-time render entry. Not shipped to the browser.
 *
 * Consumed by scripts/prerender.mjs, which calls this once per route and writes
 * the resulting HTML into dist/. Without it, the deployed page is a ~3 KB shell
 * containing only `<div id="root"></div>` — Google eventually renders that in a
 * separate, slower queue, but Bing and most LLM/AI answer crawlers do not
 * execute JavaScript at all and therefore see no content whatsoever.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  );
}
