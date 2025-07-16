
const mongoose = require("mongoose");

const connectDb = async ()=>{
    
    try{
    await mongoose.connect(process.env.MONGODB_URI);
     console.log("connect");
    }catch(e){
        console.error("connection error");
    }
}

module.exports = connectDb;
