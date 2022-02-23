 require('dotenv').config();
 const http = require('http');
 const app = require('./app');
 const dbConnector = require('./config/db');


 const PORT = process.env.PORT;
 const server = http.createServer(app);

 dbConnector()
 .then(()=>{
     server.listen(PORT,()=>{
         console.log("Api is running, Mongo connected !")
     });
 })
 .catch((err)=>{
     console.log(err);
 })

