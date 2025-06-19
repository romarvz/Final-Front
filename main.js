// ============================================================================
// TRABAJO PRÁCTICO GRUPAL 2 - JAVASCRIPT
// Grupo: Tech Moms 2.0
// ============================================================================

console.log(" INICIANDO TRABAJO PRÁCTICO GRUPAL 2");
console.log("===============================================");

// ____________________________________________________________________________
// SOLUCIÓN 1: CALCULAR EL ÁREA DE UN RECTÁNGULO
// ____________________________________________________________________________

function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("\n📐 SOLUCIÓN 1: ÁREA DEL RECTÁNGULO");
console.log("///////////////////////////////////////////////");
console.log("Ejemplo 1:", calcularAreaRectangulo(5, 3));
console.log("Ejemplo 2:", calcularAreaRectangulo(10, 7));
console.log("Ejemplo 3:", calcularAreaRectangulo(2.5, 4.8));

/*
Proceso de pensamiento Ejercicio 1:
Este ejercicio es bastante directo. El área de un rectángulo se calcula multiplicando
la longitud por el ancho. Lo importante aquí era entender que la función debe RETORNAR
un valor, no hacer console.log() directamente. Esto nos permite reutilizar la función
en diferentes contextos. Decidimos usar nombres de parámetros claros (longitud, ancho)
y hacer una multiplicación simple. Probamos con números enteros y decimales para
asegurar que funciona en diferentes casos.
*/

// ____________________________________________________________________________
// SOLUCIÓN 2: CONTAR PALABRAS EN UNA CADENA
// ____________________________________________________________________________

function contarPalabras(cadena) {
    // Eliminamos espacios extra y dividimos por espacios
    return cadena.trim().split(/\s+/).filter(palabra => palabra.length > 0).length;
}

console.log("\n📝 SOLUCIÓN 2: CONTAR PALABRAS");
console.log("///////////////////////////////////////////////");
console.log("Ejemplo 1:", contarPalabras("Humahuaca es un lugar copado"));
console.log("Ejemplo 2:", contarPalabras("JavaScript es genial"));
console.log("Ejemplo 3:", contarPalabras("   Una    cadena   con   espacios   extras   "));

/*
Proceso de pensamiento Ejercicio 2:
Para contar palabras, primero pensamos en usar split(' '), pero nos dimos cuenta de que
podría haber múltiples espacios entre palabras. Por eso usamos una expresión regular /\s+/
que divide por uno o más espacios en blanco. También usamos trim() para eliminar espacios
al inicio y final, y filter() para asegurar que no contemos elementos vacíos. Esto hace
la función más robusta ante diferentes formatos de entrada.
*/

// ____________________________________________________________________________
// SOLUCIÓN 3: CONTAR VOCALES EN UNA CADENA
// ____________________________________________________________________________

function contarVocales(cadena) {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    
    return contador;
}

console.log("\n🎵 SOLUCIÓN 3: CONTAR VOCALES");
console.log("///////////////////////////////////////////////");
console.log("Ejemplo 1:", contarVocales("JavaScript"));
console.log("Ejemplo 2:", contarVocales("Programación"));
console.log("Ejemplo 3:", contarVocales("UNIVERSIDAD"));

/*
Proceso de pensamiento Ejercicio 3:
Para contar vocales, creamos una cadena con todas las vocales (mayúsculas y minúsculas)
y luego iteramos cada carácter de la cadena de entrada. Usamos includes() para verificar
si cada carácter es una vocal. Consideramos usar métodos más funcionales como filter(),
pero decidimos usar un for tradicional por claridad y eficiencia. También manejamos
tanto vocales mayúsculas como minúsculas para ser más precisos.
*/

// ____________________________________________________________________________
// SOLUCIÓN 4: ENCONTRAR EL PALÍNDROMO
// ____________________________________________________________________________

