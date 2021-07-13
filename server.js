const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:serum@cluster0.9v0ik.mongodb.net/elections")

app.use("/", require("./routes/candidateRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})