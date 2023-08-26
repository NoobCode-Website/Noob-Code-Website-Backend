const mongoose = require ("mongoose")
const speakerSchema = new mongoose.Schema({
    speaker: {
        type: String,
        required: true,
      },
      description:{
        type: String,
        required: true
      },
      twitter:{
        type: String,
        required: true
      },
      linkedin:{
        type: String,
        required: true
      },
      instagram:{
        type: String,
        required: true
      }
});

module.exports= {
    Speaker: mongoose.model("Speaker", speakerSchema, "speaker")
}


