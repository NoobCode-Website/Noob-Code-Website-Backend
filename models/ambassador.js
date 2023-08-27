const mongoose = require("mongoose");
const ambassadorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
});
module.exports = {
  Ambassador: mongoose.model("Ambassador", ambassadorSchema, "ambassador"),
};
