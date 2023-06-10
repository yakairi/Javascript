//Variables, datos y operadores
/* Cuando la consigna pida ingresar algo hacerlo mediante un prompt, y cuando pida mostrar un mensaje hacerlo mediante alert. 
Usar const, let y template strings. */

//Saludo
/* Crear un programa que pida al usuario ingresar un nombre y apellido por separado, 
y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada". */

// Solicitar al usuario que ingrese apellido y nombre
let nombre = prompt('Ingrese su nombre')
let apellido = prompt(' Ingrese su Apellido')

// variable declarada con el mensaje 
const saludo = `Bienvenida Ada`

//Mostrar resultados
alert(`Hola ${nombre} ${apellido} ${saludo}`)

/* Heladería
Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".*/
let sabor_1 = prompt('Ingrese su primer sabor de helado')
let sabor_2 = prompt('Ingrese su segundo sabor de helado')
let sabor_3 = prompt('Ingrese su tercer sabor de helado')
alert(`Aqui tiene su sabor de helado: ${sabor_1}, ${sabor_2}  y  ${sabor_3}`)


//Datos personales 
/* Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad,
nacionalidad, documento, y muestre luego un mensaje que diga: 
"Nuevo usuario agregado al sistema:" y liste todos los datos juntos.*/
let name = prompt('Ingrese su Nombre')
let lastname = prompt('Ingresa su Apellido')
let age = prompt('Ingresar su edad')
let nacionality = prompt('Ingresar su nacionalidad')
let DNI = prompt('Ingresar tu documento')
alert(`Nuevo usuario agregado al sistema:***************
 Nombre:${name}****** Apellido:${lastname}****** 
 Edad:${age}****** Nacionalidad:${nacionality}****** documento${DNI}`)

//Lista de reproducción 
/* Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".*/

//Dirección completa 
/* Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina". */


/* Años perro
Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro. */

// Solicitar al usuario que ingrese la edad
let edadHumana = parseInt(prompt("Ingrese la edad en años humanos:"));

// Calcular la edad en años perro
let edadPerro = edadHumana * 7;

// Mostrar el resultado
alert("La edad equivalente en años perro es: " + edadPerro);