var express = require("express");
var router = express.Router();

//Todas las rutas de /API
router.use("/sesion", require("./sesion"));

module.exports = router;