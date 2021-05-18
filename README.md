#  Curso de Firebase Cloud Functions
#### Proyecto del curso

![proyect](https://static.platzi.com/media/landing-projects/Proyecto-firebase-cloud-functions.png)

## Blogeek functions
Agrega notificaciones a tu blog Geek desarrollado en el curso de Firebase para la Web, agrega funciones de registro de usuarios, maneja analítica de tu sitio con Crashlytics, sube imágenes utilizando functions y escribe pruebas para asegurarte de mandar a producción Cloud Functions seguras y eficientes.

_Plantilla web_

## Comenzando 🚀

_Estas instrucciones te permitirán ejecutar correctamente la plantilla para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_Dentro de la Carpeta js del proyecto crea una nueva carpeta de nombre: config y agrega un nuevo archivo con el nombre: ConfigFirebase.js_

_Dentro de ConfigFirebase.js y agrega el siguiente contenido:_

```
// Esta configuración la encontraras en tu proyecto de Firebase
const firebaseConfig = {
  apiKey: "Tu Key de Firebase",
  authDomain: "blogeek.firebaseapp.com",
  databaseURL: "https://blogeek.firebaseio.com",
  projectId: "blogeek",
  storageBucket: "blogeek.appspot.com",
  messagingSenderId: "9568987111254",
  appId: "1:956898710000:web:fac82",
  measurementId: "G-6G22222222"
};
```

### Instalación de gulp 🔧

_Entré a la terminal del proyecto:_

_Descarga gulp con npm, lo instalas a nivel global. Y En la terminal te diriges a la ruta del proyecto está un archivo de configuración de nombre gulpfile.js solo pones en la terminal de tu proyecto_

```
sudo apt install npm
sudo npm install --global gulp-cli
sudo npm install gulp

gulp

```



---
⌨️ con ❤️ por [egomez](https://github.com/ericgomez) 😊
