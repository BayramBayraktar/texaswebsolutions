import mongoose from 'mongoose';

const ConnectToDatabase = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("Already connected to MongoDB.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_DB as string);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

export default ConnectToDatabase;
