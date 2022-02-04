const { response } = require("express");
const Kafana = require("../models/Song");

const addNewSongs = async (req,res) =>{
    const {songTitle, artist}= req.body
    if(!songTitle || !artist){
        return res.status(400).json("Missing song title or artist!")
    }
      try {
        await  Kafana.addSong({songTitle, artist});
        return res.status(200).json("Added new Song")
      } catch (error) {
          return res.status(500).json(error)
      }
}

const getAllSongs = async (req,res) =>{
    try {
        const allSongs = await Kafana.getSong ();
        return res.status(200).json(allSongs)
    } catch (error) {
        return res.status(500).json(error)
    }
}


const updateSong = async (req,res) =>{
    const {id, songTitle,artist} = req.body
    if(!id, !songTitle, !artist){
        return res.status(400).json("missing data")
    }
    try {
       await Kafana.editSong({id, songTitle,artist })
       return res.status(200).json("Song Updated")
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteSong = async (req,res) =>{
    const {id} = req.body;
    if(!id){
        return res.status(400).json("missing ID")
    }
    try {
        await Kafana.deleteSong(id)
        return res.status(200).json("Song Deleted")
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports ={
    addNewSongs,
    getAllSongs,
    updateSong,
    deleteSong
}
