const Prestamo = require("../Models/Prestamo");


exports.crearPrestamo = async (req, res) => {
    try {
        const prestamo = new Prestamo(req.body);

        await prestamo.save();
        res.send(prestamo);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPrestamos= async (req, res) => {
    try {
        const prestamo = await Prestamo.find();
        res.json(peliculas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}




exports.actualizarPrestamos = async (req, res) => {

    try {

        const {_id, socio, pelicula, entregado } = new Prestamo(req.body);
        let prestamo = await Prestamo.findById(req.params.id);

        if(!prestamo){
            res.status(404).json({ msg: 'No existe el prestamo'});
        }

        prestamo._id = _id;
        prestamo.socio = socio;
        prestamo.pelicula = pelicula;
        prestamo.entregado = true;

        console.log(prestamo)

        prestamo = await Prestamo.findOneAndUpdate({ _id: req.params.id }, prestamo, { new: true } );
        res.json(prestamo);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
