// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("Solución 1:");
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log(calcularAreaRectangulo(10, 4)); // Resultado: 40
console.log(calcularAreaRectangulo(7, 6)); // Resultado: 42
console.log("/////////////////////////////////");

/* 
Proceso de pensamiento:
Para calcular el área de un rectángulo, simplemente necesitamos multiplicar la longitud por el ancho.
La función es directa y no requiere validaciones adicionales ya que asumimos que los parámetros
serán números válidos. La implementación es simple y eficiente.
*/

// 2. Contar palabras en una cadena
function contarPalabras(cadena) {
    return cadena.trim().split(/\s+/).length;
}

console.log("Solución 2:");
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log(contarPalabras("JavaScript es genial")); // Resultado: 3
console.log(contarPalabras("Hola mundo desde JavaScript")); // Resultado: 4
console.log("/////////////////////////////////");

/* 
Proceso de pensamiento:
Para contar palabras, primero eliminamos espacios en blanco al inicio y final con trim(),
luego dividimos la cadena usando split() con una expresión regular que maneja múltiples espacios.
Finalmente, contamos los elementos del array resultante.
*/

// 3. Contar vocales en una cadena
function contarVocales(cadena) {
    return (cadena.match(/[aeiouAEIOU]/g) || []).length;
}

console.log("Solución 3:");
console.log(contarVocales("JavaScript")); // Resultado: 3
console.log(contarVocales("Hola Mundo")); // Resultado: 4
console.log(contarVocales("AEIOU")); // Resultado: 5
console.log("/////////////////////////////////");

/* 
Proceso de pensamiento:
Utilizamos una expresión regular para encontrar todas las vocales (mayúsculas y minúsculas)
en la cadena. El método match() devuelve un array con todas las coincidencias, y si no hay
coincidencias, usamos el operador || para devolver un array vacío. Finalmente, obtenemos
la longitud del array.
*/

// 4. Encontrar el palíndromo
function esPalindromo(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}

console.log("Solución 4:");
console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("javascript")); // false
console.log("/////////////////////////////////");

/* 
Proceso de pensamiento:
Para verificar si una palabra es palíndromo, primero limpiamos la cadena eliminando
caracteres especiales y convirtiendo todo a minúsculas. Luego comparamos la cadena
original con su versión invertida. La inversión se logra convirtiendo la cadena en
array, invirtiendo el array y uniéndolo de nuevo.
*/

// 5. Calcular edad canina
function edadCanina() {
    const edadHumana = prompt("Ingrese la edad de su perro en años humanos:");
    const edadPerro = edadHumana * 7;
    console.log(`Tu perro tiene ${edadPerro} años humanos`);
}

console.log("Solución 5:");
edadCanina(); // Se ejecutará cuando se llame a la función
console.log("/////////////////////////////////");

/* 
Proceso de pensamiento:
Esta función utiliza prompt() para obtener la entrada del usuario y realiza
un cálculo simple multiplicando la edad por 7. La función no retorna un valor
sino que muestra el resultado directamente en la consola.
*/

// 6. Capitalizar palabras
function capitalizarPalabras(cadena) {
    return cadena.split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}

console.log("Solución 6:");
console.log(capitalizarPalabras("hola mundo desde javascript")); // "Hola Mundo Desde Javascript"
console.log(capitalizarPalabras("buenos dias")); // "Buenos Dias"
console.log(capitalizarPalabras("programacion web")); // "Programacion Web"
console.log("/////////////////////////////////");

/* 
Proceso de pensamiento:
Dividimos la cadena en palabras, luego usamos map() para transformar cada palabra
capitalizando su primera letra y manteniendo el resto igual. Finalmente, unimos
las palabras con espacios.
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

console.log("Solución 7:");
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(3)); // [0, 1, 1]
console.log("/////////////////////////////////");

/* 
Proceso de pensamiento:
Implementamos la sucesión de Fibonacci usando un array para almacenar los números.
Comenzamos con los dos primeros números (0 y 1) y luego iteramos para calcular
los siguientes números sumando los dos anteriores.
*/

// 8. Lista de Productos
const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
    { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
    { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
    { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
    { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

console.log("Solución 8:");
// 1. forEach
productos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});

// 2. map
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

// 3. filter
const productosElectronicos = productos.filter(producto => 
    producto.categoria === 'electrónica' && producto.stock > 20
);
console.log(productosElectronicos);

// 4. find
const productoId3 = productos.find(producto => producto.id === 3);
console.log(productoId3);

// 5. reduce
const valorTotal = productos.reduce((total, producto) => 
    total + (producto.precio * producto.stock), 0
);
console.log(`Valor total del inventario: $${valorTotal}`);
console.log("/////////////////////////////////");

/* 
Proceso de pensamiento:
Utilizamos diferentes métodos de array para manipular los datos de productos.
forEach para iterar, map para transformar, filter para filtrar, find para buscar
y reduce para calcular un valor total. Cada método se usa según su propósito
específico en el manejo de datos.
*/

// 9. Estudiantes y Calificaciones
const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
    { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
    { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
    { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

console.log("Solución 9:");
// 1. forEach
estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre}: ${estudiante.edad} años`);
});

// 2. map
const promedios = estudiantes.map(estudiante => ({
    nombre: estudiante.nombre,
    promedio: estudiante.calificaciones.reduce((a, b) => a + b) / estudiante.calificaciones.length
}));
console.log(promedios);

// 3. filter
const estudiantesDestacados = estudiantes.filter(estudiante => {
    const promedio = estudiante.calificaciones.reduce((a, b) => a + b) / estudiante.calificaciones.length;
    return promedio > 7.5;
});
console.log(estudiantesDestacados);

// 4. find
const estudianteMaria = estudiantes.find(estudiante => estudiante.nombre === 'María');
console.log(estudianteMaria);

// 5. reduce
const edadPromedio = estudiantes.reduce((total, estudiante) => 
    total + estudiante.edad, 0) / estudiantes.length;
console.log(`Edad promedio: ${edadPromedio}`);
console.log("/////////////////////////////////");

/* 
Proceso de pensamiento:
Similar al ejercicio anterior, utilizamos métodos de array para manipular los datos
de estudiantes. Calculamos promedios, filtramos por calificaciones y calculamos
estadísticas como la edad promedio.
*/

// 10. Películas
const peliculas = [
    { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
    { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
    { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
    { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
    { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

console.log("Solución 10:");
// 1. forEach
peliculas.forEach(pelicula => {
    console.log(`${pelicula.titulo} (${pelicula.año})`);
});

// 2. map
const titulosMayusculas = peliculas.map(pelicula => pelicula.titulo.toUpperCase());
console.log(titulosMayusculas);

// 3. filter
const peliculasDrama = peliculas.filter(pelicula => 
    pelicula.genero === 'drama' && pelicula.rating > 8.5
);
console.log(peliculasDrama);

// 4. find
const pelicula2014 = peliculas.find(pelicula => pelicula.año === 2014);
console.log(pelicula2014);

// 5. reduce
const duracionTotal = peliculas.reduce((total, pelicula) => 
    total + pelicula.duracion, 0
);
console.log(`Duración total: ${duracionTotal} minutos`);
console.log("/////////////////////////////////");

/* 
Proceso de pensamiento:
En este ejercicio final, aplicamos los mismos conceptos de manipulación de arrays
a un conjunto de datos de películas. Utilizamos los métodos de array para mostrar
información, transformar datos, filtrar por criterios específicos y calcular
totales.
*/ 