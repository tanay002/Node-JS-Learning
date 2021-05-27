const express = require("express");
const app = express();
const port = 80;
 
//allows all user to read and download static file without login
//For serving static files ->we paste in folder and we access in our template
app.use('/static',express.static('static'))
const path=require("path");

// Set the template engine as pug
app.set('view engine', 'pug')
//Now we will make a new with the name views and here we will keep our .pug files. To make a file, we have to write-

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

//our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo',{title:'Hey Tanay',message:'Thanks for this demo'});
});


app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Tanay");
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Tanay");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Tanay");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});