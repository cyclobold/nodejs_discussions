const express = require("express");
const port = 3000;
const hostname = "127.0.0.1";

const server = express();

//Routes

//Home
server.get("/", function(request, response){
    response.send("This is home page")
})


//About Us
server.get("/about-us", function(request, response){
    response.send("This is about us page")
})






server.listen(port, hostname, function(){
    console.log(`Express Server listening on http://${hostname}:${port}`);
})