// const operations = (v1,v2,funcion) => funcion(v1,v2)

// const suma = (v1,v2) => v1 + v2;

// const resta = (v1,v2) => v1 - v2;

// const multiplication = (v1,v2) => v1 * v2;

// const division = (v1,v2) => v1 / v2;

// const modulo = (v1,v2) => v1 % v2;

// console.log(operations(2,4,suma))
// console.log(operations(2,4,resta))
// console.log(operations(2,4,multiplication))
// console.log(operations(2,4,division))
// console.log(operations(2,4,modulo))


// const mostrarLetras = (txt) => {
//     let i = 0;
//     const id = setInterval(() => {
//         i === txt.length ? clearInterval(id) : console.log(txt[i++]);
//     }, 1000);
// };
// mostrarLetras('hola')
// setTimeout(()=>mostrarLetras('hola'),0)
// setTimeout(()=>mostrarLetras('hola'),250)
// setTimeout(()=>mostrarLetras('hola'),500)


// setInterval(() => {
//     const pal = ['hola','chau','bla','blaBla']
//     i === pal.length && console.log(pal[i++])
// }, 1000);
// let cadenaMeses = ["Jan","Feb","Mar","Apr","May","Jun","Jul"];
// let coma = ",";
// const dividirCadena = (cadenaADividir) => {
//     // let arrayDeCadenas = cadenaADividir.split(separador);

//     for (let i=0; i < cadenaADividir.length; i++) {
//         setInterval(() => {
//             console.log(cadenaADividir[i]);
//             if (i === cadenaADividir.length -1) {
//                 clearInterval()
//             }
//         }, 1000);
        
//     }
// }

// dividirCadena(cadenaMeses)

let cadenaMeses = ["Jan","Feb","Mar","Apr","May","Jun","Jul"];
let timer = 1000
const mostrarPalabras = (txt,callBack,timer = 1000) => {
    let i = 0;
    const id = setInterval(() => {
        i === txt.length ? clearInterval(id) : console.log(`cantidad: ${i + 1}`,txt[i++]);
        i === txt.length && callBack(i);
    }, timer);
};

mostrarPalabras(cadenaMeses,(i)=>{
    console.log("Proceso completo")
    console.log(`palabras totales ${i}`)
})