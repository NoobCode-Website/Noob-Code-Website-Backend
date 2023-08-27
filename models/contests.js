const mongoose = require("mongoose");
const contestSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  contest: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
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
  description: {
    type: String,
    required: true,
  },
  hackerrank: {
    type: String,
    required: true,
  },
});
module.exports = {
  Contest: mongoose.model("Contest", contestSchema, "contests"),
};
