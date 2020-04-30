// const getDoubleText =(text)=> {
//     return text + `\n` + text
// }

// "agregar": agregar texto
// const addText =(text, extraText)=> {
//     return text.split(" , ") + extraText
// }


// "mayusculas": poner todo el texto a mayuscula
// const getMayusculaText =(text)=> {
//     return text.toUpperCase()
// }

// "contar letras": mostrar cuántas letras tiene el texto sin espacios
// const countLetters = (text) => {
//     let words =-1;
//     word =text(-1).split("")
//     // words.join(" ")
//     return words.length
// }


// const removeWords = (text) =>{
//     text = text.split(" ");
//     let words = text.indexOf("bad");
//     let newWords = text.indexOf("really");
//     text.splice(words, 1);
//     text.splice(newWords, 1);   
//     text=text.join(" ")

//     return text // returns "This is a test"
// }

// const deleteWords = (text, word) =>{
//     word=prompt(`Ingrese la palabra que desea eliminar`);
//     text=text.split(" ")
//     for (let i = 0; i < text.length; i++) {
//         if(text.includes(word)) {
            
//             return text 
//         } else {
//                 return text 
//         }     
//     }
// }

// const countLetters = (text) => {
//     let letters=text.split(" ")
//     return letters
// }

// const muestroColores = (color)=>{
//     let todosLosColores=[];
//     todosLosColores.push(color)
//     // todosLosColores+=color
//     return todosLosColores
// }


const muestroMenu=(text, style, colores, partidas) =>{ 
    let option="";
      if(option === style) {
    text= (`
  Estás en el MODO: ${style}
  Colores actuales: ${colores}
  Partidas jugadas: ${partidas}
  1. COMENZAR JUEGO
  2. CAMBIAR MODO
  3. VER HISTORIAL DE PARTIDAS
  4. SALIR`)
      }
      return text
  }
  