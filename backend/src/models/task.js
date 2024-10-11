const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
    enum: ["Por Hacer", "En Proceso", "Completado"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Asegúrate de que 'User' es el nombre del modelo de usuario
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware para actualizar updatedAt antes de guardar
taskSchema.pre('save', function (next) {
  if (this.isNew) {
    // Solo establece createdAt si es un nuevo documento
    this.createdAt = Date.now();
  }
  // Siempre actualiza updatedAt
  this.updatedAt = Date.now();
  next();
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
