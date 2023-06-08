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

// Solicitar al usuario que ingrese la edad
let edadHumana = parseInt(prompt("Ingrese la edad en años humanos:"));

// Calcular la edad en años perro
let edadPerro = edadHumana * 7;

// Mostrar el resultado
alert("La edad equivalente en años perro es: " + edadPerro);