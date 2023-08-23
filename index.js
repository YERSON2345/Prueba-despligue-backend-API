const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')

const PORT = process.env.PORT || 4000
//Creamos el servidor
const app = express();

//Conectamos a la base de datos
conectarDB()
app.use(cors())

app.use(express.json());

app.use('/api/administrador', require ('./routes/administrador.js'))



app.listen(PORT, () => {
    console.log(`El servidor esta corriendo correctamente en el puerto${PORT}`)
})