import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from './data/users.js'
import products from './data/products.js'
import bestsellers from './data/bestsellers.js'


import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import Faves from './models/favouritesModel.js'
import BestSeller from './models/bestSellersModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // avoids importing anything that's already in the db
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Faves.deleteMany()
        await BestSeller.deleteMany()

        // import users
        const createdUsers = await User.insertMany(users)
        //get admin user
        const adminUser = createdUsers[0]._id
        // add admin to products and bestsellers
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser}
        }) 
        const faveProducts = bestsellers.map(fave => {
            return { ...fave, user: adminUser}
        }) 

        await Product.insertMany(sampleProducts)
        await BestSeller.insertMany(faveProducts)
        console.log('data imported'.green.inverse)
        process.exit()

    } catch (error) {
        console.log(error.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        // avoids importing anything that's already in the db
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await Faves.deleteMany()
        await BestSeller.deleteMany()
        console.log('data deleted'.red.inverse)
        process.exit()

    } catch (error) {
        console.log(error.red.inverse)
        process.exit(1)

    }
}

process.argv[2] === '-d' ? destroyData() : importData()