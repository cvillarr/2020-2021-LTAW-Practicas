 # Práctica 1. TIENDA ONLINE

En esta primera práctica creamos una página web. Implementamos tanto la parte de back-end (servidor web) como la de front-end (lo que ve el usuario).

### Implementación Servidor Web
* Implementamos el servidor web utilizando nodejs.
* Utilizamos los módulos de url, http, fs. 
* El servidor escucha en el puerto 9000. Además, sirve archivos html, js, css e imágenes.
* Si se le solicita algún recurso no disponible salta página html de error. 

### Implementación Front-end
* Implementado con páginas estáticas html y css. 
* Tenemos página principal con 5 productos. 
* Pinchando en cada artículo (o en su nombre) te deriva a otra página en la que se ve la imagen en un tamaño mayor y una descripción de los distintos productos que componen el artículo. 
* Desde dicha página con la descripción se puede volver a la página principal. 

### Funcionamiento

1. Abrimos un terminal
2. Lanzamos la siguiente instrucción: `node tienda.js`
3. Abrimos un navegador (se recomienda Navegador web Firefox)
4. Nos conectamos al servidor indicando la dirección: `localhost:9000` o `127.0.0.1:9000`
5. Y podremos navegar por la página web de **MONERÍAS** y disfrutar de sus productos, pudiendo ver las imágenes más grandes y la descripción de cada uno de ellos pulsando sobre la imagen o sobre el nombre de los mismos. 

### Archivos que encontramos en el repositorio
* tienda.js -> archivo principal
* tienda.html -> html de la página principal 
* tienda.css -> hoja de estilo de la página principal
* Encontramos también las imágenes de cada uno de los productos que se encuentran en la tienda, con sus respectivos archivos .html y .css que corresponden a las páginas de cada producto. 
* error.html -> página de error que aparece cuando se solicita un recurso no disponible.
* archivos .mp3 que corresponden a las diferentes canciones para cada una de las páginas.  


### Mejoras
He añadido música en cada una de las páginas. 
Una vez que nos conectamos al servidor en el navegador se inicia la música automáticamente. Al igual que cada vez que entramos en cada uno de los productos la música respectiva al artículo se escucha automáticamente y cuando volvemos a la página principal se vuelve a escuchar el hilo musical de la página principal. 
También se reproducirá un sonido de error cuando el recurso solicitado no está disponible.  


