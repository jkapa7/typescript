//TODO CODIGO JAVASCRIPT ES VALIDO EN TYPESCRIPT.

//LO QUE SE LEE ES JAVASCRIPT, DE TYPESCRIPT SE TRADUCE A JAVASCRIPT Y ESE CODIGO ES EL QUE SE LEE

let num = 5;
console.log(num);

const num1: number = 1;

const saludo: string = "Hola";

const verdad: boolean = true;

const object: object = {};
//TANTO EN JS COMO EN TS EL TYPEOF DE UN ARRAY ES OBJECT
const object2: object = [];

//TYPEOF DE NULL EN JAVASCRIPT ES UN OBJETO.
//PERO EN TYPESCRIPT NULL ES TIPO NULL
const valor_null: null = null;

const valor: undefined = undefined;

//SI BIEN EXISTE EL TIPO ANY, CON EL QUE PODEMOS ASIGNAR
//CUALQUIER TIPO DE DATO, NO LO USAREMOS.
// const cualquier_cosa: any = "";

//ARRAY DE NUMEROS
const numeros_pares: number[] = [2, 4, 6, 8];

//ARRAY DE STRINGS
const palabras: string[] = ["hola", "chao", "bye"];

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//DEFINO QUE ES LO QUE VA A RECIBIR LA FUNCION.
//Y DEFINO QUE ES LO QUE VA A RETORNAR LA FUNCION
function filtrarPares(numbers: number[]): number[] {
  return numbers.filter((e) => e % 2 == 0);
}
console.log(filtrarPares(numeros));
