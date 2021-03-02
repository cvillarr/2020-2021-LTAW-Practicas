// la lectura asincrona lo utilizamos para que el rendimiento sea mejor y el servidor
//pueda atender mas peticiones. 

//-- Importar el módulo FS
const fs = require('fs');

console.log("Lectura asíncrona de un fichero");

//-- Realizar la lectura asíncrona
fs.readFile('fich1.txt','utf8', (err, data) => {
//utilizamos la función readFile para hacer la lectura síncrona
// añadimos al final la funcion de callback 

    //-- Cuando los datos están ya disponibles
    //-- los mostramos en la consola
    console.log("Lectura completada...")
    console.log("Contenido del fichero: \n")
    console.log(data);
});

console.log("Esperando al sistema de ficheros...")