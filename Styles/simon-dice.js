// La posibilidad de elegir entre un modo de juego u otro:
// MODO CLASICO: rondas limitadas (preguntar cúantas). Si se llega a esa cantidad de rondas sin perder, se gana la partida.

// MODO SUPERVIVENCIA: rondas ilimitadas hasta que se pierda.
// La posibilidad de seguir jugando una nueva partida una vez terminada la anterior.
// La posibilidad de elegir los colores del juego (en vez de rojo, azul, verde, amarillo) y la cantidad (mínimo 4)
// La posibilidad de ver un historial con los resultados. Por ejemplo:
// [1] MODO SUPERVIVENCIA: 5 colores. 15 rondas ganadas.
// [2] MODO CLASICO: 10 rondas. 4 colores. Derrota en ronda 8.
// [3] MODO CLASICO: 12 rondas. 6 colores. Partida ganada.
// [4] MODO SUPERVIVENCIA: 4 colores. 18 rondas ganadas.

// Un menú para acceder a las distintas opciones del programa. Por ejemplo:
// Modo actual: SUPERVIVENCIA.
// Colores actuales: verde, lila, azul, negro, amarillo.
// Partidas jugadas: 4.
// - INICIAR JUEGO
// - CAMBIAR MODO
// - CAMBIAR COLORES
// - VER HISTORIAL DE PARTIDAS
// - SALIR



// definir modos de juego 
// Modo Clásico 
    // rondas limitadas - preguntar cuantas
    // Gana si termina las rondas
    // pierde si erra secuencia


    // EJERCICIO COPIADO DE CLASE, PARA ENTENDER EL CÓDIGO Y QUÉ DE TODO ESTO 
    // PUEDE SER UNA FUNCIÓN - NO CORREGIR 

// FORMO COLORES ALEATORIOS 
const coloresAleatorios =(colores)=> {
  const randomColores =colores[Math.round(Math.random() * (colores.length - 1))]
  return randomColores
} 

// JUEGO MODALIDAD SUPERVIVENCIA llamo a COLORES ALEATORIOS
const juegoSupervivencia = (colores, secuencia) => {
  secuencia=[];
  let ronda =0;
  let juegoTerminado=true;
  
  while(juegoTerminado){ 
    const color = coloresAleatorios(colores)
    secuencia.push(color)
    alert(`Simón dice: \n${secuencia}`)
       
    for (let i = 0; i < secuencia.length; i++) {
      const usuarioDice=prompt(`Usuario dice: ${colores}`)//Va acá porque los colores se ingresan de a uno
      if(usuarioDice !== secuencia[i]){ // se usa el modo de negación para que es cuando termina, sino sigue jugando. 
        juegoTerminado = false
      }
    } 
    ronda++
  }

  return ronda //ver si no va ronda
}
  
 

//MOSTRAR MENÚ
// Las siguientes funciones permiten completar: modo, colores, rondas
const muestroMenu=(colores, partidas, modo) =>{ 
  // colores.join(", ");
    return (`
Estás en el MODO: ${modo}
Colores actuales: ${colores.join(', ')}
Partidas jugadas: ${partidas}
1. COMENZAR JUEGO
2. CAMBIAR MODO
3. CAMBIAR COLORES
4. VER HISTORIAL DE PARTIDAS
5. SALIR`)   
}

//CAMBIAR MODO DEL MENÚ : SUPERVIVENCIA O CLÁSICO de MUESTRO MENU
// Elijo el modo, 
const cambiarModo = ()=>{ 
  const modo = prompt(`¿Qué modo desea para jugar: clásico o supervivencia`)
  if(modo === "clásico"){
    const rondas = Number(prompt('Cuántas rondas  desea jugar?'))
    return rondas
  }
  return Infinity
}

// CAMBIAR COLORES de MUESTRO MENU
// Elijo colores
const cambiarColores =()=>{
  const colores=prompt(`Elija los colores con los que desea jugar`).split(" ")
  return colores
}

//MUESTRO EL MENÚ
let verMenu = (menu) =>{
  return prompt(menu)
} 

