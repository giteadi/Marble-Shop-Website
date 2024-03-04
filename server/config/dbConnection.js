const mongoose=require("mongoose");
require("dotenv").config();


function dbConnection(){
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("db connected successfully..")
    })
    .catch((err)=>{
        console.log("error in db connection",err);
    })
}
module.exports=dbConnection;