function getStoredTheme() {
    return localStorage.getItem("theme") || "light";
}

function setThemeAttribute(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme)
}

document.addEventListener("DOMContentLoaded", function() {
    let storedTheme = getStoredTheme();
    setThemeAttribute(storedTheme);
})

function setThemeDark() {
    setThemeAttribute('dark')
}

function setThemeLight() {
    setThemeAttribute('light')
}

function dropdownColorBg(hoveredElement) {
    if(localStorage.getItem('theme')=='light') {
        hoveredElement.style.backgroundColor = 'lightgray'
    } else {
        hoveredElement.style.backgroundColor = '#2b3035'
    }
}

function dropdownColorBgReset(element) {
    element.style.removeProperty('background-color')
}