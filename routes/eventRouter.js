const express = require ("express");

const {addEventDetails, addSpeakerDetails, getEvents, getSpeakers}= require ("../controllers/eventController");

const eventrouter = express.Router();

eventrouter.post ('/addevent', addEventDetails)
eventrouter.post('/addspeaker', addSpeakerDetails)
eventrouter.get ('/getevents', getEvents)
eventrouter.get ('/getspeakers', getSpeakers)
module.exports= eventrouter;