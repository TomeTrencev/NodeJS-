
//CALL BACK FUNKCIJA
const callbackOne = (callbackArgument) =>{
    const something = 5;
    setTimeout(()=>{
        callbackArgument(something)
    },3000)
};


//PROMISE FUNKCIJA
const promiseOne= new Promise ((resolve, reject) =>{
       reject("greska");
});


const promiseTwo = new Promise((resolve, reject)=>{
    resolve("Succes")
})


module.exports = {
    callbackOne,
    promiseOne,
    promiseTwo
}