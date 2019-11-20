const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')

const app = express();

// carpeta publica
app.use(express.static(__dirname + '/public')); 

// Express HBS engine
app.set('view engine', 'hbs');



app.get('/',(req,res) => {
    res.render('home',{
        nombre:'diEgo paStoriza',
    });
});

app.get('/about');

app.listen(port,()=> {
    console.log(`escuchando en el puerto ${port}`);
});

