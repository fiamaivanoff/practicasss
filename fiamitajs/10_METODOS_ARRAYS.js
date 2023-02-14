//varias formas o MINI-FUNCIONES que sirven para hacer algo con un array.


//push() --> agrega un dato al array en la ultima posicion.
// EJ:
let frutas = ["manzana", "banana", "pera"];
frutas.push("Naranja")
console.log(frutas)
// ['manzana', 'banana', 'pera', 'naranja']

// ----------------------------------------------

//pop() --> quita un dato al array en la ultima posicion y te muestra lo que eliminó.
// EJ
let frutas2 = ["manzana", "banana", "pera"];
frutas2.pop()
// ['manzana', 'banana']

// -------------------------------------------------

//unshift() --> agrega un dato al array en la primera posicion.
let frutas3 = ["manzana", "banana", "pera"];
frutas3.unshift("naranja")
// ['naranja', 'manzana', 'banana', 'pera']

// ------------------------------------------------

//shift() --> quita un dato al array en la primera posicion y te muestra lo que eliminó.
let frutas4 = ["naranja ", "manzana", "banana", "pera"];
frutas3.shift()
// ['manzana', 'banana', 'pera']

// --------------------------------------------------

//slice() --> devuelve un nuevo array con los mismos datos PERO iniciado y terminado en la posicion que quiera.
// (EL ULTIMO DATO NO LO MUESTRA)
// EJ:
let frutas5 = ["naranja ", "manzana", "banana", "pera"];
let copia = frutas5.slice(1, 3)
console.log(copia)
// ['manzana', 'banana']

// ----------------------------------------------------

//splice() --> modifica datos en el medio del array o agrega datos.

// ------------------------------------------------

//concat() --> concatena 2 arrays (se pueden concatenar mas tambien)
let ejemplo1 = ["manzana", "banana"];
let ejemplo2 = ["auto", "camion"];
let ejemplo3 = ["guitarra", "bateria"];
ejemplo1.concat(ejemplo2)
//  ['manzana', 'banana', 'auto', 'camion']
// o
ejemplo1.concat(ejemplo3, ejemplo2)
// ['manzana', 'banana', 'guitarra', 'bateria', 'auto', 'camion']

// -----------------------------------------

//map() --> reccore el array y te muestra todos los resultados.
let ejMap = ['manzana', 'banana', 'guitarra', 'bateria', 'auto', 'camion']

ejMap.map(e => e) //mostrame de cada elemento(e) todo elemento e.
//  ['manzana', 'banana', 'guitarra', 'bateria', 'auto', 'camion']

// ---------------------------------------------------

//reverse() --> da vuelta todo el array.
let ejMap2 = ['manzana', 'banana', 'guitarra', 'bateria', 'auto', 'camion']

ejMap.reverse()
//  ['camion', 'auto', 'bateria', 'guitarra', 'banana', 'manzana']

// ---------------------------------------------------

//reduce() --> SUMA TODOS LOS VALORES DEL ARRAY Y da un numero.
const array1 = [1, 2, 3, 4];

const suma1 = array1.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0
);
//da como resultado "10".

//o

const initialValue = 0
const suma2 = array1.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  initialValue
);
//da como resultado "10".

// -----------------------------------------------

//sort() --> ORDENA. alfabeticamente o por numero.
//alfabeticamente: a, b, c, d... z
//por numero: 1, 2, 3, 4, ... infinito.
const arr1 = [4, 2, 1, 3];
arr1.sort()
//[1, 2, 3, 4]

const arr2 = ['auto', 'banana', 'bateria', 'camion', 'guitarra', 'manzana']
arr2.sort()
//['auto', 'banana', 'bateria', 'camion', 'guitarra', 'manzana']

// ------------------------------------------------

//forEach() --> (POR CADA UNO) por cada uno de los elementos del array, quiero que hagas X cosa.
// ej: que me muestre los elementos que hay.
const arr = ['auto', 'barco', 'camion'];

array1.forEach(e => console.log(e));  //e --> elemento.
// "auto"
// "barco"
// "camion"

//----------------------------------------------------


//join() Devuelve un string donde todas las palabras estén concatenadas
// con espacios entre cada palabra
let palabras = ["hello", "world!"];

return palabras.join(' ')
//'Hello world!'
