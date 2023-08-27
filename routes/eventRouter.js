const express = require ("express");

const {addEventDetails, addSpeakerDetails, getEvents, getSpeakers, addContest, addCollabDetails, getContests, getCollabs}= require ("../controllers/eventController");

const eventrouter = express.Router();

eventrouter.post ('/addevent', addEventDetails)
eventrouter.post('/addspeaker', addSpeakerDetails)
eventrouter.post('/addcontest', addContest)
eventrouter.post('/addcollab', addCollabDetails)
eventrouter.get ('/getcontests', getContests)
eventrouter.get ('/getcollabs', getCollabs)
eventrouter.get ('/getevents', getEvents)
eventrouter.get ('/getspeakers', getSpeakers)

module.exports= eventrouter;