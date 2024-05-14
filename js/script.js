const fotosContainer = document.querySelector('.fotos-reservas');
const fotos = fotosContainer.querySelectorAll('img');
const anteriorBtn = document.getElementById('anterior');
const proximoBtn = document.getElementById('proximo');
let fotoIndex = 0;

function mostrarFotos() {
    fotos.forEach((foto, index) => {
        if (index >= fotoIndex && index < fotoIndex + 3) {
            foto.style.display = 'block';
        } else {
            foto.style.display = 'none';
        }
    });
}

anteriorBtn.addEventListener('click', () => {
    if (fotoIndex > 0) {
        fotoIndex--;
        mostrarFotos();
    }

});

proximoBtn.addEventListener('click', () => {
    if (fotoIndex < fotos.length - 3) {
        fotoIndex++;
        mostrarFotos();
    }
});

mostrarFotos(); 


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
