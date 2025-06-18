/*
* Trabajo Práctico Obligatorio 2
* Grupo: Tech Moms
* Integrantes:
* - Daniela Homobono
* - Verónica Hassen
* - Romina Zagordo
*/

console.log("TRABAJO PRÁCTICO OBLIGATORIO 2");
console.log("==============================");
console.log("");

// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("Solución 1: Área del rectángulo");
console.log("--------------------------------");
console.log(calcularAreaRectangulo(5, 3));  // Resultado: 15
console.log(calcularAreaRectangulo(10, 8)); // Resultado: 80
console.log(calcularAreaRectangulo(4, 2));  // Resultado: 8
console.log("");
console.log("______________________________________________");
console.log("");

/* 
Proceso de pensamiento ejercicio 1:
Para calcular el área de un rectángulo, implementé una función simple que multiplica
la longitud por el ancho. La función es pura y retorna el resultado en lugar de
imprimirlo, siguiendo el principio de responsabilidad única. No se requieren
validaciones adicionales según la consigna.
*/

// 2. Contar palabras en una cadena
function contarPalabras(cadena) {
    return cadena.trim().split(/\s+/).length;
}

console.log("Solución 2: Contar palabras");
console.log("--------------------------");
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log(contarPalabras("El código es divertido")); // Resultado: 4
console.log(contarPalabras("¡Hola    Mundo!")); // Resultado: 2 (maneja múltiples espacios)
console.log("");
console.log("______________________________________________");
console.log("");

/* 
Proceso de pensamiento ejercicio 2:
Para contar palabras correctamente, consideré tres aspectos importantes:
1. Eliminar espacios al inicio y final con trim()
2. Manejar múltiples espacios entre palabras usando regex \s+
3. Contar los elementos resultantes del split
Esta solución es robusta y maneja casos especiales como múltiples espacios.
*/

// 3. Contar vocales en una cadena
function contarVocales(cadena) {
    return (cadena.toLowerCase().match(/[aeiouáéíóú]/g) || []).length;
}

console.log("Solución 3: Contar vocales");
console.log("-------------------------");
console.log(contarVocales("JavaScript")); // Resultado: 3
console.log(contarVocales("MURCIÉLAGO")); // Resultado: 5 (incluye vocales con tilde)
console.log(contarVocales("¿Qué tal?")); // Resultado: 2
console.log("");
console.log("______________________________________________");
console.log("");

/* 
Proceso de pensamiento ejercicio 3:
Mejoré la función para que:
1. Convierta todo a minúsculas para simplificar la búsqueda
2. Incluya vocales con tilde para textos en español
3. Use el operador || [] para manejar strings sin vocales
La expresión regular busca cualquier vocal, con o sin tilde.
*/

// 4. Encontrar el palíndromo
function esPalindromo(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-zñáéíóú]/g, '');
    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}

console.log("Solución 4: Verificar palíndromo");
console.log("-------------------------------");
console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("Anita lava la tina")); // true (ignora espacios)
console.log(esPalindromo("¿Será o no será?")); // false
console.log("");
console.log("______________________________________________");
console.log("");

/* 
Proceso de pensamiento ejercicio 4:
La función fue mejorada para:
1. Manejar textos en español (ñ y tildes)
2. Ignorar espacios y signos de puntuación
3. No distinguir entre mayúsculas y minúsculas
Esto permite verificar palíndromos más complejos como frases completas.
*/

// 5. Calcular edad canina
function edadCanina(edad) {
    return edad * 7;
}

console.log("Solución 5: Edad canina");
console.log("----------------------");
// Esta es la única función que pide input al usuario
const edadHumana = prompt("Ingrese la edad de su perro en años humanos:");
if (!isNaN(edadHumana) && edadHumana > 0) {
    const edadPerro = edadCanina(Number(edadHumana));
    console.log(`Tu perro tiene ${edadPerro} años humanos`);
} else {
    console.log("Por favor ingrese una edad válida");
}
console.log("");
console.log("______________________________________________");
console.log("");

/* 
Proceso de pensamiento ejercicio 5:
Agregué validación para:
1. Verificar que el input sea un número
2. Asegurar que la edad sea positiva
3. Manejar casos de error
La función ahora es más robusta y proporciona mejor feedback al usuario.
*/

// 6. Capitalizar palabras
function capitalizarPalabras(cadena) {
    return cadena.toLowerCase().split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}

console.log("Solución 6: Capitalizar palabras");
console.log("-------------------------------");
console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript"
console.log(capitalizarPalabras("PROGRAMACIÓN WEB")); // Resultado: "Programación Web"
console.log(capitalizarPalabras("¡bienvenidos a js!")); // Resultado: "¡bienvenidos A Js!"
console.log("");
console.log("______________________________________________");
console.log("");

/* 
Proceso de pensamiento ejercicio 6:
La función fue diseñada para:
1. Normalizar primero el texto a minúsculas
2. Capitalizar la primera letra de cada palabra
3. Mantener el resto de la palabra en minúsculas
Esto asegura un formato consistente independientemente del input.
*/

// 7. Sucesión de Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const secuencia = [0, 1];
    for (let i = 2; i < n; i++) {
        secuencia.push(secuencia[i-1] + secuencia[i-2]);
    }
    return secuencia;
}

console.log("Solución 7: Secuencia Fibonacci");
console.log("-----------------------------");
console.log(fibonacci(5));  // [0, 1, 1, 2, 3]
console.log(fibonacci(8));  // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(3));  // [0, 1, 1]
console.log("");
console.log("______________________________________________");
console.log("");

