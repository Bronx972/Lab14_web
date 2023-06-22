//Rutas producto
const express = require('express');
const router = express.Router();
const socioController = require('../Controller/SocioController');

//api/productos
router.post('/', socioController.crearPrestamo);
router.get('/', socioController.obtenerPrestamo);
router.put('/:id', socioController.actualizarSocios);
router.get('/:id', socioController.verSocio);
router.delete('/:id', socioController.eliminarSocio);

module.exports = router;