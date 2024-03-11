import mongoose, { Mongoose } from 'mongoose'

const URI = 'mongodb+srv://marianacaldas94:iRs2ZsOM8bxmqKcG@cluster0.u5lguud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection