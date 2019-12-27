const mongoose=require("mongoose");

const schema=mongoose.Schema;

let batchSchema= new schema({
    batchNo:{
        type:String,
        required:true,
    },
    batchName:{
        type:String,
        required:true
    },
    date1:{
        type:String,
        required:true
    },
    date2:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('admin',batchSchema);