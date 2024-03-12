const nombre = "Andrés";
let edad = 31;
var comision = 65720;
let premium = true

console.log("let edad: ", edad)

// No hagan esto
const a1 = 123;
const a2 = "como estas";
const a3 = true;

/* 
  Nombre no puede;
    tener espacio
    tener -
    iniciar con número
    no usen TILDES
  Puede:
    tener un número
    tener _
  Recomendaciones:
    Expresivo
    Eviten números
*/

edad = 32
// nombre = "pascual" error no se puede reasignar una variable const
console.log("let edad: ",edad)

// console.log(comision)
// var comision = 1
// console.log(comision)
// comision = 5
// console.log(comision)

const saludo = `Hola mi nombre es ${nombre} tengo ${edad} y esta es la comisión ${comision}`
const saludo2 = "Hola mi nombre es " + nombre + " tengo " + edad + " y esta es la comisión " +  comision
console.log(saludo)
console.log(saludo2)

let noDeclare
console.log(noDeclare)

// const pedirNombre = prompt("Ingrese su nombre")
// console.log(pedirNombre)
// console.log(typeof pedirNombre)
// const pedirSioNo = confirm("Desea proseguir")
// console.log(pedirSioNo)
// console.log(typeof pedirSioNo)

// alert(comision)
// alert(nombre)
// alert(edad)

const primerNumero = Number(prompt(" ingrese el primer número"))
const segundoNumero = Number(prompt(" ingrese el segundo número"))
alert(`El primer número más el segundo es igual a ${primerNumero+segundoNumero}`)