function saludar(){
  const nombre = prompt("Ingrese su nombre")
  alert(`Bienvenido ${nombre}`)
}

// saludar()
// saludar()
// saludar()
// saludar()

function sumar(){
  const primerNumero = Number(prompt("Ingrese el primer número"))
  const segundoNumero = Number(prompt("Ingrese el segundo número"))
  if(primerNumero!==0){
    return primerNumero + segundoNumero
  }
  const hola = "hola"
  return hola
}

// console.log(saludar)
// console.log(saludar())

function mostrarAmbosLados(datoAMostrar){
  console.log(datoAMostrar)
  alert(datoAMostrar)
}

function verParametros(numero, string, booleano){
  console.log("numero",numero)
  console.log("string",string)
  console.log("booleano",booleano)
}
verParametros(false, "hola", 5)



// console.log(mostrarAmbosLados)
// mostrarAmbosLados = 5
// console.log(mostrarAmbosLados)

// mostrarAmbosLados("hola")
// mostrarAmbosLados(mostrarAmbosLados)
// mostrarAmbosLados(122453)

const saludo = function(){
  alert(" Bienvenido al sitio")
}

const suma = (a, b)=>{
  return a+b
}

const sumaOptimizada = (a,b) => a+b

/* 
const sumarCinco = function(numero){
  return numero+5
}
*/
const sumarCinco = numero => numero+5
// saludo()
// console.log(suma(2,3))
// console.log(sumaOptimizada(2,3))

// let ingresarNombre = confirm("Desea darnos su nombre?")
let nro = 5
// console.log(nro)

function saludarNombre(nombre="Anónimo"){
  alert(`Bienvenido ${nombre}`)
}
// if(ingresarNombre){
//   let nombre = prompt ("Ingrese su nombre")
//   saludarNombre(nombre)
// } else {
//   saludarNombre()
// }