// Keep existing method/download fragments useful inside the source disclosure.
function revealIndexTarget(hash) {
  if (!hash) return;
  let id;
  try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!target || !target.closest('.wc-index')) return;
  let changed = false;
  for (let p = target.parentElement; p; p = p.parentElement) {
    if (p.tagName === 'DETAILS' && !p.open) { p.open = true; changed = true; }
  }
  if (changed) requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
}
document.addEventListener('click', event => {
  const link = event.target.closest('.wc-index a[href]');
  if (!link) return;
  const url = new URL(link.href, location.href);
  if (url.origin === location.origin && url.pathname === location.pathname) revealIndexTarget(url.hash);
});
window.addEventListener('hashchange', () => revealIndexTarget(location.hash));
revealIndexTarget(location.hash);
