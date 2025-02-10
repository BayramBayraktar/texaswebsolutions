import mongoose from 'mongoose';

const ConnectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB as string);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

export default ConnectToDatabase;
