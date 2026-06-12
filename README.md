# Enterprise AI Circle — Hub

Der **Hub** ist das öffentliche Schaufenster des [Enterprise AI Circle](https://www.xalt.de/) — kuratiert von [XALT Business Consulting](https://www.xalt.de/).

Hier liegen der **Blog** und die **Goodie Drops** rund um den produktiven, sicheren Einsatz von AI Coding Agents (OpenClaw, Claude Code, Cursor & Co.) in Unternehmen.

**Live:** <https://hub.xalt.community/>

## Was hier liegt — und was nicht

| | Repo | Inhalt |
|---|---|---|
| **Hub** (dieses Repo) | `Enterprise-AI-Circle/hub` | Blog, Goodie Drops, Downloads, Design — die Jekyll/GitHub-Pages-Site |
| **Skills** | [`Enterprise-AI-Circle/agent-skills`](https://github.com/Enterprise-AI-Circle/agent-skills) | Die ausführbaren Agent Skills selbst |

Die Trennung ist Absicht: Die Skills bleiben ein sauberes, klonbares Produkt; der Hub ist die Präsentationsschicht. Das Skills-Listing auf dem Hub liest die Skills **automatisch** aus der `marketplace.json` des `agent-skills`-Repos — kein doppeltes Pflegen.

## Lokale Entwicklung

Jekyll-Site, gebaut über GitHub Pages.

```bash
bundle install
bundle exec jekyll serve
# → http://127.0.0.1:4000/
```

## Lizenz

[MIT](./LICENSE)
