// Citation anchors open the existing sources disclosure, including deep links.
function revealBroadcastSource(hash) {
  if (!hash || !hash.startsWith('#broadcast-')) return;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;
  for (let parent = target.parentElement; parent; parent = parent.parentElement) {
    if (parent.tagName === 'DETAILS') parent.open = true;
  }
  requestAnimationFrame(() => target.scrollIntoView({block:'start'}));
}
document.addEventListener('click', event => {
  const anchor = event.target.closest('a[href^="#broadcast-"]');
  if (anchor) revealBroadcastSource(anchor.hash);
});
window.addEventListener('hashchange', () => revealBroadcastSource(location.hash));
revealBroadcastSource(location.hash);
