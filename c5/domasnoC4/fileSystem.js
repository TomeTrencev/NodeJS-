//npm init prven pa //npm install express
const fs = require ("fs/promises");

const fileSystemOps = async (pathTofile, content)=>{
     await fs.writeFile(pathTofile,content);
     const fileData =  await fs.readFile(pathTofile);
     return fileData.toString ();
};



module.exports = fileSystemOps;