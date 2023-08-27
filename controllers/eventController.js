const { Event } = require("../models/event");
const { Speaker } = require("../models/speaker");
const { Contest } = require("../models/contest");
const { Collab } = require("../models/collab");

//POST REQUESTS

//Add Event Details
const addEventDetails = async (req, res) => {
  try {
    const { activity, date, venue, footfall, youtube } = req.body;
    console.log(req.body);
    if (activity === null || activity === undefined || activity === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the activity name",
      });
    } else if (date === null || date === undefined || date === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the date",
      });
    } else if (venue === null || venue === undefined || venue === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the venue",
      });
    } else if (!footfall) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the footfall",
      });
    } else if (youtube === null || youtube === undefined || youtube === "") {
      res.return({
        success: false,
        statusCode: 400,
        msg: "Please enter correct URL",
      });
    }

    const newEvent = await Event.create({
      activity: activity,
      date: date,
      venue: venue,
      footfall: footfall,
      youtube: youtube,
    });
    res.status(200).json({ success: true, statusCode: 200, data: newEvent });
  } catch (error) {
    console.error("Error executed while adding a new Event");
    res.status(400).json({
      success: false,
      statusCode: 400,
      msg: "Failed to create a new Event",
    });
  }
};

//Add Speaker Details
const addSpeakerDetails = async (req, res) => {
  try {
    const { speaker, description, twitter, linkedin, instagram } = req.body;
    if (speaker === null || speaker === undefined || speaker === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the speaker's name",
      });
    } else if (
      description === null ||
      description === undefined ||
      description === ""
    ) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter Description",
      });
    } else if (twitter === null || twitter === undefined || twitter === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter Twitter URL",
      });
    } else if (linkedin === null || linkedin === undefined || linkedin === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter LinkedIn URL",
      });
    } else if (
      instagram === null ||
      instagram === undefined ||
      instagram === ""
    ) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter Instagram URL",
      });
    }
    const newSpeaker = await Speaker.create({
      speaker: speaker,
      description: description,
      twitter: twitter,
      linkedin: linkedin,
      instagram: instagram,
    });
    res.status(200).json({ success: true, statusCode: 200, data: newSpeaker });
  } catch (error) {
    console.log("Error found while adding new speaker");
    res.status(400).json({
      success: false,
      statusCode: 400,
      msg: "New speaker cannot be added",
    });
  }
};

//Add Contest Details
const addContestDetails = async (req, res) => {
  try {
    const { contest, date, time, venue, footfall, description, hackerrank } =
      req.body;
    if (contest === null || contest === undefined || contest === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the contest name",
      });
    } else if (date === null || date === undefined || date === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the date",
      });
    } else if (time === null || time === undefined || time === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the time",
      });
    } else if (venue === null || venue === undefined || venue === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the venue",
      });
    } else if (!footfall) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the footfall",
      });
    } else if (
      description === null ||
      description === undefined ||
      description === ""
    ) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter Description",
      });
    } else if (
      hackerrank === null ||
      hackerrank === undefined ||
      hackerrank === ""
    ) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter correct URL",
      });
    }
    const newContest = await Contest.create({
      contest: contest,
      date: date,
      time: time,
      venue: venue,
      footfall: footfall,
      description: description,
      hackerrank: hackerrank,
    });
    res.status(200).json({ success: true, statusCode: 200, data: newContest });
  } catch (error) {
    console.log("Error found while adding new contest");
    res.status(400).json({
      success: false,
      statusCode: 400,
      msg: "New contest cannot be added",
    });
  }
};

//Add Collab Details
const addCollabDetails = async (req, res) => {
  try {
    const { name, date, venue, description, partnerWebsite } = req.body;
    if (name === null || name === undefined || name === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the name",
      });
    } else if (date === null || date === undefined || date === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the date",
      });
    } else if (venue === null || venue === undefined || venue === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter the venue",
      });
    } else if (
      description === null ||
      description === undefined ||
      description === ""
    ) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter Description",
      });
    } else if (
      partnerWebsite === null ||
      partnerWebsite === undefined ||
      partnerWebsite === ""
    ) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter correct URL",
      });
    }
    const newCollab = await Collab.create({
      name: name,
      date: date,
      venue: venue,
      description: description,
      partnerWebsite: partnerWebsite,
    });

    res.status(200).json({ success: true, statusCode: 200, data: newCollab });
  } catch (error) {
    console.log("Error found while adding new collab");
    res.status(400).json({
      success: false,
      statusCode: 400,
      msg: "New collab cannot be added",
    });
  }
};



//GET REQUESTS



const getEvents = async (req, res) => {
  try {
    const allEvents = await Event.find();
    res.status(200).json({ success: true, statusCode: 200, data: allEvents });
  } catch (error) {
    console.log("encoutered error while fetching all the events");
    res.status(500).json({
      success: false,
      statusCode: 500,
      msge: "failed to get the get request",
    });
  }
};
const getSpeakers = async (req, res) => {
  try {
    const allSpeakers = await Speaker.find();
    res.status(200).json({ success: true, statusCode: 200, data: allSpeakers });
  } catch (error) {
    console.log("encoutered error while fetching all the speakers");
    res.status(500).json({
      success: false,
      statusCode: 500,
      msge: "failed to get the get request",
    });
  }
};
const getContests = async (req, res) => {
  try {
    const allContests = await Contest.find();
    res.status(200).json({ success: true, statusCode: 200, data: allContests });
  } catch (error) {
    console.log("encoutered error while fetching all the contests");
    res.status(500).json({
      success: false,
      statusCode: 500,
      msge: "failed to get the get request",

    });
  }
};

const getCollabs = async (req, res) => {
  try {
    const allCollabs = await Collab.find();
    res.status(200).json({ success: true, statusCode: 200, data: allCollabs });
  } catch (error) {
    console.log("encoutered error while fetching all the collabs");
    res.status(500).json({
      success: false,
      statusCode: 500,
      msge: "failed to get the get request",
    });
  }
};








module.exports = { addEventDetails, addSpeakerDetails, getEvents, getSpeakers, addContestDetails, addCollabDetails, getContests, getCollabs };
