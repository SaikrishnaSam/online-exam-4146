const mongoose=require("mongoose");

const schema=mongoose.Schema;

let questionPaperSchema= new schema({

    questionName:{
        type:String,
        required:true
    },
    a:{
        type:String,
        required:true
    },
    b:{
        type:String,
        required:true
    },
    c:{
        type:String,
        required:true
    },
    d:{
        type:String,
        required:true
    },
    givenAnswer:{
        type:String,
        required:true
    },
    correctAnswer:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('questionPaper',questionPaperSchema);