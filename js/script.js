let index = 0;
const imagens = document.querySelectorAll('.carrossel img');

function mostrarImagem() {
    imagens.forEach(img => img.classList.remove('ativo'));
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('ativo');
}
setInterval(mostrarImagem, 3000);
