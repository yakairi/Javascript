/* 01 - sobre mi
Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
El objeto tiene que tener 3 propiedades: nombre, apellido, edad
Mostrar en consola el objeto sobreMi*/

// Crear variable sobreMi y asignar un objeto
const sobreMi = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 25
};

// Mostrar el objeto sobreMi en la consola
console.log(sobreMi);

/* 02 - presentar
Crear una variable llamada user, a la que le vamos a asignar un objeto.
El objeto tiene que tener 3 propiedades: fullname, email, age
Mostrar en consola el objeto user
Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD */
// Crear variable user y asignar un objeto
const user = {
  fullname: "Ana García",
  email: "ana@example.com",
  age: 30
};

// Mostrar el objeto user en la consola
console.log(user);

// Mostrar el nombre y la edad en la consola
console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años.`);

/*03 - cancion
Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos) */
var song = {
  title: "Rock and Roll",
  bandName: "Led Zeppelin",
  duration: 166000,
  album: "Led Zeppelin IV",
};

var cancion = {
  titulo: song.title,
  banda: song.bandName,
  duracion: Math.floor(song.duration / 1000) // Convertir milisegundos a segundos
};

console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }

/*3 - base de datos
Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
Los datos que tenemos son un id, email, nombre y teléfono
Crear un objeto para cada persona que nos pasaron
Mostrar por consola todos los objetos creados
// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// var example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron
Nos pidieron mostrar en la consola los siguientes datos de cada persona:
//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
console.log();

// 2. El ID de Grace
console.log();

// 3. El email de Hedy
console.log();

// 4. El ID y nombre de Radia
console.log();

// 5. El telefono de Sheryl
console.log(); */
// Datos de las personas en forma de lista
const personas = [
  { id: 1, email: "ada@gmail.com", nombre: "Ada Lovelace", telefono: "1234567890" },
  { id: 2, email: "grace@hotmail.com", nombre: "Grace Hopper", telefono: "0987654321" },
  { id: 3, email: "hedy@gmail.com", nombre: "Hedy Lamarr", telefono: "6789054321" },
  { id: 4, email: "radia@yahoo.com", nombre: "Radia Perlman", telefono: "1234509876" },
  { id: 5, email: "Sheryl@facebook.com", nombre: "Sheryl Sandberg", telefono: "5432167890" }
];

// Mostrar objetos creados por consola
console.log(personas);

// Mostrar los datos requeridos para cada persona
console.log("El nombre de Ada: " + personas[0].nombre);
console.log("El ID de Grace: " + personas[1].id);
console.log("El email de Hedy: " + personas[2].email);
console.log("El ID y nombre de Radia: " + personas[3].id + ", " + personas[3].nombre);
console.log("El telefono de Sheryl: " + personas[4].telefono);







// 01 - persona
/* Declarar una variable con el nombre propiedadNombre y asignar el valor nombre
Declarar una variable con el nombre propiedadEdad y asignar el valor edad
Crear un objeto persona con las propiedades nombre y edad
Asignar a las propiedades del objeto persona tu nombre y edad
Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables propiedadNombre y propiedadEdad */

// Declarar variables 
let propiedadNombre = 'nombre';
let propiedadEdad = 'edad';

// Crear objeto persona
let persona = {};

// Asignar valores a las propiedades del objeto persona
persona[propiedadNombre] = 'Yaki'; // Reemplaza 'TuNombre' con tu nombre real
persona[propiedadEdad] = 40; // Reemplaza 25 con tu edad real

// Mostrar valores utilizando corchetes y los valores 'nombre' y 'edad'
console.log(persona['nombre']);
console.log(persona['edad']);

// Mostrar valores utilizando las variables propiedadNombre y propiedadEdad
console.log(persona[propiedadNombre]);
console.log(persona[propiedadEdad]);


/* 2 - keys
Partiendo de un objeto guardado en la variable producto
Mostrar en la consola el nombre de todas las propiedades que tiene el producto
Utilizar el método keys */
const producto1 = {
    id: 'ADA-020',
    title: 'Gubergren sed est amet voluptua',
    price: 123.75,
    picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
    condition: 'nuevo',
    free_shipping: true,
    location: 'Capital Federal'
  };
  
  // Obtener las propiedades del objeto utilizando Object.keys()
  let todasLasPropiedades = Object.keys(producto1);
  
  console.log(todasLasPropiedades);
  // resultado esperado
  // [ 'id',
  //   'title',
  //   'price',
  //   'picture',
  //   'condition',
  //   'free_shipping',
  //   'location' ]
  
/* 
3 - producto
Partiendo de un objeto guardado en la variable producto
Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
Utilizar el método keys
El formato para mostrar la propiedad y valor es: "producto['[ACA NOMBRE DE LA PROPIEDAD]'] -> [ACA VALOR DE LA PROPIEDAD]" */
  const producto = {
    id: "ADA-020",
    title: "Gubergren sed est amet voluptua",
    price: 123.75,
    picture:
      "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
    condition: "nuevo",
    free_shipping: true,
    location: "Capital Federal",
  };
  
  // Obtener las propiedades del objeto utilizando Object.keys()
  let propiedades = Object.keys(producto);
  
  // Mostrar el nombre y valor de cada propiedad
  propiedades.forEach(function(propiedad) {
    console.log(`producto['${propiedad}'] -> ${producto[propiedad]}`);
  });
  
