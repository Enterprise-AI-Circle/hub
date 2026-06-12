---
layout: default
title: Blog
description: Artikel zu Vibe Coding, Token-Effizienz und Agent-Personalisierung.
eyebrow: Blog
permalink: /blog/
---

<header class="page-header">
  <p class="eyebrow">Blog</p>
  <h1>Blog</h1>
  <p class="subtitle">Artikel zu Vibe Coding, Token-Effizienz und Agent-Personalisierung.</p>
</header>

<div class="card-grid card-grid-1">
  {% for post in site.posts %}
  <a class="card card-link card-blog" href="{{ post.url | relative_url }}">
    <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{% include date-de.html date=post.date %}</time>
    <h3>{{ post.title }}</h3>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    <span class="card-more">Weiterlesen →</span>
  </a>
  {% endfor %}
</div>
