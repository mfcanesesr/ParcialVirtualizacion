const axios = require('axios');
const alumnos = require('../databases/models/Alumnos');

let postAlumnos = async (req, res) => {

    const Data = req.body;

    //Json a guardar en MongoDB
    let NewCreateAlumno = new alumnos({ 
        Nombre: Data.Nombre,
        Carne: Data.Carne,
        Carrera: Data.Carrera,
        Sede: Data.Sede,
        Facultad: Data.Facultad,
    });

    await NewCreateAlumno.save();

    res.status(200).json(NewCreateAlumno);

    return;
}

let getAlumnos = async (req, res) => {
    
    const alumno = await alumnos.findOne({ Carne: req.query.carne });
    res.status(200).json(alumno);

    return;
}

let updateAlumnos = async (req, res) => {

    await alumnos.findOneAndUpdate({ _id:req.body.id }, req.body.alumno)
    res.status(200).json(req.body.alumno);

    return;

}

let deleteAlumnos = async (req, res) => {

    await alumnos.findOneAndDelete({ _id:req.body.id })
    res.status(200).json(req.body.id);

    return;

}

module.exports = {
    postAlumnos,
    getAlumnos,
    updateAlumnos,
    deleteAlumnos
}