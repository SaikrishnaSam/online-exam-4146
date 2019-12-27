const exp=require("express");
const app=exp();

const path=require("path");
app.use(exp.static(path.join(__dirname,'./dist/FrontEnd')));

const bodyParser=require("body-parser");

const mongoose=require("mongoose");

const db=require("./db");



const PORT=4146;
app.listen(process.env.PORT || 4146,()=>{
    console.log('server started');
})

const adminApi=require("./api's/adminApi");
const studentApi=require("./api's/studentApi");


app.use("/admin",adminApi);
app.use("/student",studentApi);

