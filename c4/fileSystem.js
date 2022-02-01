const fs = require("fs/promises");

const readFromFile = async (pathToFile)=>{
    try {
        const fileContents = await fs.readFile(pathToFile);
        return fileContents; 
    } catch (error) {
        console.log("File cannot be read!");
    }
};


const writeToFile = async (pathToFile, fileContent)=>{
   await fs.writeFile(pathToFile,fileContent)
};


module.exports={
    readFromFile,
    writeToFile
}