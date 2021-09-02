import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import bestSellerRoutes from './routes/bestSellerRoutes.js'
import userRoutes from './routes/userRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import colors from 'colors'
import morgan from 'morgan'


dotenv.config()
connectDB()

const app = express()

if (process.env.NODE_ENV === 'developement') {
    app.use(morgan('dev'))

}

const PORT = process.env.PORT || 5000


app.use(express.json()) // to parse req.body for post requests
app.use('/api/products', productRoutes)
app.use('/api/bestsellers', bestSellerRoutes)
app.use('/api/users', userRoutes)


app.use(notFound)

app.use(errorHandler)

app.listen(PORT, console.log(`listening on ${process.env.NODE_ENV} ${PORT}`.green.bold))
