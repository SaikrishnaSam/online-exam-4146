const mongoose=require("mongoose");

const dburl="mongodb+srv://saikrishna:saikrishna96@cluster0-a7tdt.mongodb.net/user?retryWrites=true&w=majority";



mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true});

connection=mongoose.connection;

connection.on("connected",()=>{
    console.log("connected");
});
connection.on("disconnected",()=>{
    console.log("disconnected");
});
connection.on("error",(error)=>{
    console.log("error in connection",error);
});




module.exports=connection;
