
const http = require ("http");
const path = require("path");
const operationsFs = require ("./fileSystem1");

const pathToFile = path.join(__dirname, "Helloo World")


const server = http.createServer((request, response)=>{
    operationsFs.writeReadRetur(path, "asdas")
    .then((fileContent) =>{
        console(fileContent.toString())
        response.statusCode = 200;

        response.end();
    })
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