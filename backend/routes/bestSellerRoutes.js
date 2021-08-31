import express from 'express'
import { getBestsellersById, getBestsellers } from '../controllers/bestsellersController.js'


const router = express.Router()


// get all bestsellers
router.route('/').get(getBestsellers)

// single bestseller
router.route('/:id').get(getBestsellersById)



export default router