function esPalindromo(palabra) {
    // Convertimos a minúsculas y eliminamos espacios
    const palabraLimpia = palabra.toLowerCase().replace(/\s+/g, '');
    const palabraInvertida = palabraLimpia.split('').reverse().join('');
    
    return palabraLimpia === palabraInvertida;
}

console.log("\n SOLUCIÓN 4: DETECTAR PALÍNDROMOS");
console.log("///////////////////////////////////////////////");
console.log("Ejemplo 1:", esPalindromo("neuquen"));
console.log("Ejemplo 2:", esPalindromo("reconocer"));
console.log("Ejemplo 3:", esPalindromo("oso"));

/*
Proceso de pensamiento Ejercicio 4:
Un palíndromo se lee igual de izquierda a derecha que de derecha a izquierda. Nuestro
enfoque fue: 1) normalizar la cadena (minúsculas, sin espacios), 2) crear una versión
invertida usando split(), reverse() y join(), 3) comparar ambas cadenas. Consideramos
también manejar acentos y caracteres especiales, pero para este ejercicio nos enfocamos
en el caso básico. La función es robusta para diferentes tipos de entrada.
*/

// ____________________________________________________________________________
// SOLUCIÓN 5: EDAD CANINA
// ____________________________________________________________________________

function edadCanina() {
    const edadHumana = prompt("¿Cuál es la edad de tu perro en años humanos?");
    const edad = parseInt(edadHumana);
    
    if (isNaN(edad) || edad < 0) {
        console.log("Por favor, ingresa una edad válida.");
        return;
    }
    
    const edadPerro = edad * 7;
    console.log(`Tu perro tiene ${edadPerro} años humanos`);
}

console.log("\n SOLUCIÓN 5: EDAD CANINA");
console.log("///////////////////////////////////////////////");
console.log("Función interactiva - usar edadCanina() para probar");
// Ejemplos programáticos para mostrar la lógica:
console.log("Ejemplo 1: Edad 3 años -> " + (3 * 7) + " años humanos");
console.log("Ejemplo 2: Edad 5 años -> " + (5 * 7) + " años humanos");
console.log("Ejemplo 3: Edad 8 años -> " + (8 * 7) + " años humanos");

/*
Proceso de pensamiento Ejercicio 5:
Este ejercicio requería usar prompt() para obtener entrada del usuario. Decidimos agregar
validación para asegurar que la entrada sea un número válido y positivo. Usamos parseInt()
para convertir la cadena a número y isNaN() para verificar si es válido. El cálculo es
simple (multiplicar por 7), pero lo importante era manejar la interacción con el usuario
de manera robusta y mostrar el resultado con un mensaje claro.
*/

// ____________________________________________________________________________
// SOLUCIÓN 6: CAPITALIZAR PALABRAS
// ____________________________________________________________________________

function capitalizarPalabras(cadena) {
    return cadena.split(' ').map(palabra => {
        if (palabra.length === 0) return palabra;
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }).join(' ');
}

console.log("\n SOLUCIÓN 6: CAPITALIZAR PALABRAS");
console.log("///////////////////////////////////////////////");
console.log("Ejemplo 1:", capitalizarPalabras("hola mundo desde javascript"));
console.log("Ejemplo 2:", capitalizarPalabras("universidad tecnológica nacional"));
console.log("Ejemplo 3:", capitalizarPalabras("PROGRAMACIÓN web AVANZADA"));

/*
Proceso de pensamiento Ejercicio 6:
Para capitalizar cada palabra, dividimos la cadena por espacios, transformamos cada palabra
individualmente y luego las reunimos. Para cada palabra: tomamos el primer carácter con
charAt(0) y lo convertimos a mayúscula, luego el resto con slice(1) en minúscula.
Usamos map() para aplicar la transformación a cada palabra de manera funcional.
Manejamos el caso de palabras vacías (múltiples espacios) para evitar errores.
*/

