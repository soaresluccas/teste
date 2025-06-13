
const themeSelector = document.getElementById("theme-selector");


themeSelector.addEventListener("change", () => {
  const selectedTheme = themeSelector.value;


  document.body.className = `theme-${selectedTheme}`;

 
  localStorage.setItem("selectedTheme", selectedTheme);
});


window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("selectedTheme") || "default";
  document.body.className = `theme-${savedTheme}`;
  themeSelector.value = savedTheme;
});