let currentLang = "pt-BR"; 


async function loadLanguage(lang) {
  const response = await fetch(`../locales/${lang}.json`);
  const translations = await response.json();


  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.innerText = translations[key];
    }
  });


  localStorage.setItem("language", lang);
}


document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "pt-BR";
  loadLanguage(savedLang);


  const languageSelector = document.getElementById("idioma");
  if (languageSelector) {
    languageSelector.value = savedLang;
    languageSelector.addEventListener("change", (e) => {
      loadLanguage(e.target.value);
    });
  }
});
