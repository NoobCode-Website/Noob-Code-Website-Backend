const express = require("express");
const app = express();
//const mongoose = require("mongoose");
const connectDB = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("NooCode is ready");
});

//Routers
const eventRouter = require("./routes/eventRouter.js");
const teamRouter = require("./routes/teamRouter.js");
const ambassadorRouter = require("./routes/ambassadorRouter.js");
const authRouter = require("./routes/authRouter.js");

app.use("/events", eventRouter);
app.use("/teams", teamRouter);
app.use("/ambassadors", ambassadorRouter);
app.use("/auth", authRouter);

connectDB();
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
