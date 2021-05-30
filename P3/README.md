# PRÁCTICA 3. WEBSOCKETS: CHAT

En esta práctica vamos a crear una sala de chat en la que varios usuarios se van a poder conectar y hablar entre ellos a través del Navegador. 
El programa principal está implementado en node.js. 

### Funcionamiento 
1. Abrimos un terminal en el que indicaremos el siguiente comando: `node server.js`
2. Abrimos una página en el navegador (se recomienda Navegador web Firefox) en el que indicaremos: `localhost:8080` o `127.0.0.1:8080`
3. El servidor nos dará la bienvenida y en el terminal veremos un mensaje de que hay una nueva conexión. 
4. Cada vez que se añada un nuevo usuario en el navegador nos dirá que se ha añadido un nuevo usuario y en el terminal veremos que hay una nueva conexión. 
5. En el primer display que encontramos podremos poner nuestro nick, de esta manera saldrá quién es el que escribe el mensaje, en el caso de no indicarlo aparecerá como _"anónimo"_.
6. El siguiente display es para escribir los mensajes que querramos mandar, estos mensajes llegarán a todos los usuarios que estén conectados a excepción de los siguientes comandos: 
* **/help:** el cual nos mostrará una lista con todos los comandos soportados
* **/list:** Devolverá el número de usuarios conectados
* **/hello:** El servidor nos devolverá el saludo
* **/date:** Nos devolverá la fecha
* **/...** : cualquier mensaje que comience por la / recibirá como respuesta que no se reconoce el comando. 
los cuales les aparecerán únicamente a la persona que lo haya escrito. 
7. Cada vez que alguien se desconecte del chat, aparecerá un mensaje tanto en el navegador del resto de usuarios conectados como en el terminal indicando que alguien ha abandonado el chat. 

### Archivos que encontramos en el repositorio
* server.js -> archivo principal .
* package.json -> información sobre el proyecto.
* package-lock.json -> Describe el árbol de dependencias generado para que en otras máquinas se pueda replicar igual (sin tener que guardar en el repositorio el propio arbol de dependencias).
* El resto de archivos se encuentran en la carpeta public:
* El resto de archivos se encuentran en la carpeta public:  
  *cliente.js  
  *index.css -> hoja de estilo.  
  *index.html -> página html.  
  *la imagen que utilizamos como fondo del chat.     
  *.mp3 que corresponde al tono que suena cada vez que se envía un mensaje.  

### Mejoras implementadas:
* Sonido cada vez que se envía un mensaje o hay una nueva conexión
* Posibilidad de indicar tu nick y aparecer con él en los mensajes que se envíen. 




