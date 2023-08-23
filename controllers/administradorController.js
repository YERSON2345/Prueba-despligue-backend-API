const Administrador = require('../models/administrador')

exports.crearAdministrador = async(req, res) =>{

    try {
        let administrador;

        //creamos el administrador
        administrador = new Administrador(req.body);
        await administrador.save();
        res.send(administrador);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.listarAdministradores = async (req, res) =>{

    try {
        const administrador = await Administrador.find();
        res.json(administrador)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarAdministrador = async (req, res) =>{
    try {
        const {nombre, password} = req.body;
        let administrador = await Administrador.findById(req.params.id)

        if(!administrador){
            res.status(404).json({msg:'No existe el administrador'})
        }
        administrador.nombre = nombre;
        administrador.password = password;

        administrador = await Administrador.findOneAndUpdate({_id:req.params.id },administrador, {new:true})
        res.json(administrador)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerAdministrador = async (req, res) =>{
    try {
 
        let administrador = await Administrador.findById(req.params.id)

        if(!administrador){
            res.status(404).json({msg:'No existe el administrador'})
        }

        res.json(administrador)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
exports.eliminarAdministrador = async (req, res) =>{
    try {
 
        let administrador = await Administrador.findById(req.params.id)

        if(!administrador){
            res.status(404).json({msg:'No existe el administrador'})
        }
        await Administrador.findOneAndRemove({_id: req.params.id})
        res.json({msg:'Administrador eliminado correctamente'})

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.prueba = async(req,res) => {
    res.status(200).send({msg:"Funciona pa"})
}