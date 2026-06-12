---
layout: default
title: Übersicht
home: true
---

<header class="page-header">
  <p class="eyebrow">Enterprise AI Circle</p>
  <h1>Agent Skills.<br><em>Praktisch. Sicher. Persönlich.</em></h1>
  <p class="subtitle">Open-Source Skills für AI Coding Agents — kuratiert von XALT Business Consulting. Für Führungskräfte und Engineering-Teams, die KI in Produktion einsetzen.</p>
  <div class="cta-row">
    <a class="btn btn-primary" href="{{ '/blog/' | relative_url }}">Blog lesen</a>
    <a class="btn btn-ghost" href="{{ '/downloads/' | relative_url }}">Downloads</a>
  </div>
</header>

<section class="section">
  <div class="section-head">
    <h2>Skills</h2>
    <p>Jeder Skill ist eine SKILL.md, die jeder compatible AI Coding Agent laden kann. Einfach den Link zu dieser Seite in den Agenten kopieren und sagen: „Installiere den Security-Audit-Skill.“</p>
  </div>
  {% include skills-listing.html variant='download' cta='skill' %}
</section>

<section class="section">
  <div class="section-head">
    <h2>Blog</h2>
    <p>Artikel zu Vibe Coding, Token-Effizienz und Agent-Personalisierung.</p>
  </div>
  <div class="card-grid card-grid-1">
    <a class="card card-link card-blog" href="{{ '/blog/vibe-coding-aber-sicher.html' | relative_url }}">
      <time datetime="2026-05-27">27. Mai 2026</time>
      <h3>Vibe Coding – aber sicher</h3>
      <p>Sechs Regeln für Führungskräfte, die KI in Produktion einsetzen. Agenten verstehen, Risiken einordnen, Teams schützen.</p>
      <span class="card-more">Weiterlesen →</span>
    </a>
    <a class="card card-link card-blog" href="{{ '/blog/token-effizienz.html' | relative_url }}">
      <time datetime="2026-06-10">10. Juni 2026</time>
      <h3>Big T — Token-Effizienz im Vibe Coding</h3>
      <p>Wie ihr Coding Agents wirtschaftlich einsetzt — ohne dass die Rechnung explodiert. 5 Quick Wins.</p>
      <span class="card-more">Weiterlesen →</span>
    </a>
    <a class="card card-link card-blog" href="{{ '/blog/personalization.html' | relative_url }}">
      <time datetime="2026-06-10">10. Juni 2026</time>
      <h3>Anti-AI-Slop — Personalisiert eure Agenten</h3>
      <p>Hört auf, generische KI-Texte zu veröffentlichen. Gebt eurer KI eure Stimme.</p>
      <span class="card-more">Weiterlesen →</span>
    </a>
  </div>
</section>

<section class="section section-tint">
  <div class="section-head">
    <h2>Downloads</h2>
    <p>Checklisten, Prompt-Templates und SKILL.md zum Mitnehmen.</p>
  </div>
  <div class="card-grid card-grid-1" id="home-downloads-grid">
    {% for item in site.data.downloads.items %}
      {% include card-download.html
        title=item.title
        description=item.description
        href=item.page
        cta='preview' %}
    {% endfor %}
  </div>
  {% include skills-listing.html variant='download' cta='skill' append_to='home-downloads-grid' %}
</section>
