function loadPage(event, page, element) {
  // Impede o comportamento padrão do <a>
  event.preventDefault();

  // Remove active de todos os links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  // Adiciona active no clicado
  element.classList.add("active");

  // Carrega o conteúdo
  fetch(page)
    .then((response) => response.text())
    .then((html) => {
      const content = document.getElementById("content");
      content.innerHTML = html;

      initPage(page);
    });
}

// Inicializar a página correta baseado no arquivo carregado
function initPage(page) {
  if (page.includes("tarefas")) {
    initTasksPage();
  }

  if (page.includes("usuarios")) {
    initUsersPage();
  }

  if (page.includes("ranking")) {
    initRankingPage();
  }

  if (page.includes("criartask")) {
    initCreateTaskPage();
  }
}

// Carregar página inicial automaticamente
window.addEventListener("DOMContentLoaded", function () {
  const firstLink = document.querySelector(".nav-link");
  if (firstLink) {
    firstLink.click();
  }
});
