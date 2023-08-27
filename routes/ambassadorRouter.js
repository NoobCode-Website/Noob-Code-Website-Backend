const express = require("express");

const { addAmbassadors } = require("../controllers/ambassadorController");

const ambassadorrouter = express.Router();
ambassadorrouter.post("/addambassadors", addAmbassadors);
module.exports = ambassadorrouter;
