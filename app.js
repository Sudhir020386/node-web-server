const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: "Home Page",
        pageBody: "Welcome to Dream World !!!",
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

app.get('/productlist', (req, res) => {
    res.render('productlist.hbs', {
        pageTitle: "Product Details",
        copyRight: new Date().getFullYear()
    });
});

app.get('/details', (req, res) => {
    res.send({
        name: 'Sudhir',
        address: [
            'Uttar Pradesh',
            'India'
        ]
    });
});

app.get('/contact', (req, res) => {

});

app.listen(port, () => {
    console.log(`Server is started at port ${port}`);
});