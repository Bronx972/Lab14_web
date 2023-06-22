const mongoose = require('mongoose');

const SocioSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    peliculas: [{
        id: { type: mongoose.Schema.ObjectId, ref: 'Prestamo' } 
    }]

});

module.exports = mongoose.model('Socio',SocioSchema)