## Descripción

<-- Agregar una descripción concisa de lo que hace el pull request !-->

## Resumen de cambios

<-- Enlistar los commits hechos del pull request !-->

## Notas (opcional)

<-- Agregar notas para explicar aspectos adicionales del pull request !-->

## General

- [ ] No hay errores gramaticales en los comentarios
- [ ] La descripción es clara y concisa. Explica los cambios que implica aceptar el pull request
- [ ] El resumen de los cambios pertenece a los commits que abarca el pull request
- [ ] Las notas son claras, concisas y aportan información adicional
- [ ] "Siguen los formatos de los pull request (
      -formato inicial de pull request
      )"
- [ ] El código de una rama está seccionado por varios commits que segmentan el propósito del código
- [ ] Los commits completan la oración "If applied this commit, will..."
- [ ] La rama main solo contiene la versión estable y actualizada de las iteraciones
- [ ] El nombre de las ramas sigue el estándar propuesto por el Manual de arquitectura en la página 7

## Revisa los siguientes puntos si el pull request es a develop

- [ ] Las variables están escritas en "camelCase" y tienen un nombre representativo de su uso
- [ ] Las funciones están escritas en "camelCase" y tienen un nombre representativo de su uso
- [ ] Todas las variables se utilizan declaradas en el código se utilizan
- [ ] "Las variables de entorno comienzan con la palabra ""VITE"", están nombradas en mayúsculas y separadas por guiones bajo por cada palabra nueva: VITE_VARIABLE_ENTORNO"
- [ ] Las variables de entorno son llamadas como: imports.env.VITE_VARIABLE_ENTORNO
- [ ] Los componentes de React están escritas en "PascalCase" y tienen un nombre representativo de su uso
- [ ] Todos los componentes y funciones de las páginas están escritas utilizando arrow functions "() => {}"
- [ ] Todos los imports se utilizan (no hay imports que no se estén usando dentro de un mismo archivo de código)
- [ ] Todas las funciones que son importadas, tienen la palabra reservada "export" o "export default"
- [ ] Todos los imports y variables se utilizan (no hay imports y/o variables que no se estén usando dentro de un mismo archivo de código)
- [ ] No existen loops infinitos en la aplicación
- [ ] No existe el "prop drilling" (pasar propiedades de un componente padre a los componentes hijos; estos mismos componentes hijos van a pasar las mismas propiedades a sus componentes hijos y así sucesivamente)
- [ ] Ninguna línea o bloque de código supera la complejidad temporal de O(n^2)
- [ ] No debe de existir una función con la palabra "async" si no tiene el uso de "await"
- [ ] Para recorrer un arreglo se utiliza el método map() sobre el mismo.
- [ ] No se usan ciclos for para iterar arreglos
- [ ] Cada bloque abierto de .then() tiene su catch
- [ ] Cada bloque abierto de try tiene su catch
- [ ] Todos los loggeos "console.log()" deben de estar comentados u omitirse
- [ ] Todos los comentarios hechos en JavaDoc tienen un espacio después \*
- [ ] Los componentes utilizan todos los props que recibe
- [ ] Los componentes no contienen código repetido
- [ ] Todas las líneas de código javascript que no representan bloques terminan en ";"
- [ ] "Todos los bloques de código que necesiten de parentesis y llaves están espaciados y con un salto de línea: () {

}"

- [ ] "Las variables encerradas en llaves deben estar con un espacio después de la llave que abre y antes de la llave que cierra; cada variable debe estar separada por "","" y un espacio: { variable1, variable2, variable3 }"
- [ ] "Los bloques de código que requieran continuación después de una llave deberán de estar separadas con un espacio seguido del otro bloque de código:

palabraReservada o ""()"" {

} palabraReservada {

}"

- [ ] Las carpetas dentro de la carpeta "pages" están escritas en PascalCase y el archivo principal que representa la página es llamado "index.jsx"
- [ ] Todos los archivos tipo ".jsx" no tienen consultas utilizando axios al backend. Solo invocan los métodos que se encuentran en la carpeta de queries
- [ ] La carpeta queries solo contiene archivos ".js" con un nombre representativo al conjunto de consultas que se va a utilizar
- [ ] La carpeta components tiene solo componentes globales
- [ ] En caso de que aplique, la carpeta pages, en sus subcarpetas de páginas, solo contiene componentes locales (componentes que solo aparecen en esa página)
- [ ] No existen archivos de CSS complementarios (Uso total de Tailwind; el único archivo .css que debe de existir es "index.css")
- [ ] No existen clases que no pertenezcan a Tailwind (la sintaxis para estilizar es el correcto)
- [ ] No existen secciones de HTML con posición absoluta sin tener un elemento padre de HTML con posición relativa
- [ ] Para contener los elementos de una página o sección de HTML solo se permitirán utilizar flexbox y grid
- [ ] Los comentarios del código carecen de errores gramaticales
- [ ] Los comentarios explican el propósito de una función o sección de código
- [ ] Los comentarios son colocados al inicio de cada función o sección
- [ ] Los comentarios están actualizados
- [ ] Los comentarios para funciones siguen el estándar "Javadoc"

## Revisa los siguientes puntos si el pull request es de develop a testing

- [ ] En caso de aplicar, ¿Ya pasó las pruebas unitarias?

- [ ] En caso de no aplicar con pruebas unitarias, ¿Ya probaste las funciones de forma manual?

- [ ] ¿Se apega al estándar de código?

- [ ] ¿Contiene JAVADOC en las funciones correspondientes?

- [ ] En caso de instalar una nueva dependencia o agregar algún archivo que todos deban agregar de forma local (por estar en gitignore) ¿Ya lo comunicaste al equipo?

- [ ] En caso de aplicar, ¿Ya corriste las pruebas unitarias de forma local en la rama?

## Revisa los siguientes puntos si el pull request es de testing a main

- [ ] Ya se hicieron pruebas de desempeño en ambiente de testing.

- [ ] Ya se hicieron pruebas de seguridad en ambiente de testing.

- [ ] Ya se hicieron pruebas de seguridad en ambiente de testing.

- [ ] Ya se ejecutaron pruebas Black Box en ambiente de testing.

- [ ] En caso de aplicar, ya se hicieron correcciones.
