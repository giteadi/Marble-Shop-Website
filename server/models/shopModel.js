const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
   itemName:{
    type:String,
   },
   price:{
    type:String
   },
   size:{
    type:String
   }
});

module.exports=mongoose.model("Shop",shopSchema);
