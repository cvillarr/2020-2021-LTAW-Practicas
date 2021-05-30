# PRÁCTICA 4. ELECTRON: CHAT

En esta práctica vamos a convertir la práctica 3 (Sala de chat) en una aplicación nativa con electron. 
En esta aplicación podremos ver:
* Información relativa a las versiones de node, chrome, electron.
* Información relativa a la arquitectura, máquina y directorios del sistema.
* URL a la que se deben conectar los usuarios para poder acceder al chat.
* Mensajes que llegan de los usuarios del chat.
* Botón de prueba, el cual hace que el servidor les mande un mensaje a todos los usuarios del chat diciéndoles: Hola!!

### Procedimiento para probar el programa
1. Para poder abrir la aplicación necesitaremos un terminal en el que esté instalado _Node js_.
2. Descargamos el repositorio y abrimos un terminal en el que utilizaremos el siguiente comando para instalar las dependencias necesarias: `npm install`
3. A continuación, indicamos el comando: `npm start` para iniciar la aplicación de electron. 
4. Una vez iniciada la aplicación de electron, se nos abrirá una nueva ventana en la que podremos observar la url para acceder al _"Chat Room"_
5. Copiamos dicha url en el navegador (se recomiendo Navegador web Firefox) y estaremos dentro del _Chat Room_.
6. Todos los mensajes que enviemos desde el Chat Room los podremos ver en la ventana de la aplicación de electron.
7. Si pulsamos el botón de prueba que encontramos en la ventana de la aplicación de electron podremos ver que el mensaje que imprime aparece tanto en la ventana de la aplicación como en el navegador del Chat Room. 

### Archivos que encontramos en el repositorio
* main.js -> archivo principal.
* index.js -> proceso de renderizado.
* index.html -> html correspondiente a la aplicación electron.
* index.css -> hoja de estilo de la aplicación electron.
* package-lock.json -> Describe el árbol de dependencias generado para que en otras máquinas se pueda replicar igual (sin tener que guardar en el repositorio el propio arbol de dependencias).
* package.json -> información sobre el proyecto.
* Dentro de la carpeta public encontramos:  
  * chat.html  
  * chat.css  
  * cliente.js  
  Que corresponden a los mismos archivos que teníamos en la práctica 3 pero con los nombres ligeramente cambiados para que no hubiese problemas. 

### Mejoras implementadas
Mostramos información acerca de la arquitectura, máquina, directorio del sistema.
