import { promises } from "dns";
import mongoose from "mongoose";


type ConnectionObject ={
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void>{
if(connection.isConnected){
    console.log("Already connecte to database");
    return
}
try{
const db = await mongoose.connect(process.env.MONGODB_URL || '',{})

connection.isConnected = db.connections[0].
readyState

console.log("Db Connected Succesfully");
} catch(error){

    console.log("Database connection failed", error)
    process.exit(1)
}
}
export default dbConnect