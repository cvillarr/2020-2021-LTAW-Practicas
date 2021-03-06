//Proceso de renderizado

const electron = require('electron');


console.log("Hola desde el index.js!!");

//Obtenemos elementos de la interfaz
const btn_test = document.getElementById("btn_test");
const display = document.getElementById("display");
const version_node = document.getElementById("version_node");
const version_chrome = document.getElementById("version_chrome");
const version_electron = document.getElementById("version_electron");
const arquitectura = document.getElementById("arquitectura");
const plataforma = document.getElementById("plataforma");
const directorio = document.getElementById("directorio");
const direccion_ip = document.getElementById("direccion_ip");
const info_user_on = document.getElementById("info_user_on");
const print = document.getElementById("print");

version_node.textContent = process.versions.node;
version_chrome.textContent = process.versions.chrome;
version_electron.textContent = process.versions.electron;
arquitectura.textContent = process.arch;
plataforma.textContent = process.platform;
directorio.textContent = process.cwd;


//inicializamos el numero de usuarios para que se vaya actualizando
let user_on = 0;
info_user_on.innerHTML = user_on;

//Mensajes enviados al main
btn_test.onclick = () => {
    //Escribimos en el display un mensaje para todos los usuarios
    display.innerHTML += '<p>' + "Hola a todos!!" + '</p>';
    console.log("Botón apretado!");

    //Enviamos mensaje al main
    electron.ipcRenderer.invoke('test', "Hola a todos!!");
};

//ip
electron.ipcRenderer.on('ip', (event, message) => {
    console.log("Dirección ip: " + message);
    direccion_ip.innerHTML = message;
});

//Número de usuarios
electron.ipcRenderer.on('info_user_on', (event, message) => {
    console.log("Usuarios: " + message);
    info_user_on.innerHTML = message;
});

//Mensaje recibido de un cliente
electron.ipcRenderer.on('print', (event, message) => {
    console.log("Mensaje: " + message);
    display.innerHTML += '<p>' + message + "</p>";
    print.textContent = message;
});

