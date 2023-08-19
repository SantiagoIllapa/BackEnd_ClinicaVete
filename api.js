const client = require('./connection.js')
const bodyParser= require("body-parser")
const express= require('express');
const cors = require('cors');
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.listen(3000,()=>{
    console.log("server is now listening at port 3000");
})
client.connect();
app.get('/users', (req,res)=>{
    client.query('SELECT * FROM public."Ped_Users"',(err,result)=>{
        if(!err){
            res.send(result.rows);
        }else{
            console.log(err.message)
        }
    })
    client.end;
})
app.post('/login', (req,res)=>{
    const user= req.body;
    let insertQuery = `INSERT INTO public."Ped_Users"("Id_User", "Name", "Email", "Password") VALUES (${user.id},'${user.name}', '${user.email}', '${user.password}');`
    client.query(insertQuery,(err,result)=>{
        if(!err){
            res.send('Registro correcto');
        }else{
            console.log(err.message)
        }
    })
    client.end;
})


app.post('/register', (req,res)=>{
    const user= req.body;
    let insertQuery = `INSERT INTO public."Ped_Users"("Id_User", "Name", "Email", "Password") VALUES (${user.id},'${user.name}', '${user.email}', '${user.password}');`
    client.query(insertQuery,(err,result)=>{
        if(!err){
            res.send('Registro correcto');
        }else{
            console.log(err.message)
        }
    })
    client.end;
})

