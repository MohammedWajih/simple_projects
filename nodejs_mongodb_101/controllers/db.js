const mongoose = require('mongoose')
require('dotenv').config();

module.exports = function (){
    mongoose.set('strictQuery',false)
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('=> Connected to MongoDB')
    })
    .catch((error)=>console.log(error));
}

//module.exports = mongoose;