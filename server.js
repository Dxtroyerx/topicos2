const express = require('express')
const app = express()

const hbs = require('hbs');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/parciales')

app.set('view engine', 'hbs');

app.get('/', (req, res)=>{

    res.render('home',{
        annio: new Date().getFullYear()

    });
});
    app.get('/about', (req, res)=>{

        res.render('about',{
    
            annio: new Date().getFullYear()
    
        });

});

app.listen(port,()=>{

    console.log('Servidor a su sericio en el puerto' + port);
    });