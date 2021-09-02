import express from 'express'
import { getBestsellersById, getBestsellers, createBestsellersReview } from '../controllers/bestsellersController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()


// get all bestsellers
router.route('/').get(getBestsellers)

// single bestseller
router.route('/:id').get(getBestsellersById)

// reviews
router.route('/:id/reviews').post(protect, createBestsellersReview)

export default router
