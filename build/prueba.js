"use strict";
//TODO CODIGO JAVASCRIPT ES VALIDO EN TYPESCRIPT.
//LO QUE SE LEE ES JAVASCRIPT, DE TYPESCRIPT SE TRADUCE A JAVASCRIPT Y ESE CODIGO ES EL QUE SE LEE
//NO EJECUTAMOS CODIGO TYPESCRIPT, EJECUTAMOS CODIGO JAVASCRIPT, LO ESCRITO EN TYPESCRIPT SE TRADUCE A JS
//CON TSC, EN EL TSCONFIG, EN outDir DEFINO CUAL ES ESE FOLDER DONDE SE TRADUCIRA EL CODIGO TS
let num = 5;
console.log(num);
const num1 = 1;
const saludo = "Hola";
const verdad = true;
const object = {};
//TANTO EN JS COMO EN TS EL TYPEOF DE UN ARRAY ES OBJECT
const object2 = [];
//TYPEOF DE NULL EN JAVASCRIPT ES UN OBJETO.
//PERO EN TYPESCRIPT NULL ES TIPO NULL
const valor_null = null;
const valor = undefined;
//SI BIEN EXISTE EL TIPO ANY, CON EL QUE PODEMOS ASIGNAR
//CUALQUIER TIPO DE DATO, NO LO USAREMOS.
// const cualquier_cosa: any = "";
//ARRAY DE NUMEROS
const numeros_pares = [2, 4, 6, 8];
//ARRAY DE STRINGS
const palabras = ["hola", "chao", "bye"];
// const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//DEFINO QUE ES LO QUE VA A RECIBIR LA FUNCION.
//Y DEFINO QUE ES LO QUE VA A RETORNAR LA FUNCION
// function filtrarPares(numbers: number[]): number[] {
//   return numbers.filter((e) => e % 2 == 0);
// }
// console.log(filtrarPares(numeros));
function sumar(num1, num2) {
    return num1 + num2;
}
//CON TSC --WATCH CADA CAMBIO QUE HAGO EN ARVHICOS .TS, ACTUALIZA EL BUILD CON ESOS CAMBIOS. NO ESTA EJECUTANDO NADA. SOLO ACTUALIZA EN TIEMPO REAL Y VUELVE A CONSTRUIR EL BUILD
