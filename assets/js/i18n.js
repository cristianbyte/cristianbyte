function setLang(lang) {
  // Cargar el archivo de idioma
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      // Reemplazar el texto en todos los elementos con data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = data[key] || el.textContent;
      });

      // Guardar la preferencia del idioma en localStorage (opcional)
      localStorage.setItem('lang', lang);
    });
}

// Cargar el idioma por defecto o el guardado en localStorage
const savedLang = localStorage.getItem('lang') || 'en';
setLang(savedLang);