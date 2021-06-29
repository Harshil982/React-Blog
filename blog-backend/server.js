const express = require('express');
const app = express();
const PORT = 3008;
const bollywoodData = require('./bollywoodData.js');
const homePageData = require('./homePageData.js')

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
var cors = require('cors');
app.use(cors());

app.get('/' , (req,res) =>{
    res.send(homePageData);
})

app.get('/bollywood' , (req,res) =>{
    res.send(bollywoodData)
})

app.get('/menu/start' , (req,res) =>{
    res.send("hi from"+ "   " + req.url);
})

app.listen(PORT , ()=>{
    console.log("server started")
});