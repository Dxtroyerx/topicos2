const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    //res.send('Hola a todos')
    let salida={
        nombre: 'Juan',
        edad: 25,
        url: req.url
    };
    res.send(salida);

})

app.listen(3000,()=>{
    console.log('Ecuchando peticion en el puerto 3000')
})