//Proceso de renderizado

const electron = require('electron');


console.log("Holiii, estoy en el proceso de la web !!");

//Obtenemos elementos de la interfaz
const btn_test = document.getElementById("btn_test");
const display = document.getElementById("display");
const version_node = document.getElementById("version_node");
const version_chrome = document.getElementById("version_chrome");
const version_electron = document.getElementById("version_electron");
const direccion_ip = document.getElementById("IP");
const user_on = document.getElementById("usuarios");
const print = document.getElementById("print");

//Número de usuarios
electron.ipcRenderer.on('usuarios', (event, message) => {
    console.log("Usuarios: " + message);
    user_on.textContent = message;
});

//Mensaje recibido de un cliente
electron.ipcRenderer.on('msg_client', (event, message) => {
    console.log("Mensaje: " + message);
    mensajes.innerHTML += '<p>' + message + "</p>";
});

//Mensajes enviados al main
btn_test.onclick = () => {
    //Escribimos en el display un mensaje para todos los usuarios
    display.innerHTML += '<p>' + "Hola a todos!!" + '</p>';
    console.log("Botón apretado!");

    //Enviamos mensaje al main
    electron.ipcRenderer.invoke('test', "Hola a todos!!");
}