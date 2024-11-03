const http = require("http");

const server = http.createServer((req, res) => {
    
    if(req.url === "/getSecretData"){
        res.end("no secret data");
    }
    res.end("Hello world!");
});

server.listen(7777);