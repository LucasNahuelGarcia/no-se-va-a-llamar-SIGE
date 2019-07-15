var express = require("express");
var router = express.Router();

var Usuario = require("../../schemes/users/usuario");

router.post('/logIn', (req, res) => {
    res.send(req.session.id);
});

router.get('/logOut', (req, res) => {

});

router.post('/register', (req, res) => {
    req.clearCookie;
    var pass = req.body.pass;

    var nuevoUsuario = Usuario({
        tipo : req.body.tipo,
        nombre : req.body.nombre,
        password : pass,
    });
    nuevoUsuario.save((err) => {
        if(err) {
            res.sendStatus(400);
            return console.log(err);
        }
        console.log("Usuario creado");
        res.sendStatus(201);
    });
});


module.exports = router;