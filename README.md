# Trabajo Práctico Grupal 2

## Integrantes del Grupo
- Daniela Homobono
- Verónica Hassen
- Romina Zagordo

## Descripción
Este trabajo práctico consiste en la implementación de diversas funciones en JavaScript que demuestran diferentes conceptos y técnicas de programación.

## Estructura del Proyecto
- `index.html`: Página principal con la información del grupo
- `main.js`: Archivo JavaScript con todas las implementaciones

## Ejercicios Implementados

### 1. Calcular el área de un rectángulo
Función que recibe la longitud y el ancho de un rectángulo y devuelve su área.
```javascript
calcularAreaRectangulo(5, 3); // Resultado: 15
```

**Proceso de pensamiento:** Para resolver este ejercicio, aplicamos la fórmula matemática básica del área de un rectángulo (longitud × ancho). Implementamos una función pura que recibe dos parámetros y retorna el resultado de la multiplicación, sin efectos secundarios.

### 2. Contar palabras en una cadena
Función que recibe una cadena de texto y devuelve la cantidad de palabras.
```javascript
contarPalabras("Humahuaca es un lugar copado"); // Resultado: 5
```

**Proceso de pensamiento:** Identificamos que las palabras están separadas por espacios, pero debíamos considerar casos especiales como múltiples espacios o espacios al inicio/final. Utilizamos trim() para eliminar espacios externos y una expresión regular \s+ para dividir por uno o más espacios, obteniendo un array cuya longitud representa el número de palabras.

### 3. Contar vocales en una cadena
Función que recibe una cadena y cuenta el número de vocales.
```javascript
contarVocales("JavaScript"); // Resultado: 3
```

**Proceso de pensamiento:** Para contar vocales, utilizamos una expresión regular que identifica todas las vocales (tanto mayúsculas como minúsculas, incluyendo vocales con tilde). El método match() nos devuelve un array con todas las coincidencias, y usamos el operador || [] para manejar el caso de que no haya vocales.

### 4. Encontrar el palíndromo
Función que recibe un string y devuelve true o false si es un palíndromo.
```javascript
esPalindromo("neuquen"); // true
```

**Proceso de pensamiento:** Para verificar palíndromos, primero normalizamos el texto eliminando espacios, signos de puntuación y convirtiendo todo a minúsculas. Luego comparamos la cadena original con su versión invertida (usando split, reverse y join). Esta aproximación permite identificar palíndromos complejos como frases completas.

### 5. Calcular edad canina
Función que convierte la edad de un perro a años humanos (7 veces la edad humana).
```javascript
edadCanina(7); // Tu perro tiene 49 años humanos
```

**Proceso de pensamiento:** Este ejercicio requería interacción con el usuario mediante prompt(). Implementamos validaciones para asegurar que la entrada sea un número positivo, y luego aplicamos la fórmula de conversión (multiplicar por 7). La función muestra el resultado directamente en la consola en lugar de retornarlo.

### 6. Capitalizar palabras
Función que convierte la primera letra de cada palabra en mayúscula.
```javascript
capitalizarPalabras("hola mundo desde javascript"); // "Hola Mundo Desde Javascript"
```

**Proceso de pensamiento:** Para capitalizar correctamente, dividimos la cadena en palabras, transformamos cada palabra (primera letra a mayúscula, resto en minúscula) y luego unimos nuevamente. Utilizamos el método map() para aplicar esta transformación a cada palabra del array resultante del split.

### 7. Sucesión de Fibonacci
Función que genera los primeros N números de la sucesión de Fibonacci.
```javascript
fibonacci(5); // [0, 1, 1, 2, 3]
```

**Proceso de pensamiento:** Implementamos la secuencia de Fibonacci de forma iterativa, comenzando con los casos base [0] y [0,1]. Para cada número adicional, sumamos los dos anteriores y los agregamos al array. Manejamos casos especiales como n≤0 y n=1 para asegurar que la función sea robusta ante diferentes entradas.

### 8. Lista de Productos
Implementación de diferentes operaciones sobre un array de productos:
- Mostrar cada producto con nombre y precio
- Crear array con nombres de productos
- Filtrar productos electrónicos con stock > 20
- Encontrar producto por ID
- Calcular valor total del inventario

**Proceso de pensamiento:** Para este ejercicio, aplicamos diferentes métodos de array para manipular datos estructurados. Utilizamos forEach para iterar y mostrar información, map para transformar datos, filter para seleccionar elementos según criterios, find para buscar elementos específicos y reduce para calcular valores acumulados.

### 9. Estudiantes y Calificaciones
Implementación de operaciones sobre un array de estudiantes:
- Mostrar nombre y edad de cada estudiante
- Crear array con nombre y promedio de calificaciones
- Filtrar estudiantes con promedio > 7.5
- Encontrar estudiante por nombre
- Calcular edad promedio de los estudiantes

**Proceso de pensamiento:** Similar al ejercicio anterior, pero con estructuras de datos más complejas que incluían arrays anidados (calificaciones). Utilizamos reduce dentro de map para calcular promedios, combinamos filter con cálculos para seleccionar estudiantes destacados, y aplicamos reduce para obtener estadísticas grupales.

### 10. Películas
Implementación de operaciones sobre un array de películas:
- Mostrar título y año de cada película
- Crear array de títulos en mayúsculas
- Filtrar películas de drama con rating > 8.5
- Encontrar película por año
- Calcular duración total de todas las películas

**Proceso de pensamiento:** En este ejercicio final, aplicamos todos los conceptos anteriores a un nuevo conjunto de datos. Mejoramos la presentación de resultados, como convertir la duración total de minutos a un formato de horas y minutos. Combinamos condiciones en filter para obtener resultados más específicos y utilizamos transformaciones de strings para el manejo de mayúsculas.

## Notas de Implementación
- Cada función incluye tres ejemplos de uso
- Los resultados se muestran por consola
- Las soluciones están separadas con separadores visuales
- Cada ejercicio incluye comentarios explicando el proceso de pensamiento y la solución

## Cómo Ejecutar
1. Abrir el archivo `index.html` en un navegador web
2. Abrir la consola del navegador (F12 o clic derecho -> Inspeccionar -> Consola)
3. Los resultados de cada ejercicio se mostrarán en la consola
4. Alternativamente, usar el menú interactivo para probar cada función con valores personalizados