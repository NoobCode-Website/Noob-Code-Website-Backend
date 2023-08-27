const express = require("express");
const {addTeamMembers, getTeamMembers} = require("../controllers/teamController");
const team = require("../models/team");
const teamRouter = express.Router();

teamRouter.post("/addmember", addTeamMembers);
teamRouter.get("/getmembers", getTeamMembers);

module.exports = teamRouter;