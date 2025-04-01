import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/chai', {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Added for better compatibility
        });
        console.log('mongodb connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

export default connectDB;
