//Rutas producto
const express = require('express');
const router = express.Router();
const productoController = require('../Controller/PeliculaController');

//api/productos
router.post('/', productoController.crearPelicula);
router.get('/', productoController.obtenerPeliculas);
router.put('/:id', productoController.actualizarPeliculas);
router.get('/:id', productoController.verPelicula);
router.delete('/:id', productoController.eliminarPelicula);

module.exports = router;