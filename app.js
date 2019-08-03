var express = require('express');
var app = express();

app.use((req,res) =>{
    res.status(200).json({
        message:"Welcome to the Rest api"
    })
});

module.exports = app;