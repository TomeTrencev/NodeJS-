const { all } = require("../app");


let allStars = [
    {
        id:1,
        starName:"Kometa"
    },
    {
        id:2,
        starName:"Galaktika"
    }
];

const addStar = async ({starName})=>{
    const newStar = {
        id:allStars.length + 1,
        starName:starName
    };
    allStars.push(newStar);
}



const getStar = async()=>{
    return allStars;
};


const editStar = async ({id, starName})=>{
    allStars = allStars.map((star)=>{
        if(star.id === id){
            return{
                id:star.id,
                starName
            };
        }
        return star;
    })
}

const deleteStar = async (id)=>{
    allStars = allStars.filter((star)=>star.id !== id);
}

module.exports = {
    addStar,
    getStar,
    editStar,
    deleteStar
}

