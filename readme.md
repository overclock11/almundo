**Requerimientos**
- MongoDB
- NodeJS versión minima 9.8.0
- Angular versión 5.2.0

### Inicio rápido
Para levantar la aplicación en version de produccion la manera mas sencilla es tener mongodb localmente y ejecutar el archivo **build.bat**

### Angular
Para ejecutar Angular en entorno de desarrollo debe ingresar a la carpeta front y desde la linea de comandos ejecutar:
* npm install
* ng serve o ng build (que creará un front transpilado con las variables de desarrollo)

Esto levantará el servidor de angular en el puerto 4200, luego para entrar vaya a http://localhost:4200.

Para ejecutar Angular para producción es necesario transpilarlo usando este comando.
* npm install
* ng build -prod --build-optimizer --environment=prod --output-path=../api/public/almundo --base-href=/almundo/

Luego de terminar el proceso se generará el frontend dentro de la carpeta public del backend y será servido por Nodejs

### Nodejs
Para ejecutar el backend es necesario:
- tener mongodb disponible y modificar la configuración de conexión si es necesario, la configuración se encuentra en **api/modules/hotels/resources/config.json**
- Ingresar a la carpeta api y ejecutar npm install luego node app.js
- Si es necesario puede modificar el puerto de Node que por defecto es el 3001, para cambiarlo vaya al archivo **app.config.json**
