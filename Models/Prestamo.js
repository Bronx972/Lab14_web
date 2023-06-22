const mongoose = require('mongoose');

const PrestamoSchema = mongoose.Schema({
    
    socio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Socio'
    },
    pelicula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pelicula'
    },
    entregado:{
        type : Boolean,
        default: false
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('Prestamo', PrestamoSchema);;