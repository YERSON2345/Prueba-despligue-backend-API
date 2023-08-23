const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')

//Creamos el servidor
const app = express();

//Conectamos a la base de datos
conectarDB()
app.use(cors())

app.use(express.json());

app.use('/api/administrador', require ('./routes/administrador.js'))



app.listen(4000, () => {
    console.log('El servidor esta corriendo correctamente')
})