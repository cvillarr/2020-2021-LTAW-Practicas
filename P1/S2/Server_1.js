// Detección de peticiones
// Servidor Nulo, no atiende a clientes, porque no devuelve mensajes de respuesta
// Nos notifica en la consola los clientes que se han conectado

const http = require('http');

//-- Crear el servidor
const server = http.createServer();

//-- Función de retrollamada de petición recibida
//-- Cada vez que un cliente realiza una petición
//-- Se llama a esta función
function atender(req, res) {
    //-- req: http.IncomingMessage: Mensaje de solicitud
    //-- res: http.SercerResponse: Mensaje de respuesta (vacío)

    //-- Indicamos que se ha recibido una petición
    console.log("Petición recibida!");

    //-- pero no enviamos respusta (todavía)
}

//-- Activar la función de retrollamada del servidor
server.on('request', atender);

//-- Activar el servidor. A la escucha de peitciones
//-- en el puerto 8080
server.listen(8080);