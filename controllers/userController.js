const { User } = require("../models/users.js");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.JWT_KEY, {
    expiresIn: "7d",
  });
};

const signUp = async (req, res) => {
  const { name, email, password, image } = req.body;
  try {
    if (!name) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter your name",
      });
    } else if (!email) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter your email",
      });
    } else if (!password) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter your password",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter a valid email",
      });
    }
    if (!validator.isURL(image)) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter a valid image url",
      });
    }

    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name: name,
      email: email.toLowerCase(),
      password: hashedPassword,
      image: image,
    });

    if (newUser) {
      const token = createToken(newUser._id);
      return res.status(200).json({
        success: true,
        statusCode: 200,
        msg: "User created successfully",
        data: token,
      });
    }
  } catch (err) {
    console.error("Error during signup:", err);

    return res.status(500).json({
      success: false,
      statusCode: 500,
      msg: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter your email",
      });
    } else if (!password) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter your password",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter a valid email",
      });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Invalid credentials",
      });
    }
    const token = createToken(user._id);
    return res.status(200).json({
      success: true,
      statusCode: 200,
      msg: "Logged in successfully",
      data: { token: token, user: user },
    });
  } catch (err) {
    console.error("Error during login:", err);

    return res.status(500).json({
      success: false,
      statusCode: 500,
      msg: "Internal server error",
    });
  }
};

module.exports = { signUp, login };
