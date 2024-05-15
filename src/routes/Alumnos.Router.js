const express = require("express");

const AlumnosController = require("../controller/alumnos.controller");

const AlumnosRouter = express.Router();

//CRUD datos de los alumnos
AlumnosRouter.post("/", AlumnosController.postAlumnos);
AlumnosRouter.get("/", AlumnosController.getAlumnos);
AlumnosRouter.put("/", AlumnosController.updateAlumnos);
AlumnosRouter.delete("/", AlumnosController.deleteAlumnos);

module.exports = AlumnosRouter;