// Import necessary modules.
const express = require("express");
const path = require("path");

// Create an Express application.
const app = express();

// Set up the view engine and template directory.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Define a route for the root URL ("/").
app.get("/", (req, res) => {
    // Render the "home.ejs" template when the root URL is accessed.
    res.render("home.ejs");
});

// Define a route for "/hello".
app.get("/hello", (req, res) => {
    // Send the text "helo" as a response when "/hello" is accessed.
    res.send("helo");
});

// Specify the port number for the server.
const port = 8080;

// Start the server and listen on the specified port.
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});