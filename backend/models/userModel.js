import mongoose from 'mongoose'
// import { string } from 'yargs'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
  
}, {
     timestamps: true
})

// MIDDLEWARE
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password) // comparing the bcrypt password with the entered password
}

// encrupting password after registering
userSchema.pre('save', async function(next) { 
    if (!this.isModified('password')) { //mongoose checking for any profile modifications/updates 
        next()
    }
     const salt = await bcrypt.genSalt(10)
     this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User