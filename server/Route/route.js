const express = require('express');
const router = require('express').Router()
const product= require('../Model/productModel')


router.post('/prod', async (req, res) => {

    try {
     
        const productList = new product(req.body); // Use 'new' keyword
        const savedProduct = await productList.save(); // Save the product
        res.status(200).json(savedProduct); 

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/prod', async (req, res) => {

    try {
     
        const products = await product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router