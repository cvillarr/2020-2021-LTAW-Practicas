// Cargamos las dependencias
const socket = require('socket.io');
const http = require('http');
const express = require('express');
const colors = require('colors');

const PUERTO = 8080;

//creamos la variable para almacenar el nº de usuarios conectados
let user_on = 0;

//mensaje para cuando me pidan el nº de usuarios conectados
let mensaje_usuarios = ("Hay " + user_on + " usuarios conectados");

//creamos la variable para cuando el cliente nos pida los comandos /help 
let help = "<p> /help: Lista de los comandos soportados</p> \
<p> /list: Número de usuarios conectados</p> \
<p> /hello: El servidor nos saluda </p> \
<p> /date: Devuelve la fecha actual</p>";

//creamos la variable para cuando el cliente me pida la fecha actual
let date = new Date();

// mensaje para cuando me pidan la fecha
let mensaje_fecha = ("Fecha actual: " + date);

// mensaje para cuando el servidor nos saluda
let mensaje_hello = ("HOLA!! Soy el servidor!");

// mensaje para dar la bienvenida al chat
let mensaje_bienvenida = (">> BIENVENID@!!");

//mensaje para cuando no se reconoce lo que se solicita
let mensaje_norec = ("No se reconoce el comando");

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
app.use('/', express.statis(__dirname + '/'));

// El directorio publico contiene ficheros estáticos
app.use(express.static('public'));













