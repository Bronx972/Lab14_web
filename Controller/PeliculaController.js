const Pelicula = require("../Models/Peliculas");


exports.crearPelicula = async (req, res) => {
    try {
        const producto = new Pelicula(req.body);

        await producto.save();
        res.send(producto);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPeliculas= async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.json(peliculas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPelicula = async (req, res) => {

    try {

        let pelicula = await Pelicula.findById(req.params.id);

        if(!pelicula){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(pelicula);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
exports.actualizarPeliculas = async (req, res) => {

    try {

        const {_id, titulo, genero, director, actores } = new Pelicula(req.body);
        let pelicula = await Pelicula.findById(req.params.id);

        if(!pelicula){
            res.status(404).json({ msg: 'No existe la pelicula'});
        }

        pelicula._id = _id;
        pelicula.titulo = titulo;
        pelicula.genero = genero;
        pelicula.director = director;
        pelicula.actores = actores;

        console.log(pelicula)

        pelicula = await Pelicula.findOneAndUpdate({ _id: req.params.id }, pelicula, { new: true } );
        res.json(peliculas);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPelicula = async (req, res) => {

    try {

        let peliculas = await Pelicula.findById(req.params.id);

        if(!peliculas){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        peliculas = await Pelicula.findOneAndRemove(req.params.id);

        res.json({ msg: 'El producto: ' + peliculas.titulo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
