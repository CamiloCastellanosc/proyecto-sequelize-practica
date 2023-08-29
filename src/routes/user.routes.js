const { Router } = require("express");
const crearUsuario = require("../controllers/user.controller");



const router = Router();

// crear la primera ruta 

router.post("/user", crearUsuario);



module.exports = router;