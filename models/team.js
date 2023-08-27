const mongoose = require ('mongoose')
const teamSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    linkedin:{
        type: String,
        required: true
    },
    instagram:{
        type: String,
        required: true
    },
    github:{
        type: String,
        required: true,
    },
})
module.exports={
    Team: mongoose.model('Team', teamSchema, 'team')
}