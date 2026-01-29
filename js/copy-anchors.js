document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a.headerlink').forEach(a => {
    a.addEventListener('click', (e) => {
      // e.preventDefault()
      if (navigator.clipboard && a.href) {
        navigator.clipboard.writeText(a.href);
      }
    });
  });
});

