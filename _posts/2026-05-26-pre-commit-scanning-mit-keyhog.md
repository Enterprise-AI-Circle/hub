---
title: Pre-Commit-Scanning mit keyhog
description: Wie ein kostenloses Open-Source-Tool euch davor schützt, API-Keys versehentlich öffentlich zu machen
permalink: /blog/pre-commit-scanning-mit-keyhog.html
---

Stellt euch vor: Jemand prototypisiert mit Claude Code oder Cursor eine kleine Anwendung. Der Agent schlägt vor, die API-Keys für den Test direkt in den Code zu schreiben. "Geht schneller." Der Prototyp wird committed, das Repo geht auf GitHub, und in wenigen Minuten sind die Credentials kompromittiert.

Das passiert nicht hypothetisch. Das passiert täglich. Der [GitGuardian State of Secrets Sprawl 2026](https://www.gitguardian.com/state-of-secrets-sprawl-report-2026) hat 29 Millionen neue hardcodierte Secrets allein in 2025 gezählt, und AI-co-authored Commits leaken doppelt so häufig wie Human-only Commits.

Das ist der teuerste Anfängerfehler beim Vibe Coding. Und er lässt sich in 5 Minuten verhindern.

## Das Tool: keyhog

[keyhog](https://github.com/santhsecurity/keyhog) ist ein Open-Source-Secret-Scanner, gebaut in Rust. Er prüft euren Code, bevor ein Commit überhaupt entstehen kann. Wenn er einen Key, ein Passwort oder einen Token findet, wird der Commit blockiert.

Die Eckdaten:

- 896 Detektoren für die häufigsten Key-Formate
- Hyperscan-SIMD und GPU-Beschleunigung, also angenehm schnell
- 96 Prozent Recall, also wenig False Negatives
- Scannt: API-Keys, OAuth-Tokens, Private Keys, Passwörter, Connection Strings, AWS/GCP/Azure-Credentials, GitHub-Tokens

Das alles ist kostenlos und Open Source.

## Warum gerade Führungskräfte das brauchen

- Wer aus dem Business-Kontext ins Vibe Coding einsteigt, kennt Konzepte wie `.gitignore`, `.env` oder Secret Management oft nicht aus dem Effeff.
- AI-Agents bauen versehentlich Keys in Code ein. Das ist kein Misstrauen gegen die Tools, das ist Beobachtung. Reward Functions belohnen "läuft", nicht "ist sicher".
- Ein einziger kompromittierter AWS-Key kann mehrere tausend Euro Cloud-Kosten generieren, bevor ihr es merkt.
- DSGVO: Geleakte Credentials sind meldepflichtiger Vorfall.

## Setup in 5 Minuten

```bash
# macOS / Linux mit Homebrew
brew install santhsecurity/tap/keyhog

# Pre-Commit-Hook im Repo aktivieren
cd euer-projekt
keyhog install --hook pre-commit
```

Ab jetzt prüft keyhog jeden Commit, bevor er entsteht. Bei einem Treffer wird der Commit abgebrochen und ihr seht genau, in welcher Zeile welcher Datei das gefundene Secret steht.

Für einen kompletten Scan eures bestehenden Repos (auch historische Commits):

```bash
keyhog scan --all-history
```

Das findet auch die Leichen, die schon im Git-History-Keller liegen.

## Was tun, wenn keyhog einen Treffer hat?

Wichtig: Der gefundene Key ist ab jetzt kompromittiert, sobald er einmal committed wurde. Auch wenn ihr den Commit löscht.

Die richtige Reihenfolge:

1. Den Key beim Provider rotieren (neuer Key in AWS/GitHub/Anthropic/wo auch immer).
2. Den alten Key beim Provider deaktivieren.
3. Im Code den hardcoded Key durch eine Environment-Variable ersetzen.
4. Erst dann committen.

Wer "löschen und committen" macht, hat den Key nicht rausgeholt. Der steht weiter in der Git-History.

## Was keyhog nicht kann

Pre-Commit-Scanning verhindert das Committen neuer Secrets. Es ersetzt nicht:

- **Saubere Architektur.** Wenn der Agent vollen Production-Vault-Zugriff hat, fließt das Secret auch ohne Commit ab.
- **Periodische Audits eurer Codebase.** Für strukturelle Probleme (fehlende Auth, unsichere Defaults, Insecure Deserialization) braucht ihr einen Audit-Pass.

Den zweiten Punkt deckt der **Security-Audit Skill** ab, der zu diesem Artikel als Download-Paket gehört. Er funktioniert mit OpenClaw und kompatiblen Coding-Agents (Claude Code via SKILL.md-Loader, Cursor via Custom-Instructions). Der Skill prüft euren Codebase auf die typischen Vibe-Coding-Schwachstellen, gibt Befunde nach Severity sortiert aus, und schlägt konkrete Fixes vor.

**Download & Installation:** [Security-Audit-Skill installieren]({{ '/downloads/security-audit.html' | relative_url }})

## Die Faustregel

Vibe Coding ermächtigt euch. Mit Macht kommt Verantwortung. Pre-Commit-Scanning ist der eine Befehl, der euch vor dem teuersten Anfängerfehler bewahrt.

Fünf Minuten Setup. Dauerhafter Schutz. Schlechter Trade habe ich selten gesehen.

## Weiterführende Quellen

- [keyhog auf GitHub](https://github.com/santhsecurity/keyhog) – Tool-Repo mit Setup-Doku und Detektor-Liste
- [Gitleaks](https://github.com/gitleaks/gitleaks) – Alternative zu keyhog, etwas älter und etabliert
- [GitGuardian State of Secrets Sprawl 2026](https://www.gitguardian.com/state-of-secrets-sprawl-report-2026) – die Zahlen hinter dem Problem
