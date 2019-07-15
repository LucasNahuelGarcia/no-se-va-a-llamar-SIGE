//dependencias
const morgan = require("morgan");
const express = require("express");
const path = require("path");
const uuid = require("uuid");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

mongoose.connect("mongodb://localhost:27017/NoSige", {
    useNewUrlParser : true,
}).catch((err) => console.log(err));

const db = mongoose.connection;

var app = express();

//Config
const PORT_APP = process.env.port || 5000;
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    store : new MongoStore({mongooseConnection : db}), //una nueva conexión a mongodb, asignada a la conexión db
    resave : false,
    saveUninitialized : false,
    secret : uuid.v4(),
}));

//Rutas
app.use('/API/', require("./routes/api/index"));

app.get('/login', (req, res) => {
    res.sendFile('public/view/login/', { root: __dirname });
});

app.listen(PORT_APP, () => {
    console.log("Servidor iniciado en " + PORT_APP);
});