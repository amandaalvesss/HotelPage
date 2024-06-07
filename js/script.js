const fotosContainer = document.querySelector('.fotos-reservas');
const fotos = fotosContainer.querySelectorAll('img');
const anteriorBtn = document.getElementById('anterior');
const proximoBtn = document.getElementById('proximo');
let fotoIndex = 0;

function mostrarFotos() {
    const isSmallScreen = window.innerWidth <= 750;
    const fotosPorPagina = isSmallScreen ? 1 : 3;

    fotos.forEach((foto, index) => {
        if (index >= fotoIndex && index < fotoIndex + fotosPorPagina) {
            foto.style.display = 'block';
        } else {
            foto.style.display = 'none';
        }
    });
}

anteriorBtn.addEventListener('click', () => {
    const isSmallScreen = window.innerWidth <= 750;
    const fotosPorPagina = isSmallScreen ? 1 : 3;

    if (fotoIndex > 0) {
        fotoIndex--;
        mostrarFotos();
    }
});

proximoBtn.addEventListener('click', () => {
    const isSmallScreen = window.innerWidth <= 750;
    const fotosPorPagina = isSmallScreen ? 1 : 3;

    if (fotoIndex < fotos.length - fotosPorPagina) {
        fotoIndex++;
        mostrarFotos();
    }
});

mostrarFotos();

window.addEventListener('resize', mostrarFotos);

$(document).ready(function() {
    $('.seta-direita').click(function() {
        $('.quarto-luxo').hide(); 
        $('.quarto-simples').show(); 
    });
    
    $('.seta-esquerda').click(function() {
        $('.quarto-luxo').show(); 
        $('.quarto-simples').hide(); 
    });
});

document.getElementById("menuIcon").onclick = function() {
    var menu = document.getElementById("menuHidden");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Se já estiver visível, oculta
    } else {
        menu.style.display = "block"; // Se estiver oculto, mostra
    }
};
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menuHidden");
    var menuIcon = document.getElementById("menuIcon");
    if (event.target !== menu && event.target !== menuIcon) {
        menu.style.display = "none";
    }
});
