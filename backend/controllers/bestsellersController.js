import asyncHandler from 'express-async-handler' 
import BestSeller from '../models/bestSellersModel.js'


const getBestsellers = asyncHandler(async(req, res) => {
    const bestsellers = await BestSeller.find({}) 
    res.json(bestsellers)
})

const getBestsellersById = asyncHandler(async(req, res) => {
// const bestseller = bestsellers.find(prod => prod._id === req.params.id)
    const bestseller = await BestSeller.findById(req.params.id)
        
    if (bestseller) {
        res.json(bestseller)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export {
    getBestsellersById,
    getBestsellers
}