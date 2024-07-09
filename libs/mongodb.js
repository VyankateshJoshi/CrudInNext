import mongoose from "mongoose";

const connectMongodb = async() =>{
    try{
       await  mongoose.connect(process.env.MONGODB_URL)
        console.log("connected")
    }
    catch(error){

    }
}
export default connectMongodb