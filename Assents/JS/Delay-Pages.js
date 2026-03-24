// Quando a página carrega, aplica o efeito de entrada
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("preload");
  document.body.classList.add("loaded");
});

// Função para transição suave ao sair
function Transicao_Suave(event) {
  event.preventDefault();
  const destino = event.target.href;

  document.body.classList.remove("loaded");
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = destino;
  }, 400); // tempo igual ao CSS
}


// Teste de Transição
function voltarComDelay(event) {
    event.preventDefault(); // impede o link de ir direto
    document.body.classList.add("fade-out"); // aplica o fade

    // espera o tempo da transição antes de trocar
    setTimeout(() => {
        window.location.href = event.target.href;
    }, 500); // mesmo tempo do CSS (0.8s)
}

function Delay_Slide(event) {
    event.preventDefault(); // impede navegação imediata
    document.body.classList.add("slide-out"); // aplica o slide

    // espera o tempo da transição antes de trocar
    setTimeout(() => {
        window.location.href = event.target.href;
    }, 600); // mesmo tempo do CSS
}