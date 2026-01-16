import mongoose from 'mongoose'


export const connectDB = async() => {
try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Successfully conected to MongoDB');
    
} catch (error) {
    console.error("Error connecting to mongo DB",error)
    process.exit(1)
}
}