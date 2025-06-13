window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    const cards = document.querySelector(".cards");
  
    // Simula o tempo de carregamento (exemplo: 2 segundos)
    setTimeout(() => {
      // Remove o círculo de loading
      loading.style.display = "none";
  
      // Mostra os cards com transição suave
      cards.classList.remove("hidden");
      cards.style.opacity = "1";
      cards.style.transform = "translateY(0)";
    }, 2500); // 2000ms = 2 segundos
  });
  