// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// console.log(0 && true)

// isNaN evalua si es NaN

// console.log(isNaN(NaN))
// console.log(isNaN(27))
// console.log(isNaN("hola"))

// const contrasenia = prompt("ingrese la contraseña")

// if(contrasenia === "qwerty"){
//   alert("Bienvenido de vuelta Andrés")
//   alert("Que placer verlo de vuelta")
// }

// if(contrasenia === "qwerty"){
//   alert("Bienvenido de vuelta Andrés")
//   alert("Que placer verlo de vuelta")
// } else {
//   alert("contraseña equivocada")
// }

// if(contrasenia === "qwerty"){
//   alert("Bienvenido de vuelta Andrés")
//   alert("Que placer verlo de vuelta")
// } else if (contrasenia === "admin"){
//   alert("Ingreso de administrador exitoso")
// } else {
//   alert("contraseña equivocada")
// }

// if(contrasenia === "qwerty"){
//   alert("Bienvenido de vuelta Andrés")
//   alert("Que placer verlo de vuelta")
// } else if (contrasenia === "admin"){
//   alert("Ingreso de administrador exitoso")
// } else if (contrasenia === "123"){
//   alert("Bienvenido de vuelta David")
//   alert("Que placer verlo de vuelta")
// } else {
//   alert("contraseña equivocada")
// }
// if(contrasenia === "admin"){
//   alert("Ingreso de administrador exitoso")
// } else if (contrasenia === "123" || contrasenia === "qwerty"){
//   if(contrasenia === "qwerty"){
//     alert("Bienvenido de vuelta Andrés")
//   } else{
//     alert("Bienvenido de vuelta David")
//   }
//   alert("Que placer verlo de vuelta")
// } else {
//   alert("contraseña equivocada")
// }


// Es el portero que les dice a que piso pueden ingresar
// const nombre = prompt("diga su nombre").toLowerCase()

// switch (nombre){
//   // hace nombre === "andres" para ver si ejecuta el caso o no
//   case "andres":
//     alert("1A")
//     break
//   case "diana":
//     alert("1B")
//     break
//   case "jaime":
//     console.log("jaime")
//   case "juan":
//     alert("2A")
//     break
//   case "laura":
//     alert("2B")
//     break
//   case "matilda":
//     alert("3")
//     break
//   default:
//     alert("Usted no vive aqui")
// } 

// Esto no se puede hacer en switch
// let edad = parseInt(prompt("Cuantos años tiene"))
// if(edad >= 18){
//   alert("pase")
// } else {
//   alert("usted es menor de edad, detengase")
// }

// Ciclos
// for
// index == indice == i
// for(let i = 0; i<5; i = i+1){
//   console.log(i)
// }
// for(let i = 0; i<5; i += 2){
//   console.log(i)
// }
//  i++ === i += i
// for(let i = 0; i<5; i++){
//   console.log(i)
// }

// let entrada = prompt("Ingresar un dato. Ingrese 'ESC' para frenar.");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC" ){
//   alert("El usuario ingresó " + entrada);
//   //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//   entrada = prompt("Ingresar otro dato. Ingrese 'ESC' para frenar.");
// }
// let entrada = ""

// do{
//   entrada = prompt("Ingresar un dato. Ingrese 'ESC' para frenar.");
//   alert("El usuario ingresó " + entrada);
// } while(entrada != "ESC")

let saludo = false
let despedida = false
while(saludo){
  alert("¡HOLA!😀")
  saludo = confirm("¿Otro saludo?")
}
do{
  alert("¡Chau!😥")
  despedida = confirm("¿Otra despedida?")
} while(despedida) 