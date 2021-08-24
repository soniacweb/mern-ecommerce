//connection file
import Mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connection = await Mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB connected ${connection.connection.host}`.cyan.underline)
    } catch(e) {
        console.log(`error: ${e}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB