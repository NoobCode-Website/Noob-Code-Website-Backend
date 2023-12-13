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
  description: {
    type: [String],
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
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
