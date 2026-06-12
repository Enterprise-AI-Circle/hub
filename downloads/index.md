---
layout: default
title: Downloads
description: Checklisten, Prompt-Templates und Skills zum Herunterladen.
eyebrow: Ressourcen
permalink: /downloads/
---

<header class="page-header">
  <p class="eyebrow">Ressourcen</p>
  <h1>Downloads</h1>
  <p class="subtitle">Alles zum Mitnehmen — Checklisten, Templates und Skills.</p>
</header>

<div class="card-grid card-grid-1">
  {% for item in site.data.downloads.items %}
    {% if item.kind == 'template' %}
      {% include card-download.html
        title=item.title
        description=item.description
        href=item.asset
        cta='direct'
        download=true %}
    {% elsif item.kind == 'skill' %}
      {% include card-download.html
        title=item.title
        description=item.descriptions.index
        href=item.page
        cta='skill' %}
    {% endif %}
  {% endfor %}
</div>
