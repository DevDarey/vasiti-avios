const express = require('express')
const {addProduct,getProduct,deleteProduct,updateProduct,getAllProducts} = require('../controllers/axiosController')
const router = new express.Router()
router.post('/',addProduct)
router.get('/',getAllProducts)
router.get('/:id',getProduct)
router.patch('/:id',updateProduct)
router.delete('/:id',deleteProduct)
module.exports = router