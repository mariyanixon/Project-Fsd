//importing
const express=require('express');
const {model}=require('mongoose');
const studentModel=require('./model/studentdb');
const cors=require('cors');

//initialize
const app=new express();
//midware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

//api create

//app.get(url,callback)
// app.get('/view',(req,res)=>{
//     res.json({"name":"Mariya","age":12})

// })

//post data

app.post('/create',(req,res)=>{
    var result=new studentModel(req.body);
    result.save();
    res.send("data added")
})


//to view data

app.get('/see',async(req,res)=>{
   var data=await studentModel.find();
   res.json(data);
})


//delete
app.delete('/delete/:id',async(req,res)=>
{
    let id =req.params.id;
    await studentModel.findByIdAndDelete(id);
    res.send("Deleted");
})

//update

app.put('/edit/:id',async(req,res)=>{
    var id=req.params.id;
    await studentModel.findByIdAndUpdate(id,req.body);
    res.send("Update");
})

app.listen(8080,()=>{
    console.log("App is running in port 8080")
})
