//Lectura síncrona, no se ejecuta la siguiente instrucción hasta que no se haya
// completado la operación de acceso

//-- Importar el módulo FS
const fs = require('fs');

console.log("Lectura síncrona de un fichero");

//-- Realizar la lectura
const data = fs.readFileSync('fich1.txt','utf8'); //función que utilizamos para hacer la lectura síncrona
//utilizamos utf8 para leer ficheros de texto
// si quisieramos leer una imagen por ejemplo no hace falta indicar la codificación


//-- Esta instrucción se ejecuta una vez terminada
//-- la lectura síncrona
console.log("Lectura completada...")

//-- Mostrar el contenido del fichero
console.log("Contenido del fichero: \n")
console.log(data);