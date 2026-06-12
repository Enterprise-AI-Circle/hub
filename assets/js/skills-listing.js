/* ── Automated Skills Listing ───────────────────────────────────
 * Fetches the live marketplace.json from the agent-skills repo and
 * renders skill cards. Single source of truth = the skills repo, so
 * dropping a new skill there auto-updates this listing (no rebuild).
 *
 * Usage in a page:
 *   <div id="skills-listing" data-detail-base="downloads/"></div>
 *   <script src="{{ '/assets/js/skills-listing.js' | relative_url }}" defer></script>
 * ──────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  // Raw marketplace.json from the skills repo (always current).
  var MARKETPLACE_URL =
    "https://raw.githubusercontent.com/Enterprise-AI-Circle/agent-skills/main/.claude-plugin/marketplace.json";
  // Repo tree base for "view on GitHub" links.
  var REPO_TREE_BASE =
    "https://github.com/Enterprise-AI-Circle/agent-skills/tree/main/";

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Map a skill name to its local detail page if one exists, else the GitHub source.
  function detailHref(skill, detailBase, knownDetailPages) {
    var name = skill.name;
    if (knownDetailPages.indexOf(name) > -1) {
      return detailBase + name + ".html";
    }
    // Fallback: link to the skill source folder on GitHub.
    var src = (skill.source || "./" + name).replace(/^\.\//, "");
    return REPO_TREE_BASE + src;
  }

  function renderCards(container, data) {
    var detailBase = container.getAttribute("data-detail-base") || "";
    // Pages that have a hand-written detail page in the hub (optional override).
    var knownDetailPages = (container.getAttribute("data-detail-pages") || "")
      .split(",")
      .map(function (s) { return s.trim(); })
      .filter(Boolean);

    var skills = (data && data.plugins) || [];
    if (!skills.length) {
      container.appendChild(el("p", "muted", "Noch keine Skills veröffentlicht."));
      return;
    }

    var grid = el("div", "card-grid card-grid-1");
    skills.forEach(function (skill) {
      var href = detailHref(skill, detailBase, knownDetailPages);
      var isLocal = knownDetailPages.indexOf(skill.name) > -1;

      var card = el("a", "card card-link");
      card.setAttribute("href", href);
      if (!isLocal) {
        card.setAttribute("target", "_blank");
        card.setAttribute("rel", "noopener");
      }

      var title = skill.name
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, function (c) { return c.toUpperCase(); });

      var version = skill.version ? '<span class="card-kicker">v' + escapeHtml(skill.version) + "</span>" : "";
      card.innerHTML =
        version +
        "<h3>" + escapeHtml(title) + "</h3>" +
        "<p>" + escapeHtml(skill.description || "") + "</p>" +
        '<span class="card-more">' + (isLocal ? "Zum Skill →" : "Auf GitHub ansehen →") + "</span>";

      grid.appendChild(card);
    });

    container.innerHTML = "";
    container.appendChild(grid);
  }

  function init() {
    var container = document.getElementById("skills-listing");
    if (!container) return;

    container.innerHTML = '<p class="muted">Lade Skills …</p>';

    fetch(MARKETPLACE_URL, { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) { renderCards(container, data); })
      .catch(function () {
        // Graceful fallback: static link to the repo so the page is never empty.
        container.innerHTML =
          '<p class="muted">Skills konnten nicht geladen werden. ' +
          'Direkt im <a href="https://github.com/Enterprise-AI-Circle/agent-skills" ' +
          'target="_blank" rel="noopener">agent-skills Repository</a> ansehen.</p>';
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
