import mongoose from "mongoose";


export const connectDB = async ()=> {
    try{
        const connection = await mongoose.connect('mongodb+srv://anshsindhu22:sindhuansh@tes-pro-db.zmsgyjm.mongodb.net/?retryWrites=true&w=majority&appName=tes-pro-db',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Connected to MongoDB');
    } catch(error){
        console.error('Failed to connect to MongoDB: ${error.message}');
    }
};