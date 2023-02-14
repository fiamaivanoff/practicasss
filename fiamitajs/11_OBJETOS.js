let pc1 = {
  nombre: "fiamapc",
  procesador: "intel core i7",
  ram: "16gb",
  espacio: "1tb"
};

let numbre = pc1["nombre"];

class animal {
  constructor(especie, edad, nombre) {
    this.especie = especie;
    this.edad = edad;
    this.nombre = nombre;
    this.info = `hola, soy un ${this.especie}, y tengo ${this.edad} y me llamo ${this.nombre}`
  }
  verInfo() { // esto es un metodo
    console.log(this.info)
  }
}
const gato = new animal("gato", 3, "kali");
gato.edad // te muestra 3. porque entre a esa propiedad.
gato.verInfo()// me muestra la informacion con las variables  



//OTRO EJEMPLO:
function crearGato(nombre, edad) {
  //asi se crea un objeto.
  class Gato {  //se crea una clase con un nombre X 
    constructor(nombre, edad) {  //constructor es para saber con que propiedades(caracteristicas) lo voy a crear.
      this.nombre = nombre; //se pone "this" para referenciar al objeto "Gato" como si fuese una variable y se iguala a lo que tenes en el constructor.
      this.edad = edad;     //se pone "this" para referenciar al objeto "Gato" como si fuese una variable y se iguala a lo que tenes en el constructor.
    }
    meow() {   // esto es un metodo/funcion. que hace lo que quieras.
      return "Meow!"  //en este caso, devuelve un string.
    }
  }

  const Gatito = new Gato(nombre, edad) // esto seria el objeto creado como si fuese una variable. Se le pone "new Gato" porque hace referencia al objeto que se crea arriba.
  return Gatito  //devuelve el objeto creado.
}





//HERENCIA:
class gatito extends animal {
  constructor(especie, edad, nombre, raza) {
    super(especie, edad, nombre);
    this.raza = raza;
  }
}

const animalito = new gatito("gato", 3, "kali", "callejero")

console.log(animalito);
animalito.raza //me muestra la raza del gato (callejero)

