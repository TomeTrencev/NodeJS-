const sportists = require ("./sportists");


//READ
sportists
.allSportists()
.then ((sportisti) =>{
    console.log(sportisti)
})
.catch ((err) =>{
    console.log(err)
});


//CREATE
sportists
.addNewSportist({name:"Goran Pandev",sport:"football", age:38})
.then(()=>{
     return sportists.allSportists()
})
.then ((sportisti)=>{
    console.log(sportisti)
})
.catch ((err)=>{
    console.log(err)
});


//UPDATE

sportists
.updateSportist(4, {name:"Martin Odegard", sport:"football", age:24})
.then(()=>{
    return sportists.allSportists();
})
.then((sportisti)=>{
    console.log(sportisti)
})
.catch((err)=>{
    console.log(err)
});


//DELETE
sportists
sportists.deleteSportist(2)
.then ((sportisti)=>{
    console.log(sportisti)
})
.catch((err)=>{
    console.log(err)
});