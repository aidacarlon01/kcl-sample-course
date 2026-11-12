/* KCL sample course — theme script.
   Demonstration equivalents of the production global JS behaviours:
   transcript toggles, glossary term modals. The accordion needs no script —
   it was rebuilt on native HTML (details/summary) after a platform update
   broke the scripted version. */

document.addEventListener('DOMContentLoaded', function () {
  // Transcript toggles
  document.querySelectorAll('.transcript-button').forEach(function (btn) {
    var region = document.getElementById(btn.getAttribute('aria-controls'));
    if (!region) return;
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      region.hidden = open;
      btn.textContent = open ? 'Transcript' : 'Hide transcript';
    });
  });

  // Glossary term modals
  document.querySelectorAll('a.glossary').forEach(function (term) {
    var dlg = document.getElementById(term.getAttribute('data-glossary'));
    if (!dlg) return;
    term.addEventListener('click', function (e) {
      e.preventDefault();
      dlg.showModal();
    });
    dlg.querySelector('.close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  });
});
