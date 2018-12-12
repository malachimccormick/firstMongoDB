const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();


let db;

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb://Sandbox:Sandbox1@ds155130.mlab.com:55130/mqoutes', (err, database)=>{
    if(err) return console.log(err)
    db = database.db('mqoutes')
    app.listen(3000, function(){
        console.log("listening on port 3000")
    })
})

app.get('/',(req, res) =>{ 

let curser = db.collection("mqoutes").find().toArray(function(err, results){
    if (err) return console.log(err)
    console.log(results)
    res.render('index.pug', {quotes: results}) 
})
// app.get('/', (req, res) => {
//     let cursor = db.collection("quotes").find().toArray(function(err, results){
//         if (err) return console.log(err)
//         console.log(results)
//     })
//     res.sendFile(__dirname + "/views/index.html")   
// })



   
})



app.post('/quotes', (req, res)=> {
   
    db.collection('mqoutes').save(req.body,(err,result) => {
        if (err) return console.log(err)
            console.log('saved to database :)')
            res.redirect('/')
    })
})




