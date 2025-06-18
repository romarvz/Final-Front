/*
* Trabajo Práctico Obligatorio 2
* Grupo: Tech Moms
* Integrantes:
* - Daniela Homobono
* - Verónica Hassen
* - Romina Zagordo
*/

// Función para ejecutar pruebas interactivas
function iniciarPruebas() {
console.log("TRABAJO PRÁCTICO OBLIGATORIO 2");
console.log("==============================");
console.log("");

// Menú de opciones
console.log("Seleccione una función para probar (1-10):");
console.log("1. Calcular área de rectángulo");
console.log("2. Contar palabras");
console.log("3. Contar vocales");
console.log("4. Verificar palíndromo");
console.log("5. Calcular edad canina");
console.log("6. Capitalizar palabras");
console.log("7. Secuencia Fibonacci");
console.log("8. Operaciones con productos");
console.log("9. Operaciones con estudiantes");
console.log("10. Operaciones con películas");

const opcion = prompt("Ingrese el número de la función a probar (1-10):");

switch(opcion) {
case "1":
    probarAreaRectangulo();
    break;
case "2":
    probarContarPalabras();
    break;
case "3":
    probarContarVocales();
    break;
case "4":
    probarPalindromo();
    break;
case "5":
    probarEdadCanina();
    break;
case "6":
    probarCapitalizarPalabras();
    break;
case "7":
    probarFibonacci();
    break;
case "8":
    probarProductos();
    break;
case "9":
    probarEstudiantes();
    break;
case "10":
    probarPeliculas();
    break;
    default:
    console.log("Opción no válida. Intente nuevamente.");
    iniciarPruebas();
}
}

// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
  return longitud * ancho;
}

function probarAreaRectangulo() {
  console.log("Solución 1: Área del rectángulo");
  console.log("--------------------------------");
  
  const longitud = parseFloat(prompt("Ingrese la longitud del rectángulo:"));
  const ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
  
  if (!isNaN(longitud) && !isNaN(ancho)) {
    const resultado = calcularAreaRectangulo(longitud, ancho);
    console.log(`El área del rectángulo es: ${resultado}`);
  } else {
    console.log("Por favor ingrese valores numéricos válidos.");
  }
  
  console.log("");
  console.log("______________________________________________");
  console.log("");
  
  const continuar = confirm("¿Desea probar otra función?");
  if (continuar) iniciarPruebas();
}

/* 
Proceso de pensamiento ejercicio 1:
Para calcular el área de un rectángulo, implementé una función simple que multiplica
la longitud por el ancho. La función es pura y retorna el resultado en lugar de
imprimirlo, siguiendo el principio de responsabilidad única.
*/

// 2. Contar palabras en una cadena
function contarPalabras(cadena) {
  return cadena.trim().split(/\s+/).length;
}

function probarContarPalabras() {
  console.log("Solución 2: Contar palabras");
  console.log("--------------------------");
  
  const texto = prompt("Ingrese un texto para contar sus palabras:");
  
  if (texto) {
    const resultado = contarPalabras(texto);
    console.log(`El texto tiene ${resultado} palabras.`);
  } else {
    console.log("No se ingresó ningún texto.");
  }
  
  console.log("");
  console.log("______________________________________________");
  console.log("");
  
  const continuar = confirm("¿Desea probar otra función?");
  if (continuar) iniciarPruebas();
}

/* 
Proceso de pensamiento ejercicio 2:
Para contar palabras correctamente, consideré tres aspectos importantes:
1. Eliminar espacios al inicio y final con trim()
2. Manejar múltiples espacios entre palabras usando regex \s+
3. Contar los elementos resultantes del split
*/

// 3. Contar vocales en una cadena
function contarVocales(cadena) {
  return (cadena.toLowerCase().match(/[aeiouáéíóú]/g) || []).length;
}

function probarContarVocales() {
  console.log("Solución 3: Contar vocales");
  console.log("-------------------------");
  
  const texto = prompt("Ingrese un texto para contar sus vocales:");
  
  if (texto) {
    const resultado = contarVocales(texto);
    console.log(`El texto tiene ${resultado} vocales.`);
  } else {
    console.log("No se ingresó ningún texto.");
  }
  
  console.log("");
  console.log("______________________________________________");
  console.log("");
  
  const continuar = confirm("¿Desea probar otra función?");
  if (continuar) iniciarPruebas();
}

/* 
Proceso de pensamiento ejercicio 3:
Mejoré la función para que:
1. Convierta todo a minúsculas para simplificar la búsqueda
2. Incluya vocales con tilde para textos en español
3. Use el operador || [] para manejar strings sin vocales
*/

// 4. Encontrar el palíndromo
function esPalindromo(cadena) {
  const cadenaLimpia = cadena.toLowerCase().replace(/[^a-zñáéíóú]/g, '');
  return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}

function probarPalindromo() {
  console.log("Solución 4: Verificar palíndromo");
  console.log("-------------------------------");
  
  const texto = prompt("Ingrese un texto para verificar si es palíndromo:");
  
  if (texto) {
    const resultado = esPalindromo(texto);
    console.log(`¿Es palíndromo? ${resultado ? 'Sí' : 'No'}`);
  } else {
    console.log("No se ingresó ningún texto.");
  }
  
  console.log("");
  console.log("______________________________________________");
  console.log("");
  
  const continuar = confirm("¿Desea probar otra función?");
  if (continuar) iniciarPruebas();
}

/* 
Proceso de pensamiento ejercicio 4:
La función fue mejorada para:
1. Manejar textos en español (ñ y tildes)
2. Ignorar espacios y signos de puntuación
3. No distinguir entre mayúsculas y minúsculas
*/

// 5. Calcular edad canina
function edadCanina(edad) {
  return edad * 7;
}

function probarEdadCanina() {
  console.log("Solución 5: Edad canina");
  console.log("----------------------");
  
  const edadHumana = parseFloat(prompt("Ingrese la edad de su perro en años humanos:"));
  
  if (!isNaN(edadHumana) && edadHumana > 0) {
    const edadPerro = edadCanina(edadHumana);
    console.log(`Tu perro tiene ${edadPerro} años humanos.`);
  } else {
    console.log("Por favor ingrese una edad válida.");
  }
  
  console.log("");
  console.log("______________________________________________");
  console.log("");
  
  const continuar = confirm("¿Desea probar otra función?");
  if (continuar) iniciarPruebas();
}

/* 
Proceso de pensamiento ejercicio 5:
Agregué validación para:
1. Verificar que el input sea un número
2. Asegurar que la edad sea positiva
3. Manejar casos de error
*/

// 6. Capitalizar palabras
function capitalizarPalabras(cadena) {
  return cadena.toLowerCase().split(' ')
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ');
}

function probarCapitalizarPalabras() {
  console.log("Solución 6: Capitalizar palabras");
  console.log("-------------------------------");
  
  const texto = prompt("Ingrese un texto para capitalizar sus palabras:");
  
  if (texto) {
    const resultado = capitalizarPalabras(texto);
    console.log(`Resultado: "${resultado}"`);
  } else {
    console.log("No se ingresó ningún texto.");
  }
  
  console.log("");
  console.log("______________________________________________");
  console.log("");
  
  const continuar = confirm("¿Desea probar otra función?");
  if (continuar) iniciarPruebas();
}

/* 
Proceso de pensamiento ejercicio 6:
La función fue diseñada para:
1. Normalizar primero el texto a minúsculas
2. Capitalizar la primera letra de cada palabra
3. Mantener el resto de la palabra en minúsculas
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

function probarFibonacci() {
  console.log("Solución 7: Secuencia Fibonacci");
  console.log("-----------------------------");
  
  const n = parseInt(prompt("Ingrese cuántos números de la secuencia Fibonacci desea generar:"));
  
  if (!isNaN(n) && n >= 0) {
    const resultado = fibonacci(n);
    console.log(`Secuencia Fibonacci (${n} números): ${resultado}`);
  } else {
    console.log("Por favor ingrese un número entero no negativo.");
  }
  
  console.log("");
  console.log("______________________________________________");
  console.log("");
  
  const continuar = confirm("¿Desea probar otra función?");
  if (continuar) iniciarPruebas();
}

/* 
Proceso de pensamiento ejercicio 7:
La implementación considera:
1. Casos base (n ≤ 0 y n = 1)
2. Generación iterativa de la secuencia
3. Uso de array para almacenar y retornar la secuencia
*/

// 8. Lista de Productos
const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
  { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
  { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
  { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

function probarProductos() {
  console.log("Solución 8: Operaciones con productos");
  console.log("----------------------------------");
  
  console.log("Seleccione una operación:");
  console.log("1. Mostrar productos y precios (forEach)");
  console.log("2. Listar nombres de productos (map)");
  console.log("3. Filtrar productos electrónicos con stock > 20 (filter)");
  console.log("4. Buscar producto por ID (find)");
  console.log("5. Calcular valor total del inventario (reduce)");
  
  const opProducto = prompt("Ingrese el número de la operación (1-5):");
  
  switch(opProducto) {
    case "1":
      console.log("Lista de productos y precios:");
      productos.forEach(producto => {
        console.log(`${producto.nombre}: $${producto.precio}`);
      });
      break;
    case "2":
      const nombresProductos = productos.map(producto => producto.nombre);
      console.log("Lista de nombres:", nombresProductos);
      break;
    case "3":
      const productosElectronicos = productos.filter(producto => 
        producto.categoria === 'electrónica' && producto.stock > 20
      );
      console.log("Productos electrónicos con stock > 20:", productosElectronicos);
      break;
    case "4":
      const idBuscado = parseInt(prompt("Ingrese el ID del producto a buscar:"));
      const productoEncontrado = productos.find(producto => producto.id === idBuscado);
      console.log("Producto encontrado:", productoEncontrado || "No se encontró el producto");
      break;
    case "5":
      const valorTotal = productos.reduce((total, producto) => 
        total + (producto.precio * producto.stock), 0
      );
      console.log(`Valor total del inventario: $${valorTotal}`);
      break;
    default:
      console.log("Opción no válida.");
  }
  
  console.log("");
  console.log("______________________________________________");
  console.log("");
  
  const continuar = confirm("¿Desea probar otra función?");
  if (continuar) iniciarPruebas();
}

/* 
Proceso de pensamiento ejercicio 8:
Se implementaron los 5 métodos de array solicitados:
1. forEach para iterar y mostrar información
2. map para transformar datos
3. filter para filtrar según criterios
4. find para buscar un elemento específico
5. reduce para calcular un valor acumulado
*/

// 9. Estudiantes y Calificaciones
const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

function probarEstudiantes() {
  console.log("Solución 9: Operaciones con estudiantes");
  console.log("------------------------------------");
  
  console.log("Seleccione una operación:");
  console.log("1. Mostrar nombre y edad (forEach)");
  console.log("2. Crear array con nombre y promedio (map)");
  console.log("3. Obtener estudiantes con promedio > 7.5 (filter)");
  console.log("4. Encontrar estudiante por nombre (find)");
  console.log("5. Calcular edad promedio (reduce)");
  
  const opEstudiante = prompt("Ingrese el número de la operación (1-5):");
  
  switch(opEstudiante) {
    case "1":
      console.log("Lista de estudiantes:");
      estudiantes.forEach(estudiante => {
        console.log(`${estudiante.nombre}: ${estudiante.edad} años`);
      });
      break;
    case "2":
      const promedios = estudiantes.map(estudiante => ({
        nombre: estudiante.nombre,
        promedio: (estudiante.calificaciones.reduce((a, b) => a + b) / 
                  estudiante.calificaciones.length).toFixed(2)
      }));
      console.log("Promedios:", promedios);
      break;
    case "3":
      const estudiantesDestacados = estudiantes.filter(estudiante => {
        const promedio = estudiante.calificaciones.reduce((a, b) => a + b) / 
                        estudiante.calificaciones.length;
        return promedio > 7.5;
      });
      console.log("Estudiantes con promedio > 7.5:", estudiantesDestacados);
      break;
    case "4":
      const nombreBuscado = prompt("Ingrese el nombre del estudiante a buscar:");
      const estudianteEncontrado = estudiantes.find(
        estudiante => estudiante.nombre.toLowerCase() === nombreBuscado.toLowerCase()
      );
      console.log("Estudiante encontrado:", estudianteEncontrado || "No se encontró el estudiante");
      break;
    case "5":
      const edadPromedio = (estudiantes.reduce((total, estudiante) => 
        total + estudiante.edad, 0) / estudiantes.length).toFixed(1);
      console.log(`Edad promedio: ${edadPromedio} años`);
      break;
    default:
      console.log("Opción no válida.");
  }
  
  console.log("");
  console.log("______________________________________________");
  console.log("");
  
  const continuar = confirm("¿Desea probar otra función?");
  if (continuar) iniciarPruebas();
}

/* 
Proceso de pensamiento ejercicio 9:
Se aplicaron los métodos de array para:
1. Mostrar información básica con forEach
2. Calcular promedios con map y reduce anidado
3. Filtrar estudiantes destacados
4. Buscar estudiante específico
5. Calcular estadísticas del grupo
*/

// 10. Películas
const peliculas = [
  { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
  { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
  { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
  { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
  { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

function probarPeliculas() {
  console.log("Solución 10: Operaciones con películas");
  console.log("-----------------------------------");
  
  console.log("Seleccione una operación:");
  console.log("1. Mostrar título y año (forEach)");
  console.log("2. Crear array de títulos en mayúsculas (map)");
  console.log("3. Obtener películas de drama con rating > 8.5 (filter)");
  console.log("4. Encontrar película por año (find)");
  console.log("5. Calcular duración total (reduce)");
  
  const opPelicula = prompt("Ingrese el número de la operación (1-5):");
  
  switch(opPelicula) {
    case "1":
      console.log("Lista de películas:");
      peliculas.forEach(pelicula => {
        console.log(`${pelicula.titulo} (${pelicula.año})`);
      });
      break;
    case "2":
      const titulosMayusculas = peliculas.map(pelicula => pelicula.titulo.toUpperCase());
      console.log("Títulos en mayúsculas:", titulosMayusculas);
      break;
    case "3":
      const peliculasDrama = peliculas.filter(pelicula => 
        pelicula.genero === 'drama' && pelicula.rating > 8.5
      );
      console.log("Películas de drama con rating > 8.5:", peliculasDrama);
      break;
    case "4":
      const añoBuscado = parseInt(prompt("Ingrese el año de la película a buscar:"));
      const peliculaEncontrada = peliculas.find(pelicula => pelicula.año === añoBuscado);
      console.log("Película encontrada:", peliculaEncontrada || "No se encontró la película");
      break;
    case "5":
      const duracionTotal = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
      const duracionHoras = Math.floor(duracionTotal / 60);
      const duracionMinutos = duracionTotal % 60;
      console.log(`Duración total: ${duracionHoras} horas y ${duracionMinutos} minutos (${duracionTotal} minutos)`);
      break;
    default:
      console.log("Opción no válida.");
  }
  
  console.log("");
  console.log("______________________________________________");
  console.log("");
  
  const continuar = confirm("¿Desea probar otra función?");
  if (continuar) iniciarPruebas();
}

/* 
Proceso de pensamiento ejercicio 10:
Se implementaron las operaciones requeridas y se agregaron mejoras:
1. Formato claro para mostrar películas y años
2. Transformación a mayúsculas preservando el texto original
3. Filtrado combinando dos condiciones
4. Búsqueda precisa por año
5. Cálculo de duración total con formato horas y minutos
*/

// Iniciar pruebas al cargar la página
window.onload = iniciarPruebas;