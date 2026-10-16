
document.querySelectorAll('a[href]').forEach(link => {

    link.addEventListener('click', function(event) {

        const destino = link.getAttribute('href');

        // Só anima links para outras páginas HTML
        if (!destino || !destino.endsWith('.html')) {
            return;
        }

        event.preventDefault();

        // Faz a página desaparecer
        document.body.classList.add('saindo');

        // Abre a próxima página após a animação
        setTimeout(() => {
            window.location.href = destino;
        }, 600);

    });

});
