const express = require("express");
const app = express();
const port = 80;
 
// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))//For serving static files
const path=require("path");

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')// Set the template engine as pug

// Set the views directory
app.set('views', path.join(__dirname, 'views'))


//EndPoints
app.get('/',(req,res)=>{

    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
res.status(200).render('index.pug',params);
})

//Start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});