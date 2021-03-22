const fs = require('fs');

const FICHERO_JSON = "tienda.json";

const tienda_json = fs.readFileSync(FICHERO_JSON);

const tienda = JSON.parse(tienda_json);

console.log("Numero de usuarios registrados actualmente: " + tienda.usuarios.length + "\n");

tienda.usuarios.forEach((element, index)=>{
    console.log("Usuario " + (index + 1) + ": " + element["nombre"]);
});


console.log("Número de productos en la tienda: " + tienda.productos.length + "\n");

tienda.productos.forEach((element, index)=>{
    console.log("Producto " + (index + 1) + ": " + element["tipo"]);
});

tienda.pedido.forEach((element, index)=>{
    console.log("Número de pedido: " + tienda.pedido.length + "\n");
    console.log("Detalle del pedido " + (index + 1) + ": " + element["tipo"]);
});




