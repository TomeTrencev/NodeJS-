let sportists = [
    {
        id:1,
        name:"Thiery Henry",
        sport:"football",
        age:36
    },
    {
        id:2,
        name:"Tiger Woods",
        sport:"golf",
        age:41
    },
    {
        id:3,
        name:"Lebron James",
        sport:"basketball",
        age:33
    },
    {
        id:4,
        name:"Rafael Nadal",
        sport:"tenis",
        age:37
    },
    {
        id:5,
        name:"Kire Lazarov",
        sport:"handball",
        age:40
    },
    {
        id:6,
        name:"Lionel Messi",
        sport:"football",
        age:34
    },

] 

//READ
const allSportists = async ()=>{
    return sportists;
}



//CREATE
const addNewSportist = async (newInfo)=>{
    const newSportist = {
        id:sportists.length +1,
        name:newInfo.name,
        sport:newInfo.sport,
        age:newInfo.age
    };
    sportists.push(newSportist);
};


//UPDATE
const updateSportist = async (argumentId, updateInfo) =>{
    sportists = sportists.map((sportist)=>{
        if (sportist.id ===argumentId){
            return{
                id:sportist.id,
                name:updateInfo.name,
                sport:updateInfo.sport,
                age:updateInfo.age
            }
        }else{
            return sportist
        }
    }
    )
};


//DELETE
const deleteSportist= async (targetSportist)=>{
    sportists=sportists.filter((sportist)=>sportist.id !==targetSportist);
};




module.exports ={
    allSportists,
    addNewSportist,
    updateSportist,
    deleteSportist
};