# PRÁCTICA 2. INTERACCIÓN CLIENTE-SERVIDOR

## Implementación
En esta práctica 2 tomaremos como base la práctica 1.

### Implementación fichero json
Creamos una base de datos en el ficheron tienda.json en el que añadimos usuarios, productos y pedidos. 

### Implementación front-end
La página principal (tienda.js) tendrá los 5 productos como en la práctica 1 a los que podremos acceder y ver la descripción del producto, el precio y el stock del mismo. Además, tendremos la opción de añadirlos al carrito de la compra. 
En la página principal implementaremos también la opción de meter un Login para hacer el procesamiento del pedido. 

En el procesamiento de la compra, una vez que le usuario haya finalizado la compra, se mostrará la página con los productos seleccionarios y un formulario para rellenar los datos que falten del usuario. 

### Archivos que encontramos en el repositorio
* tienda.js -> archivo principal.
* tienda.html -> html de la página principal.
* tienda.css -> hoja de estilo de la página principal.
* cliente.js -> archivo para realizar las peticiones AJAX
* Encontramos también las imágenes de cada uno de los productos que se encuentran en la tienda, con sus respectivos archivos .html y .css que corresponden a las páginas de cada producto.
* error.html -> página de error que aparece cuando se solicita un recurso no disponible.
* login.html -> página para rellenar el formulario.
* procesado.html -> página que aparece una vez que metemos los datos en el formulario.
* tienda.json -> archivo donde ponemos información acerca de los usuarios, productos con su nombre, descripción, precio y stock y los pedidos.

### Pasos para probar el programa
1. Abrimos un terminal y ejecutamos el comando: <node tienda.js>
2. Seguidamente, abrimos un navegador (se recomienda Navegador web Firefox) y buscamos <localhost:9000>
3. Vemos la tienda de Monerías. 

###### No están implementadas todas las especificaciones. 


   



