const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('./config/hbs/helpers');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'/views'))
app.set('partials',path.join(__dirname,'/views/partials'))
app.listen(port, () => {
    console.log(`Express web-server started on port ${port} ...`);
});

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Mi nombre es Willy'
    });
});

app.get('/landing', (req, res) => {
    res.render('landing', {
        title: 'Landing'
    });
});

// app.get('/', (req, res) => {
//     const msg = { nombre: 'gwfernandez', edad: 41, url: req.url };
//     res.send(msg);
// });

