import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
import colors from 'colors'

dotenv.config()
connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`listening on ${process.env.NODE_ENV} ${PORT}`.green.bold))

app.get('/', (req, res) => {
    res.send('API is running')
})

// get all products
app.get('/api/products', (req, res) => {
    res.json(products)
})

// single product
app.get('/api/product/:id', (req, res) => {
    const product = products.find(prod => prod._id === req.params.id)
    res.json(product)
})

// get all products for department
app.get('/api/:department/products', (req, res) => {
    const product = products.filter(prod => prod.department.toLowerCase() === req.params.department)
    res.json(product)
})


// get all products for category
app.get('/api/category/:category', (req, res) => {
    const product = products.filter(prod => prod.category.toLowerCase() === req.params.category)
    res.json(product)
})

