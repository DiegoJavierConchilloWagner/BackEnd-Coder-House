// var numero1 = 5;
// var numero2 = 8;
// if(numero1 < numero2) {
// console.log("numero1 no es mayor que numero2");
// }
// if(numero2 > 0) {
// console.log("numero2 es positivo");
// }
// if(numero1 != 0) {
// console.log("numero1 es negativo o distinto de cero");
// }
// if(numero1+1<=numero2) {
// console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }
var valores = [true, 5, false, "hola", "adios", 2];


function cadenaMasLarga(valores) {

    let candidata = valores[0];

    for (let i = 1; i < valores.length; i++) {
        if (valores[i].length > candidata.length) {
            candidata = valores[i];
        }
    }

    return candidata;

}
cadenaMasLarga(valores)