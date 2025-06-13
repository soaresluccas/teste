document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".config-tab");
    const sections = document.querySelectorAll(".config-section");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Remove classes "active" de todos os botões e seções
        tabs.forEach(t => t.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active"));
  
        // Adiciona classe "active" ao botão e seção selecionados
        tab.classList.add("active");
        const targetId = tab.getAttribute("data-tab");
        document.getElementById(targetId).classList.add("active");
      });
    });
  });
  