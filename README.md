# WOKSHOP SOBRE JSON

## Requisitos

* Actitud positiva
* Ganas de aprender
* Abrir la mente a nuevas palabras y conceptos
* Disposición para ayudar a tus compañeros y compañeras

![Good Vibes](https://media.giphy.com/media/xuXzcHMkuwvf2/giphy.gif)

### Conocimientos

Recuerda repasar o reforzar lo siguientes conocimientos.

* Nociones de desarrollo
  * Crear variables
  * Tipos de datos (string, number, boolean, arreglos)
  * Asignar valores a variables
* JavaScript básico
  * Definir variables
  * Asignar valores
  * Arreglos
  * Objetos y propiedades
  * Funciones con parámetros
  * Saber para que sirve `console.log()`
* Terminal o Consola de Comandos (nivel básico)
  * Comando `cd` para cambiar de directorio

### Software

Vamos a realizar algunas tareas que vas a necesitar en el dia a dia como desarrollador: instalar programas:

* [Node.JS](https://nodejs.org/) con NPM
* [Visual Studio Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)

Te dejo los enlaces a los proyectos, pero tu misión es buscar un tutorial o video donde enseñen como instalarlos.

## Proyecto

Para que nos concentremos en el aprendizaje de JSON y no dedicarnos a resolver problemas técnicos, cada uno debe comprometerse a tener el ambiente listo en su maquina **antes de llegar al taller**.

Los pasos son los siguientes

### 1. Clonar

```bash
git clone https://github.com/equiman/json-workshop-reactcba.git [ruta_proyecto]
```

Debes cambiar la palabra `[ruta_proyecto]` por la ruta de tu maquina en la que quiera descargarlo.

**Ejemplo del comando en cada Sistema Operativo:**

| OS | Comando |
| --- | --- |
| win | `git clone https://github.com/equiman/json-workshop-reactcba.git "D:\Cursos\JSON"` |
| mac | `git clone https://github.com/equiman/json-workshop-reactcba.git ~/Cursos/JSON/` |
| linux | `git clone https://github.com/equiman/json-workshop-reactcba.git ~/Cursos/JSON/` |

### 2. Dependencias

Vamos a cambiar de directorio ubicándonos en la ruta `[ruta_proyecto]` donde clonamos el proyecto.

| OS | Comando |
| --- | --- |
| win | `cd "D:\Cursos\JSON"` |
| mac | `cd ~/Cursos/JSON/` |
| linux | `cd ~/Cursos/JSON/` |

Dentro de esa carpeta, vamos a instalar las dependencias de Node.JS con el siguiente comando.

```bash
npm i
```

Esperar unos minutos o segundos dependiendo de tu conexión a Internet hasta que complete la descarga.

### 3. Abrir Visual Studio Code

Vamos a abrir el proyecto que clonamos. En la misma ruta, ejecutamos el comando.

```bash
code .
```

El comando `code` le dice a Visual Studio Code que se abra y el parámetro `.` le dice que cargue el proyecto que se encentra en la ruta actual.

¡Ya casi terminamos!

### 4. ¿Funciona?

Comprobemos que todo esta funcionado. En la consola ejecuta el comando:

```bash
node taller/1
```

![See you soon](https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif)

Si ves un mensaje que dice `Hello World!` **¡Lo lograste! Ya tienes todo listo para asistir al taller.**

> Si no te funciona no te rindas. Verifica que hayas realizado correctamente cada uno de los pasos.  
> Si sigue sin funcionar, escribe en el chat del meetup que entre todos tratamos de ayudarte.

## Alternativa

Si definitivamente no te funciona, podrás hacer el taller de forma online [CodeSandbox](https://githubbox.com/equiman/json-workshop-reactcba) pero para que te funcione vas a depender de una conexión a internet.

Para poder ejecutar los comandos, debes hacer click en el icono `+` de la pestaña terminal.

## Taller

El workshop se va a realizar en vivo los Domingos de Agosto de 2020 en la comunidad de React CBA. Síguenos en twitter [@reactcba](https://twitter.com/ereactcba) para estar al tanto.

Es muy importante estar hidratados para que el cerebro pueda absorber los nuevos conocimientos. Antes y durante el curso ten listo tu termo.

![Drink Water](https://media.giphy.com/media/slVWEctHZKvWU/giphy.gif)

 **¡Nos vemos pronto!**

## Patrocinadores

Si deseas apoyar mi trabajo en la creación de cursos gratuitos o workshops puedes invitarme a un café.

[![Donate](https://img.shields.io/badge/paypal-donate-blue)](https://paypal.me/equiman/3)
[![Donate](https://img.shields.io/badge/patreon-donate-red)](https://patreon.com/equiman)
[![Donate](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-orange)](https://buymeacoff.ee/equiman)
