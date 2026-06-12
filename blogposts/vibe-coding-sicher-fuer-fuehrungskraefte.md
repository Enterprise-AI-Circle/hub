---
title: "Vibe Coding – aber sicher: Sechs Regeln für Führungskräfte"
subtitle: Wer schneller baut, macht schneller Fehler. Hier sind die sechs Regeln, die Ihr Team und Ihre Daten schützen.
created: 2026-05-27
author: Ben Miller
tags:
  - xalt
  - vibe-coding
  - security
  - best-practices
  - enterprise-ai-circle
drop: 1
---

# Vibe Coding – aber sicher

In nur zwei Jahren hat sich KI von einer simplen Schreibhilfe für Programmierer zu etwas viel Mächtigerem entwickelt. Werkzeuge wie Claude Code, Cursor, OpenClaw und Codex schreiben heute nicht mehr nur Programmcode. Sie führen ihn auch selbstständig aus, speichern ihn, veröffentlichen ihn und kommunizieren eigenständig mit anderen Systemen.

Das bringt enorme Produktivität. Es öffnet aber auch eine völlig neue Tür für Angriffe.

Eine aktuelle Branchenuntersuchung (GitGuardian, "State of Secrets Sprawl 2026") hat allein für 2025 rund 29 Millionen neu im Programmcode versteckte Zugangsdaten gezählt – Passwörter, Schlüssel, Tokens. Das sind 34 Prozent mehr als im Vorjahr. Besonders heikel: Code, der mit KI-Hilfe entstanden ist, gibt solche Geheimnisse doppelt so häufig versehentlich preis wie reiner Menschen-Code.

Im April 2026 haben Forscher der Johns Hopkins University eine neue Angriffsmethode öffentlich gemacht. Vereinfacht gesagt: Angreifer schmuggeln dem KI-Werkzeug versteckte Befehle unter, woraufhin der Assistent selbst – ohne es zu merken – sensible Zugangsdaten an Fremde weiterleitet. Anthropic stufte die zugrundeliegende Schwachstelle als kritisch ein.

Die meisten dieser Vorfälle haben eines gemeinsam: Der KI-Assistent wurde überredet, nicht gehackt.

Das ist der entscheidende Punkt. Ein KI-Assistent kann zwei Dinge nicht auseinanderhalten: eine Anweisung, die wirklich von Ihnen kommt, und eine Anweisung, die jemand heimlich in eine Webseite, eine fremde Nachricht oder ein Online-Dokument geschrieben hat. Wenn der Assistent Zugriff auf Ihre Zugangsdaten hat, reicht eine einzige manipulierte Quelle – und alles fließt ab.

---

## Was Sie verstehen müssen, bevor es losgeht

Bevor Sie die sechs Regeln anwenden, lohnt sich ein kurzer Blick darauf, was diese Werkzeuge eigentlich sind und wie sie funktionieren. Nicht technisch – aber präzise genug, um Risiken einordnen zu können.

### Was sind KI-Agenten?

Ein KI-Agent ist etwas anderes als das, was Sie vielleicht von ChatGPT oder Claude kennen.

Wenn Sie ChatGPT oder Claude in der WebUI verwenden, passiert Folgendes: Sie schreiben eine Nachricht, das Modell antwortet. Sie schreiben die nächste, es antwortet wieder. Der Dialog läuft rein im Text – das Modell kann nicht auf Ihre Festplatte zugreifen, keine Programme ausführen, keine Dateien speichern, keine E-Mails versenden. Es liest und schreibt. Mehr nicht. Und Sie steuern jeden Schritt.

Ein KI-Agent macht genau das – und dann noch viel mehr.

Er liest Ihre Dateien, schreibt Code, führt Programme aus, speichert Ergebnisse, greift auf APIs zu, kommuniziert mit anderen Systemen. Er bekommt eine Aufgabe – sagen wir: "Erstelle eine Landingpage für unser neues Produkt" – und führt sie selbstständig durch. Ohne dass Sie jeden einzelnen Schritt vorgeben. Er plant, was zu tun ist, handelt, prüft das Ergebnis und korrigiert sich, bis die Aufgabe erfüllt ist.

Der entscheidende Unterschied: Bei ChatGPT und Claude bleiben Sie am Steuer. Bei einem Agenten übergeben Sie das Steuer – teilweise oder ganz. Das macht ihn so mächtig. Aber es macht ihn auch riskant, denn er handelt in Ihrem Namen – mit Ihren Daten, Ihren Systemen, Ihren Rechten.

