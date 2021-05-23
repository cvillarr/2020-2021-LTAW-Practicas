//Elementos del interfaz
const display = document.getElementById("display");
const msg_entry = document.getElementById("msg_entry");

//Crear un websocket. Se establece la conexión con el servidor
const socket = io();

socket.on("message", (msg)=>{
  display.innerHTML += '<p style="color:black">' + msg + '</p>';
  console.log("llego");
});

//Al apretar el botón se envía un mensaje al servidor
msg_entry.onchange = () => {
  if (msg_entry.value) {
    socket.send(msg_entry.value);
    console.log("y aqui tmb");
  }
  //Borrar el mensaje actual
  msg_entry.value = "";
}