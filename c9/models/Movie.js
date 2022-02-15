const mongoose = require ("mongoose");

const Movie = mongoose.model('movies',{
    title:String,
    director:String,
    genre:String,
    releaseDate:Date,
    tags: [String]
    
});




module.exports = Movie;