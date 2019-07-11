
//dependencias
var express = require("express");
var path = require("path");
var sesion = require("express-session");

var app = express();

//Config
const PORT_APP = process.env.port || 5000;
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.get('/', (req, res) => {

});

app.get('/login', (req, res) => {
    res.sendFile('public/view/login/', { root: __dirname });
});

app.listen(PORT_APP, () => {
    console.log("Servidor iniciado en " + PORT_APP);
});