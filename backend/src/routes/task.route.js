const express = require("express");
const router = express.Router();
const Task = require("../models/task");
 
router.get("/", async (req, res) => { //GET nos permite hacer consultas a la base de MongoDB 
    try {
        const tasks = await Task.find({});
        console.log(tasks);
        res.json({
            
            tasks: tasks // Enviando las tareas obtenidas
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al obtener tareas" }); // Maneja el error
    }
});

router.post("/", async (req, res) => { //POST nos permite almacenar los datos en la base de MongoDB
    const {tittle, description} = req.body;
    const task = new Task({tittle, description});
    console.log(req.body);
    await task.save();
    res.json({status: "tarea guardada"});
});

router.put("/:id", async (req, res) =>{//PUT nos permite actualizar los datos el la DB
    const {tittle, description} = req.body;
    const newTask = {tittle, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(req.params.id); 
    res.json({status: "tarea actualizada" });
});

router.delete("/:id", async(req, res)=>{//Delete nos permite borrar los datos en la DB
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: "tarea eliminada" });
})
module.exports = router;