// ____________________________________________________________________________
// SOLUCIÓN 7: FIBONACCI
// ____________________________________________________________________________

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const secuencia = [0, 1];
    
    for (let i = 2; i < n; i++) {
        secuencia.push(secuencia[i-1] + secuencia[i-2]);
    }
    
    return secuencia;
}

console.log("\n SOLUCIÓN 7: SECUENCIA DE FIBONACCI");
console.log("///////////////////////////////////////////////");
console.log("Ejemplo 1:", fibonacci(5));
console.log("Ejemplo 2:", fibonacci(8));
console.log("Ejemplo 3:", fibonacci(10));

/*
Proceso de pensamiento Ejercicio 7:
La secuencia de Fibonacci comienza con 0, 1 y cada número siguiente es la suma de los
dos anteriores. Manejamos casos especiales (n <= 0, n = 1, n = 2) primero. Para n > 2,
inicializamos el array con [0, 1] y luego usamos un bucle para calcular cada término
siguiente sumando los dos anteriores. Consideramos usar recursión, pero el enfoque
iterativo es más eficiente y claro para este caso.
*/

// ____________________________________________________________________________
// SOLUCIÓN 8: LISTA DE PRODUCTOS
// ____________________________________________________________________________

const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
    { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
    { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
    { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
    { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

console.log("\n SOLUCIÓN 8: PRODUCTOS");
console.log("///////////////////////////////////////////////");

// 8.1 forEach: Mostrar cada producto con nombre y precio
console.log("8.1 - Productos con forEach:");
productos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});

console.log("\n_______________");

// 8.2 map: Array con solo los nombres
console.log("8.2 - Nombres con map:");
const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

console.log("\n_______________");

// 8.3 filter: Productos electrónicos con stock > 20
console.log("8.3 - Electrónicos con stock > 20:");
const electronicosStock = productos.filter(producto => 
    producto.categoria === 'electrónica' && producto.stock > 20
);
console.log(electronicosStock);

console.log("\n_______________");

// 8.4 find: Producto con id 3
console.log("8.4 - Producto con id 3:");
const productoId3 = productos.find(producto => producto.id === 3);
console.log(productoId3);

console.log("\n_______________");

// 8.5 reduce: Valor total del inventario
console.log("8.5 - Valor total del inventario:");
const valorTotal = productos.reduce((total, producto) => {
    return total + (producto.precio * producto.stock);
}, 0);
console.log(`$${valorTotal}`);

/*
Proceso de pensamiento Ejercicio 8:
Este ejercicio nos permitió practicar los métodos de array más importantes. Para forEach,
simplemente iteramos y mostramos la información. Con map, transformamos el array original
en uno nuevo con solo nombres. Para filter, aplicamos dos condiciones (categoría y stock).
Find nos devuelve el primer elemento que cumple la condición. Con reduce, acumulamos el
valor total multiplicando precio por stock de cada producto. Cada método tiene su propósito
específico y es importante usarlos correctamente.
*/

// ____________________________________________________________________________
// SOLUCIÓN 9: ESTUDIANTES Y CALIFICACIONES
// ____________________________________________________________________________

const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
    { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
    { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
    { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

console.log("\n🎓 SOLUCIÓN 9: ESTUDIANTES");
console.log("///////////////////////////////////////////////");

// 9.1 forEach: Mostrar nombre y edad
console.log("9.1 - Estudiantes con forEach:");
estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre} - ${estudiante.edad} años`);
});

console.log("\n_______________");

// 9.2 map: Array con nombre y promedio
console.log("9.2 - Estudiantes con promedio:");
const estudiantesPromedio = estudiantes.map(estudiante => {
    const promedio = estudiante.calificaciones.reduce((sum, nota) => sum + nota, 0) / estudiante.calificaciones.length;
    return {
        nombre: estudiante.nombre,
        promedio: promedio.toFixed(2)
    };
});
console.log(estudiantesPromedio);

console.log("\n_______________");

// 9.3 filter: Estudiantes con promedio mayor a  7.5
console.log("9.3 - Estudiantes con promedio > 7.5:");
const estudiantesBuenPromedio = estudiantes.filter(estudiante => {
    const promedio = estudiante.calificaciones.reduce((sum, nota) => sum + nota, 0) / estudiante.calificaciones.length;
    return promedio > 7.5;
});
console.log(estudiantesBuenPromedio);

console.log("\n_______________");

// 9.4 find: Estudiante llamado 'María'
console.log("9.4 - Estudiante María:");
const maria = estudiantes.find(estudiante => estudiante.nombre === 'María');
console.log(maria);

console.log("\n_______________");

// 9.5 reduce: Edad promedio
console.log("9.5 - Edad promedio:");
const edadPromedio = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0) / estudiantes.length;
console.log(`${edadPromedio.toFixed(1)} años`);

/*
Proceso de pensamiento Ejercicio 9:
Este ejercicio era más complejo porque requería calcular promedios de calificaciones.
Para el map, creamos un nuevo objeto con nombre y promedio calculado. En filter,
tuvimos que calcular el promedio para cada estudiante y filtrar los que superen 7.5.
Para find, simplemente buscamos por nombre. En reduce, sumamos todas las edades y
dividimos por la cantidad de estudiantes. Utilizamos toFixed() para mostrar decimales
de manera elegante.
*/

// ____________________________________________________________________________
// SOLUCIÓN 10: PELÍCULAS
// ____________________________________________________________________________

const peliculas = [
    { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
    { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
    { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
    { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
    { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

console.log("\n🎬 SOLUCIÓN 10: PELÍCULAS");
console.log("///////////////////////////////////////////////");

// 10.1 forEach: Mostrar título y año
console.log("10.1 - Películas con forEach:");
peliculas.forEach(pelicula => {
    console.log(`${pelicula.titulo} (${pelicula.año})`);
});

console.log("\n_______________");

// 10.2 map: Títulos en mayúsculas
console.log("10.2 - Títulos en mayúsculas:");
const titulosMayusculas = peliculas.map(pelicula => pelicula.titulo.toUpperCase());
console.log(titulosMayusculas);

console.log("\n_______________");

// 10.3 filter: Dramas con rating > 8.5
console.log("10.3 - Dramas con rating > 8.5:");
const dramasAltoRating = peliculas.filter(pelicula => 
    pelicula.genero === 'drama' && pelicula.rating > 8.5
);
console.log(dramasAltoRating);

console.log("\n_______________");

// 10.4 find: Película de 2014
console.log("10.4 - Película de 2014:");
const pelicula2014 = peliculas.find(pelicula => pelicula.año === 2014);
console.log(pelicula2014);

console.log("\n_______________");

// 10.5 reduce: Duración total
console.log("10.5 - Duración total:");
const duracionTotal = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
console.log(`${duracionTotal} minutos (${(duracionTotal / 60).toFixed(1)} horas)`);

/*
Proceso de pensamiento Ejercicio 10:
Este último ejercicio siguió el mismo patrón que los anteriores pero con datos de películas.
Para forEach, mostramos título y año con formato elegante. Con map, convertimos todos los
títulos a mayúsculas usando toUpperCase(). En filter, aplicamos dos condiciones: género
'drama' y rating mayor a 8.5. Find nos permitió localizar la película del 2014. Para reduce,
sumamos todas las duraciones y agregamos una conversión a horas para mejor comprensión.
La clave fue mantener consistencia en el formato y agregar detalles útiles.
*/

// ============================================================================
// FIN DEL TRABAJO PRÁCTICO
// ============================================================================

console.log("\n TRABAJO PRÁCTICO COMPLETADO");
console.log("===============================================");
console.log("Todos los ejercicios han sido ejecutados correctamente.");
console.log("Revisa los resultados arriba para verificar las soluciones.");