const mongoose = require('mongoose');

var mongodb = 'mongodb://localhost:27017/food_project';

const initiateMongoServer = async() =>{
    try{
        await mongoose.connect(mongodb,{useNewUrlParser:true , useUnifiedTopology:true});
        console.log('connected to DB')
    }catch(e){
        console.log('problem connecting to database'+JSON.stringify(e))
        throw e;
    }
}
module.exports = initiateMongoServer;