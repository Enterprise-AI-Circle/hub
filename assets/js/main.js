const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.nav-toggle');

toggle?.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.addEventListener('click', (e) => {
  if (!sidebar?.classList.contains('open')) return;
  if (sidebar.contains(e.target) || toggle.contains(e.target)) return;
  sidebar.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
});

const input = document.getElementById('doc-search');
input?.addEventListener('input', () => {
  const q = input.value.trim().toLowerCase();
  document.querySelectorAll('.nav-group').forEach((sec) => {
    let any = false;
    sec.querySelectorAll('.nav-link, .nav-sublabel').forEach((a) => {
      const m = !q || a.textContent.toLowerCase().includes(q);
      a.style.display = m ? '' : 'none';
      if (m) any = true;
    });
    sec.style.display = any ? 'block' : 'none';
  });
});

/* ── Copy feedback helper ────────────────────────────── */
function showCopyFeedback(btn) {
  if (!btn) return;
  const original = btn.dataset.label || btn.textContent;
  btn.dataset.label = original;
  btn.textContent = '✓ Kopiert!';
  setTimeout(() => { btn.textContent = original; }, 2000);
}

function copyFromElement(el, btn) {
  if (!el) return;
  const text = el.value ?? el.textContent ?? '';
  navigator.clipboard.writeText(text).then(() => showCopyFeedback(btn));
}

/* ── Declarative copy buttons ────────────────────────── */
document.addEventListener('click', (e) => {
  const copyBtn = e.target.closest('[data-copy-target]');
  if (copyBtn) {
    copyFromElement(document.getElementById(copyBtn.dataset.copyTarget), copyBtn);
    return;
  }

  const skillCopy = e.target.closest('[data-copy-skill-prompt]');
  if (skillCopy) {
    const code = skillCopy.closest('.skill-prompt')?.querySelector('code');
    if (code) navigator.clipboard.writeText(code.textContent).then(() => showCopyFeedback(skillCopy));
    return;
  }

  const previewTrigger = e.target.closest('.preview-trigger');
  if (!previewTrigger) return;
  e.preventDefault();
  const display = document.getElementById(previewTrigger.dataset.target);
  if (!display || display.dataset.loaded) return;

  fetch(previewTrigger.dataset.preview)
    .then(r => r.text())
    .then(t => {
      display.textContent = t;
      display.dataset.loaded = '1';
    })
    .catch(() => { display.textContent = 'Fehler beim Laden.'; });
});

/* ── Force download (Cross-Origin Blob-Download) ─────── */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.download-btn');
  if (!btn) return;
  e.preventDefault();
  const url = btn.href;
  const filename = btn.dataset.filename || 'download.md';
  const original = btn.dataset.label || btn.textContent;

  btn.textContent = 'Lädt…';
  fetch(url)
    .then(r => r.blob())
    .then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
      btn.textContent = 'Download gestartet';
      setTimeout(() => { btn.textContent = original; }, 2000);
    })
    .catch(() => {
      btn.textContent = 'Fehler';
      setTimeout(() => { btn.textContent = original; }, 2000);
    });
});

/* ── Preview panels (fetch or inline source) ─────────── */
function loadPreviewPanel(wrapper) {
  const proseEl = wrapper.querySelector('.preview-content.prose');
  const codeEl = wrapper.querySelector('pre.preview-content code');
  const target = proseEl || codeEl;
  if (!target || target.dataset.loaded) return;

  const applyContent = (text) => {
    let body = text;
    if (wrapper.hasAttribute('data-preview-strip-frontmatter')) {
      body = text.replace(/^---\n[\s\S]*?\n---\n?/, '');
    }
    if (proseEl && typeof marked !== 'undefined') {
      proseEl.innerHTML = marked.parse(body);
    } else if (codeEl) {
      codeEl.textContent = body;
    }
    target.dataset.loaded = '1';
  };

  const sourceId = wrapper.dataset.previewSource;
  if (sourceId) {
    const source = document.getElementById(sourceId);
    if (source) applyContent(source.value ?? source.textContent ?? '');
    return;
  }

  const src = wrapper.dataset.previewSrc;
  if (!src) return;

  fetch(src)
    .then(r => r.text())
    .then(applyContent)
    .catch(() => { target.textContent = 'Fehler beim Laden.'; });
}

/* ── Site-wide init ──────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-preview-src], [data-preview-source]').forEach(loadPreviewPanel);

  document.querySelectorAll('.prose pre, .highlighter-rouge pre').forEach(pre => {
    if (pre.querySelector('.code-copy-btn')) return;
    pre.style.position = 'relative';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'code-copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Code kopieren');
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      if (!code) return;
      navigator.clipboard.writeText(code.textContent).then(() => showCopyFeedback(btn));
    });
    pre.appendChild(btn);
  });
});
