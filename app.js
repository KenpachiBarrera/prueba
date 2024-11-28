

// let mostarMensaje = prompt ("escriba un nombre")
// console.log(mostarMensaje)

// const holaMundo = 'hola mundo'
// console.log(holaMundo)
// Metodos de JS
/* Los metodos son palabras reservadas que nos ayudan a a diferentes cosas*/


//Metodos para String 
let browserType = "mozilla";
browserType = 'será marzo o enero lo que se venga en la vida' // asiganacion de un seundo paremetro al string
console.log(browserType.length) // El metodo .length nos muestras el numero de caractes que se tiene dentro el string
console.log(browserType[2]) // Nos indica el valor de la letra pertieniciente a el string
console.log(browserType[browserType.length - 7]); // Nos indica en vlor negtivo, empezando del izquierda a derecha 
console.log(browserType.indexOf("m"))// Nos idica en que posicion esta posiicionado el valor ingresado
console.log(browserType.replace("moz", "Hola Mundo")) // Sutituye el valor asisganos, espera dos parametros, entradas y salida
console.log(browserType.slice(2, 4))// Nos indica que contiene de tal parametro a tal parametro
console.log(browserType.slice(2)) // Non indica que se contien de un inicio hasta un final

let radData = "Mi NoMbRe Es MuD";
console.log(radData.toLowerCase())// para a bajas toda las tres dentro de las cadenas de textos
console.log(radData.toUpperCase())// pasa a ALTAS todas las letras dentro de la cadenas de texto

let viewContent = `los buenos días estaran donde estemos ${browserType}`
console.log(`${viewContent} ${viewContent.length}`) // POdemos concatener dons 