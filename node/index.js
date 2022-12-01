var express = require('express')// npm i express
var mysql = require('mysql2') //npm i mysql2u

var cors = require('cors')

var bodyparser = require('body-parser') //npm i body-parser
var jsonparser = bodyparser.json() 

//npm i -g nodemon//
const app = express();
app.use(cors())




//mysql connection//
let connection = mysql.createConnection({
    host :"localhost",
    user : "root",
    password :"root",
    database :"arfatdb"
})

connection.connect((err)=>{
if (err){
    console.log(err)
}

else{
    console.log('Database mysql connection done')
}
})

app.get('/',(req,res)=>{
    res.send('Backend Server')
})

//Get API//
app.get('/getData',(req,res)=>{
    connection.query("Select * from weatherhistory;",(err,result)=>{
        if(!err){
            console.log(result);
            res.send(result)
        }
        else{
            console.log(err)
        }
    })
})

// //search API//
app.get('/getSqlData/:summary',(req,res)=>{

    connection.query("Select * from weatherhistory where  `Summary`=?;",(req.params.summary),(err,result)=>{
        if(!err){
            console.log(result);
            res.send(result);
        }
        else{
            console.log(err)
        }
    })
})


app.get('/getDate/:date',(req,res)=>{

    connection.query("Select * from weatherhistory where  `Formatted Date`=?;",(req.params.date),(err,result)=>{
        if(!err){
            console.log(result);
            res.send(result);
        }
        else{
            console.log(err)
        }
    })
})



app.listen(3000,()=>{
    console.log("Server is Running")
})
