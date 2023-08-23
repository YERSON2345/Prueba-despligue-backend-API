const mongoose = require('mongoose')

const AdministradorSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    fechaCreacion:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Administrador', AdministradorSchema)