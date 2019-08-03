var express = require('express');
var app = express();

var orderRoutes = require('./api/routes/orders');
var productsRoutes = require('./api/routes/products');

app.use('/orders',orderRoutes);
app.use('/products',productsRoutes);
app.use((req,res) =>{
    res.status(200).json({
        message:"Welcome to the Rest api"
    })
});

module.exports = app;