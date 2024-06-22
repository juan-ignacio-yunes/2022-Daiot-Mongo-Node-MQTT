const mongoose = require('mongoose');

const dispositivoSchema = mongoose.Schema({
    dispositivoId: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    topic: {
        type: String,
        require: true
    },
    topicSrvResponse: {
        type: String,
        require: true
    },
    ubicacion: {
        type: String
    },
    temperatura: {
        type: Number,
    },
    humedad: {
        type: Number,
    }
});

module.exports = mongoose.model('Dispositivo', dispositivoSchema);
