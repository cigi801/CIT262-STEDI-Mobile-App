const express =require('express');


const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/cigi', (req,res) => {res.send("Hello Cigi")});

app.listen(port, ()=>console.log("Listening"));