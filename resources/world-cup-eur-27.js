// Reveal the shared source disclosure when following EUR-27 citations.
function revealEurSource(hash) {
  if (!hash || !hash.startsWith('#eur-')) return;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;
  for (let parent = target.parentElement; parent; parent = parent.parentElement) {
    if (parent.tagName === 'DETAILS') parent.open = true;
  }
  requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
}
document.addEventListener('click', event => {
  const anchor = event.target.closest('a[href^="#eur-"]');
  if (anchor) revealEurSource(anchor.hash);
});
window.addEventListener('hashchange', () => revealEurSource(location.hash));
revealEurSource(location.hash);
