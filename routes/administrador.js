//Rutas para los administradores

const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administradorController')

// api/productos
router.post('/', administradorController.crearAdministrador);
router.get('/', administradorController.listarAdministradores);
router.put('/:id', administradorController.actualizarAdministrador);
router.get('/:id', administradorController.obtenerAdministrador);
router.delete('/:id', administradorController.eliminarAdministrador);
router.get('/prueba/hola', administradorController.prueba);

module.exports = router

