const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/products');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post("/", (req, res, next) => {
    console.log("post method getting called");
    var product =new Product({
        _id: new mongoose.Types.ObjectId(),
        productId: req.body.productId,
        productName: req.body.productName
    });
    product
        .save()
        .then(result => {
            console.log("are we reching here");
            console.log("The result is " + result);
            res.status(201).json({
                message: "Handling POST requests to /products",
                createdProduct: result
            });
        })
        .catch(err => {
            console.log("we are in the error block" + err);
            res.status(500).json({
                error: "we are in the error block" + err
            });
        });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;