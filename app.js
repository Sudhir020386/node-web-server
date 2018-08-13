console.log("hello Sudhir");

const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname +'/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: "Home Page",
        pageBody: "Welcome to Handle Bars",
        copyRight: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: "About Us",
        copyRight: new Date().getFullYear()
    }
    );
});

app.get('/details', (req, res) => {
    res.send({
        name: 'Sudhir',
        address: [
            'Nand Gram',
            'Ghaziabad',
            'Uttar Pradesh'
        ]
    });
});

app.get('/contact', (req, res) => {

});

app.listen(30000);