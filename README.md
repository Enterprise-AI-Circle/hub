# Enterprise AI Circle — Hub

Der **Hub** ist das öffentliche Schaufenster des [Enterprise AI Circle](https://www.xalt.de/) — kuratiert von [XALT Business Consulting](https://www.xalt.de/).

Hier liegen der **Blog** und die **Goodie Drops**: Artikel, Checklisten, Prompt-Templates und Übersichten rund um den produktiven, sicheren Einsatz von AI Coding Agents (OpenClaw, Claude Code, Cursor & Co.) in Unternehmen.

**Live:** <https://enterprise-ai-circle.github.io/hub/>

## Was hier liegt — und was nicht

| | Repo | Inhalt |
|---|---|---|
| **Hub** (dieses Repo) | `Enterprise-AI-Circle/hub` | Blog, Goodie Drops, Downloads, Design — die Jekyll/GitHub-Pages-Site |
| **Skills** | [`Enterprise-AI-Circle/agent-skills`](https://github.com/Enterprise-AI-Circle/agent-skills) | Die ausführbaren Agent Skills selbst (z. B. `security-audit`) |

Die Trennung ist Absicht: Die Skills bleiben ein sauberes, klonbares Produkt; der Hub ist die Präsentationsschicht drumherum. Das Skills-Listing auf dem Hub liest die Skills **automatisch** aus der `marketplace.json` des `agent-skills`-Repos — neuer Skill dort = erscheint hier von selbst, ohne doppelte Pflege.

## Inhalte

- **Blog:** <https://enterprise-ai-circle.github.io/hub/blog/>
- **Skills-Übersicht:** <https://enterprise-ai-circle.github.io/hub/downloads/skills.html>
- **Downloads** (Checklisten, Prompt-Templates): <https://enterprise-ai-circle.github.io/hub/downloads/>

## Lokale Entwicklung

Dieses Repo ist eine Jekyll-Site, die über GitHub Pages gebaut wird.

```bash
bundle install
bundle exec jekyll serve
# → http://127.0.0.1:4000/hub/
```

## Deployment

Die Site baut und deployt automatisch auf GitHub Pages bei jedem Push auf `main`, über den Workflow in `.github/workflows/pages.yml` (Source: GitHub Actions).

## Neuen Goodie Drop veröffentlichen

1. **Skill** (falls vorhanden) → ins [`agent-skills`](https://github.com/Enterprise-AI-Circle/agent-skills)-Repo + Eintrag in dessen `marketplace.json`. Das Hub-Listing aktualisiert sich automatisch.
2. **Blog-Artikel** → neue Datei in `_posts/` (Format `JJJJ-MM-TT-titel.md`).
3. **Optional**: Download-Asset in `assets/downloads/` + Eintrag in `_data/downloads.yml`.

## Kontext

Die Goodie Drops sind praktische Materialien für Unternehmen, die KI in ihren Organisationen einführen. Die Artikel erscheinen auf Deutsch; die Skills selbst sind auf Englisch, weil Englisch die Arbeitssprache von AI Coding Agents und moderner Softwareentwicklung ist.

## Lizenz

[MIT](./LICENSE)
