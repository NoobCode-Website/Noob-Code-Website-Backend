const express = require ("express");

const {addEventDetails, addSpeakerDetails}= require ("../controllers/eventController");

const eventrouter = express.Router();

eventrouter.post ('/addevent', addEventDetails)
eventrouter.post('/addspeaker', addSpeakerDetails)

module.exports= eventrouter;