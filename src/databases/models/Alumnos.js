let mongoose = require('mongoose');


let AlumnosSchema = new mongoose.Schema({
    Nombre: String,
    Carne: Number,
    Carrera: String,
    Sede: String,
    Facultad: String
})

module.exports = mongoose.model('Alumnos', AlumnosSchema)