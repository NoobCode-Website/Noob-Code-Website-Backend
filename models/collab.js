const mongoose = require('mongoose');
const collabSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    partnerWebsite: {
        type: String,
        required: true,
    }
})
module.exports = {
    Collab: mongoose.model("Collab", collabSchema, "collabs")};