const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json())

app.get('/get',(req,res) =>{
    var data = JSON.parse(fs.readFileSync('./index.json'))
    res.send(data)
})

app.post('/login',(req,res) =>{
    var data = JSON.parse(fs.readFileSync('./index.json'))
    // var body = req.body;
    // var email = req.params.email
    var userdetails ={
        "name":req.body.name,
        "age":req.body.age,
        "email":req.body.email
    }
    for (var i of data){
        if(i.email==userdetails.email){
            res.send("Already Exits,....you have to do login ###")
        }
    }
    data.push(userdetails);
    fs.writeFileSync('index.json',JSON.stringify(data,null ,4))
    res.send("Sign-up please####")
})
app.listen(8000,() =>{
    console.log('server started @ port num8000')
})