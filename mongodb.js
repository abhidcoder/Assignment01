
const mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost:27017/Assignment",{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("got connected from Items")).catch((err)=>console.log(err));


//-->For MongoDB ATLAS
const DB = "mongodb+srv://abhi:abhi@cluster0.ounwo.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB,{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
console.log("connected and ready to go")

}).catch((error)=>console.log(error));



const ItemSchema = new mongoose.Schema(
  {
name:{
    type:String
},
 user_id:{
      type: String,
      //required: true
  },
  password:{
    type: String
  },
  Made_on: { type: Date ,default: Date.now },
  }
);



const Itemss = mongoose.model("Ides",ItemSchema);

module.exports =  Itemss;