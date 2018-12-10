const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res){
res.sendFile(__dirname + "/views/index.html")    
})



app.post('/quotes', (req, res)=> {
    console.log(req.body)
})




app.listen(3000, function(){
    console.log("listening on port 3000")
})