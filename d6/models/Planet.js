const { all } = require("../app");

let allPlanets = [
    {
        id:1,
        planetName:"Mars"
    },
    {
        id:2,
        planetName:"Jupiter"
    }
]
//add new Planet
const addPlanet = async ({planetName})=>{
    const newPlanet = {
        id:allPlanets.length+1,
        planetName:planetName
    };
    allPlanets.push(newPlanet)
};


//get all planets

const getPlanets = async()=>{
    return allPlanets;
};


//edit planet

const editPlanet = async ({id,planetName}) =>{
      allPlanets=allPlanets.map((planet)=>{
          if(planet.id ===id){
              return {
                  id:planet.id,
                  planetName
              };
          }
          return planet;
      });

    
};

//delete planet 

const deletePlanet = async (id)=>{
    allPlanets= allPlanets.filter((planet)=>planet.id !== id);
};

module.exports ={
    addPlanet,
    getPlanets,
    editPlanet,
    deletePlanet
}
