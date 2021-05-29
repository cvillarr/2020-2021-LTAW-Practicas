//Proceso de renderizado

const electron = require('electron');


console.log("Hola desde el index.js!!");

//Obtenemos elementos de la interfaz
const btn_test = document.getElementById("btn_test");
const display = document.getElementById("display");
const version_node = document.getElementById("version_node");
const version_chrome = document.getElementById("version_chrome");
const version_electron = document.getElementById("version_electron");
const direccion_ip = document.getElementById("IP");
const info_user_on = document.getElementById("usuarios");
const print = document.getElementById("print");

version_node.textContent = process.versions.node;
version_chrome.textContent = process.versions.chrome;
version_electron.textContent = process.versions.electron;

//inicializamos el numero de usuarios para que se vaya actualizando
let user_on = 0;
info_user_on.innerHTML = user_on;

//ip
electron.ipcRenderer.on('ip', (event, message) => {
    console.log("Dirección IP: " + message);
    direccion_ip.innerHTML = message;
});

//Número de usuarios
electron.ipcRenderer.on('usuarios', (event, message) => {
    console.log("Usuarios: " + message);
    info_user_on.textContent = message;
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