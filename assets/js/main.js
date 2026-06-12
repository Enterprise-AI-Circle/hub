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

/* ── Shared preview + copy logic ─────────────────────── */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.preview-trigger');
  if (!btn) return;
  e.preventDefault();
  const url = btn.dataset.preview;
  const displayId = btn.dataset.target;
  const display = document.getElementById(displayId);
  if (!display || display.dataset.loaded) return;

  fetch(url)
    .then(r => r.text())
    .then(t => {
      display.textContent = t;
      display.dataset.loaded = '1';
    })
    .catch(() => { display.textContent = 'Fehler beim Laden.'; });
});

function copyContent(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.value || el.textContent || '';
  const button = btn || document.querySelector('.copy-btn');
  navigator.clipboard.writeText(text).then(() => {
    if (button) {
      const original = button.dataset.label || button.textContent;
      button.dataset.label = original;
      button.textContent = '✓ Kopiert!';
      setTimeout(() => { button.textContent = original; }, 2000);
    }
  });
}

function copySkillPrompt() {
  const code = document.querySelector('.skill-prompt code');
  if (!code) return;
  const btn = document.querySelector('.copy-btn-inline');
  navigator.clipboard.writeText(code.textContent).then(() => {
    if (btn) {
      const original = btn.dataset.label || btn.textContent;
      btn.dataset.label = original;
      btn.textContent = '✓ Kopiert!';
      setTimeout(() => { btn.textContent = original; }, 2000);
    }
  });
}

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

/* ── Site-wide code block copy buttons ───────────────── */
document.addEventListener('DOMContentLoaded', () => {
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
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.textContent = '✓ Kopiert!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    });
    pre.appendChild(btn);
  });
});
