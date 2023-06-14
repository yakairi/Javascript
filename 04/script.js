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