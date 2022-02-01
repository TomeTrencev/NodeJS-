
const http = require ("http");
const path = require("path");
const operationsFs = require ("./fileSystem1");

const pathToFile = path.join(__dirname, "Helloo World")


const server = http.createServer((request, response)=>{
    response.statusCode = 200;
     response.end("yooooooassadas");
});

server.listen(8080,()=>{
    console.log("server is running")
})

operationsFs
.writeToFile(pathToFile, "Zdravo")
.then(()=>{
    return operationsFs.readFromFile(pathToFile);
})
.then((azbuka)=>{
    console.log(azbuka.toString())
})
.catch((err)=>{
    console.log(err)
})