### Wie funktionieren sie?

Im Kern arbeiten alle KI-Agenten nach demselben Prinzip: Sie lesen, was Sie wollen, planen einen Weg dorthin, handeln, prüfen das Ergebnis und korrigieren sich – ein Kreislauf, der sich so oft wiederholt, wie nötig.

Das Besondere ist nicht die Technik dahinter. Das Besondere ist die Konsequenz: Weil der Agent eigenständig handelt, kann er auch eigenständig falsche Entscheidungen treffen – oder auf manipulierte Anweisungen hereinfallen. Deshalb sind die sechs Regeln weiter unten so wichtig.

### Was sind Skills – und wofür werden sie eingesetzt?

Ein Skill ist eine wiederverwendbare Fähigkeit, die Sie einem KI-Agenten beibringen können.

Stellen Sie sich vor, Sie hätten einen neuen Mitarbeiter. Anstatt ihm jedes Mal neu zu erklären, wie Sie Sicherheitsprüfungen durchführen wollen, schreiben Sie eine klare Anleitung – mit den Schritten, den Werkzeugen, den Standards, die Sie erwarten. Diese Anleitung wird zum Skill. Und ab dann braucht der Agent nur noch den Namen des Skills, um die komplette Aufgabe zu übernehmen.

Skills sind im Prinzip gut geschriebene Arbeitsanweisungen. Sie enthalten:

- **Die Trigger-Bedingung:** Wann soll der Skill aktiv werden? ("Wenn du einen Code-Review machen sollst")
- **Die Schritte:** Was genau ist zu tun? (Nummerierte Anweisungen, exakt wie Sie es von Ihrem Team erwarten würden)
- **Die Qualitätsstandards:** Was gilt als gut? (Checklisten, Referenzen, Kriterien für "erledigt")
- **Die Werkzeuge:** Welche Hilfsmittel sind zu verwenden? (Bestimmte CLI-Tools, Skripte, Vorlagen)

Skills werden eingesetzt, um wiederkehrende Aufgaben konsistent und zuverlässig zu erledigen – ohne dass Sie jedes Mal neu anweisen müssen, was zu tun ist. Sie sind das, was Sie Ihrem Team auch geben würden: eine klare Prozedur, die jeder befolgen kann, unabhängig vom individuellen Kenntnisstand.

In der Praxis sieht das so aus: Ein Security-Skill prüft jedes Projekt automatisch auf Schwachstellen. Ein Review-Skill geht Code systematisch durch. Ein Deployment-Skill stellt sicher, dass bei jeder Veröffentlichung alle Schritte durchlaufen werden. Und wenn Sie einen neuen Agenten oder ein neues Teammitglied onboarden, genügt ein Skill – keine stundenlange Einarbeitung.

Der entscheidende Vorteil: Skills machen Qualität wiederholbar. Nicht abhängig davon, wer gerade am Werk ist oder wie gut er sich an Ihre Wünsche erinnert. Sie sind Ihr Wissen – strukturiert, übertragbar, prüfbar.

---

Die folgenden sechs Regeln habe ich nicht erfunden. Es sind seit Jahren bewährte Sicherheitsprinzipien, übersetzt in die neue Realität selbstständig arbeitender KI-Assistenten. Sie können sie umsetzen, egal wie technisch versiert Sie selbst sind.

---

## 1. Behandeln Sie KI-Ergebnisse grundsätzlich mit Misstrauen

Code, den ein KI-Assistent geschrieben hat, ist mit Vorsicht zu genießen – auch dann, wenn er funktioniert und gut aussieht.

Was solche Assistenten typischerweise tun, nur um eine Aufgabe als "erledigt" abzuhaken: Sie entfernen Sicherheitsprüfungen, weil die lästige Fehlermeldungen erzeugen. Sie lockern Zugangskontrollen, damit eine Anfrage einfach durchgeht. Oder sie weichen Datenschutzregeln auf, damit eine Verbindung endlich klappt.

Praktisch heißt das: Jedes von der KI erstellte Arbeitsergebnis braucht eine menschliche Kontrolle, bevor es in den Echtbetrieb geht. Auch bei Ihnen persönlich. Niemals etwas direkt veröffentlichen, nur "weil es ja läuft".

