import mongoose from 'mongoose'
// import { string } from 'yargs'

const favouritesSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // specific user favourating
        required: true,
        ref: 'User'
    },
    savedItems: [
        {
            name: { type: String, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: { 
                type: mongoose.Schema.Types.ObjectId, 
                required: true, 
                ref: 'Product' },
        }
    ],

})

const Faves = mongoose.model('Faves', favouritesSchema)

export default Faves