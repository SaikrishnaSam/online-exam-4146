const exp=require("express");
const adminApp=exp.Router();

const bodyParser=require("body-parser");
adminApp.use(bodyParser.json());

const batch=require("./batchSchema");

const jwt=require("jsonwebtoken");

const checkAuth=require("../api's/verifyToken");

const util=require("util");

const student=require("./studentdetails");

const questionPaper=require("./questionPaperSchema");

const db=require("../db");

const bcrypt=require("bcrypt");


adminApp.post('/login',(req,res)=>{

        if(req.body.userId=="admin")
        {

            if(req.body.password=="admin")
            {
                let signIn=util.promisify(jwt.sign);
                signIn({userId:req.body.userId},"12345")
                .then((signedWebToken)=>{
                    console.log(signedWebToken);
                    
                    res.json({message:`admin logged in successfully`,
                             token:signedWebToken,
                             });
                })
                .catch((error)=>{
                    console.log("error in generating token",error);
                })
            }
            else
            {
                res.json({message:`invalid password`});
            }
        }
        else
        {
            res.json({message:`userId invalid`});
        }

   
})

adminApp.post('/addbatch',checkAuth,(req,res)=>{
    console.log(req.body);
    batch.findOne({batchNo:req.body.batchNo}).exec()
    .then((result)=>{
        if(result!==null)
        {
            res.json({message:`batch already existed with batchNo ${req.body.batchNo}`})
        }
        else
        {
            let batchDoc= new batch({
                batchName:req.body.batchName,
                batchNo:req.body.batchNo,
                date1:req.body.date1,
                date2:req.body.date2
            })
            batchDoc.save()
            .then(()=>{
                res.json({message:`batch saved successfully`});
            }).catch((errpr)=>{
                console.log("error in saving the batch",error)
            })
        }
    }).catch((error)=>{
        console.log("error in finding the batch Number",error)
    })

})

adminApp.get('/batchdetails',(req,res)=>{
    batch.find().exec()
    .then((dataArray)=>{
        res.json({message:dataArray})
    }).catch((error)=>{
        console.log("error in finding the batch ",error);
    });
})

adminApp.delete('/batchdetails/:batchNo',(req,res)=>{
    batch.deleteOne({batchNo:req.params.batchNo}).exec()
    .then(()=>{
        res.json({message:`batch with batchNo ${req.params.batchNo} deleted successfully`})
    })
    .catch((error)=>{
        console.log("error in deleting the batch")
    })
})



adminApp.post('/addstudent',checkAuth,(req,res)=>{
            console.log(req.body);
    student.findOne({studentId:req.body.studentId}).exec()
    .then((result)=>{
        if(result!==null)
        {
            res.json({message:`student alrdy registered with studentId ${req.body.studentId}`})
        }
        else
        {
               bcrypt.hash(req.body.password,7).then((hashedPassword)=>{

                    req.body.password=hashedPassword;

                let studentDoc= new student({

                    batchNo:req.body.batchNo,
                    studentName:req.body.studentName,
                    studentId:req.body.studentId,
                    email:req.body.email,
                    password:req.body.password,
                    mobile:req.body.mobile,
                    gender:req.body.gender,
                    address:req.body.address
                    
                })
                studentDoc.save().then(()=>{
                    res.json({message:'studentDoc saved successfully'})
                    console.log("doc saved");
                }).catch((error)=>{
                    console.log("error in saving the document",error);
                })

            }).catch((error)=>{
                console.log("error in hashing the password",error);
            })
           
        }
    }).catch((error)=>{
        console.log("error in finding studentId",error);
    });
})



adminApp.get('/studentdetails/:batchNo',(req,res)=>{

    
    
    student.find({batchNo:req.params.batchNo}).exec().then((dataArray)=>{
        res.json({message:dataArray});
    }).catch((error)=>{
        console.log("error in finding the user",error);
    })
})


adminApp.delete('/studentdetails/:studentId',(req,res)=>{
    student.deleteOne({studentId:req.params.studentId}).exec()
    .then(()=>{
        res.json({message:`student with studentId ${req.params.studentId} deleted successfully`})
    })
    .catch((error)=>{
        console.log("error in deleting the student",error);
    })
})

adminApp.put('/studentdetails',(req,res)=>{

    console.log(req.body);
    
    student.updateOne(
        {studentId:req.body.studentId},
        {$set:{
            studentName: req.body.studentName,
            email:req.body.email,
            mobile:req.body.mobile,
            address:req.body.address,
            gender:req.body.gender}}
            ).exec()
    .then(()=>{
        res.json({message:"studentDetails updated successfully"})
    })
    .catch((error)=>{
        console.log("error in updating the details",error);
    })
})


adminApp.post('/addquestionpaper',(req,res)=>{

})





module.exports=adminApp;
