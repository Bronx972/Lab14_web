const Socio = require("../Models/Socio");


exports.crearSocio = async (req, res) => {
    try {
        const socio = new Socio(req.body);

        await socio.save();
        res.send(socio);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerSocios= async (req, res) => {
    try {
        const socios = await Socio.find();
        res.json(socios);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verSocio = async (req, res) => {

    try {

        let socio = await Socio.findById(req.params.id);

        if(!socio){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(pelicula);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
exports.actualizarSocios = async (req, res) => {

    try {

        const {_id, nombre, direccion, telefono } = new Socio(req.body);
        let socio = await Pelicula.findById(req.params.id);

        if(!socio){
            res.status(404).json({ msg: 'No existe la pelicula'});
        }

        socio._id = _id;
        socio.nombre = titulo;
        socio.direccion = genero;
        socio.telefono = director;
    

        console.log(socio)

        socio = await Socio.findOneAndUpdate({ _id: req.params.id }, pelicula, { new: true } );
        res.json(socio);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarSocio = async (req, res) => {

    try {

        let socios = await Socio.findById(req.params.id);

        if(!socios){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        socios = await Socio.findOneAndRemove(req.params.id);

        res.json({ msg: 'El producto: ' + socios.nombre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}