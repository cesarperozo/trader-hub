# TraderHub

Aplicación móvil desarrollada con React Native y Expo.

## Requisitos
Node.js

Yarn (opcional, pero recomendado)

## Instalación
### 1. Clona este repositorio:
    git clone https://github.com/cesarperozo/trader-hub.git
    
    cd TraderHub

### 2. Instala las dependencias:
    yarn install o npm install
   
## Ejecución

Inicia el servidor de desarrollo de Expo:

    yarn start
    
Esto abrirá una página en tu navegador con un código QR para escanear y ejecutar la app en tu dispositivo móvil.    

## En Android

Para ejecutar la aplicación en un dispositivo Android o emulador:

    yarn android

## En iOS

Para ejecutar la aplicación en un dispositivo iOS o simulador:

    yarn ios


# Decisiones Técnicas Durante el Desarrollo

 ## Estructura delproyecto

Organice la estructura del proyecto de la mejor manera para que fuera legible y escalable, separando las funcionalidades y componentes en carpetas especificas.
De tal manera que facilita la mantenibilidad del codigo y que el crecimiento del proyecto sea mas ordenado

## Formateado con ESlint y Prettier
Configure Eslint y prettier para mantener un formato de codigo y evitar errores comunes. tambien ayuda a mejorar la calidad del codigo y facilita la coloaboracion en equipo.

## Estado globlal con zustand 
opte por usar zustand para manejar el estado global, principalmente para manejar un bottom sheet global, es una solucion ligera en comparacion con otras opciones.

## Gestion de peticion con React Query
Para manejar las llamadas a las Api, utilice React query por que me facilita manejar de manera eficiente el cache, validaciones y estados de carga sin necesidad de implementar logica adicional en las screen.
Ademas por cada servicio consultado en la app creen un hook que encapsula la peticiones con react query y facilita la reutilizacion del codigo.

## Formik
Para el formulario de ordenes, elegi usar Formik por  su escalabilidad y su facilidad para manejar los estados de los inputs y la validación del formulario con Yup. Esto permitió mejorar la experiencia del usuario y reducir la complejidad en la gestión del formulario.

## Variables de Entorno con .env
La configuracion de variables de entorno con .env, lo que me facilita la gestión de configuraciones sensibles, como la URL base de la API. Esto permite mantener el codigo más limpio y seguro al no exponer información directamente en el código fuente.

## Configuracion Base para Peticiones a la api
Hice una configuración base para las peticiones utilizando axios, asegurando que todas las llamadas a los end point compartieran la misma configuración y encabezados preconfigurados





    