/* 
Proceso de pensamiento ejercicio 7:
La implementación considera:
1. Casos base (n ≤ 0 y n = 1)
2. Generación iterativa de la secuencia
3. Uso de array para almacenar y retornar la secuencia
La solución es eficiente y maneja todos los casos posibles.
*/

// 8. Lista de Productos
const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
    { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
    { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
    { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
    { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

console.log("Solución 8: Operaciones con productos");
console.log("----------------------------------");

// 8.1 forEach
console.log("8.1 Lista de productos y precios:");
productos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});
console.log("");

// 8.2 map
console.log("8.2 Lista de nombres:");
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);
console.log("");

// 8.3 filter
console.log("8.3 Productos electrónicos con stock > 20:");
const productosElectronicos = productos.filter(producto => 
    producto.categoria === 'electrónica' && producto.stock > 20
);
console.log(productosElectronicos);
console.log("");

// 8.4 find
console.log("8.4 Producto con id 3:");
const productoId3 = productos.find(producto => producto.id === 3);
console.log(productoId3);
console.log("");

// 8.5 reduce
console.log("8.5 Valor total del inventario:");
const valorTotal = productos.reduce((total, producto) => 
    total + (producto.precio * producto.stock), 0
);
console.log(`$${valorTotal}`);

console.log("");
console.log("______________________________________________");
console.log("");

/* 
Proceso de pensamiento ejercicio 8:
Se implementaron los 5 métodos de array solicitados:
1. forEach para iterar y mostrar información
2. map para transformar datos
3. filter para filtrar según criterios
4. find para buscar un elemento específico
5. reduce para calcular un valor acumulado
Cada método se utilizó según su propósito específico.
*/

// 9. Estudiantes y Calificaciones
const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
    { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
    { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
    { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

console.log("Solución 9: Operaciones con estudiantes");
console.log("------------------------------------");

// 9.1 forEach
console.log("9.1 Lista de estudiantes:");
estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre}: ${estudiante.edad} años`);
});
console.log("");

// 9.2 map
console.log("9.2 Promedios:");
const promedios = estudiantes.map(estudiante => ({
    nombre: estudiante.nombre,
    promedio: (estudiante.calificaciones.reduce((a, b) => a + b) / 
               estudiante.calificaciones.length).toFixed(2)
}));
console.log(promedios);
console.log("");

// 9.3 filter
console.log("9.3 Estudiantes destacados (promedio > 7.5):");
const estudiantesDestacados = estudiantes.filter(estudiante => {
    const promedio = estudiante.calificaciones.reduce((a, b) => a + b) / 
                    estudiante.calificaciones.length;
    return promedio > 7.5;
});
console.log(estudiantesDestacados);
console.log("");

// 9.4 find
console.log("9.4 Buscar a María:");
const estudianteMaria = estudiantes.find(estudiante => estudiante.nombre === 'María');
console.log(estudianteMaria);
console.log("");

// 9.5 reduce
console.log("9.5 Edad promedio:");
const edadPromedio = (estudiantes.reduce((total, estudiante) => 
    total + estudiante.edad, 0) / estudiantes.length).toFixed(1);
console.log(`${edadPromedio} años`);

console.log("");
console.log("______________________________________________");
console.log("");

/* 
Proceso de pensamiento ejercicio 9:
Se aplicaron los métodos de array para:
1. Mostrar información básica con forEach
2. Calcular promedios con map y reduce anidado
3. Filtrar estudiantes destacados
4. Buscar estudiante específico
5. Calcular estadísticas del grupo
Se agregó formato a decimales para mejor presentación.
*/

// 10. Películas
const peliculas = [
    { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
    { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
    { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
    { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
    { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

console.log("Solución 10: Operaciones con películas");
console.log("-----------------------------------");

// 10.1 forEach
console.log("10.1 Lista de películas:");
peliculas.forEach(pelicula => {
    console.log(`${pelicula.titulo} (${pelicula.año})`);
});
console.log("");

// 10.2 map
console.log("10.2 Títulos en mayúsculas:");
const titulosMayusculas = peliculas.map(pelicula => pelicula.titulo.toUpperCase());
console.log(titulosMayusculas);
console.log("");

// 10.3 filter
console.log("10.3 Películas de drama con rating > 8.5:");
const peliculasDrama = peliculas.filter(pelicula => 
    pelicula.genero === 'drama' && pelicula.rating > 8.5
);
console.log(peliculasDrama);
console.log("");

// 10.4 find
console.log("10.4 Película de 2014:");
const pelicula2014 = peliculas.find(pelicula => pelicula.año === 2014);
console.log(pelicula2014);
console.log("");

// 10.5 reduce
console.log("10.5 Duración total:");
const duracionTotal = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
const duracionHoras = Math.floor(duracionTotal / 60);
const duracionMinutos = duracionTotal % 60;
console.log(`${duracionHoras} horas y ${duracionMinutos} minutos (${duracionTotal} minutos)`);

console.log("");
console.log("______________________________________________");

/* 
Proceso de pensamiento ejercicio 10:
Se implementaron las operaciones requeridas y se agregaron mejoras:
1. Formato claro para mostrar películas y años
2. Transformación a mayúsculas preservando el texto original
3. Filtrado combinando dos condiciones
4. Búsqueda precisa por año
5. Cálculo de duración total con formato horas y minutos
La presentación de los resultados se mejoró para mayor claridad.
*/