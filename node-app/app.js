// app.js
const express = require("express");
const app = express();
const port = 1506;

// Define a route
app.get("/hello", (req, res) => {
  res.send("Hello, this is a simple Express app!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
