//Ejemplo de programación asíncrona
const http = require('http');

const PUERTO = 8080;

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

  console.log("\nMENSAJE A")

  req.on('data', (cuerpo) => {
    console.log("MENSAJE B")
  });

  req.on('end', ()=> {
    console.log("MENSAJE C");

    //-- Hayppy server. Generar respuesta
    res.setHeader('Content-Type', 'text/plain');
    res.write("Soy el happy server\n");
    res.end()
  });

  console.log("MENSAJE D");

});

console.log("MENSAJE E");
server.listen(PUERTO);
console.log("MENSAJE F");

/* En este caso si arrancamos el servidor y la solicitud del cliente es tipo GET
/ sin cuerpo en el mensaje, el orden en el que van a aparecer los mensajes en la consola será:
MENSAJE E
MENSAJE F
MENSAJE A
MENSAJE D
MENSAJE C
En el caso de que tengamos el servidor ya arrancado , y el cliente hace otra petición con el cuerpo del mensaje
en la consola del servidor veremos:
MENSAJE A
MENSAJE D
MENSAJE B
MENSAJE C