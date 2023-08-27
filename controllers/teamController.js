const { Team } = require("../models/team");


const addTeamMembers = async (req, res) => {
  try {
    const { image, name, role, linkedin, instagram, github } = req.body;
    if (image === undefined || image === null || image === "") {
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "Image is required",
        });
    } else if (name === undefined || name === null || name === "") {
      return res
        .status(400)
        .json({ success: false, statusCode: 400, message: "Name is required" });
    } else if (role === undefined || role === null || role === "") {
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "Position is required",
        });
    } else if (linkedin === undefined || linkedin === null || linkedin === "") {
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "Linkedin is required",
        });
    } else if (
      instagram === undefined ||
      instagram === null ||
      instagram === ""
    ) {
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "Instagram is required",
        });
    } else if (github === undefined || github === null || github === "") {
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "Github is required",
        });
    }
    else if (tag === undefined || tag === null || tag === "") {
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "Tag is required",
        });
    }
    const newMember = await Team.create({
      image: image,
      name: name,
      role: role,
      linkedin: linkedin,
      instagram: instagram,
      github: github,
      tag: tag,
    });
    const temp = { ...newMember._doc };
    delete temp._id;
    delete temp.__v;
    return res
      .status(200)
      .json({
        success: true,
        statusCode: 200,
        message: "Team member added successfully",
        data: temp,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({
        success: false,
        statusCode: 500,
        message: "Internal server error",
      });
  }
};
const getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find({});
    return res
      .status(200)
      .json({
        success: true,
        statusCode: 200,
        message: "Team members fetched successfully",
        data: members,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({
        success: false,
        statusCode: 500,
        message: "Internal server error",
      });
  }
};
module.exports = { addTeamMembers, getTeamMembers };
