//Importo los modulos http, fs y url necesarios para el servidor
const http = require('http');
const fs = require('fs');
const url = require('url');

//Defino el puerto que voy a utilizar
const PUERTO = 9000;

// Cargar paǵina web del formulario y del error
const pagina_principal = fs.readFileSync("tienda.html");
const pagina_error = fs.readFileSync("error.html");

//Guardamos nombre del fichero de la base de datos y de la base de datos de salida
const FICHERO_JSON = "tienda.json";
const FICHERO_JSON_OUT = "tienda_resultado.json";

//Leemos la base de datos
const tienda_json = fs.readFileSync(FICHERO_JSON);

//Creamos la estructura a partir del archivo json
const tienda = JSON.parse(tienda_json);

// Array de los productos
let productos = tienda[1]['productos'];

//Convertimos la variable a cadena JSON
let myJSON = JSON.stringify(productos);

//Cargamos la pagina del formulario
const FORMULARIO = fs.readFileSync('login.html', 'utf-8');

// Cargamos la página de respuesta
const PROCESADO = fs.readFileSync('procesado.html', 'utf-8');

// Páginas de las distintas cestas
const CESTA1 = fs.readFileSync('tarta_nena.html', 'utf-8');
const CESTA2 = fs.readFileSync('cesta_pluto.html', 'utf-8');
const CESTA3 = fs.readFileSync('cesta_completa.html', 'utf-8');
const CESTA4 = fs.readFileSync('cesta_oso.html', 'utf-8');
const CESTA5 = fs.readFileSync('tarta_mickey.html', 'utf-8');

//*****PONER????? */
// imprimir info sobre mensaje de solicitud
function print_info_req(req){
    console.log("");
    console.log("Mensaje de solicitud");
    console.log("===================");
    console.log("Método: " + req.method);
    console.log("Recurso: " + req.url);

    const myURL = new URL(req.url, 'http://' + req.headers['host']);
    console.log("URL completa: " + myURL.href);
    console.log(" Nombre usuario: " + myURL.username);
}

const server = http.createServer(function (req, res){
    console.log("Peticion Recibida")

//Construyo la url de la solicitud del cliente
const url = new URL(req.url, 'http://' + req.headers['host']);
console.log("\nSe ha solicitado el recurso: " + url.pathname);

//Inicializo la variable petición
let peticion = "";

//Analizo el recurso solicitado por el cliente
if (url.pathname == "/") {
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

//Asigno tipo de mime
let mime = peticion_type;

//Defino el tipo de archivo html
if (peticion_type == 'html'){
    mime = "text/html";
};

//Defino el tipo de archivo css
if (peticion_type == 'css'){
    mime = "text/css";
}

//Defino el tipo de imágenes
if ((peticion_type == 'jpeg') || (peticion_type == 'jpg') || (peticion_type == 'ico') || (peticion_type == 'gif')){
    mime = "image/" + peticion_type;
}

//Leemos productos de la base de datos
let datos;

//PRODUCTO1
let cesta1 = CESTA1;
datos = tienda[1].productos[0]['nombre'];
cesta1 = cesta1.replace("Nombre", datos);
datos = tienda[1].productos[0]['descripcion'];
cesta1 = cesta1.replace("Descripción", datos);
datos = tienda[1].productos[0]['precio'];
cesta1 = cesta1.replace("Precio", datos); 
datos = tienda[1].productos[0]['stock'];
cesta1 = cesta1.replace("Stock", datos);

//PRODUCTO2
let cesta2 = CESTA2;
datos = tienda[1].productos[1]['nombre'];
cesta1 = cesta1.replace("Nombre", datos);
datos = tienda[1].productos[1]['descripcion'];
cesta1 = cesta1.replace("Descripción", datos);
datos = tienda[1].productos[1]['precio'];
cesta1 = cesta1.replace("Precio", datos); 
datos = tienda[1].productos[1]['stock'];
cesta1 = cesta1.replace("Stock", datos);

//PRODUCTO3
let cesta3 = CESTA3;
datos = tienda[1].productos[2]['nombre'];
cesta1 = cesta1.replace("Nombre", datos);
datos = tienda[1].productos[2]['descripcion'];
cesta1 = cesta1.replace("Descripción", datos);
datos = tienda[1].productos[2]['precio'];
cesta1 = cesta1.replace("Precio", datos); 
datos = tienda[1].productos[2]['stock'];
cesta1 = cesta1.replace("Stock", datos);

//PRODUCTO4
let cesta4 = CESTA4;
datos = tienda[1].productos[3]['nombre'];
cesta1 = cesta1.replace("Nombre", datos);
datos = tienda[1].productos[3]['descripcion'];
cesta1 = cesta1.replace("Descripción", datos);
datos = tienda[1].productos[3]['precio'];
cesta1 = cesta1.replace("Precio", datos); 
datos = tienda[1].productos[3]['stock'];
cesta1 = cesta1.replace("Stock", datos);

//PRODUCTO5
let cesta5 = CESTA5;
datos = tienda[1].productos[4]['nombre'];
cesta1 = cesta1.replace("Nombre", datos);
datos = tienda[1].productos[4]['descripcion'];
cesta1 = cesta1.replace("Descripción", datos);
datos = tienda[1].productos[4]['precio'];
cesta1 = cesta1.replace("Precio", datos); 
datos = tienda[1].productos[4]['stock'];
cesta1 = cesta1.replace("Stock", datos);

//Leemos logins de la base de datos
let username = url.searchParams.get('usuario');
let nombre = url.searchParams.get('nombre');
let login1 = tienda[0].usuarios[0]['login'];
let nombre1 = tienda[0].usuarios[0]['nombre'];
let login2 = tienda[0].usuarios[1]['login'];
let nombre2 = tienda[0].usuarios[1]['nombre'];

//Entregamos formulario por defecto
let user = FORMULARIO;

user = PROCESADO.replace("Nombre", username);
user = user.replace("Nombre", nombre);

//Mensaje que se escribe una vez registrado
let html_extra = "";
    let html_extra_condicion = "";
    if (user == login1 && nombre == nombre1 || user == login2 && nombre == nombre2) {
        html_extra = "<h2> Estás Registrad@!! </h2>";
        html_extra1 = "<h4> Página Principal Monerias </h4>";
    } else {
        html_extra = "<h2> No estás Registrad@ :( </h2>";
        html_extra1 = "<h4> Volver al inicio </h4>"
    }
user = user.replace("HTML_EXTRA", html_extra);
user = user.replace("HTML_EXTRA1", html_extra1);
    

//Lectura asíncrona
fs.readFile(peticion, (err, data) => {

    if (err){
    //Lanza error
        res.writeHead(404,{'Content-Type': mime});
        console.log("NOT FOUND");
        petition = "error.html";
        data = fs.readFileSync(petition);
    } else if (peticion = "tarta_nena.html"){
        data = cesta1;
    } else if (peticion = "cesta_pluto.html"){
        data = cesta2;
    } else if (peticion = "cesta_completa.html"){
        data = cesta3;
    } else if (peticion = "cesta_oso.html"){
        data = cesta4;
    } else if (peticion = "tarta_mickey.html"){
            data = cesta5;
    } else if (peticion = "procesado.html"){
        contType = "text/html";
        data = user;
    } else {
        res.writeHead(200, {'Content-Type': mime});
        console.log("Petición aceptada, 200 OK!");
    }

// Envío los datos solicitados
    res.write(data);
    res.end();
});

});

server.listen(PUERTO);
console.log("Servidor de la tienda online escuchando en puerto: " + PUERTO);
