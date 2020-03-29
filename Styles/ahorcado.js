
// Ahorcado Crear el juego del ahorcado. El programa debe contar ya con una lista de posibles palabras. Debe mostrar inicialmente la palabra elegida aleatoriamente oculta con asteriscos, e ir preguntando por letras. A medida que se aciertan letras que contenga la palabra, se debe mostrar la palabra con las letras descubiertas. También se puede ingresar una palabra, pero si no se la adivina se pierde el juego. Si se adivinan todas las letras de la palabra, o se acierta la palabra, se gana. Si se intenta adivinar la palabra pero se equivoca, o se ingresan 6 letras erróneas, se pierde. Ejemplo:
// La palabra es ************. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "a"
// La palabra es **********a*. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "e"
// La palabra es e*e*******a*. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "i"
// La palabra es e*e***i*i*a*. Te quedan 6 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "m"
// La palabra es e*e***i*i*a*. Te quedan 5 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "s"
// La palabra es e*e***i*i*a*. Te quedan 4 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "c"
// La palabra es e*ec**ici*a*. Te quedan 4 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "d"
// La palabra es e*e***i*idad. Te quedan 4 equivocaciones posibles. Ingrese una letra o intenten adivinar la palabra:
// "electricidad"
// Felicitaciones, has adivinado la palabra.


// DEFINIR PALABRAS POSIBLES
// ELEGIR PALABRA AL AZAR => obtenerPalabra(palabrasAhorcado)

// OBTENER UNA PALABRA OCULTA =>ocultarPalabra(palabra, icono)

// EMPEZAR A JUGAR
    // MOSTRAR AL USUARIO PALABRA OCULTA
    // PEDIR LETRA
    // SI ADIVINA LETRA, MOSTRARLA
    // SINO ADIVINA, AVISAR LAS CHANCES QUE QUEDAN
    // SI ARRIESGA Y NO ADIVINA PIERDE JUEGO
    // SI ADIVINA LA PALABRA ANTES DE QUE SE TERMINEN LAS CHANCES GANA
    // SI AGOTA LAS CHANCES PIERDE



const palabrasAhorcado = ["coronavirus", "barbijo", "alcohol", "guantes", "distancia", "aislamiento"];


let palabra = palabrasAhorcado[Math.round(Math.random() * (palabrasAhorcado.length -1))] 

const countLetter = (palabra, letras) =>{ 
    
    letras = palabra.split("")
    letras="*";
    return letras

}

alert(countLetter(palabra, letras))

// palabra=prompt(`La palabra es: ${palabra}`)

