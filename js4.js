//Serving Html file using Node JS
const http=require('http');
const fs=require('fs');
const fileContent=fs.readFileSync('index4.html');

 const server=http.createServer((req,res)=>{
  res.writeHead(200,{'Content-type':'text/html'})
  res.end(fileContent);
 })

 server.listen(80,'127.0.0.1',()=>{
     console.log("Listening on port 80")
 })

//run website by writing localhost on browser-> 127.0.0.1