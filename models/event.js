const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  activity: {
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
  footfall: {
    type: Number,
    required: true,
  },
  youtube: {
    type: String,
    required: false,
  },
  sname: {
    type: String,
    required: true,
  },
  simage: {
    type: String,
    required: true,
  },
  sdescription: {
    type: String,
    required: true,
  },
});

module.exports = {
  Event: mongoose.model("Event", eventSchema, "events"),
};
