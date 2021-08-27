const { Router } = require('express');
const { itemsGet, itemsRandomGet, visitasGet } = require('../controllers/users');

const router = Router();

router.get('/items', itemsGet);

router.get('/items-random', itemsRandomGet);

router.get('/visitas', visitasGet);

// router.post('/', usersPost);

// router.put('/:id', usersPut);

// router.patch('/', usersPatch);

// router.delete('/', usersDelete);


module.exports = router