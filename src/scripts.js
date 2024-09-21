const themeToggle = document.getElementById('theme-toggle');
loadSystemTheme();

function loadSystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    themeToggle.checked = prefersDark;
}

themeToggle.addEventListener('change', function() {
    const theme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  });

/* let translations = {};
fetch('src/translations.json')
  .then(response => response.json())
  .then(data => {
    translations = data;
    changeLanguage('en');
  });
function changeLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    element.textContent = translations[lang][key];
  });
}*/