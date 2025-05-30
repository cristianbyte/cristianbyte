let lang = localStorage.getItem('lang') || 'es';

function setLang(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = data[key] || el.textContent;
      });

      document.documentElement.setAttribute('lang', lang);
      document.getElementById('lang-toggle').textContent = lang.toUpperCase();
      localStorage.setItem('lang', lang);
    });
}

function toggleLang() {
  lang = lang === 'es' ? 'en' : 'es';
  setLang(lang);
}

setLang(lang);
