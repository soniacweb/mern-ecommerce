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



//   create new review
//   post /api/bestsellers/:id/reviews
//   Private
const createBestsellersReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body
  
    const bestseller = await BestSeller.findById(req.params.id)

    if (bestseller) {
        const alreadyReviewed = bestseller.reviews.find(review => review.user.toString() === req.user._id.toString())
       
        if (alreadyReviewed) {
           res.status(400)
           throw new Error('You\'ve already reviewed this pair!')
       }
       const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
       } 

       bestseller.reviews.push(review)
       bestseller.numReviews = bestseller.reviews.length  
       bestseller.rating =  bestseller.reviews.reduce((acc, item) => item.rating + acc, 0) / bestseller.reviews.length 

       await bestseller.save()
       res.status(201).json({ message: 'Review added'})  
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })


export {
    getBestsellersById,
    getBestsellers,
    createBestsellersReview
}