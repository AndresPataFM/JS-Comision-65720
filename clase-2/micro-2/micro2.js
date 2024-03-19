// Actividad 01:
/* 
let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index) {
  console.log(texto);
} 
*/

let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index++) {
  console.log(texto);
} 

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?


// Actividad 02:
/* 
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
  if (index > 3) {

  }
  alert("lado");
} 
*/

// control de asensor en planta baja
// Esto no porque cambias el tipo de dato de vriable
// let lados = prompt('INGRESE CANTIDAD DE LADOS')
// lados = parseInt(lados)
// Asi
// let ladosUsuario = prompt('INGRESE CANTIDAD DE LADOS')
// lados = parseInt(ladosUsuarios)
// o asi
let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));
for (let index = 1; index <= lados; index++) {
  if (index <= 2) {
    alert(`Mientras tenga menos de 2 lados no es una figura`)
    index++
  }
  alert(`lado ${index}`);
} 

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?
