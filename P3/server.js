// Cargamos las dependencias
const socket = require('socket.io');
const http = require('http');
const express = require('express');
const colors = require('colors');
const { Socket } = require('dgram');

const PUERTO = 8080;

//creamos la variable para almacenar el nº de usuarios conectados
let user_on = 0;

//creamos la variable para cuando el cliente nos pida los comandos /help 
let help = "<p> >> /help: Lista de los comandos soportados</p> \
<p> >> /list: Número de usuarios conectados</p> \
<p> >> /hello: El servidor nos saluda </p> \
<p> >> /date: Devuelve la fecha actual</p>";

// mensaje para cuando el servidor nos saluda
let mensaje_hello = (">>HOLA!! Soy el servidor!");

// mensaje para dar la bienvenida al chat
let mensaje_bienvenida = (">> BIENVENID@!!");

//mensaje de desconexión
let mensaje_desc = (">> UN MIEMBRO DEL CHAT SE HA IDO");

//mensaje de comando no reconocido
let mensaje_norec = (">> Comando no reconocido, inténtalo de nuevo!");

// creamos una nueva app web
const app = express();

// creamos servidor asoaciado a la app de express 
const server = http.Server(app);

// creamos el servidor de websockets, asociado al servidor http
const io = socket(server); 


//------- PUNTOS DE ENTRADA A LA APP WEB
// defino punto de entrada principal (index.html) de la carpeta public
app.get('/', (req, res) => {
    path = __dirname + '/public/index.html';
    res.sendFile(path);
});

// Esto es necesario para que el servidor le envíe al cliente la
// biblioteca socket.io para el cliente
app.use('/', express.static(__dirname + '/'));

// El directorio publico contiene ficheros estáticos
app.use(express.static('public'));

// Nueva conexión recibida
io.on ('connect', (socket) => {
    console.log ("NUEVA CONEXIÓN!".green);

    // Enviamos el mensaje de bienvenida
    socket.send(mensaje_bienvenida);

    //Mensaje de que se ha conectado un nuevo usuario
    io.send(">> Tenemos un nuevo usuario con nosotros!!");

    // Aumentamos el número de usuarios    
    user_on += 1;
    

    // Evento de desconexión
    socket.on('disconnect', function(){
        console.log('** CONEXIÓN TERMINADA **'.red);

    // Enviamos mensaje de desconexión
        io.send(mensaje_desc);
    
    // Disminuimos el número de usuarios
        user_on -= 1;

    });

    // Enviamos info correspondiente a cada uno de los comandos que tengo definidos
    socket.on("message", (msg) => {
        console.log ("Mensaje recibido de " + msg.white);
        
        msg_split = msg.split(' ')[1];

        if (msg_split == '/help'){
            socket.send(help);
        } else if (msg_split == '/list') {
            //mensaje para decir cuantos usuarios hay conectados
            let mensaje_usuarios = (">> Hay " + user_on + " usuario/s conectados");
            socket.send(mensaje_usuarios);
        } else if (msg_split == '/hello') {
            socket.send(mensaje_hello);
        } else if (msg_split == '/date') {
            //creamos la variable para cuando el cliente me pida la fecha actual
            let date = new Date();
            // mensaje para cuando me pidan la fecha
            let mensaje_fecha = (">> Fecha actual: " + date);
            socket.send(mensaje_fecha);
        } else if (msg_split.startsWith("/")){
            socket.send(mensaje_norec);
        } else {
            io.send(">> " + msg);
        }
    });
});

// Lanzamos el servidor HTTP y... EMPEZAMOS!
server.listen(PUERTO);
console.log("Escuchando en el puerto: " + PUERTO);












