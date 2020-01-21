console.log(this)
const edad = 27
const data = { name:"hola", user:'toyota'}
// Memory heap, almacena variables
// REPISA PARA DATOS: donde almacenamos los valores de variables y funciones y se conecta directament con el call Stack

var carro = {
    marca: 'toyota',
    tipo: 2017,
}
carro = {
    marca: 'airDrop'
}

// crasher el navegador
// function overflow() {
//     // recursion la funcion se llama a si misma
//     overflow()
// }
// overflow()

// Como funciona la syncronia
console.log("tacos 1 ");
console.log("tacos 2 ");
console.log("torta 2 ");
console.log("tacos 3 ");
// que pasa si la torta es mas lenta, 
// corto toritilla lo doy, torta me tardo mas, si lo vemos de esta forma los tacos son 2 minutos, mas los 5 de la torta y luego el otro taco
// si hago algo que me toma mas tiempo, me demoro en terminar, asi trabaja js
// EL HECHO QUE js sea synchronous hace que el lenguaje sea muy lento no? :/

console.log("tacos 1 ");
console.log("tacos 2 ");
setTimeout(() => {
    console.log("torta 2 ");
}, 0);
console.log("tacos 3 ");
V8, JS ENGINE, HOISTING Y COMO EVITARLO
SYNCRONIA, MEMORY HTMLTableCaptionElement, CALL MediaStreamTrack, STACK OverflowEvent, JSRUNTIME
