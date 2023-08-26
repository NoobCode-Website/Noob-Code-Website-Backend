const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: "*",
}));

app.all("/", (req, res) => {
    console.log("Just got a request!");
    res.send("Soumyaraj is sexy");
  });

//Routers
const eventRouter= require("./routes/eventRouter");
app.use('/events', eventRouter);




  const mongooseUri = process.env.MONGO_URI; 
  mongoose
    .connect(mongooseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(process.env.PORT || 3000, () => {
        console.log("Your Server is running");
      });
    })
    .catch((error) => {
      console.log("Error connecting to MongoDB:", error);
    });

