//  ================== FUNCIONES ================== //

// "1 duplicar": duplicar el texto
const getDoubleText =(text) => text + `\n` + text

// "2 reemplazar": reemplaza un string por otro en el texto
const getNewWords = (text, word, newWord) =>{
    text = text.split(" ")
    if (text.includes(word))  {
        let newText= text.indexOf(word); 
        text.splice(newText, 1, newWord)   
        text=text.join(" ")
            return 'La nueva oración es: ' + `\n` + text
    } else {
        text=text.join(" ")
            return 'La palabra: '+ word + `\n` + 'No se encuentra en el texto: ' + text
    }
}

// "3 agregar": agregar texto
const addText =(text, extraText)=> text + `, ` + extraText

// "4 cortar": pide dos números de índice entre los cuáles recortar el texto
const cutText = (text, fromIndex, untilIndex) => {
    text=text.split("")
    text.splice(fromIndex, untilIndex)
    text=text.join("")
    return text
}

// "5 eliminar palabra": elimina una palabra del texto
const deleteWords = (text, word) =>{
    text = text.split(" ")
        if(text.includes(word)) {
        let newText= text.indexOf(word);   
        text.splice(newText, 1)
        text=text.join(" ")
            return 'La nueva oración es: ' + `\n` + text
        } else {
            text=text.join(" ")
            return 'La palabra: '+ word + `\n` + 'No está en el siguiente texto: ' + text
        }
    }

// "6 buscar subtexto": busca un string  que devuelvae un msj diciendo si lo encontró o no
const getSubText = (text, subTex) =>{
    if(text.includes(subTex)) {
        return 'La palabra: '+ subTex + ' fue hallada en en texto: '+ `\n` + text
    } else {
        return 'La palabra: '+ subTex + `\n` + 'No fue hallada en en texto: ' + text
    }
}

// "7 buscar palabra": busca una palabra y devuelve un mensaje diciendo si lo encontró o no
const getWords = (text, word) =>{
    text = text.split(" ")
    if(text.includes(word)) {
    text.indexOf(word);   
        text=text.join(" ")
        return 'La palabra: '+ word + ' fue hallada en en texto: '+ `\n` + text
       } else {
        text=text.join(" ")
        return 'La palabra: '+ word + `\n` + 'No fue hallada en en texto: ' + text
    }
}

// "8 mayusculas": poner todo el texto a mayuscula
const getUpperCase =(text)=> text.toUpperCase()

// "9 minusculas": poner todo el texto en minusculas
const getLowerCase =(text)=> text.toLowerCase()

// "10 contar letras": mostrar cuántas letras tiene el texto sin espacios
const countLetters = (text) => {
    let word=text.split(" ").join("")
    let letter=word.split("")
    return letter.length
}

// "11 contar palabras": mostrar cuántas palabras tiene el texto
const countWords = (text) => {
    let words=text.split(" ")
    return words.length
}

//"12 h4ck3r 5p34k": convierte el texto en "Hacker Speak"
const toHackerSpeak = (text) => {
    text = text.replace(/a/gi, "4");
    text = text.replace(/e/gi, "3");
    text = text.replace(/i/gi, "1");
    text = text.replace(/o/gi, "0");
    text = text.replace(/s/gi, "5");
    return text
}

const text = prompt(`Ingresa un texto`)
const startEditor= 
`AHORA PODES 
[1] Duplicar texto 
[2] Reemplazar texto 
[3] Agregar texto 
[4] Cortar texto 
[5] Eliminar palabra 
[6] Buscar subtexto 
[7] Buscar palabra 
[8] Pasar todo a mayúsculas 
[9] Pasar todo a minúsculas 
[10] Contar letras 
[11] Contar palabras 
[12] H4ck3r 5p34k 
[13] Salir`

let wantContinue = true;

while(wantContinue) {
        const acciones = prompt(startEditor);
    switch (acciones){
        case "1":// duplicar el texto
            alert(getDoubleText(text))
        break;

        case "2":// "reemplazar text"
            word=prompt(`¿Qué palabra desea reemplazar`); 
            newWord =prompt(`Ingrese la nueva palabra`)
            alert(getNewWords(text, word, newWord))
        break;

        case "3":// "agregar texto"
            extraText=prompt(`Escribe el texto que deseas agregar`)
            alert(addText(text, extraText))
        break;
        
        case "4": // "cortar"
            fromIndex= Number(prompt(`El texto contiene ${text.length} índices, escoga el primer índice a partir del cual recortar`))
            untilIndex =Number(prompt(`Escoga el segundo índice hasta donde recortar`))
            alert(cutText(text, fromIndex, untilIndex))
        break;

        case "5":// "eliminar palabra"
            word=prompt(`Ingrese la palabra que desea eliminar`); 
            alert(deleteWords(text, word))
        break;
        
        case "6": // "buscar subtexto"
            subTex = prompt(`Ingrese el texto que desea encontrar`)
            alert(getSubText(text, subTex))
        break;

        case "7": // "buscar palabra"
            word=prompt(`Ingrese la palabra que desea encontrar`); 
            alert( getWords(text, word))
        break;
        
        case "8":// "mayúsculas"
            alert(getUpperCase(text))
        break;

        case "9": // "minusculas"
            alert(getLowerCase(text))
        break;

        case "10": // "contar letras"
            alert(`Hay ` + countLetters(text)+ ` letras en la oración`)
        break;

        case "11":// "contar palabras"
            alert(`Hay ` + countWords(text) + ` palabras en la oración`)
        break;

        case "12": //"h4ck3r 5p34k"
            alert(toHackerSpeak(text))
        break;

        case "13":
            if (wantContinue){
                exit=confirm(`¿Desea salir del editor?`)
                if(exit){
                    wantContinue=false
                }else {
                    wantContinue=true
                }
            }          
        break;

        default:
            if(acciones !==startEditor) {
            alert(`Ingrese una opción válida`)
            }
    }
        
}