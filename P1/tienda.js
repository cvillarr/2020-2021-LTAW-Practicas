// PRACTICA 1. MI TIENDA ONLINE CON NODE.JS

//Importo los modulos http, fs y url necesarios para el servidor
const http = require('http');
const fs = require('fs');
const url = require('url');

//Defino el puerto que voy a utilizar
const PUERTO = 9000;

//Creo el sevidor
const server = http.createServer(function (req, res) {
    console.log("Peticion Recibida");

//Construyo la url de la solicitud del cliente
const url = new URL(req.url, 'http://' + req.headers['host']);
    console.log("\nSe ha solicitado el recurso: " + url.pathname);

//Inicializo la variable petición
var peticion = "";
  
//Analizo el recurso solicitado por el cliente
if (url.pathname == '/') {
    peticion += "/tienda.html"; //petición de la pag principal 
} else {
    peticion += url.pathname; //petición de cualquier otra
}

//Obtengo el tipo de recurso solicitado separando el nombre de la extensión
peticion_type = peticion.split(".")[1];
//Le añado el punto para que se pueda buscar la petición y mostrarla
peticion = "." + peticion;

console.log("Recurso: " + peticion);
console.log("Extensión del recurso: " + peticion_type);

//Defino el tipo de archivo html
var mimetype = "text/html";

//Defino el tipo de imágenes
if ((peticion_type == 'jpeg') || (peticion_type == 'jpg')){
    mimetype = "image/" + peticion_type;
}

//Defino el tipo de archivo css
if (peticion_type == "css"){
    mimetype = "text/css";
}

//Lectura asíncrona
fs.readFile(peticion, (err, data) => {

    if (err){
    //Lanza error
        res.writeHead(404,{'Content-Type': mime});
        console.log("NOT FOUND");
    }else{
        res.writeHead(200, {'Content-Type': mime});
        console.log("Petición aceptada, 200 OK!");
    }
    // Envío los datos solicitados
    res.write(data);
    res.end();
    });

});

//Activo el servidor para que escuche en el puerto 9000 
server.listen(PUERTO);
console.log("Servidor de la tienda online escuchando en puerto: " + PUERTO);