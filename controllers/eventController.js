const { Event } = require("../models/event");
const {Speaker }= require("../models/speaker")
const addEventDetails = async (req, res) => {
  try {
    const { activity, date, venue, footfall, youtube } = req.body;
    console.log(req.body);
    if (activity === null || activity === undefined || activity === "") {
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          msg: "Please enter the activity name",
        });
    } else if (date === null || date === undefined || date === "") {
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          msg: "Please enter the date",
        });
    } else if (venue === null || venue === undefined || venue === "") {
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          msg: "Please enter the venue",
        });
    } else if (!footfall) {
      return res
        .status(400)
        .json({
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
    res
      .status(400)
      .json({
        success: false,
        statusCode: 400,
        msg: "Failed to create a new Event",
      });
  }
};
const addSpeakerDetails = async (req, res) =>{
    try{
        const {speaker, description, twitter, linkedin, instagram} = req.body;
        if (speaker === null || speaker === undefined || speaker === "") {
            return res
              .status(400)
              .json({
                success: false,
                statusCode: 400,
                msg: "Please enter the speaker's name",
              });
            }
            else if (description === null || description === undefined || description === "") {
                 return res
              .status(400)
              .json({
                  success: false,
                  statusCode: 400,
                  msg: "Please enter Description",
                });
            }           
             else if (twitter === null || twitter === undefined || twitter === "") {
                 return res
              .status(400)
              .json({
                  success: false,
                  statusCode: 400,
                  msg: "Please enter Twitter URL",
                });
            }
            else if (linkedin === null || linkedin === undefined || linkedin === "") {
                 return res
              .status(400)
              .json({
                  success: false,
                  statusCode: 400,
                  msg: "Please enter LinkedIn URL",
                });
            }
            else if (instagram === null || instagram === undefined || instagram === "") {
                 return res
              .status(400)
              .json({
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
instagram: instagram
        });
        res.status(200).json({success: true, statusCode: 200, data: newSpeaker});
    }
    catch(error){
        console.log("Error found while adding new speaker");
        res.status(400).json({
            success: false, statusCode: 400, msg: "New speaker cannot be added"
        });
    }
}


module.exports = { addEventDetails, addSpeakerDetails };
