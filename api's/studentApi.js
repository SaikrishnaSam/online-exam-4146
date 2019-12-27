const exp=require("express");
const studentApp=exp.Router();

const bodyParser=require("body-parser");
studentApp.use(bodyParser.json());

const db=require("../db");

const student=require("./studentdetails");

const checkAuth=require("../api's/verifyToken");

const jwt=require("jsonwebtoken");

const bcrypt=require("bcrypt");

const util=require("util");


studentApp.post('/login',checkAuth,(req,res)=>{
    student.findOne({studentId:req.body.userId})
        .then((result)=>{
            if(result==null)
            {
             res.json({message:`studentId is invalid`})
            }
            else
            {
               bcrypt.compare(req.body.password,result.password)
               .then((result)=>{
                   if(result==false)
                   {
                       res.json({message:`invalid password`});
                   }
                   else
                   {
                       let signIn=util.promisify(jwt.sign);

                       signIn({studentId:req.body.userId},"abcde")
                       .then((signedWebToken)=>{
                            res.json({message:`student logged in successfully`,
                            token:signedWebToken,
                            studentId:req.body.userId});
                       }).catch((error)=>{
                           console.log("error in generating token",error);
                       })
                   }
               }).catch((error)=>{
                   console.log("error in bcrypt",error);
               })
            }
        }).catch((error)=>{
            console.log("error in findOne",error);
        })
       

   
});



module.exports=studentApp;