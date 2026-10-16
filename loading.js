
document.addEventListener("DOMContentLoaded", function () {

    const tela = document.getElementById("tela-carregamento");

    if (!tela) return;

    // Mostra a tela por 2,5 segundos
    setTimeout(function () {
        tela.classList.add("esconder");
    }, 2500);

});
