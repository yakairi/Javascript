let mensaje = "Hola chicas esto es un mensaje"
let tlf = 254365455
//Funciones Nativas

// Para ver el largo de mi cadena de caracteres(cuenta apartir de 1)
console.log (mensaje.length) // devuelve un numero

//Para cambiar a Mayuscula
console.log (mensaje.toUpperCase()) // devuelve la misma la cadena en mayuscula

// Para cambiar a minuscula
console.log (mensaje.toLocaleLowerCase()) // devuelve la misma la cadena en

// cuenta apartir de 0,Para cortar o Extraer una porcion de cadena de caracteres, recibir dos parametros 2 valores desde el inicio hasta el fin.
console.log (mensaje.slice(5))
console.log (mensaje.slice(0,10))
console.log (mensaje.slice(0,-1)) // devuelve la la cadena recortada
console.log (mensaje.slice(mensaje.length -5))

//Si quiero saber si mi cadena de caractertes incluye algun caractere especifico
console.log (mensaje. includes('z')) //devuelve lun booleano true/false
console.log (mensaje.includes('chica'))// true

// Empieza a contar desde cero,me devuelve el numero de posicion de la primera concidencia que encuentra
console.log (mensaje.indexOf('a')) // true
console.log (mensaje.indexOf('z')) //false

//remplace la primera coincidencia
console.log (mensaje.replace('a', 'e')) // rempleaza la primera coincidencia
console.log (mensaje. replaceAll('a', 'e')) // remplaza todas 


//convierte el tipo de dato a string
console.log (typeof(tlf.toString())) // string
