// Actividad 01:

/* 
const IVA = 1.21;
let importe = prompt("Ingresa el importe sobre el cual quieres calcular el IVA:");

const precioConIVA = imp, iva => imp * iva;
precioConIVA(importe, IVA) 
*/

const IVA = 1.21;
// let importe = prompt("Ingresa el importe sobre el cual quieres calcular el IVA:");

const precioConIVA = (imp, iva) => imp * iva;

// alert(precioConIVA(importe, IVA))

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?

// Actividad 02:

/* 
const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");
const calcularPoliza = m2 => { M2 * valorM2 * comision };
const valorPoliza = calcularPoliza(120);
console.log("El costo de la póliza es: $", valorPoliza); 
*/

const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");

const calcularPoliza = metros2 => { 
  return metros2 * valorM2 * comision 
};

const valorPoliza = calcularPoliza(M2);
console.log("El costo de la póliza es: $", valorPoliza.toFixed(2));

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?