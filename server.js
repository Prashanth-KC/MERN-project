// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
// Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");

// Create an express app
const app = express();

//connect to database
connectToDb();

// Routing
app.get("/", (req, res) => {
    res.json({ hello: "world" });
});

// Start our server
app.listen(process.env.PORT);