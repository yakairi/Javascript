//Eventos
const caja = document.getElementById('box')
const boton = document.getElementById('boton')

const cambioDeColor = () =>{
    caja.style.background= 'red'
}

boton.addEventListener('red', () => cambioDeColor())