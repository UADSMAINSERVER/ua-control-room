function searchOps() {
  const query = document.querySelector('#eyefind-terminal input').value;
  const results = document.getElementById('search-results');
  results.innerHTML = `<p>Searching for: ${query}...</p>`;
  // Future: Connect to UA map API or Codex search archive
}
