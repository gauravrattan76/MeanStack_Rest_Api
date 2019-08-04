var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","*");
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

//defined routes
var orderRoutes = require('./api/routes/orders');
var productsRoutes = require('./api/routes/products');



app.use('/orders', orderRoutes);
app.use('/products', productsRoutes);


app.use((req, res, next) => {
    var error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 404);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;