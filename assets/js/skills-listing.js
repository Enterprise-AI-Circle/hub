/* ── Skills Listing (marketplace.json = single source of truth) ──
 * Fetches live marketplace.json from agent-skills and renders cards
 * wherever .skills-listing containers exist on the page.
 *
 * Variants (data-variant):
 *   link     — card-link (skills overview page)
 *   download — card-download with CTA button (home, downloads index)
 * ──────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var MARKETPLACE_URL =
    "https://raw.githubusercontent.com/Enterprise-AI-Circle/agent-skills/main/.claude-plugin/marketplace.json";
  var REPO_TREE_BASE =
    "https://github.com/Enterprise-AI-Circle/agent-skills/tree/main/";

  var marketplaceCache = null;

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

  function formatTitle(name) {
    return name
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function detailHref(skill, detailBase, knownDetailPages) {
    var name = skill.name;
    if (knownDetailPages.indexOf(name) > -1) {
      return detailBase + name + ".html";
    }
    var src = (skill.source || "./" + name).replace(/^\.\//, "");
    return REPO_TREE_BASE + src;
  }

  function parseDetailPages(container) {
    return (container.getAttribute("data-detail-pages") || "")
      .split(",")
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
  }

  function renderLinkCard(skill, href, isLocal, container) {
    var moreLocal = container.getAttribute("data-more-local") || "Zum Skill →";
    var moreRemote = container.getAttribute("data-more-remote") || "Auf GitHub ansehen →";
    var card = el("a", "card card-link");
    card.setAttribute("href", href);
    if (!isLocal) {
      card.setAttribute("target", "_blank");
      card.setAttribute("rel", "noopener");
    }
    var version = skill.version
      ? '<span class="card-kicker">v' + escapeHtml(skill.version) + "</span>"
      : '<span class="card-kicker">Skill</span>';
    card.innerHTML =
      version +
      "<h3>" + escapeHtml(formatTitle(skill.name)) + "</h3>" +
      "<p>" + escapeHtml(skill.description || "") + "</p>" +
      '<span class="card-more">' + (isLocal ? moreLocal : moreRemote) + "</span>";
    return card;
  }

  function renderDownloadCard(skill, href, container) {
    var cta = container.getAttribute("data-cta") || "Ansehen & installieren";
    var card = el("div", "card card-download");
    card.innerHTML =
      "<div>" +
        "<h3>" + escapeHtml(formatTitle(skill.name)) + "</h3>" +
        "<p>" + escapeHtml(skill.description || "") + "</p>" +
      "</div>" +
      '<a class="btn btn-primary btn-sm" href="' + escapeHtml(href) + '">' +
        escapeHtml(cta) +
      "</a>";
    return card;
  }

  function targetGrid(container) {
    var appendToId = container.getAttribute("data-append-to");
    if (appendToId) {
      var grid = document.getElementById(appendToId);
      if (grid) {
        container.hidden = true;
        return grid;
      }
    }
    return null;
  }

  function renderContainer(container, data) {
    var detailBase = container.getAttribute("data-detail-base") || "";
    var knownDetailPages = parseDetailPages(container);
    var variant = container.getAttribute("data-variant") || "link";
    var skills = (data && data.plugins) || [];
    var grid = targetGrid(container);

    if (!skills.length) {
      if (grid) {
        container.hidden = true;
        return;
      }
      container.hidden = false;
      container.innerHTML = "";
      container.appendChild(el("p", "muted", "Noch keine Skills veröffentlicht."));
      return;
    }

    if (!grid) {
      grid = el("div", "card-grid card-grid-1");
      container.innerHTML = "";
      container.hidden = false;
      container.appendChild(grid);
    } else {
      container.hidden = true;
    }

    skills.forEach(function (skill) {
      var href = detailHref(skill, detailBase, knownDetailPages);
      var isLocal = knownDetailPages.indexOf(skill.name) > -1;
      var card = variant === "download"
        ? renderDownloadCard(skill, href, container)
        : renderLinkCard(skill, href, isLocal, container);
      grid.appendChild(card);
    });
  }

  function fetchMarketplace() {
    if (marketplaceCache) return Promise.resolve(marketplaceCache);
    return fetch(MARKETPLACE_URL, { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) {
        marketplaceCache = data;
        return data;
      });
  }

  function showError(container) {
    var grid = targetGrid(container);
    var message =
      '<p class="muted">Skills konnten nicht geladen werden. ' +
      'Direkt im <a href="https://github.com/Enterprise-AI-Circle/agent-skills" ' +
      'target="_blank" rel="noopener">agent-skills Repository</a> ansehen.</p>';
    if (grid) {
      container.hidden = true;
      grid.insertAdjacentHTML("beforeend", message);
      return;
    }
    container.hidden = false;
    container.innerHTML = message;
  }

  function init() {
    var containers = document.querySelectorAll(".skills-listing");
    if (!containers.length) return;

    containers.forEach(function (container) {
      if (container.getAttribute("data-append-to")) {
        container.hidden = true;
        return;
      }
      container.hidden = false;
      container.innerHTML = '<p class="muted">Lade Skills …</p>';
    });

    fetchMarketplace()
      .then(function (data) {
        containers.forEach(function (container) {
          renderContainer(container, data);
        });
      })
      .catch(function () {
        containers.forEach(showError);
      });
  }

  // Backwards compat: legacy #skills-listing id
  function migrateLegacyContainer() {
    var legacy = document.getElementById("skills-listing");
    if (legacy && !legacy.classList.contains("skills-listing")) {
      legacy.classList.add("skills-listing");
      if (!legacy.getAttribute("data-variant")) {
        legacy.setAttribute("data-variant", "link");
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      migrateLegacyContainer();
      init();
    });
  } else {
    migrateLegacyContainer();
    init();
  }
})();
