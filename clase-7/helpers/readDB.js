const fs = require('fs');
const archivo = './db/data.json';

// const guardarDb = () => {
//     //data improvisada
//     const data = 
//     [
//         {
//             title: 'Escuadra',
//             price: 150,
//             id: 1
//         },
//         {
//             title: 'Escuadra2',
//             price: 250,
//             id: 2
//         },
//         {
//             title: 'Escuadra3',
//             price: 350,
//             id: 3
//         }
//     ]
    
//     fs.writeFileSync(archivo, JSON.stringify(data));
// }

const leerDb = () => {

    if (!fs.existsSync(archivo)) {
        return null;
    };

    const info = fs.readFileSync(archivo, {
        encoding: 'utf8'
    });
    const data = JSON.parse(info);

    return data;
}

const getRandomInt = (max) => Math.floor(Math.random() * (max - 0)) + 0;


module.exports = {
    // guardarDb,
    leerDb,
    getRandomInt
}