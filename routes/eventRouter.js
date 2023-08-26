const express = require ("express");

const {addEventDetails, addSpeakerDetails, getEvents}= require ("../controllers/eventController");

const eventrouter = express.Router();

eventrouter.post ('/addevent', addEventDetails)
eventrouter.post('/addspeaker', addSpeakerDetails)
eventrouter.get ('/getevents', getEvents)

module.exports= eventrouter;