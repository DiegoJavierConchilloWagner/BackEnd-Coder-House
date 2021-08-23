// let productos = [
//     {
//         id: 1, 
//         nombre:'Escuadra', 
//         precio:323.45
//     }, 
//     {
//         id: 2, 
//         nombre:'Calculadora', 
//         precio:223.45
//     }, 
//     {
//         id: 3, 
//         nombre:'Globo', 
//         precio:423.45
//     }, 
//     {
//         id: 4, 
//         nombre:'Paleta', 
//         precio:123.45
//     }, 
//     {
//         id: 5, 
//         nombre:'Reloj', 
//         precio:133.45
//     }, 
//     {
//         id: 6, 
//         nombre:'Agenda', 
//         precio:543.45
//     }, 
// ];

// const nombres = productos.map(el => el.nombre);
// const calcPrecioTotal = productos.map(el => el.precio);

// for (let index = 0; index < calcPrecioTotal.length; index++) {
//     // let calculo = 0
//     const precioTotal = 0 + calcPrecioTotal[index];
//     console.log(precioTotal)
// }




const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Mensaje desde el servidor: Hola Estoy Funcionando")
})

const port = process.env.PORT || 5000;

server.listen(PORT,() => {
    console.log(`Servidor http en el puerto ${port}`)
})