// La posibilidad de ver un historial con los resultados:
// [1] MODO SUPERVIVENCIA: 5 colores. 15 rondas ganadas.
const obtenerHistorial = (historial) => {
  let partidas = 'HISTORIAL'
  for (let i = 0; i < historial.length; i++) {
    partidas += `\n[${i}]: ${historial[i]}`
  }
  return partidas
}

// La posibilidad de ver un historial con los resultados
// [2] MODO CLASICO: 10 rondas. 4 colores. Derrota en ronda 8.
const obtenerResumen = (rondasJugadas, rondasMaximas, colores) => {
  return rondasMaximas === Infinity
    ? `MODO SUPERVIVENCIA: ${colores.length} colores. ${rondasJugadas} rondas ganadas.`
    : `MODO CLASICO: ${colores.length} colores. ${rondasMaximas} rondas. ${
        rondasJugadas === rondasMaximas
          ? 'Partida ganada'
          : `Derrota en ronda ${rondasJugadas}`
      }`
}

const aJugar = () => {
  const historial = []
  let colores = ['rojo', 'azul', 'amarillo', 'verde']
  let enEjecucion = true
  let rondasMaximas = 8

  while (enEjecucion) {
    const modo = rondasMaximas === Infinity ? 'supervivencia' : 'clásico'
    const menu = muestroMenu(colores, historial.length, modo)
    const opcion = verMenu(menu)

    switch (opcion) {
      case '1':
      case 'INICIAR JUEGO':
        const resultado = juegoSupervivencia(colores, rondasMaximas)
        const resumen = obtenerResumen(resultado, rondasMaximas, colores)
        historial.push(resumen)
        break
      case '2':
      case 'CAMBIAR MODO':
        rondasMaximas = cambiarModo()
        break
      case '3':
      case 'CAMBIAR COLORES':
        colores = cambiarColores()
        break
      case '4':
      case 'VER HISTORIAL DE PARTIDAS':
        alert(obtenerHistorial(historial))
        break
      case '5':
      case 'SALIR':
        enEjecucion = false
        break
      default:
    }
  }
}

aJugar()















// while (seguirJugando){
  

//   if(verMenu==="supervivencia"){
//     let usuario=true;
//     while(usuario){ 
//       let selectorColores = colores[Math.round(Math.random() * (colores.length - 1))]
//       colores.push(simonDice)
//       simonDice+=selectorColores  + ` `;
//       alert(`Simón dice: \n${simonDice}`)
//       usuarioDice=prompt(`Usuario dice: `)
//         if(simonDice=== usuarioDice){
//           rondas++
//           alert(`Excelente!!! \nLlevás ganando ${rondas} rondas`)
//         } else {
//           alert(`Perdiste en la ronda ${rondas}`)
//           usuario=false;
//       }
//     }
//   }    seguirJugando=confirm(`¿Seguís jugando?`) 
  
//   // MODO CLASICO: rondas limitadas (preguntar cúantas). Si se llega a esa cantidad de rondas sin perder, se gana la partida

//   else if (verMenu === "clásico") {
//   let cantidadRondas=Number(prompt(`¿Cuántas rondas querés jugar?`));
  
//     while(cantidadRondas!==0){ 
//       let coloresModoClasico= coloresAleatorios(colores)
//       colores.push(simonDice)
//       simonDice +=coloresModoClasico + ` `; //corregir eso
//       alert(`Simón dice: \n${simonDice}`)
//       usuarioDice=prompt(`Usuario dice: `) 
        
//       if(simonDice === usuarioDice){
//           cantidadRondas--
//           alert(`Excelente!!! \nTe quedan ${cantidadRondas} rondas`)
//             if(cantidadRondas === 0){
//             alert(`Ganaste, cumpliste todas las rondas`)
//             }
//           } else {
//           alert(`Perdiste en la ronda ${cantidadRondas}!!!`)
//           cantidadRondas=0;
//         }   
//       }
    
// }
//    else {
//       alert(`Elija una opción válida`)
//     }
// }
 








 


