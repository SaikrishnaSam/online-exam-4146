const mongoose=require("mongoose");

const schema=mongoose.Schema;

var studentSchema= new schema({

    batchNo:{
        type:String,
        required:true,
    },
    studentName:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
})



module.exports=mongoose.model('student',studentSchema);