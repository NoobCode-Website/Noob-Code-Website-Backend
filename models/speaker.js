const mongoose = require("mongoose");

const speakerData = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
  sessionDetails: {
    type: [String],
    required: false,
  },
  sessionImages: {
    type: [String],
    required: false,
  },
  ylink: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
  qualification: {
    type: [String],
    required: true,
  },
  twitter: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
});

const speakerSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  speaker: {
    type: [speakerData],
    required: true,
  },
});

module.exports = {
  Speaker: mongoose.model("Speaker", speakerSchema, "speaker"),
};
