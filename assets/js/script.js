document.addEventListener('DOMContentLoaded', function () {
  let storedTheme = getStoredTheme();
  setThemeAttribute(storedTheme);
  switchTheme()
});

function getStoredTheme() {
  return localStorage.getItem('theme') || 'light';
}

function setThemeAttribute(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);
}

function setThemeDark() {
  setThemeAttribute('dark');
}

function setThemeLight() {
  setThemeAttribute('light');
}

function switchTheme() {
  let sun = document.getElementById('sun')
  let moon = document.getElementById('moon')
  let current_theme = getStoredTheme();
  if (current_theme == 'light') {
    setThemeDark();
    sun.setAttribute('class', 'd-none')
    moon.removeAttribute('class')
  } else {
    setThemeLight();
    moon.setAttribute('class', 'd-none')
    sun.removeAttribute('class')
  }
}