Dasselbe gilt für fremden Code, den Sie ins Haus holen. Wenn Sie ein fertiges Projekt aus dem Internet übernehmen, um es mit Ihrem KI-Assistenten weiterzuentwickeln, kennen Sie dessen Sicherheitszustand nicht. Lassen Sie es vor der ersten Nutzung überprüfen. Der Sicherheits-Prüfbaustein am Ende dieses Artikels macht genau das: Er untersucht eigene wie fremde Projekte auf die typischen Schwachstellen, geleakte Zugangsdaten, fehlende Zugangskontrollen und unsichere Voreinstellungen.

## 2. Niemals echte Produktiv-Zugangsdaten in die Reichweite des Assistenten

Die Datei mit Ihren echten Schlüsseln, Datenbank-Passwörtern und Zugangstokens sollte sich nicht dort befinden, wo Ihr KI-Assistent arbeitet. Der Assistent liest sie. Und wenn er manipuliert wird, kann er sie ausplaudern.

Was stattdessen geht:

- Verwenden Sie für KI-Arbeit nur Test-Zugangsdaten mit eingeschränkten Rechten.
- Halten Sie echte Zugangsdaten getrennt und stellen Sie sie nur bei Bedarf kurzfristig bereit, statt sie dauerhaft offen herumliegen zu lassen (dafür gibt es etablierte Werkzeuge wie 1Password oder Bitwarden).
- Für den echten Produktivbetrieb gibt es zudem Verfahren, bei denen der Assistent das echte Passwort nie zu sehen bekommt (mehr dazu in den weiterführenden Quellen am Ende).

Was Sie auf keinen Fall tun sollten: den Generalschlüssel zu Ihren Produktivsystemen auf einem Laptop liegen lassen, auf dem ein KI-Assistent aktiv mitarbeitet.

## 3. Die automatische Vorabprüfung gehört zur Pflicht

Bevor überhaupt etwas gespeichert wird, sollte automatisch geprüft werden, ob versehentlich Zugangsdaten enthalten sind. KI-gestützte Arbeit ist schnell – so schnell, dass niemand mehr bemerkt, wenn der Assistent einen Schlüssel in den Code geschrieben hat. Bis er plötzlich öffentlich im Netz steht.

Was funktioniert:

- Installieren Sie ein Prüfwerkzeug (etwa keyhog oder Gitleaks), das jeden Speichervorgang automatisch durchleuchtet. Das ist kostenlos und in fünf Minuten eingerichtet.
- Lassen Sie regelmäßig die gesamte Projekthistorie durchsuchen.
- Wenn ein Schlüssel doch einmal entwichen ist, tauschen Sie ihn aus. Ihn nur aus dem Code zu entfernen, genügt nicht. Einmal geleakte Schlüssel bleiben jahrelang missbrauchbar, wenn man sie nicht aktiv ungültig macht. Dieselbe Untersuchung fand 2026 noch 64 Prozent der bereits 2022 geleakten Zugangsdaten gültig vor.

Der Sicherheits-Prüfbaustein am Ende ergänzt diese Vorabprüfung um eine zweite Ebene: Er findet versehentlich gespeicherte Zugangsdaten, deckt darüber hinaus aber auch tiefer liegende Probleme auf (fehlende Zugangskontrollen, unsichere Voreinstellungen, verwundbare Fremdbausteine) und prüft sogar, ob die Datenschutz- und Sicherheitsversprechen eines Projekts vom tatsächlichen Code überhaupt gedeckt sind. Genauso nützlich für Ihre eigenen Projekte wie für übernommene Fremdprojekte vor der ersten Nutzung.

## 4. Den Assistenten in einen abgeschirmten Bereich sperren

Der Assistent sollte idealerweise in einem isolierten, abgeschotteten Bereich laufen, mit Abstand zu Ihrem Laptop und Ihrem Produktivserver. Falls er kompromittiert wird, bleibt der Schaden auf diesen abgeschirmten Bereich begrenzt.

Stand 2026:

- Cursor, Claude Code und Codex bringen solche Abschirm-Modi bereits mit. Aktivieren Sie sie.
- Für besonders sensible Arbeiten lohnt sich ein eigener, vom Rest getrennter Bereich.
- Wer eine selbstbetriebene KI-Infrastruktur unterhält, sollte prüfen, ob alle Sicherheitsupdates eingespielt sind. 2026 gab es bei mehreren verbreiteten frei verfügbaren Systemen Lücken, über die genau diese Abschirmung umgangen werden konnte.

## 5. Menschliche Freigabe für alles Unumkehrbare

Der Assistent darf vorbereiten, vorschlagen und ausführen. Aber bei kritischen Aktionen wartet er auf Ihre ausdrückliche Bestätigung.

Kritisch heißt:

- E-Mails versenden
- Geld bewegen
- Etwas in den Echtbetrieb veröffentlichen
- An Datenbanken Grundlegendes verändern
- Fremde Systeme mit Schreibrechten ansteuern

Praktisch bedeutet das: Richten Sie Freigabe-Schranken ein. Aktivieren Sie niemals eine Funktion, die pauschal "alles automatisch genehmigen" bedeutet. Vollautomatische Abläufe gehören ausschließlich in abgeschirmte Umgebungen, in denen sich jeder Schritt rückgängig machen lässt. Anthropics Angebot "Claude für Small Business" macht das übrigens schon von Haus aus: Der Assistent zeigt die geplante Aktion an und wartet auf Ihre Freigabe.

## 6. So wenig Rechte wie möglich

Der Assistent bekommt nur die Berechtigungen, die er für die konkrete Aufgabe wirklich braucht. Soll er nur etwas zusammenfassen, genügen ihm reine Leserechte. Soll er einen Änderungsvorschlag einreichen, braucht er kein Administrator-Konto. Wird er kompromittiert, bleibt der Schaden auf genau diese tatsächlichen Rechte begrenzt.

Konkret:

- Vergeben Sie für jeden Einsatzzweck eigene Zugänge.
- Nur Leserechte, wo immer möglich.
- Prüfen Sie vierteljährlich, welcher Zugang welche Rechte hat.
- Geben Sie dem Assistenten niemals einen Generalzugang mit allen Rechten.

---

## Was Sie heute tun können (15 Minuten)

1. Prüfen Sie: Liegen irgendwo echte Zugangsdaten dort, wo ein KI-Assistent aktiv arbeitet? Falls ja, verschieben Sie sie in einen sicheren Tresor.
2. Installieren Sie ein automatisches Prüfwerkzeug wie keyhog.
3. Kontrollieren Sie, ob der Zugang Ihres Assistenten wirklich nur die nötigen Rechte hat.
4. Aktivieren Sie die Freigabe-Schranken in den Einstellungen von Cursor, Claude Code oder Codex.

## Was diese Woche dran ist

- Setzen Sie sich mit Ihrem Technik-Team zu einer kurzen Bestandsaufnahme zusammen: Wo genau werden Zugangsdaten in KI-Abläufen aufbewahrt?
- Halten Sie in einer knappen Richtlinie fest, welche Werkzeuge überhaupt echte Produktiv-Zugangsdaten sehen dürfen.
- Lassen Sie einmal eine Sicherheitsprüfung über ein bestehendes Projekt laufen. Der Prüfbaustein am Ende dieses Artikels steht als Download bereit.

## Was mittelfristig dran ist

- Prüfen Sie Verfahren, bei denen der Assistent echte Produktiv-Zugangsdaten grundsätzlich nie zu sehen bekommt (Angebote gibt es u. a. von Anthropic, Vercel, Cloudflare oder als freie Alternativen).
- Schulen Sie Ihr Team zum Thema "untergeschobene Befehle".
- Erarbeiten Sie einen Notfallplan für den Fall, dass ein KI-Assistent doch einmal kompromittiert wird.

---

## Die Faustregel

Geschwindigkeit mal ungeprüfter Code ergibt exponentielles Risiko. KI-gestütztes Arbeiten wird genau dann gefährlich, wenn die alten Sicherheitsreflexe nicht mehr greifen.

Die gute Nachricht: Sie müssen keine neuen Reflexe erfinden. Es reicht, die alten an das neue Tempo anzupassen.

---

## Der Sicherheits-Prüfbaustein für KI-Assistenten

Die sechs Regeln geben die Richtung vor. Damit Prüfungen aber nicht zur Endlos-Hausaufgabe werden, lohnt sich ein Baustein, der die Routine-Kontrollen automatisch übernimmt. Wir haben einen gebaut, der mit OpenClaw und vergleichbaren KI-Assistenten zusammenarbeitet (Claude Code und Cursor lassen sich entsprechend einbinden).

**Was er macht:**

- **Technik-Erkennung:** Erkennt automatisch, mit welcher Programmiersprache und welchem Baukasten ein Projekt erstellt wurde (Node, Python, Go, Rust, Ruby, PHP, …), und passt seine Prüfungen entsprechend an.
- **Code-Prüfung:** Durchsucht den Code nach den klassischen Schwachstellen: versehentlich gespeicherte Zugangsdaten, schwacher Passwortschutz, typische Einfallstore für Angreifer, fehlende Zugangskontrollen, voreingestellte Standard-Passwörter und Ähnliches.
- **Bausteine-Prüfung:** Untersucht die mitverwendeten Fremdbausteine auf bekannte Sicherheitslücken und sortiert die Funde nach Schweregrad.
- **Versprechen-Abgleich:** Gleicht ab, ob die nach außen gegebenen Datenschutz- und Sicherheitsversprechen (aus rechtlichen Hinweisen, Werbetexten und der Oberfläche des Produkts) vom Code wirklich eingehalten werden. Wenn auf der Website "Ende-zu-Ende-verschlüsselt" steht, im Code aber nur eine schwächere Absicherung läuft, fällt das auf.
- **Verständliche Berichte:** Jeder Fund kommt mit einem genauen Beleg an welcher Stelle, einer Erklärung warum es wichtig ist, einem Lösungsvorschlag und einer ehrlichen Einschätzung, was dieser Lösungsweg möglicherweise an anderer Stelle stören könnte.

**Wofür Sie ihn nutzen können:**

- Eigene Projekte vor der Veröffentlichung prüfen.
- Übernommene Fremdprojekte vor der ersten Nutzung überprüfen, gerade bei frei verfügbaren Projekten, die Sie in Ihren eigenen Betrieb holen wollen.
- Regelmäßige Quartalsprüfungen Ihrer aktiven Produkte.
- Als zusätzliche Kontrolle bei der Durchsicht von KI-erstelltem Code.

**Download & Installation:** [Security Audit Skill](https://github.com/Enterprise-AI-Circle/agent-skills/tree/main/agent-skills/security-audit)

Entpacken in den entsprechenden Ordner Ihres KI-Assistenten, einmal `audit` eintippen, fertig. Eine Einrichtungs- und Anpassungsanleitung liegt dem Download bei.

Der Baustein ersetzt weder eine professionelle Sicherheitsprüfung durch Experten noch eine offizielle Zertifizierung. Aber er fängt rund 80 Prozent der typischen Probleme ab, bevor sie in den Echtbetrieb gelangen.

---

## Weiterführende Materialien

- **Wie man echte Zugangsdaten sicher mit KI-Assistenten teilt.** Wie Anthropic, Vercel, Cloudflare und Infisical das Problem lösen, dass der Assistent das echte Passwort nie zu sehen bekommen soll. Siehe Begleitartikel "Wie man Secrets sicher mit AI Coding Agents teilt". (secrets-mit-ai-agents-credential-brokering.md)
- **keyhog als automatisches Vorab-Prüfwerkzeug.** Einrichtungsanleitung im Begleitartikel "Pre-Commit-Scanning mit keyhog". (vibe-coding-safety-keyhog.md)

## Quellen

- [GitGuardian – State of Secrets Sprawl 2026](https://www.gitguardian.com/state-of-secrets-sprawl-report-2026)
- Johns Hopkins University – "[Comment and Control](https://arxiv.org/html/2605.11229v1)" Disclosure (April 2026). Sekundärbericht: [Cybernews](https://cybernews.com/ai-news/anthropic-secretly-fixes-another-claude-code-security-flaw/)
- Tony Dang, Infisical: ["Credential Brokering for AI Agents"](https://infisical.com/blog/credential-brokering-for-ai-agents) (Mai 2026)
- [Anthropic Managed Agent Infrastructure](https://platform.claude.com/docs/en/managed-agents/overview) – offizielle Dokumentation (Public Beta)
- Leonardo M. Burgatte: ["I Tested Two AI Coding Agents Against the Same Prompt Injection"](https://medium.com/@leopm/i-tested-two-ai-coding-agents-against-the-same-prompt-injection-8682dfe969a4) (März 2026)
