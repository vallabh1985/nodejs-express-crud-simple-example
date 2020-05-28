const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const User=require('./userModel');

const app=express();
const jsonParser=bodyParser.json();

mongoose.connect('mongodb+srv://vallabh:RJG5aAednwk3PzvD@cluster0-etl8y.mongodb.net/demo?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>console.log("Database Connected succefully"))

app.get('/',function(req,res){
    User.find().then(data=>{
        res.json(data);
    })
})

app.post('/useradd',jsonParser,function(req,res){
    console.log(req.body.name);
    const userInsert = new User({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password
    })

    userInsert.save().then((result)=>{
        res.status(201).send(result);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
    
})

app.put('/userupdate/:id',jsonParser,function(req,res){

    User.updateOne({_id:req.params.id},
        {$set: {
                name:req.body.name,
                age:req.body.age
                } 
        }
    )
    .then((result)=>{
        res.status(200).send(result);
    })
    .catch((err)=>{
        res.status(400).send(err);
    });

})

app.delete('/userdelete/:id',function(req,res){
    User.deleteOne({_id:req.params.id})
    .then((result)=>{
        res.status(200).send(result);
    })
    .catch((err)=>{
        res.status(400).send(err);
    });
})



app.listen(5000);