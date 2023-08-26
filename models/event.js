const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
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
  }
});

module.exports = {
  Event: mongoose.model("Event", eventSchema, "events"),
};
