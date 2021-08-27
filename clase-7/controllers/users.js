const { response, request } = require('express');
const moment = require('moment');
const { leerDb, getRandomInt } = require('../helpers/readDB');

let visitasItems = 0;
let visitasItemsRandom = 0;
const itemsGet = (req = request, res = response) => {
    const leer = leerDb();

    res.json({
        msg: `Get Api - controlador ${moment().format('YYYY-MM-DD HH:mm:ss')}`,
        items:leer,
        cantidad: leer.length,
        visitas:`las visitas son ${visitasItems++}`
    });
};
const itemsRandomGet = (req = request, res = response) => {
    const leer = leerDb();
    const getRandom = getRandomInt(leer.length);

    res.json({
        msg: `Get Api - controlador ${moment().format('YYYY-MM-DD HH:mm:ss')}`,
        items: leer.filter((item,i) => i === getRandom),
        visitas:`las visitas son ${visitasItemsRandom++}`
    });
};

const visitasGet = (req = request, res = response) => {

    res.json({
        msg: `Get Api - controlador ${moment().format('YYYY-MM-DD HH:mm:ss')}`,
        visitas:[{
            Items:`ITEMS se visito ${visitasItems}`,
            itemsRandom:`Items Random se visito ${visitasItemsRandom}`
        }],
        
    });
};


module.exports = {
    itemsGet,
    itemsRandomGet,
    visitasGet
}