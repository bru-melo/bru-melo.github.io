// Dark-mode toggle (remembers your choice), copy buttons, data/code filter.
(function () {
  var root = document.documentElement;

  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) toggle.addEventListener('click', function () {
    var dark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var label = btn.textContent;
      navigator.clipboard.writeText(btn.dataset.copy).then(function () {
        btn.classList.add('done'); btn.textContent = 'copied ✓';
        setTimeout(function () { btn.classList.remove('done'); btn.textContent = label; }, 1600);
      });
    });
  });

  var filters = document.querySelectorAll('[data-filter]');
  filters.forEach(function (f) {
    f.addEventListener('click', function () {
      filters.forEach(function (x) { x.classList.toggle('on', x === f); });
      document.querySelectorAll('.dc-card').forEach(function (c) {
        c.hidden = f.dataset.filter !== 'all' && c.dataset.kind !== f.dataset.filter;
      });
    });
  });

  // Expandable sections: open the one a link points to, plus "Expand all".
  function openTarget(hash) {
    if (!hash || hash.length < 2) return;
    var el = document.getElementById(decodeURIComponent(hash.slice(1)));
    var d = el && (el.tagName === 'DETAILS' ? el : el.closest('details'));
    if (d) { d.open = true; el.scrollIntoView(); }
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href*="#"]');
    if (!a || a.pathname !== location.pathname) return;
    var el = document.getElementById(a.hash.slice(1));
    if (el && el.tagName === 'DETAILS') { e.preventDefault(); history.pushState(null, '', a.hash); openTarget(a.hash); }
  });
  window.addEventListener('hashchange', function () { openTarget(location.hash); });
  openTarget(location.hash);

  var all = document.querySelector('[data-expand-all]');
  if (all) all.addEventListener('click', function () {
    var folds = document.querySelectorAll('details.fold');
    var open = Array.prototype.some.call(folds, function (d) { return !d.open; });
    folds.forEach(function (d) { d.open = open; });
    all.textContent = open ? 'Collapse all' : 'Expand all';
  });
})();
