//repaso
//console.log("ffl,le,fl");
//alert(nombre);
//const nombre = "fvjfeef";
// nos va dar un error porque esta declarada variable, ejecuta 
// el debe ser para que no da error
//const name = "fvjfeef";
//alert(name);
// let declaracion de variable, edad es el identificador , operador y el valor.
//let edad = 20;
// undifine no esta definido,  null , las constante es inmutable no va cambiar el valor.
// constante se debe declara y inicializacion siempre , let se puede declara primero y despues inicializacicion
//su ejecuta de arriba abajp y si consigue un error corta.
//let 
//// jugarpiedrapapeltijera(a, b)
// Crear una función jugarpiedrapapeltijera que tome como argumentos dos strings a y b que representen una jugada 
//(piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

//funcion anonima o fecha , no se puede llamar despues 
const mayor = (a,b) =>{
    if (10>5){
        return a
    }else {
        return b
    }
}
console.log(mayor ())

//
const saludar = (nombre) => {
    return `¡Hola ${nombre}!`
}
console.log(saludar())

//let saludarGritando = function() {}
//funcion por declaracion
//function saludar () {}
//funciones de primera clases buscar
const jugarpiedrapapeltijera = (jugador1, jugador2) => 
{

    const jugador1 = a.toLowerCase
    const jugador2 = b.toLowerCase
    if ( jugador1 === "piedra" && jugador2 === "tijera" ||
    jugador1 === "papel" && jugador2 === "piedra" ||
    jugador1 === "tijera" && jugador2 ===" papel"){
            return "Gano jugador 1"
    }
    else if ( jugador2 === "piedra" && jugador1 === "tijera" ||
    jugador2 === "papel" && jugador1 === "piedra" ||
    jugador2 === "tijera" && jugador1 ===" papel"){
            return "Gano jugador 2"
    }
    else if( jugador1 === jugador2){
        return "Empate"
    }
    else {
        return "Con eso no se juega  al piedra , papel o tijera"

    }
     

};
console.log (jugarpiedrapapeltijera("pierda", "piedra"))
console.log (jugarpiedrapapeltijera("PIEDRA", "TIJERA"))
console.log (jugarpiedrapapeltijera("pierda", "paPeL"))

// esHoraValida(hora)
// Crear una función esHoraValida que tome como argumento un string hora con el formato 
//HH:mm y determine si es una hora válida del día o no

// if la hora es mayor igual a 0 y menor igual a 23 entonces es una hora validad
// if la minutos es mayor igual a 0 y menor igual a 59 entonces es una minutos validad
// if esta  dos condiciones son correctas, entonces son validas

const esHoraValida = hora =>{
    const removerPuntos = hora.split(":")
    const horas = removerPuntos[0]
    const minutos = removerPuntos[1]

    if(horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59){
        return `La hora ${hora}, es una hora correcta.`
    } else {
        returno`La hora es incorrecta`
    }

}

esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true

//operador cortocircuito javascript buscar
//verificar usuario y contrase#a
const usuario = "Yaki"
const contrasenia ="yaki123"

const ingreseUsuario = prompt("Ingrese su usuario")
const ingresePasword = prompt("Ingrese su contrasenia")

if(ingreseUsuario === usuario && ingresePasword === contrasenia){
    console.log("Puede ingresar")
}
