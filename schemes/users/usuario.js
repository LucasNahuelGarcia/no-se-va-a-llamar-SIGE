const mongoose = require("mongoose");

let usuarioSchema = mongoose.Schema({
    tipo: { required: true, type: String }, //("personal o alumno")
    nombre: { required: true, type: String },
    password: { required: true, type: String },
    fotoPerfil: String,
    direccion: {
        lat: Number,
        long: Number,
    }, //Convertido por el servidor a latitud y longitud
    contacto: {
        email: Array,
        numTelefono: Array,
    }
});

let Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;