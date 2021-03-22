const fs = require('fs');

const FICHERO_JSON = "tienda.json";

const tienda_json = fs.readFileSync(FICHERO_JSON);

const tienda = JSON.parse(tienda_json);

tienda.productos.forEach((element)=>{
    element["stock"] = element["stock"] + 1;
});


let myJSON = JSON.stringify(tienda);

fs.writeFileSync(FICHERO_JSON, myJSON);