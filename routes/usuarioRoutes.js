const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

// Rutas básicas CRUD
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.listarUsuarios);
router.get('/:id', usuarioController.obtenerUsuario);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

// Rutas para estado del usuario
router.patch('/:id/inactivar', usuarioController.inactivarUsuario);

// Rutas específicas para usuarios
router.get('/email/:email', usuarioController.obtenerUsuarioPorEmail);
router.patch('/:id/contrasena', usuarioController.actualizarContrasena);

module.exports = router;