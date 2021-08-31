import express from 'express'
import { getProductById, getProducts } from '../controllers/productController.js'

const router = express.Router()

// get all products
router.route('/').get(getProducts)

// get single product
router.route('/:id').get(getProductById)


// get all products for department
// router.get('/:department', asyncHandler(async(req, res) => {
//     // const product = products.filter(prod => prod.department.toLowerCase() === req.params.department)
//     const product = await Product.findById(req.params.department)
//     if (product) {
//         res.json(product)
//     } else {
//         res.status(404).json({message: "product not found"})
//     }
//  })
// )


// // get all products for category
// router.get('/:category', asyncHandler(async(req, res) => {
//     // const product = products.filter(prod => prod.category.toLowerCase() === req.params.category)
//     const product = await Product.findById(req.params.category)
//     if (product) {
//         res.json(product)
//     } else {
//         res.status(404).json({message: "product not found"})
//     }
//  })
// )




export default router
