const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function(request, response){
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain")


    switch(request.url){
        case "/":
            response.end("This is home page")
            break;

        case "/login":
            response.end("This is login page")
            break;
        
        case "/about-us":
            response.end("This is about us page")
            break;
        
        default:
            response.statusCode = 404;
            response.end("Error Page not found")

    }

 
    
})

console.log("Hello");


server.listen(port, hostname, function(){
    console.log(`Server is listening on http://${hostname}:${port}`)
});  