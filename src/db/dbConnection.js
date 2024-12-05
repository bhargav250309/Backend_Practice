import mongoose from "mongoose";

// Connect to MongoDB

const connectDB = async() => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
       console.log(`\n mongoDB connected !! DB host : ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("\n connection Failed: ", error);
        process.exit(1);
    }
}

export default connectDB;
