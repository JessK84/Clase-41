
// Ahorcado Crear el juego del ahorcado. 
// El programa debe contar ya con una lista de posibles palabras. 

// Debe mostrar inicialmente la palabra elegida aleatoriamente oculta con asteriscos, e ir preguntando por letras. A medida que se aciertan letras que contenga la palabra, se debe mostrar la palabra con las letras descubiertas. También se puede ingresar una palabra, pero si no se la adivina se pierde el juego. Si se adivinan todas las letras de la palabra, o se acierta la palabra, se gana. Si se intenta adivinar la palabra pero se equivoca, o se ingresan 6 letras erróneas, se pierde. Ejemplo:

// DEFINIR PALABRAS POSIBLES
const palabrasAhorcado = 
["coronavirus", 
"barbijo", 
"alcohol",
"guantes", 
"distancia",
"cuarentena", 
"aislamiento"];

// Hace que una palabra sea elegida al asar => obtenerPalabra(palabrasAhorcado)
const obtenerPalabra =(palabrasAhorcado) => {
    const palabra = palabrasAhorcado[Math.round(Math.random() * (palabrasAhorcado.length -1))]  
    return palabra
}

// OBTENER UNA PALABRA OCULTA =>ocultarPalabra(palabra, icono)
const ocultarPalabra = (palabra) =>{ 
    let palabraOculta=" ";
    for (let i = 0; i < palabra.length; i++) {
        palabraOculta+="*";
    }
    return palabraOculta
}

// DECUBRIR PALABRA CON LETRA UNA PALABRA OCULTA =>ocultarPalabra(palabra, icono)
const descubrirPalabra = (palabra, letras) =>{            
    let palabraOculta ="";
        for (let i = 0; i < palabra.length; i++) {       
            palabraOculta+=letras.includes(palabra[i]) ? palabra[i] : "*";               
            }  
        return palabraOculta
    }

// MUESTRA PALABRA PARA COMENZAR A JUGAR
// Conviene hacer una variable para llamarla
let palabraAleatoria=obtenerPalabra(palabrasAhorcado); //coronavirus
let muestraPalabraOculta= ocultarPalabra(palabraAleatoria); //********/

let equivocaciones=6;
let aJugar= true;
let adivinaLetras=[];
  
// EMPEZAR A JUGAR
    // SINO ADIVINA, AVISAR LAS CHANCES QUE QUEDAN
    // SI ARRIESGA Y NO ADIVINA PIERDE JUEGO
    // SI ADIVINA LA PALABRA ANTES DE QUE SE TERMINEN LAS CHANCES GANA
    // SI AGOTA LAS CHANCES PIERDE

// Equivocaciones !== 0 , aJugar= false no juega
// Equivocaciones !== 0 , aJugar= true si juega
// Equivocaciones === 0 , aJugar= false no juega
// Equivocaciones === 0 , aJugar= true no juega
while(equivocaciones !==0 && aJugar){
    // MOSTRAR AL USUARIO PALABRA OCULTA
    // PEDIR LETRA
    const dameLetra= prompt(`Palabra: ${muestraPalabraOculta} \nIntentos restantes: ${equivocaciones} \nIngrese una letra o intenten adivinar la palabra`);
        // SI ADIVINA LETRA, MOSTRARLA
    if (dameLetra.length === 1){
        if(palabraAleatoria.includes(dameLetra)){
            adivinaLetras.push(dameLetra);
            alert(descubrirPalabra(palabraAleatoria, adivinaLetras))

        } else {
            equivocaciones--
            alert(`La letra no se encuentra en la palabra`)
        }

    } else if (dameLetra === palabraAleatoria){
        alert(`Ganaste!!!, la palabra es "${palabraAleatoria}"`)
        aJugar=false;
    } else {
        alert(`Perdiste por gil`)
        aJugar=false;
    }
}

   