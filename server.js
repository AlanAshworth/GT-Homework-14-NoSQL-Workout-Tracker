const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    { useNewUrlParser: true }
  );

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});