window.addEventListener("load", (event) => {
  //Page is fully loaded
  const themeToggle = document.getElementById('theme-toggle');
  loadSystemTheme();

  function loadSystemTheme() {
    let preferredTheme = localStorage.getItem('theme') || null;

    if (preferredTheme) {
      document.documentElement.setAttribute('data-theme', preferredTheme);
      themeToggle.checked = preferredTheme === 'dark';
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      preferredTheme = prefersDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', preferredTheme);
      themeToggle.checked = preferredTheme === 'dark';
    }
    
    localStorage.setItem('theme', preferredTheme);
  }

  themeToggle.addEventListener('change', function() {
      const theme = this.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
  });

});

function openImage(src) {
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlayImage');
  
  overlayImage.src = src;
  overlay.classList.remove('hidden');
}

function closeImage() {
  const overlay = document.getElementById('overlay');
  overlay.classList.add('hidden');
}


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