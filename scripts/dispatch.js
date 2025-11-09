function deployCodexLocator() {
  const query = document.querySelector('#codex-locator input').value;
  const results = document.getElementById('locator-results');
  results.innerHTML = `<p>🔍 Codex ping: <em>${query}</em>... awaiting encrypted response.</p>`;
  // Future: Connect to Codex archive, RP map, or facility grid
}
