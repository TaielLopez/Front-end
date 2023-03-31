const image = document.getElementById('img')
const card = document.getElementById('card')

card.addEventListener('mouseover', mostrarImagen)
card.addEventListener('mouseleave', ocultarImagen)
card.addEventListener('touchstart', mostrarImagen)
card.addEventListener('touchend', ocultarImagen)

addEventListener('touchstart')

function mostrarImagen(){
    image.style.display = 'flex'
}
function ocultarImagen(){
    image.style.display = 'none'
}