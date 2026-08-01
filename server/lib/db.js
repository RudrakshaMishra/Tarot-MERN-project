import mongoose from "mongoose";
import dns from "node:dns/promises";

// Force Node.js to use reliable public DNS servers to resolve MongoDB SRV records
dns.setServers(["1.1.1.1", "8.8.8.8"]);

//Function to connect to the mongodb database
export const connectDB = async()=>{
    try{

        mongoose.connection.on('connected',()=>console.log('Database Connected'));

        await mongoose.connect(`${process.env.MONGODB_URI}/tarot-club`)
    } catch(error){
        console.log(error);
    }
}