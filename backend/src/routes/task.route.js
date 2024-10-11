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
    const {title, description, status, userId} = req.body;
    const task = new Task(
        {title, 
         description,
         status,
         userId

        }
    );
    
    try {
        await task.save(); // Guarda la tarea en la base de datos
        res.status(200).json({ status: "Tarea guardada", task }); // Responde con éxito
      } catch (error) {
        res.status(400).json({ message: error.message }); // Maneja errores
      }
});

router.put("/:id", async (req, res) =>{//PUT nos permite actualizar los datos el la DB
    const {title, description, updateAt, status, userId} = req.body;
    const newTask = {
        title, 
         description,
         status,
         userId,
         updatedAt: Date.now() // Actualiza la fecha
    };
    await Task.findByIdAndUpdate(req.params.id, newTask, {
        new: true, // Devuelve el documento actualizado
        runValidators: true // Ejecuta las validaciones del esquema
      });
    console.log(req.params.id); 
    res.json({status: "tarea actualizada" });

});

router.delete("/:id", async(req, res)=>{//Delete nos permite borrar los datos en la DB
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: "tarea eliminada" });
})
module.exports = router;
