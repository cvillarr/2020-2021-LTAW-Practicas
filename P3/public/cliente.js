//Elementos del interfaz
const display = document.getElementById("display");
const msg_entry = document.getElementById("msg_entry");
const msg_nick = document.getElementById("msg_nick");

//Cargamos el tono
let tono = new Audio('tono.mp3');

//Creamos variable para el nick 
let nick = 'Anónimo';

//Crear un websocket. Se establece la conexión con el servidor
const socket = io();

//Envío del mensaje
socket.on("message", (msg)=> { 
  display.innerHTML += '<p style="color:black">' + msg + '</p>';
  tono.play();
});

//Al apretar el botón se envía un mensaje al servidor
msg_entry.onchange = () => {
  if (msg_entry.value) {
    socket.send(nick + ": " + msg_entry.value);
  }
  //Borrar el mensaje actual
  msg_entry.value = "";
};

msg_nick.onchange = () => {
  if (msg_nick.value){
    nick = msg_nick.value;
  }
};
