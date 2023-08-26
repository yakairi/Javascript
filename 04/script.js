//condicionales
//Operadores relaciones
//> mayor que
//< menor que
//= igual que

const puedeVerPelicula = (edad, tieneAutorizacion) =>{
    if(edad >= 15){
        return true
    } else if(tieneAutorizacion){
        return true  
    }else{
        return false
    }
} 
puedeVerPelicula(12, false)
puedeVerPelicula(12, true)
puedeVerPelicula(16, false)
puedeVerPelicula(18, true)
//Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

const calcularAreaTriangulo =(base, altura) =>{
    
}
calcularAreaTriangulo(3, 4) // 6
calcularAreaTriangulo(5, 6) // 40

//estaEnRango(valor, minimo, maximo)
//Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)
const estaEnRango = (valor, minimo , maximo ) =>{
    if (valor >= minimo) {
        if (valor <= maximo) {
          return true;
        }
      }
      
      return false;
    }


estaEnRango(3, 1, 10)   // true
estaEnRango(1, 1, 10)   // true
estaEnRango(10, 1, 10)  // true
estaEnRango(12, 1, 10)  // false
estaEnRango(-3, 1, 10)  // false