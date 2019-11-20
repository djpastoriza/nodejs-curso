const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials')

const app = express();

// carpeta publica
app.use(express.static(__dirname + '/public')); 

// Express HBS engine
app.set('view engine', 'hbs');


app.get('/',(req,res) => {
    res.render('home',{
        nombre:'Diego',
        anio:new Date().getFullYear()
    });
});

app.get('/about',(req,res) => {
    res.render('about',{
        anio:new Date().getFullYear()
    });
});

app.listen(8080,()=> {
    console.log('escuchando en el puerto 8080');
});

