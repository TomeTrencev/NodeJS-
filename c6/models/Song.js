let kafanaSongs = [
    {
        id:1,
        songTitle:"za Liljanu",
        artist:"Toma Zdravkovic"
    },
];

const addSong = async ({songTitle,artist}) =>{
       const newSong = {
           id:kafanaSongs.length +1,
           songTitle:songTitle,
           artist:artist
       }
       kafanaSongs.push(newSong);
}

const getSong = async ()=>{
    return kafanaSongs;
}

const editSong = async ({id, songTitle,artist})=>{
    kafanaSongs = kafanaSongs.map(peSma =>{
        if(peSma.id ===id){
            return {
                id:peSma.id,
                songTitle,
                artist
            }
        }
        return peSma
    })
}

const deleteSong = async (id)=>{
    kafanaSongs = kafanaSongs.filter((peSma)=>peSma.id !== id);
}

module.exports ={
    addSong,
    getSong,
    editSong,
    deleteSong
}