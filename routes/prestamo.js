//Rutas producto
const express = require('express');
const router = express.Router();
const prestamoController = require('../Controller/PrestamoController');

//api/productos
router.post('/', prestamoController.crearPrestamo);
router.get('/', prestamoController.obtenerPrestamos);
router.put('/:id', prestamoController.actualizarPrestamos);

module.exports = router;