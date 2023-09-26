const { Ambassador } = require("../models/ambassador");

const addAmbassadors = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      college,
      year,
      branch,
      linkedin,
      github,
      answer,
      resume,
    } = req.body;
    {
      if (name === undefined || name === null || name === "") {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Name is required",
        });

      } else if (email === undefined || email === null || email === "") {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Email is required",
        });
      } else if (phone === undefined || phone === null || phone === "") {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Phone is required",
        });
      } else if (college === undefined || college === null || college === "") {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "College is required",
        });
      } else if (year === undefined || year === null || year === "") {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Year is required",
        });
      } else if (branch === undefined || branch === null || branch === "") {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Branch is required",
        });
      } else if (
        linkedin === undefined ||
        linkedin === null ||
        linkedin === ""
      ) {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Linkedin is required",
        });
      } else if (github === undefined || github === null || github === "") {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Github is required",
        });
      } else if (answer === undefined || answer === null || answer === "") {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Answer is required",
        });
      } else if (resume === undefined || resume === null || resume === "") {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Resume is required",
        });
      }
      const newAmbassador = await Ambassador.create({
        name: name,
        email: email,
        phone: phone,
        college: college,
        year: year,
        branch: branch,
        linkedin: linkedin,
        github: github,
        answer: answer,
        resume: resume,
      });
      const temp = { ...newAmbassador._doc };
      delete temp.__v;
      delete temp._id;
      return res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Ambassador added successfully",
        data: temp,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal server error",
    });
  }
};

module.exports = {
  addAmbassadors,